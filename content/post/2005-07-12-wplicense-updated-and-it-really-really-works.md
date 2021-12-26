---
title: 'wpLicense Updated — And it really, really works'
author: Nathan Yergler
type: post
date: 2005-07-12T10:08:27+00:00
excerpt: |
  <p><a class="reference external" href="http://yergler.net/projects/wplicense">wpLicense</a>
  <a class="reference external" href="http://yergler.net/projects/wplicense/download-wplicense">0.5</a> is
  out. The relatively large increase in version number (up 3/10ths as
  opposed to my usual 1/10th of a version) reflects the large number of
  changes as well as the amount of testing that went into this version.</p>
  <p>In the bug-fix category:</p>
  <ul class="simple">
  <li>Unbeknownst to me ...</li></ul>
url: /2005/07/12/wplicense-updated-and-it-really-really-works/
categories:
  - wpLicense

---
[wpLicense][1]  [0.5][2]  is out. The relatively large increase in version number (up 3/10ths as opposed to my usual 1/10th of a version) reflects the large number of changes as well as the amount of testing that went into this version.

In the bug-fix category:

<ul class="simple">
  <li>
    Unbeknownst to me, my web host uses <span class="caps">PHP</span> 5 by default, so I happily used <span class="caps">PHP</span> 5-specific features such as SimpleXML without knowing it. Unfortunately, lots of people still use <span class="caps">PHP</span> 4, so some refactoring was in order. This release supports <span class="caps">PHP</span> 4 (> 4.3 for sure, possibly older although I won’t guarantee it).
  </li>
  <li>
    I had also used libcurl in the previous version, which while it existed in <span class="caps">PHP</span> 4 wasn’t always turned on. We’re using a little more braindead way of calling the webservice now that should work with non-libcurl-enabled installations of <span class="caps">PHP</span>.
  </li>
  <li>
    Finally, we fixed a rather annoying bug that caused Attribution licenses to be issues as 2.0, even though 2.5 is the current version. Feh.
  </li>
</ul>

<div class="figure">
  <img alt="" src="http://yergler.net/blog/images/includelicensebadge.png" />

  <p class="caption">
    The new &#8220;Include license badge&#8221; option in wpLicense.
  </p>
</div>

This release also adds a new configuration option: “Include license badge in default footer”. If you use the default WordPress theme (or probably 90% of the other themes out there that call wpfooter(); ), checking this saves you the hassle of manually editting your template. The [template functions][3]  are still available for manipulating and displaying the license information in other ways, this just seemed like a logical addition to make life easier.

All this combined with some (but not lots, mind you) <span class="caps">UI</span>-lovin’ means that anyone using an old version (yes, both of you) should go ahead and upgrade.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2005-07-12 10:08:27
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      314
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
      wplicense-updated-and-it-really-really-works
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
      wpLicense
    </td>
  </tr>
</table>

 [1]: http://yergler.net/projects/wplicense
 [2]: http://yergler.net/projects/wplicense/download-wplicense
 [3]: http://yergler.net/projects/wplicense/wplicense-function-reference/