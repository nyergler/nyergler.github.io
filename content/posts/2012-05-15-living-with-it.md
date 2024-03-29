---
title: Living With It
date: 2012-05-15T21:32:00.000Z
categories:
  - engineering
  - process
  - talks
slug: living-with-it
---
So now that I’ve talked about what I think of when I say “technical debt”, I
want to dig in on the other half of the title, “Living With It”. What does it
mean to **live** with technical debt? I want to be clear: it does not mean
simply accepting or ignoring it. I’m certain that’s the wrong way to build
long-lived, robust software. When we encounter technical debt, or something that
feels hard, I think there are a few common, understandable, and dangerous
reactions. These roughly fall into the categories of “I can do better”, “One
more won’t hurt”, and “I can’t go on.”

When some engineers — even good (but not great) ones — encounter technical debt,
their reaction may be “I can do better”. That is, “Oh, this is terrible, I can’t
possibly work with code like **this**, I’ll rewrite this part of the system, and
then I can get around to what I came here to do.” Rewriting or refactoring debt
away may be the right decision, but this statement contains unspoken assumptions
that better code is more important than new features or bug fixes for users.
This is where the paradox of living with technical debt first shows itself:
living with technical debt does not mean accepting it, but it also doesn’t mean
fixing it. Right now. The business, the organization, has to make decisions
about what’s most important. (Engineers need input into those decisions, and the
business needs to respect that input, or the best engineers will go elsewhere,
where their input will be respected.) It’s up to the business to decide “can we
go dark for n days/weeks/months.” Sometimes the answer may be yes, and we’re
free to improve the code with abandon. I think that’s a rare situation. More
often the answer is “no”, so we need to live with the debt and develop
strategies for improving it (more on that later).

Another reaction that I think is all too common is “I guess one more won’t
hurt”. That is, “Well, we’re stupid is these five places, what’s one more?”
Living with technical debt does not mean you continue to incur it. If anything,
it’s essential to stop running up the tab. This requires rigor and strength of
will, not just on the part of the engineer working on the code, but on her
peers. The team needs to decide that incurring additional debt is not
acceptable: you can maintain or you can improve, but you can’t backslide. The
danger of “one more won’t hurt” is that the problem spreads: you build new
features that repeat past mistakes, instead of providing a model for future
work.

Finally, sometimes we look at code and think, “I can’t go on”. I find that those
are the time it’s helpful to step away from a project, take a break, come back
after a good night’s sleep. You don’t always have that luxury, but feelings of
despair rarely coincide with my best work. I’ve observed that indulging in the
first two ways of thinking — “I can do better” and “One more won’t hurt” — often
leads to the final one — “I can’t go on”. “One more won’t hurt” just digs a
deeper and deeper hole, until you can’t see your way out, and “I can do better”
often leaves you with a piece of “perfect” code that doesn’t quite fit into the
rest of the system, leaving you to shims and scotch tape, the very things you
started out trying to avoid.

In “Good to Great”, Jim Collins writes about characteristics that separate good
companies from great ones. One of the principles he identifies is “Confront the
brutal facts, but never lose faith.” In other words, it does no good to pretend
that your code (company in his case) is something that it isn’t. Collins talks
about meeting Admiral Stockdale, and asking him, “Who didn’t make it out?” “Oh,
that’s easy — the optimists.” Stockdale explains that the optimists were
routinely disappointed, and eventually lost faith. “I can’t go on.” Collins
quotes Stockdale as saying, “You must never confuse faith that you will prevail
in the end — which you can never afford to lose — with the discipline to
confront the most brutal facts of your current reality, whatever they might be.”
Technical debt may be a far cry from Stockdale’s situation, but the principle
holds as the heart of truly living with technical debt: we must confront things
as they are, not as we wish they were. And we must believe that we can make
things better, that we know where we’re going.


