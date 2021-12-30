---
title: 'PyCon Day 1, Morning Sessions'
author: Nathan Yergler
type: post
date: 2007-02-23T13:36:19+00:00
excerpt: |
  <p>This morning following the “keynote”, I attended the “State fo Zope
  Panel”. As Jim pointed out at the start (and as I remember from past
  years), this is typically part one of the Jim Show (part two being
  about Zope 3 or the Zope Component Architecture). This year the panel ...</p>
url: /2007/02/23/pycon-day-1-morning-sessions/
categories:
  - development

---
This morning following the “keynote”, I attended the “State fo Zope Panel”. As Jim pointed out at the start (and as I remember from past years), this is typically part one of the Jim Show (part two being about Zope 3 or the Zope Component Architecture). This year the panel consists of four developers, with someone representing Zope 3, Zope 2, Plone and Zope writ large (including the Zope Foundation). After hearing about the state of Plone, Zope 2, and Zope 3, Jim spoke about the Zope Foundation. I was particularly suprised to that there are only 48 committer members in the foundation. Given that I’m one of them, well… wow [[1]][1]{#id1.footnote-reference}. I appreciated Jim’s frankess about the challenges the Foundation faces, as well as his thoughts on Zope as a Pluggable Application versus Zope as a Library.

Based on the questions to the panel, there still seems to be lots of angst over the future of Zope 2 with respect to Zope 3. Jim made some deceptively sane comments about Zope 2 and Zope 3 last year [[2]][2]{#id2.footnote-reference}, and it seems like people still want to know “when will Zope 3 be the **real** Zope” which implies the corollary, “when will Zope 2 die?” I think this agnst stems from the desire not to invest in a “dead” technology, or to invest too early in an immature one. But the answer just doesn’t matter. Zope 2 is appropriate for use cases which Zope 3 is not, and vice versa.

<hr class="docutils" />

Following the Zope Panel I attended Ernesto Posse’s talk on writing parsers using grammar transformation. Posse set out to implement the [<span class="caps">LL</span>(1) parsing algorithm][3]  based on its simplicity and speed. However, given the limited expressiveness of an <span class="caps">LL</span>(1) grammar, his solution (called [aperiot][4] ) was to writer a parser grammar transformation which transforms a non-<span class="caps">LL</span>(1) grammar to an <span class="caps">LL</span>(1) grammar. Aperiot allows you to generate a parser as a Python module from a give grammar definition.

Grammar parsing is one of those topics which I find academically interesting, but which I have a real problem following in the course of a talk. Especially with 2 hours of sleep. But from what I was able to absorb, I think aperiot is something I’d investigate if I needed to write a parser.

<hr class="docutils" />

The final morning talk I attended was an overview of developing desktop applications with Dabo. Ed presented on [Dabo][5]  two years ago at PyCon is <span class="caps">DC</span>; I remember it well because I was in the same track as him [[3]][6]{#id3.footnote-reference}, presenting about cross-platform development with [wxPython][7] . If I recall correctly, Ed’s talk in <span class="caps">DC</span> talked a lot about the automated database to <span class="caps">UI</span> development. Today’s talk focused on how Dabo wraps the wxPython <span class="caps">API</span> to make it more “Python-ic”. Ed has a really good point: wxPython is powerful, and it looks great on each platform, because it uses native widgets. But when it comes to the <span class="caps">API</span>, knowing how C++ works is unfortunately a benefit, because it’s C++ roots show through [[4]][8]{#id4.footnote-reference}.

After some slides presenting an overview of Dabo’s <span class="caps">API</span>, Ed presented a deceptively simple example program. The example loads an image, and allows the user to rotate, resize, stretch, clip, etc. Image handling is a particular token of pain in wxPython, so the demo really resonated with me. Particularly cool points:

<ul class="simple">
  <li>
    Loading an image is as simple as assigning a file path to the picture property of an image control; Dabo handles the loading process.
  </li>
  <li>
    Python objects can act as “data sources”; more accurately, Dabo has a really flexible binding method, which allows you to do things like create a drop-down that changes the image clipping mode (this is really simple, but hey, saving 4 lines of code is saving 4 lines of code).
  </li>
</ul>

For his final image demo, Ed demonstrated adding drag and drop support to the image control. Drag and drop is… well, it **still** doesn’t work exactly right under some edge cases in ccPublisher or ccLookup, and that code’s been reworked half a dozen times with special exceptions and handlers. I think the total code to add support was something like 3 or 4 lines. If it works half as well as the demo, that’s really cool.

Ed wrapped up his talk with a demonstration of creating a wxPython grid bound to a database. Holy crap. I’m not sure exactly when I’ll use Dabo, but the next time I’m doing cross-platform desktop development, [dabodev.com][9]  will be one of my first stops.

<hr class="docutils" />

<table class="docutils footnote" frame="void" id="id5" rules="none">
  <colgroup><col class="label" /><col /></colgroup> <tr>
    <td class="label">
      <a class="fn-backref" href="#id1">[1]</a>
    </td>

    <td>
      I say “wow” only because my contributions have been sparse and sporadic, to put it generously.
    </td>
  </tr>
</table>

<table class="docutils footnote" frame="void" id="id6" rules="none">
  <colgroup><col class="label" /><col /></colgroup> <tr>
    <td class="label">
      <a class="fn-backref" href="#id2">[2]</a>
    </td>

    <td>
      Zope 3 doesn’t need to replace Zope 2, maybe it never will, or maybe there should be something called Zope 5 that just builds Zope 2 as an application on the Zope 3 library… or something like that. It <strong>was</strong> a year ago, and I <strong>have</strong> been to Rio since then.
    </td>
  </tr>
</table>

<table class="docutils footnote" frame="void" id="id7" rules="none">
  <colgroup><col class="label" /><col /></colgroup> <tr>
    <td class="label">
      <a class="fn-backref" href="#id3">[3]</a>
    </td>

    <td>
      It was sort of the year of the desktop development talk, if I recall correctly.
    </td>
  </tr>
</table>

<table class="docutils footnote" frame="void" id="id8" rules="none">
  <colgroup><col class="label" /><col /></colgroup> <tr>
    <td class="label">
      <a class="fn-backref" href="#id4">[4]</a>
    </td>

    <td>
      Admittedly they show through to a much smaller degree now, but there are still moment
    </td>
  </tr>
</table>

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2007-02-23 13:36:19
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      485
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
      pycon-day-1-morning-sessions
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

 [1]: #id5
 [2]: #id6
 [3]: http://en.wikipedia.org/wiki/LL%281%29
 [4]: http://moncs.cs.mcgill.ca/people/eposse/projects/aperiot/
 [5]: http://dabodev.com/
 [6]: #id7
 [7]: http://wxpython.org
 [8]: #id8
 [9]: http://dabodev.com