---
title: It’s Just That Easy
date: 2003-12-12T10:32:21.000Z
slug: its-just-that-easy
categories:
  - development
---
I’ve been working on a new extension for Mozilla, and spent the better part of yesterday afternoon beating my head against a problem (as usual). When working for a <span class="caps">XUL</span> [template][1] , how the hell do you get the absolute <span class="caps">URI</span> for each resource you’re generating? For the unfamiliar, templates allow you to use <span class="caps">RDF</span> to generate content in your application. Mozilla does this with bookmarks, mail folders and even mail messages. And every item in the <span class="caps">RDF</span> resource has a unique <span class="caps">URI</span>. And the <span class="caps">RDF</span> schema’s documentation is, well… nearly non-existant. At the end of the day yesterday I was completely frustrated.

This morning I had a “brilliant” thought about how I could use other properties to interpolate the <span class="caps">URI</span>. So I implemented that in my prototype, and it mostly worked. Two hours; not bad. And then I just had a thought: I wonder what element id the template generates by default? (I was just wondering if they were unique) So I wrote a test program, and there it was: **the id is the absolute <span class="caps">URI</span>** . Now, maybe that’s documented somewhere. Maybe I overlooked it. But it should really be <span class="caps">IN</span> <span class="caps">BIG</span> F\***<span class="caps">IN</span> <span class="caps">CAPITAL</span> <span class="caps">LETTERS</span> somewhere. Sigh.

Lizzard, you almost beat me. But not this time; not this time.


 [1]: http://xulplanet.com/references/elemref/ref_template.html