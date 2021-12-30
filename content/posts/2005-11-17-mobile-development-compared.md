---
title: 'Mobile Development Compared'
author: Nathan Yergler
type: post
date: 2005-11-17T09:15:30+00:00
excerpt: |
  <p>_*Update:* I’ve posted a follow up
  <a class="reference external" href="http://yergler.net/blog/archives/2005/11/29/j2me-development-part-2">here</a> _</p>
  <p>I’ve been doing a lot of work in the past week on mobile (more
  specifically phone) platforms, some by choice and some by dictate. And
  the two experiences are sort of telling, in my opinion. On one hand my ...</p>
url: /2005/11/17/mobile-development-compared/
categories:
  - development

---
_\*Update:\* I’ve posted a follow up [here][1]  _

I’ve been doing a lot of work in the past week on mobile (more specifically phone) platforms, some by choice and some by dictate. And the two experiences are sort of telling, in my opinion. On one hand my Software Engineering course this semester, <span class="caps">CS</span> 360, is designed around a project for an external client. My team’s client is a local software firm that makes municipal management software. Our project is developing an interface for that software for a mobile phone that enables field workers (ie, street department, utilities, etc) and first responders to communicate status and location information to a central dispatch center. The platform imposed is Motorola <span class="caps">IDEN</span> phones running <span class="caps">J2ME</span> code on the [<span class="caps">STRIKEOUT</span>:Nextel]Sprint network. As the lead on design and implementation, I had the responsibility for developing the initial prototype which we demoed to the client yesterday. This minimally functional prototype took no less than 8 hours to hack together. And that’s if you don’t count the time spent fighting the Motorola tools before I gave up and just used Sun’s generic <span class="caps">J2ME</span> toolkit for the prototype. It’s not that <span class="caps">J2ME</span> is bad per say; there just seem to be a lot of steps that have to happen for an application to work right, and the documentation I happen to have is somewhat lacking.

On the other hand, I chose to do a little bit of mobile development for fun on Saturday <span class="amp">&</span> Sunday, when I was procrastinating from working on the <span class="caps">J2ME</span> implementation. In this case I decided to finally use my Nokia 6620 Series 60 phone for the purpose I chose it — developing in Python. So I downloaded Nokia’s <span class="caps">SDK</span>, sent the runtime over to the phone and started hacking around. In the same amount of time it took me to develop the minimal prototype for <span class="caps">J2ME</span>, I completed a full implementation of [Sudoku][2]  for the Series 60. If you’re not familiar with Sudoku, it’s a logic game from Japan that is my current obsession. So in 8 hours (roughly) I ended up with code that handles drawing the board, responds to user input, saves and loads games, and detects when you win. Oh, and it’s multi-threaded to make the startup speed a little more palitable. I should note that I was aided in the game logic by the excellent gnome-sudoku code (also written in Python), but the code is still far more complex than the <span class="caps">J2ME</span> prototype.

So what’s the big difference? Obviously part of it is my relative comfort with Python versus Java. But I don’t think that’s as big a factor as it might have been, say, 6 months ago. I’ve been pretty immersed in Java this semester, from writing multi-threaded simulations for my operating systems class to web applications using <span class="caps">J2EE</span> containers and servlets. Additionally, I didn’t even have an emulator for the Series 60, so every time I wanted to test something I needed to send it to the phone via Bluetooth <span class="caps">SMS</span> and then install the file, yada, yada, yada. So my gut feeling is that any speed gained from familiarity with Python was probably wasted in the save-sync-install-test cycle.

The most glaring difference is in the quality of documentation. Nokia provides really excellent documentation in the form of PDFs with their Python <span class="caps">SDK</span>. This includes a “programming with” guide that discusses some of the common tasks you might want to accomplish as well as an <span class="caps">API</span> guide. The Java documentation, while not horrible, seems to be considerably more difficult to find what you want.

The other glaring difference is in the relative complexity of the respective APIs. Nokia has done an excellent job of providing a really simple <span class="caps">API</span> for doing <span class="caps">GUI</span> operations on the phone. <span class="caps">J2ME</span>… well, lets just say I’m not looking forward to implementing my own list box, which I’m going to have to do for the particular <span class="caps">GUI</span> idiom the client wants. Of course, the counter argument to the simple <span class="caps">API</span> is that <span class="caps">J2ME</span> is designed to target multiple types of devices, from phones to Palm handhelds, and the Nokia <span class="caps">SDK</span> only targets Series 60 phones. Just because you do more, though, doesn’t mean you have to make life difficult.

I don’t want to make this a “Java is better than Python” argument. It’s not necessarily that. I think it’s more accurately a Nokia versus Motorola argument. Nokia has obviously realized that as people expect devices to do more, their platform will succeed based on developers. And making life easy for developers makes developers write more code for your platform. Even in terms of tools Nokia has made Moto their bitch. Nokia doesn’t provide much in the way of tools for Python — what do you need, really — but for <span class="caps">J2ME</span> Nokia provides an Eclipse based environment than, in my limited tests, works really well. Moto provides a really crappy tool that I still haven’t coaxed to build a MIDlet correctly. If I were a commercial developer deciding on a platform, the Motorola <span class="caps">IDEN</span> platform would be the first one to get scratched off the list, simply based on tools.

It would be interesting to re-implement my Sudoku game in <span class="caps">J2ME</span> for the Series 60, just to compare the two experiences more accurately. Oh, and yes, I’ll be releasing my Sudoku for Series 60 app just as soon as I get a final couple of features implemented.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2005-11-17 09:15:30
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      350
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
      mobile-development-compared
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

 [1]: http://yergler.net/blog/archives/2005/11/29/j2me-development-part-2
 [2]: http://sudoku.com