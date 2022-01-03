---
title: Tinkering
date: 2013-01-06T00:00:00.000Z
categories:
  - yergler.net
tags:
  - rst
  - sphinx
  - tinkerer
slug: tinkering
---
I&#8217;ve been contemplating leaving WordPress for a while. Part of it was a desire for something simpler, part of it was that as I worked on [Hieroglyph][1] , I found myself really appreciating the Sphinx build pipeline. Older blog posts on my site have also been in varying states of brokenness for the past few years: I used to use [Textile][2]  for writing posts, but at some point the WordPress plugin I was using stopped working, so I just let it serve them with the raw markup. It felt like it&#8217;d be easier to fix those up into something sane if I had flat files to work with, instead of a relational database.

There are quite a few static site generators these days, but only one that I&#8217;ve found that leverages Sphinx. [Tinkerer][3]  leverages [Sphinx][4] , adding an extension for aggregating post pages into archives, categories, and tag pages. Its use of Sphinx means that you can also generate non-blog pages with it, and you have quite a bit of flexibility to extend it if you need to.

Moving from my WordPress backend, I wanted keep the URLs as stable as possible. Tinkerer 1.0 is great, but it did a few things differently than I&#8217;d like. Specifically, it:

<ul class="simple">
  <li>
    uses the Sphinx HTML builder, which adds `.html` extensions to the output pages
  </li>
  <li>
    assumes that the blog&#8217;s root is the root of the domain (on my site it&#8217;s in the `/blog/` path)
  </li>
  <li>
    places <em>every</em> post in your RSS feed
  </li>
  <li>
    doesn&#8217;t allow you to configure the output path for the feed or archives
  </li>
</ul>

I&#8217;ve [forked Tinkerer on Bitbucket][5]  and addressed those issues. Making Tinkerer work with the `dirhtml` builder was most of the work, as there were several places that assumed you were dealing with HTML files (instead of directories with an `index.html` inside them). My experience with Sphinx from [Hieroglyph][1]  came in handy here: the Sphinx HTML builders all have a `.get_target_uri()` method, which does the right thing. I&#8217;m sure there are some things I&#8217;ve missed or broken in the process, but my hope is that I can get my changes into shape and merged upstream. I&#8217;ve also added several configuration directives for customizing how Tinkerer works. I still need to update the documentation in my fork, but you can see those [in the source][6] .

As an aside, if you&#8217;re looking at migrating from WordPress to another platform, the [exitwp][7]  script is a pretty sane place to start. I used it, along with [pandoc][8] , to transform my WordPress export into more uniform Restructured Text.



 [1]: http://yergler.net/project/hieroglyph/
 [2]: http://en.wikipedia.org/wiki/Textile_%28markup_language%29
 [3]: http://tinkerer.me
 [4]: http://sphinx-doc.org
 [5]: https://bitbucket.org/nyergler/tinkerer
 [6]: https://bitbucket.org/nyergler/tinkerer/src/d5719da384695793d8b47a075690bb796d59b3ce/tinkerer/ext/blog.py?at=default#cl-113
 [7]: https://github.com/thomasf/exitwp
 [8]: http://www.johnmacfarlane.net/pandoc/
