---
title: Peer to Peer Calendaring
date: 2004-09-15T14:58:29.000Z
categories:
  - geek
slug: peer-to-peer-calendaring
---
Catching up on some infrequent blog reads, I see that [OSAF][1]  has [abandoned][2]  the idea of peer to peer calendaring for Chandler. While I understand Mitch (and OSAF’s) reasoning, I’m hopeful someone will step in once a dog food release is available and re-implement the idea.

Why? My partner works for a small university counseling center, and they currently use GroupWise, the campus standard, for scheduling. While GroupWise does great for basic scheduling, it’s not extensible in a way that allows them to track additional client metrics in a convenient way. Let me rephrase that: if it’s extensible, it’s beyond my skills and the services offered by the university IT department. So I was hopeful that I would be able to quickly add metric tracking to Chandler to create a peer-to-peer, vertical solution for their office. [HIPPA][3]  and other privacy concerns rule out using a 3rd party server, as Mitch proposes in his post, and the university is queasy about running WebDav servers internally. So I guess Garrett’s Access app which currently tracks metrics lives to see another day.



 [1]: http://osafoundation.org
 [2]: http://blogs.osafoundation.org/mitch/000683.html#000683
 [3]: http://www.hipaa.org/
