---
title: >-
  Anatomy of a Sherlock Channel; or, How I Learned to Stop Worrying and Love The
  Pain
date: 2004-10-12T18:17:31.000Z
categories:
  - development
slug: anatomy-of-a-sherlock-channel
---
With the release of the [Creative Commons][1]  [Sherlock][2]  [channel][3] , it seems prudent to document some of the development process. The [Sherlock Developer Documentation][4]  implies that developing a channel is easy as pie. As a developer unfamiliar with the tools, I found the process any but straightforward. In retrospect certain things make sense now that I have a working model, but I’m still no expert.

First, the sourcecode for the <span class="caps">CC</span> channel is available in <span class="caps">CVS</span> at the [<span class="caps">CC</span> Tools][5]  SourceForge.net project. The module is named **sherlock**. This may serve as a good jumping off point for someone looking for a working example.

Second, the process involved in developing a Sherlock channel consists of a few distinct steps. Your interface is built using Interface Builder, and consists of a single View. The actual code consists of scripts written in either JavaScript, [XQuery][6]  or both. Events (at least as I know them) are called Triggers, and usually (at least in my code) consist of a piece of JavaScript which does some initial setup and then fires an XQuery script to do the actual scraping.

Finally, things I wish I had known when I started writing my channel:

  * <p class="first">
      When saving your <span class="caps">NIB</span> in Interface Builder, make sure you save it in either “Pre-10.2 Format” or “Both Formats (Pre/Post-10.2)”. If you save it in “10.2 and Later Format” Sherlock will refuse to load your channel.
    </p>

  * <p class="first">
      XQuery has great <span class="caps">XML</span> dissection utilities, but has a really different paradigm than other programming languages. It can’t (so far as I can tell) read directly from the Datastore (which stores the values of the Interface widgets), so everything you need must be passed in as an <tt class="docutils literal">input</tt>. Anything you need to set needs to be returned in the dictionary.
    </p>

  * <p class="first">
      If you want to add more than three items to an NSPopUpButton you need to use the Menu items palette in Interface Builder. This may be obvious to others, but I spent quite a bit of time struggling with figuring out how to initialize the list of options correctly (and get the value back from within XQuery).
    </p>

  * <p class="first">
      Finally, everything is XQuery is an assignment. Well, not everything, but more than you’d expect, so you may as well start thinking that way. For example, an <tt class="docutils literal"><span class="pre">if...then...else</span></tt> (and yes, the <tt class="docutils literal">else</tt> is mandatory) block is actually more like a ternary construct than a decision block. That is, instead of the following:
    </p>

    <pre class="literal-block">if ($foo &gt; 0) then
      let $bar := 5
else
   let $bar := 10
</pre>

    You do this:

    <pre class="literal-block">let $bar := if ($foo &gt; 0) then 5 else 10
</pre>

Additionally, the following resources may or may not be useful to you if you’re contemplating writing a channel.

* [<span class="caps">W3C</span> XQuery 1.0][6]  * [XQuery: Reinventing the Wheel?][7]  (covers some interesting aspects of if syntax) * [a working example of if…then…else syntax][8]

In conclusion, writing a Sherlock Channel was a lot more painful that it felt like it should have been. But I’ll be back; there’s work to be done in the <span class="caps">CC</span> Search Channel, and I’ll continue to post my experiences here.



 [1]: http://creativecommons.org
 [2]: http://www.apple.com/macosx/features/sherlock/
 [3]: http://yergler.net/blog/archives/2004/10/12/get-your-cc-fix-here
 [4]: http://developer.apple.com/documentation/AppleApplications/Conceptual/Sherlock/
 [5]: http://cctools.sourceforge.net
 [6]: http://www.w3.org/TR/xquery/
 [7]: http://www.xmlportfolio.com/xquery.html
 [8]: http://radio.weblogs.com/0108956/2002/11/25.html
