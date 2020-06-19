<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/TestingAsyncCode.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Testing Asynchronous Code</h1></header><article><div><span><p>It&apos;s common in JavaScript for code to run asynchronously. When you have code that runs asynchronously, Jest needs to know when the code it is testing has completed, before it can move on to another test. Jest has several ways to handle this.</p>
<h2><a class="anchor" aria-hidden="true" id="callbacks"></a><a href="#callbacks" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Callbacks</h2>
<p>The most common asynchronous pattern is callbacks.</p>
<p>For example, let&apos;s say that you have a <code>fetchData(callback)</code> function that fetches some data and calls <code>callback(data)</code> when it is complete. You want to test that this returned data is the string <code>&apos;peanut butter&apos;</code>.</p>
<p>By default, Jest tests complete once they reach the end of their execution. That means this test will <em>not</em> work as intended:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// Don&apos;t do this!</span>
test(<span class="hljs-string">&apos;the data is peanut butter&apos;</span>, () =&gt; {
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">callback</span>(<span class="hljs-params">data</span>) </span>{
    expect(data).toBe(<span class="hljs-string">&apos;peanut butter&apos;</span>);
  }

fetchData(callback);
});
</code></pre>

<p>The problem is that the test will complete as soon as <code>fetchData</code> completes, before ever calling the callback.</p>
<p>There is an alternate form of <code>test</code> that fixes this. Instead of putting the test in a function with an empty argument, use a single argument called <code>done</code>. Jest will wait until the <code>done</code> callback is called before finishing the test.</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;the data is peanut butter&apos;</span>, done =&gt; {
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">callback</span>(<span class="hljs-params">data</span>) </span>{
    <span class="hljs-keyword">try</span> {
      expect(data).toBe(<span class="hljs-string">&apos;peanut butter&apos;</span>);
      done();
    } <span class="hljs-keyword">catch</span> (error) {
      done(error);
    }
  }

fetchData(callback);
});
</code></pre>

<p>If <code>done()</code> is never called, the test will fail (with timeout error), which is what you want to happen.</p>
<p>If the <code>expect</code> statement fails, it throws an error and <code>done()</code> is not called. If we want to see in the test log why it failed, we have to wrap <code>expect</code> in a <code>try</code> block and pass the error in the <code>catch</code> block to <code>done</code>. Otherwise, we end up with an opaque timeout error that doesn&apos;t show what value was received by <code>expect(data)</code>.</p>
<h2><a class="anchor" aria-hidden="true" id="promises"></a><a href="#promises" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Promises</h2>
<p>If your code uses promises, there is a more straightforward way to handle asynchronous tests. Return a promise from your test, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.</p>
<p>For example, let&apos;s say that <code>fetchData</code>, instead of using a callback, returns a promise that is supposed to resolve to the string <code>&apos;peanut butter&apos;</code>. We could test it with:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;the data is peanut butter&apos;</span>, () =&gt; {
  <span class="hljs-keyword">return</span> fetchData().then(<span class="hljs-function"><span class="hljs-params">data</span> =&gt;</span> {
    expect(data).toBe(<span class="hljs-string">&apos;peanut butter&apos;</span>);
  });
});
</code></pre>
<p>Be sure to return the promise - if you omit this <code>return</code> statement, your test will complete before the promise returned from <code>fetchData</code> resolves and then() has a chance to execute the callback.</p>
<p>If you expect a promise to be rejected, use the <code>.catch</code> method. Make sure to add <code>expect.assertions</code> to verify that a certain number of assertions are called. Otherwise a fulfilled promise would not fail the test.</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;the fetch fails with an error&apos;</span>, () =&gt; {
  expect.assertions(<span class="hljs-number">1</span>);
  <span class="hljs-keyword">return</span> fetchData().catch(<span class="hljs-function"><span class="hljs-params">e</span> =&gt;</span> expect(e).toMatch(<span class="hljs-string">&apos;error&apos;</span>));
});
</code></pre>
<h2><a class="anchor" aria-hidden="true" id="resolves--rejects"></a><a href="#resolves--rejects" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.resolves</code> / <code>.rejects</code></h2>
<p>You can also use the <code>.resolves</code> matcher in your expect statement, and Jest will wait for that promise to resolve. If the promise is rejected, the test will automatically fail.</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;the data is peanut butter&apos;</span>, () =&gt; {
  <span class="hljs-keyword">return</span> expect(fetchData()).resolves.toBe(<span class="hljs-string">&apos;peanut butter&apos;</span>);
});
</code></pre>
<p>Be sure to return the assertion&#x2014;if you omit this <code>return</code> statement, your test will complete before the promise returned from <code>fetchData</code> is resolved and then() has a chance to execute the callback.</p>
<p>If you expect a promise to be rejected, use the <code>.rejects</code> matcher. It works analogically to the <code>.resolves</code> matcher. If the promise is fulfilled, the test will automatically fail.</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;the fetch fails with an error&apos;</span>, () =&gt; {
  <span class="hljs-keyword">return</span> expect(fetchData()).rejects.toMatch(<span class="hljs-string">&apos;error&apos;</span>);
});
</code></pre>
<h2><a class="anchor" aria-hidden="true" id="asyncawait"></a><a href="#asyncawait" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Async/Await</h2>
<p>Alternatively, you can use <code>async</code> and <code>await</code> in your tests. To write an async test, use the <code>async</code> keyword in front of the function passed to <code>test</code>. For example, the same <code>fetchData</code> scenario can be tested with:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;the data is peanut butter&apos;</span>, <span class="hljs-keyword">async</span> () =&gt; {
  <span class="hljs-keyword">const</span> data = <span class="hljs-keyword">await</span> fetchData();
  expect(data).toBe(<span class="hljs-string">&apos;peanut butter&apos;</span>);
});

test(<span class="hljs-string">&apos;the fetch fails with an error&apos;</span>, <span class="hljs-keyword">async</span> () =&gt; {
expect.assertions(<span class="hljs-number">1</span>);
<span class="hljs-keyword">try</span> {
<span class="hljs-keyword">await</span> fetchData();
} <span class="hljs-keyword">catch</span> (e) {
expect(e).toMatch(<span class="hljs-string">&apos;error&apos;</span>);
}
});
</code></pre>

<p>You can combine <code>async</code> and <code>await</code> with <code>.resolves</code> or <code>.rejects</code>.</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;the data is peanut butter&apos;</span>, <span class="hljs-keyword">async</span> () =&gt; {
  <span class="hljs-keyword">await</span> expect(fetchData()).resolves.toBe(<span class="hljs-string">&apos;peanut butter&apos;</span>);
});

test(<span class="hljs-string">&apos;the fetch fails with an error&apos;</span>, <span class="hljs-keyword">async</span> () =&gt; {
<span class="hljs-keyword">await</span> expect(fetchData()).rejects.toThrow(<span class="hljs-string">&apos;error&apos;</span>);
});
</code></pre>

<p>In these cases, <code>async</code> and <code>await</code> are effectively syntactic sugar for the same logic as the promises example uses.</p>
<p>None of these forms is particularly superior to the others, and you can mix and match them across a codebase or even in a single file. It just depends on which style you feel makes your tests simpler.</p>
</span></div></article>
