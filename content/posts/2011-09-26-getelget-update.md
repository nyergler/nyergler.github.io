---
title: 'Updating el-get and getelget.el'
author: Nathan Yergler
type: post
date: 2011-09-26T09:59:24+00:00
excerpt: |
  <p>Last week one of my Emacs using colleagues asked me how I managed my
  Emacs packages and configuration. Naturally I pointed him to
  <a class="reference external" href="https://github.com/dimitri/el-get">el-get</a> and my <a class="reference external" href="http://yergler.net/blog/2011/04/19/managing-my-emacs-packages-with-el-get/">getelget.el
  bootstrap
  script</a>.
  I’ve been happily managing my Emacs installation over the past five
  months using el-get and a private git repository ...</p>
url: /2011/09/26/getelget-update/
categories:
  - development
  - tools
tags:
  - emacs el-get getelget

---
Last week one of my Emacs using colleagues asked me how I managed my Emacs packages and configuration. Naturally I pointed him to [el-get][1]  and my [getelget.el bootstrap script][2] . I’ve been happily managing my Emacs installation over the past five months using el-get and a private git repository for my configuration. However when I tried to square my <tt class="docutils literal">.emacs.d/init.el</tt> with the current el-get documentation, I got a little confused; el-get is now better at bootstrapping itself from within your Emacs configuration. When my colleague read this and asked why he might want <tt class="docutils literal">getelget.el</tt>, my response was… well, lackluster; this is an attempt to document that a littler better.)

Last night I decided to do a little clean-up on my Emacs configuration, and see if I could get rid of getelget.el. The [documentation for el-get][3]  is great, so I started there. What I quickly realized is that the included el-get bootstrap mechanism is great if you want to ensure el-get is installed and then use <tt class="docutils literal"><span class="pre">el-get-install</span></tt>, <tt class="docutils literal"><span class="pre">el-get-remove</span></tt>, etc to manage your packages. But if you define your package list in you config file, it’s not quite enough. Specifically, when you first bootstrap your configuration, you want to defer calling <tt class="docutils literal">(elget 'sync)</tt> until you’ve bootstrapped el-get. And on future runs, you want to go ahead and install any new packages that have been added to your list.

Luckily el-get has added support for hooks, which makes life a little easier. The new <tt class="docutils literal">getelget.el</tt> (available [here][4] ) looks something like this:

<pre class="literal-block">;; getelget – el-get boostrap script;;;; Checks to see if el-get has been checked out, and bootstraps it if;; it has not. After bootstrapping, calls el-get to load specified;; packages.;;;; el-get-packages should be defined before including this file. Any;; definitions from el-get-sources will be appended to el-get-packages.;;;; Written in 2011 by Nathan R. Yergler ;;;; To the extent possible under law, the person who associated CC0 with;; getelget has waived all copyright and related or neighboring rights;; to getelget.;;;; You should have received a copy of the CC0 legalcode along with this;; work.  If not, see .

    ;; add a hook listener for post-install el-get(defun post-install-hook (pkg)
  ;; after installing el-get, load the local package list
  (if (string-equal pkg “el-get”)
      (el-get 'sync
              (append el-get-packages
                      (mapcar 'el-get-source-name el-get-sources)))))(add-hook 'el-get-post-install-hooks 'post-install-hook)

    ;; add the el-get directory to the load path(add-to-list 'load-path
             (concat (file-name-as-directory user-emacs-directory)
                     (file-name-as-directory “el-get”)
                     “el-get”))

    ;; try to require el-get(if (eq (require 'el-get nil t) nil)

    ;; urp, need to bootstrap
    (url-retrieve
     “https://raw.github.com/dimitri/el-get/master/el-get-install.el”
     (lambda (s)
         (end-of-buffer)
         (eval-print-last-sexp)))

    ;; successfully required el-get, load the packages!
    (post-install-hook “el-get”)
</pre>

el-get also [recommends][5]  splitting your package definitions from your local source recipes (which can themselves extend an included recipe). So getelget.el now expects you’ve defined two lists: <tt class="docutils literal"><span class="pre">el-get-packages</span></tt>, a list of packages to install from recipes, and <tt class="docutils literal"><span class="pre">el-get-sources</span></tt>, your local source list.

For example, I define a local recipe for [magit][6]  that binds a key to <tt class="docutils literal"><span class="pre">magit-status</span></tt> and enables spell checking and fill mode for commit message editing:

<pre class="literal-block">(setq el-get-sources
      '((:name magit
               :after (lambda ()
                        (global-set-key “\C-x\r\r” 'magit-status)

                        ;; Enable spell checking, fill for log editing
                        (add-hook 'magit-log-edit-mode-hook
                                  (lambda()
                                    (auto-fill-mode 1)
                                    (flyspell-mode 1)))))
        ))
</pre>

And my <tt class="docutils literal"><span class="pre">el-get-packages</span></tt> list is just a list of packages I’m installing from the included el-get recipes.

<pre class="literal-block">(setq el-get-packages
       '(el-get
         google-maps
         color-theme
         python-mode
         virtualenv
         php-mode-improved
         xml-rpc-el
         js2-mode
         org2blog))
</pre>

Everything listed in both lists will be installed.

<span class="caps">YMMV</span>, <span class="caps">FWIW</span>, <span class="caps">ZOMG</span>, <span class="caps">BBQ</span>, etc.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2011-09-26 09:59:24
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      1989
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
      getelget-update
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
      development, tools
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      tags:
    </th>

    <td class="field-body">
      emacs el-get getelget
    </td>
  </tr>
</table>

 [1]: https://github.com/dimitri/el-get
 [2]: http://yergler.net/blog/2011/04/19/managing-my-emacs-packages-with-el-get/
 [3]: https://github.com/dimitri/el-get/blob/master/README.asciidoc
 [4]: http://yergler.net/projects/2011/getelget-201109.el
 [5]: http://tapoueh.org/blog/2011/09/16-el-get-3.1.html
 [6]: https://github.com/magit/magit