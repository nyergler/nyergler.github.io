---
title: 'New Foundations'
author: Nathan Yergler
type: post
date: 2012-05-16T23:13:57+00:00
excerpt: |
  <p>I’ve written a little about how I think about technical debt, and what
  it means to live with it. I want to talk about some technical debt at
  Creative Commons, and how we handled it the wrong way. A project we
  thought would take a couple months stretched into ...</p>
url: /2012/05/16/new-foundations/
categories:
  - engineering
  - process
  - talks

---
I’ve written a little about how I think about technical debt, and what it means to live with it. I want to talk about some technical debt at Creative Commons, and how we handled it the wrong way. A project we thought would take a couple months stretched into years, and in the end never fulfilled the promise we thought it had. And it was supposed to be a straight-forward project.

One of the things people don’t always know about Creative Commons is that there was a large technical component undergirding the licenses. Every license was prepared for three audiences (in talks, this is where I call them disjoint, in a lame attempt at humor): humans (the license “deed”), lawyers (the legal text), and machines. The output for machines was an <span class="caps">RDF</span> model of the license: it’s permissions, requirements, and prohibitions. In 2008 we had a technical all hands meeting where the tech team came to the San Francisco office for a week. At that time porting (preparing a license for a new legal jurisdiction and translating the web tools) was in full swing, and as we talked about what the pain points were, launching these new jurisdictions came up as a major source of pain. As we started drawing the model of how things worked on the site, I arrived at the following diagram.

<div class="figure">
  <img alt="" src="http://farm3.staticflickr.com/2297/2347987536_5515b1f963.jpg" />

  <p class="caption">
    <a class="reference external" href="http://www.flickr.com/photos/nathan_y/2347987536/">The Present</a>
  </p>
</div>

We had at least three different “products” — the license chooser, the <span class="caps">API</span> for 3rd parties, and the prepared licenses (deeds and <span class="caps">RDF</span>). And for hysterical and historical reasons, they didn’t really use the same information. Well, they did at a certain level: they all used the same translation files, but after that all bets were off. We had the “questions” used for selecting a license modeled as an <span class="caps">XSLT</span> transformation (why? don’t remember; wish I knew what we were thinking when we did that), but the transformation needed to have localized content, so we would generate a new <span class="caps">XSLT</span> document from a <span class="caps">ZPT</span> template (yes, really) when we updated the translations. The license <span class="caps">RDF</span> was stored as static files for performance, but there was increasing pressure to provide localized data there, too, which was going to cause a world of hurt. And the chooser had a thin wrapper, cc.license, around the <span class="caps">XSLT</span>. Except when it went directly to the <span class="caps">XSLT</span> for special cases.

If you look in the upper right hand corner, you’ll see something labeled “cc.licenze”. This was a prototype library I had written when adding support for <span class="caps">CC0</span> to the site. The idea was this: We claim that the <span class="caps">RDF</span> is the technical model for our legal tools. If that’s true, can we put enough information in it to drive the entire process, and have a single source of information? After launching <span class="caps">CC0</span>, signs pointed to yes. We set out to build a glorious future.

<div class="figure">
  <img alt="" src="http://farm4.staticflickr.com/3267/2347986388_dd1c466a5e.jpg" />

  <p class="caption">
    <a class="reference external" href="http://www.flickr.com/photos/nathan_y/2347986388/">The Glorious Future</a>
  </p>
</div>

We’d build a single wrapper around our <span class="caps">RDF</span> and use it everywhere. We’d update one thing when we launched a new jurisdiction, and all the changes would flow to all parts of the site. It sounded amazing. The thing is, we were talking about moving our core infrastructure — our house — to a new foundation, but that foundation wasn’t built yet. We hadn’t really even figured out if it’d support the house or not.

Undeterred, an engineer set out to start building out “cc.licenze”, filling in the gaps I’d left to make it do all the things that licenses need that <span class="caps">CC0</span> does not. And he got most of the work done, and then he left. So the work languished while we focused on continuing to ship new jurisdictions and do everything an understaffed technical team has to deal with.

The problem isn’t that we wanted to improve our underlying infrastructure, or that we wanted a coherent and consistent model. Those are the right goals. The problem was trying to build an entirely new foundation, with similar but not exactly the same APIs as the original one, and thinking we were going to slip it in. Starting this project today, I’d look at the three ways we were doing things, find the one that had the least debt, and rebase the other services/products onto it. By choosing one currently in use, any improvements made (either by rebasing or fixing bugs) would show immediate benefit. There’s immediate, tangible benefit to going from three ways to do something to two, and from two to one. Once everything uses the same foundation, there’s only one thing to rebuild and replace, not three, and we probably have a better idea about **everything** it needs to do.

To successfully live with technical debt, this is the sort of maneuver you often have to use. I think of this as Lateral Refactoring: you’re not refactoring to the <span class="caps">API</span>/design you want to wind up with, you’re tacking along an orthogonal axis until you’re at the point where you can start moving forward again. By doing this you can realize some benefit sooner, and continue shipping new features and bug fixes.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2012-05-16 23:13:57
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      2073
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
      new-foundations
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
      engineering, process, talks
    </td>
  </tr>
</table>