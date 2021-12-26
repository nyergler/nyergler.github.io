---
title: ccPublisher, Python and XML
author: Nathan Yergler
type: post
date: 2005-09-08T16:56:35+00:00
excerpt: |
  <p>So two days ago I launched the first <a class="reference external" href="http://creativecommons.org/weblog/entry/5606">Developer Preview of ccPublisher
  2</a> for Linux, promising
  Windows and Mac <span class="caps">OS</span> X builds “within the day.” It’s been two days,
  they’re not uploaded, what’s going on? Funny you should ask. It actually
  has a lot to do with ...</p>
url: /2005/09/08/ccpublisher-python-and-xml/
categories:
  - development
  - python

---
So two days ago I launched the first [Developer Preview of ccPublisher 2][1]  for Linux, promising Windows and Mac <span class="caps">OS</span> X builds “within the day.” It’s been two days, they’re not uploaded, what’s going on? Funny you should ask. It actually has a lot to do with something else that’s been generating a lot of discussion lately on Python blogs: <span class="caps">XML</span>.

[Philip J. Eby][2] , the mastermind behind things like <span class="caps">PEAK</span> and Python Eggs, wrote a [blog post][3]  last month titled [Chandler Begins Recovery from <span class="caps">XML</span>][3]  This follows his self-described rant from late last year, [Python is not Java][4]  where he took developers to task for, among other things, turning to <span class="caps">XML</span> as the solution to all your data and configuration woes. The gist was, it might work for Java, but when mixed with Python it’s nothing but a boat anchor. So how is [Chandler][5]  “recovering” from <span class="caps">XML</span>? By dumping it. Their system for extending Chandler, parcels, previously used an <span class="caps">XML</span> file to define extension points and connections (roughly — I won’t claim really deep knowledge here). The new system, championed by <span class="caps">PJE</span>, uses Python syntax and code — descriptors, registrations, etc — to accomplish the same thing. <span class="caps">PJE</span>’s argument, as I read it, hinges not on the idea that <span class="caps">XML</span> is inherently evil, but rather that using <span class="caps">XML</span> is often a sign of over-engineering. As a believer in <span class="caps">YAGNI</span> (Ya Ain’t Gonna Need It) in software development, I can agree with that.

So what does this have to do with ccPublisher 2, and more importantly the delayed Developer Preview packages? Let me address the two parts of that question in sequence.

First, what does it have to do with ccPublisher 2? A major design goal of ccPublisher 2 is enabling third-party contributions, in the form of extensions and derivative applications. We’re doing this in a number of ways, including basic things like improved documentation. A major tactic, though, is the use of loosely coupled pieces of code that are intentionally ignorant about one another. For example, an <span class="caps">MP3</span> file contains metadata in the form of <span class="caps">ID3</span> tags. The object that wraps the generic file doesn’t know this, but it knows it can say “Hey, all you components — anyone know anything about this here file-thingy?” and an adapter object will respond with everything it knows. So in theory (and in practice, actually — this mostly works already) you can swap out or add objects that respond without major surgery. A huge improvement over the ccPublisher 1 codebase. All these bits of code are tied together by <span class="caps">XML</span> files that describe subscriptions, adapters and interfaces. I chose the <span class="caps">ZCML</span> format, developed as part of the Zope3 project, because I was familiar with it, and because I was reasonably confident I could use code from Zope3 to make my life easier. And it turns out I was right — <span class="caps">ZCML</span> was reasonably easy to separate from Zope3. It’s also made life somewhat easier, and it will let non-coders who need customized metadata fields to add them relatively easily (note that I haven’t actually decided if non-coders will actually need to do this, it’s just the easiest rationalization right now).

So after reading Philip’s rant(s) and background on deprecating <span class="caps">XML</span> configuration files in Chandler, I started thinking about the suitability of <span class="caps">ZCML</span> for the task at hand. <span class="caps">ZCML</span> makes a lot of sense for Zope3 — a big advantage (in my mind) of Zope3 over previous versions is that (in theory) you can take existing classes that model data or behavior and use them in Zope without making them Zope-specific. In that case moving the configuration and registration into external files helps with that goal. ccPublisher doesn’t have that goal or that baggage — anything used in ccPublisher will probably be ccPublisher-ized in some way. I’m not convinced that <span class="caps">ZCML</span> is the wrong choice for ccPublisher, but the talk has had the effect of making me think about it more now than I did earlier.

Now, on to the second question — why the delay. Well, it turns out that <span class="caps">ZCML</span> makes life a bit more difficult when packaging your code. Linux wasn’t a problem — you just use <tt class="docutils literal">distutils</tt> and specify a <tt class="docutils literal"><span class="pre">recursive-include</span></tt> in the <span class="caps">MANIFEST</span>.in. Windows is a different story — we’re using py2exe, which means there are two problems: first, py2exe ignores the <span class="caps">MANIFEST</span>.in when finding modules to include. This makes a certain perverse sense, but it still bites you in the ass. After hacking up a script to include the <span class="caps">ZCML</span> along side the Python byte-code, though, you [I] realize something — the byte code is in a <span class="caps">ZIP</span> file, and your code doesn’t traverse into <span class="caps">ZIP</span> files (ala [<span class="caps">PEP</span> 302][6] ) to retrieve the <span class="caps">ZCML</span> resources properly. Additionally, even though you can set up a dummy tree along side library.zip containing the <span class="caps">ZCML</span>, the Python pathing makes things, well, ugly. Really ugly. Sigh.

So ccPublisher 2 Developer Preview is slightly delayed on Windows while we make some retrofits to the code. The solution I’ve decided on is [Python Eggs][7] . Eggs let you package your Python code, make explicit declarations about dependencies and (most importantly for this situation) [access non-code resources][8]  stored in the package.

So interestly, <span class="caps">PJE</span> appears to have the ability to spark concern as well as solve weird edge-case problems.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2005-09-08 16:56:35
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      326
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      layout:
    </th>

    <td class="field-body">
      post
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      slug:
    </th>

    <td class="field-body">
      ccpublisher-python-and-xml
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      comments:
    </th>

    <td class="field-body">
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      category:
    </th>

    <td class="field-body">
      development, python
    </td>
  </tr>
</table>

 [1]: http://creativecommons.org/weblog/entry/5606
 [2]: http://dirtsimple.org/
 [3]: http://dirtsimple.org/2005/08/chandler-begins-recovery-from-xml.html
 [4]: http://dirtsimple.org/2004/12/python-is-not-java.html
 [5]: http://osafoundation.org
 [6]: http://www.python.org/peps/pep-0302.html
 [7]: http://peak.telecommunity.com/DevCenter/PythonEggs
 [8]: http://peak.telecommunity.com/DevCenter/PythonEggs#accessing-package-resources