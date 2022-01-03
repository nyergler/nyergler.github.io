---
title: My Mozilla Wishlist
date: 2003-11-10T10:54:07.000Z
categories:
  - development
---
I’m working on some fixes/improvments to mozCC, and I’ve realized that there’s a few things that would make Mozilla development a lot easier.

First, a way to watch events as they happen. There are several instances where I know I want to respond to an event that the browser fires, but I’m not sure what to hook to. For example, switching tabs. In this case I was able to examine the tabbrowser.xul file and figure it out. But wouldn’t it be easier to just turn on **event listening** and see the events scroll by?

Second, a XUL introspector. If I want to know how the browser renders an element, it’d be real handy to have the ability to enter **introspection mode** and selectively reveal the XUL behind an element. Again, this can be accomplished through source exploration, but the idea here is convenience.
