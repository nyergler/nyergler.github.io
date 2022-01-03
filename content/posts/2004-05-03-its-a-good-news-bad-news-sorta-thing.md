---
title: 'It’s A Good News, Bad News sorta thing'
date: 2004-05-03T11:16:39.000Z
categories:
  - development
slug: its-a-good-news-bad-news-sorta-thing
---
I’ve struggled off and on for the past couple weeks with localizing my two Mozilla extensions, [mozCC][1]  and [QuickFile][2] . The problems I’ve encountered have mostly been due to my own lack of experience and planning in this area. I guess I shouldn’t have ignored the information on localization when I started writing mozCC.

The biggest problem, however, has been getting [Thunderbird][3]  and [Firefox][4]  to correctly register the new locale information and make it available. I can’t say definitively, but my testing shows that when the extension is installed **without** the locale first, it doesn’t work very well to attempt to upgrade to an locale-enabled version. Sigh. Of course, this will all be irrelevant soon (hopefully), as Ben Goodger has posted the new [guidelines][5]  for packaging extensions, starting in Thunderbird 0,7 and Firefox 0.9.

So why is this good news? Because the `install.js` method currently in use sucks. It’s poorly documented, poorly structured, and prone to breaking in really spectacular ways. The use of a uniform `extension.rdf` file which describes the extension **has** to be an improvement.

But it’s also bad news. Developers will have to decide which versions they’re going to support, and users will actually need to pay attention to version numbers when installing extensions. I suppose this isn’t as bad as it could be, given that Firefox and Thunderbird are still both “pre-releases”, but I wish this change had happened sooner rather than later. Both applications are gaining mindshare and I think Extensions are a real selling point for organizations that want to implement some unique piece of functionality.

So what’s the net effect for my projects? I’ll keep working on them, but don’t look for any releases until Thunderbird 0.7 and Firefox 0.9 are released. Unless I fix install.js. Which isn’t likely.



 [1]: http://yergler.net/projects/mozcc
 [2]: http://yergler.net/projects/quickfile
 [3]: http://mozilla.org/products/thunderbird/
 [4]: http://mozilla.org/products/firefox/
 [5]: http://www.bengoodger.com/software/mb/extensions/howto.html
