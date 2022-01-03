---
title: ccValidator Refactoring
date: 2004-03-30T16:00:53.000Z
categories:
  - ccValidator
slug: ccvalidator-refactoring
---
It’s been pointed out that [ccValidator][1]  only supports RDF embedded in an HTML comment, and not any of the other [officially sanctioned ways][2] . Most asked for is `<LINK>` support, which seems to be used quite a bit. I started to refactor the validator today to support LINKed RDF. I’ve talked about it a lot, but this seemed to be the time to also work on cleaning up the code. Right now it’s something of a mess, and really difficult to completely understand. [Andrew Kuchling][3]  presented on the [Quixote][4]  form framework at [PyCon][5] , which allows you to write a single class which defines, validates and processes an HTML form. That combined with it’s straightforward templating made it an obvious choice.

So I’m currently working on refactoring the validator to use Quixote. The goals that I’m working toward include a cleaner code layout, semi-transparent (or at least more Pythonic) HTML escaping (which Quixote, with the possible addition of [Nevow][6]  will provide), and support for multiple methods of RDF extraction.

The last item is where much of the work is being invested. The current RDF extraction technique (which uses simple regexes) was borrowed by the [Creative Commons Search engine][7] . This simple borrowing demonstrates that there’s a need for a straightforward way to extract RDF from documents, regardless of application. In order to facilitate that in ccValidator and the search engine, I’m working on a pluggable text extraction class, rdfExtract (working title). Hopefully I’ll have a new beta of the validator up later this week which will be easier to maintain and extend.



 [1]: http://yergler.net/projects/ccvalidator
 [2]: http://creativecommons.org/technology/metadata/extend
 [3]: http://amk.ca/
 [4]: http://quixote.ca
 [5]: http://pycon.org
 [6]: http://www.divmod.org/Home/Projects/Nevow/
 [7]: http://search.creativecommons.org/
