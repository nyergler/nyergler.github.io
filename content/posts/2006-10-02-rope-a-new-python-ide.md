---
title: 'Rope: A New Python IDE'
date: 2006-10-02T08:17:45.000Z
categories:
  - development
slug: rope-a-new-python-ide
---
I’m not sure how I found it, but over the weekend I ran across [Rope][1] , a Python <span class="caps">IDE</span> I hadn’t run into before. Rope sets itself apart from other tools I’ve used lately (including PyDev and Wing) by embracing a very functional approach to development. This approach is visible from the start when you visit their web page. There are **no** screenshots. Maybe they just haven’t had time to put them up, but after playing with Rope, I don’t think they should: it’s an editor with some advanced features, what do you need to see? Instead the web page lists some of the things Rope tries to do well: code-completion, type inference and refactoring. Especially refactoring.

When you start Rope, you immediately notice its austere, functional interface. Rope uses [TkInter][2]  as its <span class="caps">GUI</span> toolkit. TkInter isn’t going to win _any_ beauty pageants on _any_ platform. But it does have an installed base as big as, well, Python’s. The editor is what you’d expect from a basic editor: it does syntax highlighting and uses Emacs-like key bindings for some tasks.

One difference that I noticed immediately is Rope’s idea of a Project. Tools like [Wing][3]  have explicit project files. These files contain information about the project, and opening them restores your working environment. Rope, on the other hand, takes the view that a Project is just a directory that contains… stuff. This seems very “Python-ic” in some ways: a <tt class="docutils literal">package</tt>, after-all, is just a directory with a bit of special sauce in the form of <tt class="docutils literal">__init__.py</tt>, so why shouldn’t a Project (which might be thought of as a collection of packages and modules) be a directory as well? Opening a project simply means selecting a directory tree which contains your project’s files. From there you can browse the project tree, and pick files to open (or create new ones, of course).

So I really like Rope. I’m not sure it’ll replace Emacs as my tool of choice, but it doesn’t get in my way or gobble system resources, so I’ll keep it around. Is Rope a mature tool? No. To really call itself an <span class="caps">IDE</span> it needs some sort of debugging support, in my opinion. But it already makes one hell of an editor.



 [1]: http://rope.sourceforge.net
 [2]: http://wiki.python.org/moin/TkInter
 [3]: http://wingide.com/
