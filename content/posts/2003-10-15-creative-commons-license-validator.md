---
title: Creative Commons License Validator
date: 2003-10-15T09:00:00.000Z
categories:
  - ccValidator
  - python
slug: creative-commons-license-validator
---
Well, what good is a weekend not spent coding? In this case, I managed to hack
together a **very** rudimentary RDF parser/validator
specialized for Creative Commons licenses. You can find [the web interface
here][1]  and the sourcecode [for the CGI here][2].
The Python module which does most of the heavy lifting, cclicense.py, will be up
soon. I’d love your feedback on any or all of it.

Right now it can parse raw RDF or retrieve a URL and scan it for RDF (using a
simple regular expression). In either case it parses it and spits out the
licensing and work information it finds.

It still needs some work when it comes to parsing work description information,
especially with sub-elements (like Agent's). I’d also love to hear
suggestions for improving the output mechanism; it currently runs as a simple
CGI, so the result page’s HTML is manually emitted with print statements. Any
suggestions for making this work smarter?


 [1]: http://www.yergler.net/projects/ccvalidator
 [2]: http://www.yergler.net/projects/ccvalidator/validate.txt
