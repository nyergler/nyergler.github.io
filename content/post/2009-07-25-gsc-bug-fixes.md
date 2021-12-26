---
title: 'gsc Bug Fixes'
author: Nathan Yergler
type: post
date: 2009-07-25T18:41:27+00:00
excerpt: |
  <p>I
  <a class="reference external" href="http://yergler.net/blog/2009/07/21/git-svn-and-svnexternals/">announced</a>
  <strong>gsc</strong> earlier this week because it worked for me. If you were brave
  and cloned the <a class="reference external" href="http://gitorious.org/gsc/">repository</a> to try it out,
  you undoubtedly found that, well, it <em>didn’t</em> work for you. Thanks to
  Rob for reporting the problem with <tt class="docutils literal">setup.py</tt>, as well as a few other ...</p>
url: /2009/07/25/gsc-bug-fixes/
categories:
  - development
tags:
  - cc
  - git
  - git-svn
  - gsc
  - svn
  - svn:externals

---
I [announced][1]  **gsc** earlier this week because it worked for me. If you were brave and cloned the [repository][2]  to try it out, you undoubtedly found that, well, it _didn’t_ work for you. Thanks to Rob for reporting the problem with <tt class="docutils literal">setup.py</tt>, as well as a few other bugs.

I’ve pushed an update to [the repository on gitorious][2]  which includes fixes for the <tt class="docutils literal">setup.py</tt> issue, support for some [likely] common Subversion configurations and a test suite. In addition to the installation issue Rob also reported that wasn’t able to clone his svn repository with gsc. Some investigation led me to realize the following cases weren’t supported:

<ul class="simple">
  <li>
    <tt class="docutils literal">svn:externals</tt> specified with nested local paths (ie, “vendor/product”)
  </li>
  <li>
    empty directories in the Subversion repository with nothing but <tt class="docutils literal">svn:externals</tt> set on them
  </li>
</ul>

Both now clone correctly.

One open question is what (if anything) gsc should do when you run it against an already cloned repository. I’ve envisioned it purely as a bootstrapping tool but received an email stating that it didn’t work when run a second time, so obviously it should do **something**, even if that’s just failing with an error message.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2009-07-25 18:41:27
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      1087
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
      gsc-bug-fixes
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

  <tr class="field">
    <th class="field-name">
      tags:
    </th>

    <td class="field-body">
      cc, git, git-svn, gsc, svn, svn:externals
    </td>
  </tr>
</table>

 [1]: http://yergler.net/blog/2009/07/21/git-svn-and-svnexternals/
 [2]: http://gitorious.org/gsc/