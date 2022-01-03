---
title: It’s Just That Easy
date: 2003-12-12T10:32:21.000Z
slug: its-just-that-easy
categories:
  - development
---
I’ve been working on a new extension for Mozilla, and spent the better part of yesterday afternoon beating my head against a problem (as usual). When working for a XUL [template][1] , how the hell do you get the absolute URI for each resource you’re generating? For the unfamiliar, templates allow you to use RDF to generate content in your application. Mozilla does this with bookmarks, mail folders and even mail messages. And every item in the RDF resource has a unique URI. And the RDF schema’s documentation is, well… nearly non-existant. At the end of the day yesterday I was completely frustrated.

This morning I had a “brilliant” thought about how I could use other properties to interpolate the URI. So I implemented that in my prototype, and it mostly worked. Two hours; not bad. And then I just had a thought: I wonder what element id the template generates by default? (I was just wondering if they were unique) So I wrote a test program, and there it was: **the id is the absolute URI** . Now, maybe that’s documented somewhere. Maybe I overlooked it. But it should really be IN BIG F\***IN CAPITAL LETTERS somewhere. Sigh.

Lizzard, you almost beat me. But not this time; not this time.


 [1]: http://xulplanet.com/references/elemref/ref_template.html
