---
title: Using Java with CC Web Services
author: Nathan Yergler
type: post
date: 2005-02-08T09:28:01+00:00
excerpt: |
  <p>We launced the <a class="reference external" href="http://api.creativecommons.org">Creative Commons Web
  Services</a> several months ago. At the
  time, the goal was to provide a “beta” experience, as well as one that
  would power “ccPublisher’s” license chooser. At the time, we planned to
  develop both <span class="caps">SOAP</span> and <span class="caps">REST</span> implementations, but left the <span class="caps">SOAP</span>
  implementation incomplete ...</p>
url: /2005/02/08/using-java-with-cc-web-services/
categories:
  - development

---
We launced the [Creative Commons Web Services][1]  several months ago. At the time, the goal was to provide a “beta” experience, as well as one that would power “ccPublisher’s” license chooser. At the time, we planned to develop both <span class="caps">SOAP</span> and <span class="caps">REST</span> implementations, but left the <span class="caps">SOAP</span> implementation incomplete due to time constraints. It’s been on my list to finish “real soon now” ever since.

In the meantime, let’s review the <span class="caps">CC</span> web services scorecard:

<ul class="simple">
  <li>
    used them in ccPublisher… check.
  </li>
  <li>
    implemented a Python demo application… check.
  </li>
  <li>
    answered questions from a few random developers about the <span class="caps">REST</span> version… check.
  </li>
  <li>
    answered questions about the <span class="caps">SOAP</span> version… uh, one.
  </li>
</ul>

The one developer who asked me about the <span class="caps">SOAP</span> version was a Java developer who wanted to use the <span class="caps">WSDL</span> definition to make life easier. That I can sympathize with. But the fact of the matter is that I don’t currently have the bandwidth to finish and maintain two separate implementations. We’re working on finalizing the <span class="caps">API</span> for the web services, and as part of that discussion are talking about dropping <span class="caps">SOAP</span> support.

Over the weekend [Mike][2]  pointed me to [an interview][3]  with Stewart Butterfield, <span class="caps">CEO</span> of [Flickr][4] . In it he describes a similar phenomenon to what we’ve observed (although on a much larger scale): far more interest in <span class="caps">REST</span> than <span class="caps">SOAP</span>.![image0][5] That interview, coupled with our previous internal conversations, prompted me to investigate just what would go into implementing support for our <span class="caps">REST</span> web services in Java.

![image1][6] After a full day of hacking, most of it spent trying to figure out how to do XPath queries in Java, I have two things to show for it. First, an <span class="caps">SWT</span> demo which uses the <span class="caps">CC</span> <span class="caps">REST</span> web service to generate a simple license chooser.

The other, probably more important development, is a wrapper class, CcRest, which wraps the web services calls and is (hopefully) suitable for use in other Java applications. CcRest currently depends on [<span class="caps">JDOM</span>][7]  and [Jaxen][8]  for it’s <span class="caps">XML</span> and XPath functionality. The demo app, RestDemo, relies on the <span class="caps">SWT</span> <span class="caps">UI</span> library. The source code is available as a Jar and in <span class="caps">CVS</span> from the [<span class="caps">CC</span> Tools Project][9]  at SourceForge. I’ll be adding some documentation to the [<span class="caps">CC</span> Developer Wiki][10]  as well. I’ll be the first to admit that I’m not all that proficient in Java, so if anyone has suggestions or improvments, I’ll be happy to hear about them.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2005-02-08 09:28:01
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      258
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
      using-java-with-cc-web-services
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      comments:
    </th>

    <td class="field-body">
      False
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      category:
    </th>

    <td class="field-body">
      development
    </td>
  </tr>
</table>

 [1]: http://api.creativecommons.org
 [2]: http://gondwanaland.com/mlog/
 [3]: http://www.oreillynet.com/pub/a/network/2005/02/04/sb_flckr.html
 [4]: http://flickr.com
 [5]: http://yergler.net/blog/images/ccrest1.png
 [6]: http://yergler.net/blog/images/ccrest2.png
 [7]: http://jdom.org
 [8]: http://jaxen.org
 [9]: http://sourceforge.net/projects/cctools
 [10]: http://wiki.creativecommons.org/wiki/Developer