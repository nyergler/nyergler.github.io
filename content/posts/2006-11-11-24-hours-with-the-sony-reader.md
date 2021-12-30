---
title: '24 Hours with the Sony Reader'
author: Nathan Yergler
type: post
date: 2006-11-11T12:26:51+00:00
excerpt: |
  <p>Right, I know I promised I would tell a story about deploying software
  based on Django. It’ll have to wait <a class="footnote-reference" href="#id6" id="id1">[1]</a>. Yesterday I wandered into
  the local Border’s to kill some time after lunch. Nothing to look for,
  just like the books. And there it was, a lone ...</p>
url: /2006/11/11/24-hours-with-the-sony-reader/
categories:
  - geek

---
Right, I know I promised I would tell a story about deploying software based on Django. It’ll have to wait [[1]][1]{#id1.footnote-reference}. Yesterday I wandered into the local Border’s to kill some time after lunch. Nothing to look for, just like the books. And there it was, a lone Sony end-cap display with (gasp) live, in-the-flesh [Readers][2] .

> The four word review: hardware hot, software not.
I’ve been lusting after the Sony [LIBRIe][3]  Reader for some time. When I travel, I hate the part of packing where I have to decide what books to take; I start with a pile of at least half-a-dozen, and end up limiting myself to two. <span class="caps">OK</span>, three. This isn’t to say that I even end up reading all the way through those two. Or three. Just that I tend to be reading a few things at the same time, and don’t like having to decide what I’ll be in the mood for the next week. So the thought of taking a slim device loaded with _several dozen_ of my favorite books, along with technical references and work-related documentation… the mind boggles.

So of course I picked up a Reader yesterday. The four word review: hardware hot, software not. I guess I should clarify: device hot, desktop software not. The device itself is a great text reader. It’s light weight (about 9 ounces), has a display that looks uncannily like paper [[2]][4]{#id2.footnote-reference}. The text is crisp and the controls decent. Yes, there is a weird flash between page changes, but it hasn’t risen to the level of annoyance for me yet. Overall the engineers managed to craft a device that comes closer to the book experience than anything I’ve previously seen.

It’s the desktop software, Sony Connect, that should be flushed. I’ve admittedly only used the software for less than 24 hours, but I can tell you now that I won’t grow to love it. If anything, I’ll uncover more reasons to hate it. But here’s my brief list for now:

<ul class="simple">
  <li>
    The software desperately wants to be iTunes, but just isn’t… I don’t love Apple’s use of custom widgets in iTunes for Windows <a class="footnote-reference" href="#id8" id="id3">[3]</a>, but Sony’s custom widgets are even worse.
  </li>
  <li>
    Like iTunes, Connect embeds a browser in the application for browsing their online store. But somehow they managed to fuck up scrolling: filling out the registration form in the store and press the down arrow to scroll down the page only to find, hey, what happened? Oh, right, the list box on the left that <strong>wasn’t even focused</strong> received the command. Try to use the scroll function on your touchpad? Hah! It’s scrollbars only for you, bitch.
  </li>
  <li>
    Plugging in your reader doesn’t let you sync it… it just shows up in the software and you have to drag things manually <a class="footnote-reference" href="#id9" id="id4">[4]</a>.
  </li>
  <li>
    The Reader is expandable with either Memory Stick or <span class="caps">SD</span> (thank you Sony, for realizing that some people want to use their removable storage media in devices other than yours). Unfortunately the Connect software sort of screws that up too — it will only let you drag files to the <span class="caps">SD</span> card when its connected by way of the Reader <a class="footnote-reference" href="#id10" id="id5">[5]</a>, and even then it makes you choose between internal storage and the <span class="caps">SD</span>. Can’t I just say “put these on the Reader, please?”
  </li>
  <li>
    Finally, library management is too screwed up to describe: importing allegedly-supported formats fails silently with no notice, you can only create “collections” (the Reader’s way of grouping books) on the <span class="caps">PC</span> and then drag them to the Reader, and I couldn’t figure out any way to add a new text to the Collection once its on the Reader without re-creating it on the <span class="caps">PC</span> adding something and dragging it back. Which created a duplicate with the same name. Not exactly what I was going for.
  </li>
</ul>

There is good news, however. Even though the [LIBRIe][3]  was a Japan-only, a community of hackers sprung up to both translate the firmware to English and support user-generated content. That effort seems to have graced the Reader with a ready-made [hacker community][5] , anxious to liberate the Reader from Sony’s ineptitude. Particularly interesting to me is the development of <tt class="docutils literal">libprs500</tt>, a Python library that reverse engineers the <span class="caps">USB</span> protocol and which I successfully used to transfer a text to the Reader under Linux.

We can fix it, we can make it better. We have the technology.

<hr class="docutils" />

<table class="docutils footnote" frame="void" id="id6" rules="none">
  <colgroup><col class="label" /><col /></colgroup> <tr>
    <td class="label">
      <a class="fn-backref" href="#id1">[1]</a>
    </td>

    <td>
      <span class="caps">OK</span>, I’m actually still trying to work out whether there’s really a story there, or if everything’s looking like a nail lately. Stay tuned…
    </td>
  </tr>
</table>

<table class="docutils footnote" frame="void" id="id7" rules="none">
  <colgroup><col class="label" /><col /></colgroup> <tr>
    <td class="label">
      <a class="fn-backref" href="#id2">[2]</a>
    </td>

    <td>
      Maybe a cross between paper and the old-school monochrome Palm Pilot displays… and yes, that’s a compliment.
    </td>
  </tr>
</table>

<table class="docutils footnote" frame="void" id="id8" rules="none">
  <colgroup><col class="label" /><col /></colgroup> <tr>
    <td class="label">
      <a class="fn-backref" href="#id3">[3]</a>
    </td>

    <td>
      Yes, the Sony Connect software is Windows-only right now.
    </td>
  </tr>
</table>

<table class="docutils footnote" frame="void" id="id9" rules="none">
  <colgroup><col class="label" /><col /></colgroup> <tr>
    <td class="label">
      <a class="fn-backref" href="#id4">[4]</a>
    </td>

    <td>
      <span class="caps">OK</span>, so maybe they think people will attain <em>massive</em> etext libraries on their computers which won’t all fit on the Reader. Fair enough, but there should <em>really</em> be a way to “sync all until I run out of space, and then make me choose” option. Don’t make me think, damn it!
    </td>
  </tr>
</table>

<table class="docutils footnote" frame="void" id="id10" rules="none">
  <colgroup><col class="label" /><col /></colgroup> <tr>
    <td class="label">
      <a class="fn-backref" href="#id5">[5]</a>
    </td>

    <td>
      That is, plugged into the Reader, tethered to your <span class="caps">USB</span> port, not plugged directly into your integrated card reader.
    </td>
  </tr>
</table>

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2006-11-11 12:26:51
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      463
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
      24-hours-with-the-sony-reader
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
      geek
    </td>
  </tr>
</table>

 [1]: #id6
 [2]: http://en.wikipedia.org/wiki/Sony_Reader
 [3]: http://en.wikipedia.org/wiki/Librie
 [4]: #id7
 [5]: http://www.mobileread.com/forums/forumdisplay.php?f=115