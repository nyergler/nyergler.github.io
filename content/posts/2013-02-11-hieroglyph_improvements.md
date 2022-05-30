---
title: Hieroglyph Improvements
date: 2013-02-11T00:00:00.000Z
categories:
  - hieroglyph
tags:
  - hieroglyph
  - rst
  - sphinx
slug: hieroglyph_improvements
---
If you're using [Hieroglyph][1]  for generating slides with [Sphinx][2] , you may want to use the version in [git][3]  rather than the release. A few things have landed there recently:

* <a class="reference external" href="https://github.com/tjadevries">tjadevries</a> contributed fixes for incremental slides in Chrome.

    It seems that a recent change in Chrome caused the incremental slide
    Javascript, which originated in the Google HTML5 Slides project, to stop
    working. `master` has a fix for that.
* Proper pruning when `autoslides` are disabled.

    If you have `autoslides` turned off in a document, Hieroglyph will now
    properly prune the document when generating slides to only show explicit
    `slide` directives. This was broken in 0.5.

* Fixed header sizing for `slide` directives.

    The `slide` directive allows you to specify a `level` attribute. This is
    supposed to be used for determining how to render the slide title (for
    example, a level of 2 should render the title as an `<h2>`). This was broken
    in 0.5, and is fixed now.

I'm using Hieroglyph for my PyCon tutorial, "[Effective Django][4]", but the way
I'm using it is pretty different than it has been previously. The slides and
HTML output differ more, so I'm not relying on automatic slide generation the
way I was initially. I expect I'll make a new release around PyCon (mid-March)
when I've done an entire talk in this manner.



 [1]: http://hieroglyph.io/
 [2]: http://sphinx-doc.org/
 [3]: https://github.com/nyergler/hieroglyph
 [4]: https://us.pycon.org/2013/schedule/presentation/9/
