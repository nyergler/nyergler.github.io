---
title: “This means something”
date: 2005-01-14T08:00:00.000Z
categories:
  - geek
slug: this-means-something
---
Last night in my Computer Language Design class I tuned out the professor after the first 5 minutes. It’s not that the class doesn’t interest me, it’s just that an involved discussion of the taxonomy of languages (presented by a man I can only describe as the stereotypical aging CPA) puts me to sleep. So instead I read ahead in the textbook. Actually I read the end of the textbook, the section on functional and logical languages.

So it suprised me this morning when reading the [Python Daily URL][1]  to see [Bill][2]  talking [about guards][3]  .

Bill points to [Erlang][4]  as a model for guards and generics. I have to confess complete ignorance regarding erlang. But I like what I saw in [Haskell][5] . A brief example, defining the `fact` (factorial) function:

<pre class="literal-block">fact 0 = 1 -- zero step
fact n = n * fact (n-1) -- induction step
</pre>

Haskell also has cool pattern matching and lazy evaluation. For example, you can create an infinite length list of even, positive integers with the following:

<pre class="literal-block">pos_ints = [2,4..]
</pre>

I’m not sure what the “Pythonic” version of Haskell guards looks like, but the simplicity and elegance really appeals to me. And it seems sorta weird (in a cool way) that less than 12 hours after reading about functional languages, guards and generics, I find others talking about the same thing.



 [1]: http://www.pythonware.com/daily
 [2]: http://llimllib.f2o.org/blog
 [3]: http://llimllib.f2o.org/blog/serve/entry/pygenerics
 [4]: http://erlang.org
 [5]: http://www.haskell.org/
