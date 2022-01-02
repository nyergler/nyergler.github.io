---
title: PyCon Day 3 Wrap-Up
date: 2004-03-26T14:30:20.000Z
categories:
  - geek
slug: pycon-day-3-wrap-up
---
Bruce Eckel’s keynote this morning was excellent. Suprisingly enough, I would almost say I found it the most interesting keynote of the conference. It raised many issues that I think get glossed over sometimes. His presentation did this by acknowledging that Python might not be right for everything, and that sometimes good ideas come from other languages (and sometimes examples of bad ideas do, too).

After the keynote I attended the Web Programming track. The only session I want to highlight is Steve Holden’s [Setting a Context for the Web User][1] , which covered a technique he’s developed for making sure that the user of a web application has the proper context for their actions.

Since the word context is often used to mean different things, a definition is useful. Steve defines context as visual and,er, contextual clues that tell the user what will happen when they click a link or a button. The problem with web applications is that users often resort to the Back button when they can’t figure out what something will do. Even worse, the stateless nature of <span class="caps">HTTP</span> means that users will edit something, but not post the form, so the changes just go away. This makes for angry users. Steve’s technique uses some client-side JavaScript, along with a call stack stashed into the session variable.

This allows users to traverse a stack of links and have their form changes saved each step along the way. As the user submits each form (through an Apply or Cancel button, for example), they are presented with the form they saw previously. This is an idea that seems so simple in description, but so powerful in execution. There are plenty of things in Stoa where users accidently (or intentionaly) click a link and lose their form changes because they don’t understand the semantics of the web application.

After lunch, David Ascher’s oddly titled session, “Flour and water make Bread” was actually a very interesting description about what goes into mixing business and Open Source software. One of his points that struck a chord with me was that remembering your audience is important. If you come up with a vaguely obscene-sounding application name because you think it’s funny, it’s not going to fly with the business community. I know this is true because DataSiphon was initially named PyMP (Python Myql imPorter). Gee, wasn’t I clever. I tried to use it at client sites, and found myself actually blushing. Hence the name change to DataSiphon. Overall David was obviously qualified to speak on Open Source and business, and I found his insights right on and very informative.

After David’s presentation on Open Source and business, Bob Ippolito spoke on MacPython. I’ve been struggling with how Mac <span class="caps">OS</span> X fits into my socia-software-political belief structure, a struggle which is made all the more interesting since two of my four machines are Mac <span class="caps">OS</span> X based. For some reason I envisioned Bob as an old guy with straggly white hair, talking about the bad old days of punch cards. Not the case at all.

Bob’s presentation was a good overview of the state of Python on Mac <span class="caps">OS</span> X. I won’t go into details that are probably better described at the [PythonMac][2]  website. At this point I’m off to the airport. I’ll post some wrap up thoughts this weekend.



 [1]: http://www.python.org/community/pycon/dc2004/papers/18/Setting_A_Context.pdf
 [2]: http://pythonmac.org
