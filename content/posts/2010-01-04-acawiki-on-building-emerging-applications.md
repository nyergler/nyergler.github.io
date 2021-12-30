---
title: 'AcaWiki: On Building Emerging Applications'
author: Nathan Yergler
type: post
date: 2010-01-04T22:44:17+00:00
excerpt: |
  <p>I’m woefully late in noting the
  <a class="reference external" href="http://acawiki.org/AcaWiki:PressRelease-2009-10-07">launch</a> of
  <a class="reference external" href="http://acawiki.org/">AcaWiki</a>. Mike does a good job <a class="reference external" href="http://gondwanaland.com/mlog/2009/10/06/acawiki/">exploring the
  sweet spot</a> AcaWiki
  may fill between research blogging and open access journals, and where
  AcaWiki fits into the wiki landscape. AcaWiki is interesting to me for
  two reasons; first, I was the technical ...</p>
url: /2010/01/04/acawiki-on-building-emerging-applications/
categories:
  - development
tags:
  - acawiki
  - cc
  - mediawiki
  - platforms
  - semantic mediawiki
  - smw
  - wiki

---
I’m woefully late in noting the [launch][1]  of [AcaWiki][2] . Mike does a good job [exploring the sweet spot][3]  AcaWiki may fill between research blogging and open access journals, and where AcaWiki fits into the wiki landscape. AcaWiki is interesting to me for two reasons; first, I was the technical lead on the project<sup>†</sup>, and second, it’s another recent example of building a site using [MediaWiki][4]  as a platform. More specifically, we used MediaWiki along with [Semantic MediaWiki][5] , [Semantic Forms][6] , and several [other related extensions][7]  as the platform for the site.

The idea of using a wiki for a community oriented site is far from new. The difference here is that Neeru came to us talking about specific ways people could interact with the site — specific structured data she wanted to organize and capture about academic articles. For anyone familiar with MediaWiki and Wikipedia, the obvious answer is[templates][8] ; Wikipedia uses them extensively to provide a consistent presentation for parts of an articles (messages about the article, citations, etc). The catch is that for someone coming to a site for the first time, who perhaps has not edited a wiki previously, templates are a bit of [inside baseball][9]  — you need to know which one to use, and you need to know how to format them in your article. Of course these are trainable skills, but I suspect for many users they’re non-obvious. Semantic Forms lets us provide a form for entering these fields, which is then translated to a template.

The question that comes up when discussing this approach with non-wiki-philes is, “why use a wiki at all? if all you need are [<span class="caps">CRUD</span>][10]  forms, why not just whip it up in Rails, Django, etc?” The question is a good one — a specialized tool almost always has the potential to look fantastic compared to an off the shelf one. And who wants to learn that weird markup syntax, anyway? The thing is, at the end of the day, AcaWiki isn’t a software project, it’s a community project. There isn’t a team of engineers available to help move the toolset forward. There isn’t staff available to fix bugs and write migration scripts. So using off the shelf tools with active communities is essential to achieving any amount of scalability.

As Mike points out, there are some niches AcaWiki seems primed to fill. While working on the site, however, it was clear there are lots of unanswered questions about how that will actually happen. AcaWiki, like many sites that seek to serve a community of interest in a given area, is an emerging application. The data schema isn’t well defined, and we don’t necessarily know how users are going to interact with the site. The goal is to get something that users can use in place; something that provides just enough structure to encourage newcomers, while retaining the plasticity and flexibility needed to grow and evolve.

As I mentioned before, this is not the first “application” we’ve built using this tool chain; we use MediaWiki and Semantic MediaWiki at [Creative Commons][11]  in many places. We use it to track [Events][12]  our community puts together, and we use it to track things we’d like [developers to work on][13]  (<span class="caps">NB</span>: the latter is woefully out of date and stagnated; perhaps a negative use case for this sort of tool). We even built a system for [tracking grants and projects][14]  using it.

Using MediaWiki and Semantic MediaWiki as an application platform isn’t appropriate for every project and it isn’t a cure all; there are real limitations, like any off the shelf system. In some cases these issues are magnified due to the fact that it’s _not_ explicitly designed as a platform. For applications that rely on community involvement and that are only partially defined, it usually either gets the job done, or brings us far enough along with minimal effort that we can see what the real problem we’re trying to solve is.

AcaWiki is an exciting experiment in building community around academic research and knowledge. It’s also another in a line of interesting experiments with building applications in a different, organic manner. There’s some interesting work in the pipeline for AcaWiki, including data dumps, a shiny [Vector][15] -based skin, and improvements to the forms and templates used. The most interesting work, however, will be the work done by the community.

<hr class="docutils" />

<sup>†</sup> AcaWiki’s founder, Neeru Paharia, was one of <span class="caps">CC</span>’s earliest employees, and she turned to the [<span class="caps">CC</span> technology team][16]  for help with this project.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2010-01-04 22:44:17
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      1209
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
      acawiki-on-building-emerging-applications
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

  <tr class="field">
    <th class="field-name">
      tags:
    </th>

    <td class="field-body">
      acawiki, cc, mediawiki, platforms, semantic mediawiki, smw, wiki
    </td>
  </tr>
</table>

 [1]: http://acawiki.org/AcaWiki:PressRelease-2009-10-07
 [2]: http://acawiki.org/
 [3]: http://gondwanaland.com/mlog/2009/10/06/acawiki/
 [4]: http://www.mediawiki.org/
 [5]: http://semantic-mediawiki.org
 [6]: http://www.mediawiki.org/wiki/Extension:Semantic_Forms
 [7]: http://acawiki.org/Special:Version
 [8]: http://www.mediawiki.org/wiki/Help:Templates
 [9]: http://en.wikipedia.org/wiki/Inside_baseball#As_a_Metaphor
 [10]: http://en.wikipedia.org/wiki/Create,_read,_update_and_delete
 [11]: http://creativecommons.org
 [12]: http://wiki.creativecommons.org/Events
 [13]: http://wiki.creativecommons.org/Developers
 [14]: http://wiki.creativecommons.org/CcTeamspace
 [15]: http://en.wikipedia.org/wiki/Wikipedia:Vector
 [16]: http://labs.creativecommons.org