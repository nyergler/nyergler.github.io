---
title: 'Eclipse Wish List'
author: Nathan Yergler
type: post
date: 2004-06-23T06:47:05+00:00
excerpt: |
  <p>I have a confession: I’m enamoured with a Java <span class="caps">IDE</span>.
  <a class="reference external" href="http://eclipse.org">Eclipse</a>, to be specific. I knew it was a
  respectable <span class="caps">IDE</span>. I used it to teach my Java class last year, and it
  worked reasonably well. With my work on
  <a class="reference external" href="http://yergler.net/projects/ccsaver">ccSaver</a>, I downloaded the
  release candidate for 3.0 ...</p>
url: /2004/06/23/eclipse-wish-list/
categories:
  - development

---
I have a confession: I’m enamoured with a Java <span class="caps">IDE</span>. [Eclipse][1] , to be specific. I knew it was a respectable <span class="caps">IDE</span>. I used it to teach my Java class last year, and it worked reasonably well. With my work on [ccSaver][2] , I downloaded the release candidate for 3.0, and was blown away. It’s intuitive, packed with features and not a total dog in the performance category (at least once it’s up and running). Which leads me to the rub: why can’t I use it for all my development? Well, there’s a couple of things I wish it had, and maybe one day I’ll find them or get around to coding them.

<ul class="simple">
  <li>
    True support for Python files; I’m obviously not alone in this one, as witnessed by the <a class="reference external" href="http://www.python.org/cgi-bin/moinmoin/EclipsePythonIntegration">number of plug-ins</a> aimed at integrating Python with Eclipse. It’s just that I’ve yet to find one that actually, well, works.
  </li>
  <li>
    Support for JavaScript. This should be easy. After all, it’s just a subset of Java, right? Anyway, far fewer people seem interested in this, but it would allow me to work with things like <a class="reference external" href="http://yergler.net/projects/mozcc">mozCC</a> in Eclipse. Of course, I would like a way to manage the entire development process, which leads me to…
  </li>
  <li>
    Support for developing Mozilla plug-ins. This is the one that gets me the most excited. Eclipse already has support for things like the “build” process and testing in an external container. Wouldn’t it be cool if you could create a Firefox Extension in Eclipse, have it manage the <a class="reference external" href="http://www.bengoodger.com/software/mb/extensions/packaging/extensions.html">install.rdf</a>, and then provide testing facilities. As an added bonus, why not support for <span class="caps">XUL</span>, ala the <a class="reference external" href="http://www.eclipse.org/vep/">Eclipse Visual Editor Project</a>. Currently building <span class="caps">XUL</span> code can be a royal pain in the ass; a graphical editor for <span class="caps">XUL</span> files would lower the bar to a reasonable level.
  </li>
</ul>

So, anybody? anybody?

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2004-06-23 06:47:05
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      143
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
      eclipse-wish-list
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
      development
    </td>
  </tr>
</table>

 [1]: http://eclipse.org
 [2]: http://yergler.net/projects/ccsaver