---
title: Fonts and Planning with Emacs 23
date: 2006-12-18T08:50:43.000Z
categories:
  - geek
slug: fonts-and-planning-with-emacs-23
---
Lately I’ve become enamoured with Emacs [planner-mode][1]  which allows me to use Emacs to maintain task lists and schedule information in a psuedo-wiki-like environment (courtesy of [Emacs Muse][2] ). In particular I’ve been using the <tt class="docutils literal"><span class="pre">planner-timeclock</span></tt> to track what projects get my attention and when. Of course its not 100% accurate — I still often forget to “clock in” when starting to work on something — but I think I’ll be able to get some useful information from it.

This weekend, however, I managed to screw up the fonts in Emacs. They were never great, but I’d managed to get them to a state where they didn’t kill my eyes or take up half the screen. As I started to poke at the problem this morning, I ran across the [prospect][3]  of using Emacs with <span class="caps">XFT</span> fonts. More poking and I found a [source for .debs][4]  of updated <tt class="docutils literal"><span class="pre">emacs-snapshot</span></tt> packages. Your mileage may vary, but I found, like other people in the comments thread, that the **dapper** packages actually work better on Edgy than the **edgy** ones. So after installing the packages I had lovely anti-aliased font support, but alas, planner-mode broke. So to save anyone else in this situation (ha!) some grief, you need to grab planner and muse from source when using them with **Emacs 23** on Ubuntu 6.10. The “latest” tarball links in the Emacs Wiki work.



 [1]: http://www.emacswiki.org/cgi-bin/wiki/PlannerMode
 [2]: http://www.emacswiki.org/cgi-bin/wiki/EmacsMuse
 [3]: http://times.usefulinc.com/2005/12/02-emacs-xft
 [4]: http://g33k.wordpress.com/2006/11/06/gnu-emacs-with-xft-goodness/
