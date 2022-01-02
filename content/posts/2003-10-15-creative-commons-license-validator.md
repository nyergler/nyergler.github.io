---
title: Creative Commons License Validator
date: 2003-10-15T09:00:00.000Z
categories:
  - ccValidator
  - python
slug: creative-commons-license-validator
---
Well, what good is a weekend not spent coding? In this case, I managed to hack
together a **very** rudimentary <span class="caps">RDF</span> parser/validator
specialized for Creative Commons licenses. You can find [the web interface
here][1]  and the sourcecode [for the <span class="caps">CGI</span> here][2].
The Python module which does most of the heavy lifting, cclicense.py, will be up
soon. I’d love your feedback on any or all of it.

Right now it can parse raw <span class="caps">RDF</span> or retrieve a <span
class="caps">URL</span> and scan it for <span class="caps">RDF</span> (using a
simple regular expression). In either case it parses it and spits out the
licensing and work information it finds.

It still needs some work when it comes to parsing work description information,
especially with sub-elements (like Agent&#8217;s). I’d also love to hear
suggestions for improving the output mechanism; it currently runs as a simple
<span class="caps">CGI</span>, so the result page’s <span
class="caps">HTML</span> is manually emitted with print statements. Any
suggestions for making this work smarter?


 [1]: http://www.yergler.net/projects/ccvalidator
 [2]: http://www.yergler.net/projects/ccvalidator/validate.txt
