---
title: Gnome Summit Day 2
date: 2005-10-10T07:57:22.000Z
categories:
  - gnome2005
slug: gnome-summit-day-2
---
Yesterday, the second day of [the summit][1] , was more hacking, less talk. I did sit in on a few BOFs, and managed to get some hacking of my own done. Most of the morning was occupied with hacking. Well, observing others hack. I spent the morning trying to get my laptop’s WiFi connection to come back to life under Linux. HP helpfully supplies a little button on my DV1040 for turning off the wireless radio. While in the Indianapolis airport and having booted into Windows XP, I turned it off to conserve power. This had the unfortunate side effect of having it off by default on boot up, and the button only working under Windows. Sigh. I eventually found some details about `iwconfig` that claimed to let me adjust the radio power. When I tried the command, however, I was informed that it was unsuccessful. Expect that suddenly the wireless connection started working. I’m curious whether it was _really_ unsuccessful and the fact that it works now is just voodoo or if its just incorrect reporting in the software, but frankly I’m too chicken to try and test it — at least while I’m traveling.

While I was working on that, Scott was sitting across from me, working on the low level C wrapper for the web services as a precursor to the license chooser; more on that in a moment. To my right, [Aaron][2]  was working on adding CC support to the tagging libraries used by [Banshee][3] . He made quick progress, so I’m hopeful we’ll see CC support in Banshee soon.

Once I had my laptop up and running again, I did some mozCC hacking before lunch. After lunch I sat in on two BOFs. The first was for ISVs, the second on building a great community web site. The ISV BOF was interesting, although not that applicable to what we’re presently doing. The discussion centered around what the Gnome developers can do to make the platform Gnome more attractive to ISVs, such as VMWare, Sun and IBM. I suppose you could include CC in that list once we start shipping ccPublisher for Linux. If nothing else, it was good to hear about potential troubles and pitfalls in targeting the Gnome/GTK platform.

[Garrett LeSage][4]  led the Community Website BOF, and the discussion there centered on what a project needs to do to have an informative, useful website that not only delivers information efficiently, but also helps buld community. Garrett is the mastermind behind the [Beagle][5] , [Mono][6] , [Hula][7]  and [Banshee][3]  websites, all of which are built on Media Wiki. [wiki.creativecommons.org][8]  is also build on Media Wiki. It’s not as pretty. [Steven Garrity][9]  was also in the session. Steven is the guy behind the new-ish [mozilla.org][10]  visual identity, and responsible for rolling out [DevMo][11] , also on Media Wiki. So overall a really interesting discussion about what it takes to have a good community-oriented website. And it sounds like Garrett and Steven are going to try and compile some of the visual design elements for Media Wiki together with any hacks needed, so that others don’t have to work so hard. I’m hopeful we can learn something from that and make wiki.creativecommons.org look better.

Late in the day I caught up with Scott, or rather he caught up with me, with an update on the low level library. I can only say “it seemed like a good idea at the time.” Scott was smart enough to talk to Aaron and Larry, two app authors who were interested in integrating CC with their apps, to find out how they might want to use such a library. The response was, “uh, we don’t”. And I can’t blame them. According to Scott, neither one was really interested in taking on another shared dependency for a task they could do themselves in a lightweight manner. That makes sense to me, and I can definintely respect their reasoning. So the library is shelved. Now that I think about it, if that’s the case what we need is sample code in lots of languages for using the web services to create a license chooser. Maybe this is the excuse I finally need to look closely at Mono.

Today is supposed to be a hacking day, too. There is a libnotify BOF I want to attend this morning; not that I have a use for libnotify, I’m just interested in it. My goal is to dust off my [Nautilus-CC prototype][12]  and see if I can actually make it usable. I’ve mentioned it to several people this weekend and had uniformly positive responses, so I guess it’s up to me now to really make it happen.



 [1]: http://live.gnome.org/Boston2005
 [2]: http://aaronbock.net/journal/
 [3]: http://banshee-project.org
 [4]: http://garrettlesage.com/
 [5]: http://beaglewiki.org
 [6]: http://mono-project.org
 [7]: http://hula-project.org
 [8]: http://wiki.creativecommons.org
 [9]: http://www.actsofvolition.com/
 [10]: http://mozilla.org
 [11]: http://developer.mozilla.org
 [12]: http://yergler.net/blog/archives/2004/10/27/creative-commons-support-in-gnome
