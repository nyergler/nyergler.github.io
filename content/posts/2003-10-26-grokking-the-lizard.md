---
title: Grokking the Lizard
date: 2003-10-26T13:45:11.000Z
categories:
  - mozCC
---
So I spent most of my morning on Friday attempting to grok the state of Mozilla/Firebird/Gecko plugin development. Actually, I’ve come to realize that plugin is the wrong term: an extension is what I really want to build. It’s another of the Creative Commons [tech challenges][1]  ; building a plugin/toolbar/extension for a web browser which either shows or changes when the page contains licensing meta-data.

After several hours of cursing at <span class="caps">XUL</span>, <span class="caps">RDF</span> and JavaScript, I have a prototype. <span class="caps">OK</span>, less than a prototype, but something: a toolbar button and status bar text that will display licensing <span class="caps">RDF</span> (if any) when clicked. It only works in Mozilla Firebird right now, but it seems to work equally well on all platforms. For the life of me I can’t figure out how to catch navigation events so that I can go about changing the icon, etc. Anybody, anybody?


 [1]: http://creativecommons.org/technology/challenges#challenge_entry_3848
