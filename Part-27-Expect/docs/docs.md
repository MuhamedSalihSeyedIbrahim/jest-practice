<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/ExpectAPI.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Expect</h1></header><article><div><span><p>When you&apos;re writing tests, you often need to check that values meet certain conditions. <code>expect</code> gives you access to a number of &quot;matchers&quot; that let you validate different things.</p>
<p>For additional Jest matchers maintained by the Jest Community check out <a href="https://github.com/jest-community/jest-extended"><code>jest-extended</code></a>.</p>
<h2><a class="anchor" aria-hidden="true" id="methods"></a><a href="#methods" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Methods</h2>
<ul>
<li><a href="#expectvalue"><code>expect(value)</code></a></li>
<li><a href="#expectextendmatchers"><code>expect.extend(matchers)</code></a></li>
<li><a href="#expectanything"><code>expect.anything()</code></a></li>
<li><a href="#expectanyconstructor"><code>expect.any(constructor)</code></a></li>
<li><a href="#expectarraycontainingarray"><code>expect.arrayContaining(array)</code></a></li>
<li><a href="#expectassertionsnumber"><code>expect.assertions(number)</code></a></li>
<li><a href="#expecthasassertions"><code>expect.hasAssertions()</code></a></li>
<li><a href="#expectnotarraycontainingarray"><code>expect.not.arrayContaining(array)</code></a></li>
<li><a href="#expectnotobjectcontainingobject"><code>expect.not.objectContaining(object)</code></a></li>
<li><a href="#expectnotstringcontainingstring"><code>expect.not.stringContaining(string)</code></a></li>
<li><a href="#expectnotstringmatchingstring--regexp"><code>expect.not.stringMatching(string | regexp)</code></a></li>
<li><a href="#expectobjectcontainingobject"><code>expect.objectContaining(object)</code></a></li>
<li><a href="#expectstringcontainingstring"><code>expect.stringContaining(string)</code></a></li>
<li><a href="#expectstringmatchingstring--regexp"><code>expect.stringMatching(string | regexp)</code></a></li>
<li><a href="#expectaddsnapshotserializerserializer"><code>expect.addSnapshotSerializer(serializer)</code></a></li>
<li><a href="#not"><code>.not</code></a></li>
<li><a href="#resolves"><code>.resolves</code></a></li>
<li><a href="#rejects"><code>.rejects</code></a></li>
<li><a href="#tobevalue"><code>.toBe(value)</code></a></li>
<li><a href="#tohavebeencalled"><code>.toHaveBeenCalled()</code></a></li>
<li><a href="#tohavebeencalledtimesnumber"><code>.toHaveBeenCalledTimes(number)</code></a></li>
<li><a href="#tohavebeencalledwitharg1-arg2-"><code>.toHaveBeenCalledWith(arg1, arg2, ...)</code></a></li>
<li><a href="#tohavebeenlastcalledwitharg1-arg2-"><code>.toHaveBeenLastCalledWith(arg1, arg2, ...)</code></a></li>
<li><a href="#tohavebeennthcalledwithnthcall-arg1-arg2-"><code>.toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)</code></a></li>
<li><a href="#tohavereturned"><code>.toHaveReturned()</code></a></li>
<li><a href="#tohavereturnedtimesnumber"><code>.toHaveReturnedTimes(number)</code></a></li>
<li><a href="#tohavereturnedwithvalue"><code>.toHaveReturnedWith(value)</code></a></li>
<li><a href="#tohavelastreturnedwithvalue"><code>.toHaveLastReturnedWith(value)</code></a></li>
<li><a href="#tohaventhreturnedwithnthcall-value"><code>.toHaveNthReturnedWith(nthCall, value)</code></a></li>
<li><a href="#tohavelengthnumber"><code>.toHaveLength(number)</code></a></li>
<li><a href="#tohavepropertykeypath-value"><code>.toHaveProperty(keyPath, value?)</code></a></li>
<li><a href="#tobeclosetonumber-numdigits"><code>.toBeCloseTo(number, numDigits?)</code></a></li>
<li><a href="#tobedefined"><code>.toBeDefined()</code></a></li>
<li><a href="#tobefalsy"><code>.toBeFalsy()</code></a></li>
<li><a href="#tobegreaterthannumber--bigint"><code>.toBeGreaterThan(number | bigint)</code></a></li>
<li><a href="#tobegreaterthanorequalnumber--bigint"><code>.toBeGreaterThanOrEqual(number | bigint)</code></a></li>
<li><a href="#tobelessthannumber--bigint"><code>.toBeLessThan(number | bigint)</code></a></li>
<li><a href="#tobelessthanorequalnumber--bigint"><code>.toBeLessThanOrEqual(number | bigint)</code></a></li>
<li><a href="#tobeinstanceofclass"><code>.toBeInstanceOf(Class)</code></a></li>
<li><a href="#tobenull"><code>.toBeNull()</code></a></li>
<li><a href="#tobetruthy"><code>.toBeTruthy()</code></a></li>
<li><a href="#tobeundefined"><code>.toBeUndefined()</code></a></li>
<li><a href="#tobenan"><code>.toBeNaN()</code></a></li>
<li><a href="#tocontainitem"><code>.toContain(item)</code></a></li>
<li><a href="#tocontainequalitem"><code>.toContainEqual(item)</code></a></li>
<li><a href="#toequalvalue"><code>.toEqual(value)</code></a></li>
<li><a href="#tomatchregexporstring"><code>.toMatch(regexpOrString)</code></a></li>
<li><a href="#tomatchobjectobject"><code>.toMatchObject(object)</code></a></li>
<li><a href="#tomatchsnapshotpropertymatchers-hint"><code>.toMatchSnapshot(propertyMatchers?, hint?)</code></a></li>
<li><a href="#tomatchinlinesnapshotpropertymatchers-inlinesnapshot"><code>.toMatchInlineSnapshot(propertyMatchers?, inlineSnapshot)</code></a></li>
<li><a href="#tostrictequalvalue"><code>.toStrictEqual(value)</code></a></li>
<li><a href="#tothrowerror"><code>.toThrow(error?)</code></a></li>
<li><a href="#tothrowerrormatchingsnapshothint"><code>.toThrowErrorMatchingSnapshot(hint?)</code></a></li>
<li><a href="#tothrowerrormatchinginlinesnapshotinlinesnapshot"><code>.toThrowErrorMatchingInlineSnapshot(inlineSnapshot)</code></a></li>
</ul>
<hr>
<h2><a class="anchor" aria-hidden="true" id="reference"></a><a href="#reference" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Reference</h2>
<h3><a class="anchor" aria-hidden="true" id="expectvalue"></a><a href="#expectvalue" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>expect(value)</code></h3>
<p>The <code>expect</code> function is used every time you want to test a value. You will rarely call <code>expect</code> by itself. Instead, you will use <code>expect</code> along with a &quot;matcher&quot; function to assert something about a value.</p>
<p>It&apos;s easier to understand this with an example. Let&apos;s say you have a method <code>bestLaCroixFlavor()</code> which is supposed to return the string <code>&apos;grapefruit&apos;</code>. Here&apos;s how you would test that:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;the best flavor is grapefruit&apos;</span>, () =&gt; {
  expect(bestLaCroixFlavor()).toBe(<span class="hljs-string">&apos;grapefruit&apos;</span>);
});
</code></pre>
<p>In this case, <code>toBe</code> is the matcher function. There are a lot of different matcher functions, documented below, to help you test different things.</p>
<p>The argument to <code>expect</code> should be the value that your code produces, and any argument to the matcher should be the correct value. If you mix them up, your tests will still work, but the error messages on failing tests will look strange.</p>
<h3><a class="anchor" aria-hidden="true" id="expectextendmatchers"></a><a href="#expectextendmatchers" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>expect.extend(matchers)</code></h3>
<p>You can use <code>expect.extend</code> to add your own matchers to Jest. For example, let&apos;s say that you&apos;re testing a number utility library and you&apos;re frequently asserting that numbers appear within particular ranges of other numbers. You could abstract that into a <code>toBeWithinRange</code> matcher:</p>
<pre><code class="hljs css language-js">expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    <span class="hljs-keyword">const</span> pass = received &gt;= floor &amp;&amp; received &lt;= ceiling;
    <span class="hljs-keyword">if</span> (pass) {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">message</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span>
          <span class="hljs-string">`expected <span class="hljs-subst">${received}</span> not to be within range <span class="hljs-subst">${floor}</span> - <span class="hljs-subst">${ceiling}</span>`</span>,
        <span class="hljs-attr">pass</span>: <span class="hljs-literal">true</span>,
      };
    } <span class="hljs-keyword">else</span> {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">message</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span>
          <span class="hljs-string">`expected <span class="hljs-subst">${received}</span> to be within range <span class="hljs-subst">${floor}</span> - <span class="hljs-subst">${ceiling}</span>`</span>,
        <span class="hljs-attr">pass</span>: <span class="hljs-literal">false</span>,
      };
    }
  },
});

test(<span class="hljs-string">&apos;numeric ranges&apos;</span>, () =&gt; {
expect(<span class="hljs-number">100</span>).toBeWithinRange(<span class="hljs-number">90</span>, <span class="hljs-number">110</span>);
expect(<span class="hljs-number">101</span>).not.toBeWithinRange(<span class="hljs-number">0</span>, <span class="hljs-number">100</span>);
expect({<span class="hljs-attr">apples</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">bananas</span>: <span class="hljs-number">3</span>}).toEqual({
<span class="hljs-attr">apples</span>: expect.toBeWithinRange(<span class="hljs-number">1</span>, <span class="hljs-number">10</span>),
<span class="hljs-attr">bananas</span>: expect.not.toBeWithinRange(<span class="hljs-number">11</span>, <span class="hljs-number">20</span>),
});
});
</code></pre>

<p><em>Note</em>: In TypeScript, when using <code>@types/jest</code> for example, you can declare the new <code>toBeWithinRange</code> matcher like this:</p>
<pre><code class="hljs css language-ts"><span class="hljs-keyword">declare</span> global {
  <span class="hljs-keyword">namespace</span> jest {
    <span class="hljs-keyword">interface</span> Matchers&lt;R&gt; {
      toBeWithinRange(a: <span class="hljs-built_in">number</span>, b: <span class="hljs-built_in">number</span>): R;
    }
  }
}
</code></pre>
<h4><a class="anchor" aria-hidden="true" id="async-matchers"></a><a href="#async-matchers" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Async Matchers</h4>
<p><code>expect.extend</code> also supports async matchers. Async matchers return a Promise so you will need to await the returned value. Let&apos;s use an example matcher to illustrate the usage of them. We are going to implement a matcher called <code>toBeDivisibleByExternalValue</code>, where the divisible number is going to be pulled from an external source.</p>
<pre><code class="hljs css language-js">expect.extend({
  <span class="hljs-keyword">async</span> toBeDivisibleByExternalValue(received) {
    <span class="hljs-keyword">const</span> externalValue = <span class="hljs-keyword">await</span> getExternalValueFromRemoteSource();
    <span class="hljs-keyword">const</span> pass = received % externalValue == <span class="hljs-number">0</span>;
    <span class="hljs-keyword">if</span> (pass) {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">message</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span>
          <span class="hljs-string">`expected <span class="hljs-subst">${received}</span> not to be divisible by <span class="hljs-subst">${externalValue}</span>`</span>,
        <span class="hljs-attr">pass</span>: <span class="hljs-literal">true</span>,
      };
    } <span class="hljs-keyword">else</span> {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">message</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span>
          <span class="hljs-string">`expected <span class="hljs-subst">${received}</span> to be divisible by <span class="hljs-subst">${externalValue}</span>`</span>,
        <span class="hljs-attr">pass</span>: <span class="hljs-literal">false</span>,
      };
    }
  },
});

test(<span class="hljs-string">&apos;is divisible by external value&apos;</span>, <span class="hljs-keyword">async</span> () =&gt; {
<span class="hljs-keyword">await</span> expect(<span class="hljs-number">100</span>).toBeDivisibleByExternalValue();
<span class="hljs-keyword">await</span> expect(<span class="hljs-number">101</span>).not.toBeDivisibleByExternalValue();
});
</code></pre>

<h4><a class="anchor" aria-hidden="true" id="custom-matchers-api"></a><a href="#custom-matchers-api" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Custom Matchers API</h4>
<p>Matchers should return an object (or a Promise of an object) with two keys. <code>pass</code> indicates whether there was a match or not, and <code>message</code> provides a function with no arguments that returns an error message in case of failure. Thus, when <code>pass</code> is false, <code>message</code> should return the error message for when <code>expect(x).yourMatcher()</code> fails. And when <code>pass</code> is true, <code>message</code> should return the error message for when <code>expect(x).not.yourMatcher()</code> fails.</p>
<p>Matchers are called with the argument passed to <code>expect(x)</code> followed by the arguments passed to <code>.yourMatcher(y, z)</code>:</p>
<pre><code class="hljs css language-js">expect.extend({
  yourMatcher(x, y, z) {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">pass</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">message</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-string">&apos;&apos;</span>,
    };
  },
});
</code></pre>
<p>These helper functions and properties can be found on <code>this</code> inside a custom matcher:</p>
<h4><a class="anchor" aria-hidden="true" id="thisisnot"></a><a href="#thisisnot" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>this.isNot</code></h4>
<p>A boolean to let you know this matcher was called with the negated <code>.not</code> modifier allowing you to display a clear and correct matcher hint (see example code).</p>
<h4><a class="anchor" aria-hidden="true" id="thispromise"></a><a href="#thispromise" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>this.promise</code></h4>
<p>A string allowing you to display a clear and correct matcher hint:</p>
<ul>
<li><code>&apos;rejects&apos;</code> if matcher was called with the promise <code>.rejects</code> modifier</li>
<li><code>&apos;resolves&apos;</code> if matcher was called with the promise <code>.resolves</code> modifier</li>
<li><code>&apos;&apos;</code> if matcher was not called with a promise modifier</li>
</ul>
<h4><a class="anchor" aria-hidden="true" id="thisequalsa-b"></a><a href="#thisequalsa-b" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>this.equals(a, b)</code></h4>
<p>This is a deep-equality function that will return <code>true</code> if two objects have the same values (recursively).</p>
<h4><a class="anchor" aria-hidden="true" id="thisexpand"></a><a href="#thisexpand" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>this.expand</code></h4>
<p>A boolean to let you know this matcher was called with an <code>expand</code> option. When Jest is called with the <code>--expand</code> flag, <code>this.expand</code> can be used to determine if Jest is expected to show full diffs and errors.</p>
<h4><a class="anchor" aria-hidden="true" id="thisutils"></a><a href="#thisutils" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>this.utils</code></h4>
<p>There are a number of helpful tools exposed on <code>this.utils</code> primarily consisting of the exports from <a href="https://github.com/facebook/jest/tree/master/packages/jest-matcher-utils"><code>jest-matcher-utils</code></a>.</p>
<p>The most useful ones are <code>matcherHint</code>, <code>printExpected</code> and <code>printReceived</code> to format the error messages nicely. For example, take a look at the implementation for the <code>toBe</code> matcher:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> diff = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;jest-diff&apos;</span>);
expect.extend({
  toBe(received, expected) {
    <span class="hljs-keyword">const</span> options = {
      <span class="hljs-attr">comment</span>: <span class="hljs-string">&apos;Object.is equality&apos;</span>,
      <span class="hljs-attr">isNot</span>: <span class="hljs-keyword">this</span>.isNot,
      <span class="hljs-attr">promise</span>: <span class="hljs-keyword">this</span>.promise,
    };

    <span class="hljs-keyword">const</span> pass = <span class="hljs-built_in">Object</span>.is(received, expected);

    <span class="hljs-keyword">const</span> message = pass
      ? <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span>
          <span class="hljs-keyword">this</span>.utils.matcherHint(<span class="hljs-string">&apos;toBe&apos;</span>, <span class="hljs-literal">undefined</span>, <span class="hljs-literal">undefined</span>, options) +
          <span class="hljs-string">&apos;\n\n&apos;</span> +
          <span class="hljs-string">`Expected: not <span class="hljs-subst">${<span class="hljs-keyword">this</span>.utils.printExpected(expected)}</span>\n`</span> +
          <span class="hljs-string">`Received: <span class="hljs-subst">${<span class="hljs-keyword">this</span>.utils.printReceived(received)}</span>`</span>
      : <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
          <span class="hljs-keyword">const</span> diffString = diff(expected, received, {
            <span class="hljs-attr">expand</span>: <span class="hljs-keyword">this</span>.expand,
          });
          <span class="hljs-keyword">return</span> (
            <span class="hljs-keyword">this</span>.utils.matcherHint(<span class="hljs-string">&apos;toBe&apos;</span>, <span class="hljs-literal">undefined</span>, <span class="hljs-literal">undefined</span>, options) +
            <span class="hljs-string">&apos;\n\n&apos;</span> +
            (diffString &amp;&amp; diffString.includes(<span class="hljs-string">&apos;- Expect&apos;</span>)
              ? <span class="hljs-string">`Difference:\n\n<span class="hljs-subst">${diffString}</span>`</span>
              : <span class="hljs-string">`Expected: <span class="hljs-subst">${<span class="hljs-keyword">this</span>.utils.printExpected(expected)}</span>\n`</span> +
                <span class="hljs-string">`Received: <span class="hljs-subst">${<span class="hljs-keyword">this</span>.utils.printReceived(received)}</span>`</span>)
          );
        };

    <span class="hljs-keyword">return</span> {<span class="hljs-attr">actual</span>: received, message, pass};

},
});
</code></pre>

<p>This will print something like this:</p>
<pre><code class="hljs css language-bash">  expect(received).toBe(expected)

    Expected value to be (using Object.is):
      <span class="hljs-string">&quot;banana&quot;</span>
    Received:
      <span class="hljs-string">&quot;apple&quot;</span>

</code></pre>

<p>When an assertion fails, the error message should give as much signal as necessary to the user so they can resolve their issue quickly. You should craft a precise failure message to make sure users of your custom assertions have a good developer experience.</p>
<h4><a class="anchor" aria-hidden="true" id="custom-snapshot-matchers"></a><a href="#custom-snapshot-matchers" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Custom snapshot matchers</h4>
<p>To use snapshot testing inside of your custom matcher you can import <code>jest-snapshot</code> and use it from within your matcher.</p>
<p>Here&apos;s a snapshot matcher that trims a string to store for a given length, <code>.toMatchTrimmedSnapshot(length)</code>:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> {toMatchSnapshot} = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;jest-snapshot&apos;</span>);

expect.extend({
toMatchTrimmedSnapshot(received, length) {
<span class="hljs-keyword">return</span> toMatchSnapshot.call(
<span class="hljs-keyword">this</span>,
received.substring(<span class="hljs-number">0</span>, length),
<span class="hljs-string">&apos;toMatchTrimmedSnapshot&apos;</span>,
);
},
});

it(<span class="hljs-string">&apos;stores only 10 characters&apos;</span>, () =&gt; {
expect(<span class="hljs-string">&apos;extra long string oh my gerd&apos;</span>).toMatchTrimmedSnapshot(<span class="hljs-number">10</span>);
});

<span class="hljs-comment">/\*
Stored snapshot will look like:

exports[`stores only 10 characters: toMatchTrimmedSnapshot 1`] = `&quot;extra long&quot;`;
\*/</span>
</code></pre>

<p>It&apos;s also possible to create custom matchers for inline snapshots, the snapshots will be correctly added to the custom matchers. However, inline snapshot will always try to append to the first argument or the second when the first argument is the property matcher, so it&apos;s not possible to accept custom arguments in the custom matchers.</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> {toMatchInlineSnapshot} = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;jest-snapshot&apos;</span>);

expect.extend({
toMatchTrimmedInlineSnapshot(received) {
<span class="hljs-keyword">return</span> toMatchInlineSnapshot.call(<span class="hljs-keyword">this</span>, received.substring(<span class="hljs-number">0</span>, <span class="hljs-number">10</span>));
},
});

it(<span class="hljs-string">&apos;stores only 10 characters&apos;</span>, () =&gt; {
expect(<span class="hljs-string">&apos;extra long string oh my gerd&apos;</span>).toMatchTrimmedInlineSnapshot();
<span class="hljs-comment">/_
The snapshot will be added inline like
expect(&apos;extra long string oh my gerd&apos;).toMatchTrimmedInlineSnapshot(
`&quot;extra long&quot;`
);
_/</span>
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="expectanything"></a><a href="#expectanything" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>expect.anything()</code></h3>
<p><code>expect.anything()</code> matches anything but <code>null</code> or <code>undefined</code>. You can use it inside <code>toEqual</code> or <code>toBeCalledWith</code> instead of a literal value. For example, if you want to check that a mock function is called with a non-null argument:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;map calls its argument with a non-null argument&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> mock = jest.fn();
  [<span class="hljs-number">1</span>].map(<span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> mock(x));
  expect(mock).toBeCalledWith(expect.anything());
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="expectanyconstructor"></a><a href="#expectanyconstructor" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>expect.any(constructor)</code></h3>
<p><code>expect.any(constructor)</code> matches anything that was created with the given constructor. You can use it inside <code>toEqual</code> or <code>toBeCalledWith</code> instead of a literal value. For example, if you want to check that a mock function is called with a number:</p>
<pre><code class="hljs css language-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">randocall</span>(<span class="hljs-params">fn</span>) </span>{
  <span class="hljs-keyword">return</span> fn(<span class="hljs-built_in">Math</span>.floor(<span class="hljs-built_in">Math</span>.random() * <span class="hljs-number">6</span> + <span class="hljs-number">1</span>));
}

test(<span class="hljs-string">&apos;randocall calls its callback with a number&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> mock = jest.fn();
randocall(mock);
expect(mock).toBeCalledWith(expect.any(<span class="hljs-built_in">Number</span>));
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="expectarraycontainingarray"></a><a href="#expectarraycontainingarray" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>expect.arrayContaining(array)</code></h3>
<p><code>expect.arrayContaining(array)</code> matches a received array which contains all of the elements in the expected array. That is, the expected array is a <strong>subset</strong> of the received array. Therefore, it matches a received array which contains elements that are <strong>not</strong> in the expected array.</p>
<p>You can use it instead of a literal value:</p>
<ul>
<li>in <code>toEqual</code> or <code>toBeCalledWith</code></li>
<li>to match a property in <code>objectContaining</code> or <code>toMatchObject</code></li>
</ul>
<pre><code class="hljs css language-js">describe(<span class="hljs-string">&apos;arrayContaining&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> expected = [<span class="hljs-string">&apos;Alice&apos;</span>, <span class="hljs-string">&apos;Bob&apos;</span>];
  it(<span class="hljs-string">&apos;matches even if received contains additional elements&apos;</span>, () =&gt; {
    expect([<span class="hljs-string">&apos;Alice&apos;</span>, <span class="hljs-string">&apos;Bob&apos;</span>, <span class="hljs-string">&apos;Eve&apos;</span>]).toEqual(expect.arrayContaining(expected));
  });
  it(<span class="hljs-string">&apos;does not match if received does not contain expected elements&apos;</span>, () =&gt; {
    expect([<span class="hljs-string">&apos;Bob&apos;</span>, <span class="hljs-string">&apos;Eve&apos;</span>]).not.toEqual(expect.arrayContaining(expected));
  });
});
</code></pre>
<pre><code class="hljs css language-js">describe(<span class="hljs-string">&apos;Beware of a misunderstanding! A sequence of dice rolls&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> expected = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">4</span>, <span class="hljs-number">5</span>, <span class="hljs-number">6</span>];
  it(<span class="hljs-string">&apos;matches even with an unexpected number 7&apos;</span>, () =&gt; {
    expect([<span class="hljs-number">4</span>, <span class="hljs-number">1</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>, <span class="hljs-number">2</span>, <span class="hljs-number">5</span>, <span class="hljs-number">4</span>, <span class="hljs-number">6</span>]).toEqual(
      expect.arrayContaining(expected),
    );
  });
  it(<span class="hljs-string">&apos;does not match without an expected number 2&apos;</span>, () =&gt; {
    expect([<span class="hljs-number">4</span>, <span class="hljs-number">1</span>, <span class="hljs-number">6</span>, <span class="hljs-number">7</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>, <span class="hljs-number">7</span>, <span class="hljs-number">5</span>, <span class="hljs-number">4</span>, <span class="hljs-number">6</span>]).not.toEqual(
      expect.arrayContaining(expected),
    );
  });
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="expectassertionsnumber"></a><a href="#expectassertionsnumber" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>expect.assertions(number)</code></h3>
<p><code>expect.assertions(number)</code> verifies that a certain number of assertions are called during a test. This is often useful when testing asynchronous code, in order to make sure that assertions in a callback actually got called.</p>
<p>For example, let&apos;s say that we have a function <code>doAsync</code> that receives two callbacks <code>callback1</code> and <code>callback2</code>, it will asynchronously call both of them in an unknown order. We can test this with:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;doAsync calls both callbacks&apos;</span>, () =&gt; {
  expect.assertions(<span class="hljs-number">2</span>);
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">callback1</span>(<span class="hljs-params">data</span>) </span>{
    expect(data).toBeTruthy();
  }
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">callback2</span>(<span class="hljs-params">data</span>) </span>{
    expect(data).toBeTruthy();
  }

doAsync(callback1, callback2);
});
</code></pre>

<p>The <code>expect.assertions(2)</code> call ensures that both callbacks actually get called.</p>
<h3><a class="anchor" aria-hidden="true" id="expecthasassertions"></a><a href="#expecthasassertions" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>expect.hasAssertions()</code></h3>
<p><code>expect.hasAssertions()</code> verifies that at least one assertion is called during a test. This is often useful when testing asynchronous code, in order to make sure that assertions in a callback actually got called.</p>
<p>For example, let&apos;s say that we have a few functions that all deal with state. <code>prepareState</code> calls a callback with a state object, <code>validateState</code> runs on that state object, and <code>waitOnState</code> returns a promise that waits until all <code>prepareState</code> callbacks complete. We can test this with:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;prepareState prepares a valid state&apos;</span>, () =&gt; {
  expect.hasAssertions();
  prepareState(<span class="hljs-function"><span class="hljs-params">state</span> =&gt;</span> {
    expect(validateState(state)).toBeTruthy();
  });
  <span class="hljs-keyword">return</span> waitOnState();
});
</code></pre>
<p>The <code>expect.hasAssertions()</code> call ensures that the <code>prepareState</code> callback actually gets called.</p>
<h3><a class="anchor" aria-hidden="true" id="expectnotarraycontainingarray"></a><a href="#expectnotarraycontainingarray" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>expect.not.arrayContaining(array)</code></h3>
<p><code>expect.not.arrayContaining(array)</code> matches a received array which does not contain all of the elements in the expected array. That is, the expected array <strong>is not a subset</strong> of the received array.</p>
<p>It is the inverse of <code>expect.arrayContaining</code>.</p>
<pre><code class="hljs css language-js">describe(<span class="hljs-string">&apos;not.arrayContaining&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> expected = [<span class="hljs-string">&apos;Samantha&apos;</span>];

it(<span class="hljs-string">&apos;matches if the actual array does not contain the expected elements&apos;</span>, () =&gt; {
expect([<span class="hljs-string">&apos;Alice&apos;</span>, <span class="hljs-string">&apos;Bob&apos;</span>, <span class="hljs-string">&apos;Eve&apos;</span>]).toEqual(
expect.not.arrayContaining(expected),
);
});
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="expectnotobjectcontainingobject"></a><a href="#expectnotobjectcontainingobject" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>expect.not.objectContaining(object)</code></h3>
<p><code>expect.not.objectContaining(object)</code> matches any received object that does not recursively match the expected properties. That is, the expected object <strong>is not a subset</strong> of the received object. Therefore, it matches a received object which contains properties that are <strong>not</strong> in the expected object.</p>
<p>It is the inverse of <code>expect.objectContaining</code>.</p>
<pre><code class="hljs css language-js">describe(<span class="hljs-string">&apos;not.objectContaining&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> expected = {<span class="hljs-attr">foo</span>: <span class="hljs-string">&apos;bar&apos;</span>};

it(<span class="hljs-string">&apos;matches if the actual object does not contain expected key: value pairs&apos;</span>, () =&gt; {
expect({<span class="hljs-attr">bar</span>: <span class="hljs-string">&apos;baz&apos;</span>}).toEqual(expect.not.objectContaining(expected));
});
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="expectnotstringcontainingstring"></a><a href="#expectnotstringcontainingstring" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>expect.not.stringContaining(string)</code></h3>
<p><code>expect.not.stringContaining(string)</code> matches the received value if it is not a string or if it is a string that does not contain the exact expected string.</p>
<p>It is the inverse of <code>expect.stringContaining</code>.</p>
<pre><code class="hljs css language-js">describe(<span class="hljs-string">&apos;not.stringContaining&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> expected = <span class="hljs-string">&apos;Hello world!&apos;</span>;

it(<span class="hljs-string">&apos;matches if the received value does not contain the expected substring&apos;</span>, () =&gt; {
expect(<span class="hljs-string">&apos;How are you?&apos;</span>).toEqual(expect.not.stringContaining(expected));
});
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="expectnotstringmatchingstring--regexp"></a><a href="#expectnotstringmatchingstring--regexp" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>expect.not.stringMatching(string | regexp)</code></h3>
<p><code>expect.not.stringMatching(string | regexp)</code> matches the received value if it is not a string or if it is a string that does not match the expected string or regular expression.</p>
<p>It is the inverse of <code>expect.stringMatching</code>.</p>
<pre><code class="hljs css language-js">describe(<span class="hljs-string">&apos;not.stringMatching&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> expected = <span class="hljs-regexp">/Hello world!/</span>;

it(<span class="hljs-string">&apos;matches if the received value does not match the expected regex&apos;</span>, () =&gt; {
expect(<span class="hljs-string">&apos;How are you?&apos;</span>).toEqual(expect.not.stringMatching(expected));
});
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="expectobjectcontainingobject"></a><a href="#expectobjectcontainingobject" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>expect.objectContaining(object)</code></h3>
<p><code>expect.objectContaining(object)</code> matches any received object that recursively matches the expected properties. That is, the expected object is a <strong>subset</strong> of the received object. Therefore, it matches a received object which contains properties that <strong>are present</strong> in the expected object.</p>
<p>Instead of literal property values in the expected object, you can use matchers, <code>expect.anything()</code>, and so on.</p>
<p>For example, let&apos;s say that we expect an <code>onPress</code> function to be called with an <code>Event</code> object, and all we need to verify is that the event has <code>event.x</code> and <code>event.y</code> properties. We can do that with:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;onPress gets called with the right thing&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> onPress = jest.fn();
  simulatePresses(onPress);
  expect(onPress).toBeCalledWith(
    expect.objectContaining({
      <span class="hljs-attr">x</span>: expect.any(<span class="hljs-built_in">Number</span>),
      <span class="hljs-attr">y</span>: expect.any(<span class="hljs-built_in">Number</span>),
    }),
  );
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="expectstringcontainingstring"></a><a href="#expectstringcontainingstring" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>expect.stringContaining(string)</code></h3>
<p><code>expect.stringContaining(string)</code> matches the received value if it is a string that contains the exact expected string.</p>
<h3><a class="anchor" aria-hidden="true" id="expectstringmatchingstring--regexp"></a><a href="#expectstringmatchingstring--regexp" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>expect.stringMatching(string | regexp)</code></h3>
<p><code>expect.stringMatching(string | regexp)</code> matches the received value if it is a string that matches the expected string or regular expression.</p>
<p>You can use it instead of a literal value:</p>
<ul>
<li>in <code>toEqual</code> or <code>toBeCalledWith</code></li>
<li>to match an element in <code>arrayContaining</code></li>
<li>to match a property in <code>objectContaining</code> or <code>toMatchObject</code></li>
</ul>
<p>This example also shows how you can nest multiple asymmetric matchers, with <code>expect.stringMatching</code> inside the <code>expect.arrayContaining</code>.</p>
<pre><code class="hljs css language-js">describe(<span class="hljs-string">&apos;stringMatching in arrayContaining&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> expected = [
    expect.stringMatching(<span class="hljs-regexp">/^Alic/</span>),
    expect.stringMatching(<span class="hljs-regexp">/^[BR]ob/</span>),
  ];
  it(<span class="hljs-string">&apos;matches even if received contains additional elements&apos;</span>, () =&gt; {
    expect([<span class="hljs-string">&apos;Alicia&apos;</span>, <span class="hljs-string">&apos;Roberto&apos;</span>, <span class="hljs-string">&apos;Evelina&apos;</span>]).toEqual(
      expect.arrayContaining(expected),
    );
  });
  it(<span class="hljs-string">&apos;does not match if received does not contain expected elements&apos;</span>, () =&gt; {
    expect([<span class="hljs-string">&apos;Roberto&apos;</span>, <span class="hljs-string">&apos;Evelina&apos;</span>]).not.toEqual(
      expect.arrayContaining(expected),
    );
  });
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="expectaddsnapshotserializerserializer"></a><a href="#expectaddsnapshotserializerserializer" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>expect.addSnapshotSerializer(serializer)</code></h3>
<p>You can call <code>expect.addSnapshotSerializer</code> to add a module that formats application-specific data structures.</p>
<p>For an individual test file, an added module precedes any modules from <code>snapshotSerializers</code> configuration, which precede the default snapshot serializers for built-in JavaScript types and for React elements. The last module added is the first module tested.</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">import</span> serializer <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;my-serializer-module&apos;</span>;
expect.addSnapshotSerializer(serializer);

<span class="hljs-comment">// affects expect(value).toMatchSnapshot() assertions in the test file</span>
</code></pre>

<p>If you add a snapshot serializer in individual test files instead of to adding it to <code>snapshotSerializers</code> configuration:</p>
<ul>
<li>You make the dependency explicit instead of implicit.</li>
<li>You avoid limits to configuration that might cause you to eject from <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a>.</li>
</ul>
<p>See <a href="/docs/en/configuration#snapshotserializers-arraystring">configuring Jest</a> for more information.</p>
<h3><a class="anchor" aria-hidden="true" id="not"></a><a href="#not" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.not</code></h3>
<p>If you know how to test something, <code>.not</code> lets you test its opposite. For example, this code tests that the best La Croix flavor is not coconut:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;the best flavor is not coconut&apos;</span>, () =&gt; {
  expect(bestLaCroixFlavor()).not.toBe(<span class="hljs-string">&apos;coconut&apos;</span>);
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="resolves"></a><a href="#resolves" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.resolves</code></h3>
<p>Use <code>resolves</code> to unwrap the value of a fulfilled promise so any other matcher can be chained. If the promise is rejected the assertion fails.</p>
<p>For example, this code tests that the promise resolves and that the resulting value is <code>&apos;lemon&apos;</code>:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;resolves to lemon&apos;</span>, () =&gt; {
  <span class="hljs-comment">// make sure to add a return statement</span>
  <span class="hljs-keyword">return</span> expect(<span class="hljs-built_in">Promise</span>.resolve(<span class="hljs-string">&apos;lemon&apos;</span>)).resolves.toBe(<span class="hljs-string">&apos;lemon&apos;</span>);
});
</code></pre>
<p>Note that, since you are still testing promises, the test is still asynchronous. Hence, you will need to <a href="/docs/en/asynchronous#promises">tell Jest to wait</a> by returning the unwrapped assertion.</p>
<p>Alternatively, you can use <code>async/await</code> in combination with <code>.resolves</code>:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;resolves to lemon&apos;</span>, <span class="hljs-keyword">async</span> () =&gt; {
  <span class="hljs-keyword">await</span> expect(<span class="hljs-built_in">Promise</span>.resolve(<span class="hljs-string">&apos;lemon&apos;</span>)).resolves.toBe(<span class="hljs-string">&apos;lemon&apos;</span>);
  <span class="hljs-keyword">await</span> expect(<span class="hljs-built_in">Promise</span>.resolve(<span class="hljs-string">&apos;lemon&apos;</span>)).resolves.not.toBe(<span class="hljs-string">&apos;octopus&apos;</span>);
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="rejects"></a><a href="#rejects" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.rejects</code></h3>
<p>Use <code>.rejects</code> to unwrap the reason of a rejected promise so any other matcher can be chained. If the promise is fulfilled the assertion fails.</p>
<p>For example, this code tests that the promise rejects with reason <code>&apos;octopus&apos;</code>:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;rejects to octopus&apos;</span>, () =&gt; {
  <span class="hljs-comment">// make sure to add a return statement</span>
  <span class="hljs-keyword">return</span> expect(<span class="hljs-built_in">Promise</span>.reject(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&apos;octopus&apos;</span>))).rejects.toThrow(
    <span class="hljs-string">&apos;octopus&apos;</span>,
  );
});
</code></pre>
<p>Note that, since you are still testing promises, the test is still asynchronous. Hence, you will need to <a href="/docs/en/asynchronous#promises">tell Jest to wait</a> by returning the unwrapped assertion.</p>
<p>Alternatively, you can use <code>async/await</code> in combination with <code>.rejects</code>.</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;rejects to octopus&apos;</span>, <span class="hljs-keyword">async</span> () =&gt; {
  <span class="hljs-keyword">await</span> expect(<span class="hljs-built_in">Promise</span>.reject(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&apos;octopus&apos;</span>))).rejects.toThrow(<span class="hljs-string">&apos;octopus&apos;</span>);
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="tobevalue"></a><a href="#tobevalue" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toBe(value)</code></h3>
<p>Use <code>.toBe</code> to compare primitive values or to check referential identity of object instances. It calls <code>Object.is</code> to compare values, which is even better for testing than <code>===</code> strict equality operator.</p>
<p>For example, this code will validate some properties of the <code>can</code> object:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> can = {
  <span class="hljs-attr">name</span>: <span class="hljs-string">&apos;pamplemousse&apos;</span>,
  <span class="hljs-attr">ounces</span>: <span class="hljs-number">12</span>,
};

describe(<span class="hljs-string">&apos;the can&apos;</span>, () =&gt; {
test(<span class="hljs-string">&apos;has 12 ounces&apos;</span>, () =&gt; {
expect(can.ounces).toBe(<span class="hljs-number">12</span>);
});

test(<span class="hljs-string">&apos;has a sophisticated name&apos;</span>, () =&gt; {
expect(can.name).toBe(<span class="hljs-string">&apos;pamplemousse&apos;</span>);
});
});
</code></pre>

<p>Don&apos;t use <code>.toBe</code> with floating-point numbers. For example, due to rounding, in JavaScript <code>0.2 + 0.1</code> is not strictly equal to <code>0.3</code>. If you have floating point numbers, try <code>.toBeCloseTo</code> instead.</p>
<p>Although the <code>.toBe</code> matcher <strong>checks</strong> referential identity, it <strong>reports</strong> a deep comparison of values if the assertion fails. If differences between properties do not help you to understand why a test fails, especially if the report is large, then you might move the comparison into the <code>expect</code> function. For example, to assert whether or not elements are the same instance:</p>
<ul>
<li>rewrite <code>expect(received).toBe(expected)</code> as <code>expect(Object.is(received, expected)).toBe(true)</code></li>
<li>rewrite <code>expect(received).not.toBe(expected)</code> as <code>expect(Object.is(received, expected)).toBe(false)</code></li>
</ul>
<h3><a class="anchor" aria-hidden="true" id="tohavebeencalled"></a><a href="#tohavebeencalled" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toHaveBeenCalled()</code></h3>
<p>Also under the alias: <code>.toBeCalled()</code></p>
<p>Use <code>.toHaveBeenCalled</code> to ensure that a mock function got called.</p>
<p>For example, let&apos;s say you have a <code>drinkAll(drink, flavour)</code> function that takes a <code>drink</code> function and applies it to all available beverages. You might want to check that <code>drink</code> gets called for <code>&apos;lemon&apos;</code>, but not for <code>&apos;octopus&apos;</code>, because <code>&apos;octopus&apos;</code> flavour is really weird and why would anything be octopus-flavoured? You can do that with this test suite:</p>
<pre><code class="hljs css language-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">drinkAll</span>(<span class="hljs-params">callback, flavour</span>) </span>{
  <span class="hljs-keyword">if</span> (flavour !== <span class="hljs-string">&apos;octopus&apos;</span>) {
    callback(flavour);
  }
}

describe(<span class="hljs-string">&apos;drinkAll&apos;</span>, () =&gt; {
test(<span class="hljs-string">&apos;drinks something lemon-flavoured&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> drink = jest.fn();
drinkAll(drink, <span class="hljs-string">&apos;lemon&apos;</span>);
expect(drink).toHaveBeenCalled();
});

test(<span class="hljs-string">&apos;does not drink something octopus-flavoured&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> drink = jest.fn();
drinkAll(drink, <span class="hljs-string">&apos;octopus&apos;</span>);
expect(drink).not.toHaveBeenCalled();
});
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="tohavebeencalledtimesnumber"></a><a href="#tohavebeencalledtimesnumber" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toHaveBeenCalledTimes(number)</code></h3>
<p>Also under the alias: <code>.toBeCalledTimes(number)</code></p>
<p>Use <code>.toHaveBeenCalledTimes</code> to ensure that a mock function got called exact number of times.</p>
<p>For example, let&apos;s say you have a <code>drinkEach(drink, Array&lt;flavor&gt;)</code> function that takes a <code>drink</code> function and applies it to array of passed beverages. You might want to check that drink function was called exact number of times. You can do that with this test suite:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;drinkEach drinks each drink&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> drink = jest.fn();
  drinkEach(drink, [<span class="hljs-string">&apos;lemon&apos;</span>, <span class="hljs-string">&apos;octopus&apos;</span>]);
  expect(drink).toHaveBeenCalledTimes(<span class="hljs-number">2</span>);
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="tohavebeencalledwitharg1-arg2-"></a><a href="#tohavebeencalledwitharg1-arg2-" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toHaveBeenCalledWith(arg1, arg2, ...)</code></h3>
<p>Also under the alias: <code>.toBeCalledWith()</code></p>
<p>Use <code>.toHaveBeenCalledWith</code> to ensure that a mock function was called with specific arguments.</p>
<p>For example, let&apos;s say that you can register a beverage with a <code>register</code> function, and <code>applyToAll(f)</code> should apply the function <code>f</code> to all registered beverages. To make sure this works, you could write:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;registration applies correctly to orange La Croix&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> beverage = <span class="hljs-keyword">new</span> LaCroix(<span class="hljs-string">&apos;orange&apos;</span>);
  register(beverage);
  <span class="hljs-keyword">const</span> f = jest.fn();
  applyToAll(f);
  expect(f).toHaveBeenCalledWith(beverage);
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="tohavebeenlastcalledwitharg1-arg2-"></a><a href="#tohavebeenlastcalledwitharg1-arg2-" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toHaveBeenLastCalledWith(arg1, arg2, ...)</code></h3>
<p>Also under the alias: <code>.lastCalledWith(arg1, arg2, ...)</code></p>
<p>If you have a mock function, you can use <code>.toHaveBeenLastCalledWith</code> to test what arguments it was last called with. For example, let&apos;s say you have a <code>applyToAllFlavors(f)</code> function that applies <code>f</code> to a bunch of flavors, and you want to ensure that when you call it, the last flavor it operates on is <code>&apos;mango&apos;</code>. You can write:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;applying to all flavors does mango last&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> drink = jest.fn();
  applyToAllFlavors(drink);
  expect(drink).toHaveBeenLastCalledWith(<span class="hljs-string">&apos;mango&apos;</span>);
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="tohavebeennthcalledwithnthcall-arg1-arg2-"></a><a href="#tohavebeennthcalledwithnthcall-arg1-arg2-" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....)</code></h3>
<p>Also under the alias: <code>.nthCalledWith(nthCall, arg1, arg2, ...)</code></p>
<p>If you have a mock function, you can use <code>.toHaveBeenNthCalledWith</code> to test what arguments it was nth called with. For example, let&apos;s say you have a <code>drinkEach(drink, Array&lt;flavor&gt;)</code> function that applies <code>f</code> to a bunch of flavors, and you want to ensure that when you call it, the first flavor it operates on is <code>&apos;lemon&apos;</code> and the second one is <code>&apos;octopus&apos;</code>. You can write:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;drinkEach drinks each drink&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> drink = jest.fn();
  drinkEach(drink, [<span class="hljs-string">&apos;lemon&apos;</span>, <span class="hljs-string">&apos;octopus&apos;</span>]);
  expect(drink).toHaveBeenNthCalledWith(<span class="hljs-number">1</span>, <span class="hljs-string">&apos;lemon&apos;</span>);
  expect(drink).toHaveBeenNthCalledWith(<span class="hljs-number">2</span>, <span class="hljs-string">&apos;octopus&apos;</span>);
});
</code></pre>
<p>Note: the nth argument must be positive integer starting from 1.</p>
<h3><a class="anchor" aria-hidden="true" id="tohavereturned"></a><a href="#tohavereturned" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toHaveReturned()</code></h3>
<p>Also under the alias: <code>.toReturn()</code></p>
<p>If you have a mock function, you can use <code>.toHaveReturned</code> to test that the mock function successfully returned (i.e., did not throw an error) at least one time. For example, let&apos;s say you have a mock <code>drink</code> that returns <code>true</code>. You can write:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;drinks returns&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> drink = jest.fn(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-literal">true</span>);

drink();

expect(drink).toHaveReturned();
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="tohavereturnedtimesnumber"></a><a href="#tohavereturnedtimesnumber" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toHaveReturnedTimes(number)</code></h3>
<p>Also under the alias: <code>.toReturnTimes(number)</code></p>
<p>Use <code>.toHaveReturnedTimes</code> to ensure that a mock function returned successfully (i.e., did not throw an error) an exact number of times. Any calls to the mock function that throw an error are not counted toward the number of times the function returned.</p>
<p>For example, let&apos;s say you have a mock <code>drink</code> that returns <code>true</code>. You can write:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;drink returns twice&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> drink = jest.fn(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-literal">true</span>);

drink();
drink();

expect(drink).toHaveReturnedTimes(<span class="hljs-number">2</span>);
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="tohavereturnedwithvalue"></a><a href="#tohavereturnedwithvalue" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toHaveReturnedWith(value)</code></h3>
<p>Also under the alias: <code>.toReturnWith(value)</code></p>
<p>Use <code>.toHaveReturnedWith</code> to ensure that a mock function returned a specific value.</p>
<p>For example, let&apos;s say you have a mock <code>drink</code> that returns the name of the beverage that was consumed. You can write:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;drink returns La Croix&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> beverage = {<span class="hljs-attr">name</span>: <span class="hljs-string">&apos;La Croix&apos;</span>};
  <span class="hljs-keyword">const</span> drink = jest.fn(<span class="hljs-function"><span class="hljs-params">beverage</span> =&gt;</span> beverage.name);

drink(beverage);

expect(drink).toHaveReturnedWith(<span class="hljs-string">&apos;La Croix&apos;</span>);
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="tohavelastreturnedwithvalue"></a><a href="#tohavelastreturnedwithvalue" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toHaveLastReturnedWith(value)</code></h3>
<p>Also under the alias: <code>.lastReturnedWith(value)</code></p>
<p>Use <code>.toHaveLastReturnedWith</code> to test the specific value that a mock function last returned. If the last call to the mock function threw an error, then this matcher will fail no matter what value you provided as the expected return value.</p>
<p>For example, let&apos;s say you have a mock <code>drink</code> that returns the name of the beverage that was consumed. You can write:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;drink returns La Croix (Orange) last&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> beverage1 = {<span class="hljs-attr">name</span>: <span class="hljs-string">&apos;La Croix (Lemon)&apos;</span>};
  <span class="hljs-keyword">const</span> beverage2 = {<span class="hljs-attr">name</span>: <span class="hljs-string">&apos;La Croix (Orange)&apos;</span>};
  <span class="hljs-keyword">const</span> drink = jest.fn(<span class="hljs-function"><span class="hljs-params">beverage</span> =&gt;</span> beverage.name);

drink(beverage1);
drink(beverage2);

expect(drink).toHaveLastReturnedWith(<span class="hljs-string">&apos;La Croix (Orange)&apos;</span>);
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="tohaventhreturnedwithnthcall-value"></a><a href="#tohaventhreturnedwithnthcall-value" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toHaveNthReturnedWith(nthCall, value)</code></h3>
<p>Also under the alias: <code>.nthReturnedWith(nthCall, value)</code></p>
<p>Use <code>.toHaveNthReturnedWith</code> to test the specific value that a mock function returned for the nth call. If the nth call to the mock function threw an error, then this matcher will fail no matter what value you provided as the expected return value.</p>
<p>For example, let&apos;s say you have a mock <code>drink</code> that returns the name of the beverage that was consumed. You can write:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;drink returns expected nth calls&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> beverage1 = {<span class="hljs-attr">name</span>: <span class="hljs-string">&apos;La Croix (Lemon)&apos;</span>};
  <span class="hljs-keyword">const</span> beverage2 = {<span class="hljs-attr">name</span>: <span class="hljs-string">&apos;La Croix (Orange)&apos;</span>};
  <span class="hljs-keyword">const</span> drink = jest.fn(<span class="hljs-function"><span class="hljs-params">beverage</span> =&gt;</span> beverage.name);

drink(beverage1);
drink(beverage2);

expect(drink).toHaveNthReturnedWith(<span class="hljs-number">1</span>, <span class="hljs-string">&apos;La Croix (Lemon)&apos;</span>);
expect(drink).toHaveNthReturnedWith(<span class="hljs-number">2</span>, <span class="hljs-string">&apos;La Croix (Orange)&apos;</span>);
});
</code></pre>

<p>Note: the nth argument must be positive integer starting from 1.</p>
<h3><a class="anchor" aria-hidden="true" id="tohavelengthnumber"></a><a href="#tohavelengthnumber" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toHaveLength(number)</code></h3>
<p>Use <code>.toHaveLength</code> to check that an object has a <code>.length</code> property and it is set to a certain numeric value.</p>
<p>This is especially useful for checking arrays or strings size.</p>
<pre><code class="hljs css language-js">expect([<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]).toHaveLength(<span class="hljs-number">3</span>);
expect(<span class="hljs-string">&apos;abc&apos;</span>).toHaveLength(<span class="hljs-number">3</span>);
expect(<span class="hljs-string">&apos;&apos;</span>).not.toHaveLength(<span class="hljs-number">5</span>);
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="tohavepropertykeypath-value"></a><a href="#tohavepropertykeypath-value" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toHaveProperty(keyPath, value?)</code></h3>
<p>Use <code>.toHaveProperty</code> to check if property at provided reference <code>keyPath</code> exists for an object. For checking deeply nested properties in an object you may use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Property_accessors">dot notation</a> or an array containing the keyPath for deep references.</p>
<p>You can provide an optional <code>value</code> argument to compare the received property value (recursively for all properties of object instances, also known as deep equality, like the <code>toEqual</code> matcher).</p>
<p>The following example contains a <code>houseForSale</code> object with nested properties. We are using <code>toHaveProperty</code> to check for the existence and values of various properties in the object.</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// Object containing house features to be tested</span>
<span class="hljs-keyword">const</span> houseForSale = {
  <span class="hljs-attr">bath</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">bedrooms</span>: <span class="hljs-number">4</span>,
  <span class="hljs-attr">kitchen</span>: {
    <span class="hljs-attr">amenities</span>: [<span class="hljs-string">&apos;oven&apos;</span>, <span class="hljs-string">&apos;stove&apos;</span>, <span class="hljs-string">&apos;washer&apos;</span>],
    <span class="hljs-attr">area</span>: <span class="hljs-number">20</span>,
    <span class="hljs-attr">wallColor</span>: <span class="hljs-string">&apos;white&apos;</span>,
    <span class="hljs-string">&apos;nice.oven&apos;</span>: <span class="hljs-literal">true</span>,
  },
  <span class="hljs-string">&apos;ceiling.height&apos;</span>: <span class="hljs-number">2</span>,
};

test(<span class="hljs-string">&apos;this house has my desired features&apos;</span>, () =&gt; {
<span class="hljs-comment">// Example Referencing</span>
expect(houseForSale).toHaveProperty(<span class="hljs-string">&apos;bath&apos;</span>);
expect(houseForSale).toHaveProperty(<span class="hljs-string">&apos;bedrooms&apos;</span>, <span class="hljs-number">4</span>);

expect(houseForSale).not.toHaveProperty(<span class="hljs-string">&apos;pool&apos;</span>);

<span class="hljs-comment">// Deep referencing using dot notation</span>
expect(houseForSale).toHaveProperty(<span class="hljs-string">&apos;kitchen.area&apos;</span>, <span class="hljs-number">20</span>);
expect(houseForSale).toHaveProperty(<span class="hljs-string">&apos;kitchen.amenities&apos;</span>, [
<span class="hljs-string">&apos;oven&apos;</span>,
<span class="hljs-string">&apos;stove&apos;</span>,
<span class="hljs-string">&apos;washer&apos;</span>,
]);

expect(houseForSale).not.toHaveProperty(<span class="hljs-string">&apos;kitchen.open&apos;</span>);

<span class="hljs-comment">// Deep referencing using an array containing the keyPath</span>
expect(houseForSale).toHaveProperty([<span class="hljs-string">&apos;kitchen&apos;</span>, <span class="hljs-string">&apos;area&apos;</span>], <span class="hljs-number">20</span>);
expect(houseForSale).toHaveProperty(
[<span class="hljs-string">&apos;kitchen&apos;</span>, <span class="hljs-string">&apos;amenities&apos;</span>],
[<span class="hljs-string">&apos;oven&apos;</span>, <span class="hljs-string">&apos;stove&apos;</span>, <span class="hljs-string">&apos;washer&apos;</span>],
);
expect(houseForSale).toHaveProperty([<span class="hljs-string">&apos;kitchen&apos;</span>, <span class="hljs-string">&apos;amenities&apos;</span>, <span class="hljs-number">0</span>], <span class="hljs-string">&apos;oven&apos;</span>);
expect(houseForSale).toHaveProperty([<span class="hljs-string">&apos;kitchen&apos;</span>, <span class="hljs-string">&apos;nice.oven&apos;</span>]);
expect(houseForSale).not.toHaveProperty([<span class="hljs-string">&apos;kitchen&apos;</span>, <span class="hljs-string">&apos;open&apos;</span>]);

<span class="hljs-comment">// Referencing keys with dot in the key itself</span>
expect(houseForSale).toHaveProperty([<span class="hljs-string">&apos;ceiling.height&apos;</span>], <span class="hljs-string">&apos;tall&apos;</span>);
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="tobeclosetonumber-numdigits"></a><a href="#tobeclosetonumber-numdigits" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toBeCloseTo(number, numDigits?)</code></h3>
<p>Use <code>toBeCloseTo</code> to compare floating point numbers for approximate equality.</p>
<p>The optional <code>numDigits</code> argument limits the number of digits to check <strong>after</strong> the decimal point. For the default value <code>2</code>, the test criterion is <code>Math.abs(expected - received) &lt; 0.005</code> (that is, <code>10 ** -2 / 2</code>).</p>
<p>Intuitive equality comparisons often fail, because arithmetic on decimal (base 10) values often have rounding errors in limited precision binary (base 2) representation. For example, this test fails:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;adding works sanely with decimals&apos;</span>, () =&gt; {
  expect(<span class="hljs-number">0.2</span> + <span class="hljs-number">0.1</span>).toBe(<span class="hljs-number">0.3</span>); <span class="hljs-comment">// Fails!</span>
});
</code></pre>
<p>It fails because in JavaScript, <code>0.2 + 0.1</code> is actually <code>0.30000000000000004</code>.</p>
<p>For example, this test passes with a precision of 5 digits:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;adding works sanely with decimals&apos;</span>, () =&gt; {
  expect(<span class="hljs-number">0.2</span> + <span class="hljs-number">0.1</span>).toBeCloseTo(<span class="hljs-number">0.3</span>, <span class="hljs-number">5</span>);
});
</code></pre>
<p>Because floating point errors are the problem that <code>toBeCloseTo</code> solves, it does not support big integer values.</p>
<h3><a class="anchor" aria-hidden="true" id="tobedefined"></a><a href="#tobedefined" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toBeDefined()</code></h3>
<p>Use <code>.toBeDefined</code> to check that a variable is not undefined. For example, if you want to check that a function <code>fetchNewFlavorIdea()</code> returns <em>something</em>, you can write:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;there is a new flavor idea&apos;</span>, () =&gt; {
  expect(fetchNewFlavorIdea()).toBeDefined();
});
</code></pre>
<p>You could write <code>expect(fetchNewFlavorIdea()).not.toBe(undefined)</code>, but it&apos;s better practice to avoid referring to <code>undefined</code> directly in your code.</p>
<h3><a class="anchor" aria-hidden="true" id="tobefalsy"></a><a href="#tobefalsy" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toBeFalsy()</code></h3>
<p>Use <code>.toBeFalsy</code> when you don&apos;t care what a value is and you want to ensure a value is false in a boolean context. For example, let&apos;s say you have some application code that looks like:</p>
<pre><code class="hljs css language-js">drinkSomeLaCroix();
<span class="hljs-keyword">if</span> (!getErrors()) {
  drinkMoreLaCroix();
}
</code></pre>
<p>You may not care what <code>getErrors</code> returns, specifically - it might return <code>false</code>, <code>null</code>, or <code>0</code>, and your code would still work. So if you want to test there are no errors after drinking some La Croix, you could write:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;drinking La Croix does not lead to errors&apos;</span>, () =&gt; {
  drinkSomeLaCroix();
  expect(getErrors()).toBeFalsy();
});
</code></pre>
<p>In JavaScript, there are six falsy values: <code>false</code>, <code>0</code>, <code>&apos;&apos;</code>, <code>null</code>, <code>undefined</code>, and <code>NaN</code>. Everything else is truthy.</p>
<h3><a class="anchor" aria-hidden="true" id="tobegreaterthannumber--bigint"></a><a href="#tobegreaterthannumber--bigint" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toBeGreaterThan(number | bigint)</code></h3>
<p>Use <code>toBeGreaterThan</code> to compare <code>received &gt; expected</code> for number or big integer values. For example, test that <code>ouncesPerCan()</code> returns a value of more than 10 ounces:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;ounces per can is more than 10&apos;</span>, () =&gt; {
  expect(ouncesPerCan()).toBeGreaterThan(<span class="hljs-number">10</span>);
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="tobegreaterthanorequalnumber--bigint"></a><a href="#tobegreaterthanorequalnumber--bigint" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toBeGreaterThanOrEqual(number | bigint)</code></h3>
<p>Use <code>toBeGreaterThanOrEqual</code> to compare <code>received &gt;= expected</code> for number or big integer values. For example, test that <code>ouncesPerCan()</code> returns a value of at least 12 ounces:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;ounces per can is at least 12&apos;</span>, () =&gt; {
  expect(ouncesPerCan()).toBeGreaterThanOrEqual(<span class="hljs-number">12</span>);
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="tobelessthannumber--bigint"></a><a href="#tobelessthannumber--bigint" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toBeLessThan(number | bigint)</code></h3>
<p>Use <code>toBeLessThan</code> to compare <code>received &lt; expected</code> for number or big integer values. For example, test that <code>ouncesPerCan()</code> returns a value of less than 20 ounces:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;ounces per can is less than 20&apos;</span>, () =&gt; {
  expect(ouncesPerCan()).toBeLessThan(<span class="hljs-number">20</span>);
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="tobelessthanorequalnumber--bigint"></a><a href="#tobelessthanorequalnumber--bigint" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toBeLessThanOrEqual(number | bigint)</code></h3>
<p>Use <code>toBeLessThanOrEqual</code> to compare <code>received &lt;= expected</code> for number or big integer values. For example, test that <code>ouncesPerCan()</code> returns a value of at most 12 ounces:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;ounces per can is at most 12&apos;</span>, () =&gt; {
  expect(ouncesPerCan()).toBeLessThanOrEqual(<span class="hljs-number">12</span>);
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="tobeinstanceofclass"></a><a href="#tobeinstanceofclass" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toBeInstanceOf(Class)</code></h3>
<p>Use <code>.toBeInstanceOf(Class)</code> to check that an object is an instance of a class. This matcher uses <code>instanceof</code> underneath.</p>
<pre><code class="hljs css language-js"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">A</span> </span>{}

expect(<span class="hljs-keyword">new</span> A()).toBeInstanceOf(A);
expect(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {}).toBeInstanceOf(<span class="hljs-built_in">Function</span>);
expect(<span class="hljs-keyword">new</span> A()).toBeInstanceOf(<span class="hljs-built_in">Function</span>); <span class="hljs-comment">// throws</span>
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="tobenull"></a><a href="#tobenull" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toBeNull()</code></h3>
<p><code>.toBeNull()</code> is the same as <code>.toBe(null)</code> but the error messages are a bit nicer. So use <code>.toBeNull()</code> when you want to check that something is null.</p>
<pre><code class="hljs css language-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">bloop</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>;
}

test(<span class="hljs-string">&apos;bloop returns null&apos;</span>, () =&gt; {
expect(bloop()).toBeNull();
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="tobetruthy"></a><a href="#tobetruthy" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toBeTruthy()</code></h3>
<p>Use <code>.toBeTruthy</code> when you don&apos;t care what a value is and you want to ensure a value is true in a boolean context. For example, let&apos;s say you have some application code that looks like:</p>
<pre><code class="hljs css language-js">drinkSomeLaCroix();
<span class="hljs-keyword">if</span> (thirstInfo()) {
  drinkMoreLaCroix();
}
</code></pre>
<p>You may not care what <code>thirstInfo</code> returns, specifically - it might return <code>true</code> or a complex object, and your code would still work. So if you want to test that <code>thirstInfo</code> will be truthy after drinking some La Croix, you could write:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;drinking La Croix leads to having thirst info&apos;</span>, () =&gt; {
  drinkSomeLaCroix();
  expect(thirstInfo()).toBeTruthy();
});
</code></pre>
<p>In JavaScript, there are six falsy values: <code>false</code>, <code>0</code>, <code>&apos;&apos;</code>, <code>null</code>, <code>undefined</code>, and <code>NaN</code>. Everything else is truthy.</p>
<h3><a class="anchor" aria-hidden="true" id="tobeundefined"></a><a href="#tobeundefined" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toBeUndefined()</code></h3>
<p>Use <code>.toBeUndefined</code> to check that a variable is undefined. For example, if you want to check that a function <code>bestDrinkForFlavor(flavor)</code> returns <code>undefined</code> for the <code>&apos;octopus&apos;</code> flavor, because there is no good octopus-flavored drink:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;the best drink for octopus flavor is undefined&apos;</span>, () =&gt; {
  expect(bestDrinkForFlavor(<span class="hljs-string">&apos;octopus&apos;</span>)).toBeUndefined();
});
</code></pre>
<p>You could write <code>expect(bestDrinkForFlavor(&apos;octopus&apos;)).toBe(undefined)</code>, but it&apos;s better practice to avoid referring to <code>undefined</code> directly in your code.</p>
<h3><a class="anchor" aria-hidden="true" id="tobenan"></a><a href="#tobenan" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toBeNaN()</code></h3>
<p>Use <code>.toBeNaN</code> when checking a value is <code>NaN</code>.</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;passes when value is NaN&apos;</span>, () =&gt; {
  expect(<span class="hljs-literal">NaN</span>).toBeNaN();
  expect(<span class="hljs-number">1</span>).not.toBeNaN();
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="tocontainitem"></a><a href="#tocontainitem" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toContain(item)</code></h3>
<p>Use <code>.toContain</code> when you want to check that an item is in an array. For testing the items in the array, this uses <code>===</code>, a strict equality check. <code>.toContain</code> can also check whether a string is a substring of another string.</p>
<p>For example, if <code>getAllFlavors()</code> returns an array of flavors and you want to be sure that <code>lime</code> is in there, you can write:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;the flavor list contains lime&apos;</span>, () =&gt; {
  expect(getAllFlavors()).toContain(<span class="hljs-string">&apos;lime&apos;</span>);
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="tocontainequalitem"></a><a href="#tocontainequalitem" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toContainEqual(item)</code></h3>
<p>Use <code>.toContainEqual</code> when you want to check that an item with a specific structure and values is contained in an array. For testing the items in the array, this matcher recursively checks the equality of all fields, rather than checking for object identity.</p>
<pre><code class="hljs css language-js">describe(<span class="hljs-string">&apos;my beverage&apos;</span>, () =&gt; {
  test(<span class="hljs-string">&apos;is delicious and not sour&apos;</span>, () =&gt; {
    <span class="hljs-keyword">const</span> myBeverage = {<span class="hljs-attr">delicious</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">sour</span>: <span class="hljs-literal">false</span>};
    expect(myBeverages()).toContainEqual(myBeverage);
  });
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="toequalvalue"></a><a href="#toequalvalue" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toEqual(value)</code></h3>
<p>Use <code>.toEqual</code> to compare recursively all properties of object instances (also known as &quot;deep&quot; equality). It calls <code>Object.is</code> to compare primitive values, which is even better for testing than <code>===</code> strict equality operator.</p>
<p>For example, <code>.toEqual</code> and <code>.toBe</code> behave differently in this test suite, so all the tests pass:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> can1 = {
  <span class="hljs-attr">flavor</span>: <span class="hljs-string">&apos;grapefruit&apos;</span>,
  <span class="hljs-attr">ounces</span>: <span class="hljs-number">12</span>,
};
<span class="hljs-keyword">const</span> can2 = {
  <span class="hljs-attr">flavor</span>: <span class="hljs-string">&apos;grapefruit&apos;</span>,
  <span class="hljs-attr">ounces</span>: <span class="hljs-number">12</span>,
};

describe(<span class="hljs-string">&apos;the La Croix cans on my desk&apos;</span>, () =&gt; {
test(<span class="hljs-string">&apos;have all the same properties&apos;</span>, () =&gt; {
expect(can1).toEqual(can2);
});
test(<span class="hljs-string">&apos;are not the exact same can&apos;</span>, () =&gt; {
expect(can1).not.toBe(can2);
});
});
</code></pre>

<blockquote>
<p>Note: <code>.toEqual</code> won&apos;t perform a <em>deep equality</em> check for two errors. Only the <code>message</code> property of an Error is considered for equality. It is recommended to use the <code>.toThrow</code> matcher for testing against errors.</p>
</blockquote>
<p>If differences between properties do not help you to understand why a test fails, especially if the report is large, then you might move the comparison into the <code>expect</code> function. For example, use <code>equals</code> method of <code>Buffer</code> class to assert whether or not buffers contain the same content:</p>
<ul>
<li>rewrite <code>expect(received).toEqual(expected)</code> as <code>expect(received.equals(expected)).toBe(true)</code></li>
<li>rewrite <code>expect(received).not.toEqual(expected)</code> as <code>expect(received.equals(expected)).toBe(false)</code></li>
</ul>
<h3><a class="anchor" aria-hidden="true" id="tomatchregexporstring"></a><a href="#tomatchregexporstring" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toMatch(regexpOrString)</code></h3>
<p>Use <code>.toMatch</code> to check that a string matches a regular expression.</p>
<p>For example, you might not know what exactly <code>essayOnTheBestFlavor()</code> returns, but you know it&apos;s a really long string, and the substring <code>grapefruit</code> should be in there somewhere. You can test this with:</p>
<pre><code class="hljs css language-js">describe(<span class="hljs-string">&apos;an essay on the best flavor&apos;</span>, () =&gt; {
  test(<span class="hljs-string">&apos;mentions grapefruit&apos;</span>, () =&gt; {
    expect(essayOnTheBestFlavor()).toMatch(<span class="hljs-regexp">/grapefruit/</span>);
    expect(essayOnTheBestFlavor()).toMatch(<span class="hljs-keyword">new</span> <span class="hljs-built_in">RegExp</span>(<span class="hljs-string">&apos;grapefruit&apos;</span>));
  });
});
</code></pre>
<p>This matcher also accepts a string, which it will try to match:</p>
<pre><code class="hljs css language-js">describe(<span class="hljs-string">&apos;grapefruits are healthy&apos;</span>, () =&gt; {
  test(<span class="hljs-string">&apos;grapefruits are a fruit&apos;</span>, () =&gt; {
    expect(<span class="hljs-string">&apos;grapefruits&apos;</span>).toMatch(<span class="hljs-string">&apos;fruit&apos;</span>);
  });
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="tomatchobjectobject"></a><a href="#tomatchobjectobject" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toMatchObject(object)</code></h3>
<p>Use <code>.toMatchObject</code> to check that a JavaScript object matches a subset of the properties of an object. It will match received objects with properties that are <strong>not</strong> in the expected object.</p>
<p>You can also pass an array of objects, in which case the method will return true only if each object in the received array matches (in the <code>toMatchObject</code> sense described above) the corresponding object in the expected array. This is useful if you want to check that two arrays match in their number of elements, as opposed to <code>arrayContaining</code>, which allows for extra elements in the received array.</p>
<p>You can match properties against values or against matchers.</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> houseForSale = {
  <span class="hljs-attr">bath</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">bedrooms</span>: <span class="hljs-number">4</span>,
  <span class="hljs-attr">kitchen</span>: {
    <span class="hljs-attr">amenities</span>: [<span class="hljs-string">&apos;oven&apos;</span>, <span class="hljs-string">&apos;stove&apos;</span>, <span class="hljs-string">&apos;washer&apos;</span>],
    <span class="hljs-attr">area</span>: <span class="hljs-number">20</span>,
    <span class="hljs-attr">wallColor</span>: <span class="hljs-string">&apos;white&apos;</span>,
  },
};
<span class="hljs-keyword">const</span> desiredHouse = {
  <span class="hljs-attr">bath</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">kitchen</span>: {
    <span class="hljs-attr">amenities</span>: [<span class="hljs-string">&apos;oven&apos;</span>, <span class="hljs-string">&apos;stove&apos;</span>, <span class="hljs-string">&apos;washer&apos;</span>],
    <span class="hljs-attr">wallColor</span>: expect.stringMatching(<span class="hljs-regexp">/white|yellow/</span>),
  },
};

test(<span class="hljs-string">&apos;the house has my desired features&apos;</span>, () =&gt; {
expect(houseForSale).toMatchObject(desiredHouse);
});
</code></pre>

<pre><code class="hljs css language-js">describe(<span class="hljs-string">&apos;toMatchObject applied to arrays&apos;</span>, () =&gt; {
  test(<span class="hljs-string">&apos;the number of elements must match exactly&apos;</span>, () =&gt; {
    expect([{<span class="hljs-attr">foo</span>: <span class="hljs-string">&apos;bar&apos;</span>}, {<span class="hljs-attr">baz</span>: <span class="hljs-number">1</span>}]).toMatchObject([{<span class="hljs-attr">foo</span>: <span class="hljs-string">&apos;bar&apos;</span>}, {<span class="hljs-attr">baz</span>: <span class="hljs-number">1</span>}]);
  });

  test(<span class="hljs-string">&apos;.toMatchObject is called for each elements, so extra object properties are okay&apos;</span>, () =&gt; {
    expect([{<span class="hljs-attr">foo</span>: <span class="hljs-string">&apos;bar&apos;</span>}, {<span class="hljs-attr">baz</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">extra</span>: <span class="hljs-string">&apos;quux&apos;</span>}]).toMatchObject([
      {<span class="hljs-attr">foo</span>: <span class="hljs-string">&apos;bar&apos;</span>},
      {<span class="hljs-attr">baz</span>: <span class="hljs-number">1</span>},
    ]);
  });
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="tomatchsnapshotpropertymatchers-hint"></a><a href="#tomatchsnapshotpropertymatchers-hint" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toMatchSnapshot(propertyMatchers?, hint?)</code></h3>
<p>This ensures that a value matches the most recent snapshot. Check out <a href="/docs/en/snapshot-testing">the Snapshot Testing guide</a> for more information.</p>
<p>You can provide an optional <code>propertyMatchers</code> object argument, which has asymmetric matchers as values of a subset of expected properties, <strong>if</strong> the received value will be an <strong>object</strong> instance. It is like <code>toMatchObject</code> with flexible criteria for a subset of properties, followed by a snapshot test as exact criteria for the rest of the properties.</p>
<p>You can provide an optional <code>hint</code> string argument that is appended to the test name. Although Jest always appends a number at the end of a snapshot name, short descriptive hints might be more useful than numbers to differentiate <strong>multiple</strong> snapshots in a <strong>single</strong> <code>it</code> or <code>test</code> block. Jest sorts snapshots by name in the corresponding <code>.snap</code> file.</p>
<h3><a class="anchor" aria-hidden="true" id="tomatchinlinesnapshotpropertymatchers-inlinesnapshot"></a><a href="#tomatchinlinesnapshotpropertymatchers-inlinesnapshot" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toMatchInlineSnapshot(propertyMatchers?, inlineSnapshot)</code></h3>
<p>Ensures that a value matches the most recent snapshot.</p>
<p>You can provide an optional <code>propertyMatchers</code> object argument, which has asymmetric matchers as values of a subset of expected properties, <strong>if</strong> the received value will be an <strong>object</strong> instance. It is like <code>toMatchObject</code> with flexible criteria for a subset of properties, followed by a snapshot test as exact criteria for the rest of the properties.</p>
<p>Jest adds the <code>inlineSnapshot</code> string argument to the matcher in the test file (instead of an external <code>.snap</code> file) the first time that the test runs.</p>
<p>Check out the section on <a href="/docs/en/snapshot-testing#inline-snapshots">Inline Snapshots</a> for more info.</p>
<h3><a class="anchor" aria-hidden="true" id="tostrictequalvalue"></a><a href="#tostrictequalvalue" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toStrictEqual(value)</code></h3>
<p>Use <code>.toStrictEqual</code> to test that objects have the same types as well as structure.</p>
<p>Differences from <code>.toEqual</code>:</p>
<ul>
<li>Keys with <code>undefined</code> properties are checked. e.g. <code>{a: undefined, b: 2}</code> does not match <code>{b: 2}</code> when using <code>.toStrictEqual</code>.</li>
<li>Array sparseness is checked. e.g. <code>[, 1]</code> does not match <code>[undefined, 1]</code> when using <code>.toStrictEqual</code>.</li>
<li>Object types are checked to be equal. e.g. A class instance with fields <code>a</code> and <code>b</code> will not equal a literal object with fields <code>a</code> and <code>b</code>.</li>
</ul>
<pre><code class="hljs css language-js"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">LaCroix</span> </span>{
  <span class="hljs-keyword">constructor</span>(flavor) {
    <span class="hljs-keyword">this</span>.flavor = flavor;
  }
}

describe(<span class="hljs-string">&apos;the La Croix cans on my desk&apos;</span>, () =&gt; {
test(<span class="hljs-string">&apos;are not semantically the same&apos;</span>, () =&gt; {
expect(<span class="hljs-keyword">new</span> LaCroix(<span class="hljs-string">&apos;lemon&apos;</span>)).toEqual({<span class="hljs-attr">flavor</span>: <span class="hljs-string">&apos;lemon&apos;</span>});
expect(<span class="hljs-keyword">new</span> LaCroix(<span class="hljs-string">&apos;lemon&apos;</span>)).not.toStrictEqual({<span class="hljs-attr">flavor</span>: <span class="hljs-string">&apos;lemon&apos;</span>});
});
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="tothrowerror"></a><a href="#tothrowerror" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toThrow(error?)</code></h3>
<p>Also under the alias: <code>.toThrowError(error?)</code></p>
<p>Use <code>.toThrow</code> to test that a function throws when it is called. For example, if we want to test that <code>drinkFlavor(&apos;octopus&apos;)</code> throws, because octopus flavor is too disgusting to drink, we could write:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;throws on octopus&apos;</span>, () =&gt; {
  expect(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    drinkFlavor(<span class="hljs-string">&apos;octopus&apos;</span>);
  }).toThrow();
});
</code></pre>
<blockquote>
<p>Note: You must wrap the code in a function, otherwise the error will not be caught and the assertion will fail.</p>
</blockquote>
<p>You can provide an optional argument to test that a specific error is thrown:</p>
<ul>
<li>regular expression: error message <strong>matches</strong> the pattern</li>
<li>string: error message <strong>includes</strong> the substring</li>
<li>error object: error message is <strong>equal to</strong> the message property of the object</li>
<li>error class: error object is <strong>instance of</strong> class</li>
</ul>
<p>For example, let&apos;s say that <code>drinkFlavor</code> is coded like this:</p>
<pre><code class="hljs css language-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">drinkFlavor</span>(<span class="hljs-params">flavor</span>) </span>{
  <span class="hljs-keyword">if</span> (flavor == <span class="hljs-string">&apos;octopus&apos;</span>) {
    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> DisgustingFlavorError(<span class="hljs-string">&apos;yuck, octopus flavor&apos;</span>);
  }
  <span class="hljs-comment">// Do some other stuff</span>
}
</code></pre>
<p>We could test this error gets thrown in several ways:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;throws on octopus&apos;</span>, () =&gt; {
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">drinkOctopus</span>(<span class="hljs-params"></span>) </span>{
    drinkFlavor(<span class="hljs-string">&apos;octopus&apos;</span>);
  }

<span class="hljs-comment">// Test that the error message says &quot;yuck&quot; somewhere: these are equivalent</span>
expect(drinkOctopus).toThrowError(<span class="hljs-regexp">/yuck/</span>);
expect(drinkOctopus).toThrowError(<span class="hljs-string">&apos;yuck&apos;</span>);

<span class="hljs-comment">// Test the exact error message</span>
expect(drinkOctopus).toThrowError(<span class="hljs-regexp">/^yuck, octopus flavor\$/</span>);
expect(drinkOctopus).toThrowError(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&apos;yuck, octopus flavor&apos;</span>));

<span class="hljs-comment">// Test that we get a DisgustingFlavorError</span>
expect(drinkOctopus).toThrowError(DisgustingFlavorError);
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="tothrowerrormatchingsnapshothint"></a><a href="#tothrowerrormatchingsnapshothint" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toThrowErrorMatchingSnapshot(hint?)</code></h3>
<p>Use <code>.toThrowErrorMatchingSnapshot</code> to test that a function throws an error matching the most recent snapshot when it is called.</p>
<p>You can provide an optional <code>hint</code> string argument that is appended to the test name. Although Jest always appends a number at the end of a snapshot name, short descriptive hints might be more useful than numbers to differentiate <strong>multiple</strong> snapshots in a <strong>single</strong> <code>it</code> or <code>test</code> block. Jest sorts snapshots by name in the corresponding <code>.snap</code> file.</p>
<p>For example, let&apos;s say you have a <code>drinkFlavor</code> function that throws whenever the flavor is <code>&apos;octopus&apos;</code>, and is coded like this:</p>
<pre><code class="hljs css language-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">drinkFlavor</span>(<span class="hljs-params">flavor</span>) </span>{
  <span class="hljs-keyword">if</span> (flavor == <span class="hljs-string">&apos;octopus&apos;</span>) {
    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> DisgustingFlavorError(<span class="hljs-string">&apos;yuck, octopus flavor&apos;</span>);
  }
  <span class="hljs-comment">// Do some other stuff</span>
}
</code></pre>
<p>The test for this function will look this way:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-string">&apos;throws on octopus&apos;</span>, () =&gt; {
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">drinkOctopus</span>(<span class="hljs-params"></span>) </span>{
    drinkFlavor(<span class="hljs-string">&apos;octopus&apos;</span>);
  }

expect(drinkOctopus).toThrowErrorMatchingSnapshot();
});
</code></pre>

<p>And it will generate the following snapshot:</p>
<pre><code class="hljs css language-js">exports[<span class="hljs-string">`drinking flavors throws on octopus 1`</span>] = <span class="hljs-string">`&quot;yuck, octopus flavor&quot;`</span>;
</code></pre>
<p>Check out <a href="https://jestjs.io/blog/2016/07/27/jest-14.html">React Tree Snapshot Testing</a> for more information on snapshot testing.</p>
<h3><a class="anchor" aria-hidden="true" id="tothrowerrormatchinginlinesnapshotinlinesnapshot"></a><a href="#tothrowerrormatchinginlinesnapshotinlinesnapshot" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>.toThrowErrorMatchingInlineSnapshot(inlineSnapshot)</code></h3>
<p>Use <code>.toThrowErrorMatchingInlineSnapshot</code> to test that a function throws an error matching the most recent snapshot when it is called.</p>
<p>Jest adds the <code>inlineSnapshot</code> string argument to the matcher in the test file (instead of an external <code>.snap</code> file) the first time that the test runs.</p>
<p>Check out the section on <a href="/docs/en/snapshot-testing#inline-snapshots">Inline Snapshots</a> for more info.</p>
</span></div></article>
