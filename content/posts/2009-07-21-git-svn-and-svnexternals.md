---
title: 'git-svn and svn:externals'
date: 2009-07-21T09:47:17.000Z
categories:
  - development
tags:
  - cc
  - git
  - git-svn
  - gsc
  - svn
  - 'svn:externals'
slug: git-svn-and-svnexternals
---
**UPDATE** I’ve pushed a few bug fixes; see [this entry][1]  for details.

At [Creative Commons][2]  we’re a [dual-[D]VCS][3]  shop. Since we started [self-hosting our repositories][4]  last year we’ve been using both [Subversion][5]  and [git][6] . The rationale was pragmatic more than anything else: we have lots of code spread across many small projects and don’t have the time (or desire) to halt everything and cut over from one system to the other. This approach hasn’t been without it’s pain but I think that overall it’s been a good one. When we create projects we tend to create them in git and when we do major refactoring we move things over. It’s also given [STRIKEOUT:recalcitrant staff] me time to adjust my thinking to git. Adjustments like this usually involve lots of swearing, fuming and muttering.

As I’ve become more comfortable with git and its collection of support tools, I’ve found myself wanting to use [git svn][7]  to work on projects that remain in Subversion. One issue I’ve run into is our reliance on `svn:externals`. We use externals extensively in our repository which has generally made it easy to share large chunks of code and data, and still be able to check out the complete dependencies for a project and get to work[1]\_. More than once I’ve thought “oh, I’ll just clone that using git-svn so I can work on it on the plane[2]\_,” only to realize that there are half a dozen externals I’d need to handle as well.

Last week I decided that tools like [magit][8]  make git too useful not to use when I’m coding and that I needed to address the _“externals issues_“. I didn’t want to deal with a mass conversion, I just wanted to get the code from Subversion into the same layout in git. I found [git-me-up][9]  which was close, but which baked in what I assume are Rails conventions that our projects don’t conform to. Something like this may already exist, but the result of my work is a little tool, [\*\*gsc\*\*][10]  — “git subversion clone”.

**gsc** works by cloning a Subversion repository using git svn and then recursively looks for externals to fetch. If it finds an external, it does a shallow clone of the target (only fetching the most recent revision instead of the full history). The result is a copy of your project you can immediately start working on. Of course, it also inherits some of the constraints associated with `svn:externals`. If you want to work on code contained in an external (and push it back to the Subversion repository) you may need to check out the code manually[3]_. Of course, the beauty of DVCS is that there’s nothing stopping you from committing to the read-only clone locally and then pushing the changes [via email][11]  to a reviewer.

You can grab [gsc from gitorious][10] . There are also installation instructions and basic usage information in the [README][12] .



 [1]: http://yergler.net/blog/2009/07/25/gsc-bug-fixes/
 [2]: http://labs.creativecommons.org
 [3]: http://code.creativecommons.org
 [4]: http://labs.creativecommons.org/2008/04/01/version-control-changes/
 [5]: http://en.wikipedia.org/wiki/Subversion_%28software%29
 [6]: http://en.wikipedia.org/wiki/Git_%28software%29
 [7]: http://www.kernel.org/pub/software/scm/git/docs/git-svn.html
 [8]: http://zagadka.vm.bytemark.co.uk/magit/
 [9]: http://github.com/gma/git-me-up/tree/master
 [10]: http://gitorious.org/gsc
 [11]: http://www.kernel.org/pub/software/scm/git/docs/git-send-email.html
 [12]: http://gitorious.org/gsc/mainline/blobs/master/README
