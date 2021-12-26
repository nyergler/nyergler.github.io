---
title: 'First Draft, rdfExtract'
author: Nathan Yergler
type: post
date: 2004-04-02T09:26:34+00:00
excerpt: |
  <p>I’ve just posted the first draft of
  <a class="reference external" href="/projects/rdfextract">rdfExtract</a>, and am actively looking for
  comments and suggestions. As the linked page describes, rdfExtract is a
  pluggable <span class="caps">RDF</span> extraction class. What does that mean, exactly? Well, it
  means that if you want to handle the extraction in some different way
  (say ...</p>
url: /2004/04/02/first-draft-rdfextract/
categories:
  - development

---
I’ve just posted the first draft of [rdfExtract][1] , and am actively looking for comments and suggestions. As the linked page describes, rdfExtract is a pluggable <span class="caps">RDF</span> extraction class. What does that mean, exactly? Well, it means that if you want to handle the extraction in some different way (say, by lowercasing it or something), you just write a function that takes a string (the text to extract from), and returns a list of strings (the <span class="caps">RDF</span> blocks).

I’m developing this for use in the new version of [ccValidator][2] . Instead of tacking support for <span class="caps">LINK</span>’d <span class="caps">RDF</span> onto the existing code for extraction, this will allow me to write a simple function which scans the incoming <span class="caps">HTML</span> for the appropriate <tt class="docutils literal"><<span class="caps">LINK</span>></tt> tag and retrieve the <span class="caps">URL</span> specified.

It’s been suggested that having rdfExtract return Python objects instead of strings would be useful (sort of like a generic [ccRdf][3] ). I agree, but don’t have time to do it now. Any other suggestion, comments, criticisms? Let me [know][4] .

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2004-04-02 09:26:34
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      109
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
      first-draft-rdfextract
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

 [1]: /projects/rdfextract
 [2]: /projects/ccValidator
 [3]: /projects/ccrdf
 [4]: /contact