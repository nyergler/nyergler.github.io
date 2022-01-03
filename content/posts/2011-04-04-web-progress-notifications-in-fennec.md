---
title: Web Progress Notifications in Fennec
date: 2011-04-04T20:41:18.000Z
categories:
  - mozCC
tags:
  - fennec
  - firefox
  - mobile
  - mozcc
  - OpenAttribute
slug: web-progress-notifications-in-fennec
---
Working on [OpenAttribute][1]  for Firefox Mobile (Fennec) yesterday, one of the first challenges I faced was how to get notification that a page had finished loading. In the desktop version, I attach a listener for all tabs using `gBrowser.addTabsProgressListener`. Unfortunately with browsers running in their own processes, this approach doesn’t work on Fennec. I spent quite a bit of time trying different approaches, all with the intent of creating a progress listener and attaching it myself. The [Electrolysis wiki page][2]  says that one of the nice side effects of the message passing model is that [this problem is easy to solve][3] , but it sure didn’t feel easy.

I don’t remember why I eventually started looking at the [mobile-browser source tree][4] , but as I looked through [browser.js][5] , [there it was][6] :

<pre class="literal-block">messageManager.addMessageListener("Content:StateChange", this);
</pre>

It turns out it _is_ really easy: you can listen for `Content:StateChange` or `Content:LocationChange`, and get access to the same details you’d normally have in the `WebProgressListener` implementation.



 [1]: http://openattribute.com/
 [2]: https://wiki.mozilla.org/Mobile/Fennec/Extensions/Electrolysis
 [3]: https://wiki.mozilla.org/Mobile/Fennec/Extensions/Electrolysis#Good_News
 [4]: https://hg.mozilla.org/mobile-browser/file/8167d57cab8e/chrome/content/
 [5]: https://hg.mozilla.org/mobile-browser/file/8167d57cab8e/chrome/content/browser.js
 [6]: https://hg.mozilla.org/mobile-browser/file/8167d57cab8e/chrome/content/browser.js#l1327
