---
title: 'Building for Windows'
author: Nathan Yergler
type: post
date: 2004-07-29T11:20:39+00:00
excerpt: |
  <p>It’s a little ironic that the best session I attended yesterday was
  presented by a Microsoft employee, <a class="reference external" href="http://blogs.msdn.com/robmen/">Rob
  Mensching</a>. Rob
  <a class="reference external" href="http://conferences.oreillynet.com/cs/os2004/view/e_sess/5787">presented</a>
  on <a class="reference external" href="http://wix.sourceforge.net"><span class="caps">WIX</span></a>, the Windows Installer Xml
  toolkit. <span class="caps">WIX</span> is a set of tools which allow developers to “integrate
  setup into the build process.” After Rob’s presentation, I ...</p>
url: /2004/07/29/building-for-windows/
categories:
  - development
  - oscon2004

---
It’s a little ironic that the best session I attended yesterday was presented by a Microsoft employee, [Rob Mensching][1] . Rob [presented][2]  on [<span class="caps">WIX</span>][3] , the Windows Installer Xml toolkit. <span class="caps">WIX</span> is a set of tools which allow developers to “integrate setup into the build process.” After Rob’s presentation, I’m convinced that <span class="caps">WIX</span> is exactly what we need at <span class="caps">CC</span>.

At <span class="caps">CC</span>, we have two programmers on staff, and I’m the only one who has the luxury of coding full time. So when it comes to developing software, I’d much rather spend my time developing new features than writing setup.exe. So <span class="caps">WIX</span> will allow us to define our setup process in an <span class="caps">XML</span> file and then generate the installer in the same process we use to “compile” (in quotes, since we use lots of Python and it’s really just [setup.py][4] ).

And I suppose it’s good to hear from someone whose ideas and beliefs place him in a different place on the Stallman-Gates Openness Scale.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2004-07-29 11:20:39
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      167
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
      building-for-windows
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
      development, oscon2004
    </td>
  </tr>
</table>

 [1]: http://blogs.msdn.com/robmen/
 [2]: http://conferences.oreillynet.com/cs/os2004/view/e_sess/5787
 [3]: http://wix.sourceforge.net
 [4]: http://python.org/doc/lib/module-distutils.html