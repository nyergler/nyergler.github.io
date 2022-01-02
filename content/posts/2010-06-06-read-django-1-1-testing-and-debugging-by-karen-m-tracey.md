---
title: 'Read: “Django 1.1 Testing and Debugging”, by Karen M. Tracey'
date: 2010-06-06T17:42:47.000Z
categories:
  - reading
tags:
  - 2010
  - nonfiction
  - read
  - review
slug: read-django-1-1-testing-and-debugging-by-karen-m-tracey
---
Packt Publishing [sent][1]  me a copy of _\`Django 1.1 Testing and Debugging <http://www.packtpub.com/django-1-1-testing-and-debugging/book?utm\_source=yergler.net&utm\_medium=bookrev&utm\_content=blog&utm\_campaign=mdb\_003267>\`\__ for review. I was particularly interested in reading this title, as testing is something I know makes my code better, but don’t feel like I do enough of, and because I work on a couple of [Django][2] -based projects in my spare time, with varying degrees of test coverage. While I consider myself comfortable with Python’s stock <tt class="docutils literal">`unittest</tt> <<http://docs.python.org/library/unittest.html> >\`_ and <tt class="docutils literal">`doctest</tt> <<http://docs.python.org/library/doctest.html> >\`_ modules, I was curious to learn about how you can integrate Django with other Python testing tools.

_Django 1.1. Testing and Debugging_ is split, as the title implies, into two halves: Testing, followed by Debugging. It uses a narrative approach, following the development of a survey application throughout. The book starts with an overview of the stock unittest and doctest facilities in Python. Most of chapters 1 through 3 are devoted to the basics of unit testing, specifically for Model classes. Tracey provides information about Django-specific nuances along with way. For example, I didn’t realize Django ships with a customized doctest module to enabled [<span class="caps">ELLIPSES</span>][3]  support in Python 2.3. Chapter 3 also provides information about how to use fixtures for providing test data, and how to specify those apart from the initial data fixtures developers may already be aware of. Chapter 4 mirrors some of the information found in Django’s [testing documentation][4] : the Django [TestCase][5] , and how you use it to do basic view testing.

Chapter 5 describes integrating Django with other tools, primarily by example. Tracey discusses how to replace the default Django test runner, and what interface the replacement needs to implement. She also provides a stub example of more “invasive” integration, crafting a new management command that could (possibly) handle code coverage reporting while running the tests. This stub was interesting, but didn’t feel particularly testing related to me. Chapter 5 closes with examples of using the excellent [coverage][6]  package with [django-coverage][7] , and integrating twill into Django tests.

Chapter 6 begins the section on debugging with an overview of the Django settings that impact debugging, and how the development server supports debugging of applications. Chapter 7 follows with a thorough analysis of the development server’s error page, as well as examples of debugging based on the information given. The examples continue to develop the survey application, and introduces what Tracey describes as “typical mistakes”, then describes how to fix them.

Chapter 8 begins to dig a little deeper, and I was happy to see mention of Rob Hudson’s [Django Debug Toolbar][8] , an indispensable tool. Chapter 8 also includes details on using the [logging][9]  module, and how to develop a decorator that marks function entry and exit. I know that I’m all too guilty of using <tt class="docutils literal">print</tt> instead of <tt class="docutils literal">logging</tt>, and it was nice to be reminded of how easy this is.

Chapter 9 was my favorite part of the book. It gives a good overview of using [pdb][10] , and then goes on to demonstrate how to use pdb and a shell session to test a race condition and deal with it.

Overall _\`Django 1.1 Testing and Debugging <http://www.packtpub.com/django-1-1-testing-and-debugging/book?utm\_source=yergler.net&utm\_medium=bookrev&utm\_content=blog&utm\_campaign=mdb\_003267>\`\__ seems like a good introductory book for Django developers who are new to testing (or Django). While many of the debugging examples seemed obvious to me, I suspect that someone new to Django could use this book as an introduction to development and debugging.



 [1]: http://yergler.net/blog/2010/05/16/preread-django-1-1-testing-and-debugging-by-karen-m-tracey/
 [2]: http://djangoproject.com
 [3]: http://docs.python.org/library/doctest.html#doctest.ELLIPSIS
 [4]: http://docs.djangoproject.com/en/1.1/topics/testing/
 [5]: http://docs.djangoproject.com/en/1.1/topics/testing/#testcase
 [6]: http://pypi.python.org/pypi/coverage
 [7]: http://pypi.python.org/pypi/django-coverage
 [8]: http://github.com/robhudson/django-debug-toolbar
 [9]: http://docs.python.org/library/logging.html
 [10]: http://docs.python.org/library/pdb.html
