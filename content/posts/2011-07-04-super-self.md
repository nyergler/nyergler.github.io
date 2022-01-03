---
title: '<code>super(self.__class__, self) # end of the line for subclassing</code>'
date: 2011-07-04T20:44:23.000Z
categories:
  - development
  - python
tags:
  - python
  - super
slug: super-self
---
I’ve learned (and remembered) a lot in the past two months as I’ve gotten back to coding as my primary job. One thing that I guess I never quite internalized before is how `super` works. I have been bitten by code that looks something like the following a few times in the past month:

<pre class="literal-block">class A(object):
    def init(self):
        super(self.__class__, self).init()

    class B(A):
    def init(self):
        super(B, self).init()
</pre> The surprise comes when I try to use my sub-class,

`B`. Instantiating `B()` blows up the stack with: `RuntimeError: maximum recursion depth exceeded while calling a Python object`. What? According to the [Python 2.7.2 standard library documentation][1] , `super` “return[s] a proxy object that delegates method calls to a parent or sibling class of type.” So in the case of single inheritance, it delegates access to the super class, it does not return an instance of the super class. In the example above, this means that when you instantiate B, the follow happens:

<ol class="arabic simple">
  <li>
    enter `B.__init__()`
  </li>
  <li>
    call `super` on B and call `__init__` on the proxy object
  </li>
  <li>
    enter `A.__init__()`
  </li>
  <li>
    call `super` on `self.__class__` and call `__init__` on the proxy object
  </li>
</ol> The problem is that when we get to step four,

`self` still refers to our instance of `B`, so calling `super` points back to `A` again. In technical terms: Ka-bloom. **TL;DR:** `super(self.__class__, self)` may look like a neat trick, but it’s the end of the line for sub-classing. **Further reading:** Raymond Hettinger’s excellent [blog post on super][2]  provides a great overview of `super` and shows off the improved Python 3 syntax, which removes the need to write the class name as part of the `super` statement. I was really pleased to find the Python standard library documentation links directly to it.



 [1]: http://docs.python.org/library/functions.html#super
 [2]: http://rhettinger.wordpress.com/2011/05/26/super-considered-super/
