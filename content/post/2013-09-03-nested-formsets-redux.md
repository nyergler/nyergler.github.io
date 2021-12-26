---
title: 'Revisiting Nested Formsets'
author: Nathan Yergler
type: post
date: 2013-09-03T00:00:00+00:00
excerpt: |
  <p>It&#8217;s been nearly four years since I first wrote about <a class="reference external" href="http://yergler.net/blog/2009/09/27/nested-formsets-with-django/">nested
  formsets</a>. When I wrote about nested formsets, I must have been using
  Django 1.1 (based on correlating dates in the <a class="reference external" href="https://docs.djangoproject.com/en/1.5/releases/">release notes</a> and the
  original blog post), which means what I wrote has had four major
  releases ...</p>
url: /2013/09/03/nested-formsets-redux/
categories:
  - development
tags:
  - django
  - forms
  - formsets
  - python

---
It&#8217;s been nearly four years since I first wrote about [nested formsets][1] . When I wrote about nested formsets, I must have been using Django 1.1 (based on correlating dates in the [release notes][2]  and the original blog post), which means what I wrote has had four major releases of Django to drift out of date. And yet it&#8217;s still one of the most frequently visited posts on my blog, and one of the few that I receive email questions about. Four years later, it seemed like the time to revisit the original post to see if nested formsets still make sense and if so, what they look like now.

[Formsets][3]  help manage the complexity of maintaining multiple instances of a [Form][4]  on a single page. For example, if you&#8217;re editing a list of items on a single page, each individual item may be a copy of the same form. Formsets help manage things like <span class="caps">HTML</span> <span class="caps">ID</span> generation, flagging forms for deletion, and validating the entire set of forms together. When used with [Models][5] , they allow you to edit the members of a [QuerySet][6]  all at once.

So what are nested formsets? The example I used previously was something along the lines of Block &#8211; Building &#8211; Tenant: one Block has many Buildings, and each Building has many Tenants. If you&#8217;re editing a Block, you want to see all the Buildings and all the Tenants at once. That&#8217;s a fine hypothetical, but one of the questions I get with some frequency is &#8220;what&#8217;s a good use case for a nested formset?&#8221; Four years later &#8212; two and a half of them spent doing web development full time &#8212; I have yet to encounter a situation where I needed a nested formset. In that time I&#8217;ve built some pretty complex forms, including Eventbrite&#8217;s [event creation flow][7] . That page was complex enough that I built [Form Groups][8]  to support the interaction, and I think the jury is still out on whether that was a good idea or not. It&#8217;s possible that there are use cases for nested formsets in admin-style applications that I haven&#8217;t encountered. I think it&#8217;s also possible that there are reasons to use a nested formset alongside a Javascript framework to ease the user experience.

Note that if you only have one level of relationships on the page (ie, you&#8217;re editing all the Tenants for a single Building in our example) then you don&#8217;t need nested formsets: Django&#8217;s [inline formsets][9]  will work just fine.

And why not nested form sets? From the questions people have asked and my experience building Form Groups (which borrowed some ideas), I&#8217;ve concluded that they&#8217;re difficult to get completely right, have edge cases that can be hard to manage, and create quite complicated user interfaces. In my original blog post I alluded to the fact that I spent most of a three day weekend trying to get the nested formsets to work right. Two thirds of that time was spent on work I eventually threw away, because I couldn&#8217;t manage the edge cases. It was only when I started using <span class="caps">TDD</span> that I managed to get something working. But I didn&#8217;t publish the tests with my previous code example, so no one else was able to benefit from that work.

If you&#8217;ve read this far and still think a nested formset is the best solution for your problem, what would that look like with Django 1.5? The answer is: simpler. I decided to rewrite my initial implementation using test driven development. The full implementation of the formset logic only overrides three methods from <tt class="docutils literal">BaseInlineFormSet</tt>.

<pre class="code python literal-block"><span class="kn">from</span> <span class="nn">django.forms.models</span> <span class="kn">import</span> <span class="p">(</span>
    <span class="n">BaseInlineFormSet</span><span class="p">,</span>
    <span class="n">inlineformset_factory</span><span class="p">,</span>
<span class="p">)</span>


<span class="k">class</span> <span class="nc">BaseNestedFormset</span><span class="p">(</span><span class="n">BaseInlineFormSet</span><span class="p">):</span>

    <span class="k">def</span> <span class="nf">add_fields</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">form</span><span class="p">,</span> <span class="n">index</span><span class="p">):</span>

        <span class="c1"># allow the super class to create the fields as usual</span>
        <span class="nb">super</span><span class="p">(</span><span class="n">BaseNestedFormset</span><span class="p">,</span> <span class="bp">self</span><span class="p">)</span><span class="o">.</span><span class="n">add_fields</span><span class="p">(</span><span class="n">form</span><span class="p">,</span> <span class="n">index</span><span class="p">)</span>

        <span class="n">form</span><span class="o">.</span><span class="n">nested</span> <span class="o">=</span> <span class="bp">self</span><span class="o">.</span><span class="n">nested_formset_class</span><span class="p">(</span>
            <span class="n">instance</span><span class="o">=</span><span class="n">form</span><span class="o">.</span><span class="n">instance</span><span class="p">,</span>
            <span class="n">data</span><span class="o">=</span><span class="n">form</span><span class="o">.</span><span class="n">data</span> <span class="k">if</span> <span class="bp">self</span><span class="o">.</span><span class="n">is_bound</span> <span class="k">else</span> <span class="bp">None</span><span class="p">,</span>
            <span class="n">prefix</span><span class="o">=</span><span class="s1">'</span><span class="si">%s</span><span class="s1">-</span><span class="si">%s</span><span class="s1">'</span> <span class="o">%</span> <span class="p">(</span>
                <span class="n">form</span><span class="o">.</span><span class="n">prefix</span><span class="p">,</span>
                <span class="bp">self</span><span class="o">.</span><span class="n">nested_formset_class</span><span class="o">.</span><span class="n">get_default_prefix</span><span class="p">(),</span>
            <span class="p">),</span>
        <span class="p">)</span>

    <span class="k">def</span> <span class="nf">is_valid</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>

        <span class="n">result</span> <span class="o">=</span> <span class="nb">super</span><span class="p">(</span><span class="n">BaseNestedFormset</span><span class="p">,</span> <span class="bp">self</span><span class="p">)</span><span class="o">.</span><span class="n">is_valid</span><span class="p">()</span>

        <span class="k">if</span> <span class="bp">self</span><span class="o">.</span><span class="n">is_bound</span><span class="p">:</span>
            <span class="c1"># look at any nested formsets, as well</span>
            <span class="k">for</span> <span class="n">form</span> <span class="ow">in</span> <span class="bp">self</span><span class="o">.</span><span class="n">forms</span><span class="p">:</span>
                <span class="n">result</span> <span class="o">=</span> <span class="n">result</span> <span class="ow">and</span> <span class="n">form</span><span class="o">.</span><span class="n">nested</span><span class="o">.</span><span class="n">is_valid</span><span class="p">()</span>

        <span class="k">return</span> <span class="n">result</span>

    <span class="k">def</span> <span class="nf">save</span><span class="p">(</span><span class="bp">self</span><span class="p">,</span> <span class="n">commit</span><span class="o">=</span><span class="bp">True</span><span class="p">):</span>

        <span class="n">result</span> <span class="o">=</span> <span class="nb">super</span><span class="p">(</span><span class="n">BaseNestedFormset</span><span class="p">,</span> <span class="bp">self</span><span class="p">)</span><span class="o">.</span><span class="n">save</span><span class="p">(</span><span class="n">commit</span><span class="o">=</span><span class="n">commit</span><span class="p">)</span>

        <span class="k">for</span> <span class="n">form</span> <span class="ow">in</span> <span class="bp">self</span><span class="p">:</span>
            <span class="n">form</span><span class="o">.</span><span class="n">nested</span><span class="o">.</span><span class="n">save</span><span class="p">(</span><span class="n">commit</span><span class="o">=</span><span class="n">commit</span><span class="p">)</span>

        <span class="k">return</span> <span class="n">result</span>
</pre>

These three method cover the four areas of functionality I called out in the [previous post][1] : validation (<tt class="docutils literal">is_valid</tt>), saving (both existing and new objects are handled here by <tt class="docutils literal">save</tt>), and instantiation (creating the nested formset instances, handled by <tt class="docutils literal">add_fields</tt>).

By making it a general purpose baseclass, I&#8217;m also able to write a simple factory function, to make using it more in tune with Django&#8217;s built-in model formset.

<pre class="code python literal-block"><span class="k">def</span> <span class="nf">nested_formset_factory</span><span class="p">(</span><span class="n">parent_model</span><span class="p">,</span> <span class="n">child_model</span><span class="p">,</span> <span class="n">grandchild_model</span><span class="p">):</span>

    <span class="n">parent_child</span> <span class="o">=</span> <span class="n">inlineformset_factory</span><span class="p">(</span>
        <span class="n">parent_model</span><span class="p">,</span>
        <span class="n">child_model</span><span class="p">,</span>
        <span class="n">formset</span><span class="o">=</span><span class="n">BaseNestedFormset</span><span class="p">,</span>
    <span class="p">)</span>

    <span class="n">parent_child</span><span class="o">.</span><span class="n">nested_formset_class</span> <span class="o">=</span> <span class="n">inlineformset_factory</span><span class="p">(</span>
        <span class="n">child_model</span><span class="p">,</span>
        <span class="n">grandchild_model</span><span class="p">,</span>
    <span class="p">)</span>

    <span class="k">return</span> <span class="n">parent_child</span>
</pre>

You can find the source to this [general purpose implementation on GitHub][10] . I wrote tests at each step as I worked on this, so it may be interesting to go back and look at individual commits, as well.

So how would you use this in with Django 1.5? With a [class-based view][11] , of course.

<pre class="code python literal-block"><span class="kn">from</span> <span class="nn">django.views.generic.edit</span> <span class="kn">import</span> <span class="n">UpdateView</span>

<span class="k">class</span> <span class="nc">EditBuildingsView</span><span class="p">(</span><span class="n">UpdateView</span><span class="p">):</span>
    <span class="n">model</span> <span class="o">=</span> <span class="n">models</span><span class="o">.</span><span class="n">Block</span>

    <span class="k">def</span> <span class="nf">get_template_names</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>

        <span class="k">return</span> <span class="p">[</span><span class="s1">'blocks/building_form.html'</span><span class="p">]</span>

    <span class="k">def</span> <span class="nf">get_form_class</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>

        <span class="k">return</span> <span class="n">nested_formset_factory</span><span class="p">(</span>
            <span class="n">models</span><span class="o">.</span><span class="n">Block</span><span class="p">,</span>
            <span class="n">models</span><span class="o">.</span><span class="n">Building</span><span class="p">,</span>
            <span class="n">models</span><span class="o">.</span><span class="n">Tenant</span><span class="p">,</span>
        <span class="p">)</span>

    <span class="k">def</span> <span class="nf">get_success_url</span><span class="p">(</span><span class="bp">self</span><span class="p">):</span>

        <span class="k">return</span> <span class="n">reverse</span><span class="p">(</span><span class="s1">'blocks-list'</span><span class="p">)</span>
</pre>

Of course there&#8217;s more needed &#8212; templates, for one &#8212; but this shows just how easy it is to create the views and leverage a generic abstraction. The real keys here are specifying <tt class="docutils literal">model = models.Block</tt> and the definition of <tt class="docutils literal">get_form_class</tt>. Django&#8217;s [UpdateView][12]  knows how to implement the basic form processing idiom (<span class="caps">GET</span>, <span class="caps">POST</span>, redirect), so all you need to do is tell it which form to use.

You can find a functional, albeit ugly, demo application in the <tt class="docutils literal">demo</tt> directory of the [git repository][10] .

So that&#8217;s it: a general purpose, updated implementation of nested formsets. I advise using them sparingly :).

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      author:
    </th>

    <td class="field-body">
      Nathan Yergler
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
      django, formsets, forms, python
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      comments:
    </th>

    <td class="field-body">
    </td>
  </tr>
</table>

 [1]: http://yergler.net/blog/2009/09/27/nested-formsets-with-django/
 [2]: https://docs.djangoproject.com/en/1.5/releases/
 [3]: https://docs.djangoproject.com/en/1.5/topics/forms/formsets/
 [4]: https://docs.djangoproject.com/en/1.5/topics/forms/
 [5]: https://docs.djangoproject.com/en/1.5/topics/db/models/
 [6]: https://docs.djangoproject.com/en/1.5/ref/models/querysets/
 [7]: http://blog.eventbrite.com/create-your-event-pages-faster-and-easier/
 [8]: https://github.com/eventbrite/rebar/blob/master/src/rebar/group.py
 [9]: https://docs.djangoproject.com/en/1.5/topics/forms/modelforms/#inline-formsets
 [10]: https://github.com/nyergler/nested-formset
 [11]: https://docs.djangoproject.com/en/1.5/topics/class-based-views/
 [12]: https://docs.djangoproject.com/en/1.5/ref/class-based-views/generic-editing/#updateview