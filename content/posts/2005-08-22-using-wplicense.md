---
title: Using wpLicense
date: 2005-08-22T06:49:26.000Z
categories:
  - wpLicense
slug: using-wplicense
---
Ted is trying to use the [wpLicense][1]  WordPress plugin and ran into some problems. So he [wrote a little blog entry][2]  and when it showed up in my Trackback queue, I went to leave a comment, but can’t — you must be registered, and it appears registration is turned off (at least the link is, and I’m too lazy to try and find the URL). So here’s my reply; I’m dropping it here because classes start today, so I don’t know how long it’ll be before I get around to updating the actual documentation:

> Hi Ted, thanks for trying the plugin. The most common reason the plugin doesn’t display the license icon and link has to do with themes. WordPress provides a “footer” hook which wpLicense uses, but in order for it to be called, your template must include a call to `wp_footer();`, probably in footer.php. The default theme, Kubrick, does that, so you might look at it’s footer.php for a sample.
>
> I just looked at the documentation again, and that’s not clear, so I’ll try to get that updated. In the meantime, if you still have problems, feel free to email me directly (nathan at yergler dot net).
>
> Thanks again,
>
> Nathan



 [1]: http://yergler.net/projects/wplicense
 [2]: http://tedernst.com/wp/?p=265
