---
title: Upgrading WordPress
date: 2008-08-21T17:33:19.000Z
categories:
  - geek
tags:
  - git
  - subversion
  - upgrade
  - version control
  - wordpres
slug: upgrading-wordpress
---
[WordPress 2.6.1][1]  is out. Reading feeds on my flight from IND to PHX this afternoon I ran across the [WordPress Automatic Upgrade Plugin][2]  (shouldn’t that be the _Automattic_?). Nice, but I’d like to plug my approach to managing WordPress upgrades, which I think is even easier, assuming you’re OK with minimal command-line interaction.

First, install WordPress from a Subversion checkout; do: &#8220; $ svn co <http://svn.automattic.com/wordpress/tags/2.6> /&#8220; instead of downloading the .zip or .tar.gz file. Configure as directed.

Then, when a new version is available, log into your webhost and run: &#8220; $ svn switch <http://svn.automattic.com/wordpress/tags/2.6.1> /&#8220; from your install directory.

Done.

Note that you can also do something similar (but an order of magnitude more complex, at least for my brain) using [git][3]  and [git-svn][4]  if you want to version your local settings as well. Perhaps one day [Asheesh][5]  or I will get that written up.



 [1]: http://wordpress.org/development/2008/08/wordpress-261/
 [2]: http://techie-buzz.com/wordpress-plugins/wordpress-automatic-upgrade-12-release.html
 [3]: http://en.wikipedia.org/wiki/Git_(software)
 [4]: http://www.kernel.org/pub/software/scm/git/docs/git-svn.html
 [5]: http://asheesh.org
