---
title: 'Read: “Grok 1.0 Web Development”, by Carlos de la Guardia'
date: 2010-05-02T15:36:19.000Z
categories:
  - reading
tags:
  - 2010
  - nonfiction
  - read
  - review
slug: read-grok-1-0-web-development-by-carlos-de-la-guardia
---
A month and a half ago I posted a [pre-review][1]  of _\`Grok 1.0 Web Development <http://www.packtpub.com/grok-1-0-web-development/book?utm\_source=yergler.net&utm\_medium=bookrev&utm\_content=blog&utm\_campaign=mdb\_002632>\`\__, a new title from Packt Publishing (disclosure: I received a complimentary copy of the book for review). I recently completed a spate of travel that took me across the Atlantic and across North America (with another trip across the Atlantic aborted due to the [volcanic ash cloud][2] ), and have turned my attention back to the book. My initial impression remains: this is exactly the sort of documentation I wish I’d had when I ported the [Creative Commons license chooser][3]  from “pure” Zope 3 to Grok. _Grok 1.0 Web Development_ is a great introduction to [Grok][4] , Python web development, and the Zope Component Architecture.

[|image0|][5] _\`Grok 1.0 Web Development <http://www.packtpub.com/grok-1-0-web-development/book?utm\_source=yergler.net&utm\_medium=bookrev&utm\_content=blog&utm\_campaign=mdb\_002632>\`\__ takes what as I think of as a customary approach to framework introductions, instructing the user on the basic features of the framework by building an application (in this case a to do list manager) and adding features and refining the code as it goes. This works well for Grok — the amount of boilerplate code is kept to a minimum, by design, so the text can focus on first implementing the feature, then delving deeper to discuss the “best practice” around that tool if needed. For example, Chapter 6 covers <span class="caps">ZODB</span> Catalogs (index). It starts by defining the search view and user interface so that the reader has a functioning search tool to work with, then takes a diversion to discuss how one best structures their application to support search. These detailed drill downs are one of the most valuable parts of _Grok 1.0 Web Development_: they help the reader expand their understand beyond just implementing a feature, to implementing in a way that will be flexible and easy to support in the future. The [somewhat brief] advice on when to use the <span class="caps">ZODB</span> versus a relational database is another example of practical advice that I appreciated in the book.

_Grok 1.0 Web Development_ is not perfect. In particular I wish the chapter on testing were earlier (the author’s admonition that it “should not be treated as an afterthought” doesn’t seem to jibe with its placement among the advanced topics towards the end of the book. I suppose I’m also a little sensitive to slogging on Zope 3 and it’s “lack” of agility. I can probably be described as a Zope 3 / Zope component architecture apologist, but it seems the type of agility described is a rather narrow, specific definition. The sprints I did on Zope 3 at PyCon several years contributed more to my understanding and appreciation of test driven development and agile planning than just about anything. Yes, Grok gets it done without the <span class="caps">ZCML</span>; I think it’s an exercise for the reader as to whether that’s better or worse for your application.

I think that the Zope derived frameworks such as Grok and [repoze.bfg][6]  are some of the most interesting in development today. _Grok 1.0 Web Development_ does a great job of introducing [Grok][4]  to developers who are new to web programming, or who already have some familiarity with another framework. I recommend it to anyone interested in building extensible web applications with a minimum of boilerplate.



 [1]: http://yergler.net/blog/2010/03/16/pre-read-grok-1-0-web-development/
 [2]: http://en.wikipedia.org/wiki/2010_eruptions_of_Eyjafjallaj%C3%B6kull
 [3]: http://creativecommons.org/choose/
 [4]: http://grok.zope.org/
 [5]: http://www.packtpub.com/grok-1-0-web-development/book?utm_source=yergler.net&utm_medium=bookrev&utm_content=blog&utm_campaign=mdb_002632
 [6]: http://bfg.repoze.org/
