---
title: CC RDF in JavaScript
date: 2004-01-20T11:43:42.000Z
categories:
  - ccRdf
  - mozCC
slug: cc-rdf-in-javascript
---
It’s taking much longer than I’d like, but I’m slowly making progress on a new release of [mozCC][1] . The update, when it’s finally available, will hopefully play better with more browsers and have fewer “quirks” (read: [bugs][2] ).

As part of the development process, I decided that Jim Ley’s excellent [all-JavaScript RDF parser][3]  just wasn’t a good fit. There were an increasing number of things I wanted to do that were CC specific and uncomfortable to accomodate with the code base. What I needed was a library designed to manipulate licenses. Like [ccRdf][4]  does for Python. So taking what I learned from [QuickFile][5] , I put together ccRdf.js.

**ccRdf.js** is a limited port of ccRdf to JavaScript. Instead of attempting to provide facilities for both creation and consumption of RDF, it focuses solely on consuming RDF licenses. The API is similar, and it seems to work fairly well thus far. You can find the source [here][6] . There currently isn’t any other documentation, so [e-mail][7]  me if you run into problems or have questions.



 [1]: http://yergler.net/projects/mozcc
 [2]: http://mozcc.mozdev.org/bugs.html
 [3]: http://jibbering.com/rdf-parser/
 [4]: http://yergler.net/projects/ccrdf
 [5]: http://www.yergler.net/averages/archives/2003/12/14/filing_mail_in_thunderbird
 [6]: http://yergler.net/projects/ccrdf/javascript/ccrdf.js
 [7]: http://www.yergler.net/pages/contact
