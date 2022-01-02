---
title: Publishing with PyBlosxom
date: 2004-02-04T13:34:00.000Z
categories:
  - yergler.net
slug: publishing-with-pyblosxom
---
I’ve now managed to convert the majority of yergler.net over to [PyBlosxom][1] . Maybe not the majority… but the non-[blog][2] , non-[pixelated][3]  content. I’m still impressed with it’s flexibility, and even more impressed with the [plugin <span class="caps">API</span>][4] .

I knew going into the conversion that I didn’t want my entire website to look like a blog. That’s why my blog doesn’t render in the root of my domain. But I also recognized the power of formatting things as “posts.” My solution works like this. I abuse the PyBlosxom “each directory is a category” idea to create the heirarchical structure that I want. Each “entry” in the directories becomes a different page, then, in that category area. Finally, when serving the directory index, I serve the contents of the <span class="caps">README</span> file (if it exists) instead of the typical blog-like entry list. This allows for some really simple content management with near-instantaneous publishing.

To get the <span class="caps">README</span> file served, each entry as a page, and the directory tree, I wrote a handful of plugins. They’re not really documented yet, but you can find them in [cvs][5] .

I order to get the mix of dynamic and static content served the right way, I had to do some serious mod_rewrite hacking. If you find a link that doesn’t work, please, [let me know][6]  .



 [1]: http://roughingit.subtlehints.net/pyblosxom/
 [2]: /averages
 [3]: http://pixels.yergler.net
 [4]: http://roughingit.subtlehints.net/docs/public/ReadMeForPlugins-module.html
 [5]: http://yergler.net/cvs/viewcvs.cgi/pyblosxom/
 [6]: /contact
