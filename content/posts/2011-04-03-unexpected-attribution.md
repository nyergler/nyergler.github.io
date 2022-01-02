---
title: Unexpected Attribution
date: 2011-04-03T10:53:00.000Z
categories:
  - mozCC
tags:
  - fennec
  - firefox
  - mozcc
  - OpenAttribute
slug: unexpected-attribution
---
I’m working on adding support for [Firefox Mobile][1]  to [OpenAttribute][2]  this weekend. I’d hoped to get that done in time for the official launch, but, well, [things have been a little busy][3] . Firefox Mobile (Fennec) uses [Electrolysis][4] , a multi-process architecture that’s a little different from what I’m used to. Looking at the documentation and APIs, it actually looks a little closer to Chrome’s extension architecture. I was looking at [tutorial videos][5]  yesterday, and downloaded Mark Finkle’s [boilerplate addon][6]  to get a better look at the overlays.

As I explored the boilerplate, I opened the build script. Imagine my surprise when I read this comment at the top of the script:

<pre class="literal-block">#!/bin/bash
# build.sh -- builds JAR and XPI files for mozilla extensions
#   by Nickolay Ponomarev &lt;asqueella&#64;gmail.com&gt;
#   (original version based on Nathan Yergler's build script)
# Most recent version is at &lt;http://kb.mozillazine.org/Bash_build_script&gt;``
</pre>

I have to assume this is based on the build script I developed for MozCC in 2004. I doubt anything from the original still survives (or at least I hope not), but appreciate the credit.



 [1]: https://www.mozilla.com/en-US/mobile/
 [2]: http://openattribute.com/
 [3]: https://identi.ca/notice/68556261
 [4]: https://wiki.mozilla.org/Mobile/Fennec/Extensions/Electrolysis
 [5]: https://people.mozilla.com/~mfinkle/tutorials/
 [6]: https://people.mozilla.com/~mfinkle/tutorials/blank-addon.zip
