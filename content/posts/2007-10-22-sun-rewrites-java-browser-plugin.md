---
title: Sun Rewrites Java Browser Plugin
date: 2007-10-22T20:37:34.000Z
categories:
  - development
tags:
  - java
  - plugin
  - Software
slug: sun-rewrites-java-browser-plugin
---
I’m not sure that Java applets are even relevant to software development today, but this interview (via [Ajaxian][1] ) regarding the [rewritten Java browser plugin][2]  caught my attention:

[Java Applets Reborn][3]  from [Dion Almaer][4]  on [Vimeo][5] .

So the most interesting things (to me):

<ul class="simple">
  <li>
    The plugin itself is mostly written in Java. I love these sort of recursive language exercises (see <a class="reference external" href="http://en.wikipedia.org/wiki/PyPy">PyPy</a>), if nothing else for their <a class="reference external" href="http://en.wikipedia.org/wiki/Turtles_all_the_way_down">turtles all the way down</a> effect. But I suppose this actually makes a certain degree of sense: if you have a fixed set of resources and you’re putting lots of them towards improving the JVM/JRE, you can take advantage of those improvements by writing your plugin in Java. They don’t talk about the architecture of the old plugin much, but I wouldn’t be terribly surprised to find out the native-code “shim” used to communicate between the browser and the JVM is easier to maintain than the old plugin was.
  </li>
  <li>
    Applets run in a completely independent process (not just thread).
  </li>
  <li>
    An applet can demand to run with a particular JRE version. They label this “enterprise support.” I’d call it “sanity support.”
  </li>
</ul>

None of this really speaks to whether it’s too little, too late. It seems like a good move on Sun’s part, especially given the recent attention on rich internet applications (RIAs) has focused (not necessarily undeservedly) on [Flash][6] , [Adobe AIR][7]  (the vapor-ware jokes write themselves, don’t they?) and [Microsoft Silverlight][8] . The amount of press and attention may indicate this is an area whose time has come. And while I admit having a begrudging soft spot for Java, it seems that companies (especially capital-“E” “enterprise” companies) who already have lots of in house Java expertise could benefit from being able to extend that knowledge down to the desktop. Maybe.



 [1]: http://ajaxian.com/archives/ken-russell-on-the-new-java-plugin
 [2]: http://ajaxian.com/archives/sun-has-rewritten-the-browser-java-plugin
 [3]: http://vimeo.com/346751/l:embed_346751
 [4]: http://vimeo.com/user275301/l:embed_346751
 [5]: http://vimeo.com/l:embed_346751
 [6]: http://en.wikipedia.org/wiki/Adobe_Flash
 [7]: http://en.wikipedia.org/wiki/Adobe_AIR
 [8]: http://en.wikipedia.org/wiki/Microsoft_Silverlight
