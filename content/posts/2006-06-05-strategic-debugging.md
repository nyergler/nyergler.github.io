---
title: Strategic Debugging
date: 2006-06-05T09:07:40.000Z
categories:
  - development
slug: strategic-debugging
---
At [PyCon][1]  this year the folks from [Wingware][2]  were kind enough to provide free licenses to [Wing IDE Professional][3]  to all sprint participants. I had tried the free download of Wing back in the 1.x days, and came away… unmoved. It didn’t suck, it just didn’t do anything I couldn’t do with Emacs, vi, or Eclipse. So last week I was dealing with a particularly deep-seated bug in [ccPublisher][4] . ccPublisher uses the Zope 3 component model to stitch together software components and then uses events to communicate between them. This particular bug involved an event listener which was responding to events it should have ignored. Something that, well, it’s not _supposed_ to do.

My typical debugging strategy makes liberal use of `print` statements. I like to think of it as “instrumentation” when in reality it’s just the wrong way. It helps me solve lots of problems but in this situation was no help. So this was an opportunity to actually delve into debugging strategies and try to improve my skills in that area. About the same time that I ran into this bug, I saw an announcement that Wing IDE 2.1 Release Candidate was available. I downloaded Wing IDE Professional 2.1 RC1, used my free license and set up a project. As an editor, Wing IDE has a few really nice features: code completion that works and performs well, code outlining (member listing, etc) and the ability to correct mixed identation (something that has plagued a few source files I’ve worked on). But debugging is where Wing really shines. Once I figured out how to ignore certain exceptions [[1][5] ], I was able to set breakpoints and watches in such a way that I was able to quickly track down the bug in my code.

So would I actually buy Wing? I’m not sure. At $179 for a single Professional OS license (Wing supports Linux, Windows and Mac OS X), Wing is pushing the boundaries of what I’m willing to pay. There are two other options in my mind: [PyDev][6]  + [Eclipse][7]  and Emacs + [PDB][8]  + [PDBTrack][9] . I love Eclipse for Java development, and I can not fathom how companies like [Borland][10]  intend to compete against it with products like the suck-tacular [JBuilder][11] . And PyDev does a passable job of adding Python support to Eclipse. It is telling, however, that it’s never been compelling enough to make me abandon Emacs as my primary Python editor. The real problems are speed — using PyDev under Eclipse is noticeably slower than using Eclipse for Java development. But that’s something they’re working on, so perhaps it will continue to improve.

As I alluded to above, I use Emacs as my primary editor, but Emacs is a bit of black-magic to me: I know enough to be productive, but I’m sure that with a week of intensive training under a real Emacs master I could be even more productive. Witness the 4 days spent with Jim Fulton on the Zope 3 Sprint at PyCon — I had never seen M-x shell before, let alone PDBTrack. PDBTrack is now part of python-mode that allows you to follow the progress of the Python debugger (PDB) in your Emacs buffer as you step through code. So I guess I need to dive into PDB and see how it compares to Wing. Nevertheless, Wing is definitely a valuable addition to my development toolbox.

**[1]** You have to tell Wing to ignore certain exceptions that it thinks aren’t handled but really are. For example, a call to `hasattr(obj, 'attr_name')` will attempt to access `obj.attr_name`; if an `AttributeError` is thrown, `hasattr` clears the exception and returns `False`. However, since the exception is cleared in C code, Wing can’t tell that this isn’t a “real” exception. Luckily Wing does remember which exceptions you want to ignore, as well as their context (i.e. where the code was called from, etc). A bit annoying, but I’m not sure they can do anything about it.



 [1]: http://us.pycon.org/TX2006/HomePage
 [2]: http://wingware.com
 [3]: http://wingware.com/wingide
 [4]: http://wiki.creativecommons.org/CcPublisher
 [5]: http://yergler.net/blog/wp-admin/post.php#1
 [6]: http://pydev.sourceforge.net/
 [7]: http://eclipse.org
 [8]: http://docs.python.org/lib/module-pdb.html
 [9]: http://www.zope.org/Wikis/klm/EmacsGoodies
 [10]: http://www.borland.com
 [11]: http://www.borland.com/us/products/jbuilder/index.html
