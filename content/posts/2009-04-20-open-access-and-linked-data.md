---
title: Open Access and Linked Data
date: 2009-04-20T18:06:50.000Z
categories:
  - CC
  - geek
tags:
  - cc
  - linked data
  - oa
  - open access
  - rdfa
slug: open-access-and-linked-data
---
I traveled to the midwest late last month and made a few stops, including [PyCon][1]  and a brief visit with my parents. In between those two bookends I spoke at University of Michigan’s [Open Access Week][2]  and had a few meetings with various parties. My topic was pretty broad — [<span class="caps">CC</span> and Open Access][3]  — but I was [personally] pleased with how the talk came together. I’d like to re-create it for the purpose of creating a [slidecast][4] ; maybe sometime soon.

In putting together the content I realized that while I had this gut level, assumed knowledge about what [Open Access][5]  is, I hadn’t ever read a definition or really delved into it. When I read the [Budapest Open Access Initiative][6] , one part stood out to me.

> By “open access” to this literature, we mean its free availability on the public internet, permitting any users to read, download, copy, distribute, print, search, or link to the full texts of these articles, crawl them for indexing, pass them as data to software, or use them for any other lawful purpose, without financial, legal, or technical barriers other than those inseparable from gaining access to the internet itself.
Well of course it stood out to me, it’s a core descriptive sentence. But in particular, “availability on the public internet, permitting any users to read, download, copy, distribute, print, search, or link to the full texts of these articles, crawl them for indexing, [or] pass them as data to software.” Interestingly this sentence ties right into the other meetings I was having that week which all seemed to come back to [linked data][7]  (in particular [RDFa][8] ). If you think about it, this sentence has implications that make <span class="caps">OA</span> materials perfect for linked data integration. It implies:

<ul class="simple">
  <li>
    you have a stable, unique <span class="caps">URL</span> for the work
  </li>
  <li>
    there isn’t a paywall or login requirement in front of the actual work
  </li>
  <li>
    there isn’t any user agent discrimination — text in a Flash viewer need not apply (I’m looking at you, <a class="reference external" href="http://www.scribd.com/">Scribd</a>)
  </li>
  <li>
    they’re in a format that’s useful as data; maybe [X]<span class="caps">HTML</span>?
  </li>
</ul>

So we have a growing corpus of information that’s ripe for markup with structured data. We’re doing a lot with embedded, structured [,linked] data right now at <span class="caps">CC</span> (things we need to do a better job talking about). I find it reassuring that the principles other efforts value mesh so well with what we’re doing.



 [1]: http://us.pycon.org/2009/about/
 [2]: http://www.copyright.umich.edu/openaccessweek2009.html
 [3]: /talks/2009/cc-and-open-access/
 [4]: http://yergler.net/blog/2009/02/18/slides-for-all-audiences/
 [5]: http://en.wikipedia.org/wiki/Open_access_(publishing)
 [6]: http://www.soros.org/openaccess/read.shtml
 [7]: http://en.wikipedia.org/wiki/Linked_Data
 [8]: http://en.wikipedia.org/wiki/RDFa
