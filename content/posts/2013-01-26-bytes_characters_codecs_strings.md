---
title: 'Bytes, Characters, Codecs, and Strings'
author: Nathan Yergler
type: post
date: 2013-01-26T00:00:00+00:00
excerpt: |
  <p>One of the persistent areas of confusion for many Python developers is
  Unicode strings, byte strings, and how they interact. While Python 3
  should help ease some of that pain, many places (including
  <a class="reference external" href="http://www.eventbrite.com/">Eventbrite</a>) are still running on Python 2. The problem is made worse
  by the fact that modern ...</p>
url: /2013/01/26/bytes_characters_codecs_strings/
categories:
  - training
tags:
  - i18n
  - python
  - unicode

---
One of the persistent areas of confusion for many Python developers is Unicode strings, byte strings, and how they interact. While Python 3 should help ease some of that pain, many places (including [Eventbrite][1] ) are still running on Python 2. The problem is made worse by the fact that modern web frameworks (Django, in our case) attempt to do the Right Thing by using Unicode strings, but legacy code may assume byte strings with a specific encoding. That bifurcation can lead to confusion, and make it difficult to refactor code in a way that can be shared between both &#8220;sides of the street&#8221;.

Towards the end of 2012 I developed a brief training for the web team to help establish a baseline common understanding of Unicode and string handling in Python. The [notes from the presentation][2]  are available, and I hope others find them useful, as well. I&#8217;m currently working on some edits to expand areas that seemed to have lingering confusion, and to address the upcoming shift to Python 3 more directly. If you have suggestions, you can [contact me][3]  me with them.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      author:
    </th>

    <td class="field-body">
      Nathan Yergler
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      category:
    </th>

    <td class="field-body">
      training
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      tags:
    </th>

    <td class="field-body">
      python, unicode, i18n
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      comments:
    </th>

    <td class="field-body">
    </td>
  </tr>
</table>

 [1]: http://www.eventbrite.com/
 [2]: http://yergler.net/2012/bytes-chars/
 [3]: /contact