---
title: 'Licenses & Attribution in Firefox: OpenAttribute'
date: 2010-12-29T16:00:52.000Z
categories:
  - mozCC
tags:
  - add-on
  - cc
  - drumbeat
  - firefox
  - mozcc
  - OpenAttribute
slug: licenses-attribution-in-firefox-openattribute
---
Seven years ago I started working on MozCC, an add-on for Firefox that exposed Creative Commons license information embedded in web pages. Little did I know that add-on would be the start of a career with <span class="caps">CC</span>, eventually leading me to San Francisco, and subsequently around the globe to talk about <span class="caps">CC</span>’s technology. MozCC was dropped from active maintenance somewhere around Firefox 3, but of the tools I built during my first couple years at <span class="caps">CC</span>, it’s the one I still get the most questions about.

This summer, Igor Lukanin [worked][1]  on a Google Summer of Code project for <span class="caps">CC</span> to develop a replacement for MozCC, an add-on for Firefox that would expose license and attribution information. While the project wasn’t totally successful, it did produce an add-on that detected <span class="caps">CC</span> licenses in pages, and exposed details about them.

Last month I had the opportunity to attend [Learning, Freedom, and the Web][2] , the first [Mozilla Drumbeat][3]  Festival, in Barcelona, Spain. One of the issues identified by attendees was that, while there are plenty of works being licensed under <span class="caps">CC</span> licenses, knowing how to properly attribute re-use is still a challenge. How many times have we seen presentations made up of beautiful photos, with a simple “<span class="caps">CC</span> licensed, Flickr” under each (if that)? The proposed solution was an [attribution generator][4] : a tool that would generate reasonable attribution for <span class="caps">CC</span> licensed works, based on information available.

I’ve spent the past month or so hacking on Igor’s code in my spare time, using it as the basis of an attribution generator for Firefox. The result is OpenAttribute ([working name][5] , selected by the Drumbeat group), which is available for testing on Firefox 3.6 and above (I’ve been testing with 3.6 and 4.0b8 on Linux). As [Dame Shirley Bassey][6]  [sang][7] , this is “all just a little bit of history repeating.”

[|image0|][8]

OpenAttribute is an add-on that displays a small “<span class="caps">CC</span>” icon in the <span class="caps">URL</span> bar when license information is present. Clicking that icon displays the page’s license information and, importantly, copy and paste <span class="caps">HTML</span> you can use to attribute the work. You can click the “More Information” button to display the details on licensed objects in the page.

[|image1|][9]

There’s still work to be done, but at this point I think it’s ready for broader testing. You can [download the add-on][10]  and find [the code][11]  on github. Feedback, questions, suggestions should all probably go to the [attrib-generator Google Group][12] .



 [1]: http://labs.creativecommons.org/2010/07/11/gsoc-firefox-extension-status-report/
 [2]: http://learningfreedomandtheweb.org/folio/
 [3]: http://drumbeat.org/
 [4]: https://wiki.mozilla.org/Drumbeat/Attribution_generator
 [5]: http://etherpad.mozilla.com:9000/OpenAttribute-names
 [6]: http://en.wikipedia.org/wiki/Shirley_Bassey
 [7]: http://en.wikipedia.org/wiki/History_Repeating_(song)
 [8]: /media/2010/12/Screenshot-Radical-Decoupling-Designing-for-Web-3.0-Mozilla-Firefox-4.0-Beta-8.png
 [9]: /media/2010/12/openattribute-page-info.png
 [10]: https://github.com/downloads/nyergler/openattribute-firefox/openattribute-0.8.xpi
 [11]: https://github.com/nyergler/openattribute-firefox
 [12]: http://groups.google.com/group/attrib-generator/topics?hl=en
