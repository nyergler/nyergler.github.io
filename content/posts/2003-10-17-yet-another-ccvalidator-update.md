---
title: 'Yet another ccValidator update'
author: Nathan Yergler
type: post
date: 2003-10-17T18:00:49+00:00
excerpt: |
  <p>It seems like all I’m writing about here lately is ccValidator and
  ccLicense, but I suppose that’s <span class="caps">OK</span>. After my announcement this morning,
  it was pointed out that the validator didn’t exactly handle Unicode
  properly. So, some more regexing (for the <span class="caps">XML</span> encoding) and
  <tt class="docutils literal">print <span class="pre">&quot;foo&quot;.encode ...</span></tt></p>
url: /2003/10/17/yet-another-ccvalidator-update/
categories:
  - ccValidator

---
It seems like all I’m writing about here lately is ccValidator and ccLicense, but I suppose that’s <span class="caps">OK</span>. After my announcement this morning, it was pointed out that the validator didn’t exactly handle Unicode properly. So, some more regexing (for the <span class="caps">XML</span> encoding) and <tt class="docutils literal">print <span class="pre">"foo".encode(encoding)</span></tt> action, and tah-dah! New [ccValidator][1]  , now with a gooey Unicode center.

Thanks, “Maxime”:<http://www.organigramme.net/> ; keep those bug reports coming.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2003-10-17 18:00:49
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      11
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
      yet-another-ccvalidator-update
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

 [1]: http://www.yergler.net/projects/ccvalidator