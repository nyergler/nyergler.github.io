---
title: MozCC with Firefox 1.5 Beta 2
date: 2005-10-09T10:47:04.000Z
categories:
  - mozCC
slug: mozcc-with-firefox-15-beta-2
---
Just a quick note to head off the stream of email I’ve been receiving (yes, both of them): [mozCC][1]  doesn’t work with [Firefox 1.5 Beta 2][2] .

Actually if you tried to install it, you’d be told it’s not compatible, since mozCC 1.1.2 claims it’s only compatible with Firefox 1.4 (the internal version for Beta 1). At first I thought this was gratuitous version incrementing, and then I discovered that after incrementing the supported version in mozCC, it doesn’t work. At all. I’ve tracked down the problem and hope to have a release out later today or tomorrow that fixes both this compatibility issue as well as a rather embarassing issue pointed out by Jeff yesterday. Stay tuned.

**UPDATE**: Just to be clear, it’s not really _gratuitious_ per say to increment the version from 1.4 to 1.4.1 — I just assumed it had gone to 1.5; mea culpa. Also, the update is [now available][3] .



 [1]: http://yergler.net/projects/mozcc
 [2]: http://www.mozilla.org/products/firefox/releases/1.5beta2.html
 [3]: http://yergler.net/blog/archives/2005/10/09/mozcc-113-for-firefox-15-beta-2
