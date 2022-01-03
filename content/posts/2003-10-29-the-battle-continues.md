---
title: The Battle Continues
date: 2003-10-29T11:02:06.000Z
categories:
  - mozCC
---
So the battle to create a Gecko extension continues. I’m actually making progress and feel like I have all the necessary pieces now. I can:

<ul class="simple">
  <li>
    add an icon to the toolbar and respond to clicks
  </li>
  <li>
    add text and images to the status bar
  </li>
  <li>
    catch navigation events
  </li>
  <li>
    extract RDF from web pages
  </li>
  <li>
    parse the extracted RDF into a series of Triples (thanks to Jim Ley’s excellent all-javascript <a class="reference external" href="http://jibbering.com/rdf-parser/">RDF parser</a>)
  </li>
</ul>

So all that’s left to do is perform some queries on the RDF (which the parser also allows) and put the pieces together. Of course, I also need to figure out how to hack enough XUL together to make a dialog, but hey; how hard can it be?
