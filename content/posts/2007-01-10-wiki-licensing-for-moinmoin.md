---
title: Wiki Licensing for MoinMoin
date: 2007-01-10T17:11:10.000Z
categories:
  - development
slug: wiki-licensing-for-moinmoin
---
I’ve been using [MoinMoin][1]  for managing the non-blog content of [yergler.net][2]  for some time now, and its mostly been a great choice for me. Just enough through-the-web management to make maintaining the content less burdensome. One feature I noticed it was missing (compared to [MediaWiki][3] , which we use [at work][4] ) is Creative Commons license support. After I started to do some digging I found that there _is_ support for a wiki license page. If enabled, this adds some text to the editor pages notifying contributors that their content will be subject to the site license.

<div class="figure align-center">
  <img alt="" src="http://yergler.net/blog/wp-content/uploads/2007/01/moinlicense.png" />
</div>

So over the weekend I put together [MoinLicense][5] . MoinLicense is a pair of actions and a macro for MoinMoin which enables license selection. In addition to supporting a site-wide license, MoinLicense allows you to select a particular license for any page. Details, download information and known issues are in [the wiki][5] , natch.



 [1]: http://moinmoin.wikiwikiweb.de/
 [2]: http://yergler.net
 [3]: http://mediawiki.org
 [4]: http://wiki.creativecommons.org
 [5]: http://yergler.net/MoinLicense
