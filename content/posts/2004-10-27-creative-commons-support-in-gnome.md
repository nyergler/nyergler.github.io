---
title: 'Creative Commons support in Gnome'
author: Nathan Yergler
type: post
date: 2004-10-27T10:59:11+00:00
excerpt: |
  <p>After
  <a class="reference external" href="http://awkly.org/Members/sidnei/weblog_storage/blog_75895">reading</a>
  about the new
  <a class="reference external" href="http://cvs.gnome.org/viewcvs/nautilus-python/">Nautilus-Python</a>
  bindings, I decided I had to try my hand. And what better feature to
  enable than everyone’s favorite, <a class="reference external" href="http://creativecommons.org">Creative
  Commons</a>
  <a class="reference external" href="http://creativecommons.org/license">License</a> support. Lately I’ve
  been working on updates to our embedded license tools which allow users
  to tag an <span class="caps">MP3</span> with a ...</p>
url: /2004/10/27/creative-commons-support-in-gnome/
categories:
  - General

---
After [reading][1]  about the new [Nautilus-Python][2]  bindings, I decided I had to try my hand. And what better feature to enable than everyone’s favorite, [Creative Commons][3]  [License][4]  support. Lately I’ve been working on updates to our embedded license tools which allow users to tag an <span class="caps">MP3</span> with a <span class="caps">CC</span> license and then provide a web page which “verifies” the license claim.

The new tool, as of yet unnamed (suggestions?) adds a Creative Commons tab to the file properties of any <span class="caps">MP3</span> file. For example, a track from [Copy Me/Remix Me][5]  :

<div class="figure">
  <img alt="" src="http://yergler.net/blog/images/nautilus_ss_thumb.png" />

  <p class="caption">
    <a class="reference external" href="http://yergler.net/blog/images/nautilus_ss.png">click for larger screenshot</a>
  </p>
</div>

As you can see, the property page displays the license claim, and then verifies it against the web page. If the verification page didn’t exist, or didn’t match properly, you’d see an error message instead.

Now, I know what you’re thinking: “cool! how do I get in on the action?” It’s simple. Or at least straight-forward. You see, this bit of integration is made possible by some Nautilus code that’s not in the latest release, but never fear; I’ve provided a source tarball and I think it’ll work with Nautilus 2.4 and later (for sure 2.6 and later).

There are two packages you’ll need, and both are available at the [<span class="caps">CC</span> Tools Sourceforge Project][6] . First, [nautilus-python][2]  provides the actual Python bindings for Nautilus. Simply untar it, and do the configure/make/make install dance. This will install the Nautilus support and install some example Python extensions. The default installation location is under your Nautilus library path; on my system it’s <tt class="docutils literal"><span class="pre">/usr/lib/nautilus/extensions-1.0/python</span></tt>.

The second package, [nautilus-cc][7]  , provides the extension and all of it’s dependencies. Simply untar it in the nautilus-python directory (<tt class="docutils literal"><span class="pre">/usr/lib/nautilus/extensions-1.0/python</span></tt> on my system). Restart Nautilus and right click on an <span class="caps">MP3</span> to try it out.

There’s definitely room for improvement in the tool, from simple <span class="caps">UI</span> polish to further integration. For example, what about a context-menu option which lets you license your file and publish it to the [Internet Archive][8]  via ccTag, all integrated with the desktop. I’m sure there are other ideas out there as well. Leave a comment with a cool idea on this post; my favorite will get a <span class="caps">CC</span> t-shirt (so yes, you need to leave your email address and you implicitly give permission for <span class="caps">CC</span> to implement your idea; oh, and it’s my blog, so it’s my decision; but I really want to give away a t-shirt).

The cool thing about this integration is not necessarily the license display. I mean, that’s cool, but not necessarily the coolest thing. The coolest thing is that it took me longer to figure out the <span class="caps">GTK</span> code than it did to write the license parsing code. That’s because I’m reusing lots of code from previous projects. This further emphasizes the importance of packaging our code in ways that encourage reuse; we should be able to say “Hey, you developer there! Wanna integrate <span class="caps">CC</span> in your app? Here’s a library that makes it painless!” And yes, that’s a project I’ll be tackling in the coming weeks for <span class="caps">CC</span>.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2004-10-27 10:59:11
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      223
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      layout:
    </th>

    <td class="field-body">
      post
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      slug:
    </th>

    <td class="field-body">
      creative-commons-support-in-gnome
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      comments:
    </th>

    <td class="field-body">
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      category:
    </th>

    <td class="field-body">
      General
    </td>
  </tr>
</table>

 [1]: http://awkly.org/Members/sidnei/weblog_storage/blog_75895
 [2]: http://cvs.gnome.org/viewcvs/nautilus-python/
 [3]: http://creativecommons.org
 [4]: http://creativecommons.org/license
 [5]: http://creativecommons.org/extras/copyremix
 [6]: http://sourceforge.net/projects/cctools
 [7]: http://sourceforge.net/project/showfiles.php?group_id=80503&package_id=133941
 [8]: http://archive.org