---
title: Extending Create React App with Babel Macros
author: Nathan Yergler
type: post
date: 2020-06-26T15:56:37+00:00
url: /2020/06/26/customize-babel-configuration-with-macros/
categories:
  - engineering
tags:
  - frontend
  - react
kind:
  - Article

---
 

I have a co-dependent relationship with <a aria-label="undefined (opens in a new tab)" href="https://create-react-app.dev/" target="_blank" rel="noreferrer noopener">Create React App</a>. When we&#8217;re good, we&#8217;re really good. When I have an unmet need &#8212; when I want to customize some part of the build process &#8212; I do my best to make CRA work. And when it doesn&#8217;t, for whatever reason, I [eject][1] and fall back to [Webpack][2], [Babel][3], & friends, resentful that CRA has let me down. Recently, though, I discovered that you can customize Babel configuration in a Create React App projects without ejecting.

Last month I was working on some shared React components and ran into this again: I wanted to use <a aria-label="undefined (opens in a new tab)" href="https://tailwindcss.com/" target="_blank" rel="noreferrer noopener">Tailwind.css</a> &#8212; fine &#8212; but I also wanted to include it in the resulting Javascript files as CSS-in-JS<span id="84a1c699-89e9-4fe7-9f32-a13082f53448" data-note="There's probably another post here: getting shared components to work with external CSS has been a real pain for me." class="abt-footnote" contenteditable="false"><sup>​*​</sup></span>. I initially despaired, thinking I&#8217;d have to `<a href="https://create-react-app.dev/docs/available-scripts#npm-run-eject">eject</a>` the components in order to customize the Babel configuration.

And then I discovered [Babel Macros][4], which &#8212; lo and behold &#8212; are [supported by CRA _since 2018_][5]_!_ 

Babel Macros are exactly what they sound like if you&#8217;re familiar with Lisp-y languages: they&#8217;re code that generates different code. In other words, they give you a functional interface to Babel&#8217;s transpiling capabilities. This allows you to write &#8220;normal&#8221; Javascript (or Typescript) code that CRA can process, but when that code is executed, it hooks into Babel&#8217;s runtime.

For my Tailwind CSS-in-JS it looks like this.

First, I tell Babel (and by extension CRA) that I want to enable macros, by adding `macros` to the list of plugins in my `.babelrc`:

<pre class="wp-block-code"><code>{
   "presets": &#91;"@babel/env", "@babel/react", "@babel/typescript"],
   "plugins": &#91;
     "@babel/proposal-class-properties",
     "@babel/syntax-object-rest-spread",
     "macros"
   ]
}</code></pre>

Then, when I want to use Tailwind-in-JS, I import the [macro][6] and use it to [tag a string][7].

<pre class="wp-block-code"><code>import tw from "@tailwindcssinjs/macro";

...

// in my react component
return (
    &lt;div
      style={tw`font-normal text-sm text-gray-700`}
    &gt;...&lt;/div&gt;
);</code></pre>

Note that I&#8217;m setting what looks like the Tailwind class list as the `style` property of my element: that&#8217;s because `tw` is actually a function that utilizes Babel&#8217;s macro functionality to map the classes to their underlying CSS properties.

With this small bit of configuration in place, running the CRA build script results in pure Javascript I can use in my downstream projects, including the necessary CSS.

There are other advantages, too: someone reading this code can now &#8220;follow their nose&#8221; to figure out what&#8217;s going on. One of the most persistent problems I&#8217;ve encountered when approaching a large codebase is understanding how the source is built: where does a dependency come from? how is the code compiled? where &#8212; why!? &#8212; does a transformation happen? This component now answers those questions for me: the use of Babel (and the macro) is **explicit**.

<section aria-label="Footnotes" class="wp-block-abt-footnotes abt-footnotes" role="region">

* * *

<li class="abt-footnotes-item" id="84a1c699-89e9-4fe7-9f32-a13082f53448-ref">
  <div class="abt-footnotes-item__marker">
    <sup>​*​</sup>
  </div>
  
  <div class="abt-footnotes-item__content">
    There&#8217;s probably another post here: getting shared components to work with external CSS has been a real pain for me.
  </div>
</li></section>

 [1]: https://create-react-app.dev/docs/available-scripts#npm-run-eject
 [2]: https://webpack.js.org/
 [3]: https://babeljs.io/
 [4]: https://babeljs.io/blog/2017/09/11/zero-config-with-babel-macros
 [5]: https://reactjs.org/blog/2018/10/01/create-react-app-v2.html
 [6]: https://github.com/Arthie/tailwindcssinjs
 [7]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals