---
title: Unicode output from Zope 3
date: 2008-07-19T12:57:33.000Z
categories:
  - CC
  - development
tags:
  - cc
  - development
  - license engine
  - python
  - zope
slug: unicode-output-from-zope-3
---
The Creative Commons licene engine has gone through several iterations, the most recent being a Zope 3 / Grok application. This has actually been a great implementation for us[1]_, but since the day it was deployed there’s been a warning in ``README.txt` <[http://code.creativecommons.org/svnroot/cc.engine/trunk/README.txt][1] >\`_:

<pre class="literal-block">If you get a UnicodeDecodeError from the cc.engine (you’ll see this if it’srunning in the foreground) when you try to access the http://host:9080/license/then it’s likely that the install of python you are using is set to use ASCIIas it’s default output.  You can change this to UTF-8 by creating the file/usr/lib/python&lt;version&gt;/sitecustomize.py and adding these lines:

  import sys
  sys.setdefaultencoding(“utf-8”)
</pre>

This always struck me as a bit inelegant — having to muck with something outside my application directory. After all, this belief that the application should be self-contained is the reason I use [zc.buildout][2]  and share Jim’s belief in the evil of the system Python. Like a lot of inelegant things, though, it never rose quite to the level of annoyance needed to motivate me to _do it right_.

Today I was working on moving the license engine to a different server[2]_ and ran into this problem again. I decided to dig in and see if I could track it down. In fact I did track down the initial problem — I was [making a comparison][3]  between an encoded Unicode string and without specifying an explicit codec to use for the decode. Unfortunately once I fixed that I found it was [turtles all the way down][4] .

Turns out the default Zope 3 page template machinery uses ``StringIO` <<http://www.python.org/doc/lib/module-StringIO.html> >\`_ to collect the output. `StringIO` uses, uh, strings — strings with the default system encoding. Reading the module documentation, it would appear that mixing String and Unicode input in your StringIO will cause this sort of issue.

Andres suggested marking my templates as UTF-8 XML using something like:

<pre class="literal-block">&lt; ?xml version="1.0" encoding="UTF-8" ?&gt;
</pre>

but even after doing this and fixing the resulting entity errors, there’s still obviously some 8 bit Strings leaking into the output. In conversations on IRC the question was then asked: “is there a reason you don’t want a reasonable system wide encoding if your locale can support it?”

I guess not[3]_.

**UPDATE** Martijn has a tangentially related [post][5]  which sheds some light on why Python does/should ship with `ascii` as the default codec. At least people smarter than me have problems with this sort of thing, too.

---



 [1]: http://code.creativecommons.org/svnroot/cc.engine/trunk/README.txt
 [2]: http://pypi.python.org/zc.buildout
 [3]: http://code.creativecommons.org/viewsvn?view=rev&revision=10535
 [4]: http://en.wikipedia.org/wiki/Turtles_all_the_way_down
 [5]: http://faassen.n--tree.net/blog/view/weblog/2005/08/02/0
