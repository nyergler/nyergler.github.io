---
title: 'Back to the Future: Desktop Applications'
date: 2010-03-30T09:04:03.000Z
categories:
  - development
tags:
  - cc
  - ccpublisher
  - python
slug: back-to-the-future-desktop-applications
---
One of the best prepared talks I saw at PyCon this year was on [Phatch][1] , a cross-platform photo processing application written in Python. Stani Michiels and Nadia Alramli gave a well rehearsed, compelling talk discussing the ins and outs of developing their application for Linux, Mac OS X, and Windows. The [video is available][2]  from the excellent Python MiroCommunity.

The talk reminded of a blog post I saw late last year and never got around to commenting on, [Ruby for Desktop Applications? Yes we can.][3]  Now I’m only a year late in commenting on it. This post caught my eye for two reasons. First, the software they discuss was commissioned by the [AGI Goldratt Institute][4] . I had heard about Goldratt from my father, whose employer, [Trusted Manufacturing][5] , was working on implementing constraints-based manufacturing as a way to reduce costs and distinguish themselves from the rest of the market. More interesting, though, was their discussion of how they built the application, and how it seemed to resonate with some of the work I did in my early days at CC.

Atomic wrote three blog posts (at least that I saw), and the one with the most text (as determined by my highly unscientific “page down” method) was all about how they “rolled” the JRuby application: how they laid out the source tree, how they compile Ruby source into Java JARs, and how they distribute a single JAR file with their application and its dependencies. I thought this was interesting because even though it uses a different language (Python instead of Ruby), GUI framework (wx instead of Swing/Batik), and runtime strategy (bundled interpreter instead of bytecode archive), the thing I spent the most time on when I was developing [CC Publisher][6]  was deployment.

Like Atomic and Phatch, we had a single code base that we wanted to work across the major platforms (Windows, Linux, and Mac OS X in our case). The presentation about Phatch has some great information about making desktop-specific idioms work in Python, so I’ll let them cover that. Packaging and deployment was the biggest challenge, one we never quite got right.

On Windows, we used [py2exe][7]  to bundle our Python runtime with the source code and dependencies. This worked most of the time, unless we forget to specify a sub-package in our manifest, in which case it blew up in amazing and spectacular ways (not really). Like Atomic, we used [NSIS][8]  for the Windows installer portion. On Mac OS X, we used [py2app][9]  to do something similar, and distributed a disk image. On Linux… well, on Linux, we punted. We experimented with a [cx-freeze][10]  and [flirted][11]  with [autopackage][12] . But nothing ever worked quite right [enough], so we would up shipping tarballs.

The really appealing thing about Atomic’s approach is that by using a single JAR, you get to leverage a much bigger ecosystem of tools: the Java community has either solved, or has well defined idioms for, launching Java applications from JARs. You get [launch4j][13]  and [izpack][14] , which look like great additions to a the desktop developer’s toolbox.

For better or for worse, we [Creative Commons] decided CC Publisher wasn’t the best place to put our energy and time. This was probably the right decision, but it was a fun project to work on. (We do have [rebooting CC Publisher][15]  listed as a [suggested project][16]  for [Google Summer of Code][17] , if someone else is interested in helping out.) Given the maturity of Java’s desktop tool chain, and the vast improvements in [Jython][18]  over the past year or two, I can imagine considering an approach very much like Atomic’s were I working on it today. Even though it seems like the majority of people’s attention is on web applications these days, I like seeing examples of interesting desktop applications being built with dynamic languages.



 [1]: http://photobatch.stani.be/
 [2]: http://python.mirocommunity.org/video/1595/pycon-2010-cross-platform-appl
 [3]: http://spin.atomicobject.com/2009/01/30/ruby-for-desktop-applications-yes-we-can
 [4]: http://www.goldratt.com/
 [5]: http://trustedmfg.com/
 [6]: http://wiki.creativecommons.org/CC_Publisher
 [7]: http://www.py2exe.org/
 [8]: http://nsis.sourceforge.net/
 [9]: http://svn.pythonmac.org/py2app/py2app/trunk/doc/index.html
 [10]: http://cx-freeze.sourceforge.net/
 [11]: http://yergler.net/blog/2005/08/17/packaging-applications-for-linux-with-autopackage/
 [12]: http://autopackage.org/
 [13]: http://launch4j.sourceforge.net/
 [14]: http://izpack.org/
 [15]: http://wiki.creativecommons.org/CC_Publisher_Refresh_and_Update
 [16]: http://wiki.creativecommons.org/Developer_Challenges
 [17]: http://socghop.appspot.com/gsoc/org/show/google/gsoc2010/creativecommons
 [18]: http://jython.org/
