---
title: 'ccPublisher, Python and XML'
date: 2005-09-08T16:56:35.000Z
categories:
  - development
  - python
slug: ccpublisher-python-and-xml
---
So two days ago I launched the first [Developer Preview of ccPublisher 2][1]  for Linux, promising Windows and Mac OS X builds “within the day.” It’s been two days, they’re not uploaded, what’s going on? Funny you should ask. It actually has a lot to do with something else that’s been generating a lot of discussion lately on Python blogs: XML.

[Philip J. Eby][2] , the mastermind behind things like PEAK and Python Eggs, wrote a [blog post][3]  last month titled [Chandler Begins Recovery from XML][3]  This follows his self-described rant from late last year, [Python is not Java][4]  where he took developers to task for, among other things, turning to XML as the solution to all your data and configuration woes. The gist was, it might work for Java, but when mixed with Python it’s nothing but a boat anchor. So how is [Chandler][5]  “recovering” from XML? By dumping it. Their system for extending Chandler, parcels, previously used an XML file to define extension points and connections (roughly — I won’t claim really deep knowledge here). The new system, championed by PJE, uses Python syntax and code — descriptors, registrations, etc — to accomplish the same thing. PJE’s argument, as I read it, hinges not on the idea that XML is inherently evil, but rather that using XML is often a sign of over-engineering. As a believer in YAGNI (Ya Ain’t Gonna Need It) in software development, I can agree with that.

So what does this have to do with ccPublisher 2, and more importantly the delayed Developer Preview packages? Let me address the two parts of that question in sequence.

First, what does it have to do with ccPublisher 2? A major design goal of ccPublisher 2 is enabling third-party contributions, in the form of extensions and derivative applications. We’re doing this in a number of ways, including basic things like improved documentation. A major tactic, though, is the use of loosely coupled pieces of code that are intentionally ignorant about one another. For example, an MP3 file contains metadata in the form of ID3 tags. The object that wraps the generic file doesn’t know this, but it knows it can say “Hey, all you components — anyone know anything about this here file-thingy?” and an adapter object will respond with everything it knows. So in theory (and in practice, actually — this mostly works already) you can swap out or add objects that respond without major surgery. A huge improvement over the ccPublisher 1 codebase. All these bits of code are tied together by XML files that describe subscriptions, adapters and interfaces. I chose the ZCML format, developed as part of the Zope3 project, because I was familiar with it, and because I was reasonably confident I could use code from Zope3 to make my life easier. And it turns out I was right — ZCML was reasonably easy to separate from Zope3. It’s also made life somewhat easier, and it will let non-coders who need customized metadata fields to add them relatively easily (note that I haven’t actually decided if non-coders will actually need to do this, it’s just the easiest rationalization right now).

So after reading Philip’s rant(s) and background on deprecating XML configuration files in Chandler, I started thinking about the suitability of ZCML for the task at hand. ZCML makes a lot of sense for Zope3 — a big advantage (in my mind) of Zope3 over previous versions is that (in theory) you can take existing classes that model data or behavior and use them in Zope without making them Zope-specific. In that case moving the configuration and registration into external files helps with that goal. ccPublisher doesn’t have that goal or that baggage — anything used in ccPublisher will probably be ccPublisher-ized in some way. I’m not convinced that ZCML is the wrong choice for ccPublisher, but the talk has had the effect of making me think about it more now than I did earlier.

Now, on to the second question — why the delay. Well, it turns out that ZCML makes life a bit more difficult when packaging your code. Linux wasn’t a problem — you just use `distutils` and specify a `recursive-include` in the MANIFEST.in. Windows is a different story — we’re using py2exe, which means there are two problems: first, py2exe ignores the MANIFEST.in when finding modules to include. This makes a certain perverse sense, but it still bites you in the ass. After hacking up a script to include the ZCML along side the Python byte-code, though, you [I] realize something — the byte code is in a ZIP file, and your code doesn’t traverse into ZIP files (ala [PEP 302][6] ) to retrieve the ZCML resources properly. Additionally, even though you can set up a dummy tree along side library.zip containing the ZCML, the Python pathing makes things, well, ugly. Really ugly. Sigh.

So ccPublisher 2 Developer Preview is slightly delayed on Windows while we make some retrofits to the code. The solution I’ve decided on is [Python Eggs][7] . Eggs let you package your Python code, make explicit declarations about dependencies and (most importantly for this situation) [access non-code resources][8]  stored in the package.

So interestly, PJE appears to have the ability to spark concern as well as solve weird edge-case problems.



 [1]: http://creativecommons.org/weblog/entry/5606
 [2]: http://dirtsimple.org/
 [3]: http://dirtsimple.org/2005/08/chandler-begins-recovery-from-xml.html
 [4]: http://dirtsimple.org/2004/12/python-is-not-java.html
 [5]: http://osafoundation.org
 [6]: http://www.python.org/peps/pep-0302.html
 [7]: http://peak.telecommunity.com/DevCenter/PythonEggs
 [8]: http://peak.telecommunity.com/DevCenter/PythonEggs#accessing-package-resources
