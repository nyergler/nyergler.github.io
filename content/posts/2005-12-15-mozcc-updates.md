---
title: 'mozCC Updates'
author: Nathan Yergler
type: post
date: 2005-12-15T10:12:09+00:00
excerpt: |
  <p>So Hal pointed out that <a class="reference external" href="http://yergler.net/projects/mozcc/install">mozCC
  1.1.4</a> (the latest release)
  doesn’t work right on Windows <span class="caps">XP</span>. Unfortunately he’s right. Well, sort
  of. When I installed it with Firefox 1.5 on Windows <span class="caps">XP</span> Professional, the
  (<span class="caps">CC</span>) icon shows up in the status bar, but none of ...</p>
url: /2005/12/15/mozcc-updates/
categories:
  - mozCC

---
So Hal pointed out that [mozCC 1.1.4][1]  (the latest release) doesn’t work right on Windows <span class="caps">XP</span>. Unfortunately he’s right. Well, sort of. When I installed it with Firefox 1.5 on Windows <span class="caps">XP</span> Professional, the (<span class="caps">CC</span>) icon shows up in the status bar, but none of the license attribute icons (by, share-alike, etc) show up. It appears that this is actually a line-endings problem: the icon graphic files are flagged as <span class="caps">ASCII</span> in <span class="caps">CVS</span>, and were apparently borked when I checked them out of <span class="caps">CVS</span> to do the build on Windows.

So this of course demands an updated build, but I’m choosing to hold off for just a little while. See, I’ve been promising a new and improved mozCC for months. And whlie I know I won’t have time to really do much in the near future, I would like to do a few updates. See the [upcoming features][2]  page in the Yiki ([what’s a yiki?][3] ) for details.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2005-12-15 10:12:09
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      366
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
      mozcc-updates
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
</table>

 [1]: http://yergler.net/projects/mozcc/install
 [2]: http://yergler.net/yiki/MozCc/UpcomingFeatures
 [3]: http://yergler.net/yiki/WhatsAYiki