---
title: Yet another ccValidator update
date: 2003-10-17T18:00:49.000Z
categories:
  - ccValidator
---
It seems like all I’m writing about here lately is ccValidator and ccLicense,
but I suppose that’s OK. After my announcement this morning, it was pointed out
that the validator didn’t exactly handle Unicode properly. So, some more
regexing (for the XML encoding) and `print "foo".encode(encoding)` action, and
tah-dah! New [ccValidator][1], now with a gooey Unicode center.

Thanks, “Maxime”:<http://www.organigramme.net/> ; keep those bug reports coming.

 [1]: http://www.yergler.net/projects/ccvalidator
