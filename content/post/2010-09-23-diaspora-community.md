---
title: “Open Source” is not a Verb; thoughts on Diaspora
author: Nathan Yergler
type: post
date: 2010-09-23T21:58:23+00:00
excerpt: |
  <p>Lots has been written about <a class="reference external" href="http://www.joindiaspora.com/">Diaspora</a>
  already, so I’ll try to keep this as brief as possible. Reading the
  <a class="reference external" href="http://www.joindiaspora.com/2010/08/26/overdue-update.html">“overdue
  update”</a>
  last month, I saw a phrase that <a class="reference external" href="https://identi.ca/notice/48738964">made me a little
  crazy</a>:</p>
  <blockquote>
  We have Diaspora working, we like it, and it will be open-sourced on
  September 15th.</blockquote>
  <p>Open ...</p>
url: /2010/09/23/diaspora-community/
categories:
  - open source
tags:
  - community
  - diaspora
  - free software
  - open source

---
Lots has been written about [Diaspora][1]  already, so I’ll try to keep this as brief as possible. Reading the [“overdue update”][2]  last month, I saw a phrase that [made me a little crazy][3] :

> We have Diaspora working, we like it, and it will be open-sourced on September 15th.
Open source is not a verb in my book.

I thought of this again last night, while reading the excellent [Security Lessons Learned from the Diaspora Launch][4] . The errors described therein are truly horrifying, and I shudder to think how often I’ve made them myself. It was a comment in the final paragraph that really resonated for me, though.

> You might believe in the powers of <span class="caps">OSS</span> to gather experts (or at least folks who have shipped a Rails app, like myself) to Diaspora’s banner and ferret out all the issues. You might also believe in magic code-fixing fairies. Personally, I’d be praying for the fairies because if Diaspora is dependent on the <span class="caps">OSS</span> community their users are screwed.
Diaspora isn’t screwed because the open source community is unreliable or unknowledgable. Diaspora is screwed because there isn’t just one open source community: communities develop around individual projects. And Diaspora blew the best chance they had to have an engaged, active community, today.

Diaspora did not “open-source” their software on the 15th. They licensed it. Perhaps I think about this pedantically due to six years working with public licenses, but I think it’s important to be clear about what change was actually affected: a licensing change. When we talk about open source software (or free software), we’re often talking as much about the environment that software grows up in as we are the license of the code. That environment includes the [tools][5] , the license (and/or contributor agreement, although why those are a bad idea is another topic altogether), and the _community_. Making choices for all three can be as important as any commit you make to your code base, and the three are often inter-related (for example, the choice of license may attract or repel individuals from a project, thus shaping community).

Of these three, I think community is the hardest to get right<sup>†</sup>. It’s also the hardest (in my experience) to make a course correction on, because you have less direct control. You get to choose your license; your community gets to choose you.

When Diaspora started raising funds on Kickstarter, the enthusiasm and engagement around the idea was incredible. And even if some of the conversation was at the technical level of unicorns and rainbows, I think people were ready to build something amazing. Unfortunately we were left in the dark all summer. How much different could it have been if the developers had opened a repository on [gitorious][6] , and started working in the open?

Would there have been security issues then? Sure. Would some people have criticized every little decision? Of course. But that’s sort of how these things work, and the effect is that this mass of people who have some interest in your project is refined to a community of users, testers, contributors, and fans. The people who care and agree with the direction your project is taking stay; those that don’t, leave (or fork). Additionally, you get to show people progress from day one, and avoid the whole “release” thing until you actually are ready (I think “releasing” raises expectations, even when you couch the version label in multiple levels of qualifiers).

So why don’t people do this? The times I’ve been tempted to do this, pride and ego have been huge parts of my motivation. We don’t want to show our early experiments because they’re “embarrassing”. Our use case is unique. We want to have something that meets some “minimum viable product” metric. We don’t want to disappoint.

When I start thinking this way, I need to get over myself.

[Ben Collins-Sussman][7]  and [Brian Fitzpatrick][8]  gave a great [talk at <span class="caps">OSCON</span> 2009][9] , “Programmer Insecurity and the Genius Myth”. And they quoted [Tyler Durden][10] .

> “You are not a beautiful or unique snowflake. You’re the same decaying organic matter as everything else.
When discussing how to overcome the idea that your work is special, your use case is different, or that you’re “not ready”, one of the points they made is that it’s better to be a small fish in a big pond than a big fish in a small pond. That is, to get over your ego, get yourself a big fucking pond. Like a public repository that anyone can see.

So how does this relate to Diaspora and their lost community opportunity? I suspect at some point the folks at Diaspora decided, “we need to be _ready_ before others see our code.” Or “we really need to focus on our work, so we can’t have that distraction.” So everyone who might have been inclined to watch commit messages, file bugs, or even contribute patches was left to think something along the lines of, “Man, who knows _what_ they’re doing with all that cash; we’ll see what we actually get if and when they finally release.” (Remember, we all have Ego, and most of us are pretty attached to it.)

Now that they’ve made a release, and the results are not exactly what was hoped for, there are two things working against the nascent community: ego and inertia. Ego may be stronger, but don’t discount inertia: it’s a lot easier to correct your course when you’re moving slowly than it is when you’re hurtling towards a promised public launch. And asking a community to engage is a change in course, even when your code is perfect.

When Diaspora dropped their code on the 15th, they [indicated][11]  that they want to orient towards a community.

> Today, we are releasing the source code for Diaspora. This is now a community project and development is open to anyone with the technical expertise who shares the vision of a social network that puts users in control. From now on, we will be working closely with the community on improving and solidifying Diaspora.
It remains to be seen whether the community comes (and stays). Calling it a community project doesn’t make it so, but starting with community greatly increases the odds of successfully building one.

<hr class="docutils" />

<sup>†</sup> Where “right” means something like “having an engaged group of users and developers that support and champion your project.”

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2010-09-23 21:58:23
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      1783
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
      diaspora-community
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
      open source
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      tags:
    </th>

    <td class="field-body">
      community, diaspora, free software, open source
    </td>
  </tr>
</table>

 [1]: http://www.joindiaspora.com/
 [2]: http://www.joindiaspora.com/2010/08/26/overdue-update.html
 [3]: https://identi.ca/notice/48738964
 [4]: http://www.kalzumeus.com/2010/09/22/security-lessons-learned-from-the-diaspora-launch/
 [5]: http://mako.cc/writing/hill-free_tools.html
 [6]: http://gitorious.org
 [7]: http://www.red-bean.com/sussman/
 [8]: http://www.red-bean.com/fitz/
 [9]: http://www.oscon.com/oscon2009/public/schedule/detail/7461
 [10]: https://secure.wikimedia.org/wikipedia/en/wiki/Tyler_Durden#Tyler_Durden
 [11]: http://www.joindiaspora.com/2010/09/15/developer-release.html