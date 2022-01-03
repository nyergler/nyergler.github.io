---
title: Using pip with buildout
date: 2010-03-28T13:05:22.000Z
categories:
  - development
tags:
  - dependencies
  - django
  - koucou
  - pip
  - python
  - scm
  - zc.buildout
slug: using-pip-with-buildout
---
I’ve been asked to add a blog to [koucou][1] , and this has turned out to be more of a learning experience than I expected. My first instinct was to use [WordPress][2]  — I’m familiar with it, like the way it works, and I’m not interested in building my own. The one wrinkle was that we wanted to integrate the blog visually with the rest of the site, which is built on [Django][3] . I decided to give [Mingus][4]  a try. This post isn’t about Mingus — I’ll write about that shortly — but rather about [pip][5] , which Mingus uses to manage dependencies. Mingus includes a [requirements file][6]  with the stable dependencies for the application (one of its goals is application re-use, so there are a lot of them). As I [mentioned previously][7] , `pip` is the Python packaging/installation tool I have the least experience with, so I decided to try converting my existing project to pip as a starting point — to gain experience with pip, and to try and ease integration woes with Mingus.

When I started, the project used the following setup to manage dependencies and the build process:

  * <p class="first">
      Dependencies which have an <a class="reference external" href="http://peak.telecommunity.com/DevCenter/EggFormats">egg</a> or <a class="reference external" href="http://peak.telecommunity.com/DevCenter/setuptools">setuptools</a>-compatible <a class="reference external" href="http://docs.python.org/distutils/sourcedist.html">sdist</a> available are specified in <a class="reference external" href="http://peak.telecommunity.com/DevCenter/setuptools#declaring-dependencies">install_requires</a> in setup.py
    </p>

    <pre class="literal-block">setup(
    name = “soursop”,

    # ... details omitted

    install_requires = ['setuptools’,
                        'zope.interface’,
                        'zope.component’,
                        'PILwoTK’,
                        'flup’,
                        ],

    )
</pre>

  * <p class="first">
      A <a class="reference external" href="http://buildout.org/">buildout</a> configuration that uses <a class="reference external" href="http://pypi.python.org/pypi/djangorecipe">djangorecipe</a> to install Django, and <a class="reference external" href="http://pypi.python.org/pypi/zc.recipe.egg">zc.recipe.egg</a> to install the application egg and its dependencies
    </p>

    <pre class="literal-block">[buildout]
develop = .
parts = django scripts
unzip = true
eggs = soursop

    [django]recipe = djangorecipeversion = 1.1.1settings = settingseggs = ${buildout:eggs}project = soursop

    [scripts]recipe = zc.recipe.eggeggs =
     ${buildout:eggs}interpreter = pythondependent-scripts = trueextra-paths =
   ${django:location}initialization =
   import os
   os.environ['DJANGO_SETTINGS_MODULE’] = '${django:project}.${django:settings}’
</pre>

  * <p class="first">
      Dependencies that didn’t easily install using setuptools (either they didn’t have a sane source-tree layout or weren’t available from PyPI) are either specified as <a class="reference external" href="http://www.kernel.org/pub/software/scm/git/docs/git-submodule.html">git submodules</a> or imported into the repository.
    </p>

All this worked pretty well (although I’ve never really loved git submodules).

[gp.recipe.pip][8]  is a buildout recipe which allows you to install a set of Python packages using pip. gp.recipe.pip builds on [zc.recipe.egg][9] , so it inherits all the functionality of that recipe (installing dependencies declared in `setup.py`, generating scripts, etc). So in that respect, I could simply replace the recipe line in the `scripts` part and start using pip requirements to install from source control, create editable checkouts, etc.

Previously, I used the `${buildout:eggs}` setting to share a set of packages to install between the `django` part (which I used to generate a Django management script) and the `scripts` part (which I used to resolve the dependency list and install scripts defined as entry points). I didn’t spend much time looking into replicating this with gp.recipe.pip; it wasn’t immediately clear to me how to get a working set out of it that’s equivalent to an `eggs` specification (I’m not even sure it makes sense to expect such a thing).

Ignoring the issue of the management script, I simplified my buildout configuration, removing the `django` part and using `gp.recipe.pip`:

---

<pre class="literal-block">[buildout]develop = .parts = soursopunzip = trueeggs = soursopdjango-settings = settingsdjango-project = soursop

    [soursop]recipe = gp.recipe.pipinterpreter = pythoneggs = ${buildout:eggs}sources-directory = vendor

    initialization =
   import os
   os.environ['DJANGO_SETTINGS_MODULE’] = '${buildout:django-project}.${buildout:django-settings}’
</pre>

This allowed me to start specifying the resources I previously included as git submodules as pip requirements:

<pre class="literal-block">[soursop]
recipe = gp.recipe.pip
interpreter = python
install =      -r requirements.txt
eggs = ${buildout:eggs}
sources-directory = vendor
</pre>

The install parameter specifies a series of pip dependencies that buildout will install when it runs. These can include version control URLs, recursive requirements (in this case, [a requirements file][10] , `requirements.txt`), and editable dependencies. In this case I’ve also specified a directory, `vendor`, in which editable dependencies will be installed.

That actually works pretty well: I can define my list of dependencies in a text file on its own, and I can move away from git submodules and vendor imports to specifying [D]VCS urls that pip will pull.

Unfortunately, I’m still missing my manage script. I wound up creating a small function and entry point to cause the script to be generated. In `soursop/scripts.py`, I created the following function:

<pre class="literal-block">def manage():
    “”“Entry point for Django manage command; assumes
    DJANGO_SETTINGS_MODULE has been set in the environment.

    This is a convenience for getting a ./bin/manage console script
    when using buildout.”“”

    from django.core import management
    from django.utils import importlib
    import os

    settings = importlib.import_module(os.environ.get('DJANGO_SETTINGS_MODULE’))

    management.execute_manager(settings)
</pre>

In setup.py, I added an entry point:

<pre class="literal-block">entry_points = {
       'console_scripts' : [
           'manage = soursop.scripts:manage',
           ]
       },
</pre>

Re-run buildout, and a `manage` script appears in the `bin` directory. Note that I’m still using the environment variable, `DJANGO_SETTINGS_MODULE`, to specify which settings module we’re using. I could specify the settings module directly in my manage script wrapper. I chose not to do this because I wanted to emulate the behavior of `djangorecipe`, which lets you change the settings module in buildout.cfg (i.e., from development to production settings). This is also the reason I have custom initialization code specified in my buildout configuration.

Generally I really like the way this works. I’ve been able to eliminate the tracked vendor code in my project, as well as the git submodules. I can easily move my pip requirements into a requirements file and specify it with -r in the install line, separating dependency information from build information.

There are a couple things that I’m ambivalent about. Primarily, I now have two different places where I’ve declared some of my dependencies, `setup.py` and a requirements file, and each has advantages (which are correspondingly disadvantages for the other). Specifying the requirements in the pip requirements file gives me more flexibility — I can install from subversion, git, or mercurial without even thinking about it. But if someone installs my package from a source distribution using easy_install or pip, the dependencies won’t necessarily be satisfied [[1]][11]{#id2.footnote-reference} [[2]][12]{#id3.footnote-reference} . And conversely, specifying the requirements in `setup.py` allows everyone to introspect them at installation time, but sacrifices the flexibility I’ve gained from pip.

I’m not sure that we’ll end up using Mingus for koucou, but I think we’ll stick with gp.recipe.pip. The disadvantage is a small one (at least in this situation), and it’s not really any worse than the previous situation.

---



 [1]: http://koucou.com/
 [2]: http://wordpress.org/
 [3]: http://djangoproject.com/
 [4]: http://github.com/montylounge/django-mingus
 [5]: http://pypi.python.org/pip
 [6]: http://pip.openplans.org/requirement-format.html
 [7]: http://yergler.net/blog/2010/03/09/for-some-definition-of-reusable/
 [8]: http://pypi.python.org/pypi/gp.recipe.pip
 [9]: http://pypi.python.org/pypi/zc.recipe.egg
 [10]: http://pip.openplans.org/#requirements-files
 [11]: #id4
 [12]: #id5
