---
title: 'PyCon Day 2: The Middle Child'
date: 2006-03-07T09:48:03.000Z
categories:
  - pycon2006
slug: pycon-day-2-the-middle-child
---
The second day of PyCon started with Guido’s annual **State of Python** keynote, during which he described some new developments in the Python universe, and things that will be going into Python 2.5. The most interesting new feature to me is the new conditional expression, which will take the format

<tt class="docutils literal"><span class="caps">EXPR1</span> if <span class="caps">COND</span> else <span class="caps">EXPR2</span></tt>

Unlike some others, I don’t care about the syntax — it’s clearer than the ternary operator in C, and it reads “right”. And it was only after Guido pointed out a potential bug in the “classic” way to simulate this in Python that I realized how important this is. The classic way to simulate the conditional expression is

<tt class="docutils literal">(<span class="caps">COND</span> and <span class="caps">EXPR1</span>) or <span class="caps">EXPR2</span></tt>

I don’t know why I didn’t think of this earlier — probably because I haven’t been knowingly been bitten by it yet — but if <span class="caps">EXPR1</span> is False, this falls apart. So it’ll be good to get real support for conditional expressions into the language.

The other interesting bits going with the language are absolute and relative imports and a new with statement. I initially thought this was like Pascal’s with statement — simply a way to reduce the amount of typing you have to do and a way to make your code a little easier to read. Instead it’s much cooler — the object passed to with can have special methods, <tt class="docutils literal">__enter__</tt> and <tt class="docutils literal">__exit__</tt> which are called before and after the block, respectively, regardless of any exceptions thrown. So things like lock acquisition/release, atomic transactions and signaling just got a lot easier.

After Guido’s keynote I attended Jeremy Hylton’s talk on the Python Bytecode Compiler. I really regret that I won’t be able to get compiler construction under by belt before graduating in May, so the Python <span class="caps">AST</span> stuff holds a certain fascination for me. I’m not sure I follow it all right now, but this is yet another instance where I appreciate my assembly language course work. Weird, I know.

One of the talks done by [<span class="caps">OSAF</span>][1]  staffers at this year’s PyCon was on performing internationalization on Chandler. During this talk Brian Kirsch discussed their [PyICU][2]  project which wraps the [Internation Components for Unicode][3]  in a Python <span class="caps">SWIG</span> wrapper. It was mentioned that they looked at the zope.i18n library before deciding to go with <span class="caps">ICU</span>, and during the Q&A session I asked what it was that zope.i18n didn’t do. It seems like <span class="caps">ICU</span> has a much broader scope than just string translation, so it’ll be interesting to see how the Python bindings mature and are integrated into Chandler. In addition to traditional i18n services, Kirsch also touched on converting to and from Unicode in Python. It’s definitely a royal pain in the ass that all strings are not unicode strings, but Kirsch made the point that you should just convert everything to Unicode when it enters your application (decode) and convert back to Bytes when information exists (encode).

After lunch on Saturday I went to a talk about an implementation of the Atom Publishing Protocol for Zope 3. I’m pretty agnostic when it comes to the whole <span class="caps">RSS</span> v. Atom thing, but a standard protocol for publishing information does strike me as useful. Unfortunately the system is still under heavy development. On the up side, the presenter was working on it during the Zope Sprint and in talking to him later in the conference, it sounds like he’s made enough progress to finish the initial implementation (there were some problems distinguishing different types of <span class="caps">HTTP</span> requests, if I understood correctly).

Just before my talk Ian Bicking gave a standing-room-only talk on [Building Pluggable Software with Eggs][4] . Ian managed to provide a good overview of what Eggs are, although most of what he said only really came into focus during the sprint. Or maybe I was just nervous about my talk so I wasn’t really paying attention — either one is possible. Anyway, it was standing room only, the talk scheduled against mine was cancelled, so they scheduled a repeat of it against me at the last minute. Oh well, its not like my talk was particularly spectacular.

So my talk fell during the last slot of the day. I was really proud of myself this year — I actually wrote the paper before doing the slides, and felt like I had put together a compelling “story”. Additionally, I watched some video of myself doing a class presentation the week before the conference in an attempt to figure out how I could improve. It was all in vain. I mean, I don’t think I crashed and burned, but I did rush the material, and as such ran out of steam early. A side effect of rushing through was that I don’t think I ever really made the necessary connection with the audience. Sigh. Hopefully the slides and paper will be useful for others to read through, form their own opinions and ask questions electronically. We’ll see.

After the conference day ended on Saturday Shawn and I went to Fry’s. I heart Fry’s. It’s massive [yes, I know that I sound like a size queen]. I bought a [Nokia 770][5] . It’s pretty.



 [1]: http://osafoundation.org
 [2]: http://pyicu.osafoundation.org/
 [3]: http://www.ibm.com/software/globalization/icu/
 [4]: http://us.pycon.org/zope/talks/talkLocate?year=2006&id=66
 [5]: http://nokia770.com
