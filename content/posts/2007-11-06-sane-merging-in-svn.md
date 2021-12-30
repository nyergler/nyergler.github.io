---
title: Sane Merging in SVN
author: Nathan Yergler
type: post
date: 2007-11-06T13:32:25+00:00
excerpt: |
  <p>We use <a class="reference external" href="http://subversion.tigris.org">Subversion</a> for <a class="reference external" href="http://en.wikipedia.org/wiki/Revision_control">version
  control</a> at
  <a class="reference external" href="http://creativecommons.org">work</a>. We try to version control
  everything: code, content, graphics, site configuration.
  <a class="reference external" href="http://cctools.svn.sourceforge.net">Everything</a>. This does wonders
  for our sanity, but we can do more. Recently (<tt class="docutils literal">n &lt; 6</tt> months)) we’ve
  started doing something we should have done from Day 1: develop in one ...</p>
url: /2007/11/06/sane-merging-in-svn/
categories:
  - development
tags:
  - branch
  - development
  - subversion

---
We use [Subversion][1]  for [version control][2]  at [work][3] . We try to version control everything: code, content, graphics, site configuration. [Everything][4] . This does wonders for our sanity, but we can do more. Recently (<tt class="docutils literal">n < 6</tt> months)) we’ve started doing something we should have done from Day 1: develop in one tree, deploy in another. In our case we’re developing in the <tt class="docutils literal">trunk</tt>, and there’s a long-lived branch cleverly named <tt class="docutils literal">production</tt>. This is great, with one little problem: cherry-picking revisions to merge in Subversion is a pain in the ass.

Last week I was looking at the [upcoming features][5]  in Subversion 1.5. [Asheesh][6]  had pointed out the [merge tracking][7]  feature, which sounded lovely. And it probably will be. The thing I discovered, though, is that you can get it today in the form of [svnmerge][8] .

<tt class="docutils literal">svnmerge</tt> allows you to track what revisions you’ve merged from a branch (or trunk), block certain revisions (features you might not want to deploy just yet), and performs the merges for you when that time arrives (including generating a nice commit message containing all the log messages you’re merging; handy). I spent an hour yesterday and an hour today getting the merges recorded for the packages I’m currently working on, and it already feels better. No more wondering if I remembered to merge something; just <tt class="docutils literal">svnmerge avail</tt> and see if anything shows up.

Sure, it’ll be great to get this feature into the core application (and an interactive mode ala [darcs][9]  would be slick, too), but to paraphrase Scarlett O’Hara, “with god as my witness, I will never <tt class="docutils literal">svn merge</tt> again”.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2007-11-06 13:32:25
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      535
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
      sane-merging-in-svn
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
      branch, development, subversion
    </td>
  </tr>
</table>

 [1]: http://subversion.tigris.org
 [2]: http://en.wikipedia.org/wiki/Revision_control
 [3]: http://creativecommons.org
 [4]: http://cctools.svn.sourceforge.net
 [5]: http://subversion.tigris.org/roadmap.html
 [6]: http://asheesh.org/note/
 [7]: http://subversion.tigris.org/merge-tracking/
 [8]: http://www.orcaware.com/svn/wiki/Svnmerge.py
 [9]: http://darcs.net