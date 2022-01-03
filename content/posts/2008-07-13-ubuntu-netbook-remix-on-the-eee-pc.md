---
title: Ubuntu Netbook Remix on the Eee PC
date: 2008-07-13T20:39:53.000Z
categories:
  - geek
tags:
  - eee pc
  - netbook remix
  - ubuntu
slug: ubuntu-netbook-remix-on-the-eee-pc
---
Last year when Asus released the original Eee PC 7xx series, a colleage and I made a lunch-time trek to Central Computers down the street and each picked up a 701 with 4 GB SSD and Linux. The stock distribution is Xandros based. That’s great since Xandros is Debian based itself, but not so great since it seemed configured specifically to resemble Windows in many ways. Progress, right?

Shortly after purchasing my Eee I installed [eeeXubuntu][1]  on it. This configuration actually worked pretty well. Combined with an additional 4 GB of storage in the form of an SD card I carried the Eee with me as my sole computer for a week in Europe in January. Upon my return, however, the Eee saw less and less usage. In retrospect I’m not sure that the decline had anything to do with the Eee at all — all my non-work computing declined dramatically during the first half of the year. The small form factor of the Eee still called out for use, so I dabbled with it periodically. One weekend I tried installing a Sugar shell (successfully, for some definition of success, I guess). Another I tried updating my eeeXubuntu installation from 7.10 to 8.04, without success (disk space issues). When I saw [Ubuntu Netbook Remix][2] , I decided I wanted to try that on the Eee. The combination of a focused, single window user interface and specialized launcher seemed like a good combination for the space constrained display.

Today I successfully installed Ubuntu 8.04 and the Netbook Remix on my Eee.

![][3]

The steps were actually pretty straight forward:

<ol class="arabic simple">
  <li>
    I installed Ubuntu 8.04 <a class="reference external" href="https://help.ubuntu.com/8.04/installation-guide/i386/boot-usb-files.html">using a USB stick</a>. When it came time to select tasks, I didn’t select anything to get a minimal installation.
  </li>
  <li>
    Added the <a class="reference external" href="http://array.org/ubuntu/index.html">Array.org repository</a> and installed a kernel with Eee-specific customizations.
  </li>
  <li>
    Added the <a class="reference external" href="https://launchpad.net/netbook-remix">Netbook Remix repositories</a> and fired up `aptitude`. At this point I just picked my way through the packages in the `ubuntu-desktop` task, picking those I wanted. In particular I omitted things related to Bluetooth or CD support (since I have hardware for neither).
  </li>
  <li>
    Installed the `ume-launcher` and other Netbook packages.
  </li>
</ol>

If these instructions seem a little thin it’s because I mostly just followed the instructions of others, both found in the excellent [Eee User wiki][4] .

<ul class="simple">
  <li>
    <a class="reference external" href="http://wiki.eeeuser.com/getting_ubuntu_8.04_to_work_perfectly">Getting 8.04 Running on an Eee PC</a>
  </li>
  <li>
    <a class="reference external" href="http://wiki.eeeuser.com/ubuntu_netbook_remix">Installing Netbook Remix</a>
  </li>
</ul>

I’m heading to OSCON next week so I’m going to play with the installation this week to determine whether I can use it as my sole machine for that trip.



 [1]: http://wiki.eeeuser.com/ubuntu:eeexubuntu:home
 [2]: http://www.canonical.com/netbooks
 [3]: http://yergler.net/blog/wp-content/uploads/2008/07/ubuntu-nbr.png
 [4]: http://wiki.eeeuser.com/
