---
title: 'Zope 3 Sprint, Day 0'
date: 2004-03-21T09:22:26.000Z
categories:
  - geek
slug: zope-3-sprint-day-0
---
Yesterday was the first day of the [Zope 3 Sprint][1]  at [PyCon 2004][2] . While not officially started, Stephan Richter and I worked on several [TODO][3]  tasks for Zope X3.0. In particular, we wrapped up:

<ul class="simple">
  <li>
    <a class="reference external" href="http://dev.zope.org/Wikis/DevSite/Projects/ComponentArchitecture/Use303RedirectsByDefault">303 redirects for HTTP/1.1 clients</a>
  </li>
  <li>
    stripped defaultView down to it’s <a class="reference external" href="http://dev.zope.org/Wikis/DevSite/Projects/ComponentArchitecture/MinimalDefaultViewDirectives">minimal, correct form</a>
  </li>
  <li>
    implemented <a class="reference external" href="http://dev.zope.org/Wikis/DevSite/Projects/ComponentArchitecture/ZCMLEnhancements">permission redefinition ZCML enhancements</a>
  </li>
  <li>
    began work on the <a class="reference external" href="http://dev.zope.org/Wikis/DevSite/Projects/ComponentArchitecture/TheBrowserToolDirective">browser:tool directive</a>, which we hope to finish today
  </li>
</ul>

Altogether it was an amazing day. At last years sprint I felt like I learned an amazing amount about Zope 3, but was able to contribute in a very limited way. This year it seems like I was able to get up and running a little quicker, and that combined with the longer sprint schedule means I’ll be able to contribute in a more concrete fashion.

Today Jim is going to present a tutorial on developing Zope 3 for all the newcomers while Stephan and I wrap up work on the browser:tool proposal.



 [1]: http://www.python.org/cgi-bin/moinmoin/Zope3Sprint
 [2]: http://pycon.org
 [3]: http://cvs.zope.org/Zope3/doc/TODO.txt?rev=HEAD&content-type=text/vnd.viewcvs-markup
