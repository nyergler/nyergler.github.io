---
title: Proposed Changes to the Validator
date: 2003-10-22T09:10:35.000Z
categories:
  - ccValidator
---
Thanks to the feedback I’ve received about the Creative Commons license validator, I now have a list of improvements and changes to implement. I’ve also decided that now is the time to move away from emitting plain-jane HTML with `print` statements, and move to a framework that actually helps me out. To that end, I’ve initially decided to use Quixote. I’ve used Quixote casually a few times, and think it fits for a few reasons:

* it’s lightweight
* it’s very code oriented: a function or module is a page
* it’s templating language is about as simple as you get

New things that will be implemented include better error messages, sample RDF in the form for instant gratification, and more useful summary of your RDF input. If you have any other suggestions, please let me know.

