---
title: Mapping file paths for pdbtrack
date: 2012-06-07T07:04:03.000Z
categories:
  - tools
tags:
  - emacs
  - pdbtrack
  - python-mode
slug: mapping-file-paths-for-pdbtrack
---
I saw [python-mode][1]  6.0.8 was release two weeks ago, and that reminded me to look and see if _my_ change was included. Turns out it was [included in 6.0.6][2] , released in April:

> – files inside a virtual machine made visible for pdbtrack
That’s [my contribution][3] .

python-mode provides support for developing with Python in Emacs. One of its most powerful (and often unknown) features is pdbtrack. pdbtrack recognizes when you’re interacting with a [Python Debugger][4]  (<span class="caps">PDB</span>) session within Emacs, and opens the relevant files for you as you step through the program. When you’re digging into something very deep (lots of calls on the stack) or very broad (using lots of supporting libraries), this is invaluable for providing perspective on “where” your program is.

At work we develop using a [Vagrant][5] -managed virtual machine. The source checkout is stored “locally” and exported to the virtual machine using <span class="caps">NFS</span>. That’s great for development — edit locally, run from within the virtual machine — but broke pdbtrack. When Python reported it was at a certain line of a certain file, it was referring to a file inside the virtual machine. When pdbtrack tried to find that path, it didn’t exist because Emacs was running outside the virtual machine. When I want to use pdbtrack I’m usually pretty confused and in need of perspective, so it’s a pretty important tool for me. So I decided to fix this.

Starting with python-mode 6.0.6, you can customize the <tt class="docutils literal"><span class="pre">py-pdbtrack-filename-mapping</span></tt> variable. This is an [alist][6]  which maps paths the Python interpreter sees to paths Emacs can see. If pdbtrack can’t find the buffer to open directly, it checks this mapping to see if the file exists in a different location. For example, my configuration has the following customization:

<pre class="literal-block">'(py-pdbtrack-filename-mapping (quote
   (("/home/vagrant/eventbritecore/" . "/Volumes/eb_home/work/eventbritecore/"))
 ))
</pre>

Using Vagrant means we are able to develop on a configuration far closer to production than we would [easily] be able to otherwise. And starting with python-mode 6.0.6, I don’t have to give up pdbtrack to do that.



 [1]: http://llaunchpad.net/python-mode/
 [2]: https://launchpad.net/python-mode/+announcement/9948
 [3]: https://bazaar.launchpad.net/~python-mode-devs/python-mode/python-mode/revision/938
 [4]: http://docs.python.org/library/pdb.html
 [5]: http://vagrantup.com/
 [6]: https://www.gnu.org/savannah-checkouts/gnu/emacs/manual/html_node/elisp/Association-Lists.html
