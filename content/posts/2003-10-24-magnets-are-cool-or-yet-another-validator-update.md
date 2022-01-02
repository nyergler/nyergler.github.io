---
title: 'Magnets are cool; or, Yet another validator update'
date: 2003-10-24T18:43:34.000Z
slug: magnets-are-cool-or-yet-another-validator-update
categories:
  - ccValidator
---
I’ve been reading the [Magnet][1]  [<span class="caps">URI</span> Spec][2] , and the idea behind it’s pretty cool. It’s basically a way to connect documents on the Internet with services provided locally. In the case of the examples given on the website, many of them apply to <span class="caps">P2P</span> services. So if I find a song I love and want to share it with a friend, I can e-mail the magnet <span class="caps">URI</span> to her and clicking on it will open her <span class="caps">P2P</span> app. Cool.

Of course, ccValidator “just happens” to support magnets; if it sees something that looks like a Magnet <span class="caps">URN</span>, it constructs a magnet link from it. This leads me to my second point, that I’ve once again updated [ccValidator][3] . The changes and fixes are relatively few. Magnets are now constructed to also contain an optional dn, or Display Name, parameter. The display name is extracted from the dc:identifier tag in the work metadata. Also, the validator won’t barf now if it gets an error code when retrieving the <span class="caps">URL</span> (404, etc).

Have fun with it, and as always, feedback is welcome.

 [1]: http://magnet-uri.sourceforge.net/
 [2]: http://magnet-uri.sourceforge.net/magnet-draft-overview.txt
 [3]: http://www.yergler.net/projects/ccvalidator
