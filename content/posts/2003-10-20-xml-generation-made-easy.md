---
title: '<span class="caps">XML</span> generation made easy'
author: Nathan Yergler
type: post
date: 2003-10-20T09:07:40+00:00
excerpt: |
  <p>Stoa is a project I work on for my day job; a Zope-based Student
  Information System we use at the school for everthing from scheduling
  and attendance to posting online content for courses. Stoa uses <span class="caps">XML</span> for
  a few internal tasks, and right now it uses a module I wrote ...</p>
url: /2003/10/20/xml-generation-made-easy/
categories:
  - python

---
Stoa is a project I work on for my day job; a Zope-based Student Information System we use at the school for everthing from scheduling and attendance to posting online content for courses. Stoa uses <span class="caps">XML</span> for a few internal tasks, and right now it uses a module I wrote to do the handling. The module is ugly. And expensive. Really ugly, really expensive.

So I’ve been struggling with ideas on how to consume and emit <span class="caps">XML</span> is a “Python-ic”, Zope-friendly way. [<span class="caps">JAXML</span>][1]  seems to be a good choice for emitting Python. It has an amazingly simple <span class="caps">API</span>, and doesn’t get caught up in the SAXiness that seems to plague other <span class="caps">XML</span> tools (I know, I know, <span class="caps">SAX</span> is supposed to make our lives better, but it just gets in my way). Now to find an equally simple way to consume <span class="caps">XML</span>.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2003-10-20 09:07:40
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      13
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
      xml-generation-made-easy
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
      python
    </td>
  </tr>
</table>

 [1]: http://www.librelogiciel.com/software/jaxml/action_Presentation