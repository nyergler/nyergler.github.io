---
title: 'Updated ccLicense.py Available'
author: Nathan Yergler
type: post
date: 2003-10-17T12:13:01+00:00
url: /2003/10/17/updated-cclicensepy-available/
categories:
  - ccRdf

---
I’ve just posted an updated version of ccLicense.py, which I’ve dubbed 0.2. You
can find it [here][1]. Changes are largely related to the way it extracts work
and agent information from the license <span class="caps">RDF</span>. The
interfaces have been more generalized to accomodate nested <span
class="caps">RDF</span> structures. However, 0.2 is a step back in terms of
license creation; generalizing the extraction interfaces means the interfaces
for creation need to be reworked as well. Since the improvments were driven by
[ccValidator][2], the creation stuff was left behind. I hope to have a more
complete version ready in the near future. As always, comments and feedback are
welcome.

 [1]: http://www.yergler.net/projects/cclicense/cclicense.02.txt
 [2]: http://www.yergler.net/projects/ccvalidator