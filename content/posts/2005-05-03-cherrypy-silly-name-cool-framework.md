---
title: 'CherryPy: Silly Name, Cool Framework'
date: 2005-05-03T10:48:26.000Z
categories:
  - development
slug: cherrypy-silly-name-cool-framework
---
I’ve been playing with CherryPy, one of many Python web frameworks, over the past 12 hours, and have to admit I’m really impressed. I first ran across [CherryPy][1]  a few years back, and was thoroughly unimpressed. The details are hazy, but I seem to remember that in it’s first incarnation, it involved embedding Python in templates, running some sort of compiler over them, and then serving them up. Like I said, the details are hazy, so I could be completely wrong on that. What I **do** remember is that I couldn’t get the [Warrant][2]  song out of my head for days, and that itself was enough to make me write it off. This may say more about my white trash background than anything, but that’s not a path I want to explore this morning.

So CherryPy reentered my radar during PyCon, when it was mentioned in reference to the [PyWebOff][3]  (a session I seriously regret missing). Last night I finally decided to address a naggling problem (more on that in a moment) and installed CherryPy (which I’ll refer to as “CP” from here on out). Here’s what it has going for it:

<ul class="simple">
  <li>
    Like <a class="reference external" href="http://mems-exchange.org/software/quixote">Quixote</a>, CP focuses on mapping requested URLs to Python objects. Specifically, callables. So a function, `def foo(): ...` in the root of a CP site maps to <a class="reference external" href="http://[root]/foo">http://[root]/foo</a>.
  </li>
  <li>
    Unlike Quixote, CP provides fewer “special” methods. Quixote uses things like _q_index, _q_lookup, etc (I may have those wrong… it’s been a while) to provide special index or name resolution methods. CP also uses the idea of an index, but it’s just a callable, index. And there’s only one other special method, default, which is called to resolve names when CP can’t find them. This means you can easily implement Quixote-like behavior if you need it, but for 90% of the cases I run into, the default, simpler implementation is sufficient.
  </li>
  <li>
    CP does not include a templating language. This is a good thing. “Recipes”: are available for integrating Cheetah Templates, and I was able to integrate ZPT in about 30 minutes. This means that if you don’t need or want templates, you don’t have the overhead. If you do want them, you can use the ones you’re most famliar with.
  </li>
  <li>
    CP uses modern language constructs like decorators to annotate methods with security and visibility information. I’m sure other web frameworks could implement similar syntax without much trouble, but this gives CP code (in my opinion) a clean, literal quality.
  </li>
  <li>
    Finally, CP includes support or example code for both sessions and authentication, two very common web application idioms.
  </li>
</ul>

I’ve used Quixote and Zope extensively in the past. Both have really compelling qualities. However, I think the most compelling thing about CP is how quickly I was able to get up and running.

It took months to get this far in Zope. Now that I’m there, though, I know Zope is incredibly powerful, and wouldn’t hesitate to use it for a large system. Once you figure out the idioms, you know how to get things done.

With Quixote, I find I have to refer to the samples and documentation much more than I’d like. Given the fact that session handling and authentication isn’t built in, it’s annoying to have to figure out how to implement the `shelve` session handler every time you build an app. This isn’t entirely fair: I’m sure if I built Quixote apps on a regular basis, I’d be able to do it without the docs. But I’m confident I can write something in CP and come back in 6 months, and still be clear on what’s going on in the code. I think the understanding would be far less with Quixote (admittedly, this may say more about my code than Quixote itself; I can only speak for myself).

So what was the itch I had to scratch? Content management. Aside from my blog, the rest of yergler.net tends to stagnate and become horribly out of date (really, I haven’t [work for Canterbury][4]  for 9 months). I think part of that has to do with the fact that I’m running the site with “PyBlosxom”:. PyBlosxom is cool in that it allows you to use flat text files for content, and merge them with the “presentation” at the time of request. But to edit those files you need to SSH into the server, edit the file, etc. Constrast that with WordPress which runs by blog, where I can easily log in from a university computer (which probably doesn’t have an SSH client on it), and create, edit or manipulate content. So I’ve been wanting a simple, bare bones CMS which would allow me to create content using a common template.

The requirement which has kept me from using something like [TextDrive][5] , or even [WordPress][6]  is that I need URLs that match what I currently have. That basically translates into unlimited depth “sub-categories” or directories.

Anyway, in about 12 hours (of which 6 or 7 were spent sleeping), I’ve been able to put together a basic system that features through the web editting, rendering using Zope Page Templates, and basic security for the admin areas. Take that, [Rails][7] .



 [1]: http://cherrypy.org
 [2]: http://www.allmusic.com/cg/amg.dll?p=amg&sql=10:2d87gjqrj6ix
 [3]: http://pyre.third-bit.com/pyweb/index.html
 [4]: http://yergler.net
 [5]: http://textdrive.com
 [6]: http://wordpress.org
 [7]: http://rubyonrails.org
