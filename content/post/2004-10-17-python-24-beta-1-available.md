---
title: 'Python 2.4 (Beta 1) Available'
author: Nathan Yergler
type: post
date: 2004-10-17T11:07:19+00:00
excerpt: |
  <p>Beta 1 of the next version of everyone’s favorite language, Python, is
  now available. While most of the syntactic aren’t earth-shattering (for
  me), some of the module changes are. For example, the <span class="caps">CJK</span> Codecs package
  used in <a class="reference external" href="http://yergler.net/projects/ccvalidator">ccValidator</a> are now
  part of the standard library, meaning one less ...</p>
url: /2004/10/17/python-24-beta-1-available/
categories:
  - development

---
Beta 1 of the next version of everyone’s favorite language, Python, is now available. While most of the syntactic aren’t earth-shattering (for me), some of the module changes are. For example, the <span class="caps">CJK</span> Codecs package used in [ccValidator][1]  are now part of the standard library, meaning one less external dependency to track. Strings have also gained an &#8216;rsplit’ method, meaning no more &#8216;astring.split()[-1]’, a hack I always had trouble defending.

Check out [What’s New in 2.4][2]  for all the details, or download [here][3] .

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2004-10-17 11:07:19
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      217
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
      python-24-beta-1-available
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

 [1]: http://yergler.net/projects/ccvalidator
 [2]: http://www.python.org/dev/doc/devel/whatsnew
 [3]: http://python.org/2.4/