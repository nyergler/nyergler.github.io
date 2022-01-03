---
title: 'PyCon Day 3: Winding Down'
date: 2006-03-07T09:03:43.000Z
categories:
  - pycon2006
slug: pycon-day-3-winding-down
---
Sunday, the third day of PyCon 2006, definitely felt like the day of rest. People had started to trickle out, and the day had a shorter schedule that the preceeding two days. Which was fine since I was dragging from the night before. The day opened with an anti-keynote: an interview with Bram Cohen of BitTorrent fame. Steve Holden conducted the interview, which was really amusing. Cohen is obviously a hacker in every sense of the word. During the interview he talked about hacking on BitTorrent while intentionally unemployed and living off credit. And about how to hack the credit system: you get dinged when you apply for credit, so simply hoard a large pile of card apps, fill them all out, and then send them out on the same day. It must have worked to some degree since Cohen is now running BitTorrent, Inc (a position he seemed a little ambivalent about — I’m sure his car would have a “I’d rather be hacking” bumper sticker). And Cohen is imminently quotable: “BitTorrent is actually very mathematically lame”, “Python faithfully repoduces the crapitude of POSIX APIs”, and “[Niklaus Wirth][1]  can bite me.”

After the keynote, Shawn and I went to Ian Bicking’s talk entitled, [The Rest of the Web Stack][2] . I’m not exactly sure what I expected, but in the end Ian provided an interesting discussion of the inherent conflict between developers and sys admins: developers want to do cool new things, sys admins want to do the same thing again and again — it’s stable. And of course, the conflict really comes up in smaller organizations where to some extent, the developer _is_ the sysadmin. I’m not sure there were any conclusions — at least none that made it into my notes — but it definitely was interesting to hear someone talking about finding that balance in development efforts.

After Ian’s talk I indulged my current [algorithmic obsession][3]  and went to [Simplying Red-Black Trees][4] . Once the presenter found the room (seriously, there were 3 to choose from), he presented a metaclass he’s used to simplify the implementation of [red-black trees][5]  at a small performance cost. The basic approach involves identifying attributes which have symmetric behavior, and can therefore be “swapped”. In the case of rb trees, this is the left and right child nodes.

The talk of the morning on Sunday was simply entitled [Django How-To][6] , which as it’s title implies was a very straight forward how-to. During the presentation Jacob Kaplan-Moss demonstrated how to build an interactive [sudoku web app][7]  using [Django][8] . Overall I was really impressed with Django — I’m still not sure I love the magic naming of admin classes and such, but its hard to argue with some of the compelling demos. Its definitely something I want to explore further.

After lunch I did the [Docutils][9]  double-bill, first attending the [Docutils Developers Tutorial][10]  and then the cryptically titled [What is Nabu?][11] . The Docutils Developers Tutorial was less of a tutorial than an overview of the systems available to developers. I’ve been slightly infatuated with docutils lately — rst2s5 is killer — but I’m not sure how I want to extend it (if at all). So it was interesting, but I think like distutils it won’t really gel until I need to extend it somehow.

[Nabu][12] , it turns out, is a way of using [reStructuredText][13]  syntax to semantically (sort of) mark up bits of information. For example, you might have a contact file that identifies how each line relates to the contact itelf. The interesting part of Nabu is that it supports lots of different kinds of information — in fact, I think you extend it in pretty much any way you want, and that it provides a way to collect these bits of information into a common database. This isn’t a system for the “middle class user” but I like seeing people working on marking up information in a way that makes it easier for programs to consume. And maybe Nabu has a future as middle ware — another program for the user interface, presenting an easy to use UI for creation of Nabu-formatted information, and the Nabu server collecting it and making it available for other users.



 [1]: http://en.wikipedia.org/wiki/Niklaus_Wirth
 [2]: http://us.pycon.org/zope/talks/2006/sun/track1/39/talkDetails2
 [3]: http://yergler.net/blog/2006/02/26/kruskal-v-prim-to-the-death/
 [4]: http://us.pycon.org/zope/talks/2006/sun/track4/70/talkDetails2
 [5]: http://en.wikipedia.org/wiki/Red_black_trees
 [6]: http://toys.jacobian.org/presentations/2006/pycon2006/
 [7]: http://www.jacobian.org/sudoku
 [8]: http://djangoproject.com
 [9]: http://docutils.sf.net
 [10]: http://us.pycon.org/zope/talks/talkLocate?year=2006&id=62
 [11]: http://us.pycon.org/zope/talks/talkLocate?year=2006&id=24
 [12]: http://furius.ca/nabu/
 [13]: http://docutils.sourceforge.net/rst.html
