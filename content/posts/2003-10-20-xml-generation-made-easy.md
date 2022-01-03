---
title: XML generation made easy
date: 2003-10-20T09:07:40.000Z
categories:
  - python
slug: xml-generation-made-easy
---
Stoa is a project I work on for my day job; a Zope-based Student Information System we use at the school for everthing from scheduling and attendance to posting online content for courses. Stoa uses XML for a few internal tasks, and right now it uses a module I wrote to do the handling. The module is ugly. And expensive. Really ugly, really expensive.

So I’ve been struggling with ideas on how to consume and emit XML is a “Python-ic”, Zope-friendly way. [JAXML][1]  seems to be a good choice for emitting Python. It has an amazingly simple API, and doesn’t get caught up in the SAXiness that seems to plague other XML tools (I know, I know, SAX is supposed to make our lives better, but it just gets in my way). Now to find an equally simple way to consume XML.

 [1]: http://www.librelogiciel.com/software/jaxml/action_Presentation
