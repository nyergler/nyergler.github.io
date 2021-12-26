---
title: 'Web, Web Afternoon'
author: Nathan Yergler
type: post
date: 2007-02-23T17:10:01+00:00
excerpt: |
  <p>Lunch: tasty “Mexican” food, including those tasty cinnamon-sugar coated
  crunchy-chewy desserty things. Lots of those.</p>
  <p>And after lunch, it’s fun with Python on the Web. The first afternoon
  talk was <a class="reference external" href="http://ianbicking.org/">Ian Bicking’s</a> <em>Everything You
  Wanted to Know About <span class="caps">WSGI</span> but were Afraid to Ask</em>. <span class="caps">OK</span>, that’s just ...</p>
url: /2007/02/23/web-web-afternoon/
categories:
  - pycon2007
  - python
  - wsgi

---
Lunch: tasty “Mexican” food, including those tasty cinnamon-sugar coated crunchy-chewy desserty things. Lots of those.

And after lunch, it’s fun with Python on the Web. The first afternoon talk was [Ian Bicking’s][1]  _Everything You Wanted to Know About <span class="caps">WSGI</span> but were Afraid to Ask_. <span class="caps">OK</span>, that’s just my title; it’s really [<span class="caps">WSGI</span>: An Introduction][2] . [<span class="caps">WSGI</span>][3]  is a specification for connecting pieces of web applications in Python. It’s something (like Eggs) that I can conceptually understand as being important. But (like Eggs) I have a hard time really groking it.

<span class="caps">WSGI</span> provides for this idea known as Middleware, which allows you to wrap your applications in, uh, other applications. Ian actually had a good litmus test for what is middleware: if you code is acting as both a client **and** a server, then by definition it is middleware. Ian also spent some time discussing the idea of “microframeworks”, pieces of software that don’t provide this full stack but can be combined in interesting ways to build something bigger. So yeah, <span class="caps">WSGI</span>: darn cool.

Following the <span class="caps">WSGI</span> talk was the Python Web Framework Panel, with representatives from Zope, CherryPy, Pylons, Django, TurboGears, Pyjamas, Spyce and Nevow[1]_. Nothing really ground-breaking, but Bob Brewer of CherryPy did make an amusing comment: “Reinventing the wheel isn’t so bad if you’re really interested in wheels.” What did sort of annoy me is the multitude of comments from creators about “looking at Zope and running away screaming.” Look, I agree that Zope isn’t for everyone. I also agree with Phillip: [where Zope leads, Python follows][4] . I don’t know when Zope became the Python web community’s collective bitch.

Now, off to my friend Vern’s talk about teaching with Python (and dumping that tired hag “hello, world”), then a nap, lightning talks and finally Shawn and I make our annual pilgrimage to Fry’s.

<table class="docutils footnote" frame="void" id="id1" rules="none">
  <colgroup><col class="label" /><col /></colgroup> <tr>
    <td class="label">
      [1]
    </td>

    <td>
      Apologies if I missed one; this is from memory.
    </td>
  </tr>
</table>

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2007-02-23 17:10:01
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      487
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
      web-web-afternoon
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
      pycon2007, python, wsgi
    </td>
  </tr>
</table>

 [1]: http://ianbicking.org/
 [2]: http://blog.ianbicking.org/going-to-pycon-2007.html
 [3]: http://en.wikipedia.org/wiki/WSGI
 [4]: http://dirtsimple.org/2007/01/where-zope-leads-python-follows.html