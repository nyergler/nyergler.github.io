---
title: 'PyCon Keynote: Ivan Krstic'
date: 2007-02-23T12:03:41.000Z
categories:
  - pycon2007
slug: pycon-keynote-ivan-krstic
---
I finally made it to the conference hotel this morning at 4AM. I expected to arrive around midnight. Five minutes before we started boarding in San Francisco, our plane was pulled from service due to infestation. Gross. So two hours later we finally boarded, and after sitting on the tarmac for another 40 minutes, we finally took off. Half an hour for luggage, and hour to get my rental car, and then the drive to the hotel (did I mention I had to blow a toll because I only had $20s, and the promised bill changer apparently only does $1s and $5s?). And its 4AM.

So this morning after what can really only be called a nap, and a big-ass cup of coffee, I’m in the first keynote at PyCon. The speaker is Ivan Krstic[1]_, from the [OLPC][1]  (One Laptop Per Child) project. If I wasn’t convinced that the OLPC is cool before, I am now.

Let’s assume for a moment that OLPC is a miserable failure at its primary goal of creating a learning machine for children. Even then, after hearing Ivan speak about the technology that’s been developed to support the project, it sounds like a success to me. Some highlights:

<ul class="simple">
  <li>
    A dual-mode display that works in either black and white, low power, reflective mode, or a medium-resolution, color backlit mode. And you can switch between the two.
  </li>
  <li>
    A touch pad that’s both capacitive and resistive. Since I didn’t know exactly what that meant myself, I’ll share what Ivan demonstrated. It’s a three-panel touch pad that stretches the width of the laptop. The center section is capacitive, like the touch pads you’re used to. You put your finger on it and the pointer moves. But the <strong>entire</strong> pad can operate in resistive mode, which means you can grab a stylus, a stick, or any sharp, pointy object and use it like a mini-tablet. Darn cool.
  </li>
  <li>
    Experimentation with battery chemistry. Chemistry was my nemesis in college, so I promptly blocked out the checmical formula. But Ivan passed around two batteries with the same capacity. One a traditional NiMH, and the other Super-Duper-OLPC. The weight difference was really amazing. Apparently it also runs cooler than the NiMH.
  </li>
</ul>

So while all of that is really darn cool, you might wonder why Ivan was invited to keynote at PyCon, which is, afterall, the [Python][2]  conference. [Sugar][3] , the OLPC user interface model, is written in Python. In fact, as Ivan describes it, the OLPC is rife with Python. Non-Python components consist of X11, the kernel and the sound driver. The **file system** is written in Python as an object-store of sorts, and therefore supports things like n-way syncing, versioning, deltas, compresion and metadata tracking.

In addition to talking about the technology developed for the OLPC and the use of Python in OLPC, Ivan spoke about the state of software development today. In particular, he lamented the fact that coding small does not seem to be a priority anymore. Ivan gave the example of an anonymous CD-burning package for Windows. When he recently recommended it to a friend recently, he found that it had grown by an order of magnitude from about a 40 Megabyte download to a 400 Megabyte download. And just what has changed so dramatically in the world of CD burning in that time period?

Ivan’s solution to this epidemic of growth is something near and dear to my own heart: plugins. He posed the question, why aren’t we building decomposable software that can be extended via plugins or extensions? Using the CD burning example again, if there is some crazy huge feature that 5% of the population will use, why not decompose it so that those users can download it as a plugin[2]_? As Ivan put it, “plugins are the new #ifdef.”

---



 [1]: http://laptop.org
 [2]: http://python.org
 [3]: http://wiki.laptop.org/go/Sugar
