<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/Webpack.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Using with webpack</h1></header><article><div><span><p>Jest can be used in projects that use <a href="https://webpack.js.org/">webpack</a> to manage assets, styles, and compilation. webpack <em>does</em> offer some unique challenges over other tools because it integrates directly with your application to allow managing stylesheets, assets like images and fonts, along with the expansive ecosystem of compile-to-JavaScript languages and tools.</p>
<h2><a class="anchor" aria-hidden="true" id="a-webpack-example"></a><a href="#a-webpack-example" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>A webpack example</h2>
<p>Let&apos;s start with a common sort of webpack config file and translate it to a Jest setup.</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// webpack.config.js</span>
<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">module</span>: {
    <span class="hljs-attr">loaders</span>: [
      {<span class="hljs-attr">exclude</span>: [<span class="hljs-string">&apos;node_modules&apos;</span>], <span class="hljs-attr">loader</span>: <span class="hljs-string">&apos;babel&apos;</span>, <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\.jsx?$/</span>},
      {<span class="hljs-attr">loader</span>: <span class="hljs-string">&apos;style-loader!css-loader&apos;</span>, <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\.css$/</span>},
      {<span class="hljs-attr">loader</span>: <span class="hljs-string">&apos;url-loader&apos;</span>, <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\.gif$/</span>},
      {<span class="hljs-attr">loader</span>: <span class="hljs-string">&apos;file-loader&apos;</span>, <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\.(ttf|eot|svg)$/</span>},
    ],
  },
  <span class="hljs-attr">resolve</span>: {
    <span class="hljs-attr">alias</span>: {
      <span class="hljs-attr">config$</span>: <span class="hljs-string">&apos;./configs/app-config.js&apos;</span>,
      <span class="hljs-attr">react</span>: <span class="hljs-string">&apos;./vendor/react-master&apos;</span>,
    },
    <span class="hljs-attr">extensions</span>: [<span class="hljs-string">&apos;&apos;</span>, <span class="hljs-string">&apos;js&apos;</span>, <span class="hljs-string">&apos;jsx&apos;</span>],
    <span class="hljs-attr">modules</span>: [
      <span class="hljs-string">&apos;node_modules&apos;</span>,
      <span class="hljs-string">&apos;bower_components&apos;</span>,
      <span class="hljs-string">&apos;shared&apos;</span>,
      <span class="hljs-string">&apos;/shared/vendor/modules&apos;</span>,
    ],
  },
};
</code></pre>
<p>If you have JavaScript files that are transformed by Babel, you can <a href="/docs/en/getting-started#using-babel">enable support for Babel</a> by installing the <code>babel-jest</code> plugin. Non-Babel JavaScript transformations can be handled with Jest&apos;s <a href="/docs/en/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object"><code>transform</code></a> config option.</p>
<h3><a class="anchor" aria-hidden="true" id="handling-static-assets"></a><a href="#handling-static-assets" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Handling Static Assets</h3>
<p>Next, let&apos;s configure Jest to gracefully handle asset files such as stylesheets and images. Usually, these files aren&apos;t particularly useful in tests so we can safely mock them out. However, if you are using CSS Modules then it&apos;s better to mock a proxy for your className lookups.</p>
<pre><code class="hljs css language-json"><span class="hljs-comment">// package.json</span>
{
  <span class="hljs-attr">&quot;jest&quot;</span>: {
    <span class="hljs-attr">&quot;moduleNameMapper&quot;</span>: {
      <span class="hljs-attr">&quot;\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$&quot;</span>: <span class="hljs-string">&quot;&lt;rootDir&gt;/__mocks__/fileMock.js&quot;</span>,
      <span class="hljs-attr">&quot;\\.(css|less)$&quot;</span>: <span class="hljs-string">&quot;&lt;rootDir&gt;/__mocks__/styleMock.js&quot;</span>
    }
  }
}
</code></pre>
<p>And the mock files themselves:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// __mocks__/styleMock.js</span>

<span class="hljs-built_in">module</span>.exports = {};
</code></pre>

<pre><code class="hljs css language-js"><span class="hljs-comment">// __mocks__/fileMock.js</span>

<span class="hljs-built_in">module</span>.exports = <span class="hljs-string">&apos;test-file-stub&apos;</span>;
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="mocking-css-modules"></a><a href="#mocking-css-modules" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Mocking CSS Modules</h3>
<p>You can use an <a href="https://github.com/keyanzhang/identity-obj-proxy">ES6 Proxy</a> to mock <a href="https://github.com/css-modules/css-modules">CSS Modules</a>:</p>
<pre><code class="hljs css language-bash">yarn add --dev identity-obj-proxy
</code></pre>
<p>Then all your className lookups on the styles object will be returned as-is (e.g., <code>styles.foobar === &apos;foobar&apos;</code>). This is pretty handy for React <a href="/docs/en/snapshot-testing">Snapshot Testing</a>.</p>
<pre><code class="hljs css language-json"><span class="hljs-comment">// package.json (for CSS Modules)</span>
{
  <span class="hljs-attr">&quot;jest&quot;</span>: {
    <span class="hljs-attr">&quot;moduleNameMapper&quot;</span>: {
      <span class="hljs-attr">&quot;\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$&quot;</span>: <span class="hljs-string">&quot;&lt;rootDir&gt;/__mocks__/fileMock.js&quot;</span>,
      <span class="hljs-attr">&quot;\\.(css|less)$&quot;</span>: <span class="hljs-string">&quot;identity-obj-proxy&quot;</span>
    }
  }
}
</code></pre>
<blockquote>
<p>Notice that Proxy is enabled in Node 6 by default. If you are not on Node 6 yet, make sure you invoke Jest using <code>node --harmony_proxies node_modules/.bin/jest</code>.</p>
</blockquote>
<p>If <code>moduleNameMapper</code> cannot fulfill your requirements, you can use Jest&apos;s <a href="/docs/en/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object"><code>transform</code></a> config option to specify how assets are transformed. For example, a transformer that returns the basename of a file (such that <code>require(&apos;logo.jpg&apos;);</code> returns <code>&apos;logo&apos;</code>) can be written as:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// fileTransformer.js</span>
<span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;path&apos;</span>);

<span class="hljs-built_in">module</span>.exports = {
process(src, filename, config, options) {
<span class="hljs-keyword">return</span> <span class="hljs-string">&apos;module.exports = &apos;</span> + <span class="hljs-built_in">JSON</span>.stringify(path.basename(filename)) + <span class="hljs-string">&apos;;&apos;</span>;
},
};
</code></pre>

<pre><code class="hljs css language-json"><span class="hljs-comment">// package.json (for custom transformers and CSS Modules)</span>
{
  <span class="hljs-attr">&quot;jest&quot;</span>: {
    <span class="hljs-attr">&quot;moduleNameMapper&quot;</span>: {
      <span class="hljs-attr">&quot;\\.(css|less)$&quot;</span>: <span class="hljs-string">&quot;identity-obj-proxy&quot;</span>
    },
    <span class="hljs-attr">&quot;transform&quot;</span>: {
      <span class="hljs-attr">&quot;\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$&quot;</span>: <span class="hljs-string">&quot;&lt;rootDir&gt;/fileTransformer.js&quot;</span>
    }
  }
}
</code></pre>
<p>We&apos;ve told Jest to ignore files matching a stylesheet or image extension, and instead, require our mock files. You can adjust the regular expression to match the file types your webpack config handles.</p>
<p><em>Note: if you are using babel-jest with additional code preprocessors, you have to explicitly define babel-jest as a transformer for your JavaScript code to map <code>.js</code> files to the babel-jest module.</em></p>
<pre><code class="hljs css language-json">&quot;transform&quot;: {
  &quot;^.+\\.js$&quot;: &quot;babel-jest&quot;,
  &quot;^.+\\.css$&quot;: &quot;custom-transformer&quot;,
  ...
}
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="configuring-jest-to-find-our-files"></a><a href="#configuring-jest-to-find-our-files" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Configuring Jest to find our files</h3>
<p>Now that Jest knows how to process our files, we need to tell it how to <em>find</em> them. For webpack&apos;s <code>modulesDirectories</code>, and <code>extensions</code> options there are direct analogs in Jest&apos;s <code>moduleDirectories</code> and <code>moduleFileExtensions</code> options.</p>
<pre><code class="hljs css language-json"><span class="hljs-comment">// package.json</span>
{
  <span class="hljs-attr">&quot;jest&quot;</span>: {
    <span class="hljs-attr">&quot;moduleFileExtensions&quot;</span>: [<span class="hljs-string">&quot;js&quot;</span>, <span class="hljs-string">&quot;jsx&quot;</span>],
    <span class="hljs-attr">&quot;moduleDirectories&quot;</span>: [<span class="hljs-string">&quot;node_modules&quot;</span>, <span class="hljs-string">&quot;bower_components&quot;</span>, <span class="hljs-string">&quot;shared&quot;</span>],

    <span class="hljs-attr">&quot;moduleNameMapper&quot;</span>: {
      <span class="hljs-attr">&quot;\\.(css|less)$&quot;</span>: <span class="hljs-string">&quot;&lt;rootDir&gt;/__mocks__/styleMock.js&quot;</span>,
      <span class="hljs-attr">&quot;\\.(gif|ttf|eot|svg)$&quot;</span>: <span class="hljs-string">&quot;&lt;rootDir&gt;/__mocks__/fileMock.js&quot;</span>
    }

}
}
</code></pre>

<blockquote>
<p>Note: <code>&lt;rootDir&gt;</code> is a special token that gets replaced by Jest with the root of your project. Most of the time this will be the folder where your <code>package.json</code> is located unless you specify a custom <code>rootDir</code> option in your configuration.</p>
</blockquote>
<p>Similarly webpack&apos;s <code>resolve.root</code> option functions like setting the <code>NODE_PATH</code> env variable, which you can set, or make use of the <code>modulePaths</code> option.</p>
<pre><code class="hljs css language-json"><span class="hljs-comment">// package.json</span>
{
  <span class="hljs-attr">&quot;jest&quot;</span>: {
    <span class="hljs-attr">&quot;modulePaths&quot;</span>: [<span class="hljs-string">&quot;/shared/vendor/modules&quot;</span>],
    <span class="hljs-attr">&quot;moduleFileExtensions&quot;</span>: [<span class="hljs-string">&quot;js&quot;</span>, <span class="hljs-string">&quot;jsx&quot;</span>],
    <span class="hljs-attr">&quot;moduleDirectories&quot;</span>: [<span class="hljs-string">&quot;node_modules&quot;</span>, <span class="hljs-string">&quot;bower_components&quot;</span>, <span class="hljs-string">&quot;shared&quot;</span>],
    <span class="hljs-attr">&quot;moduleNameMapper&quot;</span>: {
      <span class="hljs-attr">&quot;\\.(css|less)$&quot;</span>: <span class="hljs-string">&quot;&lt;rootDir&gt;/__mocks__/styleMock.js&quot;</span>,
      <span class="hljs-attr">&quot;\\.(gif|ttf|eot|svg)$&quot;</span>: <span class="hljs-string">&quot;&lt;rootDir&gt;/__mocks__/fileMock.js&quot;</span>
    }
  }
}
</code></pre>
<p>And finally, we have to handle the webpack <code>alias</code>. For that we can make use of the <code>moduleNameMapper</code> option again.</p>
<pre><code class="hljs css language-json"><span class="hljs-comment">// package.json</span>
{
  <span class="hljs-attr">&quot;jest&quot;</span>: {
    <span class="hljs-attr">&quot;modulePaths&quot;</span>: [<span class="hljs-string">&quot;/shared/vendor/modules&quot;</span>],
    <span class="hljs-attr">&quot;moduleFileExtensions&quot;</span>: [<span class="hljs-string">&quot;js&quot;</span>, <span class="hljs-string">&quot;jsx&quot;</span>],
    <span class="hljs-attr">&quot;moduleDirectories&quot;</span>: [<span class="hljs-string">&quot;node_modules&quot;</span>, <span class="hljs-string">&quot;bower_components&quot;</span>, <span class="hljs-string">&quot;shared&quot;</span>],

    <span class="hljs-attr">&quot;moduleNameMapper&quot;</span>: {
      <span class="hljs-attr">&quot;\\.(css|less)$&quot;</span>: <span class="hljs-string">&quot;&lt;rootDir&gt;/__mocks__/styleMock.js&quot;</span>,
      <span class="hljs-attr">&quot;\\.(gif|ttf|eot|svg)$&quot;</span>: <span class="hljs-string">&quot;&lt;rootDir&gt;/__mocks__/fileMock.js&quot;</span>,

      <span class="hljs-attr">&quot;^react(.*)$&quot;</span>: <span class="hljs-string">&quot;&lt;rootDir&gt;/vendor/react-master$1&quot;</span>,
      <span class="hljs-attr">&quot;^config$&quot;</span>: <span class="hljs-string">&quot;&lt;rootDir&gt;/configs/app-config.js&quot;</span>
    }

}
}
</code></pre>

<p>That&apos;s it! webpack is a complex and flexible tool, so you may have to make some adjustments to handle your specific application&apos;s needs. Luckily for most projects, Jest should be more than flexible enough to handle your webpack config.</p>
<blockquote>
<p>Note: For more complex webpack configurations, you may also want to investigate projects such as: <a href="https://github.com/istarkov/babel-plugin-webpack-loaders">babel-plugin-webpack-loaders</a>.</p>
</blockquote>
<h2><a class="anchor" aria-hidden="true" id="using-with-webpack-2"></a><a href="#using-with-webpack-2" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Using with webpack 2</h2>
<p>webpack 2 offers native support for ES modules. However, Jest runs in Node, and thus requires ES modules to be transpiled to CommonJS modules. As such, if you are using webpack 2, you most likely will want to configure Babel to transpile ES modules to CommonJS modules only in the <code>test</code> environment.</p>
<pre><code class="hljs css language-json"><span class="hljs-comment">// .babelrc</span>
{
  <span class="hljs-attr">&quot;presets&quot;</span>: [[<span class="hljs-string">&quot;env&quot;</span>, {<span class="hljs-attr">&quot;modules&quot;</span>: <span class="hljs-literal">false</span>}]],

<span class="hljs-attr">&quot;env&quot;</span>: {
<span class="hljs-attr">&quot;test&quot;</span>: {
<span class="hljs-attr">&quot;plugins&quot;</span>: [<span class="hljs-string">&quot;transform-es2015-modules-commonjs&quot;</span>]
}
}
}
</code></pre>

<blockquote>
<p>Note: Jest caches files to speed up test execution. If you updated .babelrc and Jest is still not working, try running Jest with <code>--no-cache</code>.</p>
</blockquote>
<p>If you use dynamic imports (<code>import(&apos;some-file.js&apos;).then(module =&gt; ...)</code>), you need to enable the <code>dynamic-import-node</code> plugin.</p>
<pre><code class="hljs css language-json"><span class="hljs-comment">// .babelrc</span>
{
  <span class="hljs-attr">&quot;presets&quot;</span>: [[<span class="hljs-string">&quot;env&quot;</span>, {<span class="hljs-attr">&quot;modules&quot;</span>: <span class="hljs-literal">false</span>}]],

<span class="hljs-attr">&quot;plugins&quot;</span>: [<span class="hljs-string">&quot;syntax-dynamic-import&quot;</span>],

<span class="hljs-attr">&quot;env&quot;</span>: {
<span class="hljs-attr">&quot;test&quot;</span>: {
<span class="hljs-attr">&quot;plugins&quot;</span>: [<span class="hljs-string">&quot;dynamic-import-node&quot;</span>]
}
}
}
</code></pre>

<p>For an example of how to use Jest with Webpack with React, Redux, and Node, you can view one <a href="https://github.com/jenniferabowd/jest_react_redux_node_webpack_complex_example">here</a>.</p>
</span></div></article>
