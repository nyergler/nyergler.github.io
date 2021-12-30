---
title: 'Proposed Changes to the Validator'
author: Nathan Yergler
type: post
date: 2003-10-22T09:10:35+00:00
excerpt: |
  <p>Thanks to the feedback I’ve received about the Creative Commons license
  validator, I now have a list of improvements and changes to implement.
  I’ve also decided that now is the time to move away from emitting
  plain-jane <span class="caps">HTML</span> with <tt class="docutils literal">print</tt> statements, and move to a framework that
  actually ...</p>
url: /2003/10/22/proposed-changes-to-the-validator/
categories:
  - ccValidator

---
Thanks to the feedback I’ve received about the Creative Commons license validator, I now have a list of improvements and changes to implement. I’ve also decided that now is the time to move away from emitting plain-jane <span class="caps">HTML</span> with <tt class="docutils literal">print</tt> statements, and move to a framework that actually helps me out. To that end, I’ve initially decided to use Quixote. I’ve used Quixote casually a few times, and think it fits for a few reasons:

<ul class="simple">
  <li>
    it’s lightweight
  </li>
  <li>
    it’s very code oriented: a function or module is a page
  </li>
  <li>
    it’s templating language is about as simple as you get
  </li>
</ul>

New things that will be implemented include better error messages, sample <span class="caps">RDF</span> in the form for instant gratification, and more useful summary of your <span class="caps">RDF</span> input. If you have any other suggestions, please let me know.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2003-10-22 09:10:35
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      16
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
      proposed-changes-to-the-validator
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
      ccValidator
    </td>
  </tr>
</table>