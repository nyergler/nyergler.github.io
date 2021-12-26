---
title: 'flymake with Sphinx'
author: Nathan Yergler
type: post
date: 2013-03-06T00:00:00+00:00
excerpt: |
  <p>Working on my <a class="reference external" href="https://us.pycon.org/2013/schedule/presentation/9/">PyCon tutorial</a> (next week!), I&#8217;ve been spending a
  <em>lot</em> of time in Emacs editing <a class="reference external" href="http://docutils.sf.net">reStructured Text</a> documents. I use
  <a class="reference external" href="http://sphinx-doc.org">Sphinx</a> and <a class="reference external" href="http://hieroglyph.io/">Hieroglyph</a> to generate the <span class="caps">HTML</span>, the slides, and the <span class="caps">PDF</span>
  from a single source, which make it easy for me to keep everything in
  sync ...</p>
url: /2013/03/06/flymake_with_sphinx/
categories:
  - emacs
  - python
  - sphinx
tags:
  - none

---
Working on my [PyCon tutorial][1]  (next week!), I&#8217;ve been spending a _lot_ of time in Emacs editing [reStructured Text][2]  documents. I use [Sphinx][3]  and [Hieroglyph][4]  to generate the <span class="caps">HTML</span>, the slides, and the <span class="caps">PDF</span> from a single source, which make it easy for me to keep everything in sync. [flymake][5]  is an Emacs mode that&#8217;s designed to do syntax or spell checking as you work. The name reveals its roots: in its simplest form, it just runs <tt class="docutils literal">make</tt> for your project.

I was tired of flipping over to the shell to re-build the Sphinx project, so I decided to enable flymake for <tt class="docutils literal">.rst</tt> files and see what happened. The <tt class="docutils literal"><span class="pre">flymake-allowed-file-name-masks</span></tt> variable has a list of regular expressions to flymake commands, so I added the following element to the list:

<pre class="literal-block">("\\.rst\\'" flymake-simple-make-init)
</pre>

That was enough to get flymake to invoke the Makefile, and then I just needed to add the target it looks for: <tt class="docutils literal"><span class="pre">check-syntax</span></tt>. I added the following target to my Sphinx project Makefile:

<pre class="literal-block">check-syntax:
        $(SPHINXBUILD) -n -N -q -b html $(ALLSPHINXOPTS) $(BUILDDIR)/
        $(SPHINXBUILD) -n -N -q -b slides $(ALLSPHINXOPTS) $(BUILDDIR)/slides
</pre>

In my case I&#8217;m building both <span class="caps">HTML</span> and Slides from the Sphinx project, and I wanted both to be updated when I changed a file in Emacs. That did it.

Now all I _wanted_ was automagic execution of <tt class="docutils literal">make</tt>, but to my pleasant surprise, Sphinx&#8217;s warning and error output is compatible with flymake by default. Suddenly Emacs highlighted missing [targets][6]  and directives with missing arguments in red. With [flymake-cursor][7]  enabled, moving my cursor over one of those red lines showed me the Sphinx error below the mode-line.

There you have it: Sphinx just works with Emacs and flymake, you just need to turn it on.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      author:
    </th>

    <td class="field-body">
      Nathan Yergler
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      category:
    </th>

    <td class="field-body">
      python, sphinx, emacs
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      tags:
    </th>

    <td class="field-body">
      none
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      comments:
    </th>

    <td class="field-body">
    </td>
  </tr>
</table>

 [1]: https://us.pycon.org/2013/schedule/presentation/9/
 [2]: http://docutils.sf.net
 [3]: http://sphinx-doc.org
 [4]: http://hieroglyph.io/
 [5]: http://flymake.sourceforge.net/
 [6]: http://docutils.sourceforge.net/docs/user/rst/quickref.html#hyperlink-targets
 [7]: http://www.emacswiki.org/emacs/flymake-cursor.el