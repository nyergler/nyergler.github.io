---
title: 'Remembering with org-mode and Ubiquity'
author: Nathan Yergler
type: post
date: 2009-10-07T12:52:04+00:00
excerpt: |
  <p>Yesterday evening I published my <a class="reference external" href="http://yergler.net/projects/ubiquity-commands/org-mode/">second set of Ubiquity
  commands</a>
  which provide a Ubiquity interface between
  <a class="reference external" href="http://mozilla.com/firefox">Firefox</a> and
  <a class="reference external" href="http://en.wikipedia.org/wiki/Emacs">Emacs</a> — specifically
  <a class="reference external" href="http://orgmode.org/">org-mode</a> — using
  <a class="reference external" href="http://orgmode.org/worg/org-contrib/org-protocol.php">org-protocol</a>.
  <a class="reference external" href="http://labs.mozilla.com/ubiquity/">Ubiquity</a> is an experimental
  extension from <a class="reference external" href="http://labs.mozilla.com/">Mozilla Labs</a> that lets you
  interact with the browser by giving it short, plain text commands. For
  example, “share” to post ...</p>
url: /2009/10/07/remembering-with-org-mode-and-ubiquity/
categories:
  - development
  - geek
tags:
  - emacs
  - firefox
  - mozilla
  - orgmode
  - ubiquity

---
Yesterday evening I published my [second set of Ubiquity commands][1]  which provide a Ubiquity interface between [Firefox][2]  and [Emacs][3]  — specifically [org-mode][4]  — using [org-protocol][5] . [Ubiquity][6]  is an experimental extension from [Mozilla Labs][7]  that lets you interact with the browser by giving it short, plain text commands. For example, “share” to post a bookmark to Delicious, or “map” to open a map of the selected address.

[Org-Mode][4]  is an Emacs mode that can be used to keep track of notes, agendas and task lists. I use it to maintain my task list for various projects and take notes when I’m in a meeting. I really like that while it’s an outline editor at heart, it lets me write lots of text and go back later and figure out what’s actually actionable, as opposed to maintaining separate notes and task lists. [org-protocol][5]  is included in recent releases and lets you launch an instance of [emacsclient][8]  with some additional information (i.e., the <span class="caps">URL</span> and title of a web page, etc) and take some action on it. One of the built in “protocols” is sending that information to [remember mode][9] , which org-mode [augments][10] .

The main command is simply <tt class="docutils literal">remember</tt>. Invoking it will send the current <span class="caps">URL</span> and document title to org-mode’s Remember buffer. You can optionally type a note or select text in the page to be captured along with the link.

Once you’re in the buffer you can make any changes needed and then simply <tt class="docutils literal"><span class="pre">C-c</span> <span class="pre">C-c</span></tt> to save the note, or <tt class="docutils literal"><span class="pre">C-1</span> <span class="pre">C-c</span> <span class="pre">C-c</span></tt> to interactively file the note someplace else. I’m using this command to quickly store links with some notes to project files. I hope this will be particularly useful when I run across something for a project I’m not actually able to spend time on at the moment.

Note that before using the commands you need to [configure Firefox][11]  to understand <tt class="docutils literal"><span class="pre">org-protocol://</span></tt> links, and need to [configure a remember template][12] . The template I use looks like:

> <tt class="docutils literal"><span class="pre">(?w</span> "* <span class="pre">%?\n\n</span>  Source: %u, %c\n\n  %i" nil "Notes")</tt>
This store the information in the <tt class="docutils literal">Notes</tt> section of my <tt class="docutils literal"><span class="pre">org-default-notes-file</span></tt> and positions the cursor ready to type a heading.

To install, visit [the command page][1]  and click _“Subscribe”_in the upper right hand corner when prompted (this assumes you have [Ubiquity][6]  already installed). You can find the Javascript source [on gitorious][13] ; I’ll be adding my [RDFa commands][14]  to that repository as well.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2009-10-07 12:52:04
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      1186
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
      remembering-with-org-mode-and-ubiquity
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
      development, geek
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      tags:
    </th>

    <td class="field-body">
      emacs, firefox, mozilla, orgmode, ubiquity
    </td>
  </tr>
</table>

 [1]: http://yergler.net/projects/ubiquity-commands/org-mode/
 [2]: http://mozilla.com/firefox
 [3]: http://en.wikipedia.org/wiki/Emacs
 [4]: http://orgmode.org/
 [5]: http://orgmode.org/worg/org-contrib/org-protocol.php
 [6]: http://labs.mozilla.com/ubiquity/
 [7]: http://labs.mozilla.com/
 [8]: http://www.emacswiki.org/emacs/EmacsClient
 [9]: http://www.emacswiki.org/cgi-bin/wiki/RememberMode
 [10]: http://orgmode.org/manual/Remember.html#Remember
 [11]: http://orgmode.org/worg/org-contrib/org-protocol.php#sec-3.1
 [12]: http://orgmode.org/worg/org-contrib/org-protocol.php#sec-6.1
 [13]: http://gitorious.com/nyergler-ubiquity-commands
 [14]: http://yergler.net/projects/ubiquity-rdfa-commands/