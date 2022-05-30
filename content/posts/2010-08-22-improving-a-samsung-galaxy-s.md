---
title: Improving a Samsung Galaxy S
date: 2010-08-22T14:45:51.000Z
categories:
  - geek
tags:
  - android
  - cyanogen
  - galaxy s
  - samsung
  - vibrant
slug: improving-a-samsung-galaxy-s
---
I stood in line almost two years ago for the G1. And earlier this year I finally got around to rooting it and experimenting with custom ROMs. The G1 served me well for a long time, but last month I decided it was time for an upgrade, and picked up the “Samsung Vibrant”, T-Mobile’s version of the Galaxy S.

I love the display on the Vibrant, but Samsung’s custom skin — TouchWiz, or “iPhone for Android”, as I think of it — leaves a lot to be desired. AWN.Launcher goes a long way, but the presence of an icon to watch the included version of _Avatar_ — an icon you can’t remove — continued to gall me every time I opened the application list<sup>†</sup>. The real problem, though, is the lag issue. According to the specifications, there’s no reason this phone shouldn’t hum along without complaint. But I was consistently seeing lags, pauses, and stutters when opening or switching applications. Samsung’s [“online support”][1]  wasn’t exactly helpful — [“why don’t you wipe the phone clean?”][2]  Ridiculous.

Ridiculous, yes, but that _is_ what I did yesterday afternoon. Of course, I wiped it in preparation for rooting, applying a “lag fix”, and generally ripping pieces out. While there’s not a Cyanogen ROM for the Galaxy S yet, the community has been industrious. In the end I followed a couple of different guides on the path to fixing my phone:

<ol class="arabic simple">
  <li>
    I rooted the phone using the<a class="reference external" href="http://wiki.cyanogenmod.com/index.php?title=Full_Update_Guide_-_Samsung_Galaxy_S_%28Vibrant%29#Rooting_the_Samsung_Vibrant">instructions in the Cyanogen wiki</a>
  </li>
  <li>
    I followed most of the “How to make the Vibrant software not suck” <a class="reference external" href="http://forum.cyanogenmod.com/topic/4055-howto-make-the-vibrant-software-not-suck/">tutorial</a> (in a slightly different order — I rooted and installed Clockwork Mod Recovery first). This included fixing GPS. (Guess I won’t have to wait until <a class="reference external" href="https://twitter.com/GalaxySsupport/status/21597744014">September</a> to use Maps effectively.)
  </li>
  <li>
    I applied <a class="reference external" href="http://forum.xda-developers.com/showthread.php?t=751864">this experimental lag fix</a> (more on that below).
  </li>
  <li>
    I <a class="reference external" href="http://forum.xda-developers.com/showthread.php?t=712546">ripped out lots of the bundled crap</a>, including Telenav, Avatar, Layar, and the TouchWiz widgets<sup>‡</sup>
  </li>
  <li>
    I installed the Desk Clock, Calendar, and Music applications <a class="reference external" href="http://forum.xda-developers.com/showpost.php?p=7489494&postcount=69">from the Nexus One</a>. As someone pointed out, the included Desk Clock doesn’t even have a <em>clock</em>. And the bundled Calendar is just a little to, uh, vibrant for my taste.
  </li>
</ol>

So far everything seems to be working fine. The lag fix, in particular, makes the phone seem to live up to its promise. According to [the xda forums][3] , it would appear that the issue has to do with the filesystem Samsung is using for the internal storage, RFS. In particular the fact that it doesn’t do write buffering. The fix creates an EXT-2 formatted loopback device and moves much of the important bits onto it. With all the caveats about benchmarks, [Quadrant][4]  showed nearly a 3 times improvement in performance, and it feels like it, too.

Thanks to [@GalaxySsupport][1]  for suggesting I wipe the phone: it was indeed the first step to massive improvements. And while I may no longer have a warranty, I now have a phone that works great.

---

<sup>†</sup> The funny thing about that icon is that it’s apparently just a symlink to the included microSD card; replace the card with a larger one (like I did), and the icon just pops up a “file not found” message when you click it.

<sup>‡</sup> Samsung should be particularly embarrassed by the TouchWiz Dual Clock widget. Yes, you can show two clocks. And yes, even though you tell it what time zone to display (and it knows the date), you have to manually adjust for Daylight Saving Time. Do I have to wind it daily, too?



 [1]: https://twitter.com/GalaxySsupport
 [2]: https://twitter.com/GalaxySsupport/status/21602689488
 [3]: http://forum.xda-developers.com/showpost.php?p=7620940&postcount=2
 [4]: http://androidandme.com/2010/05/news/high-end-android-phones-benchmarked-with-quadrant/
