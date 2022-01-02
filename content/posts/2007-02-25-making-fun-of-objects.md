---
title: Making Fun of Objects
date: 2007-02-25T13:19:22.000Z
categories:
  - pycon2007
  - python
  - testing
slug: making-fun-of-objects
---
Oh, wait; not that sort of mocking. Fine. Following the talk on using the [fixture][1]  package, Jeff Younker spoke on using the [PyMock][2]  package for unit testing with mock objects. Younker spent the first few minutes of his talk talking about unit testing in general; what I initially thought was simply a meandaring exposition on the nature of testing was actually going somewhere: adding tests to existing code can be painful, because of how intertwined things can be. Creating mock objects can help you isolate pieces of the code from the remainder of the application.

PyMock makes this somewhat simpler by providing a way of “recording” what you want your mock objects to return, and the going into “play back” mode to run the test. It provides a way to mock methods, attributes and generators on Python objects.

Things I’m sure of following the talk:

<ul class="simple">
  <li>
    The idea of mocking objects seems like a powerful way to isolate pieces of existing code for the purpose of testing.
  </li>
  <li>
    Showing a slide full of code, with near-zero explanation, for only a few seconds before moving on, isn’t long enough for me to grok it; judging by the under-the-breath comments from those around me, I’m not alone in this.
  </li>
  <li>
    Unit tests are hideously ugly when compared to the beauty of doctests.
  </li>
</ul>



 [1]: http://code.google.com/p/fixture
 [2]: http://theblobshop.com/pymock/
