---
title: Readonly Attachments
date: 2006-03-12T20:46:02.000Z
categories:
  - development
slug: readonly-attachments
---
I suppose I should have blogged about it a while ago, but a while back I hacked together a [Thunderbird][1]  extension at the request of a friend, and I went ahead and made it available through addons.mozilla.org.

[Readonly Attachments][2]  does just what it sounds like — makes attachments saved to disk via Thunderbird’s “open” command read-only. The idea is that this should prevent you from making critical changes to that all important document, only to realize after you close your word processor that it was saved in the /tmp folder and is now lost forever.

I’ve tested it personally with Mac <span class="caps">OS</span> X, Windows and Linux; on <span class="caps">OS</span> X you may see a message asking if it’s <span class="caps">OK</span> to use the Finder to open something. This is just caused by Thunderbird asking the operating system to open the file with… something. There is a known issue with attachment names which contain non-<span class="caps">ASCII</span> characters. I’m working on that… slowly.

You can find some more info [in the yiki][3] , and source is available in [darcs][4] . If you run into any problems or have any suggestions, record them [here][5] .



 [1]: http://www.mozilla.com/thunderbird/
 [2]: https://addons.mozilla.org/extensions/moreinfo.php?id=1846&application=thunderbird
 [3]: http://yergler.net/yiki/ReadonlyAttachments
 [4]: http://darcs.yergler.net/?r=ro_attach;a=summary
 [5]: http://yergler.net/yiki/RA_Known_Issues
