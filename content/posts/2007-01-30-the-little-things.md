---
title: The Little Things
date: 2007-01-30T08:00:21.000Z
categories:
  - development
slug: the-little-things
---
I’m knee deep in several projects right now, some using [darcs][1]  and some using [subversion][2]  for version control. There are things I like about both, but that’s a different topic. There’s really only _one thing_ I loathe about Subversion, and it looks like this:

<pre class="literal-block">$ svn propget svn:externals .
  svn: Inconsistent line ending style
</pre>

Arghhh!

Insert rant about how the hell line endings get inconsistent on something Subversion should have complete control over here.



 [1]: http://darcs.net
 [2]: http://subversion.tigris.org/
