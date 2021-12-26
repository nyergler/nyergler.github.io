---
title: 'PyBlosxom > Blosxom > MovableType'
author: Nathan Yergler
type: post
date: 2004-02-02T09:04:36+00:00
excerpt: |
  <p>I’ve been working on find/developing/adapting a content management
  solution for my employer, and along the way decided to try out
  <a class="reference external" href="http://blosxom.com">Blosxom</a>. Blosxom is unique among blogging
  systems (well, maybe not…) for it’s use of the filesystem as the
  database. That is, every file with a given ...</p>
url: /2004/02/02/pyblosxom-blosxom-movabletype/
categories:
  - geek

---
I’ve been working on find/developing/adapting a content management solution for my employer, and along the way decided to try out [Blosxom][1] . Blosxom is unique among blogging systems (well, maybe not…) for it’s use of the filesystem as the database. That is, every file with a given extension is an entry. This makes posting ridiculously easy, and also lends itself well to all sorts of manipulations. After playing with it for an hour, I was hooked.

Part of what makes Blosxom so addictive is it’s plugin system. Need to change the way text is processed or outputed? Just add a plugin! Unfortunately, Blosxom is written in [that other scripting language][2] , and not [Python][3] . And given my well-known allergy to the-language-that-shall-remain-nameless, I wasn’t about to dive into plugin land. And that’s where [PyBlosxom][4]  comes in.

You could view PyBlosxom as the needless product of a religious crusade, an unecessary contribution born out of the Python v. Perl (oops, I said it) battle. I disagree. PyBlosxom maintains much of the “zen” of the original: true, there’s more code involved, but the simplistic approach to publishing remains the same. PyBlosxom falls short of the original, though, in the number of plugins available. However, if you know Python, creating plugins is ridiculously easy. I assume the same can be said about the original Blosxom and Perl, but as I said before: I’m allergic.

The discovery of PyBlosxom has led to a couple of decisions. First, I’m going to be publishing yergler.net using PyBlosxom. Over the next few days I’ll be fine-tuning my template and converting my content to plain text files. I’ve been meaning to flesh out non-blog content for a while; PyBlosxom makes it easy enough to actually tackle. After that’s working, I’m planning to convert The Law of Averages to PyBlosxcom as well. Don’t get me wrong: I love the web interface of [MovableType][5] . I just like the ability to hack the code even more.

So will PyBlosxom be used for my corporate project? Not as it stands. One of the requirements is that it needs to support multiple contributors. Multiple non-geek contributors. This is an area where MovableType shines: easy to use, through the web publishing. So maybe I’ll graft a web interface onto PyBlosxom. Maybe I’ll find something different to use. The bottom line, however, is that publishing yergler.net just got a little more interesting.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2004-02-02 09:04:36
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      79
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
      pyblosxom-blosxom-movabletype
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

 [1]: http://blosxom.com
 [2]: http://perl.org
 [3]: http://python.org
 [4]: http://pyblosxom.sf.net
 [5]: http://movabletype.org