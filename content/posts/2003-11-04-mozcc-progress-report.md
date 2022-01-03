---
title: mozCC progress report
date: 2003-11-04T15:14:33.000Z
categories:
  - mozCC
---
So, a status report on mozCC. This is what works:

<ul class="simple">
  <li>
    RDF extraction (for real this time)
  </li>
  <li>
    RDF parsing (again, for real)
  </li>
  <li>
    interpretation of License permissions (mostly)
  </li>
</ul>

Things left to do (fix):

<ul class="simple">
  <li>
    display the parsed license and work information in a dialog when the user clicks the toolbar button (ala <a class="reference external" href="http://www.yergler.net/projects/ccvalidator">ccValidator</a>)
  </li>
  <li>
    properly handle some of the license attributes (i.e., “no derivatives” is signaled by the <em>absence</em> rather than presence of some RDF)
  </li>
  <li>
    some graphical cleanup
  </li>
</ul>

Right now things are only working with Mozilla Firebird, but I’m hoping to add Mozilla Suite support as well once things reach a basic level of functionality.

