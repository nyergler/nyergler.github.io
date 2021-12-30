---
title: 'The Little Things'
author: Nathan Yergler
type: post
date: 2007-01-30T08:00:21+00:00
excerpt: |
  <p>I’m knee deep in several projects right now, some using
  <a class="reference external" href="http://darcs.net">darcs</a> and some using
  <a class="reference external" href="http://subversion.tigris.org/">subversion</a> for version control. There
  are things I like about both, but that’s a different topic. There’s
  really only <em>one thing</em> I loathe about Subversion, and it looks like this:</p>
  <pre class="literal-block">
  $ svn propget svn ...</pre>
url: /2007/01/30/the-little-things/
categories:
  - development

---
I’m knee deep in several projects right now, some using [darcs][1]  and some using [subversion][2]  for version control. There are things I like about both, but that’s a different topic. There’s really only _one thing_ I loathe about Subversion, and it looks like this:

<pre class="literal-block">$ svn propget svn:externals .
  svn: Inconsistent line ending style
</pre>

Arghhh!

Insert rant about how the hell line endings get inconsistent on something Subversion should have complete control over here.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2007-01-30 08:00:21
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      471
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
      the-little-things
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
</table>

 [1]: http://darcs.net
 [2]: http://subversion.tigris.org/