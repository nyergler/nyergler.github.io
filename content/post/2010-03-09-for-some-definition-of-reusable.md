---
title: 'For Some Definition of “Reusable”'
author: Nathan Yergler
type: post
date: 2010-03-09T18:38:54+00:00
excerpt: |
  <p>I read <a class="reference external" href="http://www.mutualinformation.org/2010/03/why-i-switched-to-pylons-after-using-django-for-six-months/">“Why I switched to Pylons after using Django for six
  months”</a>
  yesterday, and it mirrors something I’ve been thinking about off and on
  for the past year or so: what is the right level of abstraction for
  reuse in web applications? I’ve worked on two
  <a class="reference external" href="http://djangoproject.com/">Django ...</a></p>
url: /2010/03/09/for-some-definition-of-reusable/
categories:
  - development
tags:
  - django
  - python
  - web
  - zope

---
I read [“Why I switched to Pylons after using Django for six months”][1]  yesterday, and it mirrors something I’ve been thinking about off and on for the past year or so: what is the right level of abstraction for reuse in web applications? I’ve worked on two [Django][2] -based projects over the past 12-18 months: [<span class="caps">CC</span> Network][3]  and [koucou][4] . Neither is what I’d call “huge”, but in both cases I wanted to re-use existing apps, and in both cases it felt… awkward.

Part of this awkwardness is probably the impedance mismatch of the framework and the toolchain: Django applications are Python packages. The Python tools for packaging and installing ([distutils][5] , [setuptools][6] , [distribute][7] , and [pip][8] , I think, although I have the least experience with it) work on “[module distributions][9] “<sup>1</sup>: some chunk of code with a <tt class="docutils literal">setup.py</tt>. This is as much a “social” issue as a technology one: the documentation and tools don’t encourage the “right” kind of behavior, so talk of re-usable applications is often just hand waving or, at best, reinvention<sup>2</sup>.

In both cases we consciously chose Django for what I consider its killer app: the [admin interface][10] . But there have been re-use headaches. [<span class="caps">NB</span>: What follows is based on our experience, which is [setuptools][6]  and [buildout][11]  based] The first one you encounter is that not every developer of a reusable app has made it available on [PyPI][12] . If they’re using Subversion you can still use it with setuptools, but when re-using with git, we have some additional work (a submodule or another buildout recipe). I understand pip just works with the most commons [D]<span class="caps">VCS</span>, but haven’t used it myself. Additionally, they aren’t all structured as projects, and those that are don’t always declare their dependencies properly<sup>3</sup>. And finally there’s the “real” issues of templates, <span class="caps">URL</span> integration, etc.

I’m not exactly sure what the answer is, but it’s probably 80% human (as opposed to technology). Part of it is practicing good hygiene: writing your apps with [relocatable URLs][13] , using proper [<span class="caps">URL</span> reversal][14]  when generating intra-applications URLs, and making sure your templates are somewhat self-contained. But even that only gets you so far. Right now I have to work if I want to make my app easily consumable by others; work, frankly, sucks.

Reuse is one area where I think [Zope 3][15]  (and it’s derived frameworks, [Grok][16]  and [repoze.bfg][17] ) have an advantage: if you’re re-using an application that provides a particular type of model, for example, all you need to do is register a view for it to get a customized template. The liberal use of interfaces to determine context also helps smooth over some of the <span class="caps">URL</span> issues<sup>4</sup>. Just as, or more, importantly, they have a strong culture of writing code as small “projects” and using tools like buildout to assemble the final product.

Code reuse matters, and truth in advertising matters just as much or more. If we want to encourage people to write reusable applications, the tools need to support that, and we need to be explicit about what the benefits we expect to reap from reuse are.

<hr class="docutils" />

<sup>1</sup> Of course you never actually see these referred to as _module distributions_; always projects, packages, eggs, or something else.

<sup>2</sup> Note that I’m not saying that [Pylons][18]  gets the re-use story much better; the author admits choosing Django at least in part because of the perceived “vibrant community of people writing apps” but found himself more productive with Pylons. Perhaps he entered into that with different expectations? I think it’s worth noting that we chose Django for a project, in part, for the same reason, but with different expectations: not that the vibrant community writing apps would generate reusable code, but that they would education developers we could hire when the time came.

<sup>3</sup> This is partially due to the current state of Python packaging: setuptools and distribute expect the dependency information to be included in setup.py; pip specifies it in a requirements file.

<sup>4</sup> At least when dealing with graph-based traversal; it could be true in other circumstances, I just haven’t thought about it enough.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2010-03-09 18:38:54
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      1539
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
      for-some-definition-of-reusable
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
      development
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      tags:
    </th>

    <td class="field-body">
      django, python, web, zope
    </td>
  </tr>
</table>

 [1]: http://www.mutualinformation.org/2010/03/why-i-switched-to-pylons-after-using-django-for-six-months/
 [2]: http://djangoproject.com/
 [3]: https://creativecommons.net/
 [4]: http://koucou.com/
 [5]: http://www.python.org/doc/current/library/distutils.html
 [6]: http://pypi.python.org/pypi/setuptools
 [7]: http://pypi.python.org/pypi/distribute
 [8]: http://pip.openplans.org/
 [9]: http://www.python.org/doc/current/distutils/introduction.html#distutils-specific-terminology
 [10]: http://docs.djangoproject.com/en/1.1/ref/contrib/admin/
 [11]: http://buildout.org/
 [12]: http://pypi.python.org/
 [13]: http://www.chipx86.com/blog/2008/04/03/django-development-with-djblets-unrooting-your-urls/
 [14]: http://docs.djangoproject.com/en/1.1/topics/http/urls/#reverse
 [15]: http://en.wikipedia.org/wiki/Zope_3
 [16]: http://grok.zope.org/
 [17]: http://bfg.repoze.org/
 [18]: http://pylonshq.com/