---
title: 'Bytes, Characters, Codecs, and Strings'
date: 2013-01-26T00:00:00.000Z
categories:
  - training
tags:
  - i18n
  - python
  - unicode
slug: bytes_characters_codecs_strings
---
One of the persistent areas of confusion for many Python developers is Unicode
strings, byte strings, and how they interact. While Python 3 should help ease
some of that pain, many places (including [Eventbrite][1] ) are still running on
Python 2. The problem is made worse by the fact that modern web frameworks
(Django, in our case) attempt to do the Right Thing by using Unicode strings,
but legacy code may assume byte strings with a specific encoding. That
bifurcation can lead to confusion, and make it difficult to refactor code in a
way that can be shared between both "sides of the street".

Towards the end of 2012 I developed a brief training for the web team to help
establish a baseline common understanding of Unicode and string handling in
Python. The [notes from the presentation][2]  are available, and I hope others
find them useful, as well. I'm currently working on some edits to expand areas
that seemed to have lingering confusion, and to address the upcoming shift to
Python 3 more directly. If you have suggestions, you can [contact me][3]  me
with them.



 [1]: http://www.eventbrite.com/
 [2]: http://yergler.net/2012/bytes-chars/
 [3]: /contact
