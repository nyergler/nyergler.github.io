---
title: Verifying Creative Commons Licenses
date: 2004-10-04T21:00:28.000Z
categories:
  - development
  - projects
slug: verifying-creative-commons-licenses
---
[We’ve][1]  had [command line][2]  [implementations][3]  for quite some time, but today I [released][4]  our new graphical lookup tool, imaginatively named _ccLookup_.

ccLookup is a <span class="caps">GUI</span> tool built on [wxPython][5]  which allows you to drop a <span class="caps">CC</span> licensed <span class="caps">MP3</span> on the app and lookup the verification <span class="caps">RDF</span>. There are currently a few cosmetic problems to be worked out, along with packaging issues. Currently we have a Mac <span class="caps">OS</span> X disk image and Windows .zip file available from SourceForge. Before we hit 1.0 we’re planning to create a Windows installer, as well as a Linux build.

Go on, try it; [let me know][6]  if you run into trouble, or if you have any suggestions.



 [1]: http://creativecommons.org
 [2]: http://cvs.sourceforge.net/viewcvs.py/cctools/cctag-python/cclookup.py?rev=HEAD&view=auto
 [3]: http://cvs.sourceforge.net/viewcvs.py/cctools/cctag-gui/ccl.py?rev=HEAD&view=auto
 [4]: http://sourceforge.net/project/showfiles.php?group_id=80503&package_id=131329
 [5]: http://wxpython.org
 [6]: /contact
