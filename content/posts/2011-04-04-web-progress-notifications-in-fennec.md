---
title: 'Web Progress Notifications in Fennec'
author: Nathan Yergler
type: post
date: 2011-04-04T20:41:18+00:00
excerpt: |
  <p>Working on <a class="reference external" href="http://openattribute.com/">OpenAttribute</a> for Firefox
  Mobile (Fennec) yesterday, one of the first challenges I faced was how
  to get notification that a page had finished loading. In the desktop
  version, I attach a listener for all tabs using
  <tt class="docutils literal">gBrowser.addTabsProgressListener</tt>. Unfortunately with browsers
  running in their own processes, this approach ...</p>
url: /2011/04/04/web-progress-notifications-in-fennec/
categories:
  - mozCC
tags:
  - fennec
  - firefox
  - mobile
  - mozcc
  - OpenAttribute

---
Working on [OpenAttribute][1]  for Firefox Mobile (Fennec) yesterday, one of the first challenges I faced was how to get notification that a page had finished loading. In the desktop version, I attach a listener for all tabs using <tt class="docutils literal">gBrowser.addTabsProgressListener</tt>. Unfortunately with browsers running in their own processes, this approach doesn’t work on Fennec. I spent quite a bit of time trying different approaches, all with the intent of creating a progress listener and attaching it myself. The [Electrolysis wiki page][2]  says that one of the nice side effects of the message passing model is that [this problem is easy to solve][3] , but it sure didn’t feel easy.

I don’t remember why I eventually started looking at the [mobile-browser source tree][4] , but as I looked through [browser.js][5] , [there it was][6] :

<pre class="literal-block">messageManager.addMessageListener("Content:StateChange", this);
</pre>

It turns out it _is_ really easy: you can listen for <tt class="docutils literal">Content:StateChange</tt> or <tt class="docutils literal">Content:LocationChange</tt>, and get access to the same details you’d normally have in the <tt class="docutils literal">WebProgressListener</tt> implementation.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2011-04-04 20:41:18
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      1889
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      layout:
    </th>

    <td class="field-body">
      post
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      slug:
    </th>

    <td class="field-body">
      web-progress-notifications-in-fennec
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      comments:
    </th>

    <td class="field-body">
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      category:
    </th>

    <td class="field-body">
      mozCC
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      tags:
    </th>

    <td class="field-body">
      fennec, firefox, mobile, mozcc, OpenAttribute
    </td>
  </tr>
</table>

 [1]: http://openattribute.com/
 [2]: https://wiki.mozilla.org/Mobile/Fennec/Extensions/Electrolysis
 [3]: https://wiki.mozilla.org/Mobile/Fennec/Extensions/Electrolysis#Good_News
 [4]: https://hg.mozilla.org/mobile-browser/file/8167d57cab8e/chrome/content/
 [5]: https://hg.mozilla.org/mobile-browser/file/8167d57cab8e/chrome/content/browser.js
 [6]: https://hg.mozilla.org/mobile-browser/file/8167d57cab8e/chrome/content/browser.js#l1327