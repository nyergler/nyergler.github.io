---
title: >-
  Thoughts on Deploying and Maintaining SMW
  Applications
date: 2010-01-25T21:24:51.000Z
categories:
  - CC
  - development
tags:
  - cc
  - mediawiki
  - semantic mediawiki
  - smw
slug: thoughts-on-deploying-and-maintaining-smw-applications
---
In September or October of last year, I received an email from someone who had come across [CC Teamspace][1]  and was wondering if there was a demo site available they could use to evaluate it. I told them, “No, but I can probably throw one up for you.” A month later I had to email them and say, “Sorry, but I haven’t found the time to do this, and I don’t see that changing.” This is clearly _not_ the message you want to send to possible adopters of your software — “Sorry, even I can’t install it quickly.” Now part of the issue was my own [meta/perfectionism][2] : I wanted to figure out a DVCS driven upgrade and maintenance mechanism at the same time. But even when I faced the fact that I didn’t really _need_ to solve both problems at the same time, I quickly became frustrated by the installation process. The XML file I needed to import seemed to contain extraneous pages, and things seemed to have changed between MediaWiki and/or extension versions since the export was created. I kept staring at cryptic errors, struggling to figure out if I had all the dependencies installed. This is not _just_ a documentation problem.

If we think about the application life cycle, there are a three stages a solution to this problem needs to address:[†]_

<ol class="arabic simple">
  <li>
    Installation
  </li>
  <li>
    Customization
  </li>
  <li>
    Upgrade
  </li>
</ol>

If an extension is created using PHP, users can do all three (and make life considerably easier if they’re a little VCS savvy). But if we’re dealing with an “application” built using [Semantic MediaWiki][3]  and other [SMW Extensions][4] , it’s possible that there’s no PHP at all. If the application lives purely in the wiki, we’re left with XML export/import[‡]_ as the deployment mechanism. With this we get a frustrating release process, Customization support, and a sub-par Installation experience.

The basic problem is that we currently have two deployment mechanisms: full-fledged PHP extensions, and XML dumps. If you’re not writing PHP, you’re stuck with XML export-import, and that’s just not good enough.

A bit of history: When Steren created the initial release of CC Teamspace, he did so by exporting the pages and hand tweaking the XML. This is not a straight-forward, deterministic process that we want to go through every time a bug fix release is needed.

For users of the application, once the import (Installation) is complete (assuming it goes better than my experience), Customization is fairly straight-forward: you edit the pages. When an Upgrade comes along, though, you’re in something of a fix: how do you re-import the pages, retaining the changes you may have made? Until MediaWiki is backed by a DVCS with great merge handling, this is a question we’ll have to answer.

We brainstormed about these issues at the same time we were thinking about [Actions][5] . Our initial thoughts were about making the release and installation process easier: how does a developer[◊]_ indicate _these pages in my wiki make up my application, and here’s some metadata about it to make life easier._

<div class="figure">
  <img alt="" src="http://farm3.static.flickr.com/2099/2611968330_fc742209cf.jpg" />

  <p class="caption">
    <a class="reference external" href="http://www.flickr.com/photos/nathan_y/2611968330/">Semantic Packaging</a>
  </p>
</div>

We brainstormed a solution with the following features:

<ol class="arabic simple">
  <li>
    <strong>An "Application" namespace:</strong> just as Forms, Filters, and Templates have their own namespace, an Application namespace would be used to define groups of pages that work together.
  </li>
  <li>
    <strong>Individual Application Pages</strong>, each one defining an Application in terms of Components. In our early thinking, a Component could be a Form, a Template, a Filter, or a Category; in the latter case, only the SMW-related aspects of the Category would be included in the Application (ie, not any pages in the Category, on the assumption that they contain instance-specific data).
  </li>
  <li>
    <strong>Application Metadata</strong>, such as the version[♦]_, creator, license, etc.
  </li>
</ol>

A nice side effect of using a wiki page to collect this information is that we now have a URL we can refer to for Installation. The idea was that a Special page (ie, `Special:Install`, or `Special:Applications`) would allow the user to enter the URL of an Application to install. Magical hand waving would happen, the extension dependencies would be checked, and the necessary pages would be installed.

While we didn’t get too far with fleshing out the Upgrade scenario, I think that a good first step would be to simply show the edit diff if the page has changed since it was Installed, and let the user sort it out. It’s not perfect, but it’d be a start.

I’m not sure if this is exactly the right approach to take for packaging these applications. It does effectively invent a new packaging format, which I’m somewhat wary of. At the same time, I like that it seems to utilize the same technologies in use for building these applications; there’s a certain symmetry that seems reassuring. Maybe there are other, obvious solutions I haven’t thought of. If that’s the case, I hope to find them before I clear enough time from the schedule to start hacking on this idea.

---

<!-- [†] Address or work around, that is; there has to be a clear story
for how the user accomplishes each. -->

<!-- [‡] It’s possible that in the six months since I last worked
closely with this, things have changed considerably, but some
brief searching didn’t turn anything up. I’d love to be
corrected if I’ve missed something obvious. -->

<!-- [◊] I think one development model to be encouraged using SMW is
that of the user-developer: a user who utilizes SMW to get the
job done, and in the process creates something that they’d like
to release to the larger world. -->

<!-- [♦] One obvious short-coming of our solution is with respect to
versioning: what does it mean to *version* an application that
primarily exists as a bunch of wiki pages? -->



 [1]: http://wiki.creativecommons.org/CcTeamspace
 [2]: http://yergler.net/blog/2010/01/02/meta/
 [3]: http://semantic-mediawiki.org/
 [4]: http://semantic-mediawiki.org/wiki/Help:SMW_extensions
 [5]: http://yergler.net/blog/2010/01/07/actions-for-smw-applications-hypothetically/
