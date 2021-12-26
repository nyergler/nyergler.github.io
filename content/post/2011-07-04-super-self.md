---
title: '<code>super(self.__class__, self) # end of the line for subclassing</code>'
author: Nathan Yergler
type: post
date: 2011-07-04T20:44:23+00:00
excerpt: |
  <p>I’ve learned (and remembered) a lot in the past two months as I’ve
  gotten back to coding as my primary job. One thing that I guess I never
  quite internalized before is how <tt class="docutils literal">super</tt> works. I have been bitten by
  code that looks something like the following a ...</p>
url: /2011/07/04/super-self/
categories:
  - development
  - python
tags:
  - python
  - super

---
I’ve learned (and remembered) a lot in the past two months as I’ve gotten back to coding as my primary job. One thing that I guess I never quite internalized before is how <tt class="docutils literal">super</tt> works. I have been bitten by code that looks something like the following a few times in the past month:

<pre class="literal-block">class A(object):
    def init(self):
        super(self.__class__, self).init()

    class B(A):
    def init(self):
        super(B, self).init()
</pre> The surprise comes when I try to use my sub-class,

<tt class="docutils literal">B</tt>. Instantiating <tt class="docutils literal">B()</tt> blows up the stack with: <tt class="docutils literal">RuntimeError: maximum recursion depth exceeded while calling a Python object</tt>. What? According to the [Python 2.7.2 standard library documentation][1] , <tt class="docutils literal">super</tt> “return[s] a proxy object that delegates method calls to a parent or sibling class of type.” So in the case of single inheritance, it delegates access to the super class, it does not return an instance of the super class. In the example above, this means that when you instantiate B, the follow happens:

<ol class="arabic simple">
  <li>
    enter <tt class="docutils literal">B.__init__()</tt>
  </li>
  <li>
    call <tt class="docutils literal">super</tt> on B and call <tt class="docutils literal">__init__</tt> on the proxy object
  </li>
  <li>
    enter <tt class="docutils literal">A.__init__()</tt>
  </li>
  <li>
    call <tt class="docutils literal">super</tt> on <tt class="docutils literal">self.__class__</tt> and call <tt class="docutils literal">__init__</tt> on the proxy object
  </li>
</ol> The problem is that when we get to step four,

<tt class="docutils literal">self</tt> still refers to our instance of <tt class="docutils literal">B</tt>, so calling <tt class="docutils literal">super</tt> points back to <tt class="docutils literal">A</tt> again. In technical terms: Ka-bloom. **<span class="caps">TL</span>;<span class="caps">DR</span>:** <tt class="docutils literal">super(self.__class__, self)</tt> may look like a neat trick, but it’s the end of the line for sub-classing. **Further reading:** Raymond Hettinger’s excellent [blog post on super][2]  provides a great overview of <tt class="docutils literal">super</tt> and shows off the improved Python 3 syntax, which removes the need to write the class name as part of the <tt class="docutils literal">super</tt> statement. I was really pleased to find the Python standard library documentation links directly to it.

<table class="docutils field-list" frame="void" rules="none">
  <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2011-07-04 20:44:23
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      1990
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
      super-self
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

  <tr class="field">
    <th class="field-name">
      tags:
    </th>

    <td class="field-body">
      python, super
    </td>
  </tr>
</table>

 [1]: http://docs.python.org/library/functions.html#super
 [2]: http://rhettinger.wordpress.com/2011/05/26/super-considered-super/