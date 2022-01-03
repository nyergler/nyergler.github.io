---
title: Testing with Fixtures
date: 2007-02-25T12:48:58.000Z
categories:
  - pycon2007
  - python
  - testing
slug: testing-with-fixtures
---
Following Jim’s talk on zc.ngi, I attended Kumar McMillan talk on using Fixtures to test your programs. According to McMillan, fixtures differ from mock objects in one important way: they use real objects with real data. I haven’t used fixtures or mock objects much, so that was a useful distinction.

McMillan is the developer of the [fixture][1]  package, which provides a way of loading and referencing test data for your application. `fixture` also allows you to write tests against fixture objects using either a mixin or a decorator[1]_. Fixture supports loading data into SQLAlchemy and SQLObject; CSV and possible Django support are also under consideration.

Fixture is a relatively young project, but it does appear to be useful for testing data-driven applications.



 [1]: http://code.google.com/p/fixture/
