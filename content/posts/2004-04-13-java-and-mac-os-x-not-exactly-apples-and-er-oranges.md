---
title: >-
  Java and Mac OS X: not exactly Apples and, er,
  Oranges
date: 2004-04-13T10:07:26.000Z
categories:
  - geek
slug: java-and-mac-os-x-not-exactly-apples-and-er-oranges
---
In response to the ever-growing debate about Java and whether it should be open sourced, [Newsforge][1]  is running a pair of “point, counter point” articles. Well, not exactly. The [boring one][2]  is a JavaLobby position piece (or so it seems). The [more interesting one][3]  is penned by [RMS][4] , and questions how free software can really be if it relies on (nay, requires) non-free dependencies such as the Sun of IBM JRE. I don’t always agree with RMS. In fact, it’s possible I disagree with him more often than not. However, in this situation he does an excellent job of articulating something that’s been bouncing around in my head lately. But not about Java. One of the more interesting session at [PyCon][5]  was Bob Ippolito’s [60 minutes of MacPython][6] . I attended because I love the Mac OS X interface, and I definitly feel more productive and “at home” on Mac OS X than on any Win32 interface. During his presentation Bob talked about the different GUI toolkits available for Python on Mac OS X. These included Tkinter, [PyObj-C][7] , and [wxPython][8] . Of all these, Bob’s recommendation was PyObj-C. When asked by an audience member which he would recommend for building cross-platform interfaces, Bob responded (wrongly, in my opinion) that the Mac OS X interface has unique paradigms that don’t translate well to other platforms, and therefore you should use PyObj-C for Mac OS X and something else for any other [inferior] platform you might want to support. I paraphrasing, but I think I’ve got it mostly right. This is where RMS’s argument about Java comes in.

If I want to write Free Software (and I do) and I want to to run on any machine I use (and I do), then I have to support Win32, Mac OS X and Linux. And writing two (or three!) GUIs isn’t going to work. I don’t have that kind of time. Would my interface be better if I wrote it for each platform individually? Possibly. But I don’t think that it’s a certainty that those “unique paradigms” would translate directly into increased usability. Additionally, as RMS points out, can I call my software Free if it relies on a non-Free kernel or operating system?

After seeing Bob’s demonstration of PyObj-C, I’m impressed. It’s obviously powerful and I can’t argue that the ability to use Apple’s development tools is a real boost. The website mentions that many of the unit tests pass on [GNUstep][9] , but Bob was frank in admitting that it’s not presently possible to just recompile for GNUstep and have your app work as expected. When that happens, maybe PyObj-C and GNUstep, _together_, will unseat wxPython as my GUI toolkit of choice.



 [1]: http://newsforge.com
 [2]: http://programming.newsforge.com/programming/04/04/08/0524247.shtml?tid=54
 [3]: http://programming.newsforge.com/programming/04/04/07/2021242.shtml
 [4]: http://www.stallman.org/
 [5]: http://pycon.org
 [6]: http://www.python.org/pycon/dc2004/papers/32/
 [7]: http://pyobjc.sourceforge.net/
 [8]: http://wxpython.org
 [9]: http://gnustep.org
