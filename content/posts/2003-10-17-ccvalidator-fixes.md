---
title: ccValidator Fixes
date: 2003-10-17T12:17:14.000Z
categories:
  - ccValidator
slug: ccvalidator-fixes
---
Based on yesterday’s excellent feedback, I’ve updated the [ccValidator][1] code
to it’s new, improved version. Things fixed include:

* handling of large <span class="caps">RDF</span> blocks
* handling of work information is largely improved (multiple works are
  supported, sub-segments render properly, etc)
* tweaks to handle changes made in ccLicense.py

So go on, validate your license, and let me know if you run into any problems. I
still need to wrap the exception handling better so a CGI traceback doesn’t spew
when something doesn’t validate, and would like to modify the validation script
to use some sort of templating (instead of print statements). Suggestions for a
good, Python-ic templating solution?


 [1]: http://www.yergler.net/projects/ccvalidator
