---
title: Custom Log Formats with Squid
date: 2005-11-08T09:53:54.000Z
categories:
  - General
slug: custom-log-formats-with-squid
---
_[The first in a series of posts to help me (and hopefully others) remember how to get \`Zope <http://zope.org>\`_ running behind Squid.]_

In a world where lots and lots of tools have been written to analyze Apache httpd logs, it’s a little annoying we can’t use the same tools for Squid, especially if we’re using it to accelerate our website. Luckily the kind folks at [Zope Corp][1]  have written a handy patch for Squid to enable custom log formats. Unluckily the documentation is, well, a little terse. We wanted to generate Squid access logs in Apache’s “combined” format. So here’s what you do:

<ol class="arabic">
  <li>
    <p class="first">
      Build a patched version of Squid 2.5. The patch is available at <a class="reference external" href="http://devel.squid-cache.org/customlog/">http://devel.squid-cache.org/customlog/</a>
    </p>
  </li>

  <li>
    <p class="first">
      Modify squid.conf. In our case we added two lines:
    </p>

    <pre class="literal-block">
logformat httpd %&gt;a - %un [%{%d/%b/%Y:%H:%M:%S %z}tl] "%rm %ru" %Hs %&lt;st "%{Referer}&gt;h" "%{User-agent}&gt;h"
access_log /usr/local/squid/var/logs/combined.log httpd
</pre>
  </li>

  <li>
    <p class="first">
      Restart Squid.
    </p>
  </li>
</ol>

For something so simple, its amazing how long you can flounder trying to figure out what needs to be quoted, which direction the greater than or less than signs need to go, etc. Note that in this case we’ve defined an entirely new <tt class="docutils literal">access_log</tt>. Once you’re convinced that the new log is what you want, you can disable the standard one by setting <tt class="docutils literal">cache_access_log none</tt>.

For those who want a different format, the complete list of fields available to the logformat directive is available at <http://devel.squid-cache.org/customlog/logformat.html> .



 [1]: http://zope.com
