---
title: 'Batteries Included (or, Maildir to mbox, again)'
date: 2010-06-06T13:04:29.000Z
categories:
  - geek
tags:
  - maildir
  - mbox
  - python
slug: batteries-included-or-maildir-to-mbox-again
---
**<span class="caps">UPDATE</span> 7 June 2010:** Added usage information to docstring.

**<span class="caps">UPDATE</span> 30 January 2012:** Frédéric Grosshans has provided an updated version that supports nested maildirs; you can [find it at github][1] . <span class="caps">YMMV</span>.

My [script for converting maildir to mbox][2]  [continues][3]  to be one of the most popular pages on yergler.net (according to Google Analytics). Of course, even after I [updated][3]  it slightly in February, it still had a couple of bugs, likely introduced when I converted the page from MoinMoin to WordPress. This afternoon I finally decided to clear out the pending comments about those bugs, and update it.

While looking at the Python documentation for the <tt class="docutils literal">`mailbox</tt> <<http://docs.python.org/library/mailbox.html> >\`_ package included in the standard library, I realized it could probably be simplified even further by using the library’s native <tt class="docutils literal">`mbox</tt> <<http://docs.python.org/library/mailbox.html#mbox> >\`_ support. I’m also more comfortable using the standard library’s implementation of <tt class="docutils literal">mbox</tt> rather than my hacked up raw file implementation (who knows, the standard library may do exactly what my script did: I’m not an <tt class="docutils literal">mbox</tt> expert by any stretch of the imagination).

The new script is below. I should note that it’s received very little testing, and I make no guarantees. I also should note that there is nothing creative or original about this. It just uses Python’s excellent standard library. As they say, “batteries included”.

<pre class="literal-block">/del&gt; coding: utf-8


“”“maildir2mbox.pyNathan R. Yergler, 6 June 2010

This file does not contain sufficient creative expression to invokeassertion of copyright.  No warranty is expressed or implied; use atyour own risk.

—-

Uses Python’s included mailbox library to convert mail archives frommaildir [http://en.wikipedia.org/wiki/Maildir] to mbox [http://en.wikipedia.org/wiki/Mbox] format.

See http://docs.python.org/library/mailbox.html#mailbox.Mailbox for full documentation on this library.

—-

To run, save as maildir2mbox.py and run:

$ python maildir2mbox.py [maildir_path] [mbox_filename]

[maildir_path] should be the the path to the actual maildir (containing new, cur, tmp);

[mbox_filename] will be newly created.“”“

import mailboximport sysimport email


    open the existing maildir and the target mbox file
maildir = mailbox.Maildir(sys.argv [-2], email.message_from_file)mbox = mailbox.mbox(sys.argv[-1])


    lock the mbox
mbox.lock()


    iterate over messages in the maildir and add to the mbox
for msg in maildir:
mbox.add(msg)


    close and unlock
mbox.close()maildir.close()
</pre>



 [1]: https://gist.github.com/1709069
 [2]: http://yergler.net/projects/one-off/maildir-to-mbox/
 [3]: http://yergler.net/blog/2010/02/03/most-popular-erroneous-post/
