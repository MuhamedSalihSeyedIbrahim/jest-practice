<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/SnapshotTesting.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Snapshot Testing</h1></header><article><div><span><p>Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.</p>
<p>A typical snapshot test case for a mobile app renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component.</p>
<h2><a class="anchor" aria-hidden="true" id="snapshot-testing-with-jest"></a><a href="#snapshot-testing-with-jest" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Snapshot Testing with Jest</h2>
<p>A similar approach can be taken when it comes to testing your React components. Instead of rendering the graphical UI, which would require building the entire app, you can use a test renderer to quickly generate a serializable value for your React tree. Consider this <a href="https://github.com/facebook/jest/blob/master/examples/snapshot/__tests__/link.react.test.js">example test</a> for a <a href="https://github.com/facebook/jest/blob/master/examples/snapshot/Link.react.js">Link component</a>:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react&apos;</span>;
<span class="hljs-keyword">import</span> Link <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;../Link.react&apos;</span>;
<span class="hljs-keyword">import</span> renderer <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react-test-renderer&apos;</span>;

it(<span class="hljs-string">&apos;renders correctly&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> tree = renderer
.create(<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Link</span> <span class="hljs-attr">page</span>=<span class="hljs-string">&quot;http://www.facebook.com&quot;</span>&gt;</span>Facebook<span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span></span>)
.toJSON();
expect(tree).toMatchSnapshot();
});
</code></pre>

<p>The first time this test is run, Jest creates a <a href="https://github.com/facebook/jest/blob/master/examples/snapshot/__tests__/__snapshots__/link.react.test.js.snap">snapshot file</a> that looks like this:</p>
<pre><code class="hljs css language-javascript">exports[<span class="hljs-string">`renders correctly 1`</span>] = <span class="hljs-string">`
&lt;a
  className=&quot;normal&quot;
  href=&quot;http://www.facebook.com&quot;
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}
&gt;
  Facebook
&lt;/a&gt;
`</span>;
</code></pre>
<p>The snapshot artifact should be committed alongside code changes, and reviewed as part of your code review process. Jest uses <a href="https://github.com/facebook/jest/tree/master/packages/pretty-format">pretty-format</a> to make snapshots human-readable during code review. On subsequent test runs Jest will compare the rendered output with the previous snapshot. If they match, the test will pass. If they don&apos;t match, either the test runner found a bug in your code (in this case, it&apos;s <code>&lt;Link&gt;</code> component) that should be fixed, or the implementation has changed and the snapshot needs to be updated.</p>
<blockquote>
<p>Note: The snapshot is directly scoped to the data you render &#x2013; in our example it&apos;s <code>&lt;Link /&gt;</code> component with page prop passed to it. This implies that even if any other file has missing props (Say, <code>App.js</code>) in the <code>&lt;Link /&gt;</code> component, it will still pass the test as the test doesn&apos;t know the usage of <code>&lt;Link /&gt;</code> component and it&apos;s scoped only to the <code>Link.react.js</code>. Also, Rendering the same component with different props in other snapshot tests will not affect the first one, as the tests don&apos;t know about each other.</p>
</blockquote>
<p>More information on how snapshot testing works and why we built it can be found on the <a href="https://jestjs.io/blog/2016/07/27/jest-14.html">release blog post</a>. We recommend reading <a href="http://benmccormick.org/2016/09/19/testing-with-jest-snapshots-first-impressions/">this blog post</a> to get a good sense of when you should use snapshot testing. We also recommend watching this <a href="https://egghead.io/lessons/javascript-use-jest-s-snapshot-testing-feature?pl=testing-javascript-with-jest-a36c4074">egghead video</a> on Snapshot Testing with Jest.</p>
<h3><a class="anchor" aria-hidden="true" id="updating-snapshots"></a><a href="#updating-snapshots" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Updating Snapshots</h3>
<p>It&apos;s straightforward to spot when a snapshot test fails after a bug has been introduced. When that happens, go ahead and fix the issue and make sure your snapshot tests are passing again. Now, let&apos;s talk about the case when a snapshot test is failing due to an intentional implementation change.</p>
<p>One such situation can arise if we intentionally change the address the Link component in our example is pointing to.</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// Updated test case with a Link to a different address</span>
it(<span class="hljs-string">&apos;renders correctly&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> tree = renderer
    .create(<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Link</span> <span class="hljs-attr">page</span>=<span class="hljs-string">&quot;http://www.instagram.com&quot;</span>&gt;</span>Instagram<span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span></span>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
</code></pre>
<p>In that case, Jest will print this output:</p>
<p><img src="/img/content/failedSnapshotTest.png" alt></p>
<p>Since we just updated our component to point to a different address, it&apos;s reasonable to expect changes in the snapshot for this component. Our snapshot test case is failing because the snapshot for our updated component no longer matches the snapshot artifact for this test case.</p>
<p>To resolve this, we will need to update our snapshot artifacts. You can run Jest with a flag that will tell it to re-generate snapshots:</p>
<pre><code class="hljs css language-bash">jest --updateSnapshot
</code></pre>
<p>Go ahead and accept the changes by running the above command. You may also use the equivalent single-character <code>-u</code> flag to re-generate snapshots if you prefer. This will re-generate snapshot artifacts for all failing snapshot tests. If we had any additional failing snapshot tests due to an unintentional bug, we would need to fix the bug before re-generating snapshots to avoid recording snapshots of the buggy behavior.</p>
<p>If you&apos;d like to limit which snapshot test cases get re-generated, you can pass an additional <code>--testNamePattern</code> flag to re-record snapshots only for those tests that match the pattern.</p>
<p>You can try out this functionality by cloning the <a href="https://github.com/facebook/jest/tree/master/examples/snapshot">snapshot example</a>, modifying the <code>Link</code> component, and running Jest.</p>
<h3><a class="anchor" aria-hidden="true" id="interactive-snapshot-mode"></a><a href="#interactive-snapshot-mode" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Interactive Snapshot Mode</h3>
<p>Failed snapshots can also be updated interactively in watch mode:</p>
<p><img src="/img/content/interactiveSnapshot.png" alt></p>
<p>Once you enter Interactive Snapshot Mode, Jest will step you through the failed snapshots one test at a time and give you the opportunity to review the failed output.</p>
<p>From here you can choose to update that snapshot or skip to the next:</p>
<p><img src="/img/content/interactiveSnapshotUpdate.gif" alt></p>
<p>Once you&apos;re finished, Jest will give you a summary before returning back to watch mode:</p>
<p><img src="/img/content/interactiveSnapshotDone.png" alt></p>
<h3><a class="anchor" aria-hidden="true" id="inline-snapshots"></a><a href="#inline-snapshots" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Inline Snapshots</h3>
<p>Inline snapshots behave identically to external snapshots (<code>.snap</code> files), except the snapshot values are written automatically back into the source code. This means you can get the benefits of automatically generated snapshots without having to switch to an external file to make sure the correct value was written.</p>
<blockquote>
<p>Inline snapshots are powered by <a href="https://prettier.io">Prettier</a>. To use inline snapshots you must have <code>prettier</code> installed in your project. Your Prettier configuration will be respected when writing to test files.</p>
<p>If you have <code>prettier</code> installed in a location where Jest can&apos;t find it, you can tell Jest how to find it using the <a href="/docs/en/configuration#prettierpath-string"><code>&quot;prettierPath&quot;</code></a> configuration property.</p>
</blockquote>
<p><strong>Example:</strong></p>
<p>First, you write a test, calling <code>.toMatchInlineSnapshot()</code> with no arguments:</p>
<pre><code class="hljs css language-javascript">it(<span class="hljs-string">&apos;renders correctly&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> tree = renderer
    .create(<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Link</span> <span class="hljs-attr">page</span>=<span class="hljs-string">&quot;https://prettier.io&quot;</span>&gt;</span>Prettier<span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span></span>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot();
});
</code></pre>
<p>The next time you run Jest, <code>tree</code> will be evaluated, and a snapshot will be written as an argument to <code>toMatchInlineSnapshot</code>:</p>
<pre><code class="hljs css language-javascript">it(<span class="hljs-string">&apos;renders correctly&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> tree = renderer
    .create(<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Link</span> <span class="hljs-attr">page</span>=<span class="hljs-string">&quot;https://prettier.io&quot;</span>&gt;</span>Prettier<span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span></span>)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(<span class="hljs-string">`
&lt;a
  className=&quot;normal&quot;
  href=&quot;https://prettier.io&quot;
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}
&gt;
  Prettier
&lt;/a&gt;
`</span>);
});
</code></pre>
<p>That&apos;s all there is to it! You can even update the snapshots with <code>--updateSnapshot</code> or using the <code>u</code> key in <code>--watch</code> mode.</p>
<h3><a class="anchor" aria-hidden="true" id="property-matchers"></a><a href="#property-matchers" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Property Matchers</h3>
<p>Often there are fields in the object you want to snapshot which are generated (like IDs and Dates). If you try to snapshot these objects, they will force the snapshot to fail on every run:</p>
<pre><code class="hljs css language-javascript">it(<span class="hljs-string">&apos;will fail every time&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> user = {
    <span class="hljs-attr">createdAt</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),
    <span class="hljs-attr">id</span>: <span class="hljs-built_in">Math</span>.floor(<span class="hljs-built_in">Math</span>.random() * <span class="hljs-number">20</span>),
    <span class="hljs-attr">name</span>: <span class="hljs-string">&apos;LeBron James&apos;</span>,
  };

expect(user).toMatchSnapshot();
});

<span class="hljs-comment">// Snapshot</span>
exports[<span class="hljs-string">`will fail every time 1`</span>] = <span class="hljs-string">`Object { &quot;createdAt&quot;: 2018-05-19T23:36:09.816Z, &quot;id&quot;: 3, &quot;name&quot;: &quot;LeBron James&quot;, }`</span>;
</code></pre>

<p>For these cases, Jest allows providing an asymmetric matcher for any property. These matchers are checked before the snapshot is written or tested, and then saved to the snapshot file instead of the received value:</p>
<pre><code class="hljs css language-javascript">it(<span class="hljs-string">&apos;will check the matchers and pass&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> user = {
    <span class="hljs-attr">createdAt</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),
    <span class="hljs-attr">id</span>: <span class="hljs-built_in">Math</span>.floor(<span class="hljs-built_in">Math</span>.random() * <span class="hljs-number">20</span>),
    <span class="hljs-attr">name</span>: <span class="hljs-string">&apos;LeBron James&apos;</span>,
  };

expect(user).toMatchSnapshot({
<span class="hljs-attr">createdAt</span>: expect.any(<span class="hljs-built_in">Date</span>),
<span class="hljs-attr">id</span>: expect.any(<span class="hljs-built_in">Number</span>),
});
});

<span class="hljs-comment">// Snapshot</span>
exports[<span class="hljs-string">`will check the matchers and pass 1`</span>] = <span class="hljs-string">`Object { &quot;createdAt&quot;: Any&lt;Date&gt;, &quot;id&quot;: Any&lt;Number&gt;, &quot;name&quot;: &quot;LeBron James&quot;, }`</span>;
</code></pre>

<p>Any given value that is not a matcher will be checked exactly and saved to the snapshot:</p>
<pre><code class="hljs css language-javascript">it(<span class="hljs-string">&apos;will check the values and pass&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> user = {
    <span class="hljs-attr">createdAt</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>(),
    <span class="hljs-attr">name</span>: <span class="hljs-string">&apos;Bond... James Bond&apos;</span>,
  };

expect(user).toMatchSnapshot({
<span class="hljs-attr">createdAt</span>: expect.any(<span class="hljs-built_in">Date</span>),
<span class="hljs-attr">name</span>: <span class="hljs-string">&apos;Bond... James Bond&apos;</span>,
});
});

<span class="hljs-comment">// Snapshot</span>
exports[<span class="hljs-string">`will check the values and pass 1`</span>] = <span class="hljs-string">`Object { &quot;createdAt&quot;: Any&lt;Date&gt;, &quot;name&quot;: &apos;Bond... James Bond&apos;, }`</span>;
</code></pre>

<h2><a class="anchor" aria-hidden="true" id="best-practices"></a><a href="#best-practices" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Best Practices</h2>
<p>Snapshots are a fantastic tool for identifying unexpected interface changes within your application &#x2013; whether that interface is an API response, UI, logs, or error messages. As with any testing strategy, there are some best-practices you should be aware of, and guidelines you should follow, in order to use them effectively.</p>
<h3><a class="anchor" aria-hidden="true" id="1-treat-snapshots-as-code"></a><a href="#1-treat-snapshots-as-code" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>1. Treat snapshots as code</h3>
<p>Commit snapshots and review them as part of your regular code review process. This means treating snapshots as you would any other type of test or code in your project.</p>
<p>Ensure that your snapshots are readable by keeping them focused, short, and by using tools that enforce these stylistic conventions.</p>
<p>As mentioned previously, Jest uses <a href="https://yarnpkg.com/en/package/pretty-format"><code>pretty-format</code></a> to make snapshots human-readable, but you may find it useful to introduce additional tools, like <a href="https://yarnpkg.com/en/package/eslint-plugin-jest"><code>eslint-plugin-jest</code></a> with its <a href="https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-large-snapshots.md"><code>no-large-snapshots</code></a> option, or <a href="https://yarnpkg.com/en/package/snapshot-diff"><code>snapshot-diff</code></a> with its component snapshot comparison feature, to promote committing short, focused assertions.</p>
<p>The goal is to make it easy to review snapshots in pull requests, and fight against the habit of regenerating snapshots when test suites fail instead of examining the root causes of their failure.</p>
<h3><a class="anchor" aria-hidden="true" id="2-tests-should-be-deterministic"></a><a href="#2-tests-should-be-deterministic" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>2. Tests should be deterministic</h3>
<p>Your tests should be deterministic. Running the same tests multiple times on a component that has not changed should produce the same results every time. You&apos;re responsible for making sure your generated snapshots do not include platform specific or other non-deterministic data.</p>
<p>For example, if you have a <a href="https://github.com/facebook/jest/blob/master/examples/snapshot/Clock.react.js">Clock</a> component that uses <code>Date.now()</code>, the snapshot generated from this component will be different every time the test case is run. In this case we can <a href="/docs/en/mock-functions">mock the Date.now() method</a> to return a consistent value every time the test is run:</p>
<pre><code class="hljs css language-js"><span class="hljs-built_in">Date</span>.now = jest.fn(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-number">1482363367071</span>);
</code></pre>
<p>Now, every time the snapshot test case runs, <code>Date.now()</code> will return <code>1482363367071</code> consistently. This will result in the same snapshot being generated for this component regardless of when the test is run.</p>
<h3><a class="anchor" aria-hidden="true" id="3-use-descriptive-snapshot-names"></a><a href="#3-use-descriptive-snapshot-names" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>3. Use descriptive snapshot names</h3>
<p>Always strive to use descriptive test and/or snapshot names for snapshots. The best names describe the expected snapshot content. This makes it easier for reviewers to verify the snapshots during review, and for anyone to know whether or not an outdated snapshot is the correct behavior before updating.</p>
<p>For example, compare:</p>
<pre><code class="hljs css language-js">exports[<span class="hljs-string">`&lt;UserName /&gt; should handle some test case`</span>] = <span class="hljs-string">`null`</span>;

exports[<span class="hljs-string">`&lt;UserName /&gt; should handle some other test case`</span>] = <span class="hljs-string">`&lt;div&gt; Alan Turing &lt;/div&gt;`</span>;
</code></pre>

<p>To:</p>
<pre><code class="hljs css language-js">exports[<span class="hljs-string">`&lt;UserName /&gt; should render null`</span>] = <span class="hljs-string">`null`</span>;

exports[<span class="hljs-string">`&lt;UserName /&gt; should render Alan Turing`</span>] = <span class="hljs-string">`&lt;div&gt; Alan Turing &lt;/div&gt;`</span>;
</code></pre>

<p>Since the later describes exactly what&apos;s expected in the output, it&apos;s more clear to see when it&apos;s wrong:</p>
<pre><code class="hljs css language-js">exports[<span class="hljs-string">`&lt;UserName /&gt; should render null`</span>] = <span class="hljs-string">`
&lt;div&gt;
  Alan Turing
&lt;/div&gt;
`</span>;

exports[<span class="hljs-string">`&lt;UserName /&gt; should render Alan Turing`</span>] = <span class="hljs-string">`null`</span>;
</code></pre>

<h2><a class="anchor" aria-hidden="true" id="frequently-asked-questions"></a><a href="#frequently-asked-questions" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Frequently Asked Questions</h2>
<h3><a class="anchor" aria-hidden="true" id="are-snapshots-written-automatically-on-continuous-integration-ci-systems"></a><a href="#are-snapshots-written-automatically-on-continuous-integration-ci-systems" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Are snapshots written automatically on Continuous Integration (CI) systems?</h3>
<p>No, as of Jest 20, snapshots in Jest are not automatically written when Jest is run in a CI system without explicitly passing <code>--updateSnapshot</code>. It is expected that all snapshots are part of the code that is run on CI and since new snapshots automatically pass, they should not pass a test run on a CI system. It is recommended to always commit all snapshots and to keep them in version control.</p>
<h3><a class="anchor" aria-hidden="true" id="should-snapshot-files-be-committed"></a><a href="#should-snapshot-files-be-committed" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Should snapshot files be committed?</h3>
<p>Yes, all snapshot files should be committed alongside the modules they are covering and their tests. They should be considered part of a test, similar to the value of any other assertion in Jest. In fact, snapshots represent the state of the source modules at any given point in time. In this way, when the source modules are modified, Jest can tell what changed from the previous version. It can also provide a lot of additional context during code review in which reviewers can study your changes better.</p>
<h3><a class="anchor" aria-hidden="true" id="does-snapshot-testing-only-work-with-react-components"></a><a href="#does-snapshot-testing-only-work-with-react-components" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Does snapshot testing only work with React components?</h3>
<p><a href="/docs/en/tutorial-react">React</a> and <a href="/docs/en/tutorial-react-native">React Native</a> components are a good use case for snapshot testing. However, snapshots can capture any serializable value and should be used anytime the goal is testing whether the output is correct. The Jest repository contains many examples of testing the output of Jest itself, the output of Jest&apos;s assertion library as well as log messages from various parts of the Jest codebase. See an example of <a href="https://github.com/facebook/jest/blob/master/e2e/__tests__/console.test.ts">snapshotting CLI output</a> in the Jest repo.</p>
<h3><a class="anchor" aria-hidden="true" id="whats-the-difference-between-snapshot-testing-and-visual-regression-testing"></a><a href="#whats-the-difference-between-snapshot-testing-and-visual-regression-testing" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>What&apos;s the difference between snapshot testing and visual regression testing?</h3>
<p>Snapshot testing and visual regression testing are two distinct ways of testing UIs, and they serve different purposes. Visual regression testing tools take screenshots of web pages and compare the resulting images pixel by pixel. With Snapshot testing values are serialized, stored within text files, and compared using a diff algorithm. There are different trade-offs to consider and we listed the reasons why snapshot testing was built in the <a href="https://jestjs.io/blog/2016/07/27/jest-14.html#why-snapshot-testing">Jest blog</a>.</p>
<h3><a class="anchor" aria-hidden="true" id="does-snapshot-testing-replace-unit-testing"></a><a href="#does-snapshot-testing-replace-unit-testing" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Does snapshot testing replace unit testing?</h3>
<p>Snapshot testing is only one of more than 20 assertions that ship with Jest. The aim of snapshot testing is not to replace existing unit tests, but to provide additional value and make testing painless. In some scenarios, snapshot testing can potentially remove the need for unit testing for a particular set of functionalities (e.g. React components), but they can work together as well.</p>
<h3><a class="anchor" aria-hidden="true" id="what-is-the-performance-of-snapshot-testing-regarding-speed-and-size-of-the-generated-files"></a><a href="#what-is-the-performance-of-snapshot-testing-regarding-speed-and-size-of-the-generated-files" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>What is the performance of snapshot testing regarding speed and size of the generated files?</h3>
<p>Jest has been rewritten with performance in mind, and snapshot testing is not an exception. Since snapshots are stored within text files, this way of testing is fast and reliable. Jest generates a new file for each test file that invokes the <code>toMatchSnapshot</code> matcher. The size of the snapshots is pretty small: For reference, the size of all snapshot files in the Jest codebase itself is less than 300 KB.</p>
<h3><a class="anchor" aria-hidden="true" id="how-do-i-resolve-conflicts-within-snapshot-files"></a><a href="#how-do-i-resolve-conflicts-within-snapshot-files" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>How do I resolve conflicts within snapshot files?</h3>
<p>Snapshot files must always represent the current state of the modules they are covering. Therefore, if you are merging two branches and encounter a conflict in the snapshot files, you can either resolve the conflict manually or update the snapshot file by running Jest and inspecting the result.</p>
<h3><a class="anchor" aria-hidden="true" id="is-it-possible-to-apply-test-driven-development-principles-with-snapshot-testing"></a><a href="#is-it-possible-to-apply-test-driven-development-principles-with-snapshot-testing" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Is it possible to apply test-driven development principles with snapshot testing?</h3>
<p>Although it is possible to write snapshot files manually, that is usually not approachable. Snapshots help to figure out whether the output of the modules covered by tests is changed, rather than giving guidance to design the code in the first place.</p>
<h3><a class="anchor" aria-hidden="true" id="does-code-coverage-work-with-snapshot-testing"></a><a href="#does-code-coverage-work-with-snapshot-testing" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Does code coverage work with snapshot testing?</h3>
<p>Yes, as well as with any other test.</p>
</span></div></article>
