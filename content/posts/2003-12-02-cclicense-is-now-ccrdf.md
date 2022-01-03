---
title: ccLicense is now ccRdf
date: 2003-12-02T15:14:03.000Z
categories:
  - ccRdf
---
I’m very happy to announce that ccLicense.py is now ccRdf. And this is more than a name change. Previously ccLicense.py existed only to serve the needs of [ccValidator][1] . While it was initially intended to stand on it’s own, I destroyed that objective in my haste to get the validator working. After some friendly prodding from [Mike][2]  and [Ben][3] , and some good discussions about what the API should look like, I’ve rewritten the code as it’s own Python module. And because it handles more than just licenses (works, for one), it’s now ccRdf.

First, where to find it. I’ve put up a very simple page for it [here][4] . You can find download and documentation links there, along with a brief description.

Second, expectations. I hacked the code together this afternoon, so there may be omissions or bugs. I’ve done some simple testing, but it hasn’t undergone any extensive testing. At all. I’m planning to port ccValidator over to it in the very near future, which I believe will help expose flaws in the design and bugs in the code.

So download, code, enjoy, and as always, feedback, criticism, and bug reports are welcome. You can e-mail them to <ccrdf&#64;yergler.net>  if they’re ccRdf specific.


 [1]: http://yergler.net/projects/ccvalidator
 [2]: http://gondwanaland.com/ml/
 [3]: http://ben.adida.net/
 [4]: http://yergler.net/projects/ccrdf
