---
title: A Plan for GUI Testing
date: 2005-04-14T19:00:39.000Z
categories:
  - development
  - pycon2005
slug: a-plan-for-gui-testing
---
During my presentation on [Developing Desktop Applications with Python][1]  at PyCon last month, one question in particular intrigued me: “How do you handle unit testing for user interfaces.” My answer, at the time, was the paragon of short and accurate: “I don’t.” But I’ve been thinking about it since then, and I think I have an answer. This post is my attempt to work out the details in my head before actually implementing anything. I ran across [Twill][2]  the other day. Twill is an application which allows you to execute scripts against web applications for the purposes of testing. You can find a sample script in the Twill README. This idea of scripts got me thinking about testing GUI applications. The thoughts went something like this:

<ul class="simple">
  <li>
    If you want to test a GUI, you often want to make sure things happen in a certain order, or that changes to widgets (buttons pressed, etc) cause the correct change to occur.
  </li>
  <li>
    I think I could script at least 75% (and maybe more) of the tests I’d like to perform in a fairly straightforward manner. I think.
  </li>
  <li>
    Integration of GUI testing with unit tests would make my code better. I’m certain of this.
  </li>
</ul>

Of course, anyone who’s done much GUI programming, particularly with wxPython, knows that there is the problem of main loops and threads. The main loop is what listens for GUI events, and fires the correct methods. It’s also blocking (i.e., as long as your app is running, it’s running). In wxPython, trying to interact with the GUI from another thread is a sure fire way to crash things in a dramatic and spectacular way. But I remembered seeing a presentation on matplotlib at PyCon, and in it the presenter used the [IPython][3]  shell to modify a plot in place.

IPython is an enhanced interactive shell for Python (and is incidentally also used by the Twill project). I got to looking at IPython last night, and found that doing something like:

<pre class="literal-block">% ipython -wthread wxapp.py
</pre>

launches IPython, runs wxapp.py in a separate thread and dumps you at the interactive prompt. From there you can introspect into loaded modules, etc. You can’t access instances from the application, but that’s not a problem with wxPython. In wxPython, calling wx.GetApp() will return the application object (which is a Singleton for a given process), and the App has it’s own cooresponding method GetTopLevelWindow(), which returns the parent of all widgets and subwindows for the running application. Armed with these two pieces of knowledge, you can easily introspect the state of widgets in a running wxPython application from the IPython shell.

So let’s consider a hypothetical test for the classic “currency-converter” application:

<pre class="literal-block">tester = wxTester()


        make sure the appropriate widgets exist
    assert_ (tester.widgetById(“txtCurrency”))assert_ (tester.widgetById(“txtRate”))assert_ (tester.widgetById(“cmdCalculate”))assert_ (tester.widgetById(“txtValue”))

    tester.widgetById(“txtCurrency”).SetValue(“10”)tester.widgetById(“txtRate”).SetValue(“10”)tester.click (tester.widgetById(“cmdCalculate”))assertEqual (tester.widgetById(“txtValue”).GetValue(), “100”)
</pre>

So you can see the wxTester class provides a convenience method, widgetById, for finding a widget by it’s unique identifier. I imagine we’d also want to have methods for finding widgets by numeric ID and possibly label, as well. These methods return the actual wxPython object, so you can make calls like SetValue and GetValue to interact with the UI.

I imagine that the `click` method is actually a special case of a more generic sendMessage method. Since clicks in wxPython (and most other UI toolkits) are sent as messages, we generate a mouse click message, and send it to the appropriate widget. This lets us emulate mouse interactions.

So what are the unanswered questions? Well, I’d like to use the existing `unittest` framework for running tests. This would allow me to take advantage of it’s convenience methods and error reporting. I think this will be possible; the wxTester object will find the running application’s top level window when instantiated, so you should be able to simply instatiate the object within a particular testcase method. I may also want to have the initializer for wxTester to also run the application script, so that each test starts with a clean instance.

Additionally, there will need to be some experimentation to figure out how to (essentially) run two scripts simultaneously: the tester script and the tested script. IPython has a `%run` command which allows you to run an external Python script with a given set of command line arguments, and still introspect into it. If the %run command is available from our test script, we have our answer.

Finally, this will require the use of IPython for executing test scripts. This isn’t a deal killer, but doesn’t thrill me. A possible future improvement would be to use the IPython source to instantiate the threads and magic from within a standard Python interpreter. And while we’re on the subject of future improvements for vaporware, some sort of GUI toolkit abstraction would make the library useful for more than just wxPython applications. Someday.



 [1]: http://yergler.net/wiki/ynet/show/Desktop+Apps+with+Python
 [2]: http://darcs.idyll.org/~t/projects/twill/README.html
 [3]: http://ipython.scipy.org/
