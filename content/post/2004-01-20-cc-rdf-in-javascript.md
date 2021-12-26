---
title: '<span class="caps">CC</span> <span class="caps">RDF</span> in JavaScript'
author: Nathan Yergler
type: post
date: 2004-01-20T11:43:42+00:00
excerpt: |
  <p>It’s taking much longer than I’d like, but I’m slowly making progress on
  a new release of <a class="reference external" href="http://yergler.net/projects/mozcc">mozCC</a>. The
  update, when it’s finally available, will hopefully play better with
  more browsers and have fewer “quirks” (read:
  <a class="reference external" href="http://mozcc.mozdev.org/bugs.html">bugs</a>).</p>
  <p>As part of the development process, I decided that ...</p>
url: /2004/01/20/cc-rdf-in-javascript/
categories:
  - ccRdf
  - mozCC

---
It’s taking much longer than I’d like, but I’m slowly making progress on a new release of [mozCC][1] . The update, when it’s finally available, will hopefully play better with more browsers and have fewer “quirks” (read: [bugs][2] ).

As part of the development process, I decided that Jim Ley’s excellent [all-JavaScript <span class="caps">RDF</span> parser][3]  just wasn’t a good fit. There were an increasing number of things I wanted to do that were <span class="caps">CC</span> specific and uncomfortable to accomodate with the code base. What I needed was a library designed to manipulate licenses. Like [ccRdf][4]  does for Python. So taking what I learned from [QuickFile][5] , I put together ccRdf.js.

**ccRdf.js** is a limited port of ccRdf to JavaScript. Instead of attempting to provide facilities for both creation and consumption of <span class="caps">RDF</span>, it focuses solely on consuming <span class="caps">RDF</span> licenses. The <span class="caps">API</span> is similar, and it seems to work fairly well thus far. You can find the source [here][6] . There currently isn’t any other documentation, so [e-mail][7]  me if you run into problems or have questions.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2004-01-20 11:43:42
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      74
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
      cc-rdf-in-javascript
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
      ccRdf, mozCC
    </td>
  </tr>
</table>

 [1]: http://yergler.net/projects/mozcc
 [2]: http://mozcc.mozdev.org/bugs.html
 [3]: http://jibbering.com/rdf-parser/
 [4]: http://yergler.net/projects/ccrdf
 [5]: http://www.yergler.net/averages/archives/2003/12/14/filing_mail_in_thunderbird
 [6]: http://yergler.net/projects/ccrdf/javascript/ccrdf.js
 [7]: http://www.yergler.net/pages/contact