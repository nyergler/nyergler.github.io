---
title: 'Testing with Fixtures'
author: Nathan Yergler
type: post
date: 2007-02-25T12:48:58+00:00
excerpt: |
  <p>Following Jim’s talk on zc.ngi, I attended Kumar McMillan talk on using
  Fixtures to test your programs. According to McMillan, fixtures differ
  from mock objects in one important way: they use real objects with real
  data. I haven’t used fixtures or mock objects much, so that was ...</p>
url: /2007/02/25/testing-with-fixtures/
categories:
  - pycon2007
  - python
  - testing

---
Following Jim’s talk on zc.ngi, I attended Kumar McMillan talk on using Fixtures to test your programs. According to McMillan, fixtures differ from mock objects in one important way: they use real objects with real data. I haven’t used fixtures or mock objects much, so that was a useful distinction.

McMillan is the developer of the [fixture][1]  package, which provides a way of loading and referencing test data for your application. <tt class="docutils literal">fixture</tt> also allows you to write tests against fixture objects using either a mixin or a decorator[1]_. Fixture supports loading data into SQLAlchemy and SQLObject; <span class="caps">CSV</span> and possible Django support are also under consideration.

Fixture is a relatively young project, but it does appear to be useful for testing data-driven applications.

<table class="docutils footnote" frame="void" id="id1" rules="none">
  <colgroup><col class="label" /><col /></colgroup> <tr>
    <td class="label">
      [1]
    </td>

    <td>
      For testing with <a class="reference external" href="http://python.org/pypi/nose">nose</a>.
    </td>
  </tr>
</table>

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2007-02-25 12:48:58
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      498
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
      testing-with-fixtures
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
      pycon2007, python, testing
    </td>
  </tr>
</table>

 [1]: http://code.google.com/p/fixture/