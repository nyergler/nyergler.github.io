---
title: Ubuntu Netbook Remix on the Eee PC
author: Nathan Yergler
type: post
date: 2008-07-13T20:39:53+00:00
excerpt: |
  <p>Last year when Asus released the original Eee <span class="caps">PC</span> 7xx series, a
  colleage and I made a lunch-time trek to Central Computers down the
  street and each picked up a 701 with 4 <span class="caps">GB</span> <span class="caps">SSD</span> and Linux. The stock
  distribution is Xandros based. That’s great since Xandros is Debian ...</p>
url: /2008/07/13/ubuntu-netbook-remix-on-the-eee-pc/
categories:
  - geek
tags:
  - eee pc
  - netbook remix
  - ubuntu

---
Last year when Asus released the original Eee <span class="caps">PC</span> 7xx series, a colleage and I made a lunch-time trek to Central Computers down the street and each picked up a 701 with 4 <span class="caps">GB</span> <span class="caps">SSD</span> and Linux. The stock distribution is Xandros based. That’s great since Xandros is Debian based itself, but not so great since it seemed configured specifically to resemble Windows in many ways. Progress, right?

Shortly after purchasing my Eee I installed [eeeXubuntu][1]  on it. This configuration actually worked pretty well. Combined with an additional 4 <span class="caps">GB</span> of storage in the form of an <span class="caps">SD</span> card I carried the Eee with me as my sole computer for a week in Europe in January. Upon my return, however, the Eee saw less and less usage. In retrospect I’m not sure that the decline had anything to do with the Eee at all — all my non-work computing declined dramatically during the first half of the year. The small form factor of the Eee still called out for use, so I dabbled with it periodically. One weekend I tried installing a Sugar shell (successfully, for some definition of success, I guess). Another I tried updating my eeeXubuntu installation from 7.10 to 8.04, without success (disk space issues). When I saw [Ubuntu Netbook Remix][2] , I decided I wanted to try that on the Eee. The combination of a focused, single window user interface and specialized launcher seemed like a good combination for the space constrained display.

Today I successfully installed Ubuntu 8.04 and the Netbook Remix on my Eee.

![][3]

The steps were actually pretty straight forward:

<ol class="arabic simple">
  <li>
    I installed Ubuntu 8.04 <a class="reference external" href="https://help.ubuntu.com/8.04/installation-guide/i386/boot-usb-files.html">using a <span class="caps">USB</span> stick</a>. When it came time to select tasks, I didn’t select anything to get a minimal installation.
  </li>
  <li>
    Added the <a class="reference external" href="http://array.org/ubuntu/index.html">Array.org repository</a> and installed a kernel with Eee-specific customizations.
  </li>
  <li>
    Added the <a class="reference external" href="https://launchpad.net/netbook-remix">Netbook Remix repositories</a> and fired up <tt class="docutils literal">aptitude</tt>. At this point I just picked my way through the packages in the <tt class="docutils literal"><span class="pre">ubuntu-desktop</span></tt> task, picking those I wanted. In particular I omitted things related to Bluetooth or <span class="caps">CD</span> support (since I have hardware for neither).
  </li>
  <li>
    Installed the <tt class="docutils literal"><span class="pre">ume-launcher</span></tt> and other Netbook packages.
  </li>
</ol>

If these instructions seem a little thin it’s because I mostly just followed the instructions of others, both found in the excellent [Eee User wiki][4] .

<ul class="simple">
  <li>
    <a class="reference external" href="http://wiki.eeeuser.com/getting_ubuntu_8.04_to_work_perfectly">Getting 8.04 Running on an Eee <span class="caps">PC</span></a>
  </li>
  <li>
    <a class="reference external" href="http://wiki.eeeuser.com/ubuntu_netbook_remix">Installing Netbook Remix</a>
  </li>
</ul>

I’m heading to <span class="caps">OSCON</span> next week so I’m going to play with the installation this week to determine whether I can use it as my sole machine for that trip.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2008-07-13 20:39:53
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      559
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
      ubuntu-netbook-remix-on-the-eee-pc
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
      geek
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      tags:
    </th>

    <td class="field-body">
      eee pc, netbook remix, ubuntu
    </td>
  </tr>
</table>

 [1]: http://wiki.eeeuser.com/ubuntu:eeexubuntu:home
 [2]: http://www.canonical.com/netbooks
 [3]: http://yergler.net/blog/wp-content/uploads/2008/07/ubuntu-nbr.png
 [4]: http://wiki.eeeuser.com/