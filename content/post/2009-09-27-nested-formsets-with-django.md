---
title: 'Nested Formsets with Django'
author: Nathan Yergler
type: post
date: 2009-09-27T19:42:42+00:00
excerpt: |
  <p class="update">I&#8217;ve published an <a class="reference external" href="http://yergler.net/blog/2013/09/03/nested-formsets-redux/">updated post</a> about
  nested formsets, along with an generic implementation and demo
  application on <a class="reference external" href="https://github.com/nyergler/nested-formset">GitHub</a>.</p>
  <p>I spent Labor Day weekend in New York City working on a side project
  with <a class="reference external" href="http://www.alexrobertsontextor.com/">Alex</a>. The project is
  coming together (albeit slowly, sometimes), and there have been a few
  interesting ...</p>
url: /2009/09/27/nested-formsets-with-django/
categories:
  - development
  - koucou
tags:
  - django
  - formsets
  - howto
  - orm
  - python

---
<p class="update">
  I&#8217;ve published an <a class="reference external" href="http://yergler.net/blog/2013/09/03/nested-formsets-redux/">updated post</a> about nested formsets, along with an generic implementation and demo application on <a class="reference external" href="https://github.com/nyergler/nested-formset">GitHub</a>.
</p>

I spent Labor Day weekend in New York City working on a side project with [Alex][1] . The project is coming together (albeit slowly, sometimes), and there have been a few interesting technical challenges. Labor Day weekend I was building an interface for editing data on the site. The particular feature I’m working on uses a multi-level data model; an example of this kind of model would be modeling City Blocks, where each Block has one or more Buildings, and each Building has one or more Tenants. Using this as an example, I was building the City Block editor.

[Django][2]  [Formsets][3]  manage the complexity of multiple copies of a form in a view. They help you keep track of how many copies you started with, which ones have been changed, and which ones should be deleted. But what if you’re working with this hypothetical data model and want to allow people to edit the Buildings _and_ Tenants for a Block, all on one page? In this case you want each form in the Building formset to have a complete Tenant formset, all its own. The Django Formset documentation is silent on this issue, possibly (probably?) because it’s an edge case and one that almost certainly requires some application-specific thought. I spent the better part of two days working on it — the first pretty much a throw away, the second wildly productive thanks to <span class="caps">TDD</span> — and this is what I came up with.

Formsets act as wrappers around Django [forms][4] , providing the accounting machinery and convenience methods needed for managing multiple copies of the form. My experience has been that, unlike forms where you have to write your form class (no matter how simple), you write a Formset class infrequently. Instead you use the factory functions which generate a default that’s suitable for most situations. As with regular Forms and Model Forms, Django offers [Model Formsets][5] , which simplify the task of creating a formset for a form that handles instances of a model. In addition to model formsets, Django also provides [inline formsets][6] , which make it easier to deal with a set of objects that share a common foreign key. So in the example data model, an instance of the inline formset might model all the Buildings on a Block, or all the Tenants in the Building. Even if you’re not interested in nested formsets, the inline formsets can be incredibly useful.

Let’s go ahead and define the models for our example:

<tt class="docutils literal">models.py</tt>

<pre class="literal-block">class Block(models.Model):
    description = models.CharField(max_length=255)

class Building(models.Model):
    block = models.ForeignKey(Block)
    address = models.CharField(max_length=255)

class Tenant(models.Model):
    building = models.ForeignKey(Building)
    name = models.CharField(max_length=255)
    unit = models.CharField(max_length=255)
</pre>

After we have our models in place we need to define the forms. The nested form is straight-forward — it’s just a normal inline formset.

<tt class="docutils literal">forms.py</tt>

<pre class="literal-block">from django.forms.models import inlineformset_factory

TenantFormset = inlineformset_factory(models.Building, models.Tenant, extra=1)
</pre>

Note that inlineformset_factory not only creates the Formset class, but it also create the [ModelForm][7]  for the model (<tt class="docutils literal">models.Tenant</tt> in this example).

The &#8220;host&#8221; formset which contains the nested one — <tt class="docutils literal">BuildingFormset</tt> in our example — requires some additional work. There are a few cases that need to be handled:

<ol class="arabic simple">
  <li>
    <strong>Validation</strong> — When validating an item in the formset, we also need to validate its sub-items (those on its nested formset.
  </li>
  <li>
    <strong>Saving existing data</strong> — When saving an item, changes to the items in the nested formset also need to be saved.
  </li>
  <li>
    <strong>Saving new parent objects</strong> — If the user adds &#8220;parent&#8221; data as well as sub-items (so adding a Building, along with Tenants), the nested form won’t have a reference back to the parent unless we add it ourselves.
  </li>
  <li>
    Finally, the very basic issue of creating the nested formset instance for each parent form.
  </li>
</ol>

Before delving into those issues, let’s look at the basic formset declaration.

<tt class="docutils literal">forms.py</tt>

<pre class="literal-block">from django.forms.models import BaseInlineFormSet

class BaseBuildingFormset(BaseInlineFormSet):
    pass

BuildingFormset = inlineformset_factory(models.Block, models.Building,
                                formset=BaseBuildingFormset, extra=1)
</pre>

Here we declare a sub-class of the <tt class="docutils literal">BaseInlineFormSet</tt> and then pass it to the <tt class="docutils literal">inlineformset_factory</tt> as the class we want to base our new formset on.

Let’s start with the most basic piece of functionality: associating the nested formsets with each form. The super class defines an <tt class="docutils literal">add_fields</tt> method which is responsible for adding the fields (and their initial values since this is a model-based Form) to a specific form in the formset. This seemed as good a place as any to add our formset creation code.

<tt class="docutils literal">forms.py</tt>

<pre class="literal-block">class BaseBuildingFormset(BaseInlineFormSet):

    def add_fields(self, form, index):
        # allow the super class to create the fields as usual
        super(BaseBuildingFormset, self).add_fields(form, index)

        # created the nested formset
        try:
            instance = self.get_queryset()[index]
            pk_value = instance.pk
        except IndexError:
            instance=None
            pk_value = hash(form.prefix)

        # store the formset in the .nested property
        form.nested = [
            TenantFormset(data=self.data,
                            instance = instance,
                            prefix = 'TENANTS_%s’ % pk_value)]
</pre>

The heart of what we’re doing here is in the last statement: creating a <tt class="docutils literal">form.nested</tt> property that contains a list of nested formsets — only one in our example and in the code I implemented; more than one would probably be a <span class="caps">UI</span> nightmare. In order to initialize the formset we need two pieces of information: the parent instance and a form prefix. If we’re creating fields for an existing instance we can use the <tt class="docutils literal">get_queryset</tt> method to return the list of objects. If this is a form for a new instance (i.e., the form created by specifying <tt class="docutils literal">extra=1</tt>), we need to specify None as the instance. We include the objects primary key in the form prefix to make sure the formsets are named uniquely; if this is an extra form we <tt class="docutils literal">hash</tt> the parent form’s prefix (which will also be unique). The Django documentation has instructions on [using multiple formsets in a single view][8]  that are relevant here.

Now that we have the nested formset created we can display it in the template.

<tt class="docutils literal">views.py</tt>

<pre class="literal-block">def edit_block_buildings(request, block_id):
    """Edit buildings and their tenants on a given block."""

    block = get_object_or_404(models.Block, id=block_id)

    if request.method == 'POST’:
        formset = forms.BuildingFormset(request.POST, instance=block)

        if formset.is_valid():
            rooms = formset.save_all()

            return redirect('block_view’, block_id=block.id)

    else:
        formset = forms.BuildingFormset(instance=block)

    return render_to_response('rentals/edit_buildings.html’,
                              {'block’:block,
                               'buildings’:formset,
                               },
                              context_instance=RequestContext(request))
</pre>

<tt class="docutils literal">edit_buildings.html</tt> (fragment)

<pre class="literal-block">{{ buildings.management_form }}
{% for building in buildings.forms %}

  {{ building }}

  {% if building.nested %}
  {% for formset in building.nested %}
  {{ formset.as_table }}
  {% endfor %}
  {% endif %}

{% endfor %}
</pre>

When the page is submitted, the idiom is to call <tt class="docutils literal">formset.is_valid()</tt> to validate the forms. We override <tt class="docutils literal">is_valid</tt> on our formset to add validation for the nested formsets as well.

<tt class="docutils literal">forms.py</tt>

<pre class="literal-block">class BaseBuildingFormset(BaseInlineFormSet):
    ...

    def is_valid(self):
        result = super(BaseBuildingFormset, self).is_valid()

        for form in self.forms:
            if hasattr(form, 'nested’):
                for n in form.nested:
                    # make sure each nested formset is valid as well
                    result = result and n.is_valid()

        return result
</pre>

Finally, assuming the form validates, we need to handle saving. As I mentioned earlier, there are two different situations here — saving existing data (and possibly adding new nested data) and saving completely new data.

For new data we need to override <tt class="docutils literal">save_new</tt> and update the parent reference for any nested data _after_ we save (well, instantiate) the parent.

<tt class="docutils literal">forms.py</tt>

<pre class="literal-block">class BaseBuildingFormset(BaseInlineFormSet):
    ...

    def save_new(self, form, commit=True):
        """Saves and returns a new model instance for the given form."""

        instance = super(BaseBuildingFormset, self).save_new(form, commit=commit)

        # update the form’s instance reference
        form.instance = instance

        # update the instance reference on nested forms
        for nested in form.nested:
            nested.instance = instance

            # iterate over the cleaned_data of the nested formset and update the foreignkey reference
            for cd in nested.cleaned_data:
                cd[nested.fk.name] = instance

        return instance
</pre>

Finally, we add a <tt class="docutils literal">save_all</tt> method for saving the parent formset and all nested formsets.

<tt class="docutils literal">forms.py</tt>

<pre class="literal-block">from django.forms.formsets import DELETION_FIELD_NAME

class BaseBuildingFormset(BaseInlineFormSet):
    ...

    def should_delete(self, form):
        """Convenience method for determining if the form’s object will
        be deleted; cribbed from BaseModelFormSet.save_existing_objects."""

        if self.can_delete:
            raw_delete_value = form._raw_value(DELETION_FIELD_NAME)
            should_delete = form.fields[DELETION_FIELD_NAME].clean(raw_delete_value)
            return should_delete

        return False

    def save_all(self, commit=True):
        """Save all formsets and along with their nested formsets."""

        # Save without committing (so self.saved_forms is populated)
        # — We need self.saved_forms so we can go back and access
        #    the nested formsets
        objects = self.save(commit=False)

        # Save each instance if commit=True
        if commit:
            for o in objects:
                o.save()

        # save many to many fields if needed
        if not commit:
            self.save_m2m()

        # save the nested formsets
        for form in set(self.initial_forms + self.saved_forms):
            if self.should_delete(form): continue

            for nested in form.nested:
                nested.save(commit=commit)
</pre>

There are two methods defined here; the first, <tt class="docutils literal">should_delete</tt>, is lifted almost directly from code in <tt class="docutils literal">django.forms.models.BaseModelFormSet.save_existing_objects</tt>. It takes a form object in the formset and returns True if the object for that form is going to be deleted. We use this to short-circuit saving the nested formsets: no point in saving them if we’re going to delete their required ForeignKey.

The <tt class="docutils literal">save_all</tt> method is responsible for saving (updating, creating, deleting) the forms in the formset, as well as all the nested formsets for each form. One thing to note is that regardless of whether we’re [committing our save][9]  (<tt class="docutils literal">commit=True</tt>), we initially save the forms with <tt class="docutils literal">commit=False</tt>. When you save a model formset with <tt class="docutils literal">commit=False</tt>, Django populates a <tt class="docutils literal">saved_forms</tt> attribute with the list of all the forms saved — new and old. We need this list of saved forms to make sure we are able to save any nested formsets that are attached to newly created forms (ones that did not exist when the initial request was made). After we know <tt class="docutils literal">saved_forms</tt> has been populated we can do another pass to commit if necessary.

There are certainly places this code could be improved, tightened up or generalized (for example, the nested formset prefix calculation and possibly <tt class="docutils literal">save_all</tt>). It’s also entirely plausible that you could wrap much of this into a factory function. But this gets nested editing working and once you wrap your head around what needs to be done, it’s actually fairly straight forward.

<table class="docutils field-list" frame="void" rules="none">
  <col class="field-name" /> <col class="field-body" /> <tr class="field">
    <th class="field-name">
      date:
    </th>

    <td class="field-body">
      2009-09-27 19:42:42
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      wordpress_id:
    </th>

    <td class="field-body">
      1093
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
      nested-formsets-with-django
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
      development, koucou
    </td>
  </tr>

  <tr class="field">
    <th class="field-name">
      tags:
    </th>

    <td class="field-body">
      django, formsets, howto, orm, python
    </td>
  </tr>
</table>

 [1]: http://www.alexrobertsontextor.com/
 [2]: http://djangoproject.com
 [3]: http://docs.djangoproject.com/en/dev/topics/forms/formsets/
 [4]: http://docs.djangoproject.com/en/dev/topics/forms/
 [5]: http://docs.djangoproject.com/en/dev/topics/forms/modelforms/#model-formsets
 [6]: http://docs.djangoproject.com/en/dev/topics/forms/modelforms/#inline-formsets
 [7]: http://docs.djangoproject.com/en/dev/topics/forms/modelforms/#modelform
 [8]: http://docs.djangoproject.com/en/dev/topics/forms/formsets/#using-more-than-one-formset-in-a-view
 [9]: http://docs.djangoproject.com/en/dev/topics/forms/modelforms/#id2