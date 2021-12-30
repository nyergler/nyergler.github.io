---
title: reMarkable e-Ink Tablet Review
author: Nathan Yergler
type: post
date: 2017-11-05T20:03:03+00:00
url: /2017/11/05/remarkable-e-ink-tablet/
categories:
  - geek
tags:
  - eink
  - gadget
  - reading
  - review
kind:
  - Note

---
I’ve long fantasized about an e-Ink tablet: something I could use for writing, sketching, and reading. The battery life, the “flat” appearance, etc all seemed perfect. Up until now I’ve settled for a Kindle for reading, chaffing against the Amazon ecosystem. I periodically look for Arduino or Raspberry Pi compatible e-ink displays (larger than 4”) that I might be able to hack into something larger, but always come to the conclusion that I don’t have the bandwidth for a project of that size. Back in December I came across the [reMarkable][1], which promised a “paper-like” e-ink experience. No app store, no browser, just a pad of paper and document viewer.

My reMarkable arrived a few weeks ago, and I’ve been carrying it with me to work and to coffee shops since. Overall I’m impressed with the hardware and the _writing_ experience. I suppose this shouldn’t be a surprise given their stated goal: a paper tablet. But I am surprised: the latency of the stylus and tactile feel against the “canvas” display is excellent. It’s by far my favorite part of the reMarkable experience.

Even though I pre-ordered, I was skeptical of how low the latency of a stylus on e-Ink could be. That bar was further raised when I started using an iPad Pro with the Apple Pencil for drawing. After using the reMarkable for a few days to journal, take notes, and doodle, it was clear that it’s a completely different animal than the iPad + Pencil. The friction between the tablet and the stylus brings a tactile feel to writing that a glass display just doesn’t have. Quite simply, the reMarkable team has done a better job transposing the paper experience to something electronic than I expected.

So if I was skeptical and still pre-ordered, why? I assumed that even if (when) the writing/drawing experience fell short, I’d still have a “big Kindle”, something of a dream. I had been reading more on my iPad when I ordered, and while I liked the bigger display, I wished it was e-ink display. Turns out my expectations were completely wrong: as good as the writing experience is, the ePub reading experience is bad.

Specifically, the ePub reading experience is bad. It’s slow to render, and frequently skips pages, mis-renders them, or gets stuck with strange page or column breaks. It’s simply not usable with ePub documents at this point. The reMarkable does much better with PDFs: in my experience thus far they render accurately and reliably, and it’s easy/natural to make notes or annotate them.

I think this reveals the reMarkable’s strength and technical approach: it’s a hardware PDF reader and annotation device. And in that capacity it’s very good.

Luckily the hardware feels more mature than the software package. I have found that the three buttons — previous, home, next — aren’t positioned great for writing full pages: my palm occasionally presses one, jumping me to the next page. I’ve taken to rotating it 180 degrees while writing to keep the buttons out of the way. It’s also not clear to me what sort of life I should expect from the stylus nibs: they’re clearly replaceable, as the device comes with 10 replacements. After I’d used the reMarkable daily for a couple of weeks I found the digitizer had started missing strokes on occasion. As an experiment I replaced the nib, and the problem went away. I’m going to stretch this second one as far as I can to see what sort of life I can expect.

Finally, the reMarkable has the best free software compliance of any hardware device I’ve seen: the settings dialog clearly lists every piece of open source software used, along with its license. Because some of the software is GPLv3 licensed, they also provide root access to the device over SSH. Poking around it appears that it’s running a QT Embedded application on Linux. I’m planning to try some other experiments when I have a moment (can I write a piece of software that uses the e-ink via frame buffer?).

Overall the reMarkable has been a fun device to play with. It’s replaced my paper journal for the last three weeks, and I’m experimenting with how it might replace other paper that remains in my life. I haven’t quite figured out how it complements or meshes with my iPad Pro, but it definitely doesn’t replace it: the Pro is (ironically?) a much more general purpose computer than the reMarkable.

 [1]: http://remarkable.com