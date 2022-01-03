---
title: Remembering with org-mode and Ubiquity
date: 2009-10-07T12:52:04.000Z
categories:
  - development
  - geek
tags:
  - emacs
  - firefox
  - mozilla
  - orgmode
  - ubiquity
slug: remembering-with-org-mode-and-ubiquity
---
Yesterday evening I published my [second set of Ubiquity commands][1]  which provide a Ubiquity interface between [Firefox][2]  and [Emacs][3]  — specifically [org-mode][4]  — using [org-protocol][5] . [Ubiquity][6]  is an experimental extension from [Mozilla Labs][7]  that lets you interact with the browser by giving it short, plain text commands. For example, “share” to post a bookmark to Delicious, or “map” to open a map of the selected address.

[Org-Mode][4]  is an Emacs mode that can be used to keep track of notes, agendas and task lists. I use it to maintain my task list for various projects and take notes when I’m in a meeting. I really like that while it’s an outline editor at heart, it lets me write lots of text and go back later and figure out what’s actually actionable, as opposed to maintaining separate notes and task lists. [org-protocol][5]  is included in recent releases and lets you launch an instance of [emacsclient][8]  with some additional information (i.e., the URL and title of a web page, etc) and take some action on it. One of the built in “protocols” is sending that information to [remember mode][9] , which org-mode [augments][10] .

The main command is simply `remember`. Invoking it will send the current URL and document title to org-mode’s Remember buffer. You can optionally type a note or select text in the page to be captured along with the link.

Once you’re in the buffer you can make any changes needed and then simply `C-c C-c` to save the note, or `C-1 C-c C-c` to interactively file the note someplace else. I’m using this command to quickly store links with some notes to project files. I hope this will be particularly useful when I run across something for a project I’m not actually able to spend time on at the moment.

Note that before using the commands you need to [configure Firefox][11]  to understand `org-protocol://` links, and need to [configure a remember template][12] . The template I use looks like:

> `(?w "* %?\n\n  Source: %u, %c\n\n  %i" nil "Notes")`
This store the information in the `Notes` section of my `org-default-notes-file` and positions the cursor ready to type a heading.

To install, visit [the command page][1]  and click _“Subscribe”_in the upper right hand corner when prompted (this assumes you have [Ubiquity][6]  already installed). You can find the Javascript source [on gitorious][13] ; I’ll be adding my [RDFa commands][14]  to that repository as well.



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
