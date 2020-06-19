<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/SetupAndTeardown.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Setup and Teardown</h1></header><article><div><span><p>Often while writing tests you have some setup work that needs to happen before tests run, and you have some finishing work that needs to happen after tests run. Jest provides helper functions to handle this.</p>
<h2><a class="anchor" aria-hidden="true" id="repeating-setup-for-many-tests"></a><a href="#repeating-setup-for-many-tests" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Repeating Setup For Many Tests</h2>
<p>If you have some work you need to do repeatedly for many tests, you can use <code>beforeEach</code> and <code>afterEach</code>.</p>
<p>For example, let&apos;s say that several tests interact with a database of cities. You have a method <code>initializeCityDatabase()</code> that must be called before each of these tests, and a method <code>clearCityDatabase()</code> that must be called after each of these tests. You can do this with:</p>
<pre><code class="hljs css language-js">beforeEach(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  initializeCityDatabase();
});

afterEach(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
clearCityDatabase();
});

test(<span class="hljs-string">&apos;city database has Vienna&apos;</span>, () =&gt; {
expect(isCity(<span class="hljs-string">&apos;Vienna&apos;</span>)).toBeTruthy();
});

test(<span class="hljs-string">&apos;city database has San Juan&apos;</span>, () =&gt; {
expect(isCity(<span class="hljs-string">&apos;San Juan&apos;</span>)).toBeTruthy();
});
</code></pre>

<p><code>beforeEach</code> and <code>afterEach</code> can handle asynchronous code in the same ways that <a href="/docs/en/asynchronous">tests can handle asynchronous code</a> - they can either take a <code>done</code> parameter or return a promise. For example, if <code>initializeCityDatabase()</code> returned a promise that resolved when the database was initialized, we would want to return that promise:</p>
<pre><code class="hljs css language-js">beforeEach(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  <span class="hljs-keyword">return</span> initializeCityDatabase();
});
</code></pre>
<h2><a class="anchor" aria-hidden="true" id="one-time-setup"></a><a href="#one-time-setup" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>One-Time Setup</h2>
<p>In some cases, you only need to do setup once, at the beginning of a file. This can be especially bothersome when the setup is asynchronous, so you can&apos;t do it inline. Jest provides <code>beforeAll</code> and <code>afterAll</code> to handle this situation.</p>
<p>For example, if both <code>initializeCityDatabase</code> and <code>clearCityDatabase</code> returned promises, and the city database could be reused between tests, we could change our test code to:</p>
<pre><code class="hljs css language-js">beforeAll(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  <span class="hljs-keyword">return</span> initializeCityDatabase();
});

afterAll(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-keyword">return</span> clearCityDatabase();
});

test(<span class="hljs-string">&apos;city database has Vienna&apos;</span>, () =&gt; {
expect(isCity(<span class="hljs-string">&apos;Vienna&apos;</span>)).toBeTruthy();
});

test(<span class="hljs-string">&apos;city database has San Juan&apos;</span>, () =&gt; {
expect(isCity(<span class="hljs-string">&apos;San Juan&apos;</span>)).toBeTruthy();
});
</code></pre>

<h2><a class="anchor" aria-hidden="true" id="scoping"></a><a href="#scoping" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Scoping</h2>
<p>By default, the <code>before</code> and <code>after</code> blocks apply to every test in a file. You can also group tests together using a <code>describe</code> block. When they are inside a <code>describe</code> block, the <code>before</code> and <code>after</code> blocks only apply to the tests within that <code>describe</code> block.</p>
<p>For example, let&apos;s say we had not just a city database, but also a food database. We could do different setup for different tests:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// Applies to all tests in this file</span>
beforeEach(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  <span class="hljs-keyword">return</span> initializeCityDatabase();
});

test(<span class="hljs-string">&apos;city database has Vienna&apos;</span>, () =&gt; {
expect(isCity(<span class="hljs-string">&apos;Vienna&apos;</span>)).toBeTruthy();
});

test(<span class="hljs-string">&apos;city database has San Juan&apos;</span>, () =&gt; {
expect(isCity(<span class="hljs-string">&apos;San Juan&apos;</span>)).toBeTruthy();
});

describe(<span class="hljs-string">&apos;matching cities to foods&apos;</span>, () =&gt; {
<span class="hljs-comment">// Applies only to tests in this describe block</span>
beforeEach(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-keyword">return</span> initializeFoodDatabase();
});

test(<span class="hljs-string">&apos;Vienna &lt;3 sausage&apos;</span>, () =&gt; {
expect(isValidCityFoodPair(<span class="hljs-string">&apos;Vienna&apos;</span>, <span class="hljs-string">&apos;Wiener Schnitzel&apos;</span>)).toBe(<span class="hljs-literal">true</span>);
});

test(<span class="hljs-string">&apos;San Juan &lt;3 plantains&apos;</span>, () =&gt; {
expect(isValidCityFoodPair(<span class="hljs-string">&apos;San Juan&apos;</span>, <span class="hljs-string">&apos;Mofongo&apos;</span>)).toBe(<span class="hljs-literal">true</span>);
});
});
</code></pre>

<p>Note that the top-level <code>beforeEach</code> is executed before the <code>beforeEach</code> inside the <code>describe</code> block. It may help to illustrate the order of execution of all hooks.</p>
<pre><code class="hljs css language-js">beforeAll(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;1 - beforeAll&apos;</span>));
afterAll(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;1 - afterAll&apos;</span>));
beforeEach(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;1 - beforeEach&apos;</span>));
afterEach(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;1 - afterEach&apos;</span>));
test(<span class="hljs-string">&apos;&apos;</span>, () =&gt; <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;1 - test&apos;</span>));
describe(<span class="hljs-string">&apos;Scoped / Nested block&apos;</span>, () =&gt; {
  beforeAll(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;2 - beforeAll&apos;</span>));
  afterAll(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;2 - afterAll&apos;</span>));
  beforeEach(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;2 - beforeEach&apos;</span>));
  afterEach(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;2 - afterEach&apos;</span>));
  test(<span class="hljs-string">&apos;&apos;</span>, () =&gt; <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;2 - test&apos;</span>));
});

<span class="hljs-comment">// 1 - beforeAll</span>
<span class="hljs-comment">// 1 - beforeEach</span>
<span class="hljs-comment">// 1 - test</span>
<span class="hljs-comment">// 1 - afterEach</span>
<span class="hljs-comment">// 2 - beforeAll</span>
<span class="hljs-comment">// 1 - beforeEach</span>
<span class="hljs-comment">// 2 - beforeEach</span>
<span class="hljs-comment">// 2 - test</span>
<span class="hljs-comment">// 2 - afterEach</span>
<span class="hljs-comment">// 1 - afterEach</span>
<span class="hljs-comment">// 2 - afterAll</span>
<span class="hljs-comment">// 1 - afterAll</span>
</code></pre>

<h2><a class="anchor" aria-hidden="true" id="order-of-execution-of-describe-and-test-blocks"></a><a href="#order-of-execution-of-describe-and-test-blocks" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Order of execution of describe and test blocks</h2>
<p>Jest executes all describe handlers in a test file <em>before</em> it executes any of the actual tests. This is another reason to do setup and teardown inside <code>before*</code> and <code>after*</code> handlers rather than inside the describe blocks. Once the describe blocks are complete, by default Jest runs all the tests serially in the order they were encountered in the collection phase, waiting for each to finish and be tidied up before moving on.</p>
<p>Consider the following illustrative test file and output:</p>
<pre><code class="hljs css language-js">describe(<span class="hljs-string">&apos;outer&apos;</span>, () =&gt; {
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;describe outer-a&apos;</span>);

describe(<span class="hljs-string">&apos;describe inner 1&apos;</span>, () =&gt; {
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;describe inner 1&apos;</span>);
test(<span class="hljs-string">&apos;test 1&apos;</span>, () =&gt; {
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;test for describe inner 1&apos;</span>);
expect(<span class="hljs-literal">true</span>).toEqual(<span class="hljs-literal">true</span>);
});
});

<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;describe outer-b&apos;</span>);

test(<span class="hljs-string">&apos;test 1&apos;</span>, () =&gt; {
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;test for describe outer&apos;</span>);
expect(<span class="hljs-literal">true</span>).toEqual(<span class="hljs-literal">true</span>);
});

describe(<span class="hljs-string">&apos;describe inner 2&apos;</span>, () =&gt; {
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;describe inner 2&apos;</span>);
test(<span class="hljs-string">&apos;test for describe inner 2&apos;</span>, () =&gt; {
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;test for describe inner 2&apos;</span>);
expect(<span class="hljs-literal">false</span>).toEqual(<span class="hljs-literal">false</span>);
});
});

<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;describe outer-c&apos;</span>);
});

<span class="hljs-comment">// describe outer-a</span>
<span class="hljs-comment">// describe inner 1</span>
<span class="hljs-comment">// describe outer-b</span>
<span class="hljs-comment">// describe inner 2</span>
<span class="hljs-comment">// describe outer-c</span>
<span class="hljs-comment">// test for describe inner 1</span>
<span class="hljs-comment">// test for describe outer</span>
<span class="hljs-comment">// test for describe inner 2</span>
</code></pre>

<h2><a class="anchor" aria-hidden="true" id="general-advice"></a><a href="#general-advice" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>General Advice</h2>
<p>If a test is failing, one of the first things to check should be whether the test is failing when it&apos;s the only test that runs. To run only one test with Jest, temporarily change that <code>test</code> command to a <code>test.only</code>:</p>
<pre><code class="hljs css language-js">test.only(<span class="hljs-string">&apos;this will be the only test that runs&apos;</span>, () =&gt; {
  expect(<span class="hljs-literal">true</span>).toBe(<span class="hljs-literal">false</span>);
});

test(<span class="hljs-string">&apos;this test will not run&apos;</span>, () =&gt; {
expect(<span class="hljs-string">&apos;A&apos;</span>).toBe(<span class="hljs-string">&apos;A&apos;</span>);
});
</code></pre>

<p>If you have a test that often fails when it&apos;s run as part of a larger suite, but doesn&apos;t fail when you run it alone, it&apos;s a good bet that something from a different test is interfering with this one. You can often fix this by clearing some shared state with <code>beforeEach</code>. If you&apos;re not sure whether some shared state is being modified, you can also try a <code>beforeEach</code> that logs data.</p>
</span></div></article>
