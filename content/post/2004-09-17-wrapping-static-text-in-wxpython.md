---
title: 'Wrapping Static Text in wxPython'
author: Nathan Yergler
type: post
date: 2004-09-17T11:35:35+00:00
excerpt: |
  <p>In addition to packing for <span class="caps">NYC</span> this morning, I’m working on getting a
  new release of ccTag out the door. I’m working on lots of <span class="caps">UI</span> issues at
  the moment, and part of that relates to
  <a class="reference external" href="http://wxpython.org">wxPython’s</a> StaticText widget (“Label” to you
  recovering Win32 programmers). Unfortunately, the ...</p>
url: /2004/09/17/wrapping-static-text-in-wxpython/
categories:
  - development

---
In addition to packing for <span class="caps">NYC</span> this morning, I’m working on getting a new release of ccTag out the door. I’m working on lots of <span class="caps">UI</span> issues at the moment, and part of that relates to [wxPython’s][1]  StaticText widget (“Label” to you recovering Win32 programmers). Unfortunately, the StaticText widget doesn’t support automagic word-wrapping, so I’ve derived a new class which may be of interest to others.

StaticWrapText acts like a regular StaticText widget, with the exception that it will attempt to word wrap it’s contents as it’s resized. This makes it much easier to use a single <span class="caps">XRC</span> across platforms where font sizes, etc may impact line breaks in a normal StaticText widget. You can find the source in [stext.py][2] . The source includes the widget class, an <span class="caps">XRC</span> resource handler, and a very simple sample which will execute when you run stext.py directly. The sample demonstrates how to use the <span class="caps">XRC</span> resource handler.

There are a couple areas that could use improvement. Currently the resize is only called when the widget receives an EVT_SIZE event, so it’s possible that your app could start with the text unwrapped. I’ve worked around this by manually calling OnSize on the widget when I create it. Not an ideal solution, but one that works for now.

Second, the word wrap algorithm I wrote is, well, stupid. But it was quick and dirty, so I ran with it. I’m open to suggestions and improvements.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2004-09-17 11:35:35
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      198
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
      wrapping-static-text-in-wxpython
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

 [1]: http://wxpython.org
 [2]: http://yergler.net/projects/stext/stext_py.txt