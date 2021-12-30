---
title: 'My Mozilla Wishlist'
author: Nathan Yergler
type: post
date: 2003-11-10T10:54:07+00:00
excerpt: |
  <p>I’m working on some fixes/improvments to mozCC, and I’ve realized that
  there’s a few things that would make Mozilla development a lot easier.</p>
  <p>First, a way to watch events as they happen. There are several instances
  where I know I want to respond to an event ...</p>
url: /2003/11/10/my-mozilla-wishlist/
categories:
  - development

---
I’m working on some fixes/improvments to mozCC, and I’ve realized that there’s a few things that would make Mozilla development a lot easier.

First, a way to watch events as they happen. There are several instances where I know I want to respond to an event that the browser fires, but I’m not sure what to hook to. For example, switching tabs. In this case I was able to examine the tabbrowser.xul file and figure it out. But wouldn’t it be easier to just turn on **event listening** and see the events scroll by?

Second, a <span class="caps">XUL</span> introspector. If I want to know how the browser renders an element, it’d be real handy to have the ability to enter **introspection mode** and selectively reveal the <span class="caps">XUL</span> behind an element. Again, this can be accomplished through source exploration, but the idea here is convenience.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2003-11-10 10:54:07
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      37
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      layout:
    </th>

    <td class="field-body">
      post
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      slug:
    </th>

    <td class="field-body">
      my-mozilla-wishlist
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      comments:
    </th>

    <td class="field-body">
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      category:
    </th>

    <td class="field-body">
      development
    </td>
  </tr>
</table>