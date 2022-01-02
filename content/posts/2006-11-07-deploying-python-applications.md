---
title: Deploying Python Applications
date: 2006-11-07T16:50:41.000Z
categories:
  - development
slug: deploying-python-applications
---
This post started out as details of some Django work I’ve been doing lately. But it turned out that I needed to talk about zc.buildout first, so Django will have to wait.

Lately I’ve been working on an application for [work][1]  that’s using [CherryPy][2] . Why not Django, you ask (since I was going to be writing about Django…)? The first reason is that we already have [code in production][3]  using CherryPy, and fewer dependencies is better. More importantly, the application I’m working with does minimal database access and has no need for what I perceive to be Django’s killer feature — dead easy administrative interfaces.

As I started building this application, I was faced with what (for me) is a common question: how do I get code from my development laptop to the server with a minimal amount of fuss? How do I actually deploy this application in a way that’s manageable in the long term?

The basic answer to this, the one that gets me by 80% of the time, is Subversion. You check the code in, you check the code out. But what about dependencies? I guess there are [eggs][4] , which are supposed to help with that. What about scripts? [setuptools][5]  has some support for generating those. What about Python paths? Sigh.

It turns out that a tool originating in the [Zope][6]  world, [zc.buildout][7] , provides a really attractive story for deploying Python applications. zc.buildout is a project developed by Jim Fulton of [Zope Corp][8]  that “provides tools for assembling applications from multiple parts, Python or otherwise.” At its core is a text file that describes that _parts_ that makes up the application, and the _recipe_ each part uses to perform its actual action. Some basic recipes, like running tests or installing an egg (dependencies and all) are made available via the [Cheeseshop][9] , and creating your own is straightforward.

So if I truly believe that fewer dependencies is better (as I stated above), you might wonder how I can be advocating for a tool that is itself a dependency, and requires yet another (setuptools). I suppose I should have qualified my earlier comment: fewer dependencies that I _have to think about_ is better. In my opinion, the best thing about zc.buildout is the fact that it relieves me from having to think about dependencies. Here’s how it works.

I include two additional files in Subversion with my project, <tt class="docutils literal">buildout.cfg</tt> and <tt class="docutils literal">bootstrap.py</tt>. buildout.cfg defines the buildout process for my project, which in this case just involves installing a single egg. bootstrap.py is magic. bootstrap.py allows me to start with a stock Python installation (no setuptools, zc.buildout or other dependencies), run bootstrap, and end up with a functioning zc.buildout system. By default it creates an <tt class="docutils literal">eggs</tt> sub-directory, which it places the eggs for setuptools and zc.buildout in. It also creates a <tt class="docutils literal">bin</tt> sub-directory that contains a new script, <tt class="docutils literal">buildout</tt>. Running that script parses my <tt class="docutils literal">buildout.cfg</tt> and installs the parts I requested.

As part of the my project’s <tt class="docutils literal">setup.py</tt> script, I use setuptools entry points to specify that [I have a script][5]  I want to make available. In this case the script just runs a simple web server, which makes testing easy. The script is specified as a dotted Python path and a callable, separated by a colon. For example, <tt class="docutils literal">my.package:main</tt>.

zc.buildout improves on this experience by reading the script information during the buildout process and creating wrappers in the <tt class="docutils literal">bin</tt> subdirectory it created earlier. Those wrappers are interesting because zc.buildout bakes in the eggs that my code depends on. This may be a bit of a yawn if you have a box with just one web app on it. But at Creative Commons where we have several different web apps, all with slightly different sets of dependencies, and a couple with Python version dependencies, this makes a world of difference. No more writing wrapper scripts, no more installing dependencies into <tt class="docutils literal"><span class="pre">site-packages</span></tt>. Two commands (bootstrap, then buildout) and you’re up and going.

I haven’t played with custom recipes yet, but even with simple tasks like this, zc.buildout is a great tool. Thanks, Jim! Tomorrow: zc.buildout, Django, eggs and you.



 [1]: http://creativecommons.org
 [2]: http://cherrypy.org
 [3]: http://api.creativecommons.org
 [4]: http://peak.telecommunity.com/DevCenter/PythonEggs
 [5]: http://peak.telecommunity.com/DevCenter/setuptools#automatic-script-creation
 [6]: http://zope.org
 [7]: http://cheeseshop.python.org/pypi/zc.buildout/
 [8]: http://zope.com
 [9]: http://cheeseshop.python.org/pypi
