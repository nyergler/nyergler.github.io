---
title: 'Hieroglyph Improvements'
author: Nathan Yergler
type: post
date: 2013-02-11T00:00:00+00:00
excerpt: |
  <p>If you&#8217;re using <a class="reference external" href="http://hieroglyph.io/">Hieroglyph</a> for generating slides with <a class="reference external" href="http://sphinx-doc.org/">Sphinx</a>, you may
  want to use the version in <a class="reference external" href="https://github.com/nyergler/hieroglyph">git</a> rather than the release. A few things
  have landed there recently:</p>
  <ul>
  <li><p class="first"><a class="reference external" href="https://github.com/tjadevries">tjadevries</a> contributed fixes for incremental slides in Chrome.</p>
  <p>It seems that a recent change in Chrome caused the incremental slide ...</p></li></ul>
url: /2013/02/11/hieroglyph_improvements/
categories:
  - hieroglyph
tags:
  - hieroglyph
  - rst
  - sphinx

---
If you&#8217;re using [Hieroglyph][1]  for generating slides with [Sphinx][2] , you may want to use the version in [git][3]  rather than the release. A few things have landed there recently:

  * <p class="first">
      <a class="reference external" href="https://github.com/tjadevries">tjadevries</a> contributed fixes for incremental slides in Chrome.
    </p>

    It seems that a recent change in Chrome caused the incremental slide Javascript, which originated in the Google <span class="caps">HTML5</span> Slides project, to stop working. <tt class="docutils literal">master</tt> has a fix for that.

  * <p class="first">
      Proper pruning when <tt class="docutils literal">autoslides</tt> are disabled.
    </p>

    If you have <tt class="docutils literal">autoslides</tt> turned off in a document, Hieroglyph will now properly prune the document when generating slides to only show explicit <tt class="docutils literal">slide</tt> directives. This was broken in 0.5.

  * <p class="first">
      Fixed header sizing for <tt class="docutils literal">slide</tt> directives.
    </p>

    The <tt class="docutils literal">slide</tt> directive allows you to specify a <tt class="docutils literal">level</tt> attribute. This is supposed to be used for determining how to render the slide title (for example, a level of 2 should render the title as an <tt class="docutils literal"><h2></tt>). This was broken in 0.5, and is fixed now.

I&#8217;m using Hieroglyph for my PyCon tutorial, &#8220;[Effective Django][4] &#8221; [[1]][5]{#id1.footnote-reference}, but the way I&#8217;m using it is pretty different than it has been previously. The slides and <span class="caps">HTML</span> output differ more, so I&#8217;m not relying on automatic slide generation the way I was initially. I expect I&#8217;ll make a new release around PyCon (mid-March) when I&#8217;ve done an entire talk in this manner.

<table class="docutils footnote" frame="void" id="id2" rules="none">
  <colgroup><col class="label" /><col /></colgroup> <tr>
    <td class="label">
      <a class="fn-backref" href="#id1">[1]</a>
    </td>

    <td>
      I&#8217;ve started practicing my tutorial with the engineering team at Eventbrite in one hour chunks, once a week. I&#8217;ll probably post something about that experience once I have an opinion about how it works.
    </td>
  </tr>
</table>

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
      hieroglyph
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      tags:
    </th>

    <td class="field-body">
      sphinx, hieroglyph, rst
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

 [1]: http://hieroglyph.io/
 [2]: http://sphinx-doc.org/
 [3]: https://github.com/nyergler/hieroglyph
 [4]: https://us.pycon.org/2013/schedule/presentation/9/
 [5]: #id2