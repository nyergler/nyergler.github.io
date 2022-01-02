---
title: What SourceForge got right
date: 2006-05-25T07:58:06.000Z
categories:
  - development
slug: what-sourceforge-got-right
---
A few months before SourceForge launched their Subversion support, I decided that I was spending far too many cycles managing external dependencies for [ccPublisher][1] . We use significant chunks of code from the Zope 3 project, among others, and managing those dependencies (and keeping them in sync) is a pain in the ass with <span class="caps">CVS</span> (yes, I know about vendor branches; still a pain). So we moved ccPublisher to [Berlios.de][2]  in order to gain Subversion support. Subversion has a construct called **svn:externals** which allow you to stitch together pieces of a repository to form a composite tree. Not just pieces of your own repository, though: pieces of _any_ repository.

Now svn:externals are not perfect. They only operate at the directory level, and making changes that cross the boundary between repositories (or even modules in the same repository) can yield unexpected results. Take, for example, Berlios.de’s [Subversion setup for ccPublisher][3] . You’ll notice that the repository <span class="caps">URL</span> differs based on whether you want to do a writable checkout (i.e. you have a developer account on the project), or whether you want a read-only check (i.e. anonymous). When constructing svn:externals, you don’t have the option of changing the <span class="caps">URL</span>; you simply assign a directory name to an external Subversion <span class="caps">URL</span>. So you need to make sure your external <span class="caps">URL</span> works for either anonymous or developer checkouts. And this is where the problem comes in.

Consider, the [cctagutils][4]  library. cctagutils is used by ccPublisher for embedding license information in files, but it conceivably (hopefully) could be useful to other projects, so we keep it in a separate module and use an svn:external to tie it in. So the svn:externals property for the ccPublisher trunk has the following definition (among others):

<tt class="docutils literal">cctagutils <span class="pre">svn://svn.berlios.de/cctools/cctagutils/trunk</span></tt>

The svn://&#8230; <span class="caps">URL</span> is an anonymous checkout. This means that when I work with ccPublisher and find a bug in cctagutils, I need to correct it in a writable (independent) checkout, commit and then update ccPublisher to get the changes. Now two things: first, this isn’t the fault of Berlios; they have a great service, and many other projects have the same problem (Zope, for example). Second, it’s not so much a problem as a “half-baked” issue: externals are cool and powerful and better than what we had before, but they’re missing that final 10% of functionality that would really make them shine.

So when Source Forge rolled out their Subversion support earlier this year, it was interesting to see that they weren’t using svn or svn+ssh at all, but rather https as the access protocol. Why does this matter? Because when using https, anonymous and writable checkouts are **the same**.Â  When I check out a module from the cctools Subversion repository at SourceForge, I’m not prompted for a username and password. It’s only when I try to make a repository change (commit, move, add, etc) that I’m asked for my credentials. Subversion will cache them for me, and if the cached credentials don’t work, it will prompt me for new ones. This means that suddenly, svn:externals work _exactly right_. <span class="caps">OK</span>, so if I cross into another repository I still have to deal with the anonymous-module-within-writable-checkout issue, but overall this is a great improvement.

There may be reasons not to use https as an access protocol that I’m not aware of. I’ve never administered a large scale (or even medium-scale) repository. What I do know is this: SourceForge has been so lackluster for so long that getting this simple thing right has left me impressed and hopeful about the future of the service. Now if they’d only fix that damn mailing list interface.



 [1]: http://wiki.creativecommons.org/CcPublisher
 [2]: http://developer.berlios.de/projects/cctools
 [3]: http://developer.berlios.de/svn/?group_id=5272
 [4]: http://svn.berlios.de/viewcvs/cctools/cctagutils/
