---
title: Revisiting Nested Formsets
date: 2013-09-03T00:00:00.000Z
categories:
  - development
tags:
  - django
  - forms
  - formsets
  - python
slug: nested-formsets-redux
---
It's been nearly four years since I first wrote about [nested formsets][1] .
When I wrote about nested formsets, I must have been using Django 1.1 (based on
correlating dates in the [release notes][2]  and the original blog post), which
means what I wrote has had four major releases of Django to drift out of date.
And yet it's still one of the most frequently visited posts on my blog, and one
of the few that I receive email questions about. Four years later, it seemed
like the time to revisit the original post to see if nested formsets still make
sense and if so, what they look like now.

[Formsets][3]  help manage the complexity of maintaining multiple instances of a
[Form][4]  on a single page. For example, if you're editing a list of items on a
single page, each individual item may be a copy of the same form. Formsets help
manage things like HTML ID generation, flagging forms for deletion, and
validating the entire set of forms together. When used with [Models][5] , they
allow you to edit the members of a [QuerySet][6]  all at once.

So what are nested formsets? The example I used previously was something along
the lines of Block -- Building -- Tenant: one Block has many Buildings, and each
Building has many Tenants. If you're editing a Block, you want to see all the
Buildings and all the Tenants at once. That's a fine hypothetical, but one of
the questions I get with some frequency is "what's a good use case for a nested
formset?" Four years later --- two and a half of them spent doing web
development full time --- I have yet to encounter a situation where I needed a
nested formset. In that time I've built some pretty complex forms, including
Eventbrite's [event creation flow][7] . That page was complex enough that I
built [Form Groups][8]  to support the interaction, and I think the jury is
still out on whether that was a good idea or not. It's possible that there are
use cases for nested formsets in admin-style applications that I haven't
encountered. I think it's also possible that there are reasons to use a nested
formset alongside a Javascript framework to ease the user experience.

Note that if you only have one level of relationships on the page (ie, you're
editing all the Tenants for a single Building in our example) then you don't
need nested formsets: Django's [inline formsets][9]  will work just fine.

And why not nested form sets? From the questions people have asked and my
experience building Form Groups (which borrowed some ideas), I've concluded that
they're difficult to get completely right, have edge cases that can be hard to
manage, and create quite complicated user interfaces. In my original blog post I
alluded to the fact that I spent most of a three day weekend trying to get the
nested formsets to work right. Two thirds of that time was spent on work I
eventually threw away, because I couldn't manage the edge cases. It was only
when I started using TDD that I managed to get something working. But I didn't
publish the tests with my previous code example, so no one else was able to
benefit from that work.

If you've read this far and still think a nested formset is the best solution
for your problem, what would that look like with Django 1.5? The answer is:
simpler. I decided to rewrite my initial implementation using test driven
development. The full implementation of the formset logic only overrides three
methods from `BaseInlineFormSet`.

```python
from django.forms.models import (
    BaseInlineFormSet,
    inlineformset_factory,
)


class BaseNestedFormset(BaseInlineFormSet):
    def add_fields(self, form, index):
        # allow the super class to create the fields as usual
        super(BaseNestedFormset, self).add_fields(form, index)

        form.nested = self.nested_formset_class(
            instance=form.instance,
            data=form.data if self.is_bound else None,
            prefix='%s-%s' % (
                form.prefix,
                self.nested_formset_class.get_default_prefix(),
            ),
        )

    def is_valid(self):
        result = super(BaseNestedFormset, self).is_valid()

        if self.is_bound:
            # look at any nested formsets, as well
            for form in self.forms:
                result = result and form.nested.is_valid()

        return result

    def save(self, commit=True):
        result = super(BaseNestedFormset, self).save(commit=commit)
        for form in self:
            form.nested.save(commit=commit)

        return result
```

These three method cover the four areas of functionality I called out in the
[previous post][1] : validation (`is_valid`), saving (both existing and new
objects are handled here by `save`), and instantiation (creating the nested
formset instances, handled by `add_fields`).

By making it a general purpose baseclass, I'm also able to write a simple
factory function, to make using it more in tune with Django's built-in model
formset.

```python
def nested_formset_factory(parent_model, child_model, grandchild_model):
    parent_child = inlineformset_factory(
        parent_model,
        child_model,
        formset=BaseNestedFormset,
    )

    parent_child.nested_formset_class = inlineformset_factory(
        child_model,
        grandchild_model,
    )

    return parent_child
```

You can find the source to this [general purpose implementation on GitHub][10] . I wrote tests at each step as I worked on this, so it may be interesting to go back and look at individual commits, as well.

So how would you use this in with Django 1.5? With a [class-based view][11] , of course.

```python
from django.views.generic.edit import UpdateView

class EditBuildingsView(UpdateView):
    model = models.Block

    def get_template_names(self):

        return ['blocks/building_form.html']

    def get_form_class(self):

        return nested_formset_factory(
            models.Block,
            models.Building,
            models.Tenant,
        )

    def get_success_url(self):

        return reverse('blocks-list')
```

Of course there's more needed --- templates, for one --- but this shows just how
easy it is to create the views and leverage a generic abstraction. The real keys
here are specifying `model = models.Block` and the definition of
`get_form_class`. Django's [UpdateView][12]  knows how to implement the basic
form processing idiom (`GET`, `POST`, redirect), so all you need to do is
tell it which form to use.

You can find a functional, albeit ugly, demo application in the `demo` directory
of the [git repository][10] .

So that's it: a general purpose, updated implementation of nested formsets. I
advise using them sparingly :).



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
