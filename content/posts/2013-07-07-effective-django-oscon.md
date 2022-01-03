---
title: “Effective Django” at OSCON
date: 2013-07-07T00:00:00.000Z
categories:
  - Effective Django
tags:
  - effective django
  - python
  - talks
  - tut
slug: effective-django-oscon
---
I&#8217;m going to be presenting my introductory Django tutorial, [Effective Django][1]  at OSCON later this month. If you&#8217;re going to be at [OSCON][2]  and haven&#8217;t selected your tutorials yet, or just think a trip to Portland, Oregon sounds nifty, there&#8217;s still time to sign up. You can find the details on [the OSCON tutorial page][3] .

In preparation for that I&#8217;ve been continuing to work on the content. I presented the tutorial to some of the Eventbrite engineering team a couple weeks ago, and thier feedback was very useful. In response, I&#8217;ve made a few changes. Specifically, I split up the [Views][4]  chapter with a brief interlude on [static assets][5]  and template inheritance. It&#8217;s something that I didn&#8217;t cover the first time around, but based on the questions, I think some guidance is useful.

The revisions for OSCON also include updating the sample code repository that goes with the tutorial. I developed a tool, [Tut][6] , to help manage these stacked branches, and while making changes to early parts of the tutorial code, I realized it still requires significant work to really be a good workflow tool. One of the most important requirements for Tut is the ability to manage an ordered series of &#8220;checkpoints&#8221; and move between them.

When I started working on the sample code this time around, I was on a new laptop, so I had to start from a fresh clone. This was revealing and frustrating. I discovered Tut assumed all the branches were already local, which they obviously aren&#8217;t with a fresh clone. Worse, the git magic I was trying to use to get the branch list in the &#8220;right&#8221; order was pretty fragile, and broke when I tried to lean on it at all.

![][7]

This screenshot shows a common editing case. My intention is to manage each step, or checkpoint, in the tutorial as a branch. Each step builds on the previous one, so if I make a change to something early in the tutorial, I just need to merge the branches &#8220;forward&#8221; until I get to master. In this example I&#8217;ve checked out the `contact_form_test` branch and added a new commit. In order for Tut to help me merge that forward, I need to be able to generate the list of steps.

The _correct_ order here (last step first) is `master`, `custom_form_rendering`, `contact_form_test`, `edit_addresses`, `address_model`, `confirm_contact_email`, `contact_detail_view`. But you can&#8217;t get that out with either date or topo ordering. You really need to walk back from master, looking for branches (head refs), and at each step look for any head refs reachable (as children) that you haven&#8217;t already seen. I haven&#8217;t figured out how to do that yet with git plumbing commands, so for the time being I&#8217;m just using a text file to record the correct order. [[1]][8]{#id1.footnote-reference}

I&#8217;m really excited about presenting Effective Django at OSCON, and appreciate the feedback and suggestions from everyone.



 [1]: http://effectivedjango.com/
 [2]: http://www.oscon.com/
 [3]: http://www.oscon.com/oscon2013/public/schedule/detail/29158
 [4]: http://effectivedjango.com/tutorial/views.html
 [5]: http://effectivedjango.com/tutorial/static.html
 [6]: https://github.com/nyergler/tut
 [7]: /media/2013/tut-branch-confusion.png
 [8]: #id2
