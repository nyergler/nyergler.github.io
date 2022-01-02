---
title: ccPublisher 1.0.5 Preview
date: 2005-02-21T12:21:42.000Z
categories:
  - development
slug: ccpublisher-105-preview
---
First, thanks to everyone who’s tried [ccPublisher][1]  recently. We do have a couple of bugs in the “stable” version, and I’ve spent the past few days tracking those down and fixing them in <span class="caps">CVS</span>. I’m hoping to make a maintenance release later this week once we have a few other things tracked down. In the mean time, I’ve prepared a preview for any brave souls out there. This release is completely unofficial, but it does contain a few important bug fixes. In no particular order:

<ul class="simple">
  <li>
    ccPublisher no longer chokes on filenames containing Unicode on Windows.
  </li>
  <li>
    ccPublisher now correctly reads <span class="caps">ID3</span> metadata from files containing Unicode characters on Mac <span class="caps">OS</span> X.
  </li>
  <li>
    Permission errors that occur when uploading to the Internet Archive are now displayed; previously they were all reported as “invalid username or password”, which wasn’t really correct at all.
  </li>
  <li>
    The <span class="caps">OS</span> X build system has been reworked to use Bob’s incredibly cool <a class="reference external" href="http://undefined.org/python/#py2app">py2app</a> resulting in a 400% decrease in download size.
  </li>
  <li>
    A problem with determining whether an identifier is available at the Archive has been corrected.
  </li>
</ul>

Between the first two and the last one, this release should correct 90% of all crash reports we receive.

You can find downloads [here][2] . Remember, this is a pre-release version, so your mileage may vary. That said, I’d really appreciate any feedback you have.



 [1]: http://creativecommons.org/audio/publish-internetarchive
 [2]: http://yergler.net/projects/ccpublisher
