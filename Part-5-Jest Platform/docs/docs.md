<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/JestPlatform.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Jest Platform</h1></header><article><div><span><p>You can cherry pick specific features of Jest and use them as standalone packages. Here&apos;s a list of the available packages:</p>
<h2><a class="anchor" aria-hidden="true" id="jest-changed-files"></a><a href="#jest-changed-files" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>jest-changed-files</h2>
<p>Tool for identifying modified files in a git/hg repository. Exports two functions:</p>
<ul>
<li><code>getChangedFilesForRoots</code> returns a promise that resolves to an object with the changed files and repos.</li>
<li><code>findRepos</code> returns a promise that resolves to a set of repositories contained in the specified path.</li>
</ul>
<h3><a class="anchor" aria-hidden="true" id="example"></a><a href="#example" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Example</h3>
<pre><code class="hljs css language-javascript"><span class="hljs-keyword">const</span> {getChangedFilesForRoots} = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;jest-changed-files&apos;</span>);

<span class="hljs-comment">// print the set of modified files since last commit in the current repo</span>
getChangedFilesForRoots([<span class="hljs-string">&apos;./&apos;</span>], {
<span class="hljs-attr">lastCommit</span>: <span class="hljs-literal">true</span>,
}).then(<span class="hljs-function"><span class="hljs-params">result</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(result.changedFiles));
</code></pre>

<p>You can read more about <code>jest-changed-files</code> in the <a href="https://github.com/facebook/jest/blob/master/packages/jest-changed-files/README.md">readme file</a>.</p>
<h2><a class="anchor" aria-hidden="true" id="jest-diff"></a><a href="#jest-diff" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>jest-diff</h2>
<p>Tool for visualizing changes in data. Exports a function that compares two values of any type and returns a &quot;pretty-printed&quot; string illustrating the difference between the two arguments.</p>
<h3><a class="anchor" aria-hidden="true" id="example-1"></a><a href="#example-1" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Example</h3>
<pre><code class="hljs css language-javascript"><span class="hljs-keyword">const</span> diff = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;jest-diff&apos;</span>);

<span class="hljs-keyword">const</span> a = {<span class="hljs-attr">a</span>: {<span class="hljs-attr">b</span>: {<span class="hljs-attr">c</span>: <span class="hljs-number">5</span>}}};
<span class="hljs-keyword">const</span> b = {<span class="hljs-attr">a</span>: {<span class="hljs-attr">b</span>: {<span class="hljs-attr">c</span>: <span class="hljs-number">6</span>}}};

<span class="hljs-keyword">const</span> result = diff(a, b);

<span class="hljs-comment">// print diff</span>
<span class="hljs-built_in">console</span>.log(result);
</code></pre>

<h2><a class="anchor" aria-hidden="true" id="jest-docblock"></a><a href="#jest-docblock" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>jest-docblock</h2>
<p>Tool for extracting and parsing the comments at the top of a JavaScript file. Exports various functions to manipulate the data inside the comment block.</p>
<h3><a class="anchor" aria-hidden="true" id="example-2"></a><a href="#example-2" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Example</h3>
<pre><code class="hljs css language-javascript"><span class="hljs-keyword">const</span> {parseWithComments} = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;jest-docblock&apos;</span>);

<span class="hljs-keyword">const</span> code = <span class="hljs-string">`
/\*\*

- This is a sample
-
- @flow
  \*/

console.log(&apos;Hello World!&apos;);
`</span>;

<span class="hljs-keyword">const</span> parsed = parseWithComments(code);

<span class="hljs-comment">// prints an object with two attributes: comments and pragmas.</span>
<span class="hljs-built_in">console</span>.log(parsed);
</code></pre>

<p>You can read more about <code>jest-docblock</code> in the <a href="https://github.com/facebook/jest/blob/master/packages/jest-docblock/README.md">readme file</a>.</p>
<h2><a class="anchor" aria-hidden="true" id="jest-get-type"></a><a href="#jest-get-type" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>jest-get-type</h2>
<p>Module that identifies the primitive type of any JavaScript value. Exports a function that returns a string with the type of the value passed as argument.</p>
<h3><a class="anchor" aria-hidden="true" id="example-3"></a><a href="#example-3" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Example</h3>
<pre><code class="hljs css language-javascript"><span class="hljs-keyword">const</span> getType = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;jest-get-type&apos;</span>);

<span class="hljs-keyword">const</span> array = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];
<span class="hljs-keyword">const</span> nullValue = <span class="hljs-literal">null</span>;
<span class="hljs-keyword">const</span> undefinedValue = <span class="hljs-literal">undefined</span>;

<span class="hljs-comment">// prints &apos;array&apos;</span>
<span class="hljs-built_in">console</span>.log(getType(array));
<span class="hljs-comment">// prints &apos;null&apos;</span>
<span class="hljs-built_in">console</span>.log(getType(nullValue));
<span class="hljs-comment">// prints &apos;undefined&apos;</span>
<span class="hljs-built_in">console</span>.log(getType(undefinedValue));
</code></pre>

<h2><a class="anchor" aria-hidden="true" id="jest-validate"></a><a href="#jest-validate" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>jest-validate</h2>
<p>Tool for validating configurations submitted by users. Exports a function that takes two arguments: the user&apos;s configuration and an object containing an example configuration and other options. The return value is an object with two attributes:</p>
<ul>
<li><code>hasDeprecationWarnings</code>, a boolean indicating whether the submitted configuration has deprecation warnings,</li>
<li><code>isValid</code>, a boolean indicating whether the configuration is correct or not.</li>
</ul>
<h3><a class="anchor" aria-hidden="true" id="example-4"></a><a href="#example-4" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Example</h3>
<pre><code class="hljs css language-javascript"><span class="hljs-keyword">const</span> {validate} = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;jest-validate&apos;</span>);

<span class="hljs-keyword">const</span> configByUser = {
<span class="hljs-attr">transform</span>: <span class="hljs-string">&apos;&lt;rootDir&gt;/node_modules/my-custom-transform&apos;</span>,
};

<span class="hljs-keyword">const</span> result = validate(configByUser, {
<span class="hljs-attr">comment</span>: <span class="hljs-string">&apos; Documentation: http://custom-docs.com&apos;</span>,
<span class="hljs-attr">exampleConfig</span>: {<span class="hljs-attr">transform</span>: <span class="hljs-string">&apos;&lt;rootDir&gt;/node_modules/babel-jest&apos;</span>},
});

<span class="hljs-built_in">console</span>.log(result);
</code></pre>

<p>You can read more about <code>jest-validate</code> in the <a href="https://github.com/facebook/jest/blob/master/packages/jest-validate/README.md">readme file</a>.</p>
<h2><a class="anchor" aria-hidden="true" id="jest-worker"></a><a href="#jest-worker" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>jest-worker</h2>
<p>Module used for parallelization of tasks. Exports a class <code>JestWorker</code> that takes the path of Node.js module and lets you call the module&apos;s exported methods as if they were class methods, returning a promise that resolves when the specified method finishes its execution in a forked process.</p>
<h3><a class="anchor" aria-hidden="true" id="example-5"></a><a href="#example-5" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Example</h3>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// heavy-task.js</span>

<span class="hljs-built_in">module</span>.exports = {
<span class="hljs-attr">myHeavyTask</span>: <span class="hljs-function"><span class="hljs-params">args</span> =&gt;</span> {
<span class="hljs-comment">// long running CPU intensive task.</span>
},
};
</code></pre>

<pre><code class="hljs css language-javascript"><span class="hljs-comment">// main.js</span>

<span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">main</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">const</span> worker = <span class="hljs-keyword">new</span> Worker(<span class="hljs-built_in">require</span>.resolve(<span class="hljs-string">&apos;./heavy-task.js&apos;</span>));

  <span class="hljs-comment">// run 2 tasks in parallel with different arguments</span>
  <span class="hljs-keyword">const</span> results = <span class="hljs-keyword">await</span> <span class="hljs-built_in">Promise</span>.all([
    worker.myHeavyTask({<span class="hljs-attr">foo</span>: <span class="hljs-string">&apos;bar&apos;</span>}),
    worker.myHeavyTask({<span class="hljs-attr">bar</span>: <span class="hljs-string">&apos;foo&apos;</span>}),
  ]);

  <span class="hljs-built_in">console</span>.log(results);
}

main();
</code></pre>
<p>You can read more about <code>jest-worker</code> in the <a href="https://github.com/facebook/jest/blob/master/packages/jest-worker/README.md">readme file</a>.</p>
<h2><a class="anchor" aria-hidden="true" id="pretty-format"></a><a href="#pretty-format" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>pretty-format</h2>
<p>Exports a function that converts any JavaScript value into a human-readable string. Supports all built-in JavaScript types out of the box and allows extension for application-specific types via user-defined plugins.</p>
<h3><a class="anchor" aria-hidden="true" id="example-6"></a><a href="#example-6" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Example</h3>
<pre><code class="hljs css language-javascript"><span class="hljs-keyword">const</span> prettyFormat = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;pretty-format&apos;</span>);

<span class="hljs-keyword">const</span> val = {<span class="hljs-attr">object</span>: {}};
val.circularReference = val;
val[<span class="hljs-built_in">Symbol</span>(<span class="hljs-string">&apos;foo&apos;</span>)] = <span class="hljs-string">&apos;foo&apos;</span>;
val.map = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Map</span>([[<span class="hljs-string">&apos;prop&apos;</span>, <span class="hljs-string">&apos;value&apos;</span>]]);
val.array = [<span class="hljs-number">-0</span>, <span class="hljs-literal">Infinity</span>, <span class="hljs-literal">NaN</span>];

<span class="hljs-built_in">console</span>.log(prettyFormat(val));
</code></pre>

<p>You can read more about <code>pretty-format</code> in the <a href="https://github.com/facebook/jest/blob/master/packages/pretty-format/README.md">readme file</a>.</p>
</span></div></article>
