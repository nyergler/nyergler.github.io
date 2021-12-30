---
title: 'mozCC 1.1.3 for Firefox 1.5 Beta 2'
author: Nathan Yergler
type: post
date: 2005-10-09T13:53:52+00:00
excerpt: |
  <p>Maybe it’s just the hacking environment here at the Summit, but I’ve
  been hella productive today. In regards to my <a class="reference external" href="http://yergler.net/blog/archives/2005/10/09/mozcc-with-firefox-15-beta-2">last
  post</a>,
  there’s an update for <a class="reference external" href="http://yergler.net/projects/mozcc">MozCC</a>
  available. A couple of details:</p>
  <ul class="simple">
  <li>The new release, 1.1.3, adds compatibility for Firefox 1.5 Beta 2 and ...</li></ul>
url: /2005/10/09/mozcc-113-for-firefox-15-beta-2/
categories:
  - mozCC

---
Maybe it’s just the hacking environment here at the Summit, but I’ve been hella productive today. In regards to my [last post][1] , there’s an update for [MozCC][2]  available. A couple of details:

<ul class="simple">
  <li>
    The new release, 1.1.3, adds compatibility for Firefox 1.5 Beta 2 and adds support for metadata linked in the header with a <tt class="docutils literal"><link <span class="pre">rel="metadata"</span> <span class="pre">...></span></tt> tag.
  </li>
  <li>
    Using the update manager you should be able automagically upgrade MozCC if you are using 1.5 Beta 2; the update specification won’t offer it to you if you’re not using Beta 2, because…
  </li>
  <li>
    &#8230;this release hasn’t been tested with <em>strong>anything</em> other than Firefox 1.5 Beta 2.
  </li>
  <li>
    When Firefox 1.5 is finally released, MozCC will break until we release an update. This is intentional and I’ll try to get it updated shortly after the release (barring some late breaking bug this should be a trivial update).
  </li>
</ul>

If you want to download the new release directly, you can find it [here][3] .

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2005-10-09 13:53:52
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      343
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
      mozcc-113-for-firefox-15-beta-2
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

 [1]: http://yergler.net/blog/archives/2005/10/09/mozcc-with-firefox-15-beta-2
 [2]: http://yergler.net/projects/mozcc
 [3]: http://drop.creativecommons.org/mozcc/releases/mozcc-1.1.3.xpi