---
title: Caching WSGI Applications to Disk
author: Nathan Yergler
type: post
date: 2010-01-05T23:37:29+00:00
excerpt: |
  <p>This morning I pushed the first release of
  <a class="reference external" href="http://pypi.python.org/pypi/wsgi_cache">wsgi_cache</a> to the PyPI,
  laying the groundwork for increasing sanity in our deployment story at
  <a class="reference external" href="http://creativecommons.org"><span class="caps">CC</span></a>. wsgi_cache is disk caching
  middleware for
  <a class="reference external" href="http://en.wikipedia.org/wiki/Web_Server_Gateway_Interface"><span class="caps">WSGI</span></a>
  applications. It’s written with our needs specifically in mind, but it
  may be useful to others, as well ...</p>
url: /2010/01/05/caching-wsgi-applications-to-disk/
categories:
  - CC
  - development
tags:
  - cache
  - cc
  - middleware
  - python
  - wsgi
  - wsgi_cache

---
This morning I pushed the first release of [wsgi_cache][1]  to the PyPI, laying the groundwork for increasing sanity in our deployment story at [<span class="caps">CC</span>][2] . wsgi_cache is disk caching middleware for [<span class="caps">WSGI</span>][3]  applications. It’s written with our needs specifically in mind, but it may be useful to others, as well.

The core of Creative Commons’ technical responsibilities are the licenses: the [metadata][4] , the deeds, the legalcode, and the chooser. While the license deeds are mostly static and structured in a predictable way, there are some “dynamic” elements; we sometimes add more information to try and clarify the licenses, and volunteers are continuously updating the [translations][5]  that let us present the deeds in dozens of languages. These are dynamic in a very gross sense: once generated, we can serve the same version of each deed to everyone. But there is an inherent need to generate the deeds dynamically at _some_ point in the pipeline.

Our current toolset includes a script for [re-]generating all or some of the deeds. It does this by [ab]using the Zope test runner machinery to fire up the application and make lots of requests against it, saving the results in the proper directory structure. The result of this is then checked into Subversion for deployment on the web server. This works, but it has a few shortfalls and it’s a pretty blunt instrument. wsgi_cache, along with work Chris Webber is [currently doing][6]  to make the license engine a better <span class="caps">WSGI</span> citizen, aims to streamline this process.

The idea behind [wsgi_cache][1]  is that you create a disk cache for results, caching only the body of the response. We only cache the body for a simple reason — we want something else, something faster, like Apache or other web server, to serve the request when it’s a cache hit. We’ll use [mod_rewrite][7]  to send the request to our <span class="caps">WSGI</span> application when the requested file doesn’t exist; otherwise it hits the on disk version. And cache “invalidation” becomes as simple as <tt class="docutils literal">rm</tt> (and as fine grained as single resources).

There are some limitation which might make this a poor choice for other applications. Because you’re only caching the response body, it’s impossible to store other header information. This can be a problem if you’re serving up different content types which can’t be inferred from the path (note that we use filenames that look like <tt class="docutils literal">deed.fr</tt> and <tt class="docutils literal">deed.de</tt>, so we tell Apache to override the content type for _everything_; this works for our particular scenario). Additionally, this approach only makes sense if you have another front end server that can serve up the cached version faster; I doubt that wsgi_cache will win any speed challenges for serving cached versions.

We’re not quite ready to roll it out yet, and I expect we’ll find some things that need to be tweaked, but a test suite with 100% coverage makes that a challenge I’m up for. If you’re interested in taking a look (and adapting it for your own use), you can find the code in Creative Commons’ [git repository][8] .

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2010-01-05 23:37:29
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      1309
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      layout:
    </th>

    <td class="field-body">
      post
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      slug:
    </th>

    <td class="field-body">
      caching-wsgi-applications-to-disk
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      comments:
    </th>

    <td class="field-body">
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      category:
    </th>

    <td class="field-body">
      cc, development
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      tags:
    </th>

    <td class="field-body">
      cache, cc, middleware, python, wsgi, wsgi_cache
    </td>
  </tr>
</table>

 [1]: http://pypi.python.org/pypi/wsgi_cache
 [2]: http://creativecommons.org
 [3]: http://en.wikipedia.org/wiki/Web_Server_Gateway_Interface
 [4]: http://wiki.creativecommons.org/ccREL
 [5]: http://wiki.creativecommons.org/Translate
 [6]: http://labs.creativecommons.org/2009/12/18/understanding-the-state-of-sanity-via-whiteboards-and-ascii-art/
 [7]: http://httpd.apache.org/docs/2.2/mod/mod_rewrite.html
 [8]: http://code.creativecommons.org/viewgit/wsgi_cache.git