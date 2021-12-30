---
title: 'Grokking the Lizard'
author: Nathan Yergler
type: post
date: 2003-10-26T13:45:11+00:00
excerpt: |
  <p>So I spent most of my morning on Friday attempting to grok the state of
  Mozilla/Firebird/Gecko plugin development. Actually, I’ve come to
  realize that plugin is the wrong term: an extension is what I really
  want to build. It’s another of the Creative Commons <a class="reference external" href="http://creativecommons.org/technology/challenges#challenge_entry_3848">tech
  challenges ...</a></p>
url: /2003/10/26/grokking-the-lizard/
categories:
  - mozCC

---
So I spent most of my morning on Friday attempting to grok the state of Mozilla/Firebird/Gecko plugin development. Actually, I’ve come to realize that plugin is the wrong term: an extension is what I really want to build. It’s another of the Creative Commons [tech challenges][1]  ; building a plugin/toolbar/extension for a web browser which either shows or changes when the page contains licensing meta-data.

After several hours of cursing at <span class="caps">XUL</span>, <span class="caps">RDF</span> and JavaScript, I have a prototype. <span class="caps">OK</span>, less than a prototype, but something: a toolbar button and status bar text that will display licensing <span class="caps">RDF</span> (if any) when clicked. It only works in Mozilla Firebird right now, but it seems to work equally well on all platforms. For the life of me I can’t figure out how to catch navigation events so that I can go about changing the icon, etc. Anybody, anybody?

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2003-10-26 13:45:11
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      21
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
      grokking-the-lizard
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

 [1]: http://creativecommons.org/technology/challenges#challenge_entry_3848