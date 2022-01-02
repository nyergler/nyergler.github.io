---
title: 'Living With Technical Debt, Part One'
date: 2012-05-14T21:29:05.000Z
categories:
  - engineering
  - process
  - talks
slug: living-with-technical-debt-part-one
---
I’m speaking at [Velocity][1]  next month on [“Living with Technical Debt”][2] . Like any mature codebase, our software at [Eventbrite][3]  has technical debt. Like any project with rapidly shifting priorities, the [code][4]  we built at [Creative Commons][5]  had technical debt. It’s only in the last year or so that I’ve really come to see that and start to think about how one navigates technical debt. So there are a lot of ideas floating around in my head about what I want to talk about. This post (probably the first of several) is me trying to get those ideas out of my head and into text, so I can go about organizing my talk. Not everything in here is going to make it into the final talk, and I expect that whatever does will be re-organized and re-synthesized.

I don’t think it’s unreasonable to start with what I mean by “technical debt”. “Technical Debt” is a euphemism, usually trotted out when we’re talking about something we don’t like about software or systems. I say “don’t like” as if the label is undeserved: it’s not always clear when someone says “technical debt” if they’re talking about code that’s obviously difficult to work with, or just makes a different set of choices than they would have made. One definition I’ve been thinking about is this: technical debt is some aspect of your system that increases the cognitive overhead of understanding, improving, and maintaining it. It’s possible there should be a clause added about “for the majority of developers”, too: I know there’s code I’ve written that absolutely minimizes cognitive overhead for _me_, but the things I’m used to, idiomatic Nathan, makes it harder for someone else to come and fix a bug or add functionality.

By speaking about technical debt in terms of cognitive overhead, we can start to detach ourselves from the situation emotionally. It’s pretty easy to become emotionally involved with the code we write. And usually that’s a good thing: it’s important for me to work on things that feel important, things that I feel like I can leave my mark on. I’d like to posit, however, that it’s possible to become emotionally co-dependent with your code. That may sound like a strange idea, so let me explain: whenever something I create becomes a proxy for my self — my individuality, my self worth — it is nearly impossible for me to see problems with it. It is nearly impossible for me to hear anything but glowing praise. And when I do hear glowing praise, it’s never enough. I’ve observed two different effects of these feelings. First, I start treating situations like a zero sum game: it’s not enough to succeed, others must fail. It’s not hard to see how this would lead to hypersensitivity and hypercriticality at the same time. Second, I don’t make smart decisions: I make them based on my feelings rather than on reality. I don’t know why this would be any less true of code than it is of other endeavors. So to really see technical debt in our systems, we need to detach ourselves emotionally: it’s not about who’s at fault, it’s about how we make it better.

(There’s a whole other topic around team building here; I’m going to assume for the purposes of this discussion that you have the people you want on your team, either because they’re operating at the level you need them to, or because you believe they can grow to that level.)

So what are some ways your system can add to the cognitive overhead needed to understand it? I can think of a few: inconsistency, duplication, and lack of cohesion all immediately come to mind. These all make it difficult for an engineer to understand, maintain, and improve a system. More on that later.



 [1]: http://velocityconf.com/velocity2012
 [2]: http://velocityconf.com/velocity2012/public/schedule/detail/23703
 [3]: http://www.eventbrite.com/
 [4]: http://code.creativecommons.org/
 [5]: http://creativecommons.org/
