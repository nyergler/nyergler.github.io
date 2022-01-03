---
title: 'DocSix: Doctests on Python 2 & 3'
date: 2014-02-19T00:00:00.000Z
categories:
  - development
tags:
  - doctests
  - python
  - python3
  - testing
slug: docsix-doctests-python-3
---
I was first introduced to [doctests][1]  working on Zope 3 at early PyCon sprints. At the time the combination of documentation, specification, and test in a single document seemed pretty interesting to me. These days I like to use them for testing my documentation.

Last week [stvs2fork][2]  helpfully opened [a pull request][3]  for [Rebar][4] , fixing some syntax that&#8217;s no longer valid in Python 3. I decided that it&#8217;d be interesting to add Python 3.3 to the [automated test runs][5] . Fixing the code to work with Python 3 was easy enough, but when I ran the doctests I discovered an issue I hadn&#8217;t thought of:

**Unicode string output looks different in Python 3 vs Python 2.**.

<pre class="literal-block">&gt;&gt;&gt; validator = AgeValidator()
&gt;&gt;&gt; validator.errors({'age': 'ten'})
{'age': [u'An integer is required.']}
</pre>

This example works _exactly_ the same in Python 2 and 3: in both cases the error messages are returned as a list of Unicode strings. But in Python 2 the output has the leading `u` indicator. Not so in Python 3.

What I needed to do is strip the Unicode indicator from the output strings before executing the test; then I&#8217;d have the Python 3 doctest I needed. So I wrote a tool that lets me do that.

**DocSix lets you run your doctests on Python 2 and 3.**

[DocSix][6]  builds on [Manuel][7] , a library for mixing custom test syntax into doctests. DocSix can work with existing uses of Manuel, or it can load your doctests into a [unittest][8]  [TestSuite][9] , ready to go:

<pre class="literal-block">from docsix import get_doctest_suite

test_suite = get_doctest_suite(
    'index.rst',
    'advanced.rst',
)
</pre>

Potentially useful links:

<ul class="simple">
  <li>
    <a class="reference external" href="http://github.com/nyergler/docsix">DocSix git repository</a>
  </li>
  <li>
    <a class="reference external" href="http://docsix.readthedocs.org/">DocSix documentation</a>
  </li>
  <li>
    Rebar uses DocSix with the Django test runner; see <a class="reference external" href="https://github.com/eventbrite/rebar/blob/0fe306af8f3eb8c6949605c9f28b8532d3bf7c28/src/rebar/tests/__init__.py#L24">run_tests</a>.
  </li>
</ul>



 [1]: http://en.wikipedia.org/wiki/Doctest
 [2]: https://github.com/stvs2fork
 [3]: https://github.com/eventbrite/rebar/pull/1
 [4]: http://rebar.readthedocs.org/
 [5]: http://travis-ci.org/eventbrite/rebar
 [6]: http://pypi.python.org/pypi/docsix
 [7]: http://pythonhosted.org/manuel/
 [8]: http://docs.python.org/2/library/unittest.html
 [9]: http://docs.python.org/2/library/unittest.html#unittest.TestSuite
