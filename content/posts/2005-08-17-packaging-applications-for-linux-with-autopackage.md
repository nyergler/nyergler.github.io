---
title: Packaging Applications for Linux with Autopackage
date: 2005-08-17T16:02:05.000Z
categories:
  - development
  - projects
slug: packaging-applications-for-linux-with-autopackage
---
One of the most frequent [<span class="caps">STRIKEOUT</span>:complaints]requests I receive for ccPublisher and ccLookup is for Linux packages. As one user pointedly put it, “how free can your app be if you don’t even support a free Operating System?” While I took issue with the user’s tone and statement (packaging does not necessarily equal support), I know that ccPublisher is more difficult to run from source than it should be. My stock answer to these requests has been that Linux packages are coming “real soon now” and “definitly by 2.0”. Well, with work on 2.0 moving along, I turned my attention to packaging this week. The approach I’ve chosen won’t make everyone happy, but I think it’s a good compromise for a small organization.

So what format are we packaging? <span class="caps">RPM</span>? <span class="caps">DEB</span>? Neither. We’re using [autopackage][1] . Autopackage is fairly slick — it uses a package specification file to build an installer. When the user runs the installer, they’ll either see a text, <span class="caps">GTK</span> or <span class="caps">QT</span> version of the front end, whatever’s available. Autopackage also allows us to be rather flexible with our dependencies. We decided early on that unlike the Mac <span class="caps">OS</span> X and Windows versions of ccPublisher, the Linux packages would actually require Python and wxPython as dependencies. There are lots of reasons for this, but the biggest one is that in my experiments “freezing” just doesn’t work as well under Linux. So Autopackage lets us specify dependencies using “skeleton” files. All I had to do was write a simple skeleton for wxPython that sets the appropriate environment variables with the installed version.

Finally, a major change in ccPublisher 2 is the split of the actual application from a more generic framework. The goal here is to make life easier for maintainers of derivative apps (like [Ourmedia Publisher][2] ) — [<span class="caps">STRIKEOUT</span>:if] when we find a bug, fixing it in ccPublisher will generally fix it in other derivative apps. Autopackage makes life slightly easier in this respect by allowing us to specify a dependency on our framework (which I’m calling P6 for the time being) as you’d expect. If a user already has a P6 application (like ccPublisher) installed, Autopackage will just use that installation. If not, it will seamlessly download the dependency and install it. Slick.



 [1]: http://autopackage.org
 [2]: http://ourmedia.org/tools
