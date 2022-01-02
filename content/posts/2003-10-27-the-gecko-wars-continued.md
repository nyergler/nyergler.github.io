---
title: 'The Gecko Wars, continued'
date: 2003-10-27T14:51:22.000Z
categories:
  - mozCC
---
In an object lesson on why OpenSource is important, I finally figured out how to listen for navigation events in a Mozilla Firebird extension. In frustration I began reading the <span class="caps">XUL</span>/<span class="caps">XML</span>/JavaScript source for <span class="caps">MF0</span>.7, and there it was: <tt class="docutils literal"><span class="pre">getBrowser().addEventListener...</span></tt>. It was that simple.

So now I’ve moved on to bigger battles: mastering JavaScript’s regex syntax, figuring out if I need to write a (Py)<span class="caps">XPCOM</span> object, and learning enough about <span class="caps">XUL</span> widgets to create a dialog box. And no matter how much I bitch, the whole process has it’s own sense of accomplishment at each little milestone.

If you want to see some ugly code and hacked together <span class="caps">XML</span>, you can follow the development in [<span class="caps">CVS</span>][1] . The module is **mozcc**.

 [1]: http://www.yergler.net/cvs
