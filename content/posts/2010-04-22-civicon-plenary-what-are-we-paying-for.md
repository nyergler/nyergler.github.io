---
title: 'CiviCon Plenary: What Are We Paying For?'
author: Nathan Yergler
type: post
date: 2010-04-22T11:41:29+00:00
excerpt: |
  <p>I’m spending part of my day today at the first ever
  <a class="reference external" href="http://wiki.civicrm.org/confluence/display/CRM/CiviCon+April+2010">CiviCon</a>,
  a one day conference for the <a class="reference external" href="http://civicrm.org/">CiviCRM</a> community.
  I was honored (and a little surprised) to be asked to give the opening
  plenary talk. My original travel schedule called for me to fly back from
  Istanbul yesterday ...</p>
url: /2010/04/22/civicon-plenary-what-are-we-paying-for/
categories:
  - talks
tags:
  - cc
  - civicon
  - civicrm
  - talks

---
I’m spending part of my day today at the first ever [CiviCon][1] , a one day conference for the [CiviCRM][2]  community. I was honored (and a little surprised) to be asked to give the opening plenary talk. My original travel schedule called for me to fly back from Istanbul yesterday, get up this morning and present (and then presumably crash from jet lag). Luckily (for me) the volcano derailed my trip to Istanbul, so I was able to present with a little more sleep. This is the text of the talk I prepared.

<hr class="docutils" />

Good morning. I am incredibly happy to be here talking to you this morning. I’m excited to be here because CiviCRM has been and continues to be a very important part of our infrastructure at Creative Commons. Beyond <span class="caps">CC</span>, I think it’s an important piece of software for non-profit and grassroots organizations, one that should not be ignored when evaluating donor and constituent management applications. This morning I want to tell you about my experience with it, and why I think it’s so very, very important.

I’ve been at Creative Commons about six years now. I started working as an engineer, which basically meant I wrote code, deployed code, and babysat the server — there was only one then — when it got cranky. We started using Civi in 2006. Creative Commons is a 501c3, which means we have to work towards passing the <span class="caps">IRS</span>’s public support test: 30% of our operating budget from “the public”, in our case. In 2005 we had a rather unpleasant realization: we hadn’t done shit, and we were getting close to the end of our five year grace period. I hacked together a contribution page, wired up PayPal for donation processing, and put together a terrible looking Plone backend that allowed people in the office to enter offline checks, promised contributions, etc, and to make the all important thermometer work on the front page. And we started begging. Creative Commons is fortunate to have a generous, passionate community, and they responded to our call. After the dust had settled and we realized we were going to have to do this _again_, we knew we needed something better than what I could write in between other projects. It was clear that we didn’t have the resources to build something complete, and still fulfill our mission, so we started looking around. Mike Linksvayer, then our <span class="caps">CTO</span>, asked me if I’d used Raiser’s Edge before, and if so, what I thought of it. Raiser’s Edge had — perhaps has — the mindshare, and our development director at the time was certain Raiser’s Edge was the essential piece of technology to make the jump to the big leagues. If I recall correctly, my response is not suitable for mixed company.

Before working at <span class="caps">CC</span>, I worked for a very different kind of non-profit. [Canterbury School][3]  is a private, K-12, college prep school. With small classes, dedicated teachers, and a commitment to education that includes computer programming for **every** student, they are they best game in private education in northeast Indiana. The faculty and staff there do an amazing job. Every year Canterbury holds an annual campaign, which raises funds to support the school operating budget. Part of my job there was supporting the development office and Raiser’s Edge. Our Raiser Edge installation had one primary user, Barbara. I am convinced Barbara is the direct descendant of the bearded <span class="caps">UNIX</span> sysadmin wizards. Unlike her ancestors, she does not keep mainframes online, but rather has her own special wizard-like skills: comprehensive knowledge of the Raiser’s Edge query language and interface. So you can imagine that days when Barbara called my office were not my favorite days at work. “The database is locked” “My labels template won’t print right” “The query isn’t returning data I know is in there.”

Now in all fairness, this was almost ten years ago, and we were running Raiser’s Edge on [Sybase SQLAnywhere][4] . But I’d also like to point out that we were paying about $3000 a year for a support contract, a contract sold with a statement along the lines of, “You want updates when they come out, don’t you?” These updates and improvements, when they did come out, were usually accompanied by new system requirements, indirect costs, and lots of time spent making sure the upgrade went correctly. And bugs fixes? What bugs?

This, my friends, is what we call a protection racket.

I also had enough experience to know that expecting to deploy a <span class="caps">CRM</span> package out of the box with no customization was probably unreasonable. I had worked on a <span class="caps">CRM</span> and <span class="caps">ERP</span> deployment in 2003 for an international manufacturer that took the better part of a year, and whose customization costs were almost as high as the software licensing costs. I was lucky on that project: I got to write C++ DLLs to handle custom accounting information from pricing tables. And this was a product sold on how open and customizable it was. “Look, we have an <span class="caps">API</span>, you can write a <span class="caps">DLL</span>.” Gee, thanks.

So back to Creative Commons: after some consideration, CiviCRM was selected as a platform. When we started out with Civi, we paid for CivicActions’ development, customization, and hosting services. We also paid for updates, improvements, and upgrades, just like we would have with Raiser’s Edge. It’s a couple years later, in 2007, when the difference between the two really becomes apparent. because

In 2007, we had been been using Civi for a couple of years, and while we weren’t unhappy with it, it still wasn’t really a piece of software any of us looked forward to using. I personally tried to ignore it as much as possible except during the lead up to the annual campaign. It worked, it did it’s job, but it felt quirky and a little clunky, sort of like I was working against it sometimes. But there was hope. The 3.0 release was going to be a big upgrade. Lots of new features, improved user interface, and lots of attention paid to usability. We talked to CiviActions about a 3.0 upgrade and some additional customization we wanted to do. The quotes we got back were, well, expensive. Now I don’t think they were out of line, but it was more than we had budgeted at the time. Our situation internally had changed, as well. We were up to a handful of servers, two full time engineers, and a graphic designer with great technical chops. Instead of quoting out every change and upgrade, it started to feel like we might be ready to walk on our own.

So we checked out the source code — including all the custom code CivicActions built for us — and installed it on our own server.

I think this bears repeating. We downloaded the source code — the same source code our vendor was using — and installed it with our own tools. We didn’t have to ask for permission, pay a fee, or “upgrade” our license; it was already available to us.

You see, unlike the protection racket I lived under at Canterbury, at Creative Commons we’ve been paying for something that we own. That the community owns. We’re paying for value that we retain, that we can take elsewhere when we’re ready. This is huge.

Now, for those of you who are open source and free software developers, those of us who run Linux on our laptops, who build applications using open source tools, this sounds like business as usual. But CiviCRM is very special software: it is not software for Geeks, it’s software for Humans.

At Creative Commons, we build legal tools that help people share their creative works with the permissions that they choose, the some rights reserved that work best for them. But we also recognize that most of the time, those creators are not lawyers. They’re coming to us _because_ they’re not lawyers, and our job is to reduce the number of hoops they have jump through to share their work. So we make our tools available for two different audiences, which we jokingly refer to as Lawyers and Humans. Today I’d like to posit that we have a similar divide when it comes to free software. Apache, Linux, MySQL, CouchDB — these are all examples of software for Geeks. CiviCRM is software for Humans. And it’s really important software for Humans.

A friend of mine, Asheeesh Laroia, runs Open Hatch, a website dedicated to helping people get involved with open source software. Talking about software like CiviCRM, he made the comment, “It’s important that we give communities tools that they can use and that they can control. Otherwise how do we expect them to be independent and self sustaining?” Fundraising and constituent management is a critical part of any non-profit’s life cycle. Why do we think it’s <span class="caps">OK</span> for these organizations — many of which we personally contribute to — to enrich the coffers of a for profit businesses with no real long term return?

Please don’t misunderstand me: I am not saying that paying money for support is wrong, misguided, or unncessary. I am saying that we — non-profits — can do a lot better than investing in a protection racket. We can pay for support, and at the same time invest in our tools. And when we’re ready to move to the next level, there is no upgrade fee. We already own it all.

Creative Commons’ story did not end by simply installing CiviCRM onto our server and moving on. And putting it on our own server has not resulted in the cost of Civi going to zero. In fact, we still “pay” for support, but we do it differently these days. Maintenance and support for Civi is a core responsibility for the technical team today. When our development team has questions, wants to run new reports, or wants to do something new like personal campaigns, they sit down with Chris, John, and Nathan, and figure out what we’ll need to do to Civi to make it work.

Last year we decided that the contribution workflow was too long. We were demanding information from our donors that we didn’t necessarily need, and duplicating information they might give PayPal when processing their payment. We wanted to streamline the process, reducing the number of clicks between us and a donor’s money. We invested the time to implement some custom code on Civi to make this happen. Right now we want to offer tighter integration between CiviCRM and <span class="caps">CC</span> Network accounts, a premium we offer donors. So we’re writing code to do that.

The click-streamline code is available to anyone who wants to use it. We’re writing our integration code with the hope we can contribute it to the CiviCRM core. It’s tempting to say that we’re no longer customers, that we’ve moved up to become partners. But the truth is that we were never just customers: with CiviCRM, we were partners from day one, we just didn’t necessarily realize it.

Now I know that lots of commercial vendors talk about partnering with customers. I’d like to call bullshit on that. If you don’t have the source code, you are not a partner. If you can’t be trusted to inspect the software you rely on, you are not a respected equal in that relationship. Companies go out of business. Companies are acquired. Management changes. This is the reality of business.

Let’s go back and look at Canterbury again. I sent Vern, Canterbury’s Director of Technology and a man who can really only be called my mentor, an email to fact check my memory about what we were working with in 2001. Vern told me he’s part of a Google Group formed for schools to exchange <span class="caps">SQL</span> Server queries for accessing their data. Why <span class="caps">SQL</span> Server queries and not an <span class="caps">API</span> — seems a little crude to me. Turns out, if you want to write your own code to access your data through their <span class="caps">API</span>, there’s a toll: $10000 and another $1000 per year in support.

If a customer want to access their data in the safest, sanest manner, they have to pay. Again. If that were the reality for CiviCRM, we would not have been able to streamline our contribution process. We would not be integrating <span class="caps">CC</span> Network memberships as a premium for donating. Hell, I’m not even sure we’d be able to show the beloved thermometer on the front page. The cost is too high.

Let me wrap up with some thoughts about the future. If you work for a non-profit or grassroots organization, I believe it is incumbent upon you to think about things in terms of fiscal stewardship. Where is your money going today, and what value are you getting? Are you a customer, or are you a partner? As an officer at a non-profit, I see fundraising and development as critical to our ability to execute our core mission. Our mission at Creative Commons is not to make money, but if we can’t keep the lights on, we can’t help people share their work online.

If you’re using CiviCRM today, it’s time to start talking about it. I find that lots of non-profits I talk to are unaware that there’s a different way. They haven’t thought about the fact that they have a choice. We need to work to increase the mind share that CiviCRM has. If you think Civi is only good for small organizations, that you can’t really recommend it for large scale installations, I’d like to challenge that misconception. Mozilla Foundation. Wikimedia Foundation. Creative Commons. We’re all using CiviCRM for all or part of our constituent management solution. And if you’re a user or integrator who’s customizing it, it’s time to start thinking about how you give back. The <span class="caps">AGPL</span> already requires that you make your changes available. I think it’s worth your while to consider how you’re making those changes. Is this a customization someone else might want? If so, I encourage you to take a few minutes, talk to the developers on <span class="caps">IRC</span> or the forums, and think about how you might build your solution in a general way. The CiviCRM developers are some of the most available and responsive I’ve ever encountered. They can give you guidance about how to think about a problem. It may take some extra time to build a general solution. But if you can contribute that back to the core codebase, you’re going to make upgrades much easier. And the great thing is that at the same time you’re making things easy for yourself in the future, you’re also helping to sustain the community and the development process.

Finally, if you’re evaluating CiviCRM today, I have some advice for you. Do not think to yourself, “oh, I can download this for free, this isn’t going to cost me anything.” Do not look at CiviCRM as a zero cost solution. My experience is that there is no such thing in <span class="caps">CRM</span>, and I’d argue you wouldn’t want there to be: we all need experts we can call upon in an emergency, and paying for a tool enables the developers to improve it. Instead, do your checkbox evaluation and realize that Civi is competitive with commercial packages. Talk to people who are using CiviCRM and tell them how you plan to use it, ask them about their experience. Then ask yourself, “how much am I going to spend year over year, and what am I getting from that? How is my investment going to grow? Am I paying for protection, or am I investing in my organizations future stability?” I think the answer is self evident.

Working at Creative Commons has been an amazing opportunity for me, and I’m proud of a lot that I’ve accomplished over the past six years. But I’m especially proud of how we’ve used and contributed to CiviCRM. I’m proud to be a user, and I feel good every time I talk to my team about Civi and hear, “Oh, yeah, I just jumped on <span class="caps">IRC</span> and got an answer from one of the core developers.” You can not buy that sort of dedication and support.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2010-04-22 11:41:29
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      1656
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
      civicon-plenary-what-are-we-paying-for
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
      talks
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      tags:
    </th>

    <td class="field-body">
      cc, civicon, civicrm, talks
    </td>
  </tr>
</table>

 [1]: http://wiki.civicrm.org/confluence/display/CRM/CiviCon+April+2010
 [2]: http://civicrm.org/
 [3]: http://canterburyschool.org/
 [4]: http://en.wikipedia.org/wiki/SQL_Anywhere