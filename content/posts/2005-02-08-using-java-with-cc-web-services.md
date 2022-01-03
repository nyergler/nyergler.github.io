---
title: Using Java with CC Web Services
date: 2005-02-08T09:28:01.000Z
categories:
  - development
slug: using-java-with-cc-web-services
---
We launced the [Creative Commons Web Services][1]  several months ago. At the time, the goal was to provide a “beta” experience, as well as one that would power “ccPublisher’s” license chooser. At the time, we planned to develop both SOAP and REST implementations, but left the SOAP implementation incomplete due to time constraints. It’s been on my list to finish “real soon now” ever since.

In the meantime, let’s review the CC web services scorecard:

<ul class="simple">
  <li>
    used them in ccPublisher… check.
  </li>
  <li>
    implemented a Python demo application… check.
  </li>
  <li>
    answered questions from a few random developers about the REST version… check.
  </li>
  <li>
    answered questions about the SOAP version… uh, one.
  </li>
</ul>

The one developer who asked me about the SOAP version was a Java developer who wanted to use the WSDL definition to make life easier. That I can sympathize with. But the fact of the matter is that I don’t currently have the bandwidth to finish and maintain two separate implementations. We’re working on finalizing the API for the web services, and as part of that discussion are talking about dropping SOAP support.

Over the weekend [Mike][2]  pointed me to [an interview][3]  with Stewart Butterfield, CEO of [Flickr][4] . In it he describes a similar phenomenon to what we’ve observed (although on a much larger scale): far more interest in REST than SOAP.![image0][5] That interview, coupled with our previous internal conversations, prompted me to investigate just what would go into implementing support for our REST web services in Java.

![image1][6] After a full day of hacking, most of it spent trying to figure out how to do XPath queries in Java, I have two things to show for it. First, an SWT demo which uses the CC REST web service to generate a simple license chooser.

The other, probably more important development, is a wrapper class, CcRest, which wraps the web services calls and is (hopefully) suitable for use in other Java applications. CcRest currently depends on [JDOM][7]  and [Jaxen][8]  for it’s XML and XPath functionality. The demo app, RestDemo, relies on the SWT UI library. The source code is available as a Jar and in CVS from the [CC Tools Project][9]  at SourceForge. I’ll be adding some documentation to the [CC Developer Wiki][10]  as well. I’ll be the first to admit that I’m not all that proficient in Java, so if anyone has suggestions or improvments, I’ll be happy to hear about them.



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
