---
title: Effective Django at OSCON Post-Mortem
author: Nathan Yergler
type: post
date: 2013-07-27T00:00:00+00:00
excerpt: |
  <p>I&#8217;ve been on the road a little more than a week now, back to back
  conferences. On Tuesday I presented my <a class="reference external" href="http://effectivedjango.com/tutorial/">Effective Django</a> tutorial
  <a class="reference external" href="http://www.oscon.com/oscon2013/public/schedule/detail/29158">at <span class="caps">OSCON</span></a>. I&#8217;ve recently updated it to cover integrating static
  assets with your project, and re-organized some of the view
  information. The biggest challenge ...</p>
url: /2013/07/27/effdj-oscon-pm/
categories:
  - talks
tags:
  - effective django
  - oscon
  - pyohio
  - python3

---
I&#8217;ve been on the road a little more than a week now, back to back conferences. On Tuesday I presented my [Effective Django][1]  tutorial [at <span class="caps">OSCON</span>][2] . I&#8217;ve recently updated it to cover integrating static assets with your project, and re-organized some of the view information. The biggest challenge with presenting a tutorial like that is figuring out how fast (or slow) to go. I&#8217;ve practiced the tutorial and use Django daily, so of course I&#8217;m able to type and diagnose what&#8217;s going on more quickly. At the break on Tuesday a few people asked me to slow down, but as I walked around the room, two others told me (quite kindly) that they wouldn&#8217;t mind if I sped up. This was a little worse than at PyCon, I think, primarily because I didn&#8217;t have friends and colleagues assisting me. At PyCon they were able to wander the room and help backfill support for those who were moving a little slower.

I think the next time I deliver [Effective Django][1]  &#8212; or any tutorial &#8212; I&#8217;ll probably try to mitigate with a few different ways:

<ul class="simple">
  <li>
    Make sure I have assistants. I actually had one planned for <span class="caps">OSCON</span>, but he unfortunately fell ill. Next time I&#8217;ll try to have more than one scheduled (I had four at PyCon, three is probably fine).
  </li>
  <li>
    Provide more guidance in the synopsis. If I&#8217;m going to assume no prior Django knowledge, I should probably say something like &#8220;We&#8217;ll start from zero and build a Django application together,&#8221; rather than just relying on the slightly ambiguous <em>Novice</em> tag in the program.
  </li>
  <li>
    Provide some clear stopping points. I noticed that some attendees stayed with it for the first half, or first three quarters, but disengaged before the end. I tried to structure the tutorial so that you can stop at any time and still have learned something, but I could be more explicit about that. &#8220;And now we know how to write views that use the <span class="caps">ORM</span>,&#8221; rather than &#8220;We&#8217;ll see in a moment how to wire that into the &#8230;&#8221;
  </li>
  <li>
    Make sure my handouts are ready to go. At <span class="caps">OSCON</span> I didn&#8217;t realize they were sitting in cardboard boxes off to the side until half way through. I noticed that in the second half, a couple of the people who had been struggling previously were keeping up slightly better once they had another source to refer to.
  </li>
</ul>

The people I spoke to afterward uniformly said they learned _something_ (whether it was as much as they&#8217;d hoped is another question, I suppose), so this feels like an overall success.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      author:
    </th>

    <td class="field-body">
      Nathan Yergler
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      category:
    </th>

    <td class="field-body">
      talks
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      tags:
    </th>

    <td class="field-body">
      oscon, pyohio, effective django, python3
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      comments:
    </th>

    <td class="field-body">
    </td>
  </tr>
</table>

 [1]: http://effectivedjango.com/tutorial/
 [2]: http://www.oscon.com/oscon2013/public/schedule/detail/29158