---
title: 'hieroglyph: Easy, Beautiful Slides with Restructured Text'
date: 2012-03-13T22:31:16.000Z
categories:
  - hieroglyph
  - projects
tags:
  - python
  - rst
  - slides
  - sphinx
slug: hieroglyph
---
I was happy to have my talk proposal accepted for [PyCon][1]  this year, and happy with the feedback I received on my talk ([Django Forms Deep Dive][2] ). But as I was putting my talk together the distracting question was not, “what should I say”, but “what should I say it with”. As a mentor once pointed out, “it’s more fun to write programs to help you write programs than it is to write programs.” The corollary I found over the past couple weeks: “it’s more fun to write programs to help you write slides than it is to write slides.”

<div class="figure">
  <img alt="" src="/media/2012/03/Screen-Shot-2012-03-14-at-8.49.28-AM-300x187.png" />

  <p class="caption">
    <a class="reference external" href="/media/2012/03/Screen-Shot-2012-03-14-at-8.49.28-AM.png">(full size)</a>
  </p>
</div>

I was putting together notes using [reStructured Text][3]  and kept thinking that it’d be nice to generate both slides and longer written documentation from the same source. I’ve used docutils’ [S5 generator][4]  in the past, but was looking for something a little more polished looking. Something like the [HTML5 Slides][5] .

<div class="figure">
  <img alt="" src="/media/2012/03/Screenshot_2012-03-14-08-47-22-168x300.png" />

  <p class="caption">
    <a class="reference external" href="/media/2012/03/Screenshot_2012-03-14-08-47-22.png">(full size)</a>
  </p>
</div>

So I wrote a [Hieroglyph][6] , a [Sphinx][7]  builder for generating HTML5 Slides. I presented **hieroglyph** at the Sunday morning lightning talks at PyCon: you can see the [slides][8] , the [reStructured Text source][9] , as well as the [HTML documentation][6]  generated from the same source.

I’m really happy with the output — it looks great in the browser, projects well, and because I’m using the html5slides CSS, looks great on mobile devices, too. I’m even happier that I’m able to work on my content in plain text. You can find the source [on github][10] .



 [1]: https://us.pycon.org/2012/
 [2]: https://us.pycon.org/2012/schedule/presentation/420/
 [3]: http://docutils.sourceforge.net/
 [4]: http://docutils.sourceforge.net/docs/user/slide-shows.html
 [5]: http://code.google.com/p/html5slides/
 [6]: /projects/hieroglyph/
 [7]: http://sphinx.pocoo.org/
 [8]: /projects/hieroglyph/slides/
 [9]: https://github.com/nyergler/hieroglyph/blob/master/docs/index.rst
 [10]: https://github.com/nyergler/hieroglyph
