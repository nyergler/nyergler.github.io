---
title: ccLicense.py 0.1
date: 2003-10-16T10:37:40.000Z
categories:
  - ccRdf
slug: cclicensepy-01
---
As part of my effort to complete the Creative Commons web validation service, I
inadvertently addressed another of their challenges: creating a language (in
this case Python, of course) <span class="caps">API</span> for manipulating
licenses. So with muted fanfare, here’s [version 0.1 of cclicense.py][1] . It
currently supports parsing a license and extracting of permissions,
restrictions, etc. It also will emit <span class="caps">RDF</span>, although
that’s not exactly perfect yet.

**Future plans:**

* complete the methods that allow creation of new licenses
* fix the emitRdf method to use namespaces in a cleaner way
* either replace or just accept the way it handles work information (which I’m
  not currently a huge fan of)

In order to use it you’ll need [RDFlib][2]  and Aaron Swartz’s [TRAMP][3]. I’ll
make a distutils package once I get the rest of the methods fleshed out. As
always, suggestions, comments and feedback welcome.

 [1]: http://www.yergler.net/projects/cclicense/cclicense.01.txt
 [2]: http://www.rdflib.net
 [3]: http://www.aaronsw.com/2002/tramp
