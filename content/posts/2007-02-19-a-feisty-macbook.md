---
title: A Feisty MacBook
date: 2007-02-19T17:55:46.000Z
categories:
  - geek
slug: a-feisty-macbook
---
After the HP woes (which are incidentally ongoing, and if they didn’t make me so persistently pissed and angry I might actually write about them) and a nice tax refund check have caused me to go notebook shopping. After some looking I decided on a Black Macbook. After picking it up from [Sweetwater][1] , I promptly set about getting Linux loaded on it. I had done some looking before purchase, and knew the process wouldn’t be exactly seamless. It ended up being easier than expected in some areas and harder in others.

I primarily used the [Community MacBook][2]  instructions from the Ubuntu wiki. Some brief notes on deviations when installing [Ubuntu 7.04 (Feisty) Herd 3][3]  on a new Macbook[1]_:

<ol class="arabic simple">
  <li>
    You can skips steps 6 and 7 completely. When you reboot after the installation completes you may receive an error message when selecting Linux. Just reboot, and select the rEFIt boot option to “enter rEFIt shell”. You’ll see the “do you want me to fix the MBR?” message; select Yes, reboot and you’re up and going.
  </li>
  <li>
    The wifi chipset on the newest MacBook (and perhaps MacBook Pros) is currently unsupported by <a class="reference external" href="http://madwifi.org/">MadWifi</a> (<a class="reference external" href="http://madwifi.org/ticket/1001">bug report</a>). However, <a class="reference external" href="http://ndiswrapper.sourceforge.net">ndiswrapper</a> is able to wrap the Windows driver just fine. One report I read said to use a DLink driver. That worked for the most part, but caused intermittent kernel panics. Switching to the Lenovo driver, as described <a class="reference external" href="http://wiki.debian.org/MacBook">here</a> [STRIKEOUT:resolved that problem] improved the situation. (update 20 Feb 2007: the Lenovo driver is better, but still causes a kernel panic when I connect to a particular network; not sure what’s up with that)
  </li>
  <li>
    The latest Feisty kernel (2.6.20-8) seems to bork the keyboard and trackpad. I just set grub to use 2.6.20-6, and all is well.
  </li>
  <li>
    Speaking of grub, you don’t seem to actually have keyboard support in grub… not sure what’s going on with that, since it works just fine in rEFIt.
  </li>
  <li>
    Getting the <a class="reference external" href="http://simon.vanderlinden.eu.org/macbook-howto-emulate-the-trackpad-as-a-synaptics-touchpad-with-ubuntu/">double/triple-tapping to work on the Trackpad</a> requires loading the `appletouch` module before `usbhid`. Not being one to really crave fucking with `initrd`, I just wrote a little script and installed it as `/etc/rc2.d/S03appletouch`. It’s a bit of a blunt instrument, but I fully expect that it’s just a temporary fix until things are fixed upstream:
  </li>
</ol>

```
#! /bin/sh /sbin/rmmod appletouch /sbin/rmmod usbhid /sbin/modprobe appletouch /sbin/modprobe usbhid
```

Overall it makes a great Linux notebook: sleep and hibernate work out of the box, the sound is good, and the battery life is pretty decent too. Oh, and it’s pretty. Always important.

---



 [1]: http://sweetwater.com
 [2]: https://help.ubuntu.com/community/MacBook
 [3]: http://cdimage.ubuntu.com/releases/feisty/herd-3/
