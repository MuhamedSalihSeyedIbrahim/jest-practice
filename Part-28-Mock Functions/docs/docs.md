<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/MockFunctionAPI.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Mock Functions</h1></header><article><div><span><p>Mock functions are also known as &quot;spies&quot;, because they let you spy on the behavior of a function that is called indirectly by some other code, rather than only testing the output. You can create a mock function with <code>jest.fn()</code>. If no implementation is given, the mock function will return <code>undefined</code> when invoked.</p>
<h2><a class="anchor" aria-hidden="true" id="methods"></a><a href="#methods" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Methods</h2>
<ul>
<li><a href="#mockfngetmockname"><code>mockFn.getMockName()</code></a></li>
<li><a href="#mockfnmockcalls"><code>mockFn.mock.calls</code></a></li>
<li><a href="#mockfnmockresults"><code>mockFn.mock.results</code></a></li>
<li><a href="#mockfnmockinstances"><code>mockFn.mock.instances</code></a></li>
<li><a href="#mockfnmockclear"><code>mockFn.mockClear()</code></a></li>
<li><a href="#mockfnmockreset"><code>mockFn.mockReset()</code></a></li>
<li><a href="#mockfnmockrestore"><code>mockFn.mockRestore()</code></a></li>
<li><a href="#mockfnmockimplementationfn"><code>mockFn.mockImplementation(fn)</code></a></li>
<li><a href="#mockfnmockimplementationoncefn"><code>mockFn.mockImplementationOnce(fn)</code></a></li>
<li><a href="#mockfnmocknamevalue"><code>mockFn.mockName(value)</code></a></li>
<li><a href="#mockfnmockreturnthis"><code>mockFn.mockReturnThis()</code></a></li>
<li><a href="#mockfnmockreturnvaluevalue"><code>mockFn.mockReturnValue(value)</code></a></li>
<li><a href="#mockfnmockreturnvalueoncevalue"><code>mockFn.mockReturnValueOnce(value)</code></a></li>
<li><a href="#mockfnmockresolvedvaluevalue"><code>mockFn.mockResolvedValue(value)</code></a></li>
<li><a href="#mockfnmockresolvedvalueoncevalue"><code>mockFn.mockResolvedValueOnce(value)</code></a></li>
<li><a href="#mockfnmockrejectedvaluevalue"><code>mockFn.mockRejectedValue(value)</code></a></li>
<li><a href="#mockfnmockrejectedvalueoncevalue"><code>mockFn.mockRejectedValueOnce(value)</code></a></li>
</ul>
<hr>
<h2><a class="anchor" aria-hidden="true" id="reference"></a><a href="#reference" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Reference</h2>
<h3><a class="anchor" aria-hidden="true" id="mockfngetmockname"></a><a href="#mockfngetmockname" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>mockFn.getMockName()</code></h3>
<p>Returns the mock name string set by calling <code>mockFn.mockName(value)</code>.</p>
<h3><a class="anchor" aria-hidden="true" id="mockfnmockcalls"></a><a href="#mockfnmockcalls" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>mockFn.mock.calls</code></h3>
<p>An array containing the call arguments of all calls that have been made to this mock function. Each item in the array is an array of arguments that were passed during the call.</p>
<p>For example: A mock function <code>f</code> that has been called twice, with the arguments <code>f(&apos;arg1&apos;, &apos;arg2&apos;)</code>, and then with the arguments <code>f(&apos;arg3&apos;, &apos;arg4&apos;)</code>, would have a <code>mock.calls</code> array that looks like this:</p>
<pre><code class="hljs css language-js">[
  [<span class="hljs-string">&apos;arg1&apos;</span>, <span class="hljs-string">&apos;arg2&apos;</span>],
  [<span class="hljs-string">&apos;arg3&apos;</span>, <span class="hljs-string">&apos;arg4&apos;</span>],
];
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="mockfnmockresults"></a><a href="#mockfnmockresults" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>mockFn.mock.results</code></h3>
<p>An array containing the results of all calls that have been made to this mock function. Each entry in this array is an object containing a <code>type</code> property, and a <code>value</code> property. <code>type</code> will be one of the following:</p>
<ul>
<li><code>&apos;return&apos;</code> - Indicates that the call completed by returning normally.</li>
<li><code>&apos;throw&apos;</code> - Indicates that the call completed by throwing a value.</li>
<li><code>&apos;incomplete&apos;</code> - Indicates that the call has not yet completed. This occurs if you test the result from within the mock function itself, or from within a function that was called by the mock.</li>
</ul>
<p>The <code>value</code> property contains the value that was thrown or returned. <code>value</code> is undefined when <code>type === &apos;incomplete&apos;</code>.</p>
<p>For example: A mock function <code>f</code> that has been called three times, returning <code>&apos;result1&apos;</code>, throwing an error, and then returning <code>&apos;result2&apos;</code>, would have a <code>mock.results</code> array that looks like this:</p>
<pre><code class="hljs css language-js">[
  {
    <span class="hljs-attr">type</span>: <span class="hljs-string">&apos;return&apos;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&apos;result1&apos;</span>,
  },
  {
    <span class="hljs-attr">type</span>: <span class="hljs-string">&apos;throw&apos;</span>,
    <span class="hljs-attr">value</span>: {
      <span class="hljs-comment">/* Error instance */</span>
    },
  },
  {
    <span class="hljs-attr">type</span>: <span class="hljs-string">&apos;return&apos;</span>,
    <span class="hljs-attr">value</span>: <span class="hljs-string">&apos;result2&apos;</span>,
  },
];
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="mockfnmockinstances"></a><a href="#mockfnmockinstances" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>mockFn.mock.instances</code></h3>
<p>An array that contains all the object instances that have been instantiated from this mock function using <code>new</code>.</p>
<p>For example: A mock function that has been instantiated twice would have the following <code>mock.instances</code> array:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> mockFn = jest.fn();

<span class="hljs-keyword">const</span> a = <span class="hljs-keyword">new</span> mockFn();
<span class="hljs-keyword">const</span> b = <span class="hljs-keyword">new</span> mockFn();

mockFn.mock.instances[<span class="hljs-number">0</span>] === a; <span class="hljs-comment">// true</span>
mockFn.mock.instances[<span class="hljs-number">1</span>] === b; <span class="hljs-comment">// true</span>
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="mockfnmockclear"></a><a href="#mockfnmockclear" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>mockFn.mockClear()</code></h3>
<p>Resets all information stored in the <a href="#mockfnmockcalls"><code>mockFn.mock.calls</code></a> and <a href="#mockfnmockinstances"><code>mockFn.mock.instances</code></a> arrays.</p>
<p>Often this is useful when you want to clean up a mock&apos;s usage data between two assertions.</p>
<p>Beware that <code>mockClear</code> will replace <code>mockFn.mock</code>, not just <a href="#mockfnmockcalls"><code>mockFn.mock.calls</code></a> and <a href="#mockfnmockinstances"><code>mockFn.mock.instances</code></a>. You should therefore avoid assigning <code>mockFn.mock</code> to other variables, temporary or not, to make sure you don&apos;t access stale data.</p>
<p>The <a href="configuration.html#clearmocks-boolean"><code>clearMocks</code></a> configuration option is available to clear mocks automatically between tests.</p>
<h3><a class="anchor" aria-hidden="true" id="mockfnmockreset"></a><a href="#mockfnmockreset" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>mockFn.mockReset()</code></h3>
<p>Does everything that <a href="#mockfnmockclear"><code>mockFn.mockClear()</code></a> does, and also removes any mocked return values or implementations.</p>
<p>This is useful when you want to completely reset a <em>mock</em> back to its initial state. (Note that resetting a <em>spy</em> will result in a function with no return value).</p>
<p>Beware that <code>mockReset</code> will replace <code>mockFn.mock</code>, not just <a href="#mockfnmockcalls"><code>mockFn.mock.calls</code></a> and <a href="#mockfnmockinstances"><code>mockFn.mock.instances</code></a>. You should therefore avoid assigning <code>mockFn.mock</code> to other variables, temporary or not, to make sure you don&apos;t access stale data.</p>
<h3><a class="anchor" aria-hidden="true" id="mockfnmockrestore"></a><a href="#mockfnmockrestore" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>mockFn.mockRestore()</code></h3>
<p>Does everything that <a href="#mockfnmockreset"><code>mockFn.mockReset()</code></a> does, and also restores the original (non-mocked) implementation.</p>
<p>This is useful when you want to mock functions in certain test cases and restore the original implementation in others.</p>
<p>Beware that <code>mockFn.mockRestore</code> only works when the mock was created with <code>jest.spyOn</code>. Thus you have to take care of restoration yourself when manually assigning <code>jest.fn()</code>.</p>
<p>The <a href="configuration.html#restoremocks-boolean"><code>restoreMocks</code></a> configuration option is available to restore mocks automatically between tests.</p>
<h3><a class="anchor" aria-hidden="true" id="mockfnmockimplementationfn"></a><a href="#mockfnmockimplementationfn" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>mockFn.mockImplementation(fn)</code></h3>
<p>Accepts a function that should be used as the implementation of the mock. The mock itself will still record all calls that go into and instances that come from itself &#x2013; the only difference is that the implementation will also be executed when the mock is called.</p>
<p><em>Note: <code>jest.fn(implementation)</code> is a shorthand for <code>jest.fn().mockImplementation(implementation)</code>.</em></p>
<p>For example:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> mockFn = jest.fn().mockImplementation(<span class="hljs-function"><span class="hljs-params">scalar</span> =&gt;</span> <span class="hljs-number">42</span> + scalar);
<span class="hljs-comment">// or: jest.fn(scalar =&gt; 42 + scalar);</span>

<span class="hljs-keyword">const</span> a = mockFn(<span class="hljs-number">0</span>);
<span class="hljs-keyword">const</span> b = mockFn(<span class="hljs-number">1</span>);

a === <span class="hljs-number">42</span>; <span class="hljs-comment">// true</span>
b === <span class="hljs-number">43</span>; <span class="hljs-comment">// true</span>

mockFn.mock.calls[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>] === <span class="hljs-number">0</span>; <span class="hljs-comment">// true</span>
mockFn.mock.calls[<span class="hljs-number">1</span>][<span class="hljs-number">0</span>] === <span class="hljs-number">1</span>; <span class="hljs-comment">// true</span>
</code></pre>

<p><code>mockImplementation</code> can also be used to mock class constructors:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// SomeClass.js</span>
<span class="hljs-built_in">module</span>.exports = <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">SomeClass</span> </span>{
  m(a, b) {}
};

<span class="hljs-comment">// OtherModule.test.js</span>
jest.mock(<span class="hljs-string">&apos;./SomeClass&apos;</span>); <span class="hljs-comment">// this happens automatically with automocking</span>
<span class="hljs-keyword">const</span> SomeClass = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;./SomeClass&apos;</span>);
<span class="hljs-keyword">const</span> mMock = jest.fn();
SomeClass.mockImplementation(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-keyword">return</span> {
<span class="hljs-attr">m</span>: mMock,
};
});

<span class="hljs-keyword">const</span> some = <span class="hljs-keyword">new</span> SomeClass();
some.m(<span class="hljs-string">&apos;a&apos;</span>, <span class="hljs-string">&apos;b&apos;</span>);
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;Calls to m: &apos;</span>, mMock.mock.calls);
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="mockfnmockimplementationoncefn"></a><a href="#mockfnmockimplementationoncefn" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>mockFn.mockImplementationOnce(fn)</code></h3>
<p>Accepts a function that will be used as an implementation of the mock for one call to the mocked function. Can be chained so that multiple function calls produce different results.</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> myMockFn = jest
  .fn()
  .mockImplementationOnce(<span class="hljs-function"><span class="hljs-params">cb</span> =&gt;</span> cb(<span class="hljs-literal">null</span>, <span class="hljs-literal">true</span>))
  .mockImplementationOnce(<span class="hljs-function"><span class="hljs-params">cb</span> =&gt;</span> cb(<span class="hljs-literal">null</span>, <span class="hljs-literal">false</span>));

myMockFn(<span class="hljs-function">(<span class="hljs-params">err, val</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(val)); <span class="hljs-comment">// true</span>

myMockFn(<span class="hljs-function">(<span class="hljs-params">err, val</span>) =&gt;</span> <span class="hljs-built_in">console</span>.log(val)); <span class="hljs-comment">// false</span>
</code></pre>

<p>When the mocked function runs out of implementations defined with mockImplementationOnce, it will execute the default implementation set with <code>jest.fn(() =&gt; defaultValue)</code> or <code>.mockImplementation(() =&gt; defaultValue)</code> if they were called:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> myMockFn = jest
  .fn(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-string">&apos;default&apos;</span>)
  .mockImplementationOnce(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-string">&apos;first call&apos;</span>)
  .mockImplementationOnce(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-string">&apos;second call&apos;</span>);

<span class="hljs-comment">// &apos;first call&apos;, &apos;second call&apos;, &apos;default&apos;, &apos;default&apos;</span>
<span class="hljs-built_in">console</span>.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="mockfnmocknamevalue"></a><a href="#mockfnmocknamevalue" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>mockFn.mockName(value)</code></h3>
<p>Accepts a string to use in test result output in place of &quot;jest.fn()&quot; to indicate which mock function is being referenced.</p>
<p>For example:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> mockFn = jest.fn().mockName(<span class="hljs-string">&apos;mockedFunction&apos;</span>);
<span class="hljs-comment">// mockFn();</span>
expect(mockFn).toHaveBeenCalled();
</code></pre>
<p>Will result in this error:</p>
<pre><code class="hljs"><span class="hljs-symbol">expect</span>(mockedFunction).toHaveBeenCalled()

<span class="hljs-symbol">Expected</span> mock <span class="hljs-meta">function</span> <span class="hljs-string">&quot;mockedFunction&quot;</span> to have <span class="hljs-keyword">been </span>called, <span class="hljs-keyword">but </span><span class="hljs-keyword">it </span>was not called.
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="mockfnmockreturnthis"></a><a href="#mockfnmockreturnthis" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>mockFn.mockReturnThis()</code></h3>
<p>Syntactic sugar function for:</p>
<pre><code class="hljs css language-js">jest.fn(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>;
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="mockfnmockreturnvaluevalue"></a><a href="#mockfnmockreturnvaluevalue" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>mockFn.mockReturnValue(value)</code></h3>
<p>Accepts a value that will be returned whenever the mock function is called.</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> mock = jest.fn();
mock.mockReturnValue(<span class="hljs-number">42</span>);
mock(); <span class="hljs-comment">// 42</span>
mock.mockReturnValue(<span class="hljs-number">43</span>);
mock(); <span class="hljs-comment">// 43</span>
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="mockfnmockreturnvalueoncevalue"></a><a href="#mockfnmockreturnvalueoncevalue" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>mockFn.mockReturnValueOnce(value)</code></h3>
<p>Accepts a value that will be returned for one call to the mock function. Can be chained so that successive calls to the mock function return different values. When there are no more <code>mockReturnValueOnce</code> values to use, calls will return a value specified by <code>mockReturnValue</code>.</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> myMockFn = jest
  .fn()
  .mockReturnValue(<span class="hljs-string">&apos;default&apos;</span>)
  .mockReturnValueOnce(<span class="hljs-string">&apos;first call&apos;</span>)
  .mockReturnValueOnce(<span class="hljs-string">&apos;second call&apos;</span>);

<span class="hljs-comment">// &apos;first call&apos;, &apos;second call&apos;, &apos;default&apos;, &apos;default&apos;</span>
<span class="hljs-built_in">console</span>.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="mockfnmockresolvedvaluevalue"></a><a href="#mockfnmockresolvedvaluevalue" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>mockFn.mockResolvedValue(value)</code></h3>
<p>Syntactic sugar function for:</p>
<pre><code class="hljs css language-js">jest.fn().mockImplementation(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">Promise</span>.resolve(value));
</code></pre>
<p>Useful to mock async functions in async tests:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;async test&apos;</span>, <span class="hljs-keyword">async</span> () =&gt; {
  <span class="hljs-keyword">const</span> asyncMock = jest.fn().mockResolvedValue(<span class="hljs-number">43</span>);

<span class="hljs-keyword">await</span> asyncMock(); <span class="hljs-comment">// 43</span>
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="mockfnmockresolvedvalueoncevalue"></a><a href="#mockfnmockresolvedvalueoncevalue" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>mockFn.mockResolvedValueOnce(value)</code></h3>
<p>Syntactic sugar function for:</p>
<pre><code class="hljs css language-js">jest.fn().mockImplementationOnce(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">Promise</span>.resolve(value));
</code></pre>
<p>Useful to resolve different values over multiple async calls:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;async test&apos;</span>, <span class="hljs-keyword">async</span> () =&gt; {
  <span class="hljs-keyword">const</span> asyncMock = jest
    .fn()
    .mockResolvedValue(<span class="hljs-string">&apos;default&apos;</span>)
    .mockResolvedValueOnce(<span class="hljs-string">&apos;first call&apos;</span>)
    .mockResolvedValueOnce(<span class="hljs-string">&apos;second call&apos;</span>);

<span class="hljs-keyword">await</span> asyncMock(); <span class="hljs-comment">// first call</span>
<span class="hljs-keyword">await</span> asyncMock(); <span class="hljs-comment">// second call</span>
<span class="hljs-keyword">await</span> asyncMock(); <span class="hljs-comment">// default</span>
<span class="hljs-keyword">await</span> asyncMock(); <span class="hljs-comment">// default</span>
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="mockfnmockrejectedvaluevalue"></a><a href="#mockfnmockrejectedvaluevalue" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>mockFn.mockRejectedValue(value)</code></h3>
<p>Syntactic sugar function for:</p>
<pre><code class="hljs css language-js">jest.fn().mockImplementation(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">Promise</span>.reject(value));
</code></pre>
<p>Useful to create async mock functions that will always reject:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;async test&apos;</span>, <span class="hljs-keyword">async</span> () =&gt; {
  <span class="hljs-keyword">const</span> asyncMock = jest.fn().mockRejectedValue(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&apos;Async error&apos;</span>));

<span class="hljs-keyword">await</span> asyncMock(); <span class="hljs-comment">// throws &quot;Async error&quot;</span>
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="mockfnmockrejectedvalueoncevalue"></a><a href="#mockfnmockrejectedvalueoncevalue" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>mockFn.mockRejectedValueOnce(value)</code></h3>
<p>Syntactic sugar function for:</p>
<pre><code class="hljs css language-js">jest.fn().mockImplementationOnce(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">Promise</span>.reject(value));
</code></pre>
<p>Example usage:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;async test&apos;</span>, <span class="hljs-keyword">async</span> () =&gt; {
  <span class="hljs-keyword">const</span> asyncMock = jest
    .fn()
    .mockResolvedValueOnce(<span class="hljs-string">&apos;first call&apos;</span>)
    .mockRejectedValueOnce(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&apos;Async error&apos;</span>));

<span class="hljs-keyword">await</span> asyncMock(); <span class="hljs-comment">// first call</span>
<span class="hljs-keyword">await</span> asyncMock(); <span class="hljs-comment">// throws &quot;Async error&quot;</span>
});
</code></pre>
</span></div></article>
