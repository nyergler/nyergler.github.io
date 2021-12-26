---
title: 'In Search of Better Bookmarks'
author: Nathan Yergler
type: post
date: 2004-04-30T10:05:07+00:00
excerpt: |
  <p>Earlier this month while working on a research paper I became frustrated
  with the tools available to me. I was conducting research in on-line,
  web-based databases on campus, knowing full well I would need the
  information I found later that day at home. After collecting my inch
  thick stack of ...</p>
url: /2004/04/30/in-search-of-better-bookmarks/
categories:
  - geek

---
Earlier this month while working on a research paper I became frustrated with the tools available to me. I was conducting research in on-line, web-based databases on campus, knowing full well I would need the information I found later that day at home. After collecting my inch thick stack of output from the printer, I wrote [two][1]  [different][2]  posts in quick succession describing my frustration and expressing my desire for a better way to manage the information I found. This post is an attempt to clarify that vision and promote the idea of a better way to manage information found on the web. More simply put, a vision for better bookmarks. The Internet has fundamentally changed the way people communicate. You can debate whether we’ve seen the full extent of that change yet, but the fact is our lives have changed. And mostly for the better. Students today are more likely to use Internet based sources for research, as well as use Internet tools such as instant messaging and e-mail for communication. However, this change is not without it’s own problems. People are increasingly relying upon multiple sources of information to form aggregate opinions and stay informed. Additionally, people are faced with mentally organizing information from a vast array of sources. It seems that ten, twenty years ago, people obtained much of their information from books and periodicals. If they needed to recall a fact or story they had previously read, there was a limited number of sources they needed to search. Today, information workers may read dozens of news sites or blogs daily, in addition to any mailing lists they may participate in. This rise in volume means it’s much more difficult to recall and locate individual pieces of information on demand.

The simple fact is this: information workers are faced with a growing volume of information, and a corresponding need to categorize, quantify and assimilate this information for future use. The focus of this discussion is web-based information, which is probably second only to e-mail in quantity. The traditional method for recording relevant web pages, bookmarks, is woefully inadequate for the task today.

Bookmarks, as we have traditionally known them, are inadequate for several reasons. First, there is the manual nature. A method for marking pages as relevant, important, or note-worthy is definitely important, but often users would like to recall information from pages that were on the cusp on the importance threshold: not quite important enough to warrant their own bookmark, but relevant to some task none the less.

Second, and most importantly, is the task of organization. Major web browsers today allow for the creation of folders and sub-folders to organize bookmarks, but the problem remains that this, too, is a manual time-consuming process. It’s important to note two additional failings of this model. First, a bookmark exists in a single place. A political scientist may wish to track information on both national legislatures and copyright law; a web page describing <span class="caps">EUCD</span> implementation falls under both categories. True, this user could create two bookmarks, one in each folder, but the semantic difference is important. Second, if a user commits to organizing their bookmarks, the process of maintaining that organization is onerous and time consuming. A tenant of Extreme Programming is that you probably won’t be right the first time. Jim’s Second Law of Engineering states that you can’t solve a problem unless you know the answer. These two principles imply that it is unlikely a user will know the “correct” or optimal filing hierarchy at the start of a project. Only as users work with information and evolve their ideas and “mental map” do they develop this optimal hierarchy. However, given the manual nature of bookmark management, it is not unlikely that sub-optimal organizations persist simply out of inertia.

So what features would improve the usefulness of bookmarks? I can think of three. First, I want them to store more information. More than a <span class="caps">URL</span>, I need information (annotations or metadata) that describes what a page means to me. Is it vacation planning, business relocation, or both? This purpose is currently served in a limited fashion by folders. However, I envision a system where not only is the <span class="caps">URL</span> and “topic” (folder name) available, but also arbitrary annotations (Wiki-style, anyone?), and possibly even a cached copy of the content.

Second, I need a system that’s portable. It is telling to me that a “feature” of Apple’s dotMac service is the ability to syncronize bookmarks across multiple machines. There’s absolutely no reason I shouldn’t be able to maintain a single set of “bookmarks” at school, at home and at work. Whether I store them on a web server or <span class="caps">USB</span> memory is irrelevant; the information needs to be portable. Note that this also ties in with my first point: if I’m working on a paper at school and want to use information from a database that’s only available to computers at school, the ability to transport my “bookmarks”, annotations and a cached copy of the page home in one package is very valuable to me. It opens up the list of places where I can work with that information, and frees me to work where I want to.

Finally, the system needs to be integrated. A [comment][3]  to one of my [previous posts][2]  suggested that what I really want is XiTouch, which the commenter bills as a “web based <span class="caps">PIM</span>/blogger.” No, that’s not what I want. I want my browser to be smarter, not some web service where I have to type in notes. I’m not saying XiTouch isn’t useful, but looking at the web page, I know it’s not for me. To me, the advantage to searching for “better bookmarks” instead of an electronic Notepad is that bookmarks are integrated, first-class (well, that may be arguable) citizens of the browser world. And by making them better or smarter, we can enable better use of information.

I want my “bookmark” information to be smarter, portable and completely integrated with my browser. Shouldn’t it be possible to pull a <span class="caps">USB</span> memory device from my machine at work, drive home, plug it in and start where I was? Or hop on a plane, plug it into my laptop (at the appropriate altitude, of course), and work with the cached content? These two use cases really highlight what I consider to be “optimal” uses.

I don’t think I’m alone in identifying this as a problem. I haven’t done an exhaustive search, by any means, but there are some projects underway which I believe share at least the principles I’ve outlined here. In the category of information management, both [Chandler][4]  and [Haystack][5]  come to mind. Chandler, while written in Python and cross-platform, is very e-mail and <span class="caps">PIM</span> centric. I like what they’re doing, but it fails the integrated test. Haystack, well, it’s a research project, and as cool as it may be, waiting 15 minutes for my app to start really doesn’t fly for me.

I also like [Dashboard][6] , but I think it’s trying to solve slightly different problem. Instead of helping organize incoming information, Dashboard tries to show you information relevant to your current task, which is definitly cool. While Dashboard is Gnome only, it is written in C# (Mono), so I hold out hope that it could run on other platforms at some point.

Finally, [TrailBlazer][7]  is a Mac <span class="caps">OS</span> X browser put together by the <span class="caps">UIUC</span> chapter of <span class="caps">ACM</span>. TrailBlazer builds on Apple’s WebCore framework, so it inherits the excellent rendering engine from Safari. Of course, that also means it’s Mac <span class="caps">OS</span> X specific, a killer for me since I use Linux at work, Mac <span class="caps">OS</span> X at home, and Win32 at school. Even with that “problem” it’s worth examining because it introduces a new paradigm for browsing history in the context of paths instead of just a list of pages.

So now that I’ve recorded my opinion for posterity, what’s next? I’d like to know if I’m way off base or right on or somewhere in between. Is this really a problem, or just the perceptions of a psuedo-crack-pot? And if it is a problem, does anyone have any ideas that I’ve overlooked? “Must-have” features that will make life better? As far as implementation goes, I lean towards implementing this as a Mozilla extension. I have some experience with them, and it seems like the only way I know of to satisfy the “cross-platform” and “integrated” litmus tests. Even with the Gecko platform to build on, this may prove to be a larger task than I expect, but I’m willing to take that chance. Anyone else?

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2004-04-30 10:05:07
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      122
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
      in-search-of-better-bookmarks
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
</table>

 [1]: http://www.yergler.net/averages/archives/2004/04/12/blogging_is_hard
 [2]: http://www.yergler.net/averages/archives/2004/04/12/better_blogging_or_its_more_than_just_a_blog_virginia
 [3]: http://mt.yergler.net/mt-comments.cgi?entry_id=1181
 [4]: http://osafoundation.org
 [5]: http://haystack.lcs.mit.edu/
 [6]: http://www.nat.org/dashboard/
 [7]: http://www.acm.uiuc.edu/macwarriors/projects/trailblazer/