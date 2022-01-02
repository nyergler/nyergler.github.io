---
title: gsc Bug Fixes
date: 2009-07-25T18:41:27.000Z
categories:
  - development
tags:
  - cc
  - git
  - git-svn
  - gsc
  - svn
  - 'svn:externals'
slug: gsc-bug-fixes
---
I [announced][1]  **gsc** earlier this week because it worked for me. If you were brave and cloned the [repository][2]  to try it out, you undoubtedly found that, well, it _didn’t_ work for you. Thanks to Rob for reporting the problem with <tt class="docutils literal">setup.py</tt>, as well as a few other bugs.

I’ve pushed an update to [the repository on gitorious][2]  which includes fixes for the <tt class="docutils literal">setup.py</tt> issue, support for some [likely] common Subversion configurations and a test suite. In addition to the installation issue Rob also reported that wasn’t able to clone his svn repository with gsc. Some investigation led me to realize the following cases weren’t supported:

<ul class="simple">
  <li>
    <tt class="docutils literal">svn:externals</tt> specified with nested local paths (ie, “vendor/product”)
  </li>
  <li>
    empty directories in the Subversion repository with nothing but <tt class="docutils literal">svn:externals</tt> set on them
  </li>
</ul>

Both now clone correctly.

One open question is what (if anything) gsc should do when you run it against an already cloned repository. I’ve envisioned it purely as a bootstrapping tool but received an email stating that it didn’t work when run a second time, so obviously it should do **something**, even if that’s just failing with an error message.



 [1]: http://yergler.net/blog/2009/07/21/git-svn-and-svnexternals/
 [2]: http://gitorious.org/gsc/
