---
title: 'Rich Editting with Django and FCKEditor'
author: Nathan Yergler
type: post
date: 2006-08-23T11:39:12+00:00
excerpt: |
  <p>After seeing their tutorial at <span class="caps">OSCON</span> last month, I’ve been playing
  <a class="reference external" href="http://djangoproject.com">Django</a> in my spare time. One of the things
  I wanted to implement was a rich editor for the administrative interface
  (which really is Django’s killer app). There’s information in the wiki
  regarding using the
  <a class="reference external" href="http://code.djangoproject.com/wiki/AddDojoEditor">Dojo ...</a></p>
url: /2006/08/23/rich-editting-with-django-and-fckeditor/
categories:
  - development

---
After seeing their tutorial at <span class="caps">OSCON</span> last month, I’ve been playing [Django][1]  in my spare time. One of the things I wanted to implement was a rich editor for the administrative interface (which really is Django’s killer app). There’s information in the wiki regarding using the [Dojo][2]  editor and [TinyMCE][3] , but neither of those really fit my needs. TinyMCE comes close, but charging for spell check… well, I get that it’s probably a more difficult feature to implement, but I want to be able to try it out before paying. [FCKeditor][4] , on the other hand, has all the features I want, as well as a killer server-side browser that lets users manage images and media files from within the editor.

So looking at FCKEditor, I find that it relies on a server-side “connector” to supply the browser with browsing information. Since I was playing with Django, it somehow seemed, well, _wrong_ to use a <span class="caps">CGI</span> upload connector. So I hacked together a Django-based connector. You can find it over on [Google Code][5] .

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2006-08-23 11:39:12
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      438
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
      rich-editting-with-django-and-fckeditor
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

 [1]: http://djangoproject.com
 [2]: http://code.djangoproject.com/wiki/AddDojoEditor
 [3]: http://code.djangoproject.com/wiki/AddWYSIWYGEditor
 [4]: http://fckeditor.net
 [5]: http://code.google.com/p/django-fckconnector/