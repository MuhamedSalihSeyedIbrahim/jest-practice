<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/GlobalAPI.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Globals</h1></header><article><div><span><p>In your test files, Jest puts each of these methods and objects into the global environment. You don&apos;t have to require or import anything to use them. However, if you prefer explicit imports, you can do <code>import {describe, expect, it} from &apos;@jest/globals&apos;</code>.</p>
<h2><a class="anchor" aria-hidden="true" id="methods"></a><a href="#methods" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Methods</h2>
<ul>
<li><a href="#afterallfn-timeout"><code>afterAll(fn, timeout)</code></a></li>
<li><a href="#aftereachfn-timeout"><code>afterEach(fn, timeout)</code></a></li>
<li><a href="#beforeallfn-timeout"><code>beforeAll(fn, timeout)</code></a></li>
<li><a href="#beforeeachfn-timeout"><code>beforeEach(fn, timeout)</code></a></li>
<li><a href="#describename-fn"><code>describe(name, fn)</code></a></li>
<li><a href="#describeeachtablename-fn-timeout"><code>describe.each(table)(name, fn, timeout)</code></a></li>
<li><a href="#describeonlyname-fn"><code>describe.only(name, fn)</code></a></li>
<li><a href="#describeonlyeachtablename-fn"><code>describe.only.each(table)(name, fn)</code></a></li>
<li><a href="#describeskipname-fn"><code>describe.skip(name, fn)</code></a></li>
<li><a href="#describeskipeachtablename-fn"><code>describe.skip.each(table)(name, fn)</code></a></li>
<li><a href="#testname-fn-timeout"><code>test(name, fn, timeout)</code></a></li>
<li><a href="#testeachtablename-fn-timeout"><code>test.each(table)(name, fn, timeout)</code></a></li>
<li><a href="#testonlyname-fn-timeout"><code>test.only(name, fn, timeout)</code></a></li>
<li><a href="#testonlyeachtablename-fn"><code>test.only.each(table)(name, fn)</code></a></li>
<li><a href="#testskipname-fn"><code>test.skip(name, fn)</code></a></li>
<li><a href="#testskipeachtablename-fn"><code>test.skip.each(table)(name, fn)</code></a></li>
<li><a href="#testtodoname"><code>test.todo(name)</code></a></li>
</ul>
<hr>
<h2><a class="anchor" aria-hidden="true" id="reference"></a><a href="#reference" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Reference</h2>
<h3><a class="anchor" aria-hidden="true" id="afterallfn-timeout"></a><a href="#afterallfn-timeout" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>afterAll(fn, timeout)</code></h3>
<p>Runs a function after all the tests in this file have completed. If the function returns a promise or is a generator, Jest waits for that promise to resolve before continuing.</p>
<p>Optionally, you can provide a <code>timeout</code> (in milliseconds) for specifying how long to wait before aborting. <em>Note: The default timeout is 5 seconds.</em></p>
<p>This is often useful if you want to clean up some global setup state that is shared across tests.</p>
<p>For example:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> globalDatabase = makeGlobalDatabase();

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">cleanUpDatabase</span>(<span class="hljs-params">db</span>) </span>{
db.cleanUp();
}

afterAll(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
cleanUpDatabase(globalDatabase);
});

test(<span class="hljs-string">&apos;can find things&apos;</span>, () =&gt; {
<span class="hljs-keyword">return</span> globalDatabase.find(<span class="hljs-string">&apos;thing&apos;</span>, {}, results =&gt; {
expect(results.length).toBeGreaterThan(<span class="hljs-number">0</span>);
});
});

test(<span class="hljs-string">&apos;can insert a thing&apos;</span>, () =&gt; {
<span class="hljs-keyword">return</span> globalDatabase.insert(<span class="hljs-string">&apos;thing&apos;</span>, makeThing(), response =&gt; {
expect(response.success).toBeTruthy();
});
});
</code></pre>

<p>Here the <code>afterAll</code> ensures that <code>cleanUpDatabase</code> is called after all tests run.</p>
<p>If <code>afterAll</code> is inside a <code>describe</code> block, it runs at the end of the describe block.</p>
<p>If you want to run some cleanup after every test instead of after all tests, use <code>afterEach</code> instead.</p>
<h3><a class="anchor" aria-hidden="true" id="aftereachfn-timeout"></a><a href="#aftereachfn-timeout" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>afterEach(fn, timeout)</code></h3>
<p>Runs a function after each one of the tests in this file completes. If the function returns a promise or is a generator, Jest waits for that promise to resolve before continuing.</p>
<p>Optionally, you can provide a <code>timeout</code> (in milliseconds) for specifying how long to wait before aborting. <em>Note: The default timeout is 5 seconds.</em></p>
<p>This is often useful if you want to clean up some temporary state that is created by each test.</p>
<p>For example:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> globalDatabase = makeGlobalDatabase();

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">cleanUpDatabase</span>(<span class="hljs-params">db</span>) </span>{
db.cleanUp();
}

afterEach(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
cleanUpDatabase(globalDatabase);
});

test(<span class="hljs-string">&apos;can find things&apos;</span>, () =&gt; {
<span class="hljs-keyword">return</span> globalDatabase.find(<span class="hljs-string">&apos;thing&apos;</span>, {}, results =&gt; {
expect(results.length).toBeGreaterThan(<span class="hljs-number">0</span>);
});
});

test(<span class="hljs-string">&apos;can insert a thing&apos;</span>, () =&gt; {
<span class="hljs-keyword">return</span> globalDatabase.insert(<span class="hljs-string">&apos;thing&apos;</span>, makeThing(), response =&gt; {
expect(response.success).toBeTruthy();
});
});
</code></pre>

<p>Here the <code>afterEach</code> ensures that <code>cleanUpDatabase</code> is called after each test runs.</p>
<p>If <code>afterEach</code> is inside a <code>describe</code> block, it only runs after the tests that are inside this describe block.</p>
<p>If you want to run some cleanup just once, after all of the tests run, use <code>afterAll</code> instead.</p>
<h3><a class="anchor" aria-hidden="true" id="beforeallfn-timeout"></a><a href="#beforeallfn-timeout" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>beforeAll(fn, timeout)</code></h3>
<p>Runs a function before any of the tests in this file run. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running tests.</p>
<p>Optionally, you can provide a <code>timeout</code> (in milliseconds) for specifying how long to wait before aborting. <em>Note: The default timeout is 5 seconds.</em></p>
<p>This is often useful if you want to set up some global state that will be used by many tests.</p>
<p>For example:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> globalDatabase = makeGlobalDatabase();

beforeAll(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-comment">// Clears the database and adds some testing data.</span>
<span class="hljs-comment">// Jest will wait for this promise to resolve before running tests.</span>
<span class="hljs-keyword">return</span> globalDatabase.clear().then(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-keyword">return</span> globalDatabase.insert({<span class="hljs-attr">testData</span>: <span class="hljs-string">&apos;foo&apos;</span>});
});
});

<span class="hljs-comment">// Since we only set up the database once in this example, it&apos;s important</span>
<span class="hljs-comment">// that our tests don&apos;t modify it.</span>
test(<span class="hljs-string">&apos;can find things&apos;</span>, () =&gt; {
<span class="hljs-keyword">return</span> globalDatabase.find(<span class="hljs-string">&apos;thing&apos;</span>, {}, results =&gt; {
expect(results.length).toBeGreaterThan(<span class="hljs-number">0</span>);
});
});
</code></pre>

<p>Here the <code>beforeAll</code> ensures that the database is set up before tests run. If setup was synchronous, you could do this without <code>beforeAll</code>. The key is that Jest will wait for a promise to resolve, so you can have asynchronous setup as well.</p>
<p>If <code>beforeAll</code> is inside a <code>describe</code> block, it runs at the beginning of the describe block.</p>
<p>If you want to run something before every test instead of before any test runs, use <code>beforeEach</code> instead.</p>
<h3><a class="anchor" aria-hidden="true" id="beforeeachfn-timeout"></a><a href="#beforeeachfn-timeout" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>beforeEach(fn, timeout)</code></h3>
<p>Runs a function before each of the tests in this file runs. If the function returns a promise or is a generator, Jest waits for that promise to resolve before running the test.</p>
<p>Optionally, you can provide a <code>timeout</code> (in milliseconds) for specifying how long to wait before aborting. <em>Note: The default timeout is 5 seconds.</em></p>
<p>This is often useful if you want to reset some global state that will be used by many tests.</p>
<p>For example:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> globalDatabase = makeGlobalDatabase();

beforeEach(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-comment">// Clears the database and adds some testing data.</span>
<span class="hljs-comment">// Jest will wait for this promise to resolve before running tests.</span>
<span class="hljs-keyword">return</span> globalDatabase.clear().then(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-keyword">return</span> globalDatabase.insert({<span class="hljs-attr">testData</span>: <span class="hljs-string">&apos;foo&apos;</span>});
});
});

test(<span class="hljs-string">&apos;can find things&apos;</span>, () =&gt; {
<span class="hljs-keyword">return</span> globalDatabase.find(<span class="hljs-string">&apos;thing&apos;</span>, {}, results =&gt; {
expect(results.length).toBeGreaterThan(<span class="hljs-number">0</span>);
});
});

test(<span class="hljs-string">&apos;can insert a thing&apos;</span>, () =&gt; {
<span class="hljs-keyword">return</span> globalDatabase.insert(<span class="hljs-string">&apos;thing&apos;</span>, makeThing(), response =&gt; {
expect(response.success).toBeTruthy();
});
});
</code></pre>

<p>Here the <code>beforeEach</code> ensures that the database is reset for each test.</p>
<p>If <code>beforeEach</code> is inside a <code>describe</code> block, it runs for each test in the describe block.</p>
<p>If you only need to run some setup code once, before any tests run, use <code>beforeAll</code> instead.</p>
<h3><a class="anchor" aria-hidden="true" id="describename-fn"></a><a href="#describename-fn" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>describe(name, fn)</code></h3>
<p><code>describe(name, fn)</code> creates a block that groups together several related tests. For example, if you have a <code>myBeverage</code> object that is supposed to be delicious but not sour, you could test it with:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> myBeverage = {
  <span class="hljs-attr">delicious</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">sour</span>: <span class="hljs-literal">false</span>,
};

describe(<span class="hljs-string">&apos;my beverage&apos;</span>, () =&gt; {
test(<span class="hljs-string">&apos;is delicious&apos;</span>, () =&gt; {
expect(myBeverage.delicious).toBeTruthy();
});

test(<span class="hljs-string">&apos;is not sour&apos;</span>, () =&gt; {
expect(myBeverage.sour).toBeFalsy();
});
});
</code></pre>

<p>This isn&apos;t required - you can write the <code>test</code> blocks directly at the top level. But this can be handy if you prefer your tests to be organized into groups.</p>
<p>You can also nest <code>describe</code> blocks if you have a hierarchy of tests:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> binaryStringToNumber = <span class="hljs-function"><span class="hljs-params">binString</span> =&gt;</span> {
  <span class="hljs-keyword">if</span> (!<span class="hljs-regexp">/^[01]+$/</span>.test(binString)) {
    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> CustomError(<span class="hljs-string">&apos;Not a binary number.&apos;</span>);
  }

<span class="hljs-keyword">return</span> <span class="hljs-built_in">parseInt</span>(binString, <span class="hljs-number">2</span>);
};

describe(<span class="hljs-string">&apos;binaryStringToNumber&apos;</span>, () =&gt; {
describe(<span class="hljs-string">&apos;given an invalid binary string&apos;</span>, () =&gt; {
test(<span class="hljs-string">&apos;composed of non-numbers throws CustomError&apos;</span>, () =&gt; {
expect(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> binaryStringToNumber(<span class="hljs-string">&apos;abc&apos;</span>)).toThrowError(CustomError);
});

    test(<span class="hljs-string">&apos;with extra whitespace throws CustomError&apos;</span>, () =&gt; {
      expect(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> binaryStringToNumber(<span class="hljs-string">&apos;  100&apos;</span>)).toThrowError(CustomError);
    });

});

describe(<span class="hljs-string">&apos;given a valid binary string&apos;</span>, () =&gt; {
test(<span class="hljs-string">&apos;returns the correct number&apos;</span>, () =&gt; {
expect(binaryStringToNumber(<span class="hljs-string">&apos;100&apos;</span>)).toBe(<span class="hljs-number">4</span>);
});
});
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="describeeachtablename-fn-timeout"></a><a href="#describeeachtablename-fn-timeout" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>describe.each(table)(name, fn, timeout)</code></h3>
<p>Use <code>describe.each</code> if you keep duplicating the same test suites with different data. <code>describe.each</code> allows you to write the test suite once and pass data in.</p>
<p><code>describe.each</code> is available with two APIs:</p>
<h4><a class="anchor" aria-hidden="true" id="1-describeeachtablename-fn-timeout"></a><a href="#1-describeeachtablename-fn-timeout" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>1. <code>describe.each(table)(name, fn, timeout)</code></h4>
<ul>
<li><code>table</code>: <code>Array</code> of Arrays with the arguments that are passed into the <code>fn</code> for each row.
<ul>
<li><em>Note</em> If you pass in a 1D array of primitives, internally it will be mapped to a table i.e. <code>[1, 2, 3] -&gt; [[1], [2], [3]]</code></li>
</ul></li>
<li><code>name</code>: <code>String</code> the title of the test suite.
<ul>
<li>Generate unique test titles by positionally injecting parameters with <a href="https://nodejs.org/api/util.html#util_util_format_format_args"><code>printf</code> formatting</a>:
<ul>
<li><code>%p</code> - <a href="https://www.npmjs.com/package/pretty-format">pretty-format</a>.</li>
<li><code>%s</code>- String.</li>
<li><code>%d</code>- Number.</li>
<li><code>%i</code> - Integer.</li>
<li><code>%f</code> - Floating point value.</li>
<li><code>%j</code> - JSON.</li>
<li><code>%o</code> - Object.</li>
<li><code>%#</code> - Index of the test case.</li>
<li><code>%%</code> - single percent sign (&apos;%&apos;). This does not consume an argument.</li>
</ul></li>
</ul></li>
<li><code>fn</code>: <code>Function</code> the suite of tests to be ran, this is the function that will receive the parameters in each row as function arguments.</li>
<li>Optionally, you can provide a <code>timeout</code> (in milliseconds) for specifying how long to wait for each row before aborting. <em>Note: The default timeout is 5 seconds.</em></li>
</ul>
<p>Example:</p>
<pre><code class="hljs css language-js">describe.each([
  [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>],
  [<span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3</span>],
])(<span class="hljs-string">&apos;.add(%i, %i)&apos;</span>, (a, b, expected) =&gt; {
  test(<span class="hljs-string">`returns <span class="hljs-subst">${expected}</span>`</span>, () =&gt; {
    expect(a + b).toBe(expected);
  });

test(<span class="hljs-string">`returned value not be greater than <span class="hljs-subst">${expected}</span>`</span>, () =&gt; {
expect(a + b).not.toBeGreaterThan(expected);
});

test(<span class="hljs-string">`returned value not be less than <span class="hljs-subst">${expected}</span>`</span>, () =&gt; {
expect(a + b).not.toBeLessThan(expected);
});
});
</code></pre>

<h4><a class="anchor" aria-hidden="true" id="2--describeeachtablename-fn-timeout-"></a><a href="#2--describeeachtablename-fn-timeout-" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>2. <code>describe.each`table`(name, fn, timeout)</code></h4>
<ul>
<li><code>table</code>: <code>Tagged Template Literal</code>
<ul>
<li>First row of variable name column headings separated with <code>|</code></li>
<li>One or more subsequent rows of data supplied as template literal expressions using <code>${value}</code> syntax.</li>
</ul></li>
<li><code>name</code>: <code>String</code> the title of the test suite, use <code>$variable</code> to inject test data into the suite title from the tagged template expressions.
<ul>
<li>To inject nested object values use you can supply a keyPath i.e. <code>$variable.path.to.value</code></li>
</ul></li>
<li><code>fn</code>: <code>Function</code> the suite of tests to be ran, this is the function that will receive the test data object.</li>
<li>Optionally, you can provide a <code>timeout</code> (in milliseconds) for specifying how long to wait for each row before aborting. <em>Note: The default timeout is 5 seconds.</em></li>
</ul>
<p>Example:</p>
<pre><code class="hljs css language-js">describe.each<span class="hljs-string">`
  a    | b    | expected
  <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">2</span>}</span>
  <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">2</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">3</span>}</span>
  <span class="hljs-subst">${<span class="hljs-number">2</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">3</span>}</span>
`</span>(<span class="hljs-string">&apos;$a + $b&apos;</span>, ({a, b, expected}) =&gt; {
  test(<span class="hljs-string">`returns <span class="hljs-subst">${expected}</span>`</span>, () =&gt; {
    expect(a + b).toBe(expected);
  });

test(<span class="hljs-string">`returned value not be greater than <span class="hljs-subst">${expected}</span>`</span>, () =&gt; {
expect(a + b).not.toBeGreaterThan(expected);
});

test(<span class="hljs-string">`returned value not be less than <span class="hljs-subst">${expected}</span>`</span>, () =&gt; {
expect(a + b).not.toBeLessThan(expected);
});
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="describeonlyname-fn"></a><a href="#describeonlyname-fn" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>describe.only(name, fn)</code></h3>
<p>Also under the alias: <code>fdescribe(name, fn)</code></p>
<p>You can use <code>describe.only</code> if you want to run only one describe block:</p>
<pre><code class="hljs css language-js">describe.only(<span class="hljs-string">&apos;my beverage&apos;</span>, () =&gt; {
  test(<span class="hljs-string">&apos;is delicious&apos;</span>, () =&gt; {
    expect(myBeverage.delicious).toBeTruthy();
  });

test(<span class="hljs-string">&apos;is not sour&apos;</span>, () =&gt; {
expect(myBeverage.sour).toBeFalsy();
});
});

describe(<span class="hljs-string">&apos;my other beverage&apos;</span>, () =&gt; {
<span class="hljs-comment">// ... will be skipped</span>
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="describeonlyeachtablename-fn"></a><a href="#describeonlyeachtablename-fn" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>describe.only.each(table)(name, fn)</code></h3>
<p>Also under the aliases: <code>fdescribe.each(table)(name, fn)</code> and <code>fdescribe.each`table`(name, fn)</code></p>
<p>Use <code>describe.only.each</code> if you want to only run specific tests suites of data driven tests.</p>
<p><code>describe.only.each</code> is available with two APIs:</p>
<h4><a class="anchor" aria-hidden="true" id="describeonlyeachtablename-fn-1"></a><a href="#describeonlyeachtablename-fn-1" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>describe.only.each(table)(name, fn)</code></h4>
<pre><code class="hljs css language-js">describe.only.each([
  [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>],
  [<span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3</span>],
])(<span class="hljs-string">&apos;.add(%i, %i)&apos;</span>, (a, b, expected) =&gt; {
  test(<span class="hljs-string">`returns <span class="hljs-subst">${expected}</span>`</span>, () =&gt; {
    expect(a + b).toBe(expected);
  });
});

test(<span class="hljs-string">&apos;will not be ran&apos;</span>, () =&gt; {
expect(<span class="hljs-number">1</span> / <span class="hljs-number">0</span>).toBe(<span class="hljs-literal">Infinity</span>);
});
</code></pre>

<h4><a class="anchor" aria-hidden="true" id="-describeonlyeachtablename-fn-"></a><a href="#-describeonlyeachtablename-fn-" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>describe.only.each`table`(name, fn)</code></h4>
<pre><code class="hljs css language-js">describe.only.each<span class="hljs-string">`
  a    | b    | expected
  <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">2</span>}</span>
  <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">2</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">3</span>}</span>
  <span class="hljs-subst">${<span class="hljs-number">2</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">3</span>}</span>
`</span>(<span class="hljs-string">&apos;returns $expected when $a is added $b&apos;</span>, ({a, b, expected}) =&gt; {
  test(<span class="hljs-string">&apos;passes&apos;</span>, () =&gt; {
    expect(a + b).toBe(expected);
  });
});

test(<span class="hljs-string">&apos;will not be ran&apos;</span>, () =&gt; {
expect(<span class="hljs-number">1</span> / <span class="hljs-number">0</span>).toBe(<span class="hljs-literal">Infinity</span>);
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="describeskipname-fn"></a><a href="#describeskipname-fn" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>describe.skip(name, fn)</code></h3>
<p>Also under the alias: <code>xdescribe(name, fn)</code></p>
<p>You can use <code>describe.skip</code> if you do not want to run a particular describe block:</p>
<pre><code class="hljs css language-js">describe(<span class="hljs-string">&apos;my beverage&apos;</span>, () =&gt; {
  test(<span class="hljs-string">&apos;is delicious&apos;</span>, () =&gt; {
    expect(myBeverage.delicious).toBeTruthy();
  });

test(<span class="hljs-string">&apos;is not sour&apos;</span>, () =&gt; {
expect(myBeverage.sour).toBeFalsy();
});
});

describe.skip(<span class="hljs-string">&apos;my other beverage&apos;</span>, () =&gt; {
<span class="hljs-comment">// ... will be skipped</span>
});
</code></pre>

<p>Using <code>describe.skip</code> is often a cleaner alternative to temporarily commenting out a chunk of tests.</p>
<h3><a class="anchor" aria-hidden="true" id="describeskipeachtablename-fn"></a><a href="#describeskipeachtablename-fn" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>describe.skip.each(table)(name, fn)</code></h3>
<p>Also under the aliases: <code>xdescribe.each(table)(name, fn)</code> and <code>xdescribe.each`table`(name, fn)</code></p>
<p>Use <code>describe.skip.each</code> if you want to stop running a suite of data driven tests.</p>
<p><code>describe.skip.each</code> is available with two APIs:</p>
<h4><a class="anchor" aria-hidden="true" id="describeskipeachtablename-fn-1"></a><a href="#describeskipeachtablename-fn-1" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>describe.skip.each(table)(name, fn)</code></h4>
<pre><code class="hljs css language-js">describe.skip.each([
  [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>],
  [<span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3</span>],
])(<span class="hljs-string">&apos;.add(%i, %i)&apos;</span>, (a, b, expected) =&gt; {
  test(<span class="hljs-string">`returns <span class="hljs-subst">${expected}</span>`</span>, () =&gt; {
    expect(a + b).toBe(expected); <span class="hljs-comment">// will not be ran</span>
  });
});

test(<span class="hljs-string">&apos;will be ran&apos;</span>, () =&gt; {
expect(<span class="hljs-number">1</span> / <span class="hljs-number">0</span>).toBe(<span class="hljs-literal">Infinity</span>);
});
</code></pre>

<h4><a class="anchor" aria-hidden="true" id="-describeskipeachtablename-fn-"></a><a href="#-describeskipeachtablename-fn-" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>describe.skip.each`table`(name, fn)</code></h4>
<pre><code class="hljs css language-js">describe.skip.each<span class="hljs-string">`
  a    | b    | expected
  <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">2</span>}</span>
  <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">2</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">3</span>}</span>
  <span class="hljs-subst">${<span class="hljs-number">2</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">3</span>}</span>
`</span>(<span class="hljs-string">&apos;returns $expected when $a is added $b&apos;</span>, ({a, b, expected}) =&gt; {
  test(<span class="hljs-string">&apos;will not be ran&apos;</span>, () =&gt; {
    expect(a + b).toBe(expected); <span class="hljs-comment">// will not be ran</span>
  });
});

test(<span class="hljs-string">&apos;will be ran&apos;</span>, () =&gt; {
expect(<span class="hljs-number">1</span> / <span class="hljs-number">0</span>).toBe(<span class="hljs-literal">Infinity</span>);
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="testname-fn-timeout"></a><a href="#testname-fn-timeout" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>test(name, fn, timeout)</code></h3>
<p>Also under the alias: <code>it(name, fn, timeout)</code></p>
<p>All you need in a test file is the <code>test</code> method which runs a test. For example, let&apos;s say there&apos;s a function <code>inchesOfRain()</code> that should be zero. Your whole test could be:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;did not rain&apos;</span>, () =&gt; {
  expect(inchesOfRain()).toBe(<span class="hljs-number">0</span>);
});
</code></pre>
<p>The first argument is the test name; the second argument is a function that contains the expectations to test. The third argument (optional) is <code>timeout</code> (in milliseconds) for specifying how long to wait before aborting. <em>Note: The default timeout is 5 seconds.</em></p>
<blockquote>
<p>Note: If a <strong>promise is returned</strong> from <code>test</code>, Jest will wait for the promise to resolve before letting the test complete. Jest will also wait if you <strong>provide an argument to the test function</strong>, usually called <code>done</code>. This could be handy when you want to test callbacks. See how to test async code <a href="/docs/en/asynchronous#callbacks">here</a>.</p>
</blockquote>
<p>For example, let&apos;s say <code>fetchBeverageList()</code> returns a promise that is supposed to resolve to a list that has <code>lemon</code> in it. You can test this with:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;has lemon in it&apos;</span>, () =&gt; {
  <span class="hljs-keyword">return</span> fetchBeverageList().then(<span class="hljs-function"><span class="hljs-params">list</span> =&gt;</span> {
    expect(list).toContain(<span class="hljs-string">&apos;lemon&apos;</span>);
  });
});
</code></pre>
<p>Even though the call to <code>test</code> will return right away, the test doesn&apos;t complete until the promise resolves as well.</p>
<h3><a class="anchor" aria-hidden="true" id="testeachtablename-fn-timeout"></a><a href="#testeachtablename-fn-timeout" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>test.each(table)(name, fn, timeout)</code></h3>
<p>Also under the alias: <code>it.each(table)(name, fn)</code> and <code>it.each`table`(name, fn)</code></p>
<p>Use <code>test.each</code> if you keep duplicating the same test with different data. <code>test.each</code> allows you to write the test once and pass data in.</p>
<p><code>test.each</code> is available with two APIs:</p>
<h4><a class="anchor" aria-hidden="true" id="1-testeachtablename-fn-timeout"></a><a href="#1-testeachtablename-fn-timeout" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>1. <code>test.each(table)(name, fn, timeout)</code></h4>
<ul>
<li><code>table</code>: <code>Array</code> of Arrays with the arguments that are passed into the test <code>fn</code> for each row.
<ul>
<li><em>Note</em> If you pass in a 1D array of primitives, internally it will be mapped to a table i.e. <code>[1, 2, 3] -&gt; [[1], [2], [3]]</code></li>
</ul></li>
<li><code>name</code>: <code>String</code> the title of the test block.
<ul>
<li>Generate unique test titles by positionally injecting parameters with <a href="https://nodejs.org/api/util.html#util_util_format_format_args"><code>printf</code> formatting</a>:
<ul>
<li><code>%p</code> - <a href="https://www.npmjs.com/package/pretty-format">pretty-format</a>.</li>
<li><code>%s</code>- String.</li>
<li><code>%d</code>- Number.</li>
<li><code>%i</code> - Integer.</li>
<li><code>%f</code> - Floating point value.</li>
<li><code>%j</code> - JSON.</li>
<li><code>%o</code> - Object.</li>
<li><code>%#</code> - Index of the test case.</li>
<li><code>%%</code> - single percent sign (&apos;%&apos;). This does not consume an argument.</li>
</ul></li>
</ul></li>
<li><code>fn</code>: <code>Function</code> the test to be ran, this is the function that will receive the parameters in each row as function arguments.</li>
<li>Optionally, you can provide a <code>timeout</code> (in milliseconds) for specifying how long to wait for each row before aborting. <em>Note: The default timeout is 5 seconds.</em></li>
</ul>
<p>Example:</p>
<pre><code class="hljs css language-js">test.each([
  [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>],
  [<span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3</span>],
])(<span class="hljs-string">&apos;.add(%i, %i)&apos;</span>, (a, b, expected) =&gt; {
  expect(a + b).toBe(expected);
});
</code></pre>
<h4><a class="anchor" aria-hidden="true" id="2--testeachtablename-fn-timeout-"></a><a href="#2--testeachtablename-fn-timeout-" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>2. <code>test.each`table`(name, fn, timeout)</code></h4>
<ul>
<li><code>table</code>: <code>Tagged Template Literal</code>
<ul>
<li>First row of variable name column headings separated with <code>|</code></li>
<li>One or more subsequent rows of data supplied as template literal expressions using <code>${value}</code> syntax.</li>
</ul></li>
<li><code>name</code>: <code>String</code> the title of the test, use <code>$variable</code> to inject test data into the test title from the tagged template expressions.
<ul>
<li>To inject nested object values use you can supply a keyPath i.e. <code>$variable.path.to.value</code></li>
</ul></li>
<li><code>fn</code>: <code>Function</code> the test to be ran, this is the function that will receive the test data object.</li>
<li>Optionally, you can provide a <code>timeout</code> (in milliseconds) for specifying how long to wait for each row before aborting. <em>Note: The default timeout is 5 seconds.</em></li>
</ul>
<p>Example:</p>
<pre><code class="hljs css language-js">test.each<span class="hljs-string">`
  a    | b    | expected
  <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">2</span>}</span>
  <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">2</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">3</span>}</span>
  <span class="hljs-subst">${<span class="hljs-number">2</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">3</span>}</span>
`</span>(<span class="hljs-string">&apos;returns $expected when $a is added $b&apos;</span>, ({a, b, expected}) =&gt; {
  expect(a + b).toBe(expected);
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="testonlyname-fn-timeout"></a><a href="#testonlyname-fn-timeout" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>test.only(name, fn, timeout)</code></h3>
<p>Also under the aliases: <code>it.only(name, fn, timeout)</code>, and <code>fit(name, fn, timeout)</code></p>
<p>When you are debugging a large test file, you will often only want to run a subset of tests. You can use <code>.only</code> to specify which tests are the only ones you want to run in that test file.</p>
<p>Optionally, you can provide a <code>timeout</code> (in milliseconds) for specifying how long to wait before aborting. <em>Note: The default timeout is 5 seconds.</em></p>
<p>For example, let&apos;s say you had these tests:</p>
<pre><code class="hljs css language-js">test.only(<span class="hljs-string">&apos;it is raining&apos;</span>, () =&gt; {
  expect(inchesOfRain()).toBeGreaterThan(<span class="hljs-number">0</span>);
});

test(<span class="hljs-string">&apos;it is not snowing&apos;</span>, () =&gt; {
expect(inchesOfSnow()).toBe(<span class="hljs-number">0</span>);
});
</code></pre>

<p>Only the &quot;it is raining&quot; test will run in that test file, since it is run with <code>test.only</code>.</p>
<p>Usually you wouldn&apos;t check code using <code>test.only</code> into source control - you would use it for debugging, and remove it once you have fixed the broken tests.</p>
<h3><a class="anchor" aria-hidden="true" id="testonlyeachtablename-fn"></a><a href="#testonlyeachtablename-fn" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>test.only.each(table)(name, fn)</code></h3>
<p>Also under the aliases: <code>it.only.each(table)(name, fn)</code>, <code>fit.each(table)(name, fn)</code>, <code>it.only.each`table`(name, fn)</code> and <code>fit.each`table`(name, fn)</code></p>
<p>Use <code>test.only.each</code> if you want to only run specific tests with different test data.</p>
<p><code>test.only.each</code> is available with two APIs:</p>
<h4><a class="anchor" aria-hidden="true" id="testonlyeachtablename-fn-1"></a><a href="#testonlyeachtablename-fn-1" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>test.only.each(table)(name, fn)</code></h4>
<pre><code class="hljs css language-js">test.only.each([
  [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>],
  [<span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3</span>],
])(<span class="hljs-string">&apos;.add(%i, %i)&apos;</span>, (a, b, expected) =&gt; {
  expect(a + b).toBe(expected);
});

test(<span class="hljs-string">&apos;will not be ran&apos;</span>, () =&gt; {
expect(<span class="hljs-number">1</span> / <span class="hljs-number">0</span>).toBe(<span class="hljs-literal">Infinity</span>);
});
</code></pre>

<h4><a class="anchor" aria-hidden="true" id="-testonlyeachtablename-fn-"></a><a href="#-testonlyeachtablename-fn-" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>test.only.each`table`(name, fn)</code></h4>
<pre><code class="hljs css language-js">test.only.each<span class="hljs-string">`
  a    | b    | expected
  <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">2</span>}</span>
  <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">2</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">3</span>}</span>
  <span class="hljs-subst">${<span class="hljs-number">2</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">3</span>}</span>
`</span>(<span class="hljs-string">&apos;returns $expected when $a is added $b&apos;</span>, ({a, b, expected}) =&gt; {
  expect(a + b).toBe(expected);
});

test(<span class="hljs-string">&apos;will not be ran&apos;</span>, () =&gt; {
expect(<span class="hljs-number">1</span> / <span class="hljs-number">0</span>).toBe(<span class="hljs-literal">Infinity</span>);
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="testskipname-fn"></a><a href="#testskipname-fn" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>test.skip(name, fn)</code></h3>
<p>Also under the aliases: <code>it.skip(name, fn)</code>, <code>xit(name, fn)</code>, and <code>xtest(name, fn)</code></p>
<p>When you are maintaining a large codebase, you may sometimes find a test that is temporarily broken for some reason. If you want to skip running this test, but you don&apos;t want to delete this code, you can use <code>test.skip</code> to specify some tests to skip.</p>
<p>For example, let&apos;s say you had these tests:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;it is raining&apos;</span>, () =&gt; {
  expect(inchesOfRain()).toBeGreaterThan(<span class="hljs-number">0</span>);
});

test.skip(<span class="hljs-string">&apos;it is not snowing&apos;</span>, () =&gt; {
expect(inchesOfSnow()).toBe(<span class="hljs-number">0</span>);
});
</code></pre>

<p>Only the &quot;it is raining&quot; test will run, since the other test is run with <code>test.skip</code>.</p>
<p>You could comment the test out, but it&apos;s often a bit nicer to use <code>test.skip</code> because it will maintain indentation and syntax highlighting.</p>
<h3><a class="anchor" aria-hidden="true" id="testskipeachtablename-fn"></a><a href="#testskipeachtablename-fn" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>test.skip.each(table)(name, fn)</code></h3>
<p>Also under the aliases: <code>it.skip.each(table)(name, fn)</code>, <code>xit.each(table)(name, fn)</code>, <code>xtest.each(table)(name, fn)</code>, <code>it.skip.each`table`(name, fn)</code>, <code>xit.each`table`(name, fn)</code> and <code>xtest.each`table`(name, fn)</code></p>
<p>Use <code>test.skip.each</code> if you want to stop running a collection of data driven tests.</p>
<p><code>test.skip.each</code> is available with two APIs:</p>
<h4><a class="anchor" aria-hidden="true" id="testskipeachtablename-fn-1"></a><a href="#testskipeachtablename-fn-1" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>test.skip.each(table)(name, fn)</code></h4>
<pre><code class="hljs css language-js">test.skip.each([
  [<span class="hljs-number">1</span>, <span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
  [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>],
  [<span class="hljs-number">2</span>, <span class="hljs-number">1</span>, <span class="hljs-number">3</span>],
])(<span class="hljs-string">&apos;.add(%i, %i)&apos;</span>, (a, b, expected) =&gt; {
  expect(a + b).toBe(expected); <span class="hljs-comment">// will not be ran</span>
});

test(<span class="hljs-string">&apos;will be ran&apos;</span>, () =&gt; {
expect(<span class="hljs-number">1</span> / <span class="hljs-number">0</span>).toBe(<span class="hljs-literal">Infinity</span>);
});
</code></pre>

<h4><a class="anchor" aria-hidden="true" id="-testskipeachtablename-fn-"></a><a href="#-testskipeachtablename-fn-" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>test.skip.each`table`(name, fn)</code></h4>
<pre><code class="hljs css language-js">test.skip.each<span class="hljs-string">`
  a    | b    | expected
  <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">2</span>}</span>
  <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">2</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">3</span>}</span>
  <span class="hljs-subst">${<span class="hljs-number">2</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">1</span>}</span> | <span class="hljs-subst">${<span class="hljs-number">3</span>}</span>
`</span>(<span class="hljs-string">&apos;returns $expected when $a is added $b&apos;</span>, ({a, b, expected}) =&gt; {
  expect(a + b).toBe(expected); <span class="hljs-comment">// will not be ran</span>
});

test(<span class="hljs-string">&apos;will be ran&apos;</span>, () =&gt; {
expect(<span class="hljs-number">1</span> / <span class="hljs-number">0</span>).toBe(<span class="hljs-literal">Infinity</span>);
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="testtodoname"></a><a href="#testtodoname" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>test.todo(name)</code></h3>
<p>Also under the alias: <code>it.todo(name)</code></p>
<p>Use <code>test.todo</code> when you are planning on writing tests. These tests will be highlighted in the summary output at the end so you know how many tests you still need todo.</p>
<p><em>Note</em>: If you supply a test callback function then the <code>test.todo</code> will throw an error. If you have already implemented the test and it is broken and you do not want it to run, then use <code>test.skip</code> instead.</p>
<h4><a class="anchor" aria-hidden="true" id="api"></a><a href="#api" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>API</h4>
<ul>
<li><code>name</code>: <code>String</code> the title of the test plan.</li>
</ul>
<p>Example:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> add = <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> a + b;

test.todo(<span class="hljs-string">&apos;add should be associative&apos;</span>);
</code></pre>
</span></div></article>
