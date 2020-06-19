<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/BypassingModuleMocks.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Bypassing module mocks</h1></header><article><div><span><p>Jest allows you to mock out whole modules in your tests, which can be useful for testing if your code is calling functions from that module correctly. However, sometimes you may want to use parts of a mocked module in your <em>test file</em>, in which case you want to access the original implementation, rather than a mocked version.</p>
<p>Consider writing a test case for this <code>createUser</code> function:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// createUser.js</span>
<span class="hljs-keyword">import</span> fetch <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;node-fetch&apos;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> createUser = <span class="hljs-keyword">async</span> () =&gt; {
<span class="hljs-keyword">const</span> response = <span class="hljs-keyword">await</span> fetch(<span class="hljs-string">&apos;http://website.com/users&apos;</span>, {<span class="hljs-attr">method</span>: <span class="hljs-string">&apos;POST&apos;</span>});
<span class="hljs-keyword">const</span> userId = <span class="hljs-keyword">await</span> response.text();
<span class="hljs-keyword">return</span> userId;
};
</code></pre>

<p>Your test will want to mock the <code>fetch</code> function so that we can be sure that it gets called without actually making the network request. However, you&apos;ll also need to mock the return value of <code>fetch</code> with a <code>Response</code> (wrapped in a <code>Promise</code>), as our function uses it to grab the created user&apos;s ID. So you might initially try writing a test like this:</p>
<pre><code class="hljs css language-javascript">jest.mock(<span class="hljs-string">&apos;node-fetch&apos;</span>);

<span class="hljs-keyword">import</span> fetch, {Response} <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;node-fetch&apos;</span>;

<span class="hljs-keyword">import</span> {createUser} <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./createUser&apos;</span>;

test(<span class="hljs-string">&apos;createUser calls fetch with the right args and returns the user id&apos;</span>, <span class="hljs-keyword">async</span> () =&gt; {
fetch.mockReturnValue(<span class="hljs-built_in">Promise</span>.resolve(<span class="hljs-keyword">new</span> Response(<span class="hljs-string">&apos;4&apos;</span>)));

<span class="hljs-keyword">const</span> userId = <span class="hljs-keyword">await</span> createUser();

expect(fetch).toHaveBeenCalledTimes(<span class="hljs-number">1</span>);
expect(fetch).toHaveBeenCalledWith(<span class="hljs-string">&apos;http://website.com/users&apos;</span>, {
<span class="hljs-attr">method</span>: <span class="hljs-string">&apos;POST&apos;</span>,
});
expect(userId).toBe(<span class="hljs-string">&apos;4&apos;</span>);
});
</code></pre>

<p>However, if you ran that test you would find that the <code>createUser</code> function would fail, throwing the error: <code>TypeError: response.text is not a function</code>. This is because the <code>Response</code> class you&apos;ve imported from <code>node-fetch</code> has been mocked (due to the <code>jest.mock</code> call at the top of the test file) so it no longer behaves the way it should.</p>
<p>To get around problems like this, Jest provides the <code>jest.requireActual</code> helper. To make the above test work, make the following change to the imports in the test file:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// BEFORE</span>
jest.mock(<span class="hljs-string">&apos;node-fetch&apos;</span>);
<span class="hljs-keyword">import</span> fetch, {Response} <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;node-fetch&apos;</span>;
</code></pre>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// AFTER</span>
jest.mock(<span class="hljs-string">&apos;node-fetch&apos;</span>);
<span class="hljs-keyword">import</span> fetch <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;node-fetch&apos;</span>;
<span class="hljs-keyword">const</span> {Response} = jest.requireActual(<span class="hljs-string">&apos;node-fetch&apos;</span>);
</code></pre>
<p>This allows your test file to import the actual <code>Response</code> object from <code>node-fetch</code>, rather than a mocked version. This means the test will now pass correctly.</p>
</span></div></article>
