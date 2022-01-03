---
title: Managing my Emacs packages with el-get
date: 2011-04-19T22:17:05.000Z
categories:
  - development
  - tools
tags:
  - el-get
  - emacs
slug: managing-my-emacs-packages-with-el-get
---
**Update (20 April 2011):** I’ve now tried this on my old MacBook running OS X 10.5. The bootstrap script initially threw an error, which I tracked down to an outdated version of `git`. Once I upgraded `git` and installed `bzr` (used by the `<span class="pre">python-mode` recipe), I started Emacs and was rewarded with a fully functioning installation, complete with the extensions I want.

I’m on vacation for two weeks between jobs, so of course this means it’s time to sharpen the tools (because writing programs to help you write programs is almost always more fun than actually writing programs). I’ve been an [Emacs][1]  user for many years, and of course I’ve customized my installation with additional modes and extensions. Previously I would check out code that I needed into a `vendor` directory, and then load it manually in `init.el`. And this worked fine, but that doesn’t mean I [STRIKEOUT:can’t] won’t spend a chunk of my day making it better.

A [friend][2]  mentioned [el-get][3]  to me, and I decided to give it a try. I like the combination of [recipes][4]  for installing common things, and the fact that your list of packages is very explicit in `init.el` (so if I need to dig into one of them, I know exactly where to begin). Additionally, since I’ll have a new computer issued for the new job, I also wanted to get things into shape so that I could easily replicate my preferred editing environment. I wound up creating a small bootstrap file to help things along, **getelget.el**.

**getelget.el** checks to see if el-get has been previously bootstrapped, and if not, performs the lazy installation procedure. After it makes sure el-get is available, it loads and executes el-get. So if you need to get a new machine up and going with Emacs and any extensions, you can drop in your `init.el` and **getelget.el**, and Emacs will take care of the rest.

To use **getelget**, define your `el-get-sources` like you normally would in `init.el`:

<pre class="literal-block">(setq el-get-sources
       '(el-get
          python-mode
         ;; etc...
       )  )
</pre>

Then load **getelget** (the following assumes you have getelget.el in your user emacs directory along with `init.el`):

<pre class="literal-block">;; getelget -- bootstrap el-get if necessary and load the specified packages
(load-file
   (concat (file-name-as-directory user-emacs-directory) "getelget.el"))
</pre>

**getelget** will handle bootstrapping, loading, and executing el-get.

**getelget** is pretty trivial; you can [download it here][5] , and I’ve waived any rights I may hold on the code using the [CC0 Public Domain Dedication][6] .



 [1]: http://www.gnu.org/software/emacs/
 [2]: http://dustycloud.org/
 [3]: https://github.com/dimitri/el-get
 [4]: https://github.com/dimitri/el-get/tree/master/recipes
 [5]: http://yergler.net/projects/2011/getelget.el
 [6]: http://creativecommons.org/publicdomain/zero/1.0/
