---
title: 'Why didn’t I think of that sooner?'
author: Nathan Yergler
type: post
date: 2003-10-16T15:42:36+00:00
url: /2003/10/16/why-didnt-i-think-of-that-sooner/
categories:
  - ccRdf
  - ccValidator

---
Shortly after announcing the validator to the [cc-metadata list][1] this
morning, I had my first bug report. In my defense, it’s not even a bug in my
code, per say, but some invalid metadata. However, there were several
discoveries I made that I’m working to roll into both ccValidator and
ccLicense.py. In no particular order:

* Python 2.2 seems to have a broken <tt class="docutils literal">re</tt> module
  which barfs on really long matches. 2.2.3 and all the 2.3 series seem to have
  this fixed (note: this is just my observation, if anyone can confirm/correct
  this, feel free)
* ccLicense.py returns incorrect results if the <span class="caps">RDF</span>
  block defines more than one work and…
* &#8230;I was trying <strong>way</strong> too hard to parse the work meta-data;
  some simple <a class="reference external"
  href="http://rdflib.net/stable/doc/triple_store.html">TripleStore</a> action
  will do fine, thank-you
* And finally, the way I extracted the licenses was also a little embarassing.

So I’ve fixed the last three and my webhost is graciously upgrading Python as we speak (I hope), so a new, improved, working better than ever version of the Validator should be ready real soon now. And I’m just kicking myself that I didn’t think of the last 3 issues sooner.

 [1]: http://lists.ibiblio.org/mailman/listinfo/cc-metadata