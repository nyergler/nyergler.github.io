---
title: 'mozCC progress report'
author: Nathan Yergler
type: post
date: 2003-11-04T15:14:33+00:00
excerpt: |
  <p>So, a status report on mozCC. This is what works:</p>
  <ul class="simple">
  <li><span class="caps">RDF</span> extraction (for real this time)</li>
  <li><span class="caps">RDF</span> parsing (again, for real)</li>
  <li>interpretation of License permissions (mostly)</li>
  </ul>
  <p>Things left to do (fix):</p>
  <ul class="simple">
  <li>display the parsed license and work information in a dialog when the
  user clicks the toolbar button (ala
  <a class="reference external" href="http://www.yergler.net/projects/ccvalidator">ccValidator ...</a></li></ul>
url: /2003/11/04/mozcc-progress-report/
categories:
  - mozCC

---
So, a status report on mozCC. This is what works:

<ul class="simple">
  <li>
    <span class="caps">RDF</span> extraction (for real this time)
  </li>
  <li>
    <span class="caps">RDF</span> parsing (again, for real)
  </li>
  <li>
    interpretation of License permissions (mostly)
  </li>
</ul>

Things left to do (fix):

<ul class="simple">
  <li>
    display the parsed license and work information in a dialog when the user clicks the toolbar button (ala <a class="reference external" href="http://www.yergler.net/projects/ccvalidator">ccValidator</a>)
  </li>
  <li>
    properly handle some of the license attributes (i.e., “no derivatives” is signaled by the <em>absence</em> rather than presence of some <span class="caps">RDF</span>)
  </li>
  <li>
    some graphical cleanup
  </li>
</ul>

Right now things are only working with Mozilla Firebird, but I’m hoping to add Mozilla Suite support as well once things reach a basic level of functionality.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2003-11-04 15:14:33
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      29
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
      mozcc-progress-report
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