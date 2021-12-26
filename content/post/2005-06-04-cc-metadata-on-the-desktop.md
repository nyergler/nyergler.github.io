---
title: CC Metadata on the Desktop
author: Nathan Yergler
type: post
date: 2005-06-04T14:57:08+00:00
excerpt: |
  <p>With the arrival of Mac <span class="caps">OS</span> X 10.4 (Tiger for the true believers),
  desktop metadata is actually getting some play. So I decided to do some
  hacking and see how <span class="caps">CC</span> would fit into that. The initial result, below,
  is a <span class="caps">CC</span> metadata importer for
  <a class="reference external" href="http://www.apple.com/macosx/features/spotlight/">Spotlight</a>. It’s
  interesting ...</p>
url: /2005/06/04/cc-metadata-on-the-desktop/
categories:
  - CC + Spotlight

---
With the arrival of Mac <span class="caps">OS</span> X 10.4 (Tiger for the true believers), desktop metadata is actually getting some play. So I decided to do some hacking and see how <span class="caps">CC</span> would fit into that. The initial result, below, is a <span class="caps">CC</span> metadata importer for [Spotlight][1] . It’s interesting for a couple of reasons. First, exposing <span class="caps">CC</span> metadata to a wider audience can only help raise awareness and encourage people to depend on the information the metadata provides. Second, and more geekily, the importer consists of a Objective C stub that loads Python code from a bundle at run time to perform the actual processing. This lets me take advantage of the code we already use for ccLookup and the Validator to do the processing.

The code isn’t ready for release yet, but should be within a week or so.

<div class="figure align-center">
  <img alt="Preview of initial version of CC Spotlight importer." src="http://yergler.net/blog/images/cc_mp3_info.jpg" />

  <p class="caption">
    Preview of initial version of <span class="caps">CC</span> Spotlight importer.
  </p>
</div>

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2005-06-04 14:57:08
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      301
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
      cc-metadata-on-the-desktop
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      comments:
    </th>

    <td class="field-body">
      False
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      category:
    </th>

    <td class="field-body">
      <span class="caps">CC</span> + Spotlight
    </td>
  </tr>
</table>

 [1]: http://www.apple.com/macosx/features/spotlight/