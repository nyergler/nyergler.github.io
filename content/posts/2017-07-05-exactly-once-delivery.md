---
title: Exactly Once Delivery
date: 2017-07-06T04:03:44.000Z
categories:
  - architecture
  - aside
tags:
  - architecture
  - distributed systems
  - remind
format: aside
slug: exactly-once-delivery
---
At [Remind][1] I helped build the announcement and chat message delivery
platform. With thousands of messages streaming through a system that bridged
Heroku and our AWS VPC, network partition and other failures were real
occurrences, which led to some creative work ensuring messages were only
delivered once to each recipient. So I was interested to see [two][2]
[articles][3] posted within a day of each other talking about "exactly once
delivery".

TL;DR: It's really hard, a lot of the systems wind up looking alike (ie,
two-phase ack), and the one we built probably wasn't as bullet proof as we
thought. The interesting question wasn't "Are we doubling up?" or "Are we
dropping things?", but "How will we know when either happens?"

 [1]: https://remind.com
 [2]: https://segment.com/blog/exactly-once-delivery/
 [3]: https://www.confluent.io/blog/exactly-once-semantics-are-possible-heres-how-apache-kafka-does-it/
