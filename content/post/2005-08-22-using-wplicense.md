---
title: 'Using wpLicense'
author: Nathan Yergler
type: post
date: 2005-08-22T06:49:26+00:00
excerpt: |
  <p>Ted is trying to use the
  <a class="reference external" href="http://yergler.net/projects/wplicense">wpLicense</a> WordPress plugin
  and ran into some problems. So he <a class="reference external" href="http://tedernst.com/wp/?p=265">wrote a little blog
  entry</a> and when it showed up in my
  Trackback queue, I went to leave a comment, but can’t — you must be
  registered, and it appears registration is turned off ...</p>
url: /2005/08/22/using-wplicense/
categories:
  - wpLicense

---
Ted is trying to use the [wpLicense][1]  WordPress plugin and ran into some problems. So he [wrote a little blog entry][2]  and when it showed up in my Trackback queue, I went to leave a comment, but can’t — you must be registered, and it appears registration is turned off (at least the link is, and I’m too lazy to try and find the <span class="caps">URL</span>). So here’s my reply; I’m dropping it here because classes start today, so I don’t know how long it’ll be before I get around to updating the actual documentation:

> Hi Ted, thanks for trying the plugin. The most common reason the plugin doesn’t display the license icon and link has to do with themes. WordPress provides a “footer” hook which wpLicense uses, but in order for it to be called, your template must include a call to <tt class="docutils literal"><span class="pre">wp_footer();</span></tt>, probably in footer.php. The default theme, Kubrick, does that, so you might look at it’s footer.php for a sample.
>
> I just looked at the documentation again, and that’s not clear, so I’ll try to get that updated. In the meantime, if you still have problems, feel free to email me directly (nathan at yergler dot net).
>
> Thanks again,
>
> Nathan

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2005-08-22 06:49:26
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      323
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      layout:
    </th>

    <td class="field-body">
      post
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      slug:
    </th>

    <td class="field-body">
      using-wplicense
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      comments:
    </th>

    <td class="field-body">
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      category:
    </th>

    <td class="field-body">
      wpLicense
    </td>
  </tr>
</table>

 [1]: http://yergler.net/projects/wplicense
 [2]: http://tedernst.com/wp/?p=265