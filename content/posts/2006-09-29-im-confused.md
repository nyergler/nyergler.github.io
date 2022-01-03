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
    First, I get why they want you to specify `2.0.0.*` instead of `2.0`. This marks your extension as explicitly compatible with security fixes.
  </li>
  <li>
    But I don’t get why `2.0.0.*` is needed for security fixes, when the beta was specified as `2.0b1` or `2.0b2`. Now if the beta had been specified as, say, `1.9.9.0`, I’d get that. I just don’t get why you would <em>choose</em> to maintain two different version number formats.
  </li>
  <li>
    Not to mention that there were different version number formats in both Firefox 1.0 and Firefox 1.5. [Note: I know that the format used to be `1.0+` for security fixes, and I seem to remember that there was YAVNF for Firefox 1.5.]
  </li>
  <li>
    Finally, when I tried to do the upload the first time, it detected that I had a mismatched GUID specified for my extension. If it bothers to expand the XPI and check the GUID, why not just check the version number formatting there instead of requiring human intervention?
  </li>
</ul>

All in all Firefox’s extension mechanism has been wildly successful, in my humble opinion. And with a little (very little, I think) attention to usability for developers, it will continue to be.

**UPDATE:** Let’s say, hypothetically, that the most recent release of your extension only works with Firefox 2.0 and later. So you mark it as such in install.rdf and submit it to AMO.Â  And then you receive an email from a reviewer saying that they couldn’t install it on 1.5.0.7.Â So you reply “yes, that’s right; it’s only >=2.0, as indicated in install.rdf”.Â  Hypothetically this reviewer replies saying “right, I saw that, but does it work on 1.5.0.7?“Â  “Uh, no.“Â  “OK, just checking.“Â  Wow, I’ve never been more confident in “officially” reviewed extensions.



 [1]: http://wiki.creativecommons.org/MozCC
 [2]: https://addons.mozilla.org/firefox/363/
