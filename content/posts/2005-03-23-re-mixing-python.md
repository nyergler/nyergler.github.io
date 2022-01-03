---
title: (re) Mixing Python
date: 2005-03-23T11:48:51.000Z
categories:
  - pycon2005
slug: re-mixing-python
---
This morning’s keynote at PyCon was given by Jim Huginin, formerly of Jython fame, now of IronPython fame. Jim joined Microsoft [STRIKEOUT:8] 2 months ago, and was able to announce the release of IronPython 0.7 ([website][1] ) today. Jim’s talk was interesting for a number of reasons, in no particular order:

<ul class="simple">
  <li>
    He demonstrated interactively accessing Microsoft DLLs from the Python prompt. In particular he demonstrated instantiating the Microsoft Agent Peedy the Parrot and then calling Avalon. The Avalon portion was particularly interesting. He first showed declaratively creating the user interface, and then showed off loading the user interface from XAML. This reminded me a lot of both XML User interface Language”>XUL (from Mozilla) and (to a greater degree) XML Resource Control”>XRC (from <a class="reference external" href="http://wxwidgets.org">wxWidgets</a>). This was pretty interesting to me, since some of the “walk” methods that the framework provides would make life with XRC much easier.
  </li>
  <li>
    He demonstrated delegating a C# method to a Python function, and then calling that Python function, through it’s C# parent class, from the interactive prompt. Yeah, he was sweating during that demo, too.
  </li>
  <li>
    He talked “for 7 minutes” about the different ways in which the CPython virtual machine and the CLR virtual machine generate op codes, and further down the line, x86 machine code. I actually appreciated my class in assembly language from last year during that portion of the talk.
  </li>
</ul>

The only other impression I got from his talk is that Jim has had some less-than-savory run-ins with the Microsoft Legal Department, one of which led to his talk title “Implementation Running On .Net of Python” instead of just “IronPython”. Whatever.



 [1]: http://workspaces.gotdotnet.com/ironpython
