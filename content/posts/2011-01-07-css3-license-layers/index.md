---
title: Visualizing CC Licenses with CSS3 Transitions & Transforms
date: 2011-01-07T22:54:20.000Z
categories:
  - experiments
tags:
  - css3
  - experiment
  - javascript
  - jquery
slug: css3-license-layers
---
**TL;DR:** Go check out the [CSS3-based visualization of the CC license
model][1] (Chrome, Safari, or Firefox 4). Read below for details of why and how
I built it.

We launched a refresh of the Creative Commons’ site design on Thursday. Part of
that refresh was updating the content of some key pages, based on user feedback.
We heard from users that the pages could be clearer, and could give better
examples of what Creative Commons licensees are, how they’re used, and who’s
using them. One of the pages we updated was the [Licenses][2] page, which
provides an overview of the CC licenses.

{{< figure
  src="./license-layers.png"
>}}

When I was looking at the page on Thursday, I was particularly
taken by the graphic [Alex][4]  put together to show the three conceptual layers
of a CC license: machine readable, human readable, and legal code. This concept
is part of CC’s unique approach to public licenses since day one, but it’s
something I’ve always struggled to describe in a way other than a lawyer joke
(“get it? lawyers aren’t humans!”). Alex’s graphic seemed like a great, simple
illustration of how the layers stack and complement one another. It also seemed
like it was begging for an interaction implementation.

I was immediately reminded of the [Mozilla Hacks][5]  [columns][6]  about using
[CSS3 Transitions][7]  to add interactivity to HTML content. Transitions
effectively let you say, “when this CSS property changes, don’t make the change
immediately; apply this function from the previous value to the new one, and
make the change take this long.” The result is the ability make elements fade in
or out, move, etc, without the use of Javascript (except, perhaps, applying the
new CSS class). CSS Transitions are still in development, so you wind up using
the vendor prefixed versions: `-moz-transition`, `-webkit-transition`, and
`-o-transition`. Coupled with [CSS3 Transformations][8]  (which let you move,
skew, and rotate objects), you can achieve some really interesting effects.

Thursday afternoon at the end of the work day I sat down to read up on
Transitions and Transformations, and to see if I could make three isometric
squares stack on top of one another, like Alex’s graphic. (I found [this
article][9]  particularly helpful in its clarity and directness.) Within about
30 minutes I had a working transformation and transition, using [jQuery][10]  to
listen for click events, and applying a different CSS class on click. Alex
converted the graphic elements to an SVG I could pull apart, and Thursday
evening I started hacking, applying the SVG elements as the background on
`<div>`s, and writing additional CSS classes to show details about each layer.

{{< figure
  src="./3layers.png"
>}}

After a couple hours Thursday night, and a little more tweaking this morning, I
had a functioning [interactive layer visualization][1]. It’s about 100 lines of
Javascript, and roughly twice that many lines of CSS. The source and assets are
in the [labs/license-layers][11] git repository on
[code.creativecommons.org][12]. I’m sure there are ways that both the Javascript
and CSS could be improved, but am pretty proud of this as a first outing.

One of the interesting challenges of putting this together was how to chain
transitions. In particular, when you first click the CC logo, we wanted it to
shift to an isometric projection, and then expand. While it was clear that we
needed to apply two different classes in sequence with a delay, we found the
jQuery’s [.delay()][13] call didn’t seem to work. In fact, using `.delay()`
seemed to cause the browser to skip the transition, and apply the new class
right away. `window.setTimeout` did work.

I also ran into some issues with my SVG graphics. The first iteration apparently
had some issues in the SVG exported from Illustrator. While they worked
adequately in Firefox 4.0 beta 8, Chrome rendered them in a pixelated fashion,
and Opera rendered them in a spectacularly broken manner. Removing the offending
elements from the SVG and regenerating the individual images made them render
smoothly in Firefox and Chome, and Opera also improved from broken to pixelated.

Overall this was a really fun experiment, and it was gratifying to see how
support for these new specifications makes visually engaging pages really
straightforward.



 [1]: http://labs.creativecommons.org/2011/demos/license-layers/
 [2]: http://creativecommons.org/licenses/
 [4]: http://redprocess.com/
 [5]: http://hacks.mozilla.org/
 [6]: http://hacks.mozilla.org/2010/07/firefox4-beta2/
 [7]: http://www.w3.org/TR/css3-transitions/
 [8]: http://www.w3.org/TR/css3-2d-transforms/
 [9]: http://robertnyman.com/2010/04/27/using-css3-transitions-to-create-rich-effects/
 [10]: http://jquery.com/
 [11]: http://code.creativecommons.org/viewgit/labs/license-layers.git/
 [12]: http://code.creativecommons.org/
 [13]: http://api.jquery.com/delay/
