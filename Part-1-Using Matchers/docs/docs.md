<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/UsingMatchers.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Using Matchers</h1></header><article><div><span><p>Jest uses &quot;matchers&quot; to let you test values in different ways. This document will introduce some commonly used matchers. For the full list, see the <a href="/docs/en/expect"><code>expect</code> API doc</a>.</p>
<h2><a class="anchor" aria-hidden="true" id="common-matchers"></a><a href="#common-matchers" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Common Matchers</h2>
<p>The simplest way to test a value is with exact equality.</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;two plus two is four&apos;</span>, () =&gt; {
  expect(<span class="hljs-number">2</span> + <span class="hljs-number">2</span>).toBe(<span class="hljs-number">4</span>);
});
</code></pre>
<p>In this code, <code>expect(2 + 2)</code> returns an &quot;expectation&quot; object. You typically won&apos;t do much with these expectation objects except call matchers on them. In this code, <code>.toBe(4)</code> is the matcher. When Jest runs, it tracks all the failing matchers so that it can print out nice error messages for you.</p>
<p><code>toBe</code> uses <code>Object.is</code> to test exact equality. If you want to check the value of an object, use <code>toEqual</code> instead:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;object assignment&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> data = {<span class="hljs-attr">one</span>: <span class="hljs-number">1</span>};
  data[<span class="hljs-string">&apos;two&apos;</span>] = <span class="hljs-number">2</span>;
  expect(data).toEqual({<span class="hljs-attr">one</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">two</span>: <span class="hljs-number">2</span>});
});
</code></pre>
<p><code>toEqual</code> recursively checks every field of an object or array.</p>
<p>You can also test for the opposite of a matcher:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;adding positive numbers is not zero&apos;</span>, () =&gt; {
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> a = <span class="hljs-number">1</span>; a &lt; <span class="hljs-number">10</span>; a++) {
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> b = <span class="hljs-number">1</span>; b &lt; <span class="hljs-number">10</span>; b++) {
      expect(a + b).not.toBe(<span class="hljs-number">0</span>);
    }
  }
});
</code></pre>
<h2><a class="anchor" aria-hidden="true" id="truthiness"></a><a href="#truthiness" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Truthiness</h2>
<p>In tests you sometimes need to distinguish between <code>undefined</code>, <code>null</code>, and <code>false</code>, but you sometimes do not want to treat these differently. Jest contains helpers that let you be explicit about what you want.</p>
<ul>
<li><code>toBeNull</code> matches only <code>null</code></li>
<li><code>toBeUndefined</code> matches only <code>undefined</code></li>
<li><code>toBeDefined</code> is the opposite of <code>toBeUndefined</code></li>
<li><code>toBeTruthy</code> matches anything that an <code>if</code> statement treats as true</li>
<li><code>toBeFalsy</code> matches anything that an <code>if</code> statement treats as false</li>
</ul>
<p>For example:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;null&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> n = <span class="hljs-literal">null</span>;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test(<span class="hljs-string">&apos;zero&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> z = <span class="hljs-number">0</span>;
expect(z).not.toBeNull();
expect(z).toBeDefined();
expect(z).not.toBeUndefined();
expect(z).not.toBeTruthy();
expect(z).toBeFalsy();
});
</code></pre>

<p>You should use the matcher that most precisely corresponds to what you want your code to be doing.</p>
<h2><a class="anchor" aria-hidden="true" id="numbers"></a><a href="#numbers" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Numbers</h2>
<p>Most ways of comparing numbers have matcher equivalents.</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;two plus two&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> value = <span class="hljs-number">2</span> + <span class="hljs-number">2</span>;
  expect(value).toBeGreaterThan(<span class="hljs-number">3</span>);
  expect(value).toBeGreaterThanOrEqual(<span class="hljs-number">3.5</span>);
  expect(value).toBeLessThan(<span class="hljs-number">5</span>);
  expect(value).toBeLessThanOrEqual(<span class="hljs-number">4.5</span>);

<span class="hljs-comment">// toBe and toEqual are equivalent for numbers</span>
expect(value).toBe(<span class="hljs-number">4</span>);
expect(value).toEqual(<span class="hljs-number">4</span>);
});
</code></pre>

<p>For floating point equality, use <code>toBeCloseTo</code> instead of <code>toEqual</code>, because you don&apos;t want a test to depend on a tiny rounding error.</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;adding floating point numbers&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> value = <span class="hljs-number">0.1</span> + <span class="hljs-number">0.2</span>;
  <span class="hljs-comment">//expect(value).toBe(0.3);           This won&apos;t work because of rounding error</span>
  expect(value).toBeCloseTo(<span class="hljs-number">0.3</span>); <span class="hljs-comment">// This works.</span>
});
</code></pre>
<h2><a class="anchor" aria-hidden="true" id="strings"></a><a href="#strings" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Strings</h2>
<p>You can check strings against regular expressions with <code>toMatch</code>:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;there is no I in team&apos;</span>, () =&gt; {
  expect(<span class="hljs-string">&apos;team&apos;</span>).not.toMatch(<span class="hljs-regexp">/I/</span>);
});

test(<span class="hljs-string">&apos;but there is a &quot;stop&quot; in Christoph&apos;</span>, () =&gt; {
expect(<span class="hljs-string">&apos;Christoph&apos;</span>).toMatch(<span class="hljs-regexp">/stop/</span>);
});
</code></pre>

<h2><a class="anchor" aria-hidden="true" id="arrays-and-iterables"></a><a href="#arrays-and-iterables" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Arrays and iterables</h2>
<p>You can check if an array or iterable contains a particular item using <code>toContain</code>:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> shoppingList = [
  <span class="hljs-string">&apos;diapers&apos;</span>,
  <span class="hljs-string">&apos;kleenex&apos;</span>,
  <span class="hljs-string">&apos;trash bags&apos;</span>,
  <span class="hljs-string">&apos;paper towels&apos;</span>,
  <span class="hljs-string">&apos;beer&apos;</span>,
];

test(<span class="hljs-string">&apos;the shopping list has beer on it&apos;</span>, () =&gt; {
expect(shoppingList).toContain(<span class="hljs-string">&apos;beer&apos;</span>);
expect(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Set</span>(shoppingList)).toContain(<span class="hljs-string">&apos;beer&apos;</span>);
});
</code></pre>

<h2><a class="anchor" aria-hidden="true" id="exceptions"></a><a href="#exceptions" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Exceptions</h2>
<p>If you want to test that a particular function throws an error when it&apos;s called, use <code>toThrow</code>.</p>
<pre><code class="hljs css language-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">compileAndroidCode</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&apos;you are using the wrong JDK&apos;</span>);
}

test(<span class="hljs-string">&apos;compiling android goes as expected&apos;</span>, () =&gt; {
expect(compileAndroidCode).toThrow();
expect(compileAndroidCode).toThrow(<span class="hljs-built_in">Error</span>);

<span class="hljs-comment">// You can also use the exact error message or a regexp</span>
expect(compileAndroidCode).toThrow(<span class="hljs-string">&apos;you are using the wrong JDK&apos;</span>);
expect(compileAndroidCode).toThrow(<span class="hljs-regexp">/JDK/</span>);
});
</code></pre>

<h2><a class="anchor" aria-hidden="true" id="and-more"></a><a href="#and-more" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>And More</h2>
<p>This is just a taste. For a complete list of matchers, check out the <a href="/docs/en/expect">reference docs</a>.</p>
<p>Once you&apos;ve learned about the matchers that are available, a good next step is to check out how Jest lets you <a href="/docs/en/asynchronous">test asynchronous code</a>.</p>
</span></div></article>
