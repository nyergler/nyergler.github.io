---
title: 'Closures Explained'
author: Nathan Yergler
type: post
date: 2004-10-26T06:58:16+00:00
excerpt: |
  <p>Closures have been tossed about for a while now as <em>the</em> test of
  coolness for an interpreted language. Frankly, I’ve never understood
  exactly what they were, assuming that if I needed them, I’d figure it
  out. I only knew that Python’s support for them was limited to ...</p>
url: /2004/10/26/closures-explained/
categories:
  - development

---
Closures have been tossed about for a while now as _the_ test of coolness for an interpreted language. Frankly, I’ve never understood exactly what they were, assuming that if I needed them, I’d figure it out. I only knew that Python’s support for them was limited to use of <tt class="docutils literal">lambda</tt> constructs, which tend to be a little frightening (in my humble opinion).

Well Martin Fowler has [posted][1]  a write-up on closures in Ruby, and along the way he actually explains what they are and why they’re cool in an understandable way. [Ivan Moore][2]  has gone one further and [translated][3]  the examples into Python. I actually came across Ivan’s translation first, and my initial thought after reading through the examples was “yeah, so what?” After reading Martin’s explanation of closures, though, there’s definitly something lost in the translation.

First, Martin provides both direct translations using lambda and “idiomatic” translations using list comprehensions. I think it should be pointed out that the idiomatic translations, while performing the same task, do not demonstrate the usefulness of closures. They may well demonstrate the usefulness of list comprehensions, but that’s a different animal all together.

The lambda-based direct translations retain the idea of passing code blocks, but seem to loose some of their conciseness. Maybe it’s just my aversion to lambda in general, but the Ruby syntax seems cleaner and more straightforward.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2004-10-26 06:58:16
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      222
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
      closures-explained
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

 [1]: http://martinfowler.com/bliki/Closures.html
 [2]: http://ivan.truemesh.com/
 [3]: http://ivan.truemesh.com/archives/000392.html