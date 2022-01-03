---
title: 'Pixel Creek, redux'
date: 2006-08-25T12:31:19.000Z
categories:
  - my life
slug: pixel-creek-redux
---
A while back I [blogged][1]  about my crappy, crappy experience with a local company [Pixel Creek][2] , who happens to be an authorized Apple Service Provider. I didn’t claim that my experience was universal or canonical, simply that the level of service provided was so low I could not imagine them having return business. Apparently I was wrong. Recently a couple of positive comments have showed up on that post, including this from “Terry”.

> Success and Personal attention. That’s been my experience. If you would walk up stairs to the PixelCreek office you would see that portion of the business. If you use the next door, that is the other Adams Remco office, very professional. The people at PixelCreek in Ft Wayne and South Bend have been very good to work with, above and beyond. I understand they do most of their work in customer offices and on in their building, which may be the reason they have not updated that office.
Wow, “Terry” sounds like a satisfied customer. Of course, his comment was posted from the IP address 216.117.5.26. Interestingly enough, the [magic of ARIN][3]  reveals that IP address to be owned by… (wait for it) Pixel Creek! Maybe they resell IPs in their block, I thought. After all, “Terry” used a generic sbcglobal.net email address. So a quick run of `nmap` shows an HTTP server running and a quick bit of `wget` shows that, hey, it redirects to what looks like a webmail HTTP authentication. And look! The realm is **mail.pixelcreek.com**.

Now I’m sure that someone from Pixel Creek wouldn’t _actually_ pretend to be a customer just to defend themselves. Of course, nothing in the comment actually says Terry is a customer; his comments could be equally valid regarding his co-workers. I don’t know and ultimately it doesn’t really matter. I’m just enjoying showing up right below their corporate site in Google search results.



 [1]: http://yergler.net/blog/2006/04/05/pixel-creek-we-you-absolutely-want-the-very-worst/
 [2]: http://www.pixelcreek.com/
 [3]: http://ws.arin.net/cgi-bin/whois.pl?queryinput=216.117.5.26
