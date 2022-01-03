---
title: Filing Mail in Thunderbird
date: 2003-12-14T22:38:15.000Z
categories:
  - development
  - quickfile
---
I read about [Mark Shuttleworth’s][1]  [Open Source bounties][2]  on Mozillazine a couple weeks ago. What was the most interesting to me was the fact that he focuses on three areas I’m really interested in: [Python][3] , [Mozilla][4]  and Education Technology (SchoolTool is what he’s sponsoring; Stoa is what I hack on).

So during some of the time I should have been studying for finals this weekend I put together a prototype inspired by one of his requests. [|image0|][5]  Mark makes an excellent point: it’s ridiculously hard to file mail in Thunderbird (and probably Mozilla Mail; I just don’t have much experience with it). So I’ve put together QuickFile.

QuickFile is an extension for Mozilla Thunderbird which is aimed at making it easier to file messages. Right now the operation is pretty simple: select the message you want to file and press meta-Q (currently hard-coded; sorry). This opens the QuickFile dialog, which shows a list of your mail folders. You can start typing, and it will match as you type. Pressing Tab will expand the currently selected item (if possible), and pressing Enter will move the messages to the selected folder.

You can install it by first saving [quickfile.xpi][6]  to your computer. Then in Thunderbird, go to Preferences/Options, select Extensions and click “Install New Extension.” Select the XPI file, and it will prompt you to confirm installation. Note that this has only been tested with Thunderbird 0.4 on Mac OS X and Linux, so if it eats your profile/mail/puppy, that’ll really suck.

While this is just a “first draft” I think I can build onto it in some interesting ways. I want to add a customizable hot key, the ability to assign hot keys to specific folders, and “predictive” (Bayesian) folder selection, as Mark describes.

Anyway, try it out, let me know what you think. I really enjoy getting feedback, whether it’s critical or positive. Enjoy.


 [1]: http://markshuttleworth.com
 [2]: http://markshuttleworth.com/bounty.html
 [3]: http://python.org
 [4]: http://mozilla.org
 [5]: http://www.yergler.net/averages/archives/images/ss1.
 [6]: http://yergler.net/projects/quickfile/releases/quickfile-0.0.1.xpi
