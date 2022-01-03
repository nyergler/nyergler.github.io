---
title: ccValidator 1.3 now available
date: 2003-12-22T20:39:29.000Z
slug: ccvalidator-13-now-available
categories:
  - ccValidator
---
ccValidator 1.3 is now available. It’s running live at [yergler.net/projects/ccvalidator][1] , and you can download the release tarball [here][2] .

This release is mainly a syncronization release; ccValidator now uses the [ccRdf][3]  core. Porting ccV to this architecture simplified many areas of the code, and provided an excellent test bed for ccRdf. I found a few bugs, and made a few improvments, so there will be a release of ccRdf soon to finish up the syncronization of work.

![image0][4] In addition to ccRdf, ccValidator now sports its own validation image. If RDF parsed from a URL validates properly, you’ll be provided with a bit of HTML to allow you to link to the validation results. Cool, huh? Thanks to Mike L. for the idea.

Thanks for the feedback from all my testers; [let me know][5]  if you encounter any problems or have any suggestions.

 [1]: http://yergler.net/projects/ccvalidator
 [2]: http://yergler.net/projects/ccvalidator/releases
 [3]: http://yergler.net/projects/ccrdf
 [4]: http://yergler.net/projects/ccvalidator/images/validrdf.png
 [5]: http://www.yergler.net/pages/contact
