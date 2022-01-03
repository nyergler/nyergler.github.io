---
title: cascading problems
date: 2004-01-15T09:29:34.000Z
categories:
  - mozCC
---
After a 3 week hiatus I’ve begun working on [mozCC][1]  [bugs][2]  again. There’s a handful outstanding, and a few of them are fairly important. OK, they’re all important, but a few are readily visible to most users. These relate to the toolbar button.

Making a toolbar button work in Mozilla Firebird is relatively straight-forward: make a XUL overlay, add some event handlers, and you’re in business. The Mozilla Suite and Netscape, however, are a little trickier. True, the basic steps are the same, but the idea of themes really throws a wrench into the works. Mozilla implements themes using the idea of skins and cascading style sheets (CSS). The problems I’m having relate to the different toolbar-icon sizing in different themes: CSS that works with one theme makes another look awful. And vice versa. As I’ve examined skins and their accompanying JAR files, I’m observing that skin designers can manage the process because they assume control over the entire look and feel: they define the standard toolbar buttons and widget styles as a single unit. I have yet to discover how skins (if they do at all) account for non-standard toolbar widgets.

A quick aside regarding toolbars, the toolbar button, and mozCC. After the last release I received quite a bit of positive e-mail, and a few suggestions. The suggestions related to the toolbar fell into two camps. First, make it configurable in Mozilla/Netscape like it is in Firebird. Second, make it go away. I can’t do anything about the former, and I think the thought process behind the former goes something like this: “I can click on the status bar icons to see details, so don’t go cluttering up my toolbar, damn it!”

So how do I plan to solve these problems? In the tried and true way: by ignoring them. Seriously, I’ve beat my head against this for quite a while, and don’t feel like I’m making any progress. So here’s the new plan: The toolbar button will be designed to work with the Mozilla Classic and Netscape 7 themes. For those using Modern or another theme, there will be an option in Preferences to hide the button. And you’ll still be able to click the status bar icons to see the details. Mozilla Firebird users won’t see any change: they can already hide the icon if they want.

That’s where I’m at. I’m still hacking away on mozCC, and hope to make some serious progress in the next couple weeks. And if anyone knows how to make themes magically work, I’d love to hear it.


 [1]: http://yergler.net/projects/mozcc
 [2]: http://mozcc.mozdev.org/bugs.html
