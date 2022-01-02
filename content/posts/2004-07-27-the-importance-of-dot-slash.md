---
title: The Importance of dot-slash
date: 2004-07-27T11:23:15.000Z
categories:
  - development
  - mozCC
slug: the-importance-of-dot-slash
---
Sometimes it’s the little things. Often it’s the little things, I guess. I like to write cross-platform software. The less I need to worry about whether I’m building on Mac <span class="caps">OS</span> X, Win 32 or Linux, the happier I am. [mozCC][1]  was one of the first projects I developed that **had** to run on all three platforms, and as such, I wrote a set of scripts and tools for building and testing the code base.

During the development of 0.8.0 I transitioned from my original build script, [make_jar][2]  to a more generic version I developed for [DemoExt][3] , [build.sh][4] , which was generally a “good thing.” Around the same time I noticed that building mozCC on Mac <span class="caps">OS</span> X didn’t work quite right. <span class="caps">OK</span>, it didn’t work at all. It would appear to build, but installing that build just didn’t work. Nothing. Nada. No acknowledgment that mozCC was installed at all. Of course, I was in a hurry to get 0.8.0 out the door, so I turned my chair, turned on my Linux box, and proceeded to build there. And funny thing, the builds from Linux worked just fine on Mac <span class="caps">OS</span> X.

Today I’m working on fixing a serious bug in mozCC. I’m at <span class="caps">OSCON</span>, and only have my iBook. And I had completely forgotten about the build problems from 0.8.0. After beating my head against the wall for an hour yesterday and about an hour this morning, I finally figured it out: it’s all about the ./ (dot-slash).

Build.sh is a simple shell script that assembles the necessary files for a Mozilla extension in the appropriate relative locations for the <span class="caps">JAR</span>. To pull out the list of files to zip up into the <span class="caps">JAR</span>, it uses the <span class="caps">UNIX</span> utility <tt class="docutils literal">find</tt>. In particular,

<pre class="literal-block">find ./content -path './*CVS*' -prune -o -type f -print | grep -v ~
</pre>

What I found was that on Linux, find returns a list of files with relative paths and no leading dot-slash. For example,

<pre class="literal-block">1926  06-25-104  12:47   content/mozcc/prefs.xul
 1560  06-25-104  08:25   content/mozcc/prefsOverlay.xul
 2708  06-25-104  12:47   content/mozcc/seamonkey-prefs.xul
.
.
.
</pre>

Mac <span class="caps">OS</span> X (and maybe <span class="caps">BSD</span>, I don’t know how deep this goes), on the other hand, returns files with a leading dot-slash:

<pre class="literal-block">1926  06-25-104  12:47   ./content/mozcc/prefs.xul
 1560  06-25-104  08:25   ./content/mozcc/prefsOverlay.xul
 2708  06-25-104  12:47   ./content/mozcc/seamonkey-prefs.xul
.
.
.
</pre>

And this breaks Mozilla and the extension. A subtle change to the <tt class="docutils literal">find</tt> command, namely removing the dot-slash, fixes the problem (at least on Mac <span class="caps">OS</span> X). I’ll have to test it on Linux to make sure it works in a cross-platform manner, and then I’ll update DemoExt.

Success: the sweet taste of frustration.



 [1]: http://yergler.net/projects/mozcc
 [2]: http://yergler.net/cvs/viewcvs.cgi/mozcc/make_jar?rev=1.3&content-type=text/vnd.viewcvs-markup
 [3]: http://yergler.net/blog/archives/2004/05/20/writing-mozilla-extensions
 [4]: http://yergler.net/cvs/viewcvs.cgi/demoext/browser/build.sh?rev=HEAD&content-type=text/vnd.viewcvs-markup
