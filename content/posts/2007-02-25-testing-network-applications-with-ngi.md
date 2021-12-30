---
title: Testing Network Applications with NGI
author: Nathan Yergler
type: post
date: 2007-02-25T12:48:06+00:00
excerpt: |
  <p>Following the keynote this morning, I attended Jim Fulton’s talk on
  testing network applications with the Network Gateway Interface. Jim
  advocates the use of doctests, in particular doctests which allow you to
  mix the documentation and narrative together (note to self: write a post
  about why this is compelling ...</p>
url: /2007/02/25/testing-network-applications-with-ngi/
categories:
  - pycon2007
  - python
  - testing

---
Following the keynote this morning, I attended Jim Fulton’s talk on testing network applications with the Network Gateway Interface. Jim advocates the use of doctests, in particular doctests which allow you to mix the documentation and narrative together (note to self: write a post about why this is compelling). When programming network applications, writing tests can be really, really hard: there can be sockets, time.sleep(), threads, etc.

In response to running into these problems with testing <span class="caps">ZEO</span>, Jim developed a library called the Network Gateway Interface (<span class="caps">NGI</span>). The goal of <span class="caps">NGI</span> is that application code doesn’t touch socket code. <span class="caps">NGI</span> splits the network application into two pieces: the application side and the implementation side. The application side doesn’t need to be thread aware (or even safe) and uses events to communicate with the implementation side. And the implementation side handles the actual socket or transport work.

Jim’s talk used the example of a simple application, z2monitoring, to demonstrate the <span class="caps">NGI</span>. The goal of z2monitoring was to monitor and get status from a running Zope 2 application at the time when status is needed most: when the application is bogged down, responding to requests. When testing with <span class="caps">NGI</span>, you create a special testing connection, such as a TextConnection (which just uses plain text). The connection conforms to the <tt class="docutils literal">IConnection</tt> interface, which also provides a way to set the connection handler. The connection handler (<tt class="docutils literal">IConnectionHandler</tt>, natch), is used to respond to events like input, connection close and exceptions.

In addition to the async, event-driven interface, zc.ngi provides a simple, blocking file-like <span class="caps">API</span>. This is convenient for developing simple, single-task applications.

Jim spent a short part of his talk discussing about the benefits of non-determinism, such as the existing <span class="caps">ZEO</span> implementation. One of these was the “opportunity for the unexpected.” Of course, Jim also noted (with an unclear amount of irony) that production is also a form of testing.

<span class="caps">NGI</span> 1.0 was released just before PyCon, and this will probably be the last release. [Un]fortunately, Jim recently found that Twisted provides facilities for this style of programming and testing. Given this, zc.ngi will probably only live on (if at all) as a simplified facade over Twisted’s facilities.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2007-02-25 12:48:06
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      497
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
      testing-network-applications-with-ngi
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