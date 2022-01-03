---
title: ccValidator Updated
date: 2005-01-14T11:04:34.000Z
categories:
  - ccValidator
slug: ccvalidator-updated
---
Looking in the archive, I see that I haven’t blogged about ccValidator in over six months. Because there was nothing to blog about. Today I updated [ccValidator][1]  with a handful of bug fixes and a nifty make over. The bugs generally surrounded the decoding and detection of Unicode character sets. Several caused the validator to crash, and a couple just made the output, well, ugly. There’s a report floating around that ccValidator stil strips characters of their accents and other markings, but I haven’t had time to track it down yet (and don’t anticipate being able to do so for a bit).

In addition to the bug fixes, the most visible change is that [validator.creativecommons.org][1]  now uses the same style sheet and layout as the [creativecommons.org][2] . A minor (and some would argue irrelevant) change, to be sure, but the difference has been bothering me for a while, so I took great pleasure in crossing that particular task off my list.

If you do find a bug in ccValidator, you can [email][3]  me, just be sure to include the RDF or URI you’re trying to validate.



 [1]: http://validator.creativecommons.org
 [2]: http://www.creativecommons.org
 [3]: /contact
