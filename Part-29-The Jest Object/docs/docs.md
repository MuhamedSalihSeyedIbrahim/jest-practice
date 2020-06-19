<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/JestObjectAPI.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">The Jest Object</h1></header><article><div><span><p>The <code>jest</code> object is automatically in scope within every test file. The methods in the <code>jest</code> object help create mocks and let you control Jest&apos;s overall behavior. It can also be imported explicitly by via <code>import {jest} from &apos;@jest/globals&apos;</code>.</p>
<h2><a class="anchor" aria-hidden="true" id="mock-modules"></a><a href="#mock-modules" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Mock Modules</h2>
<h3><a class="anchor" aria-hidden="true" id="jestdisableautomock"></a><a href="#jestdisableautomock" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.disableAutomock()</code></h3>
<p>Disables automatic mocking in the module loader.</p>
<blockquote>
<p>See <code>automock</code> section of <a href="/docs/en/configuration#automock-boolean">configuration</a> for more information</p>
</blockquote>
<p>After this method is called, all <code>require()</code>s will return the real versions of each module (rather than a mocked version).</p>
<p>Jest configuration:</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;automock&quot;</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<p>Example:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// utils.js</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">authorize</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-string">&apos;token&apos;</span>;
  },
};
</code></pre>
<pre><code class="hljs css language-js"><span class="hljs-comment">// __tests__/disableAutomocking.js</span>
<span class="hljs-keyword">import</span> utils <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;../utils&apos;</span>;

jest.disableAutomock();

test(<span class="hljs-string">&apos;original implementation&apos;</span>, () =&gt; {
<span class="hljs-comment">// now we have the original implementation,</span>
<span class="hljs-comment">// even if we set the automocking in a jest configuration</span>
expect(utils.authorize()).toBe(<span class="hljs-string">&apos;token&apos;</span>);
});
</code></pre>

<p>This is usually useful when you have a scenario where the number of dependencies you want to mock is far less than the number of dependencies that you don&apos;t. For example, if you&apos;re writing a test for a module that uses a large number of dependencies that can be reasonably classified as &quot;implementation details&quot; of the module, then you likely do not want to mock them.</p>
<p>Examples of dependencies that might be considered &quot;implementation details&quot; are things ranging from language built-ins (e.g. Array.prototype methods) to highly common utility methods (e.g. underscore/lo-dash, array utilities etc) and entire libraries like React.js.</p>
<p>Returns the <code>jest</code> object for chaining.</p>
<p><em>Note: this method was previously called <code>autoMockOff</code>. When using <code>babel-jest</code>, calls to <code>disableAutomock</code> will automatically be hoisted to the top of the code block. Use <code>autoMockOff</code> if you want to explicitly avoid this behavior.</em></p>
<h3><a class="anchor" aria-hidden="true" id="jestenableautomock"></a><a href="#jestenableautomock" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.enableAutomock()</code></h3>
<p>Enables automatic mocking in the module loader.</p>
<p>Returns the <code>jest</code> object for chaining.</p>
<blockquote>
<p>See <code>automock</code> section of <a href="/docs/en/configuration#automock-boolean">configuration</a> for more information</p>
</blockquote>
<p>Example:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// utils.js</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">authorize</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-string">&apos;token&apos;</span>;
  },
  <span class="hljs-attr">isAuthorized</span>: <span class="hljs-function"><span class="hljs-params">secret</span> =&gt;</span> secret === <span class="hljs-string">&apos;wizard&apos;</span>,
};
</code></pre>
<pre><code class="hljs css language-js"><span class="hljs-comment">// __tests__/enableAutomocking.js</span>
jest.enableAutomock();

<span class="hljs-keyword">import</span> utils <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;../utils&apos;</span>;

test(<span class="hljs-string">&apos;original implementation&apos;</span>, () =&gt; {
<span class="hljs-comment">// now we have the mocked implementation,</span>
expect(utils.authorize.\_isMockFunction).toBeTruthy();
expect(utils.isAuthorized.\_isMockFunction).toBeTruthy();
});
</code></pre>

<p><em>Note: this method was previously called <code>autoMockOn</code>. When using <code>babel-jest</code>, calls to <code>enableAutomock</code> will automatically be hoisted to the top of the code block. Use <code>autoMockOn</code> if you want to explicitly avoid this behavior.</em></p>
<h3><a class="anchor" aria-hidden="true" id="jestcreatemockfrommodulemodulename"></a><a href="#jestcreatemockfrommodulemodulename" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.createMockFromModule(moduleName)</code></h3>
<h5><a class="anchor" aria-hidden="true" id="renamed-in-jest-2600"></a><a href="#renamed-in-jest-2600" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>renamed in Jest <strong>26.0.0+</strong></h5>
<p>Also under the alias: <code>.genMockFromModule(moduleName)</code></p>
<p>Given the name of a module, use the automatic mocking system to generate a mocked version of the module for you.</p>
<p>This is useful when you want to create a <a href="/docs/en/manual-mocks">manual mock</a> that extends the automatic mock&apos;s behavior.</p>
<p>Example:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// utils.js</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">authorize</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-string">&apos;token&apos;</span>;
  },
  <span class="hljs-attr">isAuthorized</span>: <span class="hljs-function"><span class="hljs-params">secret</span> =&gt;</span> secret === <span class="hljs-string">&apos;wizard&apos;</span>,
};
</code></pre>
<pre><code class="hljs css language-js"><span class="hljs-comment">// __tests__/createMockFromModule.test.js</span>
<span class="hljs-keyword">const</span> utils = jest.createMockFromModule(<span class="hljs-string">&apos;../utils&apos;</span>).default;
utils.isAuthorized = jest.fn(<span class="hljs-function"><span class="hljs-params">secret</span> =&gt;</span> secret === <span class="hljs-string">&apos;not wizard&apos;</span>);

test(<span class="hljs-string">&apos;implementation created by jest.createMockFromModule&apos;</span>, () =&gt; {
expect(utils.authorize.mock).toBeTruthy();
expect(utils.isAuthorized(<span class="hljs-string">&apos;not wizard&apos;</span>)).toEqual(<span class="hljs-literal">true</span>);
});
</code></pre>

<p>This is how <code>createMockFromModule</code> will mock the following data types:</p>
<h4><a class="anchor" aria-hidden="true" id="function"></a><a href="#function" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>Function</code></h4>
<p>Creates a new <a href="https://jestjs.io/docs/en/mock-functions.html">mock function</a>. The new function has no formal parameters and when called will return <code>undefined</code>. This functionality also applies to <code>async</code> functions.</p>
<h4><a class="anchor" aria-hidden="true" id="class"></a><a href="#class" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>Class</code></h4>
<p>Creates new class. The interface of the original class is maintained, all of the class member functions and properties will be mocked.</p>
<h4><a class="anchor" aria-hidden="true" id="object"></a><a href="#object" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>Object</code></h4>
<p>Creates a new deeply cloned object. The object keys are maintained and their values are mocked.</p>
<h4><a class="anchor" aria-hidden="true" id="array"></a><a href="#array" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>Array</code></h4>
<p>Creates a new empty array, ignoring the original.</p>
<h4><a class="anchor" aria-hidden="true" id="primitives"></a><a href="#primitives" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>Primitives</code></h4>
<p>Creates a new property with the same primitive value as the original property.</p>
<p>Example:</p>
<pre><code class="hljs"><span class="hljs-comment">// example.js</span>
<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-function"><span class="hljs-keyword">function</span>: <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">square</span>(<span class="hljs-params">a, b</span>) </span>{
    <span class="hljs-title">return</span> <span class="hljs-title">a</span> * <span class="hljs-title">b</span></span>;
  },
  asyncFunction: <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">asyncSquare</span>(<span class="hljs-params">a, b</span>) </span>{
    <span class="hljs-keyword">const</span> result = <span class="hljs-keyword">await</span> a * b;
    <span class="hljs-keyword">return</span> result;
  },
  <span class="hljs-keyword">class</span>: <span class="hljs-keyword">new</span> <span class="hljs-keyword">class</span> Bar {
    <span class="hljs-keyword">constructor</span>(<span class="hljs-params"></span>) {
      <span class="hljs-keyword">this</span>.array = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>];
    }
    foo() {}
  },
  object: {
    baz: <span class="hljs-string">&apos;foo&apos;</span>,
    bar: {
      fiz: <span class="hljs-number">1</span>,
      buzz: [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>],
    },
  },
  array: [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>],
  <span class="hljs-built_in">number</span>: <span class="hljs-number">123</span>,
  <span class="hljs-built_in">string</span>: <span class="hljs-string">&apos;baz&apos;</span>,
  <span class="hljs-built_in">boolean</span>: <span class="hljs-literal">true</span>,
  symbol: Symbol.for(<span class="hljs-string">&apos;a.b.c&apos;</span>),
};
</code></pre>
<pre><code class="hljs css language-js"><span class="hljs-comment">// __tests__/example.test.js</span>
<span class="hljs-keyword">const</span> example = jest.createMockFromModule(<span class="hljs-string">&apos;./example&apos;</span>);

test(<span class="hljs-string">&apos;should run example code&apos;</span>, () =&gt; {
<span class="hljs-comment">// creates a new mocked function with no formal arguments.</span>
expect(example<span class="hljs-function">.<span class="hljs-keyword">function</span>.<span class="hljs-title">name</span>).<span class="hljs-title">toEqual</span>(<span class="hljs-params"><span class="hljs-string">&apos;square&apos;</span></span>);
<span class="hljs-title">expect</span>(<span class="hljs-params">example.function.length</span>).<span class="hljs-title">toEqual</span>(<span class="hljs-params"><span class="hljs-number">0</span></span>);

// <span class="hljs-title">async</span> <span class="hljs-title">functions</span> <span class="hljs-title">get</span> <span class="hljs-title">the</span> <span class="hljs-title">same</span> <span class="hljs-title">treatment</span> <span class="hljs-title">as</span> <span class="hljs-title">standard</span> <span class="hljs-title">synchronous</span> <span class="hljs-title">functions</span>.
<span class="hljs-title">expect</span>(<span class="hljs-params">example.asyncFunction.name</span>).<span class="hljs-title">toEqual</span>(<span class="hljs-params"><span class="hljs-string">&apos;asyncSquare&apos;</span></span>);
<span class="hljs-title">expect</span>(<span class="hljs-params">example.asyncFunction.length</span>).<span class="hljs-title">toEqual</span>(<span class="hljs-params"><span class="hljs-number">0</span></span>);

// <span class="hljs-title">creates</span> <span class="hljs-title">a</span> <span class="hljs-title">new</span> <span class="hljs-title">class</span> <span class="hljs-title">with</span> <span class="hljs-title">the</span> <span class="hljs-title">same</span> <span class="hljs-title">interface</span>, <span class="hljs-title">member</span> <span class="hljs-title">functions</span> <span class="hljs-title">and</span> <span class="hljs-title">properties</span> <span class="hljs-title">are</span> <span class="hljs-title">mocked</span>.
<span class="hljs-title">expect</span>(<span class="hljs-params">example.class.constructor.name</span>).<span class="hljs-title">toEqual</span>(<span class="hljs-params"><span class="hljs-string">&apos;Bar&apos;</span></span>);
<span class="hljs-title">expect</span>(<span class="hljs-params">example.class.foo.name</span>).<span class="hljs-title">toEqual</span>(<span class="hljs-params"><span class="hljs-string">&apos;foo&apos;</span></span>);
<span class="hljs-title">expect</span>(<span class="hljs-params">example.class.array.length</span>).<span class="hljs-title">toEqual</span>(<span class="hljs-params"><span class="hljs-number">0</span></span>);

// <span class="hljs-title">creates</span> <span class="hljs-title">a</span> <span class="hljs-title">deeply</span> <span class="hljs-title">cloned</span> <span class="hljs-title">version</span> <span class="hljs-title">of</span> <span class="hljs-title">the</span> <span class="hljs-title">original</span> <span class="hljs-title">object</span>.
<span class="hljs-title">expect</span>(<span class="hljs-params">example.object</span>).<span class="hljs-title">toEqual</span>(<span class="hljs-params">{
baz: <span class="hljs-string">&apos;foo&apos;</span>,
bar: {
fiz: <span class="hljs-number">1</span>,
buzz: [],
},
}</span>);

// <span class="hljs-title">creates</span> <span class="hljs-title">a</span> <span class="hljs-title">new</span> <span class="hljs-title">empty</span> <span class="hljs-title">array</span>, <span class="hljs-title">ignoring</span> <span class="hljs-title">the</span> <span class="hljs-title">original</span> <span class="hljs-title">array</span>.
<span class="hljs-title">expect</span>(<span class="hljs-params">example.array.length</span>).<span class="hljs-title">toEqual</span>(<span class="hljs-params"><span class="hljs-number">0</span></span>);

// <span class="hljs-title">creates</span> <span class="hljs-title">a</span> <span class="hljs-title">new</span> <span class="hljs-title">property</span> <span class="hljs-title">with</span> <span class="hljs-title">the</span> <span class="hljs-title">same</span> <span class="hljs-title">primitive</span> <span class="hljs-title">value</span> <span class="hljs-title">as</span> <span class="hljs-title">the</span> <span class="hljs-title">original</span> <span class="hljs-title">property</span>.
<span class="hljs-title">expect</span>(<span class="hljs-params">example.number</span>).<span class="hljs-title">toEqual</span>(<span class="hljs-params"><span class="hljs-number">123</span></span>);
<span class="hljs-title">expect</span>(<span class="hljs-params">example.string</span>).<span class="hljs-title">toEqual</span>(<span class="hljs-params"><span class="hljs-string">&apos;baz&apos;</span></span>);
<span class="hljs-title">expect</span>(<span class="hljs-params">example.boolean</span>).<span class="hljs-title">toEqual</span>(<span class="hljs-params">true</span>);
<span class="hljs-title">expect</span>(<span class="hljs-params">example.symbol</span>).<span class="hljs-title">toEqual</span>(<span class="hljs-params">Symbol.for(<span class="hljs-string">&apos;a.b.c&apos;</span></span>));
});
</span></code></pre>

<h3><a class="anchor" aria-hidden="true" id="jestmockmodulename-factory-options"></a><a href="#jestmockmodulename-factory-options" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.mock(moduleName, factory, options)</code></h3>
<p>Mocks a module with an auto-mocked version when it is being required. <code>factory</code> and <code>options</code> are optional. For example:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// banana.js</span>
<span class="hljs-built_in">module</span>.exports = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-string">&apos;banana&apos;</span>;

<span class="hljs-comment">// **tests**/test.js</span>
jest.mock(<span class="hljs-string">&apos;../banana&apos;</span>);

<span class="hljs-keyword">const</span> banana = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;../banana&apos;</span>); <span class="hljs-comment">// banana will be explicitly mocked.</span>

banana(); <span class="hljs-comment">// will return &apos;undefined&apos; because the function is auto-mocked.</span>
</code></pre>

<p>The second argument can be used to specify an explicit module factory that is being run instead of using Jest&apos;s automocking feature:</p>
<pre><code class="hljs css language-js">jest.mock(<span class="hljs-string">&apos;../moduleName&apos;</span>, () =&gt; {
  <span class="hljs-keyword">return</span> jest.fn(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-number">42</span>);
});

<span class="hljs-comment">// This runs the function specified as second argument to `jest.mock`.</span>
<span class="hljs-keyword">const</span> moduleName = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;../moduleName&apos;</span>);
moduleName(); <span class="hljs-comment">// Will return &apos;42&apos;;</span>
</code></pre>

<p>When using the <code>factory</code> parameter for an ES6 module with a default export, the <code>__esModule: true</code> property needs to be specified. This property is normally generated by Babel / TypeScript, but here it needs to be set manually. When importing a default export, it&apos;s an instruction to import the property named <code>default</code> from the export object:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">import</span> moduleName, {foo} <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;../moduleName&apos;</span>;

jest.mock(<span class="hljs-string">&apos;../moduleName&apos;</span>, () =&gt; {
<span class="hljs-keyword">return</span> {
<span class="hljs-attr">\_\_esModule</span>: <span class="hljs-literal">true</span>,
<span class="hljs-attr">default</span>: jest.fn(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-number">42</span>),
<span class="hljs-attr">foo</span>: jest.fn(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-number">43</span>),
};
});

moduleName(); <span class="hljs-comment">// Will return 42</span>
foo(); <span class="hljs-comment">// Will return 43</span>
</code></pre>

<p>The third argument can be used to create virtual mocks &#x2013; mocks of modules that don&apos;t exist anywhere in the system:</p>
<pre><code class="hljs css language-js">jest.mock(
  <span class="hljs-string">&apos;../moduleName&apos;</span>,
  () =&gt; {
    <span class="hljs-comment">/*
     * Custom implementation of a module that doesn&apos;t exist in JS,
     * like a generated module or a native module in react-native.
     */</span>
  },
  {<span class="hljs-attr">virtual</span>: <span class="hljs-literal">true</span>},
);
</code></pre>
<blockquote>
<p><strong>Warning:</strong> Importing a module in a setup file (as specified by <code>setupTestFrameworkScriptFile</code>) will prevent mocking for the module in question, as well as all the modules that it imports.</p>
</blockquote>
<p>Modules that are mocked with <code>jest.mock</code> are mocked only for the file that calls <code>jest.mock</code>. Another file that imports the module will get the original implementation even if it runs after the test file that mocks the module.</p>
<p>Returns the <code>jest</code> object for chaining.</p>
<h3><a class="anchor" aria-hidden="true" id="jestunmockmodulename"></a><a href="#jestunmockmodulename" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.unmock(moduleName)</code></h3>
<p>Indicates that the module system should never return a mocked version of the specified module from <code>require()</code> (e.g. that it should always return the real module).</p>
<p>The most common use of this API is for specifying the module a given test intends to be testing (and thus doesn&apos;t want automatically mocked).</p>
<p>Returns the <code>jest</code> object for chaining.</p>
<h3><a class="anchor" aria-hidden="true" id="jestdomockmodulename-factory-options"></a><a href="#jestdomockmodulename-factory-options" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.doMock(moduleName, factory, options)</code></h3>
<p>When using <code>babel-jest</code>, calls to <code>mock</code> will automatically be hoisted to the top of the code block. Use this method if you want to explicitly avoid this behavior.</p>
<p>One example when this is useful is when you want to mock a module differently within the same file:</p>
<pre><code class="hljs css language-js">beforeEach(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  jest.resetModules();
});

test(<span class="hljs-string">&apos;moduleName 1&apos;</span>, () =&gt; {
jest.doMock(<span class="hljs-string">&apos;../moduleName&apos;</span>, () =&gt; {
<span class="hljs-keyword">return</span> jest.fn(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-number">1</span>);
});
<span class="hljs-keyword">const</span> moduleName = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;../moduleName&apos;</span>);
expect(moduleName()).toEqual(<span class="hljs-number">1</span>);
});

test(<span class="hljs-string">&apos;moduleName 2&apos;</span>, () =&gt; {
jest.doMock(<span class="hljs-string">&apos;../moduleName&apos;</span>, () =&gt; {
<span class="hljs-keyword">return</span> jest.fn(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-number">2</span>);
});
<span class="hljs-keyword">const</span> moduleName = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;../moduleName&apos;</span>);
expect(moduleName()).toEqual(<span class="hljs-number">2</span>);
});
</code></pre>

<p>Using <code>jest.doMock()</code> with ES6 imports requires additional steps. Follow these if you don&apos;t want to use <code>require</code> in your tests:</p>
<ul>
<li>We have to specify the <code>__esModule: true</code> property (see the <a href="#jestmockmodulename-factory-options"><code>jest.mock()</code></a> API for more information).</li>
<li>Static ES6 module imports are hoisted to the top of the file, so instead we have to import them dynamically using <code>import()</code>.</li>
<li>Finally, we need an environment which supports dynamic importing. Please see <a href="/docs/en/getting-started#using-babel">Using Babel</a> for the initial setup. Then add the plugin <a href="https://www.npmjs.com/package/babel-plugin-dynamic-import-node">babel-plugin-dynamic-import-node</a>, or an equivalent, to your Babel config to enable dynamic importing in Node.</li>
</ul>
<pre><code class="hljs css language-js">beforeEach(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  jest.resetModules();
});

test(<span class="hljs-string">&apos;moduleName 1&apos;</span>, () =&gt; {
jest.doMock(<span class="hljs-string">&apos;../moduleName&apos;</span>, () =&gt; {
<span class="hljs-keyword">return</span> {
<span class="hljs-attr">\_\_esModule</span>: <span class="hljs-literal">true</span>,
<span class="hljs-attr">default</span>: <span class="hljs-string">&apos;default1&apos;</span>,
<span class="hljs-attr">foo</span>: <span class="hljs-string">&apos;foo1&apos;</span>,
};
});
<span class="hljs-keyword">return</span> <span class="hljs-keyword">import</span>(<span class="hljs-string">&apos;../moduleName&apos;</span>).then(<span class="hljs-function"><span class="hljs-params">moduleName</span> =&gt;</span> {
expect(moduleName.default).toEqual(<span class="hljs-string">&apos;default1&apos;</span>);
expect(moduleName.foo).toEqual(<span class="hljs-string">&apos;foo1&apos;</span>);
});
});

test(<span class="hljs-string">&apos;moduleName 2&apos;</span>, () =&gt; {
jest.doMock(<span class="hljs-string">&apos;../moduleName&apos;</span>, () =&gt; {
<span class="hljs-keyword">return</span> {
<span class="hljs-attr">\_\_esModule</span>: <span class="hljs-literal">true</span>,
<span class="hljs-attr">default</span>: <span class="hljs-string">&apos;default2&apos;</span>,
<span class="hljs-attr">foo</span>: <span class="hljs-string">&apos;foo2&apos;</span>,
};
});
<span class="hljs-keyword">return</span> <span class="hljs-keyword">import</span>(<span class="hljs-string">&apos;../moduleName&apos;</span>).then(<span class="hljs-function"><span class="hljs-params">moduleName</span> =&gt;</span> {
expect(moduleName.default).toEqual(<span class="hljs-string">&apos;default2&apos;</span>);
expect(moduleName.foo).toEqual(<span class="hljs-string">&apos;foo2&apos;</span>);
});
});
</code></pre>

<p>Returns the <code>jest</code> object for chaining.</p>
<h3><a class="anchor" aria-hidden="true" id="jestdontmockmodulename"></a><a href="#jestdontmockmodulename" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.dontMock(moduleName)</code></h3>
<p>When using <code>babel-jest</code>, calls to <code>unmock</code> will automatically be hoisted to the top of the code block. Use this method if you want to explicitly avoid this behavior.</p>
<p>Returns the <code>jest</code> object for chaining.</p>
<h3><a class="anchor" aria-hidden="true" id="jestsetmockmodulename-moduleexports"></a><a href="#jestsetmockmodulename-moduleexports" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.setMock(moduleName, moduleExports)</code></h3>
<p>Explicitly supplies the mock object that the module system should return for the specified module.</p>
<p>On occasion there are times where the automatically generated mock the module system would normally provide you isn&apos;t adequate enough for your testing needs. Normally under those circumstances you should write a <a href="/docs/en/manual-mocks">manual mock</a> that is more adequate for the module in question. However, on extremely rare occasions, even a manual mock isn&apos;t suitable for your purposes and you need to build the mock yourself inside your test.</p>
<p>In these rare scenarios you can use this API to manually fill the slot in the module system&apos;s mock-module registry.</p>
<p>Returns the <code>jest</code> object for chaining.</p>
<p><em>Note It is recommended to use <a href="#jestmockmodulename-factory-options"><code>jest.mock()</code></a> instead. The <code>jest.mock</code> API&apos;s second argument is a module factory instead of the expected exported module object.</em></p>
<h3><a class="anchor" aria-hidden="true" id="jestrequireactualmodulename"></a><a href="#jestrequireactualmodulename" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.requireActual(moduleName)</code></h3>
<p>Returns the actual module instead of a mock, bypassing all checks on whether the module should receive a mock implementation or not.</p>
<p>Example:</p>
<pre><code class="hljs css language-js">jest.mock(<span class="hljs-string">&apos;../myModule&apos;</span>, () =&gt; {
  <span class="hljs-comment">// Require the original module to not be mocked...</span>
  <span class="hljs-keyword">const</span> originalModule = jest.requireActual(moduleName);

<span class="hljs-keyword">return</span> {
<span class="hljs-attr">\_\_esModule</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// Use it when dealing with esModules</span>
...originalModule,
<span class="hljs-attr">getRandom</span>: jest.fn().mockReturnValue(<span class="hljs-number">10</span>),
};
});

<span class="hljs-keyword">const</span> getRandom = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;../myModule&apos;</span>).getRandom;

getRandom(); <span class="hljs-comment">// Always returns 10</span>
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="jestrequiremockmodulename"></a><a href="#jestrequiremockmodulename" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.requireMock(moduleName)</code></h3>
<p>Returns a mock module instead of the actual module, bypassing all checks on whether the module should be required normally or not.</p>
<h3><a class="anchor" aria-hidden="true" id="jestresetmodules"></a><a href="#jestresetmodules" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.resetModules()</code></h3>
<p>Resets the module registry - the cache of all required modules. This is useful to isolate modules where local state might conflict between tests.</p>
<p>Example:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> sum1 = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;../sum&apos;</span>);
jest.resetModules();
<span class="hljs-keyword">const</span> sum2 = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;../sum&apos;</span>);
sum1 === sum2;
<span class="hljs-comment">// &gt; false (Both sum modules are separate &quot;instances&quot; of the sum module.)</span>
</code></pre>
<p>Example in a test:</p>
<pre><code class="hljs css language-js">beforeEach(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  jest.resetModules();
});

test(<span class="hljs-string">&apos;works&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> sum = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;../sum&apos;</span>);
});

test(<span class="hljs-string">&apos;works too&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> sum = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;../sum&apos;</span>);
<span class="hljs-comment">// sum is a different copy of the sum module from the previous test.</span>
});
</code></pre>

<p>Returns the <code>jest</code> object for chaining.</p>
<h3><a class="anchor" aria-hidden="true" id="jestisolatemodulesfn"></a><a href="#jestisolatemodulesfn" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.isolateModules(fn)</code></h3>
<p><code>jest.isolateModules(fn)</code> goes a step further than <code>jest.resetModules()</code> and creates a sandbox registry for the modules that are loaded inside the callback function. This is useful to isolate specific modules for every test so that local module state doesn&apos;t conflict between tests.</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">let</span> myModule;
jest.isolateModules(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  myModule = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;myModule&apos;</span>);
});

<span class="hljs-keyword">const</span> otherCopyOfMyModule = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;myModule&apos;</span>);
</code></pre>

<h2><a class="anchor" aria-hidden="true" id="mock-functions"></a><a href="#mock-functions" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Mock functions</h2>
<h3><a class="anchor" aria-hidden="true" id="jestfnimplementation"></a><a href="#jestfnimplementation" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.fn(implementation)</code></h3>
<p>Returns a new, unused <a href="/docs/en/mock-function-api">mock function</a>. Optionally takes a mock implementation.</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> mockFn = jest.fn();
mockFn();
expect(mockFn).toHaveBeenCalled();

<span class="hljs-comment">// With a mock implementation:</span>
<span class="hljs-keyword">const</span> returnsTrue = jest.fn(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-literal">true</span>);
<span class="hljs-built_in">console</span>.log(returnsTrue()); <span class="hljs-comment">// true;</span>
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="jestismockfunctionfn"></a><a href="#jestismockfunctionfn" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.isMockFunction(fn)</code></h3>
<p>Determines if the given function is a mocked function.</p>
<h3><a class="anchor" aria-hidden="true" id="jestspyonobject-methodname"></a><a href="#jestspyonobject-methodname" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.spyOn(object, methodName)</code></h3>
<p>Creates a mock function similar to <code>jest.fn</code> but also tracks calls to <code>object[methodName]</code>. Returns a Jest <a href="/docs/en/mock-function-api">mock function</a>.</p>
<p><em>Note: By default, <code>jest.spyOn</code> also calls the <strong>spied</strong> method. This is different behavior from most other test libraries. If you want to overwrite the original function, you can use <code>jest.spyOn(object, methodName).mockImplementation(() =&gt; customImplementation)</code> or <code>object[methodName] = jest.fn(() =&gt; customImplementation);</code></em></p>
<p>Example:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> video = {
  play() {
    <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
  },
};

<span class="hljs-built_in">module</span>.exports = video;
</code></pre>

<p>Example test:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> video = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;./video&apos;</span>);

test(<span class="hljs-string">&apos;plays video&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> spy = jest.spyOn(video, <span class="hljs-string">&apos;play&apos;</span>);
<span class="hljs-keyword">const</span> isPlaying = video.play();

expect(spy).toHaveBeenCalled();
expect(isPlaying).toBe(<span class="hljs-literal">true</span>);

spy.mockRestore();
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="jestspyonobject-methodname-accesstype"></a><a href="#jestspyonobject-methodname-accesstype" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.spyOn(object, methodName, accessType?)</code></h3>
<p>Since Jest 22.1.0+, the <code>jest.spyOn</code> method takes an optional third argument of <code>accessType</code> that can be either <code>&apos;get&apos;</code> or <code>&apos;set&apos;</code>, which proves to be useful when you want to spy on a getter or a setter, respectively.</p>
<p>Example:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> video = {
  <span class="hljs-comment">// it&apos;s a getter!</span>
  <span class="hljs-keyword">get</span> play() {
    <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
  },
};

<span class="hljs-built_in">module</span>.exports = video;

<span class="hljs-keyword">const</span> audio = {
<span class="hljs-attr">\_volume</span>: <span class="hljs-literal">false</span>,
<span class="hljs-comment">// it&apos;s a setter!</span>
<span class="hljs-keyword">set</span> volume(value) {
<span class="hljs-keyword">this</span>.\_volume = value;
},
<span class="hljs-keyword">get</span> volume() {
<span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.\_volume;
},
};

<span class="hljs-built_in">module</span>.exports = audio;
</code></pre>

<p>Example test:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> video = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;./video&apos;</span>);

test(<span class="hljs-string">&apos;plays video&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> spy = jest.spyOn(video, <span class="hljs-string">&apos;play&apos;</span>, <span class="hljs-string">&apos;get&apos;</span>); <span class="hljs-comment">// we pass &apos;get&apos;</span>
<span class="hljs-keyword">const</span> isPlaying = video.play;

expect(spy).toHaveBeenCalled();
expect(isPlaying).toBe(<span class="hljs-literal">true</span>);

spy.mockRestore();
});

<span class="hljs-keyword">const</span> audio = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;./audio&apos;</span>);

test(<span class="hljs-string">&apos;plays audio&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> spy = jest.spyOn(audio, <span class="hljs-string">&apos;volume&apos;</span>, <span class="hljs-string">&apos;set&apos;</span>); <span class="hljs-comment">// we pass &apos;set&apos;</span>
audio.volume = <span class="hljs-number">100</span>;

expect(spy).toHaveBeenCalled();
expect(audio.volume).toBe(<span class="hljs-number">100</span>);

spy.mockRestore();
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="jestclearallmocks"></a><a href="#jestclearallmocks" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.clearAllMocks()</code></h3>
<p>Clears the <code>mock.calls</code> and <code>mock.instances</code> properties of all mocks. Equivalent to calling <a href="/docs/en/mock-function-api#mockfnmockclear"><code>.mockClear()</code></a> on every mocked function.</p>
<p>Returns the <code>jest</code> object for chaining.</p>
<h3><a class="anchor" aria-hidden="true" id="jestresetallmocks"></a><a href="#jestresetallmocks" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.resetAllMocks()</code></h3>
<p>Resets the state of all mocks. Equivalent to calling <a href="/docs/en/mock-function-api#mockfnmockreset"><code>.mockReset()</code></a> on every mocked function.</p>
<p>Returns the <code>jest</code> object for chaining.</p>
<h3><a class="anchor" aria-hidden="true" id="jestrestoreallmocks"></a><a href="#jestrestoreallmocks" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.restoreAllMocks()</code></h3>
<p>Restores all mocks back to their original value. Equivalent to calling <a href="/docs/en/mock-function-api#mockfnmockrestore"><code>.mockRestore()</code></a> on every mocked function. Beware that <code>jest.restoreAllMocks()</code> only works when the mock was created with <code>jest.spyOn</code>; other mocks will require you to manually restore them.</p>
<h2><a class="anchor" aria-hidden="true" id="mock-timers"></a><a href="#mock-timers" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Mock timers</h2>
<h3><a class="anchor" aria-hidden="true" id="jestusefaketimersimplementation-modern--legacy"></a><a href="#jestusefaketimersimplementation-modern--legacy" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.useFakeTimers(implementation?: &apos;modern&apos; | &apos;legacy&apos;)</code></h3>
<p>Instructs Jest to use fake versions of the standard timer functions (<code>setTimeout</code>, <code>setInterval</code>, <code>clearTimeout</code>, <code>clearInterval</code>, <code>nextTick</code>, <code>setImmediate</code> and <code>clearImmediate</code>).</p>
<p>If you pass <code>&apos;modern&apos;</code> as argument, <a href="https://github.com/sinonjs/fake-timers"><code>@sinonjs/fake-timers</code></a> will be used as implementation instead of Jest&apos;s own fake timers. This also mocks additional timers like <code>Date</code>. <code>&apos;modern&apos;</code> will be the default behavior in Jest 27.</p>
<p>Returns the <code>jest</code> object for chaining.</p>
<h3><a class="anchor" aria-hidden="true" id="jestuserealtimers"></a><a href="#jestuserealtimers" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.useRealTimers()</code></h3>
<p>Instructs Jest to use the real versions of the standard timer functions.</p>
<p>Returns the <code>jest</code> object for chaining.</p>
<h3><a class="anchor" aria-hidden="true" id="jestrunallticks"></a><a href="#jestrunallticks" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.runAllTicks()</code></h3>
<p>Exhausts the <strong>micro</strong>-task queue (usually interfaced in node via <code>process.nextTick</code>).</p>
<p>When this API is called, all pending micro-tasks that have been queued via <code>process.nextTick</code> will be executed. Additionally, if those micro-tasks themselves schedule new micro-tasks, those will be continually exhausted until there are no more micro-tasks remaining in the queue.</p>
<h3><a class="anchor" aria-hidden="true" id="jestrunalltimers"></a><a href="#jestrunalltimers" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.runAllTimers()</code></h3>
<p>Exhausts both the <strong>macro</strong>-task queue (i.e., all tasks queued by <code>setTimeout()</code>, <code>setInterval()</code>, and <code>setImmediate()</code>) and the <strong>micro</strong>-task queue (usually interfaced in node via <code>process.nextTick</code>).</p>
<p>When this API is called, all pending macro-tasks and micro-tasks will be executed. If those tasks themselves schedule new tasks, those will be continually exhausted until there are no more tasks remaining in the queue.</p>
<p>This is often useful for synchronously executing setTimeouts during a test in order to synchronously assert about some behavior that would only happen after the <code>setTimeout()</code> or <code>setInterval()</code> callbacks executed. See the <a href="/docs/en/timer-mocks">Timer mocks</a> doc for more information.</p>
<h3><a class="anchor" aria-hidden="true" id="jestrunallimmediates"></a><a href="#jestrunallimmediates" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.runAllImmediates()</code></h3>
<p>Exhausts all tasks queued by <code>setImmediate()</code>.</p>
<blockquote>
<p>Note: This function is not available when using modern fake timers implementation</p>
</blockquote>
<h3><a class="anchor" aria-hidden="true" id="jestadvancetimersbytimemstorun"></a><a href="#jestadvancetimersbytimemstorun" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.advanceTimersByTime(msToRun)</code></h3>
<h5><a class="anchor" aria-hidden="true" id="renamed-in-jest-2200"></a><a href="#renamed-in-jest-2200" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>renamed in Jest <strong>22.0.0+</strong></h5>
<p>Also under the alias: <code>.runTimersToTime()</code></p>
<p>Executes only the macro task queue (i.e. all tasks queued by <code>setTimeout()</code> or <code>setInterval()</code> and <code>setImmediate()</code>).</p>
<p>When this API is called, all timers are advanced by <code>msToRun</code> milliseconds. All pending &quot;macro-tasks&quot; that have been queued via <code>setTimeout()</code> or <code>setInterval()</code>, and would be executed within this time frame will be executed. Additionally if those macro-tasks schedule new macro-tasks that would be executed within the same time frame, those will be executed until there are no more macro-tasks remaining in the queue, that should be run within <code>msToRun</code> milliseconds.</p>
<h3><a class="anchor" aria-hidden="true" id="jestrunonlypendingtimers"></a><a href="#jestrunonlypendingtimers" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.runOnlyPendingTimers()</code></h3>
<p>Executes only the macro-tasks that are currently pending (i.e., only the tasks that have been queued by <code>setTimeout()</code> or <code>setInterval()</code> up to this point). If any of the currently pending macro-tasks schedule new macro-tasks, those new tasks will not be executed by this call.</p>
<p>This is useful for scenarios such as one where the module being tested schedules a <code>setTimeout()</code> whose callback schedules another <code>setTimeout()</code> recursively (meaning the scheduling never stops). In these scenarios, it&apos;s useful to be able to run forward in time by a single step at a time.</p>
<h3><a class="anchor" aria-hidden="true" id="jestadvancetimerstonexttimersteps"></a><a href="#jestadvancetimerstonexttimersteps" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.advanceTimersToNextTimer(steps)</code></h3>
<p>Advances all timers by the needed milliseconds so that only the next timeouts/intervals will run.</p>
<p>Optionally, you can provide <code>steps</code>, so it will run <code>steps</code> amount of next timeouts/intervals.</p>
<h3><a class="anchor" aria-hidden="true" id="jestclearalltimers"></a><a href="#jestclearalltimers" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.clearAllTimers()</code></h3>
<p>Removes any pending timers from the timer system.</p>
<p>This means, if any timers have been scheduled (but have not yet executed), they will be cleared and will never have the opportunity to execute in the future.</p>
<h3><a class="anchor" aria-hidden="true" id="jestgettimercount"></a><a href="#jestgettimercount" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.getTimerCount()</code></h3>
<p>Returns the number of fake timers still left to run.</p>
<h3><a class="anchor" aria-hidden="true" id="jestsetsystemtimenow-number--date"></a><a href="#jestsetsystemtimenow-number--date" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.setSystemTime(now?: number | Date)</code></h3>
<p>Set the current system time used by fake timers. Simulates a user changing the system clock while your program is running. It affects the current time but it does not in itself cause e.g. timers to fire; they will fire exactly as they would have done without the call to <code>jest.setSystemTime()</code>.</p>
<blockquote>
<p>Note: This function is only available when using modern fake timers implementation</p>
</blockquote>
<h3><a class="anchor" aria-hidden="true" id="jestgetrealsystemtime"></a><a href="#jestgetrealsystemtime" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.getRealSystemTime()</code></h3>
<p>When mocking time, <code>Date.now()</code> will also be mocked. If you for some reason need access to the real current time, you can invoke this function.</p>
<blockquote>
<p>Note: This function is only available when using modern fake timers implementation</p>
</blockquote>
<h2><a class="anchor" aria-hidden="true" id="misc"></a><a href="#misc" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Misc</h2>
<h3><a class="anchor" aria-hidden="true" id="jestsettimeouttimeout"></a><a href="#jestsettimeouttimeout" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.setTimeout(timeout)</code></h3>
<p>Set the default timeout interval for tests and before/after hooks in milliseconds. This only affects the test file from which this function is called.</p>
<p><em>Note: The default timeout interval is 5 seconds if this method is not called.</em></p>
<p><em>Note: If you want to set the timeout for all test files, a good place to do this is in <code>setupFilesAfterEnv</code>.</em></p>
<p>Example:</p>
<pre><code class="hljs css language-js">jest.setTimeout(<span class="hljs-number">1000</span>); <span class="hljs-comment">// 1 second</span>
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="jestretrytimes"></a><a href="#jestretrytimes" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jest.retryTimes()</code></h3>
<p>Runs failed tests n-times until they pass or until the max number of retries is exhausted. This only works with <a href="https://github.com/facebook/jest/tree/master/packages/jest-circus">jest-circus</a>!</p>
<p>Example in a test:</p>
<pre><code class="hljs css language-js">jest.retryTimes(<span class="hljs-number">3</span>);
test(<span class="hljs-string">&apos;will fail&apos;</span>, () =&gt; {
  expect(<span class="hljs-literal">true</span>).toBe(<span class="hljs-literal">false</span>);
});
</code></pre>
<p>Returns the <code>jest</code> object for chaining.</p>
</span></div></article>
