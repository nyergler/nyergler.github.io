---
title: 'Zope 3 Sprint, Day 0'
author: Nathan Yergler
type: post
date: 2004-03-21T09:22:26+00:00
excerpt: |
  <p>Yesterday was the first day of the <a class="reference external" href="http://www.python.org/cgi-bin/moinmoin/Zope3Sprint">Zope 3
  Sprint</a> at <a class="reference external" href="http://pycon.org">PyCon
  2004</a>. While not officially started, Stephan Richter
  and I worked on several
  <a class="reference external" href="http://cvs.zope.org/Zope3/doc/TODO.txt?rev=HEAD&amp;content-type=text/vnd.viewcvs-markup"><span class="caps">TODO</span></a>
  tasks for Zope X3.0. In particular, we wrapped up:</p>
  <ul class="simple">
  <li><a class="reference external" href="http://dev.zope.org/Wikis/DevSite/Projects/ComponentArchitecture/Use303RedirectsByDefault">303 redirects for <span class="caps">HTTP</span>/1.1 clients</a></li>
  <li>stripped defaultView down to it’s <a class="reference external" href="http://dev.zope.org/Wikis/DevSite/Projects/ComponentArchitecture/MinimalDefaultViewDirectives">minimal, correct ...</a></li></ul>
url: /2004/03/21/zope-3-sprint-day-0/
categories:
  - geek

---
Yesterday was the first day of the [Zope 3 Sprint][1]  at [PyCon 2004][2] . While not officially started, Stephan Richter and I worked on several [<span class="caps">TODO</span>][3]  tasks for Zope X3.0. In particular, we wrapped up:

<ul class="simple">
  <li>
    <a class="reference external" href="http://dev.zope.org/Wikis/DevSite/Projects/ComponentArchitecture/Use303RedirectsByDefault">303 redirects for <span class="caps">HTTP</span>/1.1 clients</a>
  </li>
  <li>
    stripped defaultView down to it’s <a class="reference external" href="http://dev.zope.org/Wikis/DevSite/Projects/ComponentArchitecture/MinimalDefaultViewDirectives">minimal, correct form</a>
  </li>
  <li>
    implemented <a class="reference external" href="http://dev.zope.org/Wikis/DevSite/Projects/ComponentArchitecture/ZCMLEnhancements">permission redefinition <span class="caps">ZCML</span> enhancements</a>
  </li>
  <li>
    began work on the <a class="reference external" href="http://dev.zope.org/Wikis/DevSite/Projects/ComponentArchitecture/TheBrowserToolDirective">browser:tool directive</a>, which we hope to finish today
  </li>
</ul>

Altogether it was an amazing day. At last years sprint I felt like I learned an amazing amount about Zope 3, but was able to contribute in a very limited way. This year it seems like I was able to get up and running a little quicker, and that combined with the longer sprint schedule means I’ll be able to contribute in a more concrete fashion.

Today Jim is going to present a tutorial on developing Zope 3 for all the newcomers while Stephan and I wrap up work on the browser:tool proposal.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2004-03-21 09:22:26
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      96
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
      zope-3-sprint-day-0
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
      geek
    </td>
  </tr>
</table>

 [1]: http://www.python.org/cgi-bin/moinmoin/Zope3Sprint
 [2]: http://pycon.org
 [3]: http://cvs.zope.org/Zope3/doc/TODO.txt?rev=HEAD&content-type=text/vnd.viewcvs-markup