---
title: Validator updated; Testers needed
date: 2003-12-15T11:28:10.000Z
slug: '=validator-updated-testers-needed'
categories:
  - ccValidator
---
This morning I finished an update to [ccValidator][1] . This update is mostly a
code cleanup. It finally moves the validator away from the god-awful
cclicense.py module (I wrote it; I can say it) to [ccRdf][2] . I haven’t tested
it extensively yet, so I haven’t updated the production validator yet. That’s
where you, dear reader, come in.

I’d love it if you could try it out at <http://yergler.net/projects/ccv-cvs> .
I’d appreciate hearing any feedback about your experience with it. If things are
working as expected, you shouldn’t see any difference between the output you get
from the [test instance][3]  and the output you get from the [production
instance][1] . Thanks for all your help.

 [1]: http://yergler.net/projects/ccvalidator
 [2]: http://yergler.net/projects/ccrdf
 [3]: http://yergler.net/projects/ccv-cvs
