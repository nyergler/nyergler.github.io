---
title: Advice for the New Guy
date: 2012-05-22T18:10:20.000Z
categories:
  - engineering
slug: advice-for-the-new-guy
---
We have three people joining the team at Eventbrite in the next month, and we’ve been talking about how to “indoctrinate” them in the Eventbrite Way. This isn’t “how to program” or “how to engineer”, it’s “how to work well with the established team” and “where to look for dragons, hang nails, paper cuts, and worse”.

Today, though, one of them emailed me, asking for what he should be studying and reading up on in the weeks before he joins us. He was planning to brush up on his Python and Django, but he was looking for suggestions. I thought about this a bit, and told him this:

First, rest up. Take a nap, or a walk around the park. Look at the grass and check out the breeze. Yes, really. It’s easy to wear yourself out in this line of work, and the first few weeks in particular are going to be challenging. You’ll be working different mental muscles that you were previously, and you’ll be meeting lots of new people. That takes a lot of energy. And it’ll be easier if you’re well rested.

When you wake up from your nap, if you still feel like doing preparatory work, here are a few suggestions:

One: Know what text editor you love and make sure your skills at using it are well honed.

You’ll be spending a lot of time in your editor, knowing it back and forth is a good thing. When I came to Eventbrite, I got to stop managing and write more code. And I realized that all the things that had been merely Emacs annoyances were suddenly really important to fix. I took the tutorial (`M-x tutorial`, natch), which actually was super helpful even though I’d been using it for years.

In particular, if you’re coming straight out of college, you’ll be working with more files at one time than you probably have in the past. Knowing how to find something in a file (and not necessarily knowing what file it’s in) will be useful. (And again, if you’re using Emacs, `grep-find` is your friend.)

[NB: If you want a longer treatise of why your editor matters, read [The Pragmatic Programmer][1] .]

Two: git.

We’ll give you some basic training on git if needed (and on how we use it here), but knowing the basics will put you ahead. If you want a reference, you could do worse than Chapters 1-3 of [Pro Git][2] . Remember: it’s not a set of files, it’s a graph of changes.

Three: Read some code

You’ll spend as much time reading code as you do writing it, if not more. Find a project and read it until you understand how it works. Better yet, find a project that’s a little, ahem, imperfect. A few suggestions based on things I’ve worked on recently-ish:

<ul class="simple">
  <li>
    <a class="reference external" href="https://github.com/nyergler/hieroglyph">Hieroglyph</a> (Follow your nose down into Sphinx and figure out how `.. noslides:` works.)
  </li>
  <li>
    <a class="reference external" href="http://mediagoblin.org/">MediaGoblin</a> (How is meddleware used? How’s it different than Django’s middleware?)
  </li>
  <li>
    <a class="reference external" href="http://openhatch.org">OpenHatch</a> (How would you take the new mission framework and make it work for things like the SVN mission?)
  </li>
</ul>

Really, just practice reading code.

And four, explore the poetry of Billy Collins, a former poet laureate. I suggest the CC-licensed album of him reading his own work, [The Best Cigarette][3] . Specifically “Another Reason I Don’t Keep a Gun In The House”, “Marginalia”, and “The Best Cigarette”. Maybe it’s just me, but listening to Collins calms me down and puts me in that space where I can be calm, creative, and make great software.

So there you have it, my advice for the new guy. If I had to sum it up, it’s “tools and skills, not technologies”. And poetry.



 [1]: https://en.wikipedia.org/wiki/The_Pragmatic_Programmer
 [2]: http://git-scm.com/book
 [3]: http://archive.org/details/BillyCollinsTheBestCigarette
