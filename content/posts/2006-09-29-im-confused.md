---
title: I’m confused
date: 2006-09-29T07:57:48.000Z
categories:
  - development
slug: im-confused
---
I tried to submit an update for [MozCC][1]  to [addons.mozilla.org][2]  yesterday so that Firefox 1.5 users would receive auto-magic upgrades when they upgraded to Firefox 2.0. I received an email this morning letting me know it’d been rejected; not because it didn’t work, but because of the specified version of the “maximum” supported version of Firefox wasn’t formatted properly.

So a couple of thoughts:

<ul class="simple">
  <li>
    First, I get why they want you to specify <tt class="docutils literal">2.0.0.*</tt> instead of <tt class="docutils literal">2.0</tt>. This marks your extension as explicitly compatible with security fixes.
  </li>
  <li>
    But I don’t get why <tt class="docutils literal">2.0.0.*</tt> is needed for security fixes, when the beta was specified as <tt class="docutils literal">2.0b1</tt> or <tt class="docutils literal">2.0b2</tt>. Now if the beta had been specified as, say, <tt class="docutils literal">1.9.9.0</tt>, I’d get that. I just don’t get why you would <em>choose</em> to maintain two different version number formats.
  </li>
  <li>
    Not to mention that there were different version number formats in both Firefox 1.0 and Firefox 1.5. [Note: I know that the format used to be <tt class="docutils literal">1.0+</tt> for security fixes, and I seem to remember that there was <span class="caps">YAVNF</span> for Firefox 1.5.]
  </li>
  <li>
    Finally, when I tried to do the upload the first time, it detected that I had a mismatched <span class="caps">GUID</span> specified for my extension. If it bothers to expand the <span class="caps">XPI</span> and check the <span class="caps">GUID</span>, why not just check the version number formatting there instead of requiring human intervention?
  </li>
</ul>

All in all Firefox’s extension mechanism has been wildly successful, in my humble opinion. And with a little (very little, I think) attention to usability for developers, it will continue to be.

**<span class="caps">UPDATE</span>:** Let’s say, hypothetically, that the most recent release of your extension only works with Firefox 2.0 and later. So you mark it as such in install.rdf and submit it to <span class="caps">AMO</span>.Â  And then you receive an email from a reviewer saying that they couldn’t install it on 1.5.0.7.Â So you reply “yes, that’s right; it’s only >=2.0, as indicated in install.rdf”.Â  Hypothetically this reviewer replies saying “right, I saw that, but does it work on 1.5.0.7?“Â  “Uh, no.“Â  “<span class="caps">OK</span>, just checking.“Â  Wow, I’ve never been more confident in “officially” reviewed extensions.



 [1]: http://wiki.creativecommons.org/MozCC
 [2]: https://addons.mozilla.org/firefox/363/
