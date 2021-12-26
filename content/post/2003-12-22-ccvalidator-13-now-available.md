---
title: 'ccValidator 1.3 now available'
author: Nathan Yergler
type: post
date: 2003-12-22T20:39:29+00:00
excerpt: |
  <p>ccValidator 1.3 is now available. It’s running live at
  <a class="reference external" href="http://yergler.net/projects/ccvalidator">yergler.net/projects/ccvalidator</a>,
  and you can download the release tarball
  <a class="reference external" href="http://yergler.net/projects/ccvalidator/releases">here</a>.</p>
  <p>This release is mainly a syncronization release; ccValidator now uses
  the <a class="reference external" href="http://yergler.net/projects/ccrdf">ccRdf</a> core. Porting ccV to
  this architecture simplified many areas of the code, and provided an ...</p>
url: /2003/12/22/ccvalidator-13-now-available/
categories:
  - ccValidator

---
ccValidator 1.3 is now available. It’s running live at [yergler.net/projects/ccvalidator][1] , and you can download the release tarball [here][2] .

This release is mainly a syncronization release; ccValidator now uses the [ccRdf][3]  core. Porting ccV to this architecture simplified many areas of the code, and provided an excellent test bed for ccRdf. I found a few bugs, and made a few improvments, so there will be a release of ccRdf soon to finish up the syncronization of work.

![image0][4] In addition to ccRdf, ccValidator now sports its own validation image. If <span class="caps">RDF</span> parsed from a <span class="caps">URL</span> validates properly, you’ll be provided with a bit of <span class="caps">HTML</span> to allow you to link to the validation results. Cool, huh? Thanks to Mike L. for the idea.

Thanks for the feedback from all my testers; [let me know][5]  if you encounter any problems or have any suggestions.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2003-12-22 20:39:29
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      67
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
      ccvalidator-13-now-available
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

 [1]: http://yergler.net/projects/ccvalidator
 [2]: http://yergler.net/projects/ccvalidator/releases
 [3]: http://yergler.net/projects/ccrdf
 [4]: http://yergler.net/projects/ccvalidator/images/validrdf.png
 [5]: http://www.yergler.net/pages/contact