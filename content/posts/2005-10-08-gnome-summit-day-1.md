---
title: Gnome Summit Day 1
date: 2005-10-08T20:51:55.000Z
categories:
  - gnome2005
slug: gnome-summit-day-1
---
After a too-short night of sleep, the Gnome Summit got underway this morning. I previously thought PyCon was an unstructured, free form conference. I now realize that these Gnome guys have taken it to a whole new level. The master schedule: a chalk board. Good times.

Today was mostly spent in BOFs and talks, planning hacking for the next two days. A couple cool things that came out of today. First, I met Scott Branson while struggling with the wireless connection on my laptop. I never did get the wireless to come back under Linux, but somehow got Scott interested in the idea of hacking on <span class="caps">CC</span> projects. We talked off and on throughout the day about the potential for a C library that wraps the [web services][1]  and potentially provides offline support. But the real ah-ha came when he came up with the idea of a standardized License Chooser widget for Gnome apps. Just like we have a file chooser dialog/widget, something that developers could just drop into their code (which uses the previously mentioned web service wrapper library) would considerably lower the barrier to entry. By the end of the day Scott was showing me some notes he put together regarding how the library might come together; I’m hoping he’ll put them into [the wiki][2]  so we have some concrete record.

I finally met Luis Villa, the recovering manager, this morning and he graciously spent much of the day finding people and saying “here, this is Nathan, he works for Creative Commons, you should talk to him.” So some of them just said, “ah, hi, nice to meet you… i, uh, need something to drink,” others actually chatted about ways we could integrate <span class="caps">CC</span> into their work. The culmination of this was the Media <span class="caps">BOF</span> which Luis coralled people into this afternoon. The idea was to get people who work on content apps (including F-Spot, Banshee and Totem) in one room to talk about how media integrates with the desktop. Happily for me, it sort of because the “And What About <span class="caps">CC</span>?” <span class="caps">BOF</span>. So there were several things that came out of the hour:

<ul class="simple">
  <li>
    People were interested in determining how <span class="caps">CC</span> metadata should be embedded in file formats. Relaying my conversation from the cc-metadata list, I explained the standard license text (copyright 2004, Nathan Yergler, licensed to the public under <a class="reference external" href="http://example.com/license">http://example.com/license</a>, verify at <a class="reference external" href="http://example.com/verify">http://example.com/verify</a>) and how we currently handle the <span class="caps">MP3</span> situation. Most formats we were talking about (<span class="caps">JPEG</span>, Xiph, <span class="caps">FLAC</span>, etc) have some sort of metadata fields built into the format, usually one specifically for “copyright” or “license.” I don’t think it matters which of those fields it goes in, so long as it’s standard text we can easily parse. So I encouraged the guys to take a look at the files they’re working with, make a decision and let me know. Unless it sounds insane, we’ll publish it as a proposed solution, and the Gnome desktop will be the first implementor.
  </li>
  <li>
    I also heard committments (well, noises in the direction of committment) from Aaron, who’s doing Banshee, to implement <span class="caps">CC</span> notification, and from Larry, who’s doing F-Spot, to implement license choosing in F-Spot. This is very cool, and hopefully we’ll get some hacking on this done in the next couple of days.
  </li>
  <li>
    I was publicly shamed about a bug in <a class="reference external" href="http://yergler.net/projects/mozcc">MozCC</a>, so that’s motivating me to look at it tonite; we’ll see if I can track it down.
  </li>
  <li>
    Additional discussions centered around the discovery of <span class="caps">CC</span> licensed content, so I hope those conversations continue for the remainder of the trip.
  </li>
</ul>

[ I’ve forgotten something here… I’ll update when I remember. ]

So after the day wrapped a group of us went over to Harvard Square for Malaysian food and I had some terrifically yummy mango chicken. Tonite: random hacking, tomorrow: Luis has promised to handcuff me to Larry and lock us in a room until we implement licensing in F-Spot. I like Luis, but if that’s his management style maybe it’s best he stopped (just kidding, Luis).



 [1]: http://api.creativecommons.org
 [2]: http://developer.creativecommons.org
