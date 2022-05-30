---
title: 'Hieroglyph 0.3.2: Slide Table and Interlinking'
date: 2012-06-05T13:22:29.000Z
categories:
  - projects
tags:
  - hieroglyph
  - rst
  - slides
slug: hieroglyph-0-3-2
---
Since PyCon I’ve continued to think about how I can make slides from
ReStructured Text documents and vice versa. I tend to write a lot of notes and
text while I’m putting together a talk, and I like the idea of being able to
keep slides and text output in sync. I’ve just a batch of changes to
[Hieroglyph][1] , my tool for doing that. There’s some clean-up there — better
handling of output paths when using things like blockdiag, code clean-up, etc —
but there are two things I’m really excited about. First, two pull requests (one
for Python 3 support, another for some documentation bugs), and second some new
features that I think make Hieroglyph much more powerful.

Thinking about keeping slides and text (HTML) output in sync, it occurred to me
there were probably times you’d want to easily switch between slides that
provide an overview, and the HTML document for more details and context. Much of
the work for 0.3.2 focused on enabling this interlinking. When enabled,
Hieroglyph will add links to your HTML and Slide output that links to the other
format. For HTML this can be enabled in the sidebar, as well as at the section
level. For slides, the link is added next to each slide’s header, and shows up
when you hover over the header. Check it out on the [Hieroglyph
documentation][2]  — just hover over any header and click the § link for the
corresponding slides.

When I was working on my PyCon talk, I had anywhere from 50 to 70 slides in the
deck at any given time (NB: yes, this is too many for a talk of that length).
Navigating between them was challenging at times. The second feature I’ve added
to Hieroglyph is designed to address this. When viewing a Hieroglyph
presentation, you can now press the Escape key to see the Slide Table.

{{< figure
  src="./Screen-Shot-2012-06-05-at-3.55.51-PM.png"
  caption="An example of the slide table in use for the Hieroglyph documentation."
>}}

Press Escape again to return to the slide you were on, or click a slide to jump directly to it. You can try this with the [Hieroglyph documentation slides][3] .

Finally, what should really be considered the third new feature: expanded documentation. You can find expanded documentation on configuring Hieroglyph, styling your slides, etc in the [docs online][3] .

There are several additional things I’m working on for Hieroglyph. As Ilya points out in [“All Presentation Software Is Broken”][4] , web analytics are your “free lunch” if you use HTML-based slides. I plan to bake support for that directly into Hieroglyph. As I’m using Hieroglyph, I’m also realizing that slides don’t always correspond directly to sections in a document — sometimes (but not always) they’re a paragraph, list, or something else. Some way to indicate this may be helpful. If you find Hieroglyph useful (or interesting), let me know what you’d like to see.



 [1]: http://yergler.net/blog/2012/03/13/hieroglyph/
 [2]: http://yergler.net/projects/hieroglyph/
 [3]: /projects/hieroglyph/slides/
 [4]: http://www.igvita.com/2012/05/14/all-presentation-software-is-broken/
