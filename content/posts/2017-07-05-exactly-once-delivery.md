---
title: Exactly Once Delivery
author: Nathan Yergler
type: post
date: 2017-07-06T04:03:44+00:00
url: /2017/07/05/exactly-once-delivery/
categories:
  - architecture
  - aside
tags:
  - architecture
  - distributed systems
  - remind
format: aside

---
At [Remind][1] I helped build the announcement and chat message delivery platform. With thousands of messages streaming through a system that bridged Heroku and our AWS VPC, network partition and other failures were real occurrences, which led to some creative work ensuring messages were only delivered once to each recipient. So I was interested to see [two][2] [articles][3] posted within a day of each other talking about &#8220;exactly once delivery&#8221;.

TL;DR: It&#8217;s really hard, a lot of the systems wind up looking alike (ie, two-phase ack), and the one we built probably wasn&#8217;t as bullet proof as we thought. The interesting question wasn&#8217;t &#8220;Are we doubling up?&#8221; or &#8220;Are we dropping things?&#8221;, but &#8220;How will we know when either happens?&#8221;

 [1]: https://remind.com
 [2]: https://segment.com/blog/exactly-once-delivery/
 [3]: https://www.confluent.io/blog/exactly-once-semantics-are-possible-heres-how-apache-kafka-does-it/