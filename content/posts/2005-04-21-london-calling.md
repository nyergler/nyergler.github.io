---
title: London Calling
date: 2005-04-21T15:24:46.000Z
categories:
  - pyuk2005
slug: london-calling
---
So today was my first day at PyUK, which is being presented as part of the [<span class="caps">ACCU</span> Conference][1] . The day opened with a keynote on improving generic programming from Bjarne Stroustrup (of C++ fame). Bjarne’s presentation centered around the development of a concept he referred to as “Concepts”. Concepts attempt to completely and perfectly separate the declaration and implementation of templated code. If effectively implemented, they allow programmers to make predicate declarations about the signatures of templated code as well as the parameters. For example, without knowing type you could make the assertion that a templated function requires an iterable paramter. A crappy example, but the jet lag is _still_ killing me.

After the keynote the Python track proper started. The remainder of the morning was consumed by Andy Robinson’s brief presentation on PyUK and the <span class="caps">ACCU</span>, a repeat of Greg Stein’s PyCon Google keynote, and an unscheduled appearance by a developer evangelist from Microsoft on [IronPython][2] . While the IronPython presentation was mostly a rehashing of Jim’s PyCon keynote, it was interesting for a couple of reasons.

First, the presenter (I really wish I could remember his name) went from zero to implementing a C# delegate in Python and calling it from Python in under 24 hours. Admittedly this was with the help of Jim’s slides, but it’s impressive none the less. It lends credence to Greg Stein’s 2-2-2 rule: You can understand Python in 2 hours, write Python in 2 days, and be proficient in 2 months. Second, it helps to allay my fears (somewhat) that IronPython is going to be given the short end of the stick by Microsoft. I can’t give any justification for my fears, it’s just a feeling. Hopefully I’ll be proven wrong.

After lunch, I presented a longer reprise of my PyCon talk on Desktop Applications. With a 90 minute time slot, I was able to go into some more detail on specific cross-platform issues, as well as talk about i18n for wxPython and the beginning of my testing framework implementation. [Updated slides][3]  and the [sample code][4]  are available. Despite the gentleman in the front row falling asleep (thanks, buddy), I think the talk was a success. If I had to guess, I’d say it was either too linear or too in depth for about half the audience, but the other half really got it and seemed to appreciate it based on the feedback afterwards. I call that a success. If I were to submit the talk again, I’d probably want to use the 90 minute material in a 45 or 50 minute slot, just so the pacing would be a bit quicker.

After my talk there were two more excellent talks. First was a presentation from Tallgren of Nokia’s R&D group. He presented historical and developmental background regarding [Python on the Nokia][5]  [Series 60][6] . While it sounds like there are still issues to be worked out regarding distributing applications (i.e., how to distribute your Python app and the runtime in a single bundle), it’s definitly exciting to think about how it will lower the bar for development.

The final talk of the day was originally to be presented by Kevin Altis. Alex Tweedly, however, did an excellent job of discussing [PythonCard][7] . PythonCard is a simplified wrapper around [wxPython][8] . Altis’s development philosophy has been to focus on the simple tasks for which wxPython is too heavy, and that not all the wxPython functionality should be exposed to users. When I last looked at PythonCard, it was an interesting toy, but not something I felt would work for “real” development. I think I’ll need to look at it again to reevaluate that conclusion.

Tomorrow’s talks look excellent as well, and I’m looking forward to reading the new Knuth fascicles I picked up at the Blackwell’s display today.

<span class="caps">PS</span>: Apologies for the cheesy title… I couldn’t resist.



 [1]: https://www.accu.org/conference/index.html
 [2]: http://workspaces.gotdotnet.com/ironpython
 [3]: http://yergler.net/talks/desktopapps_uk
 [4]: http://yergler.net/talks/desktopapps_uk/samples/
 [5]: http://www.forum.nokia.com/main/0,,034-821,00.html
 [6]: http://www.series60.com
 [7]: http://pythoncard.sf.net
 [8]: http://www.wxpython.org
