<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/GettingStarted.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Getting Started</h1></header><article><div><span><p>Install Jest using <a href="https://yarnpkg.com/en/package/jest"><code>yarn</code></a>:</p>
<pre><code class="hljs css language-bash">yarn add --dev jest
</code></pre>
<p>Or <a href="https://www.npmjs.com/"><code>npm</code></a>:</p>
<pre><code class="hljs css language-bash">npm install --save-dev jest
</code></pre>
<p>Note: Jest documentation uses <code>yarn</code> commands, but <code>npm</code> will also work. You can compare <code>yarn</code> and <code>npm</code> commands in the <a href="https://yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison">yarn docs, here</a>.</p>
<p>Let&apos;s get started by writing a test for a hypothetical function that adds two numbers. First, create a <code>sum.js</code> file:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sum</span>(<span class="hljs-params">a, b</span>) </span>{
  <span class="hljs-keyword">return</span> a + b;
}
<span class="hljs-built_in">module</span>.exports = sum;
</code></pre>
<p>Then, create a file named <code>sum.test.js</code>. This will contain our actual test:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-keyword">const</span> sum = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;./sum&apos;</span>);

test(<span class="hljs-string">&apos;adds 1 + 2 to equal 3&apos;</span>, () =&gt; {
expect(sum(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>)).toBe(<span class="hljs-number">3</span>);
});
</code></pre>

<p>Add the following section to your <code>package.json</code>:</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;scripts&quot;</span>: {
    <span class="hljs-attr">&quot;test&quot;</span>: <span class="hljs-string">&quot;jest&quot;</span>
  }
}
</code></pre>
<p>Finally, run <code>yarn test</code> or <code>npm run test</code> and Jest will print this message:</p>
<pre><code class="hljs css language-bash">PASS  ./sum.test.js
&#x2713; adds 1 + 2 to equal 3 (5ms)
</code></pre>
<p><strong>You just successfully wrote your first test using Jest!</strong></p>
<p>This test used <code>expect</code> and <code>toBe</code> to test that two values were exactly identical. To learn about the other things that Jest can test, see <a href="/docs/en/using-matchers">Using Matchers</a>.</p>
<h2><a class="anchor" aria-hidden="true" id="running-from-command-line"></a><a href="#running-from-command-line" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Running from command line</h2>
<p>You can run Jest directly from the CLI (if it&apos;s globally available in your <code>PATH</code>, e.g. by <code>yarn global add jest</code> or <code>npm install jest --global</code>) with a variety of useful options.</p>
<p>Here&apos;s how to run Jest on files matching <code>my-test</code>, using <code>config.json</code> as a configuration file and display a native OS notification after the run:</p>
<pre><code class="hljs css language-bash">jest my-test --notify --config=config.json
</code></pre>
<p>If you&apos;d like to learn more about running <code>jest</code> through the command line, take a look at the <a href="/docs/en/cli">Jest CLI Options</a> page.</p>
<h2><a class="anchor" aria-hidden="true" id="additional-configuration"></a><a href="#additional-configuration" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Additional Configuration</h2>
<h3><a class="anchor" aria-hidden="true" id="generate-a-basic-configuration-file"></a><a href="#generate-a-basic-configuration-file" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Generate a basic configuration file</h3>
<p>Based on your project, Jest will ask you a few questions and will create a basic configuration file with a short description for each option:</p>
<pre><code class="hljs css language-bash">jest --init
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="using-babel"></a><a href="#using-babel" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Using Babel</h3>
<p>To use <a href="http://babeljs.io/">Babel</a>, install required dependencies via <code>yarn</code>:</p>
<pre><code class="hljs css language-bash">yarn add --dev babel-jest @babel/core @babel/preset-env
</code></pre>
<p>Configure Babel to target your current version of Node by creating a <code>babel.config.js</code> file in the root of your project:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// babel.config.js</span>
<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">presets</span>: [
    [
      <span class="hljs-string">&apos;@babel/preset-env&apos;</span>,
      {
        <span class="hljs-attr">targets</span>: {
          <span class="hljs-attr">node</span>: <span class="hljs-string">&apos;current&apos;</span>,
        },
      },
    ],
  ],
};
</code></pre>
<p><strong>The ideal configuration for Babel will depend on your project.</strong> See <a href="https://babeljs.io/docs/en/">Babel&apos;s docs</a> for more details.</p>
<p></p><details><summary markdown="span"><strong>Making your Babel config jest-aware</strong></summary><p></p>
<p>Jest will set <code>process.env.NODE_ENV</code> to <code>&apos;test&apos;</code> if it&apos;s not set to something else. You can use that in your configuration to conditionally setup only the compilation needed for Jest, e.g.</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// babel.config.js</span>
<span class="hljs-built_in">module</span>.exports = <span class="hljs-function"><span class="hljs-params">api</span> =&gt;</span> {
  <span class="hljs-keyword">const</span> isTest = api.env(<span class="hljs-string">&apos;test&apos;</span>);
  <span class="hljs-comment">// You can use isTest to determine what presets and plugins to use.</span>

<span class="hljs-keyword">return</span> {
<span class="hljs-comment">// ...</span>
};
};
</code></pre>

<blockquote>
<p>Note: <code>babel-jest</code> is automatically installed when installing Jest and will automatically transform files if a babel configuration exists in your project. To avoid this behavior, you can explicitly reset the <code>transform</code> configuration option:</p>
</blockquote>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// jest.config.js</span>
<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">transform</span>: {},
};
</code></pre>
<p></p></details><p></p>
<p></p><details><summary markdown="span"><strong>Babel 6 support</strong></summary><p></p>
<p>Jest 24 dropped support for Babel 6. We highly recommend you to upgrade to Babel 7, which is actively maintained. However, if you cannot upgrade to Babel 7, either keep using Jest 23 or upgrade to Jest 24 with <code>babel-jest</code> locked at version 23, like in the example below:</p>
<pre><code class="hljs"><span class="hljs-string">&quot;dependencies&quot;</span>: {
  <span class="hljs-string">&quot;babel-core&quot;</span>: <span class="hljs-string">&quot;^6.26.3&quot;</span>,
  <span class="hljs-string">&quot;babel-jest&quot;</span>: <span class="hljs-string">&quot;^23.6.0&quot;</span>,
  <span class="hljs-string">&quot;babel-preset-env&quot;</span>: <span class="hljs-string">&quot;^1.7.0&quot;</span>,
  <span class="hljs-string">&quot;jest&quot;</span>: <span class="hljs-string">&quot;^24.0.0&quot;</span>
}
</code></pre>
<p>While we generally recommend using the same version of every Jest package, this workaround will allow you to continue using the latest version of Jest with Babel 6 for now.</p>
<p></p></details><p></p>
<h3><a class="anchor" aria-hidden="true" id="using-webpack"></a><a href="#using-webpack" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Using webpack</h3>
<p>Jest can be used in projects that use <a href="https://webpack.js.org/">webpack</a> to manage assets, styles, and compilation. webpack does offer some unique challenges over other tools. Refer to the <a href="/docs/en/webpack">webpack guide</a> to get started.</p>
<h3><a class="anchor" aria-hidden="true" id="using-typescript"></a><a href="#using-typescript" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Using TypeScript</h3>
<p>Jest supports TypeScript, via Babel. First make sure you followed the instructions on <a href="#using-babel">using Babel</a> above. Next install the <code>@babel/preset-typescript</code> via <code>yarn</code>:</p>
<pre><code class="hljs css language-bash">yarn add --dev @babel/preset-typescript
</code></pre>
<p>Then add <code>@babel/preset-typescript</code> to the list of presets in your <code>babel.config.js</code>.</p>
<pre><code class="hljs css language-diff">// babel.config.js
module.exports = {
  presets: [
    [&apos;@babel/preset-env&apos;, {targets: {node: &apos;current&apos;}}],
<span class="hljs-addition">+    &apos;@babel/preset-typescript&apos;,</span>
  ],
};
</code></pre>
<p>However, there are some <a href="https://babeljs.io/docs/en/next/babel-plugin-transform-typescript.html#caveats">caveats</a> to using TypeScript with Babel. Because TypeScript support in Babel is transpilation, Jest will not type-check your tests as they are run. If you want that, you can use <a href="https://github.com/kulshekhar/ts-jest">ts-jest</a>.</p>
</span></div></article>
