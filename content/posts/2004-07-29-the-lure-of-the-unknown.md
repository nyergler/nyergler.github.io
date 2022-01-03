---
title: The Lure of the Unknown
date: 2004-07-29T13:13:31.000Z
categories:
  - oscon2004
slug: the-lure-of-the-unknown
---
***Warning:** I just re-read this post and it’s a little rambling…but I’m too tired to re-write it, so take it for what it’s worth.*

I was killing some time Tuesday afternon at OSCON and wandered through the on-site display of books provided by the good folks at [Powell’s][1] . It was there that ran across the dead-tree version of the [Mono: A Developer’s Notebook][2] , and was immediately tempted to buy it. And I have to ask myself, why? Why in god’s name do I need another language, another platform, another technology? What does [Mono][3]  + [GTK#][4]  + [insert Mono-specific-tech] here offer me as a developer that I don’t already get from [Python][5]  + [wxPython][6] ?

<ul class="simple">
  <li>
    Cross-platform? Check.
  </li>
  <li>
    Dynamic? Check.
  </li>
  <li>
    Garbage collected? Check.
  </li>
</ul>

And yet, I’m tempted. I’m tempted because it’s there. I like learning new things, and I like playing with new technologies. I wish that I could play with a technology or product and somehow fit it neatly into my tech-world-view, but that’s not the case. Instead I’m stuck playing with something new or different and then later realizing that it’s no better than what I was using before, so I wind up porting my code back to what I started with because I know that platform/technology/toolkit better.

C# and Java also tempt me for cross-platform reasons (which I’m a sucker for). Yes, you can take a Python program and build a stand-alone application for Win32, Linux and Mac OS X. I’ve [proven][7]  that. And it’s not that ugly. But it does require a “build” process on the front end. As C# and .Net begin to mature, I imagine more systems will ship with support built in. Ditto for Java’s JVM. Well, the JVM is already more mature. So my impression is that the number of system’s the JVM and .Net support is deployed on (without the user even knowing about it) is steadily increasing. This pre-installed “footprint” is appealing because it decreases the amount of work you have to do to deploy your app. Yes, there’s a definite delay between now and when you could count on the dependencies being installed; I don’t have a solution or answer for that. I’m talking about irrational interest, curiosity for it’s own sake here.

So what keeps me from totally buying into Mono/C#? Mac OS X. I have two Mac OS X machines and probably use them for at least 66% of my computing. GTK doesn’t support Mac OS X natively; it works, but requires use of X11. I don’t mind X11, but it’s no solution for end users.

Where am I going with this? Really, I have a point. Yesterday I attended [Miguel deIcaza’s][8]  presentation on Mono 1.0, hoping to answer some of the questions I had about Mono and how I would use (and why I should). Miguel didn’t answer any of my questions directly, but he did mention [Cocoa#][9] , a project to bind the Cocoa libraries to C# (and other CLR languages, I guess). So that’s cool. Of course, I’d prefer it if there were some “compatibility” layer on top of GTK\# and Cocoa#, so that you could write a single bit of GUI code and have it work on any platform. But I digress.

So now we have .Net/Mono, a cross-platform virtual machine which attempts to solve the same problem that Java attempts to: write once, run everywhere. I was already thinking that was something I should check out when I ran across an interesting [item][10]  in this morning’s [Daily Python URL][11] : [IronPython][12]  has been Open Sourced. IronPython is a CLR-targeted Python implementation, written by Jim Hugunin, who was also responsible for the early implementation of Jython. I first ran into IronPython at PyCon, and at the time it was interesting from a research point of view, but the code wasn’t available. With IronPython now available and working (albeit in an alpha state) on both Mono and .Net, I wonder how long it will be until I can create dot-Net (god I hate using that phrase) targeted bundles of CC apps that run on Linux and Win32 equally well?



 [1]: http://http://www.powells.com/technicalbooks
 [2]: http://www.oreilly.com/catalog/monoadn/
 [3]: http://mono-project.com
 [4]: http://gtk-sharp.sourceforge.net/
 [5]: http://python.org
 [6]: http://wxpython.org
 [7]: http://creativecommons.org/weblog/entry/4279
 [8]: http://primates.ximian.com/~miguel/
 [9]: http://forge.novell.com/modules/xfmod/project/?cocoa-sharp
 [10]: http://usefulinc.com/edd/blog/contents/2004/07/29-ironpython/read
 [11]: http://www.pythonware.com/daily
 [12]: http://ironpython.com
