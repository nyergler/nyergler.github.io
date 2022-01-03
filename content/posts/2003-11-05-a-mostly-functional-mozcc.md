---
title: A Mostly Functional mozCC
date: 2003-11-05T13:50:03.000Z
categories:
  - mozCC
---
Really, I’m as amazed as anyone else. I finally have a mostly functional version of mozCC working. It does the following:

<ul class="simple">
  <li>
    displays CC license information in the status bar when you view a page with embedded RDF
  </li>
  <li>
    provides a toolbar button which is enabled when the page contains embedded RDF
  </li>
  <li>
    when you click the button, a dialog opens and displays the parsed RDF
  </li>
</ul>

And now for the obligatory screenshot [|mozcc.png|][1]  (click to enlarge) which shows the [Creative Commons][2]  home page. In the lower right you can see the (by) icon, indicating it requires attribution/notice. The dialog open shows part of the parsed RDF.

I still need to do some cleanup work in the display of RDF attributes and such. I’ll upload an XPI either this evening or tomorrow (depending how my Data Structures exam goes). The brave among you can check it out from [CVS][3] . As always, feedback is appreciated.

UPDATE (11/6/03 6:50AM): I’ve just committed updated xpi and jar files to CVS. If you want to test mozCC in it’s current state, download the xpi file from CVS and open it in Mozilla Firebird.


 [1]: http://www.yergler.net/averages/archives/images/mozcc.png
 [2]: http://www.creativecommons.org
 [3]: http://yergler.net/cvs/viewcvs.cgi/mozcc/
