---
title: 'Galaxy S (“T-Mobile Vibrant”) Tethering'
author: Nathan Yergler
type: post
date: 2010-08-29T15:56:18+00:00
excerpt: |
  <p>Seeing Tim Bray’s post on how much he loves <a class="reference external" href="http://www.tbray.org/ongoing/When/201x/2010/08/28/Tethering">tethering his Nexus
  One</a>
  reminded me that I wanted to document that this does, indeed, work on a
  rooted Galaxy S. The day after I wrote up my experience with
  [<span class="caps">STRIKEOUT</span>:hacking]<a class="reference external" href="http://yergler.net/blog/2010/08/22/improving-a-samsung-galaxy-s">fixing my Galaxy
  S</a>, I
  left for a ...</p>
url: /2010/08/29/galaxy-s-t-mobile-vibrant-tethering/
categories:
  - geek
tags:
  - android
  - galaxy s
  - tether
  - wifi

---
Seeing Tim Bray’s post on how much he loves [tethering his Nexus One][1]  reminded me that I wanted to document that this does, indeed, work on a rooted Galaxy S. The day after I wrote up my experience with [<span class="caps">STRIKEOUT</span>:hacking][fixing my Galaxy S][2] , I left for a four day trip to Washington, <span class="caps">DC</span>. The trip was great, but the best part was not paying for wifi at Washington Dulles while I waited for my return flight. Because I had rooted my phone (ridiculously easy these days; go, do it, even if you don’t apply the other fixes), I was able to install [android-wifi-tether][3]  (2.0.5-pre8, to be specific). For some reason the Galaxy S doesn’t work in infrastructure mode yet, but after setting up a connection profile with a static <span class="caps">IP</span> in the correct range (192.168.2.x, by default), setting the gateway (192.168.2.254, by default) and [Google’s <span class="caps">DNS</span> servers][4]  (they’re easy to remember), I was able to get right online.

I love the [graph of the stock price][5]  of navigation companies when Google announced they were doing turn by turn navigation for free. I wonder if we’ll ever have the joy of seeing a similar graph for Boingo, et al. Probably not — there will still be lots of people with devices that only have a wifi chipset — but a guy can dream.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2010-08-29 15:56:18
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      1756
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
      galaxy-s-t-mobile-vibrant-tethering
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
      geek
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      tags:
    </th>

    <td class="field-body">
      android, galaxy s, tether, wifi
    </td>
  </tr>
</table>

 [1]: http://www.tbray.org/ongoing/When/201x/2010/08/28/Tethering
 [2]: http://yergler.net/blog/2010/08/22/improving-a-samsung-galaxy-s
 [3]: http://code.google.com/p/android-wifi-tether/
 [4]: http://code.google.com/speed/public-dns/
 [5]: http://techcrunch.com/2009/10/28/googles-new-mobile-app-cuts-gps-nav-companies-at-the-knees/