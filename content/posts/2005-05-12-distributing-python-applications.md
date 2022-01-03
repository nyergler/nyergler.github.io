---
title: Distributing Python Applications
date: 2005-05-12T13:05:45.000Z
categories:
  - development
slug: distributing-python-applications
---
As a preface, this post is mostly rambling thoughts on the current state of ccPublisher 2, and some of the challenges yet to be worked through. You’ve been warned.

So now that the semester has wrapped up and my days are no longer consumed by homework, exams and projects, I’ve been trying to move forward with ccPublisher 2, the long awaited (and long promised) update to ccPublisher. While we’re not planning any new user features of ccP2, it’s an important milestone for another reason: extensibility. The current ccPublisher codebase is rather monolithic, and can be customized in only the broadest sense of the word. That is, yes, you can customize it. What, you want to merge features from the main tree? Hah! Since we already have two derivatives of ccPublisher in the wild (Jamloader and Ourmedia Publisher), a primary goal (maybe the central goal?) for ccP2 is making these customizations easier, and also making them more compatible over the long haul with the core ccPublisher codebase.

The central development philosophy we’ve been using to make this a reality can sort of be summed up as “extreme programming, table for one.” We’ve grabbed lots of pieces of code from the Zope 3 project, specifically the component model, interface support and ZCML. This lets us handle lots of situations that were previously part of the formal API with events, adapters and handlers. It’s not important where files are selected, the primary application class only needs to listen for the appropriate event. So when I’m working on the code, here’s what I keep in mind:

<ul class="simple">
  <li>
    ignorance is bliss,
  </li>
  <li>
    YAGNI,
  </li>
  <li>
    and your code is crap.
  </li>
</ul>

Let me elaborate. First, “ignorance is bliss.” I’ve begun to think of object models and APIs much the way I think about property taxes. I know that I pay property taxes on my house, and I know that money is taken form my mortgage payment and placed in escrow for that reason. But I’m willfully ignorant about how much I’m paying or how the escrow works: I just know that I can afford the monthly house payment, and leave it to others to sweat the details.

Between the ccPublisher 1.x releases and the current ccP2 codebase, there was another implementation. It was better than the 1.x release, but had it’s own problems. It traded the maintenance problems of the ccP1 monolithic code base for a large, complex API meant to enforce MVC seperation, blah, blah, blah. That model relied on subclassing for customization, and as such you had to be aware of a fairly complex super class to make things work right. The new ccP2 codebase doesn’t have any enforced seperation: you just pick the pieces you want to replace, implement the correct event publishers or handlers, and the superclass does the rest. This may be a little hard to visualize in the abstract, but the result has been a much more flexible “feeling” API.

YAGNI is an extreme programming acronym, standing for “You Ain’t Gonna Need It.” As I’ve been working on ccP2, I’ve tried to keep this in mind. I (and XP guys, I guess) do this because it’s not necessary to spend time working on an API for implementation you don’t actually need. Better to implement the bare bones functionality, and then begin experimenting with more complex use cases. In the case of ccP2, this has allowed me to get a functional, testable application up and running, and then focus on “niceties” such as drop-down boxes and cleaning up the UI.

Finally, “your code is crap.” And by “your”, I mean “my”. This is my slightly stronger version of the XP principle of being willing to throw stuff away. I know that I tend to become very attached to my code, and want it to be pretty, elegant and pristine. And when it’s not, I like to delude myself into thinking it is, and continue to tack features on when clearly, I just need to throw it away. So I just tell myself, “Yergler [yes, I call myself by my last name — it has a middle school gym teacher sound to it that seems to motivate, or at least frighten, me in a productive manner]! Your code is crap! Drop and give me twenty!” This makes me much more willing to tear out code wholesale. And while I’m at it, this ties back in with the first point — if I’ve done it remotely right, I’ll be able to tear out the crap without disturbing the parts that are actually working.

So now that we have a working component model (well, one we stole from Zope 3 that we’ve successfully adapted), what’s left to implement? Distribution. One of the points of ccP2 is to allow minimally invasive customization. In the current code base, metadata fields can be added by simply modifying a configuration file, so it doesn’t make much sense to ask customizers to ship a slew of code if all they really have made is an XML file. Additionally, it doesn’t make much sense to have half a dozen (ok, 2) versions of the framework on the machine in different places — it should really be shared so that when one App updates the framework, everyone reaps the benefits of bug fixes and internal improvements. Here’s some of my thoughts on this right now:

<ul class="simple">
  <li>
    For Windows systems, we can register the framework with a registry key. The installer can then check for the key and adjust the paths in the executable scripts accordingly. In this case, the framework includes the Python binary, library.zip and everything else generated by py2exe. I think (from my limited research) that <a class="reference external" href="http://nsis.sf.net">NSIS</a> can be used and scripted in such a way as to check for the existance and version of the framework before installing.
  </li>
  <li>
    For Linux systems, a similar approach could be used, with gconf substitued for the registry. Maybe. Since wxPython has a mature GTK2 backend, I tend to focus on Gnome over KDE, but really we should be able to find things “the right way” (for some definition of right). Maybe <a class="reference external" href="http://freedesktop.org">freedesktop.org</a> has a semi-standard way for registering installations, or maybe the framework should be it’s own package (RPM, deb, etc) which the actual app can depend on.
  </li>
  <li>
    For Mac OS X, the problem is a bit trickier. Up to this point when distributing Python apps, I’ve used Py2Exe for Windows along with an installer (<a class="reference external" href="http://wix.sf.net">WiX</a>, etc). For OS X, I’ve been able to just use buildapp or py2app and bundle everything into a single app package. For this new model, we’ll need to install some pieces to the Library, some to Applications, etc. I’m sure this is possible (lots of apps do it), but have no experience with it. Additionally, I’m not completely clear on what will need to be tweaked in the final .app file to include the Library in the PYTHONPATH.
  </li>
</ul>

Overall the problem is not insurmountable, but simple one of resources. And it sucks that each platform will need it’s own attention. I guess the upside is that once we’ve figured it out, customizers won’t have to worry about the details. And that’s a good thing.


