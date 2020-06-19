<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/TutorialAsync.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">An Async Example</h1></header><article><div><span><p>First, enable Babel support in Jest as documented in the <a href="/docs/en/getting-started#using-babel">Getting Started</a> guide.</p>
<p>Let&apos;s implement a module that fetches user data from an API and returns the user name.</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// user.js</span>
<span class="hljs-keyword">import</span> request <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./request&apos;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getUserName</span>(<span class="hljs-params">userID</span>) </span>{
<span class="hljs-keyword">return</span> request(<span class="hljs-string">&apos;/users/&apos;</span> + userID).then(<span class="hljs-function"><span class="hljs-params">user</span> =&gt;</span> user.name);
}
</code></pre>

<p>In the above implementation we expect the <code>request.js</code> module to return a promise. We chain a call to <code>then</code> to receive the user name.</p>
<p>Now imagine an implementation of <code>request.js</code> that goes to the network and fetches some user data:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// request.js</span>
<span class="hljs-keyword">const</span> http = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;http&apos;</span>);

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">request</span>(<span class="hljs-params">url</span>) </span>{
<span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function"><span class="hljs-params">resolve</span> =&gt;</span> {
<span class="hljs-comment">// This is an example of an http request, for example to fetch</span>
<span class="hljs-comment">// user data from an API.</span>
<span class="hljs-comment">// This module is being mocked in **mocks**/request.js</span>
http.get({<span class="hljs-attr">path</span>: url}, response =&gt; {
<span class="hljs-keyword">let</span> data = <span class="hljs-string">&apos;&apos;</span>;
response.on(<span class="hljs-string">&apos;data&apos;</span>, \_data =&gt; (data += \_data));
response.on(<span class="hljs-string">&apos;end&apos;</span>, () =&gt; resolve(data));
});
});
}
</code></pre>

<p>Because we don&apos;t want to go to the network in our test, we are going to create a manual mock for our <code>request.js</code> module in the <code>__mocks__</code> folder (the folder is case-sensitive, <code>__MOCKS__</code> will not work). It could look something like this:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// __mocks__/request.js</span>
<span class="hljs-keyword">const</span> users = {
  <span class="hljs-number">4</span>: {<span class="hljs-attr">name</span>: <span class="hljs-string">&apos;Mark&apos;</span>},
  <span class="hljs-number">5</span>: {<span class="hljs-attr">name</span>: <span class="hljs-string">&apos;Paul&apos;</span>},
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">request</span>(<span class="hljs-params">url</span>) </span>{
<span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>) =&gt;</span> {
<span class="hljs-keyword">const</span> userID = <span class="hljs-built_in">parseInt</span>(url.substr(<span class="hljs-string">&apos;/users/&apos;</span>.length), <span class="hljs-number">10</span>);
process.nextTick(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span>
users[userID]
? resolve(users[userID])
: reject({
<span class="hljs-attr">error</span>: <span class="hljs-string">&apos;User with &apos;</span> + userID + <span class="hljs-string">&apos; not found.&apos;</span>,
}),
);
});
}
</code></pre>

<p>Now let&apos;s write a test for our async functionality.</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// __tests__/user-test.js</span>
jest.mock(<span class="hljs-string">&apos;../request&apos;</span>);

<span class="hljs-keyword">import</span> \* <span class="hljs-keyword">as</span> user <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;../user&apos;</span>;

<span class="hljs-comment">// The assertion for a promise must be returned.</span>
it(<span class="hljs-string">&apos;works with promises&apos;</span>, () =&gt; {
expect.assertions(<span class="hljs-number">1</span>);
<span class="hljs-keyword">return</span> user.getUserName(<span class="hljs-number">4</span>).then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> expect(data).toEqual(<span class="hljs-string">&apos;Mark&apos;</span>));
});
</code></pre>

<p>We call <code>jest.mock(&apos;../request&apos;)</code> to tell Jest to use our manual mock. <code>it</code> expects the return value to be a Promise that is going to be resolved. You can chain as many Promises as you like and call <code>expect</code> at any time, as long as you return a Promise at the end.</p>
<h2><a class="anchor" aria-hidden="true" id="resolves"></a><a href="#resolves" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.resolves</code></h2>
<p>There is a less verbose way using <code>resolves</code> to unwrap the value of a fulfilled promise together with any other matcher. If the promise is rejected, the assertion will fail.</p>
<pre><code class="hljs css language-js">it(<span class="hljs-string">&apos;works with resolves&apos;</span>, () =&gt; {
  expect.assertions(<span class="hljs-number">1</span>);
  <span class="hljs-keyword">return</span> expect(user.getUserName(<span class="hljs-number">5</span>)).resolves.toEqual(<span class="hljs-string">&apos;Paul&apos;</span>);
});
</code></pre>
<h2><a class="anchor" aria-hidden="true" id="asyncawait"></a><a href="#asyncawait" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>async</code>/<code>await</code></h2>
<p>Writing tests using the <code>async</code>/<code>await</code> syntax is also possible. Here is how you&apos;d write the same examples from before:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// async/await can be used.</span>
it(<span class="hljs-string">&apos;works with async/await&apos;</span>, <span class="hljs-keyword">async</span> () =&gt; {
  expect.assertions(<span class="hljs-number">1</span>);
  <span class="hljs-keyword">const</span> data = <span class="hljs-keyword">await</span> user.getUserName(<span class="hljs-number">4</span>);
  expect(data).toEqual(<span class="hljs-string">&apos;Mark&apos;</span>);
});

<span class="hljs-comment">// async/await can also be used with `.resolves`.</span>
it(<span class="hljs-string">&apos;works with async/await and resolves&apos;</span>, <span class="hljs-keyword">async</span> () =&gt; {
expect.assertions(<span class="hljs-number">1</span>);
<span class="hljs-keyword">await</span> expect(user.getUserName(<span class="hljs-number">5</span>)).resolves.toEqual(<span class="hljs-string">&apos;Paul&apos;</span>);
});
</code></pre>

<p>To enable async/await in your project, install <a href="https://babeljs.io/docs/en/babel-preset-env"><code>@babel/preset-env</code></a> and enable the feature in your <code>babel.config.js</code> file.</p>
<h2><a class="anchor" aria-hidden="true" id="error-handling"></a><a href="#error-handling" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Error handling</h2>
<p>Errors can be handled using the <code>.catch</code> method. Make sure to add <code>expect.assertions</code> to verify that a certain number of assertions are called. Otherwise a fulfilled promise would not fail the test:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// Testing for async errors using Promise.catch.</span>
it(<span class="hljs-string">&apos;tests error with promises&apos;</span>, () =&gt; {
  expect.assertions(<span class="hljs-number">1</span>);
  <span class="hljs-keyword">return</span> user.getUserName(<span class="hljs-number">2</span>).catch(<span class="hljs-function"><span class="hljs-params">e</span> =&gt;</span>
    expect(e).toEqual({
      <span class="hljs-attr">error</span>: <span class="hljs-string">&apos;User with 2 not found.&apos;</span>,
    }),
  );
});

<span class="hljs-comment">// Or using async/await.</span>
it(<span class="hljs-string">&apos;tests error with async/await&apos;</span>, <span class="hljs-keyword">async</span> () =&gt; {
expect.assertions(<span class="hljs-number">1</span>);
<span class="hljs-keyword">try</span> {
<span class="hljs-keyword">await</span> user.getUserName(<span class="hljs-number">1</span>);
} <span class="hljs-keyword">catch</span> (e) {
expect(e).toEqual({
<span class="hljs-attr">error</span>: <span class="hljs-string">&apos;User with 1 not found.&apos;</span>,
});
}
});
</code></pre>

<h2><a class="anchor" aria-hidden="true" id="rejects"></a><a href="#rejects" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.rejects</code></h2>
<p>The<code>.rejects</code> helper works like the <code>.resolves</code> helper. If the promise is fulfilled, the test will automatically fail. <code>expect.assertions(number)</code> is not required but recommended to verify that a certain number of <a href="https://jestjs.io/docs/en/expect#expectassertionsnumber">assertions</a> are called during a test. It is otherwise easy to forget to <code>return</code>/<code>await</code> the <code>.resolves</code> assertions.</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// Testing for async errors using `.rejects`.</span>
it(<span class="hljs-string">&apos;tests error with rejects&apos;</span>, () =&gt; {
  expect.assertions(<span class="hljs-number">1</span>);
  <span class="hljs-keyword">return</span> expect(user.getUserName(<span class="hljs-number">3</span>)).rejects.toEqual({
    <span class="hljs-attr">error</span>: <span class="hljs-string">&apos;User with 3 not found.&apos;</span>,
  });
});

<span class="hljs-comment">// Or using async/await with `.rejects`.</span>
it(<span class="hljs-string">&apos;tests error with async/await and rejects&apos;</span>, <span class="hljs-keyword">async</span> () =&gt; {
expect.assertions(<span class="hljs-number">1</span>);
<span class="hljs-keyword">await</span> expect(user.getUserName(<span class="hljs-number">3</span>)).rejects.toEqual({
<span class="hljs-attr">error</span>: <span class="hljs-string">&apos;User with 3 not found.&apos;</span>,
});
});
</code></pre>

<p>The code for this example is available at <a href="https://github.com/facebook/jest/tree/master/examples/async">examples/async</a>.</p>
<p>If you&apos;d like to test timers, like <code>setTimeout</code>, take a look at the <a href="/docs/en/timer-mocks">Timer mocks</a> documentation.</p>
</span></div></article>
