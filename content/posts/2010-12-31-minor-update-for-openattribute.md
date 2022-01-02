---
title: Minor update for OpenAttribute
date: 2010-12-31T13:02:03.000Z
categories:
  - mozCC
tags:
  - add-on
  - cc
  - drumbeat
  - firefox
  - mozcc
  - OpenAttribute
slug: minor-update-for-openattribute
---
I’ve just pushed a minor update to [OpenAttribute to github][1] . It’s minor in terms of user-facing functionality, but improves support for one important use case, licensing of “objects” in a page.

> **\*Summary:\*** [OpenAttribute][1]  0.8.1 ([<span class="caps">XPI</span>][2] ) fixes Issues [1][3] , [2][4] , [3][5] , and [5][6] . All users should install this update.
[<span class="caps">CC</span> <span class="caps">REL</span>][7]  is Creative Commons’ recommended way to describe licenses and licensed works. It builds on [RDFa][8] , a W3 recommendation, and allows publishers to specify the license and other related information about a work. One of the advantages of building on RDFa was that we could scope the assertions in the page, making it unambiguous (for software) what was being licensed: the page, a particular image or video, or even a specific portion of text. While the initial release of OpenAttribute properly detected the license, it was unable to display the results.

Creative Commons licenses are self-describing using <span class="caps">CC</span> <span class="caps">REL</span>: a tool (like OpenAttribute) can dereference the license and discover information like the human readable name, version, and permissions/requirements/prohibitions. While Igor’s code from GSoC used the [<span class="caps">CC</span> <span class="caps">API</span>][9]  to retrieve this information, it was clear to me that using the license itself is preferable: using self-describing resources on the web allows everyone to play, without registration or integration.

OpenAttribute 0.8 had a somewhat naive implementation of license dereferencing and parsing, which caused problems when there were multiple licensed objects in a page. In the 0.8 release, only information about the last object was displayed in the dialog. OpenAttribute 0.8.1 includes a new [licenseloader][10]  component, which implements some simple serialization for these requests. If multiple requests are made, they’re queued and dereferenced/processed in order.

<hr class="docutils" />

You’ll note that OpenAttribute isn’t available from <span class="caps">AMO</span> yet. That’s partially because I’d like to have some more testing before making it available there. If you try it out and find bugs or have feature requests, you can file those on the [github project][11] .



 [1]: https://github.com/nyergler/openattribute-firefox
 [2]: https://github.com/downloads/nyergler/openattribute-firefox/openattribute-0.8.1.xpi
 [3]: https://github.com/nyergler/openattribute-firefox/issues/closed#issue/1
 [4]: https://github.com/nyergler/openattribute-firefox/issues/closed#issue/2
 [5]: https://github.com/nyergler/openattribute-firefox/issues/closed#issue/3
 [6]: https://github.com/nyergler/openattribute-firefox/issues/closed#issue/5
 [7]: http://wiki.creativecommons.org/CC_REL
 [8]: http://rdfa.info/
 [9]: http://api.creativecommons.org/docs/
 [10]: https://github.com/nyergler/openattribute-firefox/blob/master/module/license.js
 [11]: https://github.com/nyergler/openattribute-firefox/issues
