---
title: 'Upgrading WordPress'
author: Nathan Yergler
type: post
date: 2008-08-21T17:33:19+00:00
excerpt: |
  <p><a class="reference external" href="http://wordpress.org/development/2008/08/wordpress-261/">WordPress
  2.6.1</a> is
  out. Reading feeds on my flight from <span class="caps">IND</span> to <span class="caps">PHX</span> this afternoon I ran
  across the <a class="reference external" href="http://techie-buzz.com/wordpress-plugins/wordpress-automatic-upgrade-12-release.html">WordPress Automatic Upgrade
  Plugin</a>
  (shouldn’t that be the <em>Automattic</em>?). Nice, but I’d like to plug my
  approach to managing WordPress upgrades, which I think is even easier ...</p>
url: /2008/08/21/upgrading-wordpress/
categories:
  - geek
tags:
  - git
  - subversion
  - upgrade
  - version control
  - wordpres

---
[WordPress 2.6.1][1]  is out. Reading feeds on my flight from <span class="caps">IND</span> to <span class="caps">PHX</span> this afternoon I ran across the [WordPress Automatic Upgrade Plugin][2]  (shouldn’t that be the _Automattic_?). Nice, but I’d like to plug my approach to managing WordPress upgrades, which I think is even easier, assuming you’re <span class="caps">OK</span> with minimal command-line interaction.

First, install WordPress from a Subversion checkout; do: &#8220; $ svn co <http://svn.automattic.com/wordpress/tags/2.6> /&#8220; instead of downloading the .zip or .tar.gz file. Configure as directed.

Then, when a new version is available, log into your webhost and run: &#8220; $ svn switch <http://svn.automattic.com/wordpress/tags/2.6.1> /&#8220; from your install directory.

Done.

Note that you can also do something similar (but an order of magnitude more complex, at least for my brain) using [git][3]  and [git-svn][4]  if you want to version your local settings as well. Perhaps one day [Asheesh][5]  or I will get that written up.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2008-08-21 17:33:19
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      630
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
      upgrading-wordpress
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
      geek
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      tags:
    </th>

    <td class="field-body">
      git, subversion, upgrade, version control, wordpres
    </td>
  </tr>
</table>

 [1]: http://wordpress.org/development/2008/08/wordpress-261/
 [2]: http://techie-buzz.com/wordpress-plugins/wordpress-automatic-upgrade-12-release.html
 [3]: http://en.wikipedia.org/wiki/Git_(software)
 [4]: http://www.kernel.org/pub/software/scm/git/docs/git-svn.html
 [5]: http://asheesh.org