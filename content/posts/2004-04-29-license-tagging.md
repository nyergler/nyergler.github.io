---
title: License Tagging
date: 2004-04-29T12:32:14.000Z
categories:
  - development
slug: license-tagging
---
In a [previous post][1]  I mentioned I’ve been doing some contract work for the [Creative Commons][2]  lately. I just uploaded an update to that and wanted to fill everyone in on what I’ve been doing. One of the unanswered [tech challenges][3]  was the creation of a [GUI for embedding CC license claims][3] . A couple weeks ago Mike contacted me and asked me to work on this, which I happily agreed to do.

The result is [ccTag-gui][4] , a cross-platform [wxPython][5]  based GUI application for embedding license claims and generating the cooresponding validation RDF. Right now it’s pretty simple: it only supports MP3 (although adding Ogg support should be trivial) and only generates the RDF for copy and paste. You can actually try it out, if you like. “Releases” (and I use that term loosely) are available [here][6] . There’s a Win32 installer, a Mac OS X disk image, and a slew of RPMs. The RPMs are the least tested, and they don’t enforce the wxPython dependency (you need at least [2.5.1][7] ). The Win32 and Mac OS X packages, on the other hand, are completely self-contained.

Even though the tool is really only a “technology validation” prototype right now, developing it has been a good experience for a couple of reasons. First, I’ve been reminded of wxPython, and just how good it is (and [is getting][8] ). Second, it’s been an excellent exercise to write an app that _has_ to be cross-platform from day 1. While Python is better than some languages (cough, Java, cough) at allowing true cross-platform development, there’s a real difference in work style between writing an app and then figuring out what it will take to make it work on another platform, and writing an app and testing on 3 platforms from the start. I like to think the resulting code has fewer bugs and better design, but I don’t have any proof for that.

In conclusion I’m pretty happy with the way it’s turned out, and if you have any suggestions, please [let me know][9] .



 [1]: http://www.yergler.net/averages/archives/2004/04/16/random_life_notes
 [2]: http://creativecommons.org
 [3]: http://creativecommons.org/technology/challenges
 [4]: http://cvs.sourceforge.net/viewcvs.py/cctools/cctag-gui/
 [5]: http://wxpython.org
 [6]: http://yergler.net/projects/cctag/releases/
 [7]: http://wxpython.org/download.php#binaries
 [8]: http://www.yergler.net/averages/archives/2004/04/07/wx_rocks
 [9]: /contact
