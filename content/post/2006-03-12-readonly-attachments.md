---
title: 'Readonly Attachments'
author: Nathan Yergler
type: post
date: 2006-03-12T20:46:02+00:00
excerpt: |
  <p>I suppose I should have blogged about it a while ago, but a while back I
  hacked together a <a class="reference external" href="http://www.mozilla.com/thunderbird/">Thunderbird</a>
  extension at the request of a friend, and I went ahead and made it
  available through addons.mozilla.org.</p>
  <p><a class="reference external" href="https://addons.mozilla.org/extensions/moreinfo.php?id=1846&amp;application=thunderbird">Readonly
  Attachments</a>
  does just what it sounds like — makes attachments saved ...</p>
url: /2006/03/12/readonly-attachments/
categories:
  - development

---
I suppose I should have blogged about it a while ago, but a while back I hacked together a [Thunderbird][1]  extension at the request of a friend, and I went ahead and made it available through addons.mozilla.org.

[Readonly Attachments][2]  does just what it sounds like — makes attachments saved to disk via Thunderbird’s “open” command read-only. The idea is that this should prevent you from making critical changes to that all important document, only to realize after you close your word processor that it was saved in the /tmp folder and is now lost forever.

I’ve tested it personally with Mac <span class="caps">OS</span> X, Windows and Linux; on <span class="caps">OS</span> X you may see a message asking if it’s <span class="caps">OK</span> to use the Finder to open something. This is just caused by Thunderbird asking the operating system to open the file with… something. There is a known issue with attachment names which contain non-<span class="caps">ASCII</span> characters. I’m working on that… slowly.

You can find some more info [in the yiki][3] , and source is available in [darcs][4] . If you run into any problems or have any suggestions, record them [here][5] .

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2006-03-12 20:46:02
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      395
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
      readonly-attachments
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

 [1]: http://www.mozilla.com/thunderbird/
 [2]: https://addons.mozilla.org/extensions/moreinfo.php?id=1846&application=thunderbird
 [3]: http://yergler.net/yiki/ReadonlyAttachments
 [4]: http://darcs.yergler.net/?r=ro_attach;a=summary
 [5]: http://yergler.net/yiki/RA_Known_Issues