---
title: Because I Need Another T-Shirt
date: 2004-06-11T15:09:33.000Z
categories:
  - ccSaver
  - development
slug: because-i-need-another-t-shirt
---
I don’t usually like Java. In fact, I found myself dreading projects for my Data Structures class last semester, which was taught in Java. Wasn’t Java supposed to free us from that sort of mundane effort? Never mind. And while I “just know” that Python is better, I can’t help but feel I should like Java on some level. I mean, two of Python’s great strengths, in my opinion, is the large standard library and vocally supportive developer community. By that standard, I should like Java as well. But I’ve never really warmed to it.

So when I read on Slashdot earlier this week that Sun had released the [<span class="caps">JDIC</span>][1]  (Java Desktop Integration Components) under the [<span class="caps">LGPL</span>][2] , my interested was piqued. First, while I don’t necessarily love programming in Java, I’m always interested in hearing about advancements in integration. In the process of performing tech support for a school, I’ve heard numerous complaints (mostly valid) about the lack of integration in software. The fact is that users shouldn’t need to know about file types, associations or inter-application communication. It should just work. I was also interested in <span class="caps">JDIC</span> because I was amazed that Sun was actually using the <span class="caps">LGPL</span>. Now don’t get me wrong: I think any [<span class="caps">OSI</span>][3]  license is better than closed source, but I think that too often corporations try to get the Open Source religion by developing their own licenses which are really designed to control rather than grant freedoms. And when it comes to granting freedoms, I think an argument could be made that the <span class="caps">LGPL</span> actually grants **more** freedom than the [<span class="caps">GPL</span>][4] . But that’s not the argument I’m making now.

So as I browsed the <span class="caps">JDIC</span> and accompanying [Screensavers][5]  projects on [java.net][6] , I noticed that they’re having a contest. Well, not really even a contest, but rather a give-away. T-shirts. The universal geek schwag that brings developers running. The criteria? Write a screensaver using the new <span class="caps">JDIC</span> components and Saverbeans <span class="caps">SDK</span>. <span class="caps">OK</span>, I’m game. Anything to blow off work for a while. And so I did.

The result is [ccSaver][7] , a simple slideshow which retrieves random, Creative Commons licensed images from [OpenPhoto][8]  and displays them, slide-show style. I know it’s nothing groundbreaking, but it’s been sort of fun to hack together. First, it gave me an excuse to use [Eclipse][9] , which is one of my favorite Open Source tools (even if it doesn’t have decent Python support yet). Second, I was able to brush up my Java chops in a variety of areas I hadn’t used it before (network file retrieval, instance based type checking, etc). Finally, I got to try out [Ant][10] . Ant is one of those tools you hear lots of buzz about, but don’t really appreciate until you see it in action. Better than <tt class="docutils literal">Makefiles</tt>? You betcha’.

So with three reasons it was fun, what’s the result? An oddly voyeuristic look into other people’s lives. I’ve actually been running it in a debug window for a while, wondering just what inspired people to take some of these pictures, and just what was going on at that moment.

Between writing the screensaver and seeing my own, standard screen saver, [Electric Sheep][11] , I’ve begun thinking about other possible “features”. What about a screensaver that “creates” derivative works from <span class="caps">CC</span> licensed images? Or distributed derivative works? Or some sort of distributed feedback mechanism for choosing the derivative algorithms? I don’t have time to devote to exploring these questions now, but in the meantime, download ccSaver and let me know what you think (Win32 and Linux only; sorry).



 [1]: https://jdic.dev.java.net/
 [2]: http://www.gnu.org/licenses/licenses.html#LGPL
 [3]: http://opensource.org
 [4]: http://www.gnu.org/licenses/licenses.html#GPL
 [5]: https://screensavers.dev.java.net/
 [6]: http://java.net
 [7]: http://yergler.net/projects/ccsaver
 [8]: http://openphoto.net
 [9]: http://eclipse.org
 [10]: http://ant.apache.org/
 [11]: http://electricsheep.org/
