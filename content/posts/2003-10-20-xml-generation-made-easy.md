---
title: XML generation made easy
date: 2003-10-20T09:07:40.000Z
categories:
  - python
slug: xml-generation-made-easy
---
Stoa is a project I work on for my day job; a Zope-based Student Information System we use at the school for everthing from scheduling and attendance to posting online content for courses. Stoa uses <span class="caps">XML</span> for a few internal tasks, and right now it uses a module I wrote to do the handling. The module is ugly. And expensive. Really ugly, really expensive.

So I’ve been struggling with ideas on how to consume and emit <span class="caps">XML</span> is a “Python-ic”, Zope-friendly way. [<span class="caps">JAXML</span>][1]  seems to be a good choice for emitting Python. It has an amazingly simple <span class="caps">API</span>, and doesn’t get caught up in the SAXiness that seems to plague other <span class="caps">XML</span> tools (I know, I know, <span class="caps">SAX</span> is supposed to make our lives better, but it just gets in my way). Now to find an equally simple way to consume <span class="caps">XML</span>.

 [1]: http://www.librelogiciel.com/software/jaxml/action_Presentation
