---
title: Effective Django at OSCON Post-Mortem
date: 2013-07-27T00:00:00.000Z
categories:
  - talks
tags:
  - effective django
  - oscon
  - pyohio
  - python3
slug: effdj-oscon-pm
---
I've been on the road a little more than a week now, back to back conferences. On Tuesday I presented my [Effective Django][1]  tutorial [at OSCON][2] . I've recently updated it to cover integrating static assets with your project, and re-organized some of the view information. The biggest challenge with presenting a tutorial like that is figuring out how fast (or slow) to go. I've practiced the tutorial and use Django daily, so of course I'm able to type and diagnose what's going on more quickly. At the break on Tuesday a few people asked me to slow down, but as I walked around the room, two others told me (quite kindly) that they wouldn't mind if I sped up. This was a little worse than at PyCon, I think, primarily because I didn't have friends and colleagues assisting me. At PyCon they were able to wander the room and help backfill support for those who were moving a little slower.

I think the next time I deliver [Effective Django][1]  --- or any tutorial --- I'll probably try to mitigate with a few different ways:

<ul class="simple">
  <li>
    Make sure I have assistants. I actually had one planned for OSCON, but he unfortunately fell ill. Next time I'll try to have more than one scheduled (I had four at PyCon, three is probably fine).
  </li>
  <li>
    Provide more guidance in the synopsis. If I'm going to assume no prior Django knowledge, I should probably say something like "We'll start from zero and build a Django application together," rather than just relying on the slightly ambiguous <em>Novice</em> tag in the program.
  </li>
  <li>
    Provide some clear stopping points. I noticed that some attendees stayed with it for the first half, or first three quarters, but disengaged before the end. I tried to structure the tutorial so that you can stop at any time and still have learned something, but I could be more explicit about that. "And now we know how to write views that use the ORM," rather than "We'll see in a moment how to wire that into the &#8230;"
  </li>
  <li>
    Make sure my handouts are ready to go. At OSCON I didn't realize they were sitting in cardboard boxes off to the side until half way through. I noticed that in the second half, a couple of the people who had been struggling previously were keeping up slightly better once they had another source to refer to.
  </li>
</ul>

The people I spoke to afterward uniformly said they learned _something_ (whether it was as much as they'd hoped is another question, I suppose), so this feels like an overall success.



 [1]: http://effectivedjango.com/tutorial/
 [2]: http://www.oscon.com/oscon2013/public/schedule/detail/29158
