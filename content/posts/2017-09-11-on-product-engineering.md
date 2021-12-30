---
title: On Product Engineering
author: Nathan Yergler
type: post
date: 2017-09-11T16:28:05+00:00
url: /2017/09/11/on-product-engineering/
categories:
  - engineering
tags:
  - agile
  - culture
  - engineering
  - iteration
  - organization
kind:
  - Note

---
I’ve been writing software and working in teams for well over a decade now. The places I’ve worked have been varied: schools, non-profits, consumer startups, education software, and B2B SAAS companies. And despite that diversity, in every case there was this question: **_how do engineers maximize the amount of meaningful work they do?_**

I was fortunate to work at Remind at an inflection point in the organization’s development. We were moving from reporting to a single individual (the VP of Engineering) to a structure with engineering management. That shift wasn’t one we took lightly; the stakes felt high, so we approached it with some trepidation. The structure we decided to try was based in part on Spotify’s model, and kept that question squarely in mind: how do we help engineers maximize their meaningful work while minimizing the bullshit. 

The structure we landed on was optimized for engineer productivity and happiness. It helped us focus on what we wanted to spend our time on: building a great product.

* * *

During my time there, Remind was growing fast (and still is). Our goal was to connect every parent, student, and teacher, and in doing so improve the educational experience and outcomes. The core product — secure, one-way messaging — had demonstrated that those relationships were powerful and could be amplified with a great product, but we were still trying to figure out what the next step was. Was it parent-to-parent chat? Students organizing their own groups? Hierarchical message boards? 

**As engineers, the most leveraged thing we could do to help figure that out was to ship something that worked, as quickly as possible. **

_“Something that works”_ is a feature that users can see and use. It doesn’t have to be complete, it just has to be sufficiently useful to give us feedback about whether we’re on the right track.

Shipping _quickly_ is important so we can shorten the time between hypothesis and validation; for example, we think parents chatting with each other will help engage parents, is that actually true?

Shipping quickly also means we have more opportunities to iterate. Thinking in iterations forces us to think about what the smallest useful feature is, and build from there.

As we looked around, it was obvious that there were things getting in the way of our individual contributors. So we set out to minimize those obstacles. 

* * *

## Contention

### We avoid contention by working in cross-functional teams.

Contention occurs when teams are dependent on a single resource, often another team. For example, if an Android team and an iOS team are working on different parts of the application and both need help from the backend team, they’re both blocked from progressing until backend addresses their issue. By organizing into cross-functional teams we can limit that contention: each team has dedicated engineers with expertise in backend, native clients, and web.

## Interrupts

### We avoid interrupts by working from a backlog.

_Interrupts_ — both externally and internally triggered — are costly. They force a context change, usually for more than one individual, and it make it easy to lose sight of what we’re trying to build.

Interrupts are triggered “internally” when an engineer needs more information to complete a task. In those situations, she’s forced to go looking for someone who has the information or can make the decision. If she can’t find that individual, or if the answer isn’t immediately available, she has to find something else to work on until she can continue with the first task.

Interrupts are triggered “externally” when someone interrupts work to ask an engineer to look at something. This can be a product manager, support, or another team.

Working from a backlog helps us avoid both of these: work only goes onto the backlog if it’s actionable, and others — product managers, support, etc — know where to put work to make sure it gets looked at. At Remind this was the “ice box”, which we committed to reviewing weekly.

## Uncertainty

### We avoid uncertainty by reviewing the backlog together.

_Uncertainty_ about what we’re building or why leads to a variety of other issues: it causes interrupts when questions need to be answered, and can lead to re-work if individuals aren’t in sync. We avoid uncertainty by reviewing the backlog together during a weekly planning meeting. During that meeting the team does a few things:

  * Review what’s still in the backlog from the previous week: does it still apply? Is it still important?
  * Review what’s in the “next” bucket (which we called the ice box). If items there have enough detail and specificity, they’re moved to the backlog and prioritized by the team and product manager.
  * New Feature work is assigned a point value based on complexity. The entire team participates in assigning the point value to work, even individuals who don’t have expertise in that area. Involving everyone helps uncover unspoken assumptions, or details that exist in a single person’s head.

When we develop a new feature, it’s up to the Project Lead to break it down into stories ahead of the planning meeting. The Project Lead is an engineer who works with the product manager to figure out what the smallest iteration is, and what needs to be built.

If during planning something doesn’t have enough information for an engineer to start work _immediately_, it doesn’t go in the backlog.

## Blocking

### We avoid blocking by specifying work as a user facing unit of work: features

_Blocking_ is like contention: it slows the team down and often forces context switches. Blocking occurs when team members are waiting on one another. When we started thinking about process, it wasn’t uncommon for an Android engineer to defer landing work because an endpoint wasn’t ready. Co-locating the expertise in a cross-functional team helps, but it’s not sufficient to avoid blocking. We avoid blocking between tasks by specifying them as user-facing units of work: features. As much as possible, items in the backlog should be something that is user facing and shippable. This bears some unpacking.

A user facing story will be visible and useful to the user when it is complete. The user in this context is who we’re building for; it could be the end user, another team (product, support), or a new constituency. We require that the work be “visible” because this gives us incremental signal about whether we’re on the right track. Remind relied on product managers to verify work, so requiring that the task be “visible” also meant it could be easily verified.

A story is shippable if we can merge it to the main branch when it is complete. Long lived branches are a major source of blocking; stories should be constructed such that at the completion of each, the code can be merged.

Note that saying we work on user facing, shippable stories does not mean that when the story is complete, the entire feature is complete, or that we’ll send it to the customer. When we release is a separate question, and something that the product manager and project lead decide.

When we were adding support for group chat to Remind, we needed to show the user a list of other people they could potentially chat with. Instead of breaking that down into two tasks — “implement an endpoint to return the list of potential chat partners” and “when you tap the New Chat button, show the list of potential chat partners” — we’d specify it as a single task: “when you tap the New Chat button, show the list of potential chat partners”. If a new endpoint is necessary, that’s an implementation detail, and ideally it’s all handled by the same individual.

When we do wind up in a blocking situation, engineers should take the opportunity to pair in a cross functional manner: this helps reinforce cross-training and reduces future blocking.

## What else is important to us?

Our team organized to minimize contention, interrupts, uncertainty, and blocking. In support of that, we adopted some additional supporting practices.

### We work as a single unit

Teams are a single unit that works on a feature together. We’re measured as a team, and we support one another. When it comes to what we work on next, we pull the next thing at the top of the backlog, not the next thing we are expert on. This, along with pairing, helps us build up institutional knowledge about how things work, and means individuals can take the time they need without jeopardizing the rest of the team’s work.

### We evaluate our progress and health

We review our progress weekly to make sure we’re on the right track and moving forward. During our evaluation we ask ourselves questions:  
* What got in the way?  
* What supported our work?  
* Did I do as much as I thought? Why or why not?

Our goal is to get better at estimation at the team level, and understand what supports and impedes shipping.

### We own our own process

Providing understanding of what goes into building a feature and what impedes our progress are the two of the most important contributions a product engineer can make. Answering these questions helps product prioritize better. Identifying impediments helps engineering management understand where the process isn’t working, and how to best support their teams. We should all feel ownership of the process and of the product that we’re working on. If the process wasn’t working, it was our job to fix it.

## How did we do?

The result of adopting this structure and process had benefits across the board. The time we spent integrating work from multiple teams for a release dropped from a week or two to a day or two. We developed a release cadence that allowed us to be more confident in our projections _and_ in the code we were shipping. Knowing that the next release train was leaving in two weeks instead of six weeks removed much of the penalty — real and imagined — for slipping to the next release. All of that was good for Remind.

The process was good for engineers, too. Engineers who paired to work in new areas felt like they were growing and stretching their expertise. When I spent time working on the iOS app, I suddenly understood why we sent things in certain formats. My level of empathy went way up. 

Engineers felt more empowered. Whether or not it’s true, engineers sometimes perceive their relationship with Product as parental or hierarchical. In this structure, engineers felt like they were peers with product and had the ability to impact the product in significant ways.

In short, the team jelled. _**This is a framework for building software, but it’s also a framework for building empathy and vulnerability.** _

* * *

Thanks to Jason Fischl for reading draft versions of this post and providing valuable feedback. Mistakes and misrepresentations are solely mine.