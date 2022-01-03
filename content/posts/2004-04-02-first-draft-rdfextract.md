---
title: 'First Draft, rdfExtract'
date: 2004-04-02T09:26:34.000Z
categories:
  - development
slug: first-draft-rdfextract
---
I’ve just posted the first draft of [rdfExtract][1] , and am actively looking for comments and suggestions. As the linked page describes, rdfExtract is a pluggable RDF extraction class. What does that mean, exactly? Well, it means that if you want to handle the extraction in some different way (say, by lowercasing it or something), you just write a function that takes a string (the text to extract from), and returns a list of strings (the RDF blocks).

I’m developing this for use in the new version of [ccValidator][2] . Instead of tacking support for LINK’d RDF onto the existing code for extraction, this will allow me to write a simple function which scans the incoming HTML for the appropriate `<LINK>` tag and retrieve the URL specified.

It’s been suggested that having rdfExtract return Python objects instead of strings would be useful (sort of like a generic [ccRdf][3] ). I agree, but don’t have time to do it now. Any other suggestion, comments, criticisms? Let me [know][4] .



 [1]: /projects/rdfextract
 [2]: /projects/ccValidator
 [3]: /projects/ccrdf
 [4]: /contact
