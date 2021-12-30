---
title: 'Bridging Wireless & Ethernet networks with a Raspberry Pi'
author: Nathan Yergler
type: post
date: 2020-12-01T04:10:25+00:00
url: /2020/11/30/bridging-wireless-ethernet-networks-with-a-raspberry-pi/
categories:
  - linux
tags:
  - homelab
  - network
  - raspberrypi
kind:
  - Article

---
We recently acquired a second hand Dell laser printer, which was timely: our
inkjet printer is a little long in the tooth, and is starting to require more
frequent head cleaning and nozzle alignment, both of which use that liquid gold
we call &#8220;ink&#8221;.

Unfortunately, the laser printer only supported ethernet out of the box, and
while a wireless adapter _was_ available, it was retailing for over $150.
Fortunately, however, I had a [Raspberry Pi][1] lying around, that I was able to
turn into a working solution.

There are plenty of posts out there talking about bridging networks with
Raspberry Pi and Linux, but most of them seemed to either [assume I care about
systemd][2] (I don&#8217;t), [want to deal with static IP addresses][3] (I
don&#8217;t), or [want to bridge two ethernet networks][4] (I don&#8217;t). So
here&#8217;s what worked for me.

There were two inflection points in getting this to work: the first was
understanding that I don&#8217;t _really_ want a Bridge: I want an ARP[^*]
Proxy. What&#8217;s the difference? Simply put: a Proxy can inspect and modify
traffic going through it, while a Bridge does not. Why do we care about that?
Because wireless access points are fickle creatures, and will often discard
traffic originating from a host they don&#8217;t know about. Additionally, there
are restrictions built into the bridge utilities that prevent you from doing a
direct bridge from ethernet to wireless. By running a proxy, we&#8217;re able to
make the bridged traffic (from our printer) appear as if it&#8217;s originating
from the Raspberry Pi, which the access point _definitely_ knows about.

I knew that DHCP would be involved if I didn&#8217;t want to deal with static IP
addresses. The second inflection point was realizing that in order to make that
work, and to make it transparent-ish from either side of the bridge, I needed to
make sure the ethernet (eth0) and wireless (wlan0) ports had the same IP
address. More on how in a moment.

Here are the steps I followed, largely based on the [Debian wiki][5]:

1. Configure your Raspberry Pi with Raspbian and connect it to your wireless network. Getting this out of the way first will configure WPA supplicant, which is responsible for managing the wireless authentication and pre-shared keys. If you&#8217;re interested, `/etc/wpa_supplicant/wpa_supplicant.conf` will hold your configuration after you&#8217;re connected.

2. Install the proxy daemon and helpers we&#8217;re going to use: `parprouted` and `dhcp-helper`


<pre class="wp-block-code"><code>$ sudo apt-get install parprouted dhcp-helper</code></pre>

3. Configure <code>dhcp-helper</code> to broadcast on <code>wlan0</code>

    Add the following contents to `/etc/default/dhcp-helper`.

    ```
    # relay dhcp requests as broadcast to wlan0
    DHCPHELPER_OPTS="-b wlan0"
    ```

4. Configure mDNS: when your printer magically appears in the Add Printer list,
   that&#8217;s mDNS at work. And we definitely want it to just show up,
   otherwise we&#8217;ll be back in static IP land. To do this, we need to
   reflect messages from one network to the other. Luckily, Avahi, the Linux
   mDNS implementation installed with Raspbian, makes this a one-line change.

    Enable the Reflector in `/etc/avahi/avahi-daemon.conf`.

    ```
    [reflector]
    enable-reflector=yes
    ```

5. Configure your network interfaces

    While we&#8217;re most interested in our ethernet (eth0) and wireless
    (wlan0) interfaces, there are actually three interfaces for us to configure:
    loopback, ethernet, and wireless. I created a file for each in the
    `/etc/network/interfaces.d/` directory.

      **`lo`**

      ```
      auto lo
      iface lo inet loopback</code></pre>
      ```

      **`eth0`**

      ```
      auto eth0
      allow-hotplug eth0
      iface eth0 inet manual
      ```

      **`wlan0`**

      This is where the magic actually happens. I mentioned before that we need to bind the same IP address to both network interfaces. We also need to restart the DHCP Helper and proxy. We wire this up with `post-up` and `post-down` clauses in our `wlan0` configuration: every `post-up` line is executed after the network interface comes up, and every `post-down` line is executed after it goes, ahem, down.

      ```
      auto wlan0
      allow-hotplug wlan0
      iface wlan0 inet dhcp
      wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf
        post-up /sbin/ip addr add $(/sbin/ip addr show wlan0 | perl -wne 'm|^\s+inet (.*)/| && print $1')/32 dev eth0
        post-up /sbin/ifup eth0
        post-up /usr/sbin/parprouted wlan0 eth0
        post-up /etc/init.d/dhcp-helper start
        post-down /usr/bin/killall /usr/sbin/parprouted
        post-down /etc/init.d/dhcp-helper stop
        post-down /sbin/ifdown eth0
      ```

6. Restart.

    At this point your printer should be able to obtain an IP address using DHCP
    from your wireless network, and the printer should show up to your wireless
    clients.

[^*]: Address Resolution Protocol, which is used to map IP addresses to MAC
  addresses. Yeah, I forget it exists, too.

 [1]: https://raspberrypi.org
 [2]: https://raspberrypi.stackexchange.com/questions/88954/workaround-for-a-wifi-bridge-on-a-raspberry-pi-with-proxy-arp
 [3]: https://tldp.org/HOWTO/Proxy-ARP-Subnet/setup.html
 [4]: https://wiki.debian.org/BridgeNetworkConnections
 [5]: https://wiki.debian.org/BridgeNetworkConnectionsProxyArp