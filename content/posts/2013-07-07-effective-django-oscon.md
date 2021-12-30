---
title: “Effective Django” at OSCON
author: Nathan Yergler
type: post
date: 2013-07-07T00:00:00+00:00
excerpt: |
  <p>I&#8217;m going to be presenting my introductory Django tutorial, <a class="reference external" href="http://effectivedjango.com/">Effective
  Django</a> at <span class="caps">OSCON</span> later this month. If you&#8217;re going to be at <a class="reference external" href="http://www.oscon.com/"><span class="caps">OSCON</span></a>
  and haven&#8217;t selected your tutorials yet, or just think a trip to
  Portland, Oregon sounds nifty, there&#8217;s still time to sign up. You ...</p>
url: /2013/07/07/effective-django-oscon/
categories:
  - Effective Django
tags:
  - effective django
  - python
  - talks
  - tut

---
I&#8217;m going to be presenting my introductory Django tutorial, [Effective Django][1]  at <span class="caps">OSCON</span> later this month. If you&#8217;re going to be at [<span class="caps">OSCON</span>][2]  and haven&#8217;t selected your tutorials yet, or just think a trip to Portland, Oregon sounds nifty, there&#8217;s still time to sign up. You can find the details on [the <span class="caps">OSCON</span> tutorial page][3] .

In preparation for that I&#8217;ve been continuing to work on the content. I presented the tutorial to some of the Eventbrite engineering team a couple weeks ago, and thier feedback was very useful. In response, I&#8217;ve made a few changes. Specifically, I split up the [Views][4]  chapter with a brief interlude on [static assets][5]  and template inheritance. It&#8217;s something that I didn&#8217;t cover the first time around, but based on the questions, I think some guidance is useful.

The revisions for <span class="caps">OSCON</span> also include updating the sample code repository that goes with the tutorial. I developed a tool, [Tut][6] , to help manage these stacked branches, and while making changes to early parts of the tutorial code, I realized it still requires significant work to really be a good workflow tool. One of the most important requirements for Tut is the ability to manage an ordered series of &#8220;checkpoints&#8221; and move between them.

When I started working on the sample code this time around, I was on a new laptop, so I had to start from a fresh clone. This was revealing and frustrating. I discovered Tut assumed all the branches were already local, which they obviously aren&#8217;t with a fresh clone. Worse, the git magic I was trying to use to get the branch list in the &#8220;right&#8221; order was pretty fragile, and broke when I tried to lean on it at all.

![][7]

This screenshot shows a common editing case. My intention is to manage each step, or checkpoint, in the tutorial as a branch. Each step builds on the previous one, so if I make a change to something early in the tutorial, I just need to merge the branches &#8220;forward&#8221; until I get to master. In this example I&#8217;ve checked out the <tt class="docutils literal">contact_form_test</tt> branch and added a new commit. In order for Tut to help me merge that forward, I need to be able to generate the list of steps.

The _correct_ order here (last step first) is <tt class="docutils literal">master</tt>, <tt class="docutils literal">custom_form_rendering</tt>, <tt class="docutils literal">contact_form_test</tt>, <tt class="docutils literal">edit_addresses</tt>, <tt class="docutils literal">address_model</tt>, <tt class="docutils literal">confirm_contact_email</tt>, <tt class="docutils literal">contact_detail_view</tt>. But you can&#8217;t get that out with either date or topo ordering. You really need to walk back from master, looking for branches (head refs), and at each step look for any head refs reachable (as children) that you haven&#8217;t already seen. I haven&#8217;t figured out how to do that yet with git plumbing commands, so for the time being I&#8217;m just using a text file to record the correct order. [[1]][8]{#id1.footnote-reference}

I&#8217;m really excited about presenting Effective Django at <span class="caps">OSCON</span>, and appreciate the feedback and suggestions from everyone.

<table class="docutils footnote" frame="void" id="id2" rules="none">
  <colgroup><col class="label" /><col /></colgroup> <tr>
    <td class="label">
      <a class="fn-backref" href="#id1">[1]</a>
    </td>

    <td>
      I contemplated just using a text file in the repo as the solution, but realized that this has its own issues: if it&#8217;s under version control as well, then what&#8217;s the &#8220;right&#8221; version to look at when you&#8217;re in a branch? That branch&#8217;s? Master&#8217;s? It&#8217;s not clear to me.
    </td>
  </tr>
</table>

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
      Effective Django
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      tags:
    </th>

    <td class="field-body">
      talks, effective django, python, tut,
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

 [1]: http://effectivedjango.com/
 [2]: http://www.oscon.com/
 [3]: http://www.oscon.com/oscon2013/public/schedule/detail/29158
 [4]: http://effectivedjango.com/tutorial/views.html
 [5]: http://effectivedjango.com/tutorial/static.html
 [6]: https://github.com/nyergler/tut
 [7]: /media/2013/tut-branch-confusion.png
 [8]: #id2