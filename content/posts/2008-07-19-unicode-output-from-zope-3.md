---
title: 'Unicode output from Zope 3'
author: Nathan Yergler
type: post
date: 2008-07-19T12:57:33+00:00
excerpt: |
  <p>The Creative Commons licene engine has gone through several iterations,
  the most recent being a Zope 3 / Grok application. This has actually
  been a great implementation for
  us[1]_, but since the
  day it was deployed there’s been a warning in
  <tt class="docutils literal">`<span class="caps">README</span>.txt</tt> &lt;<a class="reference external" href="http://code.creativecommons.org/svnroot/cc.engine/trunk/README.txt">http://code.creativecommons.org/svnroot ...</a></p>
url: /2008/07/19/unicode-output-from-zope-3/
categories:
  - CC
  - development
tags:
  - cc
  - development
  - license engine
  - python
  - zope

---
The Creative Commons licene engine has gone through several iterations, the most recent being a Zope 3 / Grok application. This has actually been a great implementation for us[1]_, but since the day it was deployed there’s been a warning in <tt class="docutils literal">`<span class="caps">README</span>.txt</tt> <[http://code.creativecommons.org/svnroot/cc.engine/trunk/<span class="caps">README</span>.txt][1] >\`_:

<pre class="literal-block">If you get a UnicodeDecodeError from the cc.engine (you’ll see this if it’srunning in the foreground) when you try to access the http://host:9080/license/then it’s likely that the install of python you are using is set to use ASCIIas it’s default output.  You can change this to UTF-8 by creating the file/usr/lib/python&lt;version&gt;/sitecustomize.py and adding these lines:

  import sys
  sys.setdefaultencoding(“utf-8”)
</pre>

This always struck me as a bit inelegant — having to muck with something outside my application directory. After all, this belief that the application should be self-contained is the reason I use [zc.buildout][2]  and share Jim’s belief in the evil of the system Python. Like a lot of inelegant things, though, it never rose quite to the level of annoyance needed to motivate me to _do it right_.

Today I was working on moving the license engine to a different server[2]_ and ran into this problem again. I decided to dig in and see if I could track it down. In fact I did track down the initial problem — I was [making a comparison][3]  between an encoded Unicode string and without specifying an explicit codec to use for the decode. Unfortunately once I fixed that I found it was [turtles all the way down][4] .

Turns out the default Zope 3 page template machinery uses <tt class="docutils literal">`StringIO</tt> <<http://www.python.org/doc/lib/module-StringIO.html> >\`_ to collect the output. <tt class="docutils literal">StringIO</tt> uses, uh, strings — strings with the default system encoding. Reading the module documentation, it would appear that mixing String and Unicode input in your StringIO will cause this sort of issue.

Andres suggested marking my templates as <span class="caps">UTF</span>-8 <span class="caps">XML</span> using something like:

<pre class="literal-block">&lt; ?xml version="1.0" encoding="UTF-8" ?&gt;
</pre>

but even after doing this and fixing the resulting entity errors, there’s still obviously some 8 bit Strings leaking into the output. In conversations on <span class="caps">IRC</span> the question was then asked: “is there a reason you don’t want a reasonable system wide encoding if your locale can support it?”

I guess not[3]_.

**<span class="caps">UPDATE</span>** Martijn has a tangentially related [post][5]  which sheds some light on why Python does/should ship with <tt class="docutils literal">ascii</tt> as the default codec. At least people smarter than me have problems with this sort of thing, too.

<hr class="docutils" />

<table class="docutils footnote" frame="void" id="id1" rules="none">
  <colgroup><col class="label" /><col /></colgroup> <tr>
    <td class="label">
      [1]
    </td>

    <td>
      Yes, I may be a bit biased — I wrote the Zope3/Grok implementation. Of course, I wrote the previous implementation, too, and I can say without a doubt it was… <em>“sub-optimal”</em>.
    </td>
  </tr>
</table>

<table class="docutils footnote" frame="void" id="id2" rules="none">
  <colgroup><col class="label" /><col /></colgroup> <tr>
    <td class="label">
      [2]
    </td>

    <td>
      We’re doing a lot of shuffling lately to complete a 32 to 64 bit conversion; see the <a class="reference external" href="http://labs.creativecommons.org/2008/07/15/32-to-64bit-remotely/"><span class="caps">CC</span> Labs blog post</a> for the harrowing details.
    </td>
  </tr>
</table>

<table class="docutils footnote" frame="void" id="id3" rules="none">
  <colgroup><col class="label" /><col /></colgroup> <tr>
    <td class="label">
      [3]
    </td>

    <td>
      So the warning remains.
    </td>
  </tr>
</table>

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2008-07-19 12:57:33
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      563
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      layout:
    </th>

    <td class="field-body">
      post
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      slug:
    </th>

    <td class="field-body">
      unicode-output-from-zope-3
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      comments:
    </th>

    <td class="field-body">
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      category:
    </th>

    <td class="field-body">
      cc, development
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      tags:
    </th>

    <td class="field-body">
      cc, development, license engine, python, zope
    </td>
  </tr>
</table>

 [1]: http://code.creativecommons.org/svnroot/cc.engine/trunk/README.txt
 [2]: http://pypi.python.org/zc.buildout
 [3]: http://code.creativecommons.org/viewsvn?view=rev&revision=10535
 [4]: http://en.wikipedia.org/wiki/Turtles_all_the_way_down
 [5]: http://faassen.n--tree.net/blog/view/weblog/2005/08/02/0