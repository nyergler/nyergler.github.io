---
title: flymake with Sphinx
date: 2013-03-06T00:00:00.000Z
categories:
  - emacs
  - python
  - sphinx
tags:
  - none
slug: flymake_with_sphinx
---

Working on my [PyCon tutorial][1] (next week!), I've been spending a _lot_ of time in Emacs editing [reStructured Text][2] documents. I use [Sphinx][3] and [Hieroglyph][4] to generate the HTML, the slides, and the PDF from a single source, which make it easy for me to keep everything in sync. [flymake][5] is an Emacs mode that's designed to do syntax or spell checking as you work. The name reveals its roots: in its simplest form, it just runs `make` for your project.

I was tired of flipping over to the shell to re-build the Sphinx project, so I decided to enable flymake for `.rst` files and see what happened. The `flymake-allowed-file-name-masks` variable has a list of regular expressions to flymake commands, so I added the following element to the list:

```elisp
("\\.rst\\'" flymake-simple-make-init)
```

That was enough to get flymake to invoke the Makefile, and then I just needed to add the target it looks for: `check-syntax`. I added the following target to my Sphinx project Makefile:

```makefile
check-syntax:
        $(SPHINXBUILD) -n -N -q -b html $(ALLSPHINXOPTS) $(BUILDDIR)/
        $(SPHINXBUILD) -n -N -q -b slides $(ALLSPHINXOPTS) $(BUILDDIR)/slides
```

In my case I'm building both HTML and Slides from the Sphinx project, and I wanted both to be updated when I changed a file in Emacs. That did it.

Now all I _wanted_ was automagic execution of `make`, but to my pleasant surprise, Sphinx's warning and error output is compatible with flymake by default. Suddenly Emacs highlighted missing [targets][6] and directives with missing arguments in red. With [flymake-cursor][7] enabled, moving my cursor over one of those red lines showed me the Sphinx error below the mode-line.

There you have it: Sphinx just works with Emacs and flymake, you just need to turn it on.

[1]: https://us.pycon.org/2013/schedule/presentation/9/
[2]: http://docutils.sf.net
[3]: http://sphinx-doc.org
[4]: http://hieroglyph.io/
[5]: http://flymake.sourceforge.net/
[6]: http://docutils.sourceforge.net/docs/user/rst/quickref.html#hyperlink-targets
[7]: http://www.emacswiki.org/emacs/flymake-cursor.el
