---
title: 'Scaling Python on the Web'
author: Nathan Yergler
type: post
date: 2007-02-24T12:35:29+00:00
excerpt: |
  <p>First session of the day was on Scaling Python on the Web; rough notes
  which I may clean up later:</p>
  <ul class="simple">
  <li>How fast is fast enough?<ul>
  <li>Don’t prematurely optimize</li>
  <li><strong>Know</strong> where the bottlenecks are, and optimize those specifically?</li>
  </ul>
  </li>
  <li>Orders of magnitude: static (httpd), dynamic (python), db-queried</li>
  <li>Even 40 req/s ...</li></ul>
url: /2007/02/24/scaling-python-on-the-web/
categories:
  - pycon2007
  - python

---
First session of the day was on Scaling Python on the Web; rough notes which I may clean up later:

<ul class="simple">
  <li>
    How fast is fast enough?<ul>
      <li>
        Don’t prematurely optimize
      </li>
      <li>
        <strong>Know</strong> where the bottlenecks are, and optimize those specifically?
      </li>
    </ul>
  </li>

  <li>
    Orders of magnitude: static (httpd), dynamic (python), db-queried
  </li>
  <li>
    Even 40 req/s in 3.4m pages/day
  </li>
  <li>
    Hundreds to low thousands of dynamic page views is usually good enough
  </li>
  <li>
    Scaling isn’t about the language, it’s about:<ul>
      <li>
        <span class="caps">DRY</span>: cache!
      </li>
      <li>
        share nothing
      </li>
    </ul>
  </li>

  <li>
    built a sample photo-app, FlickrKillr, for demonstration purposes<ul>
      <li>
        preloaded with 100k’s users, 10-20 photos each
      </li>
    </ul>
  </li>

  <li>
    first iteration: <span class="caps">CGI</span><ul>
      <li>
        roughly 23 requests/second
      </li>
      <li>
        problems:<ul>
          <li>
            loading Python interpreter for each request
          </li>
          <li>
            all resources initialized for each request (inc. db connection)
          </li>
        </ul>
      </li>

      <li>
        possible remedies:<ul>
          <li>
            run a Python web server (long-running process)
          </li>
          <li>
            make one db connection per thread instead of request
          </li>
        </ul>
      </li>

      <li>
        other remedies:<ul>
          <li>
            fastcgi
          </li>
          <li>
            snakelets, twisted.web, RhubarbTart
          </li>
          <li>
            mod_python
          </li>
        </ul>
      </li>
    </ul>
  </li>

  <li>
    second iteration: python app server (CherryPy used for this demo)<ul>
      <li>
        roughly 139 requests per second
      </li>
      <li>
        problems<ul>
          <li>
            global interpreter lock — can only utilize one core on a dual core machine
          </li>
          <li>
            sessions in the database — prefer an in-memory session store
          </li>
        </ul>
      </li>

      <li>
        remedies:<ul>
          <li>
            run multiple instances of CherryPy (overcode <span class="caps">GIL</span>)
          </li>
          <li>
            but then we need to balance with something like nginx
          </li>
        </ul>
      </li>

      <li>
        other options<ul>
          <li>
            cherrypy in mod_python
          </li>
        </ul>
      </li>
    </ul>
  </li>

  <li>
    version 3: load balancing with nginx<ul>
      <li>
        217 requests/sec
      </li>
      <li>
        outstanding problems<ul>
          <li>
            static files read from disk every time
          </li>
          <li>
            and they’re being read/written from python
          </li>
        </ul>
      </li>

      <li>
        solutions:<ul>
          <li>
            memcached
          </li>
          <li>
            combine with memcached w/ nginx
          </li>
        </ul>
      </li>
    </ul>
  </li>

  <li>
    version 4: caching<ul>
      <li>
        616 req/sec (benchmarking w/ homegrown tool)
      </li>
      <li>
        1750 req/sec (benchmarking w/ ab)
      </li>
    </ul>
  </li>

  <li>
    other notes:<ul>
      <li>
        don’t forget to index
      </li>
      <li>
        without an index, the fourth iteration falls down to 28 requests/sec
      </li>
    </ul>
  </li>
</ul>

<http://www.polimetrix.com/pycon/demo.tar.gz>

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2007-02-24 12:35:29
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      490
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
      scaling-python-on-the-web
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
      pycon2007, python
    </td>
  </tr>
</table>