---
title: 'Google induced Myopia'
author: Nathan Yergler
type: post
date: 2004-05-22T09:34:46+00:00
excerpt: |
  <p>I’ve been
  <a class="reference external" href="http://yergler.net/blog/archives/2004/04/29/license-tagging">working</a>
  on an application which provides a graphical interface for embedding
  <a class="reference external" href="http://creativecommons.org">Creative Commons</a> licenses in audio
  files, specifically <span class="caps">MP3</span> right now. The previous iteration, a
  command-line application, used the
  <a class="reference external" href="http://freshmeat.net/projects/eyed3/">eyeD3</a> library for handling the
  <span class="caps">ID3</span> metadata embedded in the files. Unfortunately, we wanted to add the
  ability ...</p>
url: /2004/05/22/google-induced-myopia/
categories:
  - development

---
I’ve been [working][1]  on an application which provides a graphical interface for embedding [Creative Commons][2]  licenses in audio files, specifically <span class="caps">MP3</span> right now. The previous iteration, a command-line application, used the [eyeD3][3]  library for handling the <span class="caps">ID3</span> metadata embedded in the files. Unfortunately, we wanted to add the ability to handle ID3v2.2 in addition to 2.3 and 2.4 to the application, and eyeD3 doesn’t support ID3v2.2.

After some work in everyone’s favorite index of everything, [Google][4] , I stumbled on a promising candidate: PyId3v2 (now named PyTagger). Long story short, while PyTagger did most of what I needed, it seemed to be tagging in a way that was inconsistent with eyeD3 (and, it seems, the “standards”, as they are). That’s when I remembered the Python Package Index, or [PyPI][5] . I had run into references to PyPI while packaging [Canterbury’s][6]  improvments to [LoginManager][7]  and [PySamba][8]  using the standard Python packaging mechanism, [distutils][9] .

Distutils, for all of it’s warts and flaws, does a passable job at packaging Python extensions, modules and, er, packages. Starting in Python 2.3 (I think), it also allows you to define additional meta-data about your extension, and auto-magically register it with the Python Package Index. In a way, it’s supposed to help create a distributed [<span class="caps">CPAN</span>][10]  . And it presents a browsable archive, organized by target audience, topic area and the other pieces of meta-data distutils collects. Which is where I found a forked version of [PyId3][11] , which not only has support for the types of tags I need to embed, but also has an interface which is, well, Python-ic (for lack of a better word).

Google had suggested PyId3, but the “original” version doesn’t support ID3v2.3 or 2.4. The whole incident has reminded me of one thing: the best tool overall is not always the best for a specific need. And while Google will remain one of my oft-used tools for Internet searching, I’ll remember PyPI now when I’m looking for a specific type of Python module.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2004-05-22 09:34:46
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      133
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
      google-induced-myopia
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
      development
    </td>
  </tr>
</table>

 [1]: http://yergler.net/blog/archives/2004/04/29/license-tagging
 [2]: http://creativecommons.org
 [3]: http://freshmeat.net/projects/eyed3/
 [4]: http://google.com
 [5]: http://www.python.org/pypi
 [6]: http://canterburyschool.org
 [7]: http://tech.canterburyschool.org/tech/LoginManager
 [8]: http://tech.canterburyschool.org/tech/PySamba
 [9]: http://www.python.org/doc/lib/module-distutils.html
 [10]: http://cpan.org
 [11]: http://www.python.org/pypi?:action=display&name=PyID3&version=0.5.5