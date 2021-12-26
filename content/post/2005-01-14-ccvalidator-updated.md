---
title: 'ccValidator Updated'
author: Nathan Yergler
type: post
date: 2005-01-14T11:04:34+00:00
excerpt: |
  <p>Looking in the archive, I see that I haven’t blogged about ccValidator
  in over six months. Because there was nothing to blog about. Today I
  updated <a class="reference external" href="http://validator.creativecommons.org">ccValidator</a> with a
  handful of bug fixes and a nifty make over. The bugs generally
  surrounded the decoding and detection of Unicode character ...</p>
url: /2005/01/14/ccvalidator-updated/
categories:
  - ccValidator

---
Looking in the archive, I see that I haven’t blogged about ccValidator in over six months. Because there was nothing to blog about. Today I updated [ccValidator][1]  with a handful of bug fixes and a nifty make over. The bugs generally surrounded the decoding and detection of Unicode character sets. Several caused the validator to crash, and a couple just made the output, well, ugly. There’s a report floating around that ccValidator stil strips characters of their accents and other markings, but I haven’t had time to track it down yet (and don’t anticipate being able to do so for a bit).

In addition to the bug fixes, the most visible change is that [validator.creativecommons.org][1]  now uses the same style sheet and layout as the [creativecommons.org][2] . A minor (and some would argue irrelevant) change, to be sure, but the difference has been bothering me for a while, so I took great pleasure in crossing that particular task off my list.

If you do find a bug in ccValidator, you can [email][3]  me, just be sure to include the <span class="caps">RDF</span> or <span class="caps">URI</span> you’re trying to validate.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2005-01-14 11:04:34
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      250
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
      ccvalidator-updated
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
      ccValidator
    </td>
  </tr>
</table>

 [1]: http://validator.creativecommons.org
 [2]: http://www.creativecommons.org
 [3]: /contact