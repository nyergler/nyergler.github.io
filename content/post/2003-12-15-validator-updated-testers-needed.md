---
title: 'Validator updated; Testers needed'
author: Nathan Yergler
type: post
date: 2003-12-15T11:28:10+00:00
excerpt: |
  <p>This morning I finished an update to
  <a class="reference external" href="http://yergler.net/projects/ccvalidator">ccValidator</a>. This update is
  mostly a code cleanup. It finally moves the validator away from the
  god-awful cclicense.py module (I wrote it; I can say it) to
  <a class="reference external" href="http://yergler.net/projects/ccrdf">ccRdf</a>. I haven’t tested it
  extensively yet, so I haven’t updated the production ...</p>
url: /2003/12/15/validator-updated-testers-needed/
categories:
  - ccValidator

---
This morning I finished an update to [ccValidator][1] . This update is mostly a code cleanup. It finally moves the validator away from the god-awful cclicense.py module (I wrote it; I can say it) to [ccRdf][2] . I haven’t tested it extensively yet, so I haven’t updated the production validator yet. That’s where you, dear reader, come in.

I’d love it if you could try it out at <http://yergler.net/projects/ccv-cvs> . I’d appreciate hearing any feedback about your experience with it. If things are working as expected, you shouldn’t see any difference between the output you get from the [test instance][3]  and the output you get from the [production instance][1] . Thanks for all your help.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2003-12-15 11:28:10
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      62
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
      validator-updated-testers-needed
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
 [2]: http://yergler.net/projects/ccrdf
 [3]: http://yergler.net/projects/ccv-cvs