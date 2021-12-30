---
title: 'The Gecko Wars, continued'
author: Nathan Yergler
type: post
date: 2003-10-27T14:51:22+00:00
excerpt: |
  <p>In an object lesson on why OpenSource is important, I finally figured
  out how to listen for navigation events in a Mozilla Firebird extension.
  In frustration I began reading the <span class="caps">XUL</span>/<span class="caps">XML</span>/JavaScript source for <span class="caps">MF0</span>.7,
  and there it was: <tt class="docutils literal"><span class="pre">getBrowser().addEventListener...</span></tt>. It was that simple.</p>
  <p>So now I ...</p>
url: /2003/10/27/the-gecko-wars-continued/
categories:
  - mozCC

---
In an object lesson on why OpenSource is important, I finally figured out how to listen for navigation events in a Mozilla Firebird extension. In frustration I began reading the <span class="caps">XUL</span>/<span class="caps">XML</span>/JavaScript source for <span class="caps">MF0</span>.7, and there it was: <tt class="docutils literal"><span class="pre">getBrowser().addEventListener...</span></tt>. It was that simple.

So now I’ve moved on to bigger battles: mastering JavaScript’s regex syntax, figuring out if I need to write a (Py)<span class="caps">XPCOM</span> object, and learning enough about <span class="caps">XUL</span> widgets to create a dialog box. And no matter how much I bitch, the whole process has it’s own sense of accomplishment at each little milestone.

If you want to see some ugly code and hacked together <span class="caps">XML</span>, you can follow the development in [<span class="caps">CVS</span>][1] . The module is **mozcc**.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2003-10-27 14:51:22
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      24
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
      the-gecko-wars-continued
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

 [1]: http://www.yergler.net/cvs