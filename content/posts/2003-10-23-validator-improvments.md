---
title: Validator Improvements
slug: validator-improvments
date: 2003-10-23T16:40:18.000Z
categories:
  - ccValidator
---
I’ve just moved an improved license validator into [place][1]  . While I had initially planned to migrate away from straight-CGI coding with this update, the gods were against me. I started prototyping in [Quixote][2]  , and ran into problems with Unicode encoding. So I decided to put the conversion on hold. If I figure out how to emit Unicode from Quixote, I’ll probably do this at some point in the future.

This update does, however, have some real improvements, all of which were suggested by the excellent testers on the [cc-metadata mailing list][3] . These include:

<ul class="simple">
  <li>
    Seperate forms for URL or paste-in validation; previously the URL always overrode the text area, which could be frustrating
  </li>
  <li>
    The addition of some sample RDF, as well as convenience buttons on the form
  </li>
  <li>
    Better error reporting. If your RDF (XML) is not well-formed, the validator will now tell you where the error occurs (if it knows); more on this in a moment
  </li>
  <li>
    When parsing a web page, problems in one RDF segment won’t affect validation of other segments
  </li>
  <li>
    You can now view the raw RDF from the results page by clicking the <strong>show raw RDF</strong> links
  </li>
  <li>
    Things that look like links, are
  </li>
  <li>
    <a class="reference external" href="http://magnet-uri.sourceforge.net">Magnets</a> are properly magnetized
  </li>
  <li>
    `rdf:about` is displayed
  </li>
  <li>
    If a RDF segment does not contain a license, the validator says so, and then tells you what it might contain
  </li>
  <li>
    Various cosmetic changes
  </li>
</ul>

With such a large number of changes, the source code layout has also changed. Instead of a single file, the code is now split into a handful of modules. I’ll have a tarball up later this evening.

A note regarding validation: currently the validator only “validates” as much as RDFlib does; I’m working on that. Further, if you receive some weird traceback, or an “unknown error” message, **please** [e-mail me][4] .

Thanks for all the suggestions and trouble reports; try it out and let me know what you think.

 [1]: http://www.yergler.net/projects/ccvalidator
 [2]: http://www.quixote.ca
 [3]: http://lists.ibiblio.org/mailman/listinfo/cc-metadata
 [4]: mailto:nathan&#64;yergler.net
