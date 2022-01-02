---
title: “Actions” for SMW Applications (Hypothetically)
date: 2010-01-07T22:13:41.000Z
categories:
  - CC
  - development
tags:
  - cc
  - mediawiki
  - semantic mediawiki
  - smw
  - teamspace
slug: actions-for-smw-applications-hypothetically
---
[Talking about AcaWiki][1]  has me thinking some more about our experiences over the past couple years with [Semantic MediaWiki][2] , particularly about building “applications” with it. I suppose that something like AcaWiki could be considered an application of sorts — I certainly wrote about it as such earlier this week — but in this case I’m talking about applications as reusable, customizable pieces of software that do a little more than just <span class="caps">CRUD</span> data.

In 2008 we were using our internal wiki, Teamspace, for a variety of things: employee handbook, job descriptions, staff contact information, and grants. We decided we wanted to do a better job at tracking these grants, specifically the concrete tasks associated with each, things we had committed to do (and which potentially required some reporting). As we iterated on the design of a grant, task, and contact tracking system, we realized that a grant was basically another name for a project, and the [Teamspace project tracking system][3]  was born.

![][4]

As we began working with the system, it became obvious we needed to improve the user experience; requiring staff members to look at yet another place for information just wasn’t working. So [Steren Giannini][5] , one of our amazing interns, built [Semantic Tasks][6] .

Semantic Tasks is a MediaWiki extension, but it’s driven by semantic annotations on task pages. Semantic Tasks’ primary function is sending email reminders. One of the things I really like about Steren’s design is that it works with existing MediaWiki conventions: we annotate Tasks with the assigned (or cc’d) User page, and Semantic Tasks gets the email addresses from the User page.

There were two things we brainstormed but never developed in 2008. I think they’re both still areas of weakness that could be filled to make <span class="caps">SMW</span> even more useful as an application platform. The first is something we called _Semantic Actions_: actions you could take on a page that would change the information stored there.

![][7]

Consider, for example, marking a task as completed. There are two things you’d like to do to “complete” a task: set the status to complete and record the date it was completed. The thought was that it’d be very convenient to have “close” available as a page action, one which would effect both changes at once without requiring the user to manually edit the page. Our [curry][8] -fueled brainstorm was that you could describe these changes using Semantic Mediawiki annotations[1]_. [Turtles all the way down][9] , so to speak.

The amount of explaining this idea takes, along with some distance, makes me uncertain that it’s the right approach. I **do** think that being able to easily write extensions that implement something more than <span class="caps">CRUD</span> is important to the story of <span class="caps">SMW</span> as a “real” application platform. One thing I that makes me uncertain about this approach is the fear that we are effectively rebuilding Zope 2’s ZClasses, only crappier. [ZClasses][10] , for those unfamiliar, were a way to create classes and views through the a web-based interface. A user with administrative rights could author an “application” through the web, getting lots of functionality for “free”. The problem was that once you exhausted ZClasses’ capabilities, you pretty much had to start from scratch when you switched to on disk development. Hence Zope 2’s notorious “Z-shaped learning curve”. I think it’s clear to me now that building actions through the web is going to by necessity expose a limited feature set. The question is whether it’s enough, or if we should encourage people to write [Semantic] Mediawiki extensions that implement the features they need.

Maybe the right approach is simply providing really excellent documentation so that developers can easily retrieve the values the <span class="caps">SMW</span> annotations on the pages they care about. You can imagine a skin that exists as a minor patch to Monobook or Vector, which uses a hook to retrieve the installed <span class="caps">SMW</span> “actions” for a page and displays them in a consistent manner.

Regardless of the approach taken, if <span class="caps">SMW</span> is going to be a platform, there has to be an extensibility story. That story already exists in some form; just look at the [extensions already available][11] . Whether the existing story is sufficient is something I’m interested in looking at further.

Next time: Thoughts on Installation and Deployment.

<hr class="docutils" />



 [1]: http://yergler.net/blog/2010/01/04/acawiki-on-building-emerging-applications/
 [2]: http://sematic-mediawiki.org/
 [3]: http://wiki.creativecommons.org/CcTeamspace
 [4]: http://farm3.static.flickr.com/2139/2438557055_1ec9fda7f8.jpg
 [5]: http://creativecommons.org/about/people/alumni#100
 [6]: http://www.mediawiki.org/wiki/Extension:SemanticTasks
 [7]: http://farm3.static.flickr.com/2153/2611966782_16926c3938.jpg
 [8]: http://mehfilindian.com/
 [9]: http://en.wikipedia.org/wiki/Turtles_all_the_way_down
 [10]: http://wiki.zope.org/zope2/ZClasses
 [11]: http://semantic-mediawiki.org/wiki/Help:Extensions
