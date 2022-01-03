---
title: OSCON Tutorials in Review
date: 2006-07-27T10:25:56.000Z
categories:
  - oscon2006
slug: oscon-tutorials-in-review
---
So I’m speaking at [OSCON][1]  this year on how we’re using the [Zope 3 component model and infrastructure][2]  to make [ccPublisher][3]  extensible. I flew into Portland Sunday evening, and spent the past Monday and Tuesday attending some tutorials, and today was the first day of sessions proper. Read on for some review of the tutorials I attended.

The tutorials are half-day affairs, and Monday I attended [one on Django][4]  and [one of Python Optimization][5] . The Python Optimization tutorial really motivated me to attend the first day of tutorials. One of the persistent problems with ccPublisher is the performance. At this point it’s sub-optimal, but not bad enough that it deserves our undivided attention. Like they say, make it right, _then_ make it fast. But I want to make it fast eventually, so I was interested in hearing about techniques for optimizing Python code. The tutorial was relatively good, even if it did use something of a contrived example. I suppose it was by necessity (that _is_, after all, the conclusion I reached while writing my talk), but it would have been nice to see direct examples of “real” system optimizations (for some definition of real). OK, I talked myself out of it. The examples were fine.

The morning tutorial was all about using the [Django][6]  web application framework. Django is one of the two web application frameworks (the other being [Turbo Gears][7] ) which seems to be getting lots of brain cycles these days. I’ve played with Turbo Gears a bit, and while we’re using [CherryPy][8]  (one of it’s constituent components) to back our web services at CC, it’s just never quite felt “right” to me. I’ve tried repeatedly to figure out what it is about it that I don’t like, but in the end I can’t get past the gut feeling. Unlike CherryPy (and Zope to some extent), Django doesn’t subscribe to the Python-object-traversal-as-web-page model. The statement “why should your URLs be tied to your objects” makes a lot of sense, but it did make shifting mental models and playing with it a bit harder for me. The tutorial covered writing a model (using Django’s integrated ORM), mapping URLs to the model and creating basic views. Since then I’ve been playing with it off and on, and Django seems to have lots of nice built in features: dead simple feed generation, expressive code (you get a lot of functionality with a small about of code), and I don’t have to write any SQL. The next step for me is clearly figuring out how Zope and Django co-exist (or don’t) in my mental ecosystem.

The second day of tutorials didn’t relate as directly to my day-to-day work, and were a bit more hit and miss. The morning tutorial, [An Introduction to Haskell][9] , wasn’t very productive for me. The description pitched it as fulfilling the “learn a new language every year” maxim, and having been attracted to [Haskell][10]  and functional programming during my Language Design course a couple years ago, it seemed like the perfect way to spend the morning. Of course, when the presenter introduces the topic by saying “to learn Haskell, you really need to work on it for an entire year.” Oh, well why didn’t you say so?

The afternoon tutorial was titled [Leveraging Mono for Cross-Platform Development][11] , and was much more interesting in terms of my work at Creative Commons (and in general, I suppose). Interesting not because we’re doing **any** .Net or C# work, but because we deliver applications (in particular ccPublisher) on Windows, Mac OS X and Linux. And while Python has been very good to us (me), I’m always interested in thinking about how life might have been different if we had started with another technology platform. My recent experience has been that thinking about this, and poking at it, provides you with insights into how you might make your existing code base better (or throw out nasty bits, etc).

So the [Mono][12]  tutorial was excellent, and covered some really interesting developments in the [Windows.Forms][13]  area. Windows.Forms is the portion of the .Net framework (I can’t remember now if it is also part of the ECMA standard) that provides managed user interface components. Currently if you want to develop a cross-platform GUI application with Mono, the way to do it is with GTK#. Unfortunately this introduces a new dependency for Windows users, and doesn’t seem to be as “pure”. It also means that GUI applications developed on Windows can’t be directly ported to Linux and Mono. So supporting Windows.Forms will open up a new area of cross-platform compatibility. The presenters did some basic demos, and also talked about XSP, the ASP.Net implementation for Mono. I still don’t have a compelling use for Mono or C#, but I do think it’s something I want to play with and at least get my head around more fully.

So out of two days of tutorials, there were two sessions that were really good (Django, Mono), one that was pretty good (Optimization) and one that just didn’t speak to me (Haskell). I’m sure there are others who found the Haskell tutorial exactly what they needed to get them interested and started on their functional programming experience. It just wasn’t for me.

Yesterday was the first full day of sessions, which I’ll write up shortly. However, this morning is my talk at 10:30, so if you’re at OSCON and interested in compenent based software construction under Python, stop by D136 at 10:30 this morning.



 [1]: http://conferences.oreillynet.com/os2006/
 [2]: http://conferences.oreillynet.com/cs/os2006/view/e_sess/8752
 [3]: http://wiki.creativecommons.org/CcPublisher
 [4]: http://conferences.oreillynet.com/cs/os2006/view/e_sess/9155
 [5]: http://conferences.oreillynet.com/cs/os2006/view/e_sess/8633
 [6]: http://djangoproject.com
 [7]: http://www.turbogears.org/
 [8]: http://cherrypy.org
 [9]: http://conferences.oreillynet.com/cs/os2006/view/e_sess/8898
 [10]: http://haskell.org
 [11]: http://conferences.oreillynet.com/cs/os2006/view/e_sess/8754
 [12]: http://mono-project.com
 [13]: http://mono-project.com/WinForms
