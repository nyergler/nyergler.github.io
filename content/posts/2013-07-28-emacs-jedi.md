---
title: Emacs & Jedi
date: 2013-07-28T00:00:00.000Z
categories:
  - emacs
tags:
  - buildout
  - python
  - virtualenv
slug: emacs-jedi
---
[Brandon Rhodes][1]  delivered the [keynote][2]  at PyOhio yesterday[[1]][3]{#id1.footnote-reference}. He talked about _sine qua nons_: features that without which, a language is nothing to him. One of the things he mentioned was [Jedi][4] , a framework for extending editors with Python autocompletion, documentation lookup, and source navigation. I say "editors", vaguely, because Jedi consists of a Python server that the editor communicates with via an [editor specific plugin][5] . I'd seen Jedi before, but hadn't managed to get it working with Emacs. After hearing Brandon speak of it so glowingly, I decided to give it another try. The actual installation was easy: using the [master branch][6]  of [el-get][7] , the [recipe][8]  installed the [Jedi Emacs plugin][9]  and its dependencies seamlessly. And it seemed to just work for the standard library.

And once I'd enabled it for `python-mode`, I was indeed able to autocomplete things from the standard library, and jump to the source of members implemented in Python. But I found that I wasn't able to navigate to the third party dependencies in my project, and eventually figured out there were three cases I needed to address.

<ul class="simple">
  <li>
    Many things I work on use <a class="reference external" href="http://www.virtualenv.org/en/latest/">virtualenv</a>. Jedi supports virtual environments if the `VIRTUAL_ENV` environment variable is set, but I tend to keep Emacs running and switch between several different projects, each with their own environment.
  </li>
  <li>
    Some of my projects also use <a class="reference external" href="http://www.buildout.org/en/latest/">buildout</a>. When I'm using <a class="reference external" href="http://www.buildout.org/en/latest/">buildout</a> for a project, the dependencies end up in an `eggs` sub-directory, which Jedi (as far as I know) doesn't actually know about.
  </li>
  <li>
    Finally, the setup we use at Eventbrite requires some special handling, as well: we store our source checkouts on an encrypted disk image, which is then mounted into a Vagrant virtual machine, where the actual virtual environment lives. Since the virtual environment isn't on the same "machine" that we're editing on, I need to tell Jedi explicitly what directories to find source in.
  </li>
</ul>

The Jedi documentation includes an [advanced example][10]  of customizing the server arguments on per buffer. It assumes static arguments, but it seemed like a solution was possible. I spent a couple hours this afternoon working on my Emacs Lisp skills to make Jedi work in all three of my cases.

<div class="section" id="kenobi-el">
  <h2>
    kenobi.el
  </h2>

  <p>
    <a class="reference external" href="https://gist.github.com/nyergler/6100112">kenobi.el</a> (gist) is the result, and it does a few things:
  </p>

  <ol class="arabic simple">
    <li>
      Fires hooks for each mode after the <a class="reference external" href="https://www.gnu.org/software/emacs/manual/html_node/emacs/File-Variables.html">file</a> or <a class="reference external" href="https://www.gnu.org/software/emacs/manual/html_node/emacs/Directory-Variables.html">directory</a> local variables have been set up. I found a <a class="reference external" href="http://stackoverflow.com/questions/5147060/how-can-i-access-directory-local-variables-in-my-major-mode-hooks">StackOverflow post</a> that confirmed what I had observed: any file or directory local variables weren't set when the normal `python-mode` hook was fired. The mode-specific hooks are chained off of `hack-local-variables-hook`, which is fired after the local variables have been resolved.
    </li>
    <li>
      Walks up the directory hierarchy from the buffer file, looking for `./bin/activate` at each level. If it finds one, it assumes this is the virtual env, and adds it to the list of virtual envs Jedi will look at.
    </li>
    <li>
      Walks up the directory hierarchy looking for an `./eggs/*.egg` sub-directory at each level. If it finds one, it adds each of those `.egg` subdirectories to the `sys.path` Jedi will look at. This allows Jedi to work when you're editing files in buildout-based projects.
    </li>
    <li>
      Looks to see if the `aditional_paths` variable has been set as a list of other paths to add.
    </li>
  </ol>

  <p>
    The first three bits are sort of implementation details: you can usually just ignore them, and Jedi will <em>just work</em>. The final, though, needs a little explanation.
  </p>

  <p>
    As I mentioned above, Eventbrite stores the source code on a disk image, which is mounted into a virtual machine where the actual virtualenv lives. That means I need to add specific paths to `sys.path` when I open a source file in that disk image. To get that to work, I create a `.dir-locals.el` in the root of the source tree, something like:
  </p>

  <pre class="literal-block">
(
 (nil . ((additional_paths . (
          "/Volumes/eb_home/work/src"
          "/Volumes/eb_home/work/deps"
          ))))
)
</pre>

  <p>
    I'm sure that my Emacs Lisp could be improved upon, but it felt pretty good to figure out enough to integration Jedi into the way I use Emacs. I haven't worked with Jedi extensively, but so far it seems to work pretty well. The autocomplete features seem to be minimally invasive, and the show docstring and jump to definition both work great.
  </p>


</div>

 [1]: http://rhodesmill.org/brandon/
 [2]: http://pyvideo.org/video/2258/keynote-4
 [3]: #id2
 [4]: http://jedi.jedidjah.ch/en/latest/
 [5]: http://jedi.jedidjah.ch/en/latest/#editor-plugins
 [6]: https://github.com/dimitri/el-get#master-branch
 [7]: https://github.com/dimitri/el-get
 [8]: https://github.com/dimitri/el-get/blob/master/recipes/jedi.rcp
 [9]: http://tkf.github.io/emacs-jedi/latest/
 [10]: http://tkf.github.io/emacs-jedi/latest/#jedi:server-args
