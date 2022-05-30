---
title: Nested Formsets with Django
date: 2009-09-27T19:42:42.000Z
categories:
  - development
  - koucou
tags:
  - django
  - formsets
  - howto
  - orm
  - python
slug: nested-formsets-with-django
---
<p class="update">
  I've published an <a class="reference external" href="http://yergler.net/blog/2013/09/03/nested-formsets-redux/">updated post</a> about nested formsets, along with an generic implementation and demo application on <a class="reference external" href="https://github.com/nyergler/nested-formset">GitHub</a>.
</p>

I spent Labor Day weekend in New York City working on a side project with [Alex][1] . The project is coming together (albeit slowly, sometimes), and there have been a few interesting technical challenges. Labor Day weekend I was building an interface for editing data on the site. The particular feature I’m working on uses a multi-level data model; an example of this kind of model would be modeling City Blocks, where each Block has one or more Buildings, and each Building has one or more Tenants. Using this as an example, I was building the City Block editor.

[Django][2]  [Formsets][3]  manage the complexity of multiple copies of a form in a view. They help you keep track of how many copies you started with, which ones have been changed, and which ones should be deleted. But what if you’re working with this hypothetical data model and want to allow people to edit the Buildings _and_ Tenants for a Block, all on one page? In this case you want each form in the Building formset to have a complete Tenant formset, all its own. The Django Formset documentation is silent on this issue, possibly (probably?) because it’s an edge case and one that almost certainly requires some application-specific thought. I spent the better part of two days working on it — the first pretty much a throw away, the second wildly productive thanks to TDD — and this is what I came up with.

Formsets act as wrappers around Django [forms][4] , providing the accounting machinery and convenience methods needed for managing multiple copies of the form. My experience has been that, unlike forms where you have to write your form class (no matter how simple), you write a Formset class infrequently. Instead you use the factory functions which generate a default that’s suitable for most situations. As with regular Forms and Model Forms, Django offers [Model Formsets][5] , which simplify the task of creating a formset for a form that handles instances of a model. In addition to model formsets, Django also provides [inline formsets][6] , which make it easier to deal with a set of objects that share a common foreign key. So in the example data model, an instance of the inline formset might model all the Buildings on a Block, or all the Tenants in the Building. Even if you’re not interested in nested formsets, the inline formsets can be incredibly useful.

Let’s go ahead and define the models for our example:

`models.py`

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

`forms.py`

<pre class="literal-block">from django.forms.models import inlineformset_factory

TenantFormset = inlineformset_factory(models.Building, models.Tenant, extra=1)
</pre>

Note that inlineformset_factory not only creates the Formset class, but it also create the [ModelForm][7]  for the model (`models.Tenant` in this example).

The "host" formset which contains the nested one — `BuildingFormset` in our example — requires some additional work. There are a few cases that need to be handled:

<ol class="arabic simple">
  <li>
    <strong>Validation</strong> — When validating an item in the formset, we also need to validate its sub-items (those on its nested formset.
  </li>
  <li>
    <strong>Saving existing data</strong> — When saving an item, changes to the items in the nested formset also need to be saved.
  </li>
  <li>
    <strong>Saving new parent objects</strong> — If the user adds "parent" data as well as sub-items (so adding a Building, along with Tenants), the nested form won’t have a reference back to the parent unless we add it ourselves.
  </li>
  <li>
    Finally, the very basic issue of creating the nested formset instance for each parent form.
  </li>
</ol>

Before delving into those issues, let’s look at the basic formset declaration.

`forms.py`

<pre class="literal-block">from django.forms.models import BaseInlineFormSet

class BaseBuildingFormset(BaseInlineFormSet):
    pass

BuildingFormset = inlineformset_factory(models.Block, models.Building,
                                formset=BaseBuildingFormset, extra=1)
</pre>

Here we declare a sub-class of the `BaseInlineFormSet` and then pass it to the `inlineformset_factory` as the class we want to base our new formset on.

Let’s start with the most basic piece of functionality: associating the nested formsets with each form. The super class defines an `add_fields` method which is responsible for adding the fields (and their initial values since this is a model-based Form) to a specific form in the formset. This seemed as good a place as any to add our formset creation code.

`forms.py`

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

The heart of what we’re doing here is in the last statement: creating a `form.nested` property that contains a list of nested formsets — only one in our example and in the code I implemented; more than one would probably be a UI nightmare. In order to initialize the formset we need two pieces of information: the parent instance and a form prefix. If we’re creating fields for an existing instance we can use the `get_queryset` method to return the list of objects. If this is a form for a new instance (i.e., the form created by specifying `extra=1`), we need to specify None as the instance. We include the objects primary key in the form prefix to make sure the formsets are named uniquely; if this is an extra form we `hash` the parent form’s prefix (which will also be unique). The Django documentation has instructions on [using multiple formsets in a single view][8]  that are relevant here.

Now that we have the nested formset created we can display it in the template.

`views.py`

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

`edit_buildings.html` (fragment)

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

When the page is submitted, the idiom is to call `formset.is_valid()` to validate the forms. We override `is_valid` on our formset to add validation for the nested formsets as well.

`forms.py`

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

For new data we need to override `save_new` and update the parent reference for any nested data _after_ we save (well, instantiate) the parent.

`forms.py`

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

Finally, we add a `save_all` method for saving the parent formset and all nested formsets.

`forms.py`

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

There are two methods defined here; the first, `should_delete`, is lifted almost directly from code in `django.forms.models.BaseModelFormSet.save_existing_objects`. It takes a form object in the formset and returns True if the object for that form is going to be deleted. We use this to short-circuit saving the nested formsets: no point in saving them if we’re going to delete their required ForeignKey.

The `save_all` method is responsible for saving (updating, creating, deleting) the forms in the formset, as well as all the nested formsets for each form. One thing to note is that regardless of whether we’re [committing our save][9]  (`commit=True`), we initially save the forms with `commit=False`. When you save a model formset with `commit=False`, Django populates a `saved_forms` attribute with the list of all the forms saved — new and old. We need this list of saved forms to make sure we are able to save any nested formsets that are attached to newly created forms (ones that did not exist when the initial request was made). After we know `saved_forms` has been populated we can do another pass to commit if necessary.

There are certainly places this code could be improved, tightened up or generalized (for example, the nested formset prefix calculation and possibly `save_all`). It’s also entirely plausible that you could wrap much of this into a factory function. But this gets nested editing working and once you wrap your head around what needs to be done, it’s actually fairly straight forward.



 [1]: http://www.alexrobertsontextor.com/
 [2]: http://djangoproject.com
 [3]: http://docs.djangoproject.com/en/dev/topics/forms/formsets/
 [4]: http://docs.djangoproject.com/en/dev/topics/forms/
 [5]: http://docs.djangoproject.com/en/dev/topics/forms/modelforms/#model-formsets
 [6]: http://docs.djangoproject.com/en/dev/topics/forms/modelforms/#inline-formsets
 [7]: http://docs.djangoproject.com/en/dev/topics/forms/modelforms/#modelform
 [8]: http://docs.djangoproject.com/en/dev/topics/forms/formsets/#using-more-than-one-formset-in-a-view
 [9]: http://docs.djangoproject.com/en/dev/topics/forms/modelforms/#id2
