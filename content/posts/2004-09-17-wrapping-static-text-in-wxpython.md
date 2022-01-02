---
title: Wrapping Static Text in wxPython
date: 2004-09-17T11:35:35.000Z
categories:
  - development
slug: wrapping-static-text-in-wxpython
---
In addition to packing for <span class="caps">NYC</span> this morning, I’m working on getting a new release of ccTag out the door. I’m working on lots of <span class="caps">UI</span> issues at the moment, and part of that relates to [wxPython’s][1]  StaticText widget (“Label” to you recovering Win32 programmers). Unfortunately, the StaticText widget doesn’t support automagic word-wrapping, so I’ve derived a new class which may be of interest to others.

StaticWrapText acts like a regular StaticText widget, with the exception that it will attempt to word wrap it’s contents as it’s resized. This makes it much easier to use a single <span class="caps">XRC</span> across platforms where font sizes, etc may impact line breaks in a normal StaticText widget. You can find the source in [stext.py][2] . The source includes the widget class, an <span class="caps">XRC</span> resource handler, and a very simple sample which will execute when you run stext.py directly. The sample demonstrates how to use the <span class="caps">XRC</span> resource handler.

There are a couple areas that could use improvement. Currently the resize is only called when the widget receives an EVT_SIZE event, so it’s possible that your app could start with the text unwrapped. I’ve worked around this by manually calling OnSize on the widget when I create it. Not an ideal solution, but one that works for now.

Second, the word wrap algorithm I wrote is, well, stupid. But it was quick and dirty, so I ran with it. I’m open to suggestions and improvements.



 [1]: http://wxpython.org
 [2]: http://yergler.net/projects/stext/stext_py.txt
