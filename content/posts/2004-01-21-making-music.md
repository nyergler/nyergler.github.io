---
title: 'Making Music'
author: Nathan Yergler
type: post
date: 2004-01-21T11:47:17+00:00
excerpt: |
  <p>Last weekend I finally upgraded my iMac to Mac <span class="caps">OS</span> X 10.3, or
  <a class="reference external" href="http://www.apple.com/macosx/">Panther</a>. After using it for a few
  days, I’d say it’s well worth the price. The changes I’ve noticed aren’t
  as significant as <a class="reference external" href="http://www.apple.com/pr/bios/jobs.html">Steve</a>
  would like you to believe, but combined they ...</p>
url: /2004/01/21/making-music/
categories:
  - geek

---
Last weekend I finally upgraded my iMac to Mac <span class="caps">OS</span> X 10.3, or [Panther][1] . After using it for a few days, I’d say it’s well worth the price. The changes I’ve noticed aren’t as significant as [Steve][2]  would like you to believe, but combined they improve on what was already an enjoyable user experience. But that’s not what I want to write about.

I also picked up [iLife ’04][3]  at the same time. Ever since I played with [Sonic Foundry’s][4]  (nay, [Sony Media Software’s][5] ) [<span class="caps">ACID</span>][6]  when it was first released, I’ve been entranced by loop-based music creation. Reading about [GarageBand][7] , I was once again swept away by the delusion of making my own music. I had to have it.

GarageBand is indeed cool. While I haven’t written my magnum opus yet, I’ve been very impressed by it’s clean, intuitive interface and real time music processing. But I have another idea. I was reading [Lessig][8]  the other day, and he [mentions GarageBand][9] , and the fact that it’s currently <span class="caps">CC</span>-less. So I was thinking: how would you add <span class="caps">CC</span> licensing to GarageBand? I don’t have an answer to that yet (Apple, are you listening?), but the train of thought led me to an idea I think would be cool. Let me share the process with you, though.

So I was thinking about adding <span class="caps">CC</span> license generation to GarageBand, and starting poking around looking for Export hooks, etc. And then I started thinking about consuming <span class="caps">CC</span> material **into** GarageBand. I found Apple’s [Loop <span class="caps">SDK</span>][10] , and began wondering if I could use that to make <span class="caps">CC</span> loops/samples available to GarageBand. Feed it <span class="caps">CC</span> content instead of making it produce <span class="caps">CC</span> content. I haven’t looked at the <span class="caps">SDK</span> yet, but I did remember Lucas Gonze’s work on [specifying <span class="caps">CC</span> metadata in <span class="caps">SMIL</span>][11] . And an open source [<span class="caps">SMIL</span> authoring tool][12] .

And then I thought: what about an application for remixing content using <span class="caps">SMIL</span>? It could consume samples (or entire songs) and use <span class="caps">SMIL</span> to specify the remix. With repositories of <span class="caps">CC</span> licensed music like [OpSound][13]  and [MagnaTune][14]  available, it even seems possible to incorporate sample retrieval and search into the application. And of course, everything it produced could be <span class="caps">CC</span> licensed.

I call it Remix.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2004-01-21 11:47:17
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      75
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
      making-music
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

 [1]: http://www.apple.com/macosx/
 [2]: http://www.apple.com/pr/bios/jobs.html
 [3]: http://www.apple.com/ilife/
 [4]: http://sonicfoundry.com
 [5]: http://mediasoftware.sonypictures.com/
 [6]: http://mediasoftware.sonypictures.com/products/acidfamily.asp
 [7]: http://www.apple.com/ilife/garageband/
 [8]: http://lessig.org/blog
 [9]: http://lessig.org/blog/archives/001664.shtml
 [10]: http://developer.apple.com/sdk/#AppleLoops
 [11]: http://web.resource.org/cc/modules/smil/
 [12]: http://www.smilgen.org/index.html
 [13]: http://opsound.org
 [14]: http://magnatune.com