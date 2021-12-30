---
title: 'Peer to Peer Calendaring'
author: Nathan Yergler
type: post
date: 2004-09-15T14:58:29+00:00
excerpt: |
  <p>Catching up on some infrequent blog reads, I see that
  <a class="reference external" href="http://osafoundation.org"><span class="caps">OSAF</span></a> has
  <a class="reference external" href="http://blogs.osafoundation.org/mitch/000683.html#000683">abandoned</a>
  the idea of peer to peer calendaring for Chandler. While I understand
  Mitch (and <span class="caps">OSAF</span>’s) reasoning, I’m hopeful someone will step in once a
  dog food release is available and re-implement the idea.</p>
  <p>Why? My ...</p>
url: /2004/09/15/peer-to-peer-calendaring/
categories:
  - geek

---
Catching up on some infrequent blog reads, I see that [<span class="caps">OSAF</span>][1]  has [abandoned][2]  the idea of peer to peer calendaring for Chandler. While I understand Mitch (and <span class="caps">OSAF</span>’s) reasoning, I’m hopeful someone will step in once a dog food release is available and re-implement the idea.

Why? My partner works for a small university counseling center, and they currently use GroupWise, the campus standard, for scheduling. While GroupWise does great for basic scheduling, it’s not extensible in a way that allows them to track additional client metrics in a convenient way. Let me rephrase that: if it’s extensible, it’s beyond my skills and the services offered by the university <span class="caps">IT</span> department. So I was hopeful that I would be able to quickly add metric tracking to Chandler to create a peer-to-peer, vertical solution for their office. [<span class="caps">HIPPA</span>][3]  and other privacy concerns rule out using a 3rd party server, as Mitch proposes in his post, and the university is queasy about running WebDav servers internally. So I guess Garrett’s Access app which currently tracks metrics lives to see another day.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2004-09-15 14:58:29
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      192
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
      peer-to-peer-calendaring
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
      geek
    </td>
  </tr>
</table>

 [1]: http://osafoundation.org
 [2]: http://blogs.osafoundation.org/mitch/000683.html#000683
 [3]: http://www.hipaa.org/