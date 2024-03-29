---
title: 'J2ME Development, part 2'
date: 2005-11-29T09:26:49.000Z
categories:
  - development
slug: j2me-development-part-2
---
So in [a previous post][1]  I compared two recent mobile development projects: one using J2ME for Motorola IDEN phones, and the other using Python for Nokia Series 60 phones. Since then I’ve done some more work on the J2ME project and have a few additional thoughts and clarifications.

First, I’ve found that most of my initial frustrations aren’t a result of J2ME, but rather Motorola’s crap-tacular IDEN SDK. No support for Ant or project definitions, no way to launch an editor from the tool, and little to no debugging capabilities. Contrasted to Nokia’s J2ME Developer Suite, it’s downright precambrian. In the end I just created a new VMWare machine with **just** the Motorola tools and Eclipse installed. And it works, which I guess is the important part.

So once I had the toolset running, I did run into some areas where Python has definitely made life easier for developers. Our project’s requirements called for a list-style menu with a status bar at the bottom of the screen (I’d post a screen shot from the emulator, but this is the first class project I’ve done covered by an NDA). My initial inclination was to use the high-level form API, and implement a custom item for the list. A secondary requirement is that the list be numbered, and that pressing the associated number jump you directly to the associated item. What I found, much to my dismay, is that you can’t catch arbitrary keys in a high level form element. Text entries can receive them, but you as the developer still don’t see them. [I should note here that this is the first amount of J2ME development I’ve done, and that while I searched high and low on Google, I’m open to correction]. So I ended up having to drop to the low level API. Not a huge deal, but that’s two different API’s I have to deal with now — low level for menuing, high level for input forms.

Contrast this to Python for Series 60 API. Just like J2ME you can draw directly on the screen’s Canvas and catch key presses. But in my experiments, I can catch key presses _anywhere_, not just where Nokia thought it would be convenient.

To be fair, I don’t hate J2ME. I don’t even dislike it. It just seems like Nokia has made decisions in designing their API which give the maximum flexibility to the developer, and that’s a good thing. I’m actually going to be doing a research project next semester in which I’ll be developing for J2ME, so I’ll have plenty of additional opportunities to compare and contrast. I’m also still planning on porting my Sudoku implementation to J2ME, just to do a one-to-one comparison. Stay tuned.



 [1]: http://yergler.net/blog/archives/2005/11/17/mobile-development-compared
