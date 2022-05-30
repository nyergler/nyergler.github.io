---
title: mozCC 0.8.0 Now Available
date: 2004-06-29T16:53:20.000Z
categories:
  - mozCC
slug: mozcc-080-now-available
---
(duplicated from [mozCC News][1] )

After an interminable delay and over 60 days since the last [preview][2] , mozCC 0.8.0 is now available. This release represents a major upgrade to the previous codebase, and will hopefully form the basis for the 1.0 release. Features include:

<ul class="simple">
  <li>
    Support for localization. While mozCC still only support English, this opens the door for the addition of new translations. If you’re interested in translating mozCC, <a class="reference external" href="http://yergler.net/projects/mozcc/contact">contact me</a>.
  </li>
  <li>
    Better RDF extraction: mozCC now supports metadata specified as `<a rel="license" <span class="pre">...>`.
  </li>
  <li>
    Performance improvements: mozCC parses and retrieves metadata only once, and allows the browser to continue rendering during retrieval of `<link>`&#8216;d metadata.
  </li>
  <li>
    New, improved details UI. License and work metadata is shown as human-readable strings, as opposed to a semi-mangled tree representation.
  </li>
  <li>
    Support for the new extension manager in Firefox 0.9.
  </li>
</ul>

Installation instructions are available [here][3] . Note that CVS is currently down at [MozDev][4] , so you should only install from yergler.net until that comes back up and the download network is updated. I’ll post a notice here when that happens.

If you are upgrading from a previous version of mozCC, it is **strongly** recommended that you uninstall and restart your browser before installing 0.8.0. Changes to the internal layout of mozCC have made upgrades, well, dicey. For that reason, I'm not enabling the "upgrade" button that appears in the preferences. Sorry, but I can't find a way to make upgrades work consistently well. If you have any questions about this, [drop me a line][5]  .

While this is a major step forward for mozCC, there are a few known issues:

<ul class="simple">
  <li>
    When customizing the toolbar under Mozilla Firefox, the toolbar button looks, well, weird. Screwed up, you may say. Yes, I know.
  </li>
  <li>
    The icon size is a little off in Firefox.
  </li>
</ul>

I anticipate an 0.8.1 release within a week or so to correct these and other bugs. If you find any additional issues, please [contact me][6]  (good) or [file a bug][7]  (better). As always, suggestions, criticism and ideas are welcome.



 [1]: http://yergler.net/projects/mozcc/news
 [2]: http://yergler.net/blog/archives/2004/04/19/mozcc-080-preview
 [3]: http://yergler.net/projects/mozcc/install
 [4]: http://mozdev.org
 [5]: /projects/mozcc/contact
 [6]: http://yergler.net/projects/mozcc/contact
 [7]: http://mozcc.mozdev.org/bugs.html
