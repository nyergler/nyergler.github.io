---
title: 'Zope 3 Sprint, Day 3'
author: Nathan Yergler
type: post
date: 2004-03-23T21:10:31+00:00
excerpt: |
  <p>Today was the final day of the Zope 3 sprint, and overall I’d call it a
  success. We started the day finishing up the implementation of
  <a class="reference external" href="http://dev.zope.org/Wikis/DevSite/Projects/ComponentArchitecture/InstanceAndTypeBasedSubscriptions">type-based
  subscriptions</a>
  we started
  <a class="reference external" href="http://www.yergler.net/averages/archives/2004/03/23/zope_3_sprint_day_2">yesterday</a>.
  It’s amazing what a little distance can do: we came back, merged the
  work our two teams ...</p>
url: /2004/03/23/zope-3-sprint-day-3/
categories:
  - geek

---
Today was the final day of the Zope 3 sprint, and overall I’d call it a success. We started the day finishing up the implementation of [type-based subscriptions][1]  we started [yesterday][2] . It’s amazing what a little distance can do: we came back, merged the work our two teams did yesterday and were able to write tests and commit the remainder of the task before lunch.

After lunch we began work on the second half of the proposal, instance event subscriptions. While we made quite a bit of progress, a few details in how to register the events kept us from merging the branch back to the <span class="caps">HEAD</span> of Zope 3 before the end of the day. Jim spent a bit of his time explaining the motivation behind the proposal and what he envisioned as the implementation details. Jim is an excellent teacher, but I’ll admit my head was swimming a bit when we returned from lunch and began work. As Jim guided me through the implementation of a Zope3 Adapter, it was as if the clouds parted and the geeky sun shone down on me. All I could think was “this is too damn easy to actually work.” As Mark pointed out to me yesterday, that feeling is the sign of a well designed framework.

What was most exciting for me today was hearing about what’s coming yet in the Zope 3 event architecture. Currently events can be published or registered, and “listened” for. So you can receive notification that Object A has been deleted, but you can’t do anything to stop it. A proposed improvment to this is the implementation of “TentativeSubscribers”, objects which want to know about “tentative” events. Objects subscribing to tentative events can decide if they have issues with the event occuring and either veto it or return some issue(s) for the software to resolve before going ahead with the event. While still completely in the talking phase, this sort of framework would allow for powerful and rich semantics to be developed into software. An example from Stoa: student A is scheduled for Art 2nd period; when you try to schedule the student for Biology 1st period, you’re told that Biology is a double period class, and as such you’ll need to remove Art from the 2nd period schedule; is that <span class="caps">OK</span>? Now checking like this is presently possible, but the Zope 3 framework will allow it to be implemented much more directly and cleanly.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2004-03-23 21:10:31
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      99
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      layout:
    </th>

    <td class="field-body">
      post
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      slug:
    </th>

    <td class="field-body">
      zope-3-sprint-day-3
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      comments:
    </th>

    <td class="field-body">
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      category:
    </th>

    <td class="field-body">
      geek
    </td>
  </tr>
</table>

 [1]: http://dev.zope.org/Wikis/DevSite/Projects/ComponentArchitecture/InstanceAndTypeBasedSubscriptions
 [2]: http://www.yergler.net/averages/archives/2004/03/23/zope_3_sprint_day_2