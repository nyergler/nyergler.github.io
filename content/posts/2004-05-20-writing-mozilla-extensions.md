---
title: Writing Mozilla Extensions
date: 2004-05-20T08:43:54.000Z
categories:
  - development
slug: writing-mozilla-extensions
---
Over the past 6 months, I’ve begun writing [two][1]  [different][2]  Mozilla-based extensions. One for Thunderbird, one for Mozilla Suite/Fire{bird|fox}. In my experience, Mozilla is an amazingly powerful and flexible platform: it provides a cross-platform foundation to build applications on, but more importantly it’s an application that has the right attitude. The attitude of “we’re building the best app we can, but lots of smart people don’t work for us, so we’ll give them the tools they need to make the app (and their lives) better.” That’s cool; that’s the right attitude to have. Of course, extending Mozilla through an extension is easier said than done in many ways. I have yet to find a site listing the “one, best way” to put together an extension. There’s lots of ways to do it, and as a result, lots of confusion when the two examples you’re drawing from use two different approaches.

With that and the coming [Firefox 1.0 extension format change][3] , I decided to put together something I’m calling DemoExt. The goal of DemoExt is to provide the simplest amount of functionality necessary to demonstrate how to make a localized, cross-platform extension that works with Firefox and Mozilla Suite. It currently does the following:

<ul class="simple">
  <li>
    overlays the browser window, adding an item to the status bar (this seemed like the simplest example of modifying the browser UI)
  </li>
  <li>
    provides a simple preferences/options dialog, both in Firefox and Mozilla Suite
  </li>
  <li>
    uses localization files to store strings (this was always way too hard for me to figure out, so this was as much a learning exercise for me as anything else)
  </li>
</ul>

That’s it! In addition to these “features”, the DemoExt package has a few tricks up it’s sleeve as well:

<ul class="simple">
  <li>
    a `build.sh` script which generates an XPI in the new 1.0 format
  </li>
  <li>
    an `install.js` script which installs the DemoExt into the users’ profile, mimicking the 1.0 Firefox approach
  </li>
  <li>
    an `extension.rdf` which provides the Firefox 1.0 format metadata
  </li>
  <li>
    `newext.py`, a Python script which generates a new source tree from the demo tree, with the appropriate files/directories renamed; hopefully this will allow people to get started writing extension faster, without worrying about how to install them or how to lay out their directory structure
  </li>
</ul>

There are still a couple of things I’m working on. First, I need to make the preferences code load the defaults from the demoext_prefs.js file. I want to make newext.py a little smarter about how it generates the new tree. Finally, I’d like to create a similar package for Thunderbird, since the current code is very browser-oriented.

You can download DemoExt [here][4] , or browse the [CVS tree][5]  . As always suggestions, feedback and corrections are welcome. Enjoy!



 [1]: http://yergler.net/projects/mozcc
 [2]: http://yergler.net/projects/quickfile
 [3]: http://weblogs.mozillazine.org/ben/archives/005380.html
 [4]: http://yergler.net/projects/demoext/releases
 [5]: http://yergler.net/cvs/viewcvs.cgi/demoext/
