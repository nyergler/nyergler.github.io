---
title: Making Music
date: 2004-01-21T11:47:17.000Z
categories:
  - geek
slug: making-music
---
Last weekend I finally upgraded my iMac to Mac OS X 10.3, or [Panther][1] . After using it for a few days, I’d say it’s well worth the price. The changes I’ve noticed aren’t as significant as [Steve][2]  would like you to believe, but combined they improve on what was already an enjoyable user experience. But that’s not what I want to write about.

I also picked up [iLife ’04][3]  at the same time. Ever since I played with [Sonic Foundry’s][4]  (nay, [Sony Media Software’s][5] ) [ACID][6]  when it was first released, I’ve been entranced by loop-based music creation. Reading about [GarageBand][7] , I was once again swept away by the delusion of making my own music. I had to have it.

GarageBand is indeed cool. While I haven’t written my magnum opus yet, I’ve been very impressed by it’s clean, intuitive interface and real time music processing. But I have another idea. I was reading [Lessig][8]  the other day, and he [mentions GarageBand][9] , and the fact that it’s currently CC-less. So I was thinking: how would you add CC licensing to GarageBand? I don’t have an answer to that yet (Apple, are you listening?), but the train of thought led me to an idea I think would be cool. Let me share the process with you, though.

So I was thinking about adding CC license generation to GarageBand, and starting poking around looking for Export hooks, etc. And then I started thinking about consuming CC material **into** GarageBand. I found Apple’s [Loop SDK][10] , and began wondering if I could use that to make CC loops/samples available to GarageBand. Feed it CC content instead of making it produce CC content. I haven’t looked at the SDK yet, but I did remember Lucas Gonze’s work on [specifying CC metadata in SMIL][11] . And an open source [SMIL authoring tool][12] .

And then I thought: what about an application for remixing content using SMIL? It could consume samples (or entire songs) and use SMIL to specify the remix. With repositories of CC licensed music like [OpSound][13]  and [MagnaTune][14]  available, it even seems possible to incorporate sample retrieval and search into the application. And of course, everything it produced could be CC licensed.

I call it Remix.



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
