---
title: Building for Windows
date: 2004-07-29T11:20:39.000Z
categories:
  - development
  - oscon2004
slug: building-for-windows
---
It’s a little ironic that the best session I attended yesterday was presented by a Microsoft employee, [Rob Mensching][1] . Rob [presented][2]  on [WIX][3] , the Windows Installer Xml toolkit. WIX is a set of tools which allow developers to “integrate setup into the build process.” After Rob’s presentation, I’m convinced that WIX is exactly what we need at CC.

At CC, we have two programmers on staff, and I’m the only one who has the luxury of coding full time. So when it comes to developing software, I’d much rather spend my time developing new features than writing setup.exe. So WIX will allow us to define our setup process in an XML file and then generate the installer in the same process we use to “compile” (in quotes, since we use lots of Python and it’s really just [setup.py][4] ).

And I suppose it’s good to hear from someone whose ideas and beliefs place him in a different place on the Stallman-Gates Openness Scale.



 [1]: http://blogs.msdn.com/robmen/
 [2]: http://conferences.oreillynet.com/cs/os2004/view/e_sess/5787
 [3]: http://wix.sourceforge.net
 [4]: http://python.org/doc/lib/module-distutils.html
