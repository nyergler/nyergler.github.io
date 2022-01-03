---
title: mozCC Updates
date: 2005-12-15T10:12:09.000Z
categories:
  - mozCC
slug: mozcc-updates
---
So Hal pointed out that [mozCC 1.1.4][1]  (the latest release) doesn’t work right on Windows XP. Unfortunately he’s right. Well, sort of. When I installed it with Firefox 1.5 on Windows XP Professional, the (CC) icon shows up in the status bar, but none of the license attribute icons (by, share-alike, etc) show up. It appears that this is actually a line-endings problem: the icon graphic files are flagged as ASCII in CVS, and were apparently borked when I checked them out of CVS to do the build on Windows.

So this of course demands an updated build, but I’m choosing to hold off for just a little while. See, I’ve been promising a new and improved mozCC for months. And whlie I know I won’t have time to really do much in the near future, I would like to do a few updates. See the [upcoming features][2]  page in the Yiki ([what’s a yiki?][3] ) for details.



 [1]: http://yergler.net/projects/mozcc/install
 [2]: http://yergler.net/yiki/MozCc/UpcomingFeatures
 [3]: http://yergler.net/yiki/WhatsAYiki
