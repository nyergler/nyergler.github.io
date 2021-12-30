---
title: 'Emacs & Jedi'
author: Nathan Yergler
type: post
date: 2013-07-28T00:00:00+00:00
excerpt: |
  <p><a class="reference external" href="http://rhodesmill.org/brandon/">Brandon Rhodes</a> delivered the <a class="reference external" href="http://pyvideo.org/video/2258/keynote-4">keynote</a> at PyOhio yesterday<a class="footnote-reference" href="#id2" id="id1">[1]</a>. He
  talked about <em>sine qua nons</em>: features that without which, a language
  is nothing to him. One of the things he mentioned was <a class="reference external" href="http://jedi.jedidjah.ch/en/latest/">Jedi</a>, a
  framework for extending editors with Python autocompletion,
  documentation lookup, and source navigation. I say &#8220;editors&#8221;, vaguely ...</p>
url: /2013/07/28/emacs-jedi/
categories:
  - emacs
tags:
  - buildout
  - python
  - virtualenv

---
[Brandon Rhodes][1]  delivered the [keynote][2]  at PyOhio yesterday[[1]][3]{#id1.footnote-reference}. He talked about _sine qua nons_: features that without which, a language is nothing to him. One of the things he mentioned was [Jedi][4] , a framework for extending editors with Python autocompletion, documentation lookup, and source navigation. I say &#8220;editors&#8221;, vaguely, because Jedi consists of a Python server that the editor communicates with via an [editor specific plugin][5] . I&#8217;d seen Jedi before, but hadn&#8217;t managed to get it working with Emacs. After hearing Brandon speak of it so glowingly, I decided to give it another try. The actual installation was easy: using the [master branch][6]  of [el-get][7] , the [recipe][8]  installed the [Jedi Emacs plugin][9]  and its dependencies seamlessly. And it seemed to just work for the standard library.

And once I&#8217;d enabled it for <tt class="docutils literal"><span class="pre">python-mode</span></tt>, I was indeed able to autocomplete things from the standard library, and jump to the source of members implemented in Python. But I found that I wasn&#8217;t able to navigate to the third party dependencies in my project, and eventually figured out there were three cases I needed to address.

<ul class="simple">
  <li>
    Many things I work on use <a class="reference external" href="http://www.virtualenv.org/en/latest/">virtualenv</a>. Jedi supports virtual environments if the <tt class="docutils literal">VIRTUAL_ENV</tt> environment variable is set, but I tend to keep Emacs running and switch between several different projects, each with their own environment.
  </li>
  <li>
    Some of my projects also use <a class="reference external" href="http://www.buildout.org/en/latest/">buildout</a>. When I&#8217;m using <a class="reference external" href="http://www.buildout.org/en/latest/">buildout</a> for a project, the dependencies end up in an <tt class="docutils literal">eggs</tt> sub-directory, which Jedi (as far as I know) doesn&#8217;t actually know about.
  </li>
  <li>
    Finally, the setup we use at Eventbrite requires some special handling, as well: we store our source checkouts on an encrypted disk image, which is then mounted into a Vagrant virtual machine, where the actual virtual environment lives. Since the virtual environment isn&#8217;t on the same &#8220;machine&#8221; that we&#8217;re editing on, I need to tell Jedi explicitly what directories to find source in.
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
      Fires hooks for each mode after the <a class="reference external" href="https://www.gnu.org/software/emacs/manual/html_node/emacs/File-Variables.html">file</a> or <a class="reference external" href="https://www.gnu.org/software/emacs/manual/html_node/emacs/Directory-Variables.html">directory</a> local variables have been set up. I found a <a class="reference external" href="http://stackoverflow.com/questions/5147060/how-can-i-access-directory-local-variables-in-my-major-mode-hooks">StackOverflow post</a> that confirmed what I had observed: any file or directory local variables weren&#8217;t set when the normal <tt class="docutils literal"><span class="pre">python-mode</span></tt> hook was fired. The mode-specific hooks are chained off of <tt class="docutils literal"><span class="pre">hack-local-variables-hook</span></tt>, which is fired after the local variables have been resolved.
    </li>
    <li>
      Walks up the directory hierarchy from the buffer file, looking for <tt class="docutils literal">./bin/activate</tt> at each level. If it finds one, it assumes this is the virtual env, and adds it to the list of virtual envs Jedi will look at.
    </li>
    <li>
      Walks up the directory hierarchy looking for an <tt class="docutils literal"><span class="pre">./eggs/*.egg</span></tt> sub-directory at each level. If it finds one, it adds each of those <tt class="docutils literal">.egg</tt> subdirectories to the <tt class="docutils literal">sys.path</tt> Jedi will look at. This allows Jedi to work when you&#8217;re editing files in buildout-based projects.
    </li>
    <li>
      Looks to see if the <tt class="docutils literal">aditional_paths</tt> variable has been set as a list of other paths to add.
    </li>
  </ol>

  <p>
    The first three bits are sort of implementation details: you can usually just ignore them, and Jedi will <em>just work</em>. The final, though, needs a little explanation.
  </p>

  <p>
    As I mentioned above, Eventbrite stores the source code on a disk image, which is mounted into a virtual machine where the actual virtualenv lives. That means I need to add specific paths to <tt class="docutils literal">sys.path</tt> when I open a source file in that disk image. To get that to work, I create a <tt class="docutils literal"><span class="pre">.dir-locals.el</span></tt> in the root of the source tree, something like:
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
    I&#8217;m sure that my Emacs Lisp could be improved upon, but it felt pretty good to figure out enough to integration Jedi into the way I use Emacs. I haven&#8217;t worked with Jedi extensively, but so far it seems to work pretty well. The autocomplete features seem to be minimally invasive, and the show docstring and jump to definition both work great.
  </p>

  <table class="docutils footnote" frame="void" id="id2" rules="none">
    <colgroup><col class="label" /><col /></colgroup> <tr>
      <td class="label">
        <a class="fn-backref" href="#id1">[1]</a>
      </td>

      <td>
        The fact that the video is up less than 36 hours after the keynote is a testament to how great <a class="reference external" href="http://nextdayvideo.com/">Next Day Video</a> is. They do amazing work at Python (and other) conferences and make it possible to enjoy the hallway track without worrying about missing a presentation.
      </td>
    </tr>
  </table>

  <table class="docutils field-list" frame="void" rules="none">
    <col class="field-name" /> <col class="field-body" /> <tr class="field">
      <th class="field-name">
        author:
      </th>

      <td class="field-body">
        Nathan Yergler
      </td>
    </tr>

    <tr class="field">
      <th class="field-name">
        category:
      </th>

      <td class="field-body">
        emacs
      </td>
    </tr>

    <tr class="field">
      <th class="field-name">
        tags:
      </th>

      <td class="field-body">
        python, virtualenv, buildout
      </td>
    </tr>

    <tr class="field">
      <th class="field-name">
        comments:
      </th>

      <td class="field-body">
      </td>
    </tr>
  </table>
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