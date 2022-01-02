---
title: ccPublisher Updated
date: 2004-12-06T15:01:24.000Z
categories:
  - development
slug: ccpublisher-updated
---
So we’re continuing to press on toward 1.0 with ccPublisher. This weekend (Friday evening, actually), I released 0.9.11, which like the past few is mostly a bug fix release. The one notable exception is the addition of some code which allows the app to phone home in the event of an uncaught exception. I thought I was fairly careful with the exception handling, but a few weeks of real world use have proven that you can’t anticipate everything. The code is based on a [module][1]  I [blogged about][2]  a while back. Patrick of EgoFile fame did all the hard work, providing a amazingly simple way to handle uncaught exceptions.

I modified it slightly, and put together my own backend script to handle the input. The script, [traceback.py][3] , serves as a least-effort implementation of a backend script. Right now it just emails me all the variables passed in the form. I’d like to add some intelligence, and implement some of [Joel’s][4]  suggestions from his recent book, “Joel on Software”. At this point I’m mostly vexed by the apparent lack of programmatic interface to SourceForge’s Tracker system, where ccPublisher bugs are (supposed to be) [reported][5] . But if email is all you need, this script and Patrick’s module will get you there.



 [1]: http://egofile.com/open/wxsupportwiz.py
 [2]: http://yergler.net/blog/archives/2004/09/14/getting-feedback-from-users
 [3]: http://yergler.net/blog/uploaded/traceback.txt
 [4]: http://joelonsoftware.com
 [5]: http://sourceforge.net/tracker/?group_id=80503&atid=559966
