---
title: CC Metadata on the Desktop
date: 2005-06-04T14:57:08.000Z
categories:
  - CC + Spotlight
slug: cc-metadata-on-the-desktop
---
With the arrival of Mac <span class="caps">OS</span> X 10.4 (Tiger for the true believers), desktop metadata is actually getting some play. So I decided to do some hacking and see how <span class="caps">CC</span> would fit into that. The initial result, below, is a <span class="caps">CC</span> metadata importer for [Spotlight][1] . It’s interesting for a couple of reasons. First, exposing <span class="caps">CC</span> metadata to a wider audience can only help raise awareness and encourage people to depend on the information the metadata provides. Second, and more geekily, the importer consists of a Objective C stub that loads Python code from a bundle at run time to perform the actual processing. This lets me take advantage of the code we already use for ccLookup and the Validator to do the processing.

The code isn’t ready for release yet, but should be within a week or so.

<div class="figure align-center">
  <img alt="Preview of initial version of CC Spotlight importer." src="http://yergler.net/blog/images/cc_mp3_info.jpg" />

  <p class="caption">
    Preview of initial version of <span class="caps">CC</span> Spotlight importer.
  </p>
</div>



 [1]: http://www.apple.com/macosx/features/spotlight/
