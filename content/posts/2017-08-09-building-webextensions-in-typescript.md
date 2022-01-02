---
title: Building WebExtensions in Typescript
date: 2017-08-10T02:27:14.000Z
categories:
  - mozCC
tags:
  - mozcc
  - mozilla
  - webextensions
slug: building-webextensions-in-typescript
---
I spent yesterday evening doing something I haven&#8217;t done in a while: tinkering. You may have seen the news that there’s a [big change coming in Firefox][1]. The short version is that later this year, the old extension model is going to be retired permanently, and extensions using it will no longer work. As someone with an extension on [addons.mozilla.org][2], I&#8217;ve received more than a few emails warning me that they&#8217;re about to go dark. This isn’t the first time Mozilla has tried to entice folks to move on from [XUL Overlays][3]: [Jetpack][4] was a similar effort to allow extensions to play better within a sandbox. This time I think it’s going to stick: the performance benefits seems undeniable, and as a developer the prospect of writing a single extension to support multiple browsers is pretty appealing.

Over a year ago I took a stab at porting [OpenAttribute][5] to [Browser (Web)Extensions][6]. I read the [Firefox code][7] and basically understood it, but only because it was the third [iteration][8] of something I&#8217;d built. The [Chrome code][9] &#8212; which should be close to a proper WebExtension &#8212; was almost inscrutable to me. So naturally I wanted to start with tests. But a year ago I couldn&#8217;t quite make the connection for some reason. WebExtensions split your code between the page (content scripts) and the background process. Long running things belong in the background, and the two communicate via message passing. After reading about the coming XUL-pocalypse, I decided to take another run at it.

Last night, though, I focused on something far smaller: just understanding how to put together a WebExtension using the technologies I&#8217;m familiar with &#8212; [react][10], [redux][11] &#8212; and the ones I&#8217;m interested in &#8212; [TypeScript][12]. The [result][13] is an extension that doesn&#8217;t do much, but it _is_ written in TypeScript, and it _does_ work in both Firefox and Chrome from a single code base.

The attribution extensions I&#8217;ve written have always had a data flow problem. There&#8217;s the question of what triggers parsing, where the extracted data is stored, and how you update the display. Not to mention how do you do that without slowing down overall browser performance. I&#8217;ve had good luck with React in other projects: it feels like it forces me to think of things more functionally, making it easier to write tests: does this component do the right thing with the right data? does this other thing send the right signals with the right input? Cool. But how to do that across the process boundary between background and content scripts?

[webext-redux][14] is a package that makes it easy to manage a Redux store in both processes and keep it in sync. The only real wrinkle is that the actions you fire on the content side have to be mapped to actions on the background process, which is where the mutations all take place.

So why TypeScript? I&#8217;ve been enjoying ES6 and the changes it brings to JavaScript. But I&#8217;ve still missed the types you get in Go with MyPy. TypeScript is interesting: it&#8217;s duck typed, but the ducks seem to quack louder than they do in Python.

I was particularly intrigued by [ambient modules][15], which is how TypeScript provides type information for third party JavaScript libraries you may want to integrate. Luckily type definitions already exit for the web extension API, and it&#8217;s easy to write a (useless) one to quell the compiler warnings.

I think the biggest shift I&#8217;ve been trying to make is understanding imports. `import * as actions from './actions'` feels weird to write, and to be honest I&#8217;m not sure how it differs from `import actions from './actions'` when there&#8217;s not a default export.

I like TypeScript enough to try another experiment in the future. The compiler already pointed out a couple of errors that would have been hard to track down.

Up next: figuring out how to test web extensions and build a single code base that runs under Chrome, Firefox, Edge, and Opera.

 [1]: http://www.tomshardware.com/news/firefox-webextensions-deprecating-old-addons,34723.html
 [2]: https://addons.mozilla.org/en-US/firefox/addon/openattribute/
 [3]: https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Overlays
 [4]: https://wiki.mozilla.org/Jetpack
 [5]: http://openattribute.com
 [6]: https://browserext.github.io/browserext/
 [7]: https://github.com/nyergler/openattribute-firefox
 [8]: https://wiki.creativecommons.org/wiki/MozCC
 [9]: https://github.com/pgogy/openattribute-chrome
 [10]: https://facebook.github.io/react/
 [11]: http://redux.js.org
 [12]: http://www.typescriptlang.org
 [13]: https://github.com/nyergler/typescript-react-redux-webext
 [14]: https://github.com/ivantsov/redux-webext
 [15]: https://www.typescriptlang.org/docs/handbook/modules.html#ambient_modules
