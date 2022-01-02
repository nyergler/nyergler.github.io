---
title: 'i18n HTML: Bring the Pain'
date: 2010-03-01T23:21:20.000Z
categories:
  - CC
  - development
tags:
  - cc
  - i18n
  - license engine
  - zope
slug: i18n-html-bring-the-pain
---
I have to stay up a little later this evening than I’d planned, so as a result I’m finally going through all the tabs and browser windows I’ve had open on my personal laptop. I think some of these have been “open” for _months_ (yes, there have been browser restarts, but they’re always there when the session restores). One that I’ve meant to blog is Wil Clouser’s [post on string substitution in .po files][1] . It’s actually [at least] his second post on the subject, recanting his [prior advice][2] , coming around to what others told him previously: **don’t use substitution strings in .po files.**

I wasn’t aware of Chris’s previous advice, but had I read it when first published, I would have nodded my head vigorously; after all, that’s how we _did_ it. Er, that’s how we, uh, _do_ it. And we’re not really in a position to change that at the moment, although we’ve certainly looked pretty hard at the issue.

A bit of background: One of the core pieces of technology we’ve built at Creative Commons is the [license chooser][3] . It’s a relatively simple application, with a few wrinkles that make it interesting. It manages a lot of requests, a lot of languages, and has to spit out the right license (type, version, and jurisdiction) based on what the user provides. The really interesting thing it generates is some <span class="caps">XHTML</span> with RDFa that includes the license badge, name, and any additional information the user gives us; it’s this metadata that we use to generate the copy and paste attribution <span class="caps">HTML</span> on the deed. So what does this have to do with [internationalization][4] ? The <span class="caps">HTML</span> is internationalized. And it contains substitutions. Yikes.

To follow in the excellent example of <span class="caps">AMO</span> and Gnome, we’d start using English as our <tt class="docutils literal">msgid</tt>s, leaving behind the current symbolic keys of the past. Unfortunately it’s not quite so easy. Every time we look at this issue (and for my first year as <span class="caps">CTO</span> we really looked; [Asheesh][5]  can atest we looked at it again and again) and think we’ve got it figured out, we realize there’s another corner case that doesn’t quite work.

The real issue with the <span class="caps">HTML</span> **is** the <span class="caps">HTML</span>: [zope.i18n][6] , our <span class="caps">XSLT</span> selectors<sup>†</sup>, the <span class="caps">ZPT</span> parse tree: none of them really play all that well with <span class="caps">HTML</span> <tt class="docutils literal">msgid</tt>s. The obvious solution would be to get rid of the <span class="caps">HTML</span> in translation, and we’ve tried doing that, although we keep coming back to our current approach. I guess we’re always seduced by keeping all the substitution in one place, and traumatized by the time we tried assembling the sentences from smaller pieces<sup>‡</sup>.

So if we accept that we’re stuck with the symbolic identifiers, what do we do? Build tools, of course. This wasn’t actually an issue until we started using a “real” translation tool — [Pootle][7] , to be specific. Pootle is pretty powerful, but some of the features depend on having “English” <tt class="docutils literal">msgid</tt>s. Luckily it has no qualms about <span class="caps">HTML</span> in those <tt class="docutils literal">msgid</tt>s, it has decent [<span class="caps">VCS</span>][8]  support, and we know how to write post-commit hooks.

To support Pootle and provide a better experience for our translators, we maintain two sets of <span class="caps">PO</span> files: the “<span class="caps">CC</span> style” symbolic <tt class="docutils literal">msgid</tt> files, and the “normal” English <tt class="docutils literal">msgid</tt> files. We keep a separate “master” <span class="caps">PO</span> file where the msgid is the “<span class="caps">CC</span> style” <tt class="docutils literal">msgid</tt>, and the “translation” is the English <tt class="docutils literal">msgid</tt>. It’s this file that we update when we need to make changes, and luckily using that format actually makes the extraction work the way it’s supposed to. Or close. And when a user commits their work from Pootle (to the “normal” <span class="caps">PO</span> file), a post-commit hook keeps the other version in sync.

While we’ve gotten a lot better at this and have learned to live with this system, it’s far from perfect. The biggest imperfection is its custom nature: I’m still the “expert”, so when things go wrong, I get called first. And when people want to work on the code, it takes some extra indoctrination before they’re productive. My goal is still to get to a single set of <span class="caps">PO</span> files, but for now, this is what we’ve got. Bring the pain.

<hr class="docutils" />

<sup>†</sup> For a while, at least. We’re working on a [new version of the chooser][9]  driven by our the license <span class="caps">RDF</span>. This will be better for re-use, but not really an improvement in this area.

<sup>‡</sup> This works great in English, but in languages where gender is more strongly expressed in the word forms, uh, not so much.



 [1]: http://micropipes.com/blog/2009/09/01/using-substitution-strings-in-po-files/
 [2]: http://micropipes.com/blog/2007/07/26/ten-tips-for-website-localization/
 [3]: http://creativecommons.org/choose/
 [4]: http://en.wikipedia.org/wiki/Internationalization_and_localization
 [5]: http://asheesh.org/
 [6]: http://pypi.python.org/pypi/zope.i18n
 [7]: http://translate.sourceforge.net/wiki/pootle/index
 [8]: http://en.wikipedia.org/wiki/Revision_control
 [9]: http://code.creativecomons.org/viewgit/cc.engine.git
