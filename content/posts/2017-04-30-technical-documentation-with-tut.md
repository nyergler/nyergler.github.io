---
title: Technical documentation with Tut
date: 2017-04-30T17:12:38.000Z
categories:
  - tools
tags:
  - effective django
  - rst
  - sphinx
  - tut
slug: technical-documentation-with-tut
---
Long running branches are a personal pet peeve of mine: I&#8217;d much rather put the effort into managing feature flags, etc than I would into merging a branch that&#8217;s diverged significantly. So it&#8217;s with a mixture of embarrassment and relief that today I merged a branch that&#8217;s been hanging out for 3 **years**.

Four years ago I published [Effective Django][1]. As I was writing it, I knew I wanted to version control the text. As I worked with the code samples, however, it felt like I was having to work against my version control, rather than having it work for me: the code changes as the reader works through the content, and that&#8217;s not necessarily the same sequence of changes I&#8217;d make as I wrote. In effect, there were two timelines at work, and they didn&#8217;t match up. To make matters worse, it felt like I was repeating myself _a lot_: copying and pasting between source files when I wanted to start a new &#8220;chapter&#8221;, etc. [Tut was my solution to this problem.][2]

When I started updating Effective Django three years ago, I was aware there was still room for improvement: my Restructured Text source files were littered with specific line numbers from the source code, as well as `prepend`, `pyobject`, and `end-before` flags for my literal includes, all for the purpose of limiting the display to the changes. These felt brittle and inelegant: if I made a change in an early step of the tutorial (which tut made easy), all the line numbers could conceivably change; missing one was the sort of error that&#8217;s difficult to check without incredibly careful proofreading. It _seemed_ like I should be able to get that information from the source control, so I set out to figure out how.

* * *

I think of the Effective Django tutorial, written using the first iteration of tut, as a form of &#8220;executable documentation&#8221;. It contains code samples, and the fact that those exist independently on disk means you can conceivably go to any point in time and run tests to make sure things are working. My first exposure to executable documentation was doctests; indeed, when I started thinking about tut, the place I started was reading the code for Sphinx&#8217;s doctest support.

As I thought about how to make my code inclusion more robust, I thought I wanted a &#8220;[literate][3] tut&#8221;: that is, a single document that contained both the text and source, from which I would [weave][4] the files if I wanted to execute them. I probably tried half a dozen approaches to make this work. Some &#8220;wove&#8221; the source files at Sphinx build time, another tried to marry Jupyter kernels with a Sphinx builder. In the end none of them worked perfectly, and &#8212; perhaps more importantly &#8212; none of them felt easy to author with. I knew I wasn&#8217;t going to use a tool for very long if it made life harder, no matter how elegant its approach.

Defeated, I decided to go back to where I started: using tut to manager source changes, but dropping the &#8220;tricks&#8221; I&#8217;d used to make inclusion work right. In other words, I stopped trying to be clever and just started writing.

* * *

In the _years_ since I started the &#8220;literate tut&#8221; branch, I _had_ made some improvements that seemed worth keeping around. I&#8217;d abstracted the git operations slightly and removed a lot of the global state. I&#8217;d also moved from trying to &#8220;infer&#8221; the order of steps based on history to maintaining an explicit list in a special configuration branch. These changes meant that as I started writing &#8212; and making progress &#8212; it was easier to try out a couple of ideas.

When Tut encounters a &#8220;checkpoint&#8221; it switches to a different git branch. This means that if the source tree is dirty, the build won&#8217;t succeed. After running into that a handful of times, I realized that I could use the same approach I used for fetching configuration (`git show`) to fetch a file from a specific branch, which potentially eliminates the need for playing chutes and ladders with `head`.

This got me thinking that I could grab two different versions of a file for side by side display, if I so desired. Combined with Python&#8217;s [difflib module][5], however, it suddenly seemed like I had the basis for generating the sort of &#8220;documentation style&#8221; diffs I&#8217;d so tediously hand crafted before.

* * *

The result of this work is Tut 0.5, released today just over four years (!!) since the last release. This release includes a lot of changes, and is what I&#8217;m using as I work on an updated Effective Django, but I&#8217;m primarily releasing it to get the branch closed and focus myself on what else might be needed.

This release includes a new `tut:literalinclude` directive which operates exactly like the built-in one, with the exception that the content is read from git, not the filesystem. I&#8217;ve also added a `tut:diff` directive, which is able to format diffs for Python source files that do a reasonable(-ish) job of only showing the context that&#8217;s needed. The `tut:diff` directive can also show a link to the full file at that stage, so the entire contents are readily available.

* * *

I don&#8217;t think it&#8217;ll be another four years until the next release. As I work on the Effective Django update, I&#8217;m pretty sure I&#8217;ll need to improve diff generation and make it behave reasonably for non-Python files.

I thought I wanted &#8220;literate tut&#8221;: a single document that contained the diffs and text all in one. What I wound up with is something better: the ability to use the right tools to edit the text _and_ code, and the ability to leverage the underlying framework to include exactly what I want as I write. You can find the new release of [tut on PyPI][6]; [let me know what you think][7].

 [1]: http://www.effectivedjango.com
 [2]: https://www.yergler.net/blog/2013/03/17/tut/
 [3]: https://en.wikipedia.org/wiki/Literate_programming
 [4]: https://en.wikipedia.org/wiki/Literate_programming#Workflow
 [5]: https://docs.python.org/3.5/library/difflib.html
 [6]: https://pypi.python.org/pypi/tut/0.5
 [7]: https://github.com/nyergler/tut/issues
