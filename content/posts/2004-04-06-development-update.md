---
title: Development Update
date: 2004-04-06T10:19:29.000Z
categories:
  - ccValidator
slug: development-update
---
As I mentioned [before][1] , I’ve been hacking on an update of ccValidator. Well, more than an update: a complete refactoring, really. The small item that prompted this was the ability to validate pages whose RDF is specified in a `<link>` tag instead of an HTML comment. I haven’t even addressed that yet :). But I will; real soon now.

So what’s changed? A lot. First, I’m now using the [Quixote][2]  framework. This has been a generally positive move: the `output.py` module that existed previously has been removed, and the HTML generation is a lot less “magic”. I’m also using the new rdfExtract classes (which have, incidently, been rolled in with ccRdf in CVS). Finally, the reorganization around Quixote has allowed the validator to become much more modularized: instead of a bunch of Python that executes as a CGI, there is now a CGI driver and a Python package which can be anywhere in the Python path. Quixote also allows the validator to run under [mod_python][3] , FCGI and as a standalone process.

The plan is to have a test instance up by the end of the week, and a long period of coexistance with the existing stable instance. Eventually, though, the new validator will replace the existing one. I haven’t cut a release yet, but the code is available in [CVS][4]  (the module is now ccvalidator2).



 [1]: http://www.yergler.net/averages/archives/2004/03/30/ccvalidator_refactoring
 [2]: http://mems-exchange.org/software/quixote
 [3]: http://www.modpython.org/
 [4]: http://yergler.net/cvs/viewcvs.cgi/ccvalidator2/
