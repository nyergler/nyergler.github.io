---
title: Zope Sprint Reflections
date: 2006-03-07T08:18:23.000Z
categories:
  - pycon2006
slug: zope-sprint-reflections
---
So I’m more than a little behind on my PyCon wrap up posts, so I’ll start at the end, with the Zope Sprint. This year the sprints moved from pre-conference to post-conference, the idea being that people might have ideas during the conference that they would want to work on at the sprints. I’m not sure that happened, although things said during the conference did spark my interest in certain areas that I was able to work on tangentially during the sprint, so in that respect, I suppose the move was successful. I’m not sure if this was the first year that the sprints were 4 days instead of 2 — I didn’t participate last year, so that change may be two years old. I like it. It really can take 2 days to do enough experimenting to start getting useful things done.

This year (as in the past, save last year), I participated in the Zope sprint. Specifically I was working with the [Zope 3][1]  project, as we’re using bits and pieces of it in [ccPublisher 2][2] . I spent the 4 days of the sprint working with [Python Eggs][3]  and [Setuptools][4] . Eggs are like Java JAR files, only better — they encapsulate dependency information as well as code. So my task, along with Paul Winkler and others, was to experiment with how Zope 3 could use eggs for packaging and distribution. The idea is sort of two fold: first, lots of pieces of Zope 3 are usable with the “zope” piece — the application server — so it would be good to have an easy way for people to use those pieces easily. The second idea was that because Zope 3 is so flexible, you often don’t need all the different pieces it provides. Maybe you don’t need persistance support (this is probably a bad example, but nothing better comes to mind), so there’s no point in installing and loading it into memory. Since eggs encapsulate dependency information, it’d be nice to be able to do a minimal install, and then use some tool to install additional functionality as you needed it.

Our initial work focused on writing a `setup.py` for individual projects (zope.interface, zope.deprecation, zope.i18nmessageid) which knew about dependencies and could generate eggs. From there we went on to explore how developers might work on these individual projects. After some work, we came up with a story:

> A developer needs to work with Zope page templates. They start out by checking out the pagetemplates project from Zope Subversion onto their local computer. After checking out the project, they have a directory containing setup.py, a src directory, and other documentation. They run a [waving hands] developer script, which creates a local sandbox, and downloads all of zope.pagetemplate’s dependencies into it. These dependencies are downloaded from the [Cheeseshop][5]  or the GZRITS. After some work on page templates, a developer realizes they need to work on a dependency. So they check out that dependency into the same zope.pagetemplates working directory, and run it’s `setup.py develop`. Develop is a [distutils][6]  target provided by setuptools which gets the dependencies for a project, and also installs a special “link egg” into your local Python path. You do your work, run your tests, run the dependency tests, and when everything passes, you commit.
And we generally got that story working. In fact, I think I did two implementations (it sort of runs together) — one as a standalone “develop.py” script, and the other as custom distutils commands. That was one of the unexpected benefits of the sprint: I now feel like I can confidently hack things I need into distutils without considering the entire process so much black magic.

The last day of the sprint also was one of the most productive for me. Jim and I were discussing how to proceed with eggs, and decided that if it was easy, a tool that read zpkg dependency information and generated eggs would be a good transitional tool. So [zpkgegg][7]  was born. I did most of the work during that last day, and then worked on polishing it on the flight home and wrapped up on Saturday. I’m pretty pleased with the way it turned out, even if it is just a transitional tool.

In my mind the sprint was well worth the time I spent there and the money [CC][8]  spent on me attending it. Zope 3 and Eggs are both technologies that are central to ccPublisher’s future: Zope 3 because it provides so much in the way of infrastructure, and Eggs because they’re the most logical choice for an extension packaging mechanism. And the knowledge gained at the sprint has already paid off — in about an hour yesterday I created a [branch of ccPublisher][9]  and hacked it to use eggs instead of svn:externals for the Zope dependencies.



 [1]: http://dev.zope.org/Zope3
 [2]: http://wiki.creativecommons.org/CcPublisher
 [3]: http://peak.telecommunity.com/DevCenter/PythonEggs
 [4]: http://peak.telecommunity.com/DevCenter/setuptools
 [5]: http://cheeseshop.python.org/
 [6]: http://www.python.org/doc/dist/
 [7]: http://svn.zope.org/projectsupport/trunk/src/zpkgegg/
 [8]: http://creativecommons.org
 [9]: http://svn.berlios.de/wsvn/cctools/publisher/branches/huevos_rancheros/
