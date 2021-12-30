---
title: 'Recording Your 15 Minutes of Fame'
author: Nathan Yergler
type: post
date: 2004-11-08T16:46:16+00:00
excerpt: |
  <p>I don’t know about anyone else, but <a class="reference external" href="http://news.google.com">Google
  News</a> has become an important source of news
  in my daily surfing. Even more useful has been the <a class="reference external" href="http://www.google.com/alerts?q=&amp;hl=en">Google News
  Alerts</a>, which allow you to
  receive email notifications of news stories containing specific
  keywords. Now an <span class="caps">RSS</span> or Atom feed of ...</p>
url: /2004/11/08/recording-your-15-minutes-of-fame/
categories:
  - development

---
I don’t know about anyone else, but [Google News][1]  has become an important source of news in my daily surfing. Even more useful has been the [Google News Alerts][2] , which allow you to receive email notifications of news stories containing specific keywords. Now an <span class="caps">RSS</span> or Atom feed of said stories would be even better, but News Alerts are a start.

At [Creative Commons][3] , we use News Alerts to keep up on our exposure in the press, and record the mentions in our [press blog][4] . Today I finished whipping up a little utility to make the job easier. GNAimport is a Python script which reads email messages from a specified mailbox (currently <span class="caps">POP3</span>), checks if they come from Google News Alerts, and then proceeds to parse the message in to a series of News Alerts. Each News Alert is then run through a series of handlers, which could do things like spit out an Atom feed or grab the contents of the <span class="caps">URL</span>. In the case of <span class="caps">CC</span>, the handler interfaces with a [Zope][5]  Python Script to create [SimpleBlog][6]  entries.

You can find the source to GNAimport.py, along with the code for the SimpleBlog Python script, [here][7] . To use it you’ll need to set the mail server, username and password at the top. The list of handlers to use is specified in _main_.

Let me know if you find it useful or find bugs; enjoy.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2004-11-08 16:46:16
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      230
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
      recording-your-15-minutes-of-fame
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

 [1]: http://news.google.com
 [2]: http://www.google.com/alerts?q=&hl=en
 [3]: http://creativecommons.org
 [4]: http://creativecommons.org/press
 [5]: http://zope.org
 [6]: http://plone.org/newsitems/news_item.2004-05-30.2594378408
 [7]: http://yergler.net/projects/gnaimport