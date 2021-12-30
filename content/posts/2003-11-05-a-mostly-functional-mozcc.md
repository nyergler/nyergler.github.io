---
title: 'A Mostly Functional mozCC'
author: Nathan Yergler
type: post
date: 2003-11-05T13:50:03+00:00
excerpt: |
  <p>Really, I’m as amazed as anyone else. I finally have a mostly functional
  version of mozCC working. It does the following:</p>
  <ul class="simple">
  <li>displays <span class="caps">CC</span> license information in the status bar when you view a
  page with embedded <span class="caps">RDF</span></li>
  <li>provides a toolbar button which is enabled when the page contains
  embedded ...</li></ul>
url: /2003/11/05/a-mostly-functional-mozcc/
categories:
  - mozCC

---
Really, I’m as amazed as anyone else. I finally have a mostly functional version of mozCC working. It does the following:

<ul class="simple">
  <li>
    displays <span class="caps">CC</span> license information in the status bar when you view a page with embedded <span class="caps">RDF</span>
  </li>
  <li>
    provides a toolbar button which is enabled when the page contains embedded <span class="caps">RDF</span>
  </li>
  <li>
    when you click the button, a dialog opens and displays the parsed <span class="caps">RDF</span>
  </li>
</ul>

And now for the obligatory screenshot [|mozcc.png|][1]  (click to enlarge) which shows the [Creative Commons][2]  home page. In the lower right you can see the (by) icon, indicating it requires attribution/notice. The dialog open shows part of the parsed <span class="caps">RDF</span>.

I still need to do some cleanup work in the display of <span class="caps">RDF</span> attributes and such. I’ll upload an <span class="caps">XPI</span> either this evening or tomorrow (depending how my Data Structures exam goes). The brave among you can check it out from [<span class="caps">CVS</span>][3] . As always, feedback is appreciated.

<span class="caps">UPDATE</span> (11/6/03 6:<span class="caps">50AM</span>): I’ve just committed updated xpi and jar files to <span class="caps">CVS</span>. If you want to test mozCC in it’s current state, download the xpi file from <span class="caps">CVS</span> and open it in Mozilla Firebird.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2003-11-05 13:50:03
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      30
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
      a-mostly-functional-mozcc
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

 [1]: http://www.yergler.net/averages/archives/images/mozcc.png
 [2]: http://www.creativecommons.org
 [3]: http://yergler.net/cvs/viewcvs.cgi/mozcc/