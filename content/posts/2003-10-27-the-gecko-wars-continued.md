---
title: 'The Gecko Wars, continued'
date: 2003-10-27T14:51:22.000Z
categories:
  - mozCC
---
In an object lesson on why OpenSource is important, I finally figured out how to listen for navigation events in a Mozilla Firebird extension. In frustration I began reading the XUL/XML/JavaScript source for MF0.7, and there it was: `<span class="pre">getBrowser().addEventListener...`. It was that simple.

So now I’ve moved on to bigger battles: mastering JavaScript’s regex syntax, figuring out if I need to write a (Py)XPCOM object, and learning enough about XUL widgets to create a dialog box. And no matter how much I bitch, the whole process has it’s own sense of accomplishment at each little milestone.

If you want to see some ugly code and hacked together XML, you can follow the development in [CVS][1] . The module is **mozcc**.

 [1]: http://www.yergler.net/cvs
