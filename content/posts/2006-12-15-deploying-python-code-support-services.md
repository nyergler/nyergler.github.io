---
title: 'Deploying Python Code: Support Services'
date: 2006-12-15T17:00:12.000Z
categories:
  - development
slug: deploying-python-code-support-services
---
Just over a month ago I [blogged][1]  about my first experience with [zc.buildout][2] . For those that don’t remember (shame on you!), zc.buildout is a Python tool developed by Jim Fulton of Zope fame for constructing software installations. “Buildouts”, if you will. The attraction to this over, say, just [distutils][3]  or just [setuptools][4]  is that you can go from a bare-bones [Python][5]  installation and source code checkout (or tar-ball) to a fully functional application, with dependencies and the trimmings, in a predictable, sane way. The fact that dependencies are installed in a local folder makes this especially appealing for deploying code on hosts where you don’t have write access to `site-packages`. But enough re-hashing my last zc.buildout post.

As I mentioned in my previous post, I’ve been using zc.buildout mostly to deploy the web applications that power [Creative Commons’][6]  [web services][7]  These are written using CherryPy, and were previously invoked as simple CGI scripts. However, as usage grew, we needed to move them to independent processes, which Apache proxied to using mod_rewrite. zc.buildout provided a great way to generate the wrapper script for running that process, but early this week we ran into a problem: we didn’t have a good way to detect if the process died for some reason and needed to be restarted.

I decided that a simple approach was best for the initial go-round, and wrote a small shell script that looks at the `pid` file, checks if it’s still running and if not starts the process. Put this in a cron job that runs every 10 minutes or so, and you have a poor man’s watchdog:sup:`1 <#fn8f2bac94-0bf0-492d-94de-4243a89c40c9>`_`. After writing two of these, I realized that this is something that should really be automated as part of my software installation: I always want to have a “am I up?” check script available, and so my first custom zc.buildout recipe, ``build_script`, is born.

[build_script][8]  is a recipe that takes a template file, fills in values using Python [string formatting][9]  and marks it as executable. It has one template included, `paster-check` that we’re using to check on a [paster][10]  process, and you can use templates that are part of the egg itself or are part of your codebase (via the `template_dir` setting).

You can find the code for **build_script** itself in Creative Commons’ [subversion repository][11]  ([web view][12] ), and an example of how we’re using it for our web services is [here][13] .

Suggestions, comments, questions all welcome, as are additional templates that might be useful to include in the egg itself.

<sup>1</sup>I’m sure there’s a better, more robust way to do this, but this is where we’re comfortable on the down time v. implementation time continuum. That said, if someone knows of an easy, more robust way, of course I’d like to hear about it.



 [1]: http://yergler.net/blog/2006/11/07/deploying-python-applications/
 [2]: http://cheeseshop.python.org/pypi/zc.buildout/
 [3]: http://www.python.org/doc/lib/module-distutils.html
 [4]: http://peak.telecommunity.com/DevCenter/setuptools
 [5]: http://python.org
 [6]: http://creativecommons.org
 [7]: http://api.creativecommons.org
 [8]: http://cheeseshop.python.org/pypi/buildout_script
 [9]: http://www.python.org/doc/lib/typesseq-strings.html
 [10]: http://pythonpaste.org/script
 [11]: http://sourceforge.net/svn/?group_id=80503
 [12]: http://cctools.svn.sourceforge.net/viewvc/cctools/buildout_script/
 [13]: http://cctools.svn.sourceforge.net/viewvc/cctools/api/trunk/buildout.cfg?revision=HEAD
