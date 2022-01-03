---
title: Closures Explained
date: 2004-10-26T06:58:16.000Z
categories:
  - development
slug: closures-explained
---
Closures have been tossed about for a while now as _the_ test of coolness for an interpreted language. Frankly, I’ve never understood exactly what they were, assuming that if I needed them, I’d figure it out. I only knew that Python’s support for them was limited to use of `lambda` constructs, which tend to be a little frightening (in my humble opinion).

Well Martin Fowler has [posted][1]  a write-up on closures in Ruby, and along the way he actually explains what they are and why they’re cool in an understandable way. [Ivan Moore][2]  has gone one further and [translated][3]  the examples into Python. I actually came across Ivan’s translation first, and my initial thought after reading through the examples was “yeah, so what?” After reading Martin’s explanation of closures, though, there’s definitly something lost in the translation.

First, Martin provides both direct translations using lambda and “idiomatic” translations using list comprehensions. I think it should be pointed out that the idiomatic translations, while performing the same task, do not demonstrate the usefulness of closures. They may well demonstrate the usefulness of list comprehensions, but that’s a different animal all together.

The lambda-based direct translations retain the idea of passing code blocks, but seem to loose some of their conciseness. Maybe it’s just my aversion to lambda in general, but the Ruby syntax seems cleaner and more straightforward.



 [1]: http://martinfowler.com/bliki/Closures.html
 [2]: http://ivan.truemesh.com/
 [3]: http://ivan.truemesh.com/archives/000392.html
