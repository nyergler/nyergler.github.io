---
title: 'It’s A Good News, Bad News sorta thing'
author: Nathan Yergler
type: post
date: 2004-05-03T11:16:39+00:00
excerpt: |
  <p>I’ve struggled off and on for the past couple weeks with localizing my
  two Mozilla extensions, <a class="reference external" href="http://yergler.net/projects/mozcc">mozCC</a> and
  <a class="reference external" href="http://yergler.net/projects/quickfile">QuickFile</a>. The problems I’ve
  encountered have mostly been due to my own lack of experience and
  planning in this area. I guess I shouldn’t have ignored the information
  on ...</p>
url: /2004/05/03/its-a-good-news-bad-news-sorta-thing/
categories:
  - development

---
I’ve struggled off and on for the past couple weeks with localizing my two Mozilla extensions, [mozCC][1]  and [QuickFile][2] . The problems I’ve encountered have mostly been due to my own lack of experience and planning in this area. I guess I shouldn’t have ignored the information on localization when I started writing mozCC.

The biggest problem, however, has been getting [Thunderbird][3]  and [Firefox][4]  to correctly register the new locale information and make it available. I can’t say definitively, but my testing shows that when the extension is installed **without** the locale first, it doesn’t work very well to attempt to upgrade to an locale-enabled version. Sigh. Of course, this will all be irrelevant soon (hopefully), as Ben Goodger has posted the new [guidelines][5]  for packaging extensions, starting in Thunderbird 0,7 and Firefox 0.9.

So why is this good news? Because the <tt class="docutils literal">install.js</tt> method currently in use sucks. It’s poorly documented, poorly structured, and prone to breaking in really spectacular ways. The use of a uniform <tt class="docutils literal">extension.rdf</tt> file which describes the extension **has** to be an improvement.

But it’s also bad news. Developers will have to decide which versions they’re going to support, and users will actually need to pay attention to version numbers when installing extensions. I suppose this isn’t as bad as it could be, given that Firefox and Thunderbird are still both “pre-releases”, but I wish this change had happened sooner rather than later. Both applications are gaining mindshare and I think Extensions are a real selling point for organizations that want to implement some unique piece of functionality.

So what’s the net effect for my projects? I’ll keep working on them, but don’t look for any releases until Thunderbird 0.7 and Firefox 0.9 are released. Unless I fix install.js. Which isn’t likely.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2004-05-03 11:16:39
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      124
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
      its-a-good-news-bad-news-sorta-thing
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
      development
    </td>
  </tr>
</table>

 [1]: http://yergler.net/projects/mozcc
 [2]: http://yergler.net/projects/quickfile
 [3]: http://mozilla.org/products/thunderbird/
 [4]: http://mozilla.org/products/firefox/
 [5]: http://www.bengoodger.com/software/mb/extensions/howto.html