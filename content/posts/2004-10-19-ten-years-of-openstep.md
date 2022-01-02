---
title: Ten Years of OpenStep
date: 2004-10-19T11:04:45.000Z
categories:
  - geek
slug: ten-years-of-openstep
---
[Slashdot][1]  [reports][2]  that today is the 10th anniversary of OpenStep, the <span class="caps">NEXT</span>/Sun <span class="caps">API</span> that now forms the basis of Apple’s Cocoa and [GnuStep][3] . Over the past couple of weeks I’ve poked around at Cocoa, [XCode][4]  and Objective C, even breaking down and buying Aaron Hillegass’s book [Cocoa Programming for Mac <span class="caps">OS</span> X][5] . I’m actually quite impressed with Objective C and Apple’s developer tools. While [Interface Builder][6]  was a bit of a mystery to me initially (“outlets? actions? what the fuck?”), reading the [Cocoa tutorials][7]  on Apple’s developer site cleared up some of the confusion. But I’m not sold (what follows is my own opinion, and as such should be taken with a large crystaline solid composed of sodium chloride molecules).

Without a doubt, Cocoa is a truly object oriented programming environment that encourages well behaved programs in a much better way than Java ever has. Where Java encourages strong typing and object-orientation (except when it doesn’t; **cough**, primitives, **cough**), Objective-C (or more accurately, Objective-C along with Cocoa and Apple’s developer tools) encourages a model-view-controller (<span class="caps">MVC</span>) design pattern and works to minimize the amount of effort you as a programmer have to do to accomplish the task at hand. When I figured out just how outlets and actions work, it was the proverbial lightbulb; “you mean that’s it?” And [PyObjC][8]  works just as advertised, seamlessly fusing this convenience with everyone’s favorite language, Python.

So why am I forcing myself to stay away from Objective C, XCode and Interface Builder? Portability. I’m paid to write software that runs on multiple platforms; at least Windows and Mac <span class="caps">OS</span> X. And I run Linux at home. The attractiveness of Python (and Java, I suppose) is its cross-platform nature. Writing a single code base that runs on 3 platforms equally well isn’t always easy, but I think it’s worth the effort in maintenance time saved. As much as I enjoy using Mac <span class="caps">OS</span> X, I don’t want to be enslaved to it. In fact, I recently installed Linux on my iBook, just for kicks. I might go back, but because I value portability, I have that option.

OpenStep and GNUStep do not ignore portability. The original Next toolkit was available for multiple platforms, and promoted the idea of fat binaries. Fat binaries were the precursor to today’s Mac <span class="caps">OS</span> X .app folders: a set directory structure containing compiled binaries for multiple platforms (and architectures). True write once, run anywhere. Unfortunately, Apple seems to have decided fat binaries needed a diet and only supports the “MacOS” target. This is actually an understandable position from a marketing perspective. Apple is a hardware vendor, and Mac <span class="caps">OS</span> X (and Cocoa along with it) are strategic advantages for their hardware. Allowing true fat binaries that ran on Windows, Mac <span class="caps">OS</span> X and Linux would undermine that advantage.

Today GNUStep is the best hope for reviving this portable vision. Their <span class="caps">XML</span>-based <span class="caps">UI</span> project, [Renaissance][9] , looks promising, and they have an “experimental” [Windows distribution][10] . Unfortunately the Windows binaries don’t include their developer tools such as [<span class="caps">GORM</span>][11]  and [Project Center][12] , so it’s impossible to know just how well the <span class="caps">UI</span> really works on the Windows platform.

Increasing the number of cross-platform development tools, toolkits and languages is in everyone’s best interest. [Eclipse][13]  has demonstrated the usefulness of cross-platform Java development tools and native-look widget toolkits. [wxPython][14]  continues to lead the way on the Python platform. Increased competition not only gives developers more choices, it exposes different ways of thinking about problems and the solutions. And ultimately, the freedom to choose the correct solution platform for the problem is the developer’s “Freedom Zero.”



 [1]: http://slashdot.org
 [2]: http://developers.slashdot.org/developers/04/10/19/130243.shtml?tid=117&tid=156&tid=8
 [3]: http://gnustep.org
 [4]: http://developer.apple.com/tools/xcode/
 [5]: http://www.bignerdranch.com/products/cocoa1.shtml
 [6]: http://developer.apple.com/tools/interfacebuilder/
 [7]: http://developer.apple.com/documentation/DeveloperTools/Conceptual/XcodeQuickTour/qt_interfaces/chapter_4_section_1.html#//apple_ref/doc/uid/TP30000890-CH206
 [8]: http://pyobjc.sourceforge.net
 [9]: http://www.gnustep.it/Renaissance/
 [10]: ftp://ftp.gnustep.org/pub/gnustep/binaries/windows
 [11]: http://www.gnustep.org/experience/Gorm.html
 [12]: http://www.gnustep.org/experience/ProjectCenter.html
 [13]: http://eclipse.org
 [14]: http://wxpython.org
