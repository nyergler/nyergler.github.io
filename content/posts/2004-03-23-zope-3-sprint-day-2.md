---
title: 'Zope 3 Sprint, Day 2'
date: 2004-03-23T09:12:52.000Z
categories:
  - geek
slug: zope-3-sprint-day-2
---
Yesterday’s sprinting wasn’t quite a visceraly satisfying as the previous two days, but progress was still made. Mark McEahern and myself formed one half of a four man team working on the event subscription and publication system. In particular we began work on Type Based subscriptions, per [the proposal][1] .

Our first task was to implement a new ZCML directive, `subscriber`. The subscriber directive registers an event “listener” (to abuse Java terminology) for a particular event and class. So you can, for example, listen for removal events for all objects implementing IFooBar. Powerful stuff, and of course it requires some refactoring of existing work.

IAddNotifiable and IRemoveNotifiable are two legacy interfaces that were developed before the event system was fully developed. So our second task was to begin refactoring existing code which used these interfaces to use the new subscriber framework. And that’s where we pick up this morning.

I had imagined that PyCon would be an opportunity for me to work on other development as well as Python stuff. Unfortunately, this hasn’t turned out to be the case. I leave the sprint everyday with ideas and the urge to work on them, but my brain just doesn’t want to work in the evening lately. For this reason I’m glad I have two weeks of break from work coming when I return home so I can scratch the myriad of itches PyCon is stimulating.



 [1]: http://dev.zope.org/Wikis/DevSite/Projects/ComponentArchitecture/InstanceAndTypeBasedSubscriptions
