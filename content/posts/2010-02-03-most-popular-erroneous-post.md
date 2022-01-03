---
title: Most Popular Erroneous Post
date: 2010-02-03T21:41:14.000Z
categories:
  - aside
tags:
  - analytics
  - mistake
format: aside
slug: most-popular-erroneous-post
---
There are a few posts on my site that get the lion’s share of traffic. One of those is a one-off project I did to convert [Maildir to Mbox][1] . Today someone left a comment, saying that it didn’t work. And then I realized that somewhere along the line `sys.argv[-1]` had been converted to `sys.argv[1]`. Not really the same thing.

I’ve update the page, but it’s a little embarrassing to only realize 18 months (or more) after originally posting it that you’ve been giving out bum advice.

Eventually, I’ll be right.



 [1]: http://yergler.net/projects/one-off/maildir-to-mbox/
