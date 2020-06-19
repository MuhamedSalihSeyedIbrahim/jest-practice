<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/TutorialjQuery.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">DOM Manipulation</h1></header><article><div><span><p>Another class of functions that is often considered difficult to test is code that directly manipulates the DOM. Let&apos;s see how we can test the following snippet of jQuery code that listens to a click event, fetches some data asynchronously and sets the content of a span.</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// displayUser.js</span>
<span class="hljs-meta">&apos;use strict&apos;</span>;

<span class="hljs-keyword">const</span> \$ = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;jquery&apos;</span>);
<span class="hljs-keyword">const</span> fetchCurrentUser = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;./fetchCurrentUser.js&apos;</span>);

$(<span class="hljs-string">&apos;#button&apos;</span>).click(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  fetchCurrentUser(<span class="hljs-function"><span class="hljs-params">user</span> =&gt;</span> {
    <span class="hljs-keyword">const</span> loggedText = <span class="hljs-string">&apos;Logged &apos;</span> + (user.loggedIn ? <span class="hljs-string">&apos;In&apos;</span> : <span class="hljs-string">&apos;Out&apos;</span>);
    $(<span class="hljs-string">&apos;#username&apos;</span>).text(user.fullName + <span class="hljs-string">&apos; - &apos;</span> + loggedText);
});
});
</code></pre>

<p>Again, we create a test file in the <code>__tests__/</code> folder:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// __tests__/displayUser-test.js</span>
<span class="hljs-meta">&apos;use strict&apos;</span>;

jest.mock(<span class="hljs-string">&apos;../fetchCurrentUser&apos;</span>);

test(<span class="hljs-string">&apos;displays a user after a click&apos;</span>, () =&gt; {
<span class="hljs-comment">// Set up our document body</span>
<span class="hljs-built_in">document</span>.body.innerHTML =
<span class="hljs-string">&apos;&lt;div&gt;&apos;</span> +
<span class="hljs-string">&apos; &lt;span id=&quot;username&quot; /&gt;&apos;</span> +
<span class="hljs-string">&apos; &lt;button id=&quot;button&quot; /&gt;&apos;</span> +
<span class="hljs-string">&apos;&lt;/div&gt;&apos;</span>;

<span class="hljs-comment">// This module has a side-effect</span>
<span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;../displayUser&apos;</span>);

<span class="hljs-keyword">const</span> \$ = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;jquery&apos;</span>);
<span class="hljs-keyword">const</span> fetchCurrentUser = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;../fetchCurrentUser&apos;</span>);

<span class="hljs-comment">// Tell the fetchCurrentUser mock function to automatically invoke</span>
<span class="hljs-comment">// its callback with some data</span>
fetchCurrentUser.mockImplementation(<span class="hljs-function"><span class="hljs-params">cb</span> =&gt;</span> {
cb({
<span class="hljs-attr">fullName</span>: <span class="hljs-string">&apos;Johnny Cash&apos;</span>,
<span class="hljs-attr">loggedIn</span>: <span class="hljs-literal">true</span>,
});
});

<span class="hljs-comment">// Use jquery to emulate a click on our button</span>
\$(<span class="hljs-string">&apos;#button&apos;</span>).click();

<span class="hljs-comment">// Assert that the fetchCurrentUser function was called, and that the</span>
<span class="hljs-comment">// #username span&apos;s inner text was updated as we&apos;d expect it to.</span>
expect(fetchCurrentUser).toBeCalled();
expect(\$(<span class="hljs-string">&apos;#username&apos;</span>).text()).toEqual(<span class="hljs-string">&apos;Johnny Cash - Logged In&apos;</span>);
});
</code></pre>

<p>The function being tested adds an event listener on the <code>#button</code> DOM element, so we need to set up our DOM correctly for the test. Jest ships with <code>jsdom</code> which simulates a DOM environment as if you were in the browser. This means that every DOM API that we call can be observed in the same way it would be observed in a browser!</p>
<p>We are mocking <code>fetchCurrentUser.js</code> so that our test doesn&apos;t make a real network request but instead resolves to mock data locally. This ensures that our test can complete in milliseconds rather than seconds and guarantees a fast unit test iteration speed.</p>
<p>The code for this example is available at <a href="https://github.com/facebook/jest/tree/master/examples/jquery">examples/jquery</a>.</p>
</span></div></article>
