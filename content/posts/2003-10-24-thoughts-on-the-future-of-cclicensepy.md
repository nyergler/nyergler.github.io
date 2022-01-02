---
title: Thoughts on the future of ccLicense.py
date: 2003-10-24T10:28:26.000Z
slug: thoughts-on-the-future-of-cclicensepy
categories:
  - ccRdf
---
With the Validator up and running, I’ve been thinking more about cclicense.py, and how it could be used on it’s own. My conclusion is that in an effort to make it handle all the <span class="caps">RDF</span> requirements of the Validator, I’ve pretty much screwed it up for use on it’s own. Not that it couldn’t be used on its own, but the APIs are inconsistent, poorly documented and incomplete. I’d like to remedy that so it feels like I’ve completed something else. To that end, I think these are the goals for a good Python <span class="caps">API</span> for Creative Commons licenses:

<ul class="simple">
  <li>
    the ability to consume and emit existing licenses in <span class="caps">RDF</span>
  </li>
  <li>
    the flexibility to discover new licensing terms through introspecting the incoming <span class="caps">RDF</span>
  </li>
  <li>
    the ability to get and set basic license permissions
  </li>
  <li>
    intelligent handling of Work, Agent and other “sub-objects”
  </li>
  <li>
    clarity of <span class="caps">API</span> so that simple solutions are obvious and complex solutions are clearly possible
  </li>
</ul>

I think the biggest problem I have with the current <span class="caps">API</span> is that it is very biased towards consuming and reading licenses; a successful <span class="caps">API</span> should probably have a balance between reading and writing licenses.
