<div class="markdown-body">

<div align="center">
<a href="https://d3vv6lp55qjaqc.cloudfront.net/items/2D2K45312x0M1q2C0a3P/jest-logo.svg" target="_blank" rel="nofollow"><img src="https://d3vv6lp55qjaqc.cloudfront.net/items/2D2K45312x0M1q2C0a3P/jest-logo.svg" width="200" style="max-width:100%;"></a>
<h1>
<a id="jest-cheat-sheet" class="anchor" href="#jest-cheat-sheet" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Jest cheat sheet</h1>
</div>
<p><em>I recommend <a href="https://github.com/sapegin/mrm-tasks/tree/master/packages/mrm-task-jest" rel="nofollow">Mrm</a> and <a href="https://github.com/skovhus/jest-codemods" rel="nofollow">jest-codemods</a> for single-command Jest installation and easy migration from other frameworks.</em></p>

<ul>
<li><a href="#test-structure">Test structure</a></li>
<li>
<a href="#matchers">Matchers</a>
<ul>
<li><a href="#basic-matchers">Basic matchers</a></li>
<li><a href="#truthiness">Truthiness</a></li>
<li><a href="#numbers">Numbers</a></li>
<li><a href="#strings">Strings</a></li>
<li><a href="#arrays">Arrays</a></li>
<li><a href="#objects">Objects</a></li>
<li><a href="#exceptions">Exceptions</a></li>
<li><a href="#snapshots">Snapshots</a></li>
<li><a href="#mock-functions">Mock functions</a></li>
<li><a href="#misc">Misc</a></li>
<li><a href="#promise-matchers-jest-20">Promise matchers (Jest 20+)</a></li>
</ul>
</li>
<li>
<a href="#async-tests">Async tests</a>
<ul>
<li><a href="#asyncawait">async/await</a></li>
<li><a href="#promises">Promises</a></li>
<li><a href="#done-callback">done() callback</a></li>
</ul>
</li>
<li>
<a href="#mocks">Mocks</a>
<ul>
<li><a href="#mock-functions-1">Mock functions</a></li>
<li><a href="#Returning-resolving-and-rejecting-values">Returning, resolving and rejecting values</a></li>
<li><a href="#mock-modules-using-jestmock-method">Mock modules using <code>jest.mock</code> method</a></li>
<li><a href="#mock-modules-using-a-mock-file">Mock modules using a mock file</a></li>
<li><a href="#mock-object-methods">Mock object methods</a></li>
<li><a href="#mock-getters-and-setters-jest-2210">Mock getters and setters (Jest 22.1.0+)</a></li>
<li><a href="#mock-getters-and-setters">Mock getters and setters</a></li>
<li><a href="#clearing-and-restoring-mocks">Clearing and restoring mocks</a></li>
<li><a href="#accessing-the-original-module-when-using-mocks">Accessing the original module when using mocks</a></li>
<li><a href="#timer-mocks">Timer mocks</a></li>
</ul>
</li>
<li><a href="#data-driven-tests-jest-23">Data-driven tests (Jest 23+)</a></li>
<li><a href="#skipping-tests">Skipping tests</a></li>
<li><a href="#testing-modules-with-side-effects">Testing modules with side effects</a></li>
<li><a href="#usage-with-babel-and-typescript">Usage with Babel and TypeScript</a></li>
<li><a href="#resources">Resources</a></li>
<li><a href="#you-may-also-like">You may also like</a></li>
<li><a href="#contributing">Contributing</a></li>
<li><a href="#author-and-license">Author and license</a></li>
</ul>

<h2>
<a id="test-structure" class="anchor" href="#test-structure" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Test structure</h2>
<pre lang="js" class="highlight-js"><span class="nx">describe</span><span class="p">(</span><span class="s1">'makePoniesPink'</span><span class="p">,</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>
  <span class="nx">beforeAll</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">{</span>
    <span class="cm">/* Runs before all tests */</span>
  <span class="p">})</span>
  <span class="nx">afterAll</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">{</span>
    <span class="cm">/* Runs after all tests */</span>
  <span class="p">})</span>
  <span class="nx">beforeEach</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">{</span>
    <span class="cm">/* Runs before each test */</span>
  <span class="p">})</span>
  <span class="nx">afterEach</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">{</span>
    <span class="cm">/* Runs after each test */</span>
  <span class="p">})</span>
  
  <span class="nx">test</span><span class="p">(</span><span class="s1">'make each pony pink'</span><span class="p">,</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>
    <span class="kd">const</span> <span class="nx">actual</span> <span class="o">=</span> <span class="nx">fn</span><span class="p">([</span><span class="s1">'Alice'</span><span class="p">,</span> <span class="s1">'Bob'</span><span class="p">,</span> <span class="s1">'Eve'</span><span class="p">])</span>
    <span class="nx">expect</span><span class="p">(</span><span class="nx">actual</span><span class="p">).</span><span class="nx">toEqual</span><span class="p">([</span><span class="s1">'Pink Alice'</span><span class="p">,</span> <span class="s1">'Pink Bob'</span><span class="p">,</span> <span class="s1">'Pink Eve'</span><span class="p">])</span>
  <span class="p">})</span>
<span class="p">})</span>
</pre>
<h2>
<a id="matchers" class="anchor" href="#matchers" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Matchers</h2>
<p><a href="http://jestjs.io/docs/en/using-matchers" rel="nofollow">Using matchers</a>, <a href="https://facebook.github.io/jest/docs/expect.html" rel="nofollow">matchers docs</a></p>
<h3>
<a id="basic-matchers" class="anchor" href="#basic-matchers" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Basic matchers</h3>
<pre lang="js" class="highlight-js"><span class="nx">expect</span><span class="p">(</span><span class="mi">42</span><span class="p">).</span><span class="nx">toBe</span><span class="p">(</span><span class="mi">42</span><span class="p">)</span> <span class="c1">// Strict equality (===)</span>
<span class="nx">expect</span><span class="p">(</span><span class="mi">42</span><span class="p">).</span><span class="nx">not</span><span class="p">.</span><span class="nx">toBe</span><span class="p">(</span><span class="mi">3</span><span class="p">)</span> <span class="c1">// Strict equality (!==)</span>
<span class="nx">expect</span><span class="p">([</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">]).</span><span class="nx">toEqual</span><span class="p">([</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">])</span> <span class="c1">// Deep equality</span>
<span class="nx">expect</span><span class="p">({</span> <span class="na">a</span><span class="p">:</span> <span class="kc">undefined</span><span class="p">,</span> <span class="na">b</span><span class="p">:</span> <span class="mi">2</span> <span class="p">}).</span><span class="nx">toEqual</span><span class="p">({</span> <span class="na">b</span><span class="p">:</span> <span class="mi">2</span> <span class="p">})</span> <span class="c1">// Deep equality</span>
<span class="nx">expect</span><span class="p">({</span> <span class="na">a</span><span class="p">:</span> <span class="kc">undefined</span><span class="p">,</span> <span class="na">b</span><span class="p">:</span> <span class="mi">2</span> <span class="p">}).</span><span class="nx">not</span><span class="p">.</span><span class="nx">toStrictEqual</span><span class="p">({</span> <span class="na">b</span><span class="p">:</span> <span class="mi">2</span> <span class="p">})</span> <span class="c1">// Strict equality (Jest 23+)</span>
</pre>
<h3>
<a id="truthiness" class="anchor" href="#truthiness" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Truthiness</h3>
<pre lang="js" class="highlight-js"><span class="c1">// Matches anything that an if statement treats as true (not false, 0, '', null, undefined, NaN)</span>
<span class="nx">expect</span><span class="p">(</span><span class="s1">'foo'</span><span class="p">).</span><span class="nx">toBeTruthy</span><span class="p">()</span>
<span class="c1">// Matches anything that an if statement treats as false (false, 0, '', null, undefined, NaN)</span>
<span class="nx">expect</span><span class="p">(</span><span class="s1">''</span><span class="p">).</span><span class="nx">toBeFalsy</span><span class="p">()</span>
<span class="c1">// Matches only null</span>
<span class="nx">expect</span><span class="p">(</span><span class="kc">null</span><span class="p">).</span><span class="nx">toBeNull</span><span class="p">()</span>
<span class="c1">// Matches only undefined</span>
<span class="nx">expect</span><span class="p">(</span><span class="kc">undefined</span><span class="p">).</span><span class="nx">toBeUndefined</span><span class="p">()</span>
<span class="c1">// The opposite of toBeUndefined</span>
<span class="nx">expect</span><span class="p">(</span><span class="mi">7</span><span class="p">).</span><span class="nx">toBeDefined</span><span class="p">()</span>
<span class="c1">// Matches true or false</span>
<span class="nx">expect</span><span class="p">(</span><span class="kc">true</span><span class="p">).</span><span class="nx">toEqual</span><span class="p">(</span><span class="nx">expect</span><span class="p">.</span><span class="nx">any</span><span class="p">(</span><span class="nb">Boolean</span><span class="p">))</span>
</pre>
<h3>
<a id="numbers" class="anchor" href="#numbers" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Numbers</h3>
<pre lang="js" class="highlight-js"><span class="nx">expect</span><span class="p">(</span><span class="mi">2</span><span class="p">).</span><span class="nx">toBeGreaterThan</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>
<span class="nx">expect</span><span class="p">(</span><span class="mi">1</span><span class="p">).</span><span class="nx">toBeGreaterThanOrEqual</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>
<span class="nx">expect</span><span class="p">(</span><span class="mi">1</span><span class="p">).</span><span class="nx">toBeLessThan</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span>
<span class="nx">expect</span><span class="p">(</span><span class="mi">1</span><span class="p">).</span><span class="nx">toBeLessThanOrEqual</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>
<span class="nx">expect</span><span class="p">(</span><span class="mf">0.2</span> <span class="o">+</span> <span class="mf">0.1</span><span class="p">).</span><span class="nx">toBeCloseTo</span><span class="p">(</span><span class="mf">0.3</span><span class="p">,</span> <span class="mi">5</span><span class="p">)</span>
<span class="nx">expect</span><span class="p">(</span><span class="kc">NaN</span><span class="p">).</span><span class="nx">toEqual</span><span class="p">(</span><span class="nx">expect</span><span class="p">.</span><span class="nx">any</span><span class="p">(</span><span class="nb">Number</span><span class="p">))</span>
</pre>
<h3>
<a id="strings" class="anchor" href="#strings" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Strings</h3>
<pre lang="js" class="highlight-js"><span class="nx">expect</span><span class="p">(</span><span class="s1">'long string'</span><span class="p">).</span><span class="nx">toMatch</span><span class="p">(</span><span class="s1">'str'</span><span class="p">)</span>
<span class="nx">expect</span><span class="p">(</span><span class="s1">'string'</span><span class="p">).</span><span class="nx">toEqual</span><span class="p">(</span><span class="nx">expect</span><span class="p">.</span><span class="nx">any</span><span class="p">(</span><span class="nb">String</span><span class="p">))</span>
<span class="nx">expect</span><span class="p">(</span><span class="s1">'coffee'</span><span class="p">).</span><span class="nx">toMatch</span><span class="p">(</span><span class="sr">/ff/</span><span class="p">)</span>
<span class="nx">expect</span><span class="p">(</span><span class="s1">'pizza'</span><span class="p">).</span><span class="nx">not</span><span class="p">.</span><span class="nx">toMatch</span><span class="p">(</span><span class="s1">'coffee'</span><span class="p">)</span>
<span class="nx">expect</span><span class="p">([</span><span class="s1">'pizza'</span><span class="p">,</span> <span class="s1">'coffee'</span><span class="p">]).</span><span class="nx">toEqual</span><span class="p">([</span><span class="nx">expect</span><span class="p">.</span><span class="nx">stringContaining</span><span class="p">(</span><span class="s1">'zz'</span><span class="p">),</span> <span class="nx">expect</span><span class="p">.</span><span class="nx">stringMatching</span><span class="p">(</span><span class="sr">/ff/</span><span class="p">)])</span>
</pre>
<h3>
<a id="arrays" class="anchor" href="#arrays" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Arrays</h3>
<pre lang="js" class="highlight-js"><span class="nx">expect</span><span class="p">([]).</span><span class="nx">toEqual</span><span class="p">(</span><span class="nx">expect</span><span class="p">.</span><span class="nx">any</span><span class="p">(</span><span class="nb">Array</span><span class="p">))</span>
<span class="nx">expect</span><span class="p">([</span><span class="s1">'Alice'</span><span class="p">,</span> <span class="s1">'Bob'</span><span class="p">,</span> <span class="s1">'Eve'</span><span class="p">]).</span><span class="nx">toHaveLength</span><span class="p">(</span><span class="mi">3</span><span class="p">)</span>
<span class="nx">expect</span><span class="p">([</span><span class="s1">'Alice'</span><span class="p">,</span> <span class="s1">'Bob'</span><span class="p">,</span> <span class="s1">'Eve'</span><span class="p">]).</span><span class="nx">toContain</span><span class="p">(</span><span class="s1">'Alice'</span><span class="p">)</span>
<span class="nx">expect</span><span class="p">([{</span> <span class="na">a</span><span class="p">:</span> <span class="mi">1</span> <span class="p">},</span> <span class="p">{</span> <span class="na">a</span><span class="p">:</span> <span class="mi">2</span> <span class="p">}]).</span><span class="nx">toContainEqual</span><span class="p">({</span> <span class="na">a</span><span class="p">:</span> <span class="mi">1</span> <span class="p">})</span>
<span class="nx">expect</span><span class="p">([</span><span class="s1">'Alice'</span><span class="p">,</span> <span class="s1">'Bob'</span><span class="p">,</span> <span class="s1">'Eve'</span><span class="p">]).</span><span class="nx">toEqual</span><span class="p">(</span><span class="nx">expect</span><span class="p">.</span><span class="nx">arrayContaining</span><span class="p">([</span><span class="s1">'Alice'</span><span class="p">,</span> <span class="s1">'Bob'</span><span class="p">]))</span>
</pre>
<h3>
<a id="objects" class="anchor" href="#objects" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Objects</h3>
<pre lang="js" class="highlight-js"><span class="nx">expect</span><span class="p">({</span> <span class="na">a</span><span class="p">:</span> <span class="mi">1</span> <span class="p">}).</span><span class="nx">toHaveProperty</span><span class="p">(</span><span class="s1">'a'</span><span class="p">)</span>
<span class="nx">expect</span><span class="p">({</span> <span class="na">a</span><span class="p">:</span> <span class="mi">1</span> <span class="p">}).</span><span class="nx">toHaveProperty</span><span class="p">(</span><span class="s1">'a'</span><span class="p">,</span> <span class="mi">1</span><span class="p">)</span>
<span class="nx">expect</span><span class="p">({</span> <span class="na">a</span><span class="p">:</span> <span class="p">{</span> <span class="na">b</span><span class="p">:</span> <span class="mi">1</span> <span class="p">}</span> <span class="p">}).</span><span class="nx">toHaveProperty</span><span class="p">(</span><span class="s1">'a.b'</span><span class="p">)</span>
<span class="nx">expect</span><span class="p">({</span> <span class="na">a</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span> <span class="na">b</span><span class="p">:</span> <span class="mi">2</span> <span class="p">}).</span><span class="nx">toMatchObject</span><span class="p">({</span> <span class="na">a</span><span class="p">:</span> <span class="mi">1</span> <span class="p">})</span>
<span class="nx">expect</span><span class="p">({</span> <span class="na">a</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span> <span class="na">b</span><span class="p">:</span> <span class="mi">2</span> <span class="p">}).</span><span class="nx">toMatchObject</span><span class="p">({</span>
  <span class="na">a</span><span class="p">:</span> <span class="nx">expect</span><span class="p">.</span><span class="nx">any</span><span class="p">(</span><span class="nb">Number</span><span class="p">),</span>
  <span class="na">b</span><span class="p">:</span> <span class="nx">expect</span><span class="p">.</span><span class="nx">any</span><span class="p">(</span><span class="nb">Number</span><span class="p">)</span>
<span class="p">})</span>
<span class="nx">expect</span><span class="p">([{</span> <span class="na">a</span><span class="p">:</span> <span class="mi">1</span> <span class="p">},</span> <span class="p">{</span> <span class="na">b</span><span class="p">:</span> <span class="mi">2</span> <span class="p">}]).</span><span class="nx">toEqual</span><span class="p">([</span>
  <span class="nx">expect</span><span class="p">.</span><span class="nx">objectContaining</span><span class="p">({</span> <span class="na">a</span><span class="p">:</span> <span class="nx">expect</span><span class="p">.</span><span class="nx">any</span><span class="p">(</span><span class="nb">Number</span><span class="p">)</span> <span class="p">}),</span>
  <span class="nx">expect</span><span class="p">.</span><span class="nx">anything</span><span class="p">()</span>
<span class="p">])</span>
</pre>
<h3>
<a id="exceptions" class="anchor" href="#exceptions" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Exceptions</h3>
<pre lang="js" class="highlight-js"><span class="c1">// const fn = () =&gt; { throw new Error('Out of cheese!') }</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">fn</span><span class="p">).</span><span class="nx">toThrow</span><span class="p">()</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">fn</span><span class="p">).</span><span class="nx">toThrow</span><span class="p">(</span><span class="s1">'Out of cheese'</span><span class="p">)</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">fn</span><span class="p">).</span><span class="nx">toThrowErrorMatchingSnapshot</span><span class="p">()</span>
</pre>
<details>
  <summary>Aliases</summary>
<ul>
<li>
<code>toThrowError</code> → <code>toThrow</code>
</li>
</ul></details>

<h3>
<a id="snapshots" class="anchor" href="#snapshots" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Snapshots</h3>
<pre lang="js" class="highlight-js"><span class="nx">expect</span><span class="p">(</span><span class="nx">node</span><span class="p">).</span><span class="nx">toMatchSnapshot</span><span class="p">()</span>
<span class="c1">// Jest 23+</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">user</span><span class="p">).</span><span class="nx">toMatchSnapshot</span><span class="p">({</span>
  <span class="na">date</span><span class="p">:</span> <span class="nx">expect</span><span class="p">.</span><span class="nx">any</span><span class="p">(</span><span class="nb">Date</span><span class="p">)</span>
<span class="p">})</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">user</span><span class="p">).</span><span class="nx">toMatchInlineSnapshot</span><span class="p">()</span>
</pre>
<h3>
<a id="mock-functions" class="anchor" href="#mock-functions" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Mock functions</h3>
<pre lang="js" class="highlight-js"><span class="c1">// const fn = jest.fn()</span>
<span class="c1">// const fn = jest.fn().mockName('Unicorn') -- named mock, Jest 22+</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">fn</span><span class="p">).</span><span class="nx">toBeCalled</span><span class="p">()</span> <span class="c1">// Function was called</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">fn</span><span class="p">).</span><span class="nx">not</span><span class="p">.</span><span class="nx">toBeCalled</span><span class="p">()</span> <span class="c1">// Function was *not* called</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">fn</span><span class="p">).</span><span class="nx">toHaveBeenCalledTimes</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span> <span class="c1">// Function was called only once</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">fn</span><span class="p">).</span><span class="nx">toBeCalledWith</span><span class="p">(</span><span class="nx">arg1</span><span class="p">,</span> <span class="nx">arg2</span><span class="p">)</span> <span class="c1">// Any of calls was with these arguments</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">fn</span><span class="p">).</span><span class="nx">toHaveBeenLastCalledWith</span><span class="p">(</span><span class="nx">arg1</span><span class="p">,</span> <span class="nx">arg2</span><span class="p">)</span> <span class="c1">// Last call was with these arguments</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">fn</span><span class="p">).</span><span class="nx">toHaveBeenNthCalledWith</span><span class="p">(</span><span class="nx">args</span><span class="p">)</span> <span class="c1">// Nth call was with these arguments (Jest 23+)</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">fn</span><span class="p">).</span><span class="nx">toHaveReturnedTimes</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span> <span class="c1">// Function was returned without throwing an error (Jest 23+)</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">fn</span><span class="p">).</span><span class="nx">toHaveReturnedWith</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="c1">// Function returned a value (Jest 23+)</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">fn</span><span class="p">).</span><span class="nx">toHaveLastReturnedWith</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="c1">// Last function call returned a value (Jest 23+)</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">fn</span><span class="p">).</span><span class="nx">toHaveNthReturnedWith</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="c1">// Nth function call returned a value (Jest 23+)</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">fn</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">calls</span><span class="p">).</span><span class="nx">toEqual</span><span class="p">([[</span><span class="s1">'first'</span><span class="p">,</span> <span class="s1">'call'</span><span class="p">,</span> <span class="s1">'args'</span><span class="p">],</span> <span class="p">[</span><span class="s1">'second'</span><span class="p">,</span> <span class="s1">'call'</span><span class="p">,</span> <span class="s1">'args'</span><span class="p">]])</span> <span class="c1">// Multiple calls</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">fn</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">calls</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">0</span><span class="p">]).</span><span class="nx">toBe</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span> <span class="c1">// fn.mock.calls[0][0] — the first argument of the first call</span>
</pre>
<details open="">
  <summary>Aliases</summary>
<ul>
<li>
<code>toBeCalled</code> → <code>toHaveBeenCalled</code>
</li>
<li>
<code>toBeCalledWith</code> → <code>toHaveBeenCalledWith</code>
</li>
<li>
<code>lastCalledWith</code> → <code>toHaveBeenLastCalledWith</code>
</li>
<li>
<code>nthCalledWith</code> → <code>toHaveBeenNthCalledWith</code>
</li>
<li>
<code>toReturnTimes</code> → <code>toHaveReturnedTimes</code>
</li>
<li>
<code>toReturnWith</code> → <code>toHaveReturnedWith</code>
</li>
<li>
<code>lastReturnedWith</code>&nbsp;→ <code>toHaveLastReturnedWith</code>
</li>
<li>
<code>nthReturnedWith</code> →&nbsp;<code>toHaveNthReturnedWith</code>
</li>
</ul></details>

<h3>
<a id="misc" class="anchor" href="#misc" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Misc</h3>
<pre lang="js" class="highlight-js"><span class="nx">expect</span><span class="p">(</span><span class="k">new</span> <span class="nx">A</span><span class="p">()).</span><span class="nx">toBeInstanceOf</span><span class="p">(</span><span class="nx">A</span><span class="p">)</span>
<span class="nx">expect</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">{}).</span><span class="nx">toEqual</span><span class="p">(</span><span class="nx">expect</span><span class="p">.</span><span class="nx">any</span><span class="p">(</span><span class="nb">Function</span><span class="p">))</span>
<span class="nx">expect</span><span class="p">(</span><span class="s1">'pizza'</span><span class="p">).</span><span class="nx">toEqual</span><span class="p">(</span><span class="nx">expect</span><span class="p">.</span><span class="nx">anything</span><span class="p">())</span>
</pre>
<h3>
<a id="promise-matchers-jest-20" class="anchor" href="#promise-matchers-jest-20" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Promise matchers (Jest 20+)</h3>
<pre lang="js" class="highlight-js"><span class="nx">test</span><span class="p">(</span><span class="s1">'resolve to lemon'</span><span class="p">,</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>
  <span class="nx">expect</span><span class="p">.</span><span class="nx">assertions</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>
  <span class="c1">// Make sure to add a return statement</span>
  <span class="k">return</span> <span class="nx">expect</span><span class="p">(</span><span class="nb">Promise</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="s1">'lemon'</span><span class="p">)).</span><span class="nx">resolves</span><span class="p">.</span><span class="nx">toBe</span><span class="p">(</span><span class="s1">'lemon'</span><span class="p">)</span>
  <span class="k">return</span> <span class="nx">expect</span><span class="p">(</span><span class="nb">Promise</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="s1">'octopus'</span><span class="p">)).</span><span class="nx">rejects</span><span class="p">.</span><span class="nx">toBeDefined</span><span class="p">()</span>
  <span class="k">return</span> <span class="nx">expect</span><span class="p">(</span><span class="nb">Promise</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="nb">Error</span><span class="p">(</span><span class="s1">'pizza'</span><span class="p">))).</span><span class="nx">rejects</span><span class="p">.</span><span class="nx">toThrow</span><span class="p">()</span>
<span class="p">})</span>
</pre>
<p>Or with async/await:</p>
<pre lang="js" class="highlight-js"><span class="nx">test</span><span class="p">(</span><span class="s1">'resolve to lemon'</span><span class="p">,</span> <span class="k">async</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>
  <span class="nx">expect</span><span class="p">.</span><span class="nx">assertions</span><span class="p">(</span><span class="mi">2</span><span class="p">)</span>
  <span class="kr">await</span> <span class="nx">expect</span><span class="p">(</span><span class="nb">Promise</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="s1">'lemon'</span><span class="p">)).</span><span class="nx">resolves</span><span class="p">.</span><span class="nx">toBe</span><span class="p">(</span><span class="s1">'lemon'</span><span class="p">)</span>
  <span class="kr">await</span> <span class="nx">expect</span><span class="p">(</span><span class="nb">Promise</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="s1">'lemon'</span><span class="p">)).</span><span class="nx">resolves</span><span class="p">.</span><span class="nx">not</span><span class="p">.</span><span class="nx">toBe</span><span class="p">(</span><span class="s1">'octopus'</span><span class="p">)</span>
<span class="p">})</span>
</pre>
<p><a href="https://facebook.github.io/jest/docs/en/expect.html#resolves" rel="nofollow">resolves docs</a></p>
<h2>
<a id="async-tests" class="anchor" href="#async-tests" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Async tests</h2>
<p>See <a href="https://facebook.github.io/jest/docs/en/tutorial-async.html" rel="nofollow">more examples</a> in Jest docs.</p>
<p>It’s a good practice to specify a number of expected assertions in async tests, so the test will fail if your assertions weren’t called at all.</p>
<pre lang="js" class="highlight-js"><span class="nx">test</span><span class="p">(</span><span class="s1">'async test'</span><span class="p">,</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>
  <span class="nx">expect</span><span class="p">.</span><span class="nx">assertions</span><span class="p">(</span><span class="mi">3</span><span class="p">)</span> <span class="c1">// Exactly three assertions are called during a test</span>
  <span class="c1">// OR</span>
  <span class="nx">expect</span><span class="p">.</span><span class="nx">hasAssertions</span><span class="p">()</span> <span class="c1">// At least one assertion is called during a test</span>

<span class="c1">// Your async tests</span>
<span class="p">})</span>

</pre>
<p>Note that you can also do this per file, outside any <code>describe</code> and <code>test</code>:</p>
<pre lang="js" class="highlight-js"><span class="nx">beforeEach</span><span class="p">(</span><span class="nx">expect</span><span class="p">.</span><span class="nx">hasAssertions</span><span class="p">)</span>
</pre>
<p>This will verify the presense of at least one assertion per test case. It also plays nice with more specific <code>expect.assertions(3)</code> declarations.</p>
<h3>
<a id="asyncawait" class="anchor" href="#asyncawait" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>async/await</h3>
<pre lang="js" class="highlight-js"><span class="nx">test</span><span class="p">(</span><span class="s1">'async test'</span><span class="p">,</span> <span class="k">async</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>
  <span class="nx">expect</span><span class="p">.</span><span class="nx">assertions</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>
  <span class="kd">const</span> <span class="nx">result</span> <span class="o">=</span> <span class="kr">await</span> <span class="nx">runAsyncOperation</span><span class="p">()</span>
  <span class="nx">expect</span><span class="p">(</span><span class="nx">result</span><span class="p">).</span><span class="nx">toBe</span><span class="p">(</span><span class="kc">true</span><span class="p">)</span>
<span class="p">})</span>
</pre>
<h3>
<a id="promises" class="anchor" href="#promises" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Promises</h3>
<p><em>Return</em> a Promise from your test:</p>
<pre lang="js" class="highlight-js"><span class="nx">test</span><span class="p">(</span><span class="s1">'async test'</span><span class="p">,</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>
  <span class="nx">expect</span><span class="p">.</span><span class="nx">assertions</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>
  <span class="k">return</span> <span class="nx">runAsyncOperation</span><span class="p">().</span><span class="nx">then</span><span class="p">(</span><span class="nx">result</span> <span class="o">=&gt;</span> <span class="p">{</span>
    <span class="nx">expect</span><span class="p">(</span><span class="nx">result</span><span class="p">).</span><span class="nx">toBe</span><span class="p">(</span><span class="kc">true</span><span class="p">)</span>
  <span class="p">})</span>
<span class="p">})</span>
</pre>
<h3>
<a id="donecallback" class="anchor" href="#donecallback" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>done()&nbsp;callback</h3>
<p>Wrap your assertions in try/catch block, otherwise Jest will ignore failures:</p>
<pre lang="js" class="highlight-js"><span class="nx">test</span><span class="p">(</span><span class="s1">'async test'</span><span class="p">,</span> <span class="nx">done</span> <span class="o">=&gt;</span> <span class="p">{</span>
  <span class="nx">expect</span><span class="p">.</span><span class="nx">assertions</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>
  <span class="nx">runAsyncOperation</span><span class="p">()</span>
  <span class="nx">setTimeout</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">{</span>
    <span class="k">try</span> <span class="p">{</span>
      <span class="kd">const</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">getAsyncOperationResult</span><span class="p">()</span>
      <span class="nx">expect</span><span class="p">(</span><span class="nx">result</span><span class="p">).</span><span class="nx">toBe</span><span class="p">(</span><span class="kc">true</span><span class="p">)</span>
      <span class="nx">done</span><span class="p">()</span>
    <span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">{</span>
      <span class="nx">done</span><span class="p">.</span><span class="nx">fail</span><span class="p">(</span><span class="nx">err</span><span class="p">)</span>
    <span class="p">}</span>
  <span class="p">})</span>
<span class="p">})</span>
</pre>
<h2>
<a id="mocks" class="anchor" href="#mocks" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Mocks</h2>
<h3>
<a id="mock-functions-1" class="anchor" href="#mock-functions-1" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Mock functions</h3>
<pre lang="js" class="highlight-js"><span class="nx">test</span><span class="p">(</span><span class="s1">'call the callback'</span><span class="p">,</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>
  <span class="kd">const</span> <span class="nx">callback</span> <span class="o">=</span> <span class="nx">jest</span><span class="p">.</span><span class="nx">fn</span><span class="p">()</span>
  <span class="nx">fn</span><span class="p">(</span><span class="nx">callback</span><span class="p">)</span>
  <span class="nx">expect</span><span class="p">(</span><span class="nx">callback</span><span class="p">).</span><span class="nx">toBeCalled</span><span class="p">()</span>
  <span class="nx">expect</span><span class="p">(</span><span class="nx">callback</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">calls</span><span class="p">[</span><span class="mi">0</span><span class="p">][</span><span class="mi">1</span><span class="p">].</span><span class="nx">baz</span><span class="p">).</span><span class="nx">toBe</span><span class="p">(</span><span class="s1">'pizza'</span><span class="p">)</span> <span class="c1">// Second argument of the first call</span>
<span class="p">})</span>
</pre>
<p>You can also use snapshots:</p>
<pre lang="js" class="highlight-js"><span class="nx">test</span><span class="p">(</span><span class="s1">'call the callback'</span><span class="p">,</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>
  <span class="kd">const</span> <span class="nx">callback</span> <span class="o">=</span> <span class="nx">jest</span><span class="p">.</span><span class="nx">fn</span><span class="p">().</span><span class="nx">mockName</span><span class="p">(</span><span class="s1">'Unicorn'</span><span class="p">)</span> <span class="c1">// mockName is available in Jest 22+</span>
  <span class="nx">fn</span><span class="p">(</span><span class="nx">callback</span><span class="p">)</span>
  <span class="nx">expect</span><span class="p">(</span><span class="nx">callback</span><span class="p">).</span><span class="nx">toMatchSnapshot</span><span class="p">()</span>
  <span class="c1">// -&gt;</span>
  <span class="c1">// [MockFunction Unicorn] {</span>
  <span class="c1">//   "calls": Array [</span>
  <span class="c1">// ...</span>
<span class="p">})</span>
</pre>
<p>And pass an implementation to <code>jest.fn</code> function:</p>
<pre lang="js" class="highlight-js"><span class="kd">const</span> <span class="nx">callback</span> <span class="o">=</span> <span class="nx">jest</span><span class="p">.</span><span class="nx">fn</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="kc">true</span><span class="p">)</span>
</pre>
<p><a href="https://facebook.github.io/jest/docs/mock-function-api.html" rel="nofollow">Mock functions docs</a></p>
<h3>
<a id="returning-resolving-and-rejecting-values" class="anchor" href="#returning-resolving-and-rejecting-values" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Returning, resolving and rejecting values</h3>
<p>Your mocks can return values:</p>
<pre lang="js" class="highlight-js"><span class="kd">const</span> <span class="nx">callback</span> <span class="o">=</span> <span class="nx">jest</span><span class="p">.</span><span class="nx">fn</span><span class="p">().</span><span class="nx">mockReturnValue</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>
<span class="kd">const</span> <span class="nx">callbackOnce</span> <span class="o">=</span> <span class="nx">jest</span><span class="p">.</span><span class="nx">fn</span><span class="p">().</span><span class="nx">mockReturnValueOnce</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>
</pre>
<p>Or resolve values:</p>
<pre lang="js" class="highlight-js"><span class="kd">const</span> <span class="nx">promise</span> <span class="o">=</span> <span class="nx">jest</span><span class="p">.</span><span class="nx">fn</span><span class="p">().</span><span class="nx">mockResolvedValue</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>
<span class="kd">const</span> <span class="nx">promiseOnce</span> <span class="o">=</span> <span class="nx">jest</span><span class="p">.</span><span class="nx">fn</span><span class="p">().</span><span class="nx">mockResolvedValueOnce</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>
</pre>
<p>They can even reject values:</p>
<pre lang="js" class="highlight-js"><span class="kd">const</span> <span class="nx">failedPromise</span> <span class="o">=</span> <span class="nx">jest</span><span class="p">.</span><span class="nx">fn</span><span class="p">().</span><span class="nx">mockRejectedValue</span><span class="p">(</span><span class="s2">"Error"</span><span class="p">);</span>
<span class="kd">const</span> <span class="nx">failedPromiseOnce</span> <span class="o">=</span> <span class="nx">jest</span><span class="p">.</span><span class="nx">fn</span><span class="p">().</span><span class="nx">mockRejectedValueOnce</span><span class="p">(</span><span class="s2">"Error"</span><span class="p">);</span>
</pre>
<p>You can even combine these:</p>
<pre lang="js" class="highlight-js"><span class="kd">const</span> <span class="nx">callback</span> <span class="o">=</span> <span class="nx">jest</span><span class="p">.</span><span class="nx">fn</span><span class="p">()</span>
  <span class="p">.</span><span class="nx">mockReturnValueOnce</span><span class="p">(</span><span class="kc">false</span><span class="p">)</span>
  <span class="p">.</span><span class="nx">mockReturnValue</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span>

<span class="c1">// -&gt;</span>
<span class="c1">// call 1: false</span>
<span class="c1">// call 2+: true</span>

</pre>
<h3>
<a id="mock-modules-using-jestmock-method" class="anchor" href="#mock-modules-using-jestmock-method" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Mock modules using <code>jest.mock</code> method</h3>
<pre lang="js" class="highlight-js"><span class="nx">jest</span><span class="p">.</span><span class="nx">mock</span><span class="p">(</span><span class="s1">'lodash/memoize'</span><span class="p">,</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="nx">a</span> <span class="o">=&gt;</span> <span class="nx">a</span><span class="p">)</span> <span class="c1">// The original lodash/memoize should exist</span>
<span class="nx">jest</span><span class="p">.</span><span class="nx">mock</span><span class="p">(</span><span class="s1">'lodash/memoize'</span><span class="p">,</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="nx">a</span> <span class="o">=&gt;</span> <span class="nx">a</span><span class="p">,</span> <span class="p">{</span> <span class="na">virtual</span><span class="p">:</span> <span class="kc">true</span> <span class="p">})</span> <span class="c1">// The original lodash/memoize isn’t required</span>
</pre>
<p><a href="https://facebook.github.io/jest/docs/jest-object.html#jestmockmodulename-factory-options" rel="nofollow">jest.mock docs</a></p>
<blockquote>
<p>Note: When using <code>babel-jest</code>, calls to <code>jest.mock</code> will automatically be hoisted to the top of the code block. Use <code>jest.doMock</code> if you want to explicitly avoid this behavior.</p>
</blockquote>
<h3>
<a id="mock-modules-using-a-mock-file" class="anchor" href="#mock-modules-using-a-mock-file" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Mock modules using a mock file</h3>
<ol>
<li>
<p>Create a file like <code>__mocks__/lodash/memoize.js</code>:</p>
<pre lang="js" class="highlight-js"><span class="nx">module</span><span class="p">.</span><span class="nx">exports</span> <span class="o">=</span> <span class="nx">a</span> <span class="o">=&gt;</span> <span class="nx">a</span>
</pre>
</li>
<li>
<p>Add to your test:</p>
<pre lang="js" class="highlight-js"><span class="nx">jest</span><span class="p">.</span><span class="nx">mock</span><span class="p">(</span><span class="s1">'lodash/memoize'</span><span class="p">)</span>
</pre>
</li>
</ol>
<blockquote>
<p>Note: When using <code>babel-jest</code>, calls to <code>jest.mock</code> will automatically be hoisted to the top of the code block. Use <code>jest.doMock</code> if you want to explicitly avoid this behavior.</p>
</blockquote>
<p><a href="https://facebook.github.io/jest/docs/manual-mocks.html" rel="nofollow">Manual mocks docs</a></p>
<h3>
<a id="mock-object-methods" class="anchor" href="#mock-object-methods" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Mock object methods</h3>
<pre lang="js" class="highlight-js"><span class="kd">const</span> <span class="nx">spy</span> <span class="o">=</span> <span class="nx">jest</span><span class="p">.</span><span class="nx">spyOn</span><span class="p">(</span><span class="nx">console</span><span class="p">,</span> <span class="s1">'log'</span><span class="p">).</span><span class="nx">mockImplementation</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">{})</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">calls</span><span class="p">).</span><span class="nx">toEqual</span><span class="p">([[</span><span class="s1">'dope'</span><span class="p">],</span> <span class="p">[</span><span class="s1">'nope'</span><span class="p">]])</span>
<span class="nx">spy</span><span class="p">.</span><span class="nx">mockRestore</span><span class="p">()</span>
</pre>
<pre lang="js" class="highlight-js"><span class="kd">const</span> <span class="nx">spy</span> <span class="o">=</span> <span class="nx">jest</span><span class="p">.</span><span class="nx">spyOn</span><span class="p">(</span><span class="nx">ajax</span><span class="p">,</span> <span class="s1">'request'</span><span class="p">).</span><span class="nx">mockImplementation</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="nb">Promise</span><span class="p">.</span><span class="nx">resolve</span><span class="p">({</span> <span class="na">success</span><span class="p">:</span> <span class="kc">true</span> <span class="p">}))</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">spy</span><span class="p">).</span><span class="nx">toHaveBeenCalled</span><span class="p">()</span>
<span class="nx">spy</span><span class="p">.</span><span class="nx">mockRestore</span><span class="p">()</span>
</pre>
<h3>
<a id="mock-getters-and-setters-jest-2210" class="anchor" href="#mock-getters-and-setters-jest-2210" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Mock getters and setters (Jest 22.1.0+)</h3>
<pre lang="js" class="highlight-js"><span class="kd">const</span> <span class="nx">location</span> <span class="o">=</span> <span class="p">{}</span>
<span class="kd">const</span> <span class="nx">getTitle</span> <span class="o">=</span> <span class="nx">jest</span><span class="p">.</span><span class="nx">spyOn</span><span class="p">(</span><span class="nx">location</span><span class="p">,</span> <span class="s1">'title'</span><span class="p">,</span> <span class="s1">'get'</span><span class="p">).</span><span class="nx">mockImplementation</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="s1">'pizza'</span><span class="p">)</span>
<span class="kd">const</span> <span class="nx">setTitle</span> <span class="o">=</span> <span class="nx">jest</span><span class="p">.</span><span class="nx">spyOn</span><span class="p">(</span><span class="nx">location</span><span class="p">,</span> <span class="s1">'title'</span><span class="p">,</span> <span class="s1">'set'</span><span class="p">).</span><span class="nx">mockImplementation</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">{})</span>
</pre>
<h3>
<a id="mock-getters-and-setters" class="anchor" href="#mock-getters-and-setters" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Mock getters and setters</h3>
<pre lang="js" class="highlight-js"><span class="kd">const</span> <span class="nx">getTitle</span> <span class="o">=</span> <span class="nx">jest</span><span class="p">.</span><span class="nx">fn</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="s1">'pizza'</span><span class="p">)</span>
<span class="kd">const</span> <span class="nx">setTitle</span> <span class="o">=</span> <span class="nx">jest</span><span class="p">.</span><span class="nx">fn</span><span class="p">()</span>
<span class="kd">const</span> <span class="nx">location</span> <span class="o">=</span> <span class="p">{}</span>
<span class="nb">Object</span><span class="p">.</span><span class="nx">defineProperty</span><span class="p">(</span><span class="nx">location</span><span class="p">,</span> <span class="s1">'title'</span><span class="p">,</span> <span class="p">{</span>
  <span class="na">get</span><span class="p">:</span> <span class="nx">getTitle</span><span class="p">,</span>
  <span class="na">set</span><span class="p">:</span> <span class="nx">setTitle</span>
<span class="p">})</span>
</pre>
<h3>
<a id="clearing-and-restoring-mocks" class="anchor" href="#clearing-and-restoring-mocks" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Clearing and restoring mocks</h3>
<p>For one mock:</p>
<pre lang="js" class="highlight-js"><span class="nx">fn</span><span class="p">.</span><span class="nx">mockClear</span><span class="p">()</span> <span class="c1">// Clears mock usage date (fn.mock.calls, fn.mock.instances)</span>
<span class="nx">fn</span><span class="p">.</span><span class="nx">mockReset</span><span class="p">()</span> <span class="c1">// Clears and removes any mocked return values or implementations</span>
<span class="nx">fn</span><span class="p">.</span><span class="nx">mockRestore</span><span class="p">()</span> <span class="c1">// Resets and restores the initial implementation</span>
</pre>
<blockquote>
<p>Note: <code>mockRestore</code>&nbsp;works only with mocks created by <code>jest.spyOn</code>.</p>
</blockquote>
<p>For all mocks:</p>
<pre lang="js" class="highlight-js"><span class="nx">jest</span><span class="p">.</span><span class="nx">clearAllMocks</span><span class="p">()</span>
<span class="nx">jest</span><span class="p">.</span><span class="nx">resetAllMocks</span><span class="p">()</span>
<span class="nx">jest</span><span class="p">.</span><span class="nx">restoreAllMocks</span><span class="p">()</span>
</pre>
<h3>
<a id="accessing-the-original-module-when-using-mocks" class="anchor" href="#accessing-the-original-module-when-using-mocks" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Accessing the original module when using mocks</h3>
<pre lang="js" class="highlight-js"><span class="nx">jest</span><span class="p">.</span><span class="nx">mock</span><span class="p">(</span><span class="s1">'fs'</span><span class="p">)</span>
<span class="kd">const</span> <span class="nx">fs</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s1">'fs'</span><span class="p">)</span> <span class="c1">// Mocked module</span>
<span class="kd">const</span> <span class="nx">fs</span> <span class="o">=</span> <span class="nx">require</span><span class="p">.</span><span class="nx">requireActual</span><span class="p">(</span><span class="s1">'fs'</span><span class="p">)</span> <span class="c1">// Original module</span>
</pre>
<h3>
<a id="timer-mocks" class="anchor" href="#timer-mocks" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Timer mocks</h3>
<p>Write synchronous test for code that uses native timer functions (<code>setTimeout</code>, <code>setInterval</code>, <code>clearTimeout</code>, <code>clearInterval</code>).</p>
<pre lang="js" class="highlight-js"><span class="c1">// Enable fake timers</span>
<span class="nx">jest</span><span class="p">.</span><span class="nx">useFakeTimers</span><span class="p">()</span>

<span class="nx">test</span><span class="p">(</span><span class="s1">'kill the time'</span><span class="p">,</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>
<span class="kd">const</span> <span class="nx">callback</span> <span class="o">=</span> <span class="nx">jest</span><span class="p">.</span><span class="nx">fn</span><span class="p">()</span>

<span class="c1">// Run some code that uses setTimeout or setInterval</span>
<span class="kd">const</span> <span class="nx">actual</span> <span class="o">=</span> <span class="nx">someFunctionThatUseTimers</span><span class="p">(</span><span class="nx">callback</span><span class="p">)</span>

<span class="c1">// Fast-forward until all timers have been executed</span>
<span class="nx">jest</span><span class="p">.</span><span class="nx">runAllTimers</span><span class="p">()</span>

<span class="c1">// Check the results synchronously</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">callback</span><span class="p">).</span><span class="nx">toHaveBeenCalledTimes</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>
<span class="p">})</span>

</pre>
<p>Or adjust timers by time with <a href="https://jestjs.io/docs/en/timer-mocks#advance-timers-by-time" rel="nofollow">advanceTimersByTime()</a>:</p>
<pre lang="js" class="highlight-js"><span class="c1">// Enable fake timers</span>
<span class="nx">jest</span><span class="p">.</span><span class="nx">useFakeTimers</span><span class="p">()</span>

<span class="nx">test</span><span class="p">(</span><span class="s1">'kill the time'</span><span class="p">,</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>
<span class="kd">const</span> <span class="nx">callback</span> <span class="o">=</span> <span class="nx">jest</span><span class="p">.</span><span class="nx">fn</span><span class="p">()</span>

<span class="c1">// Run some code that uses setTimeout or setInterval</span>
<span class="kd">const</span> <span class="nx">actual</span> <span class="o">=</span> <span class="nx">someFunctionThatUseTimers</span><span class="p">(</span><span class="nx">callback</span><span class="p">)</span>

<span class="c1">// Fast-forward for 250 ms</span>
<span class="nx">jest</span><span class="p">.</span><span class="nx">advanceTimersByTime</span><span class="p">(</span><span class="mi">250</span><span class="p">)</span>

<span class="c1">// Check the results synchronously</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">callback</span><span class="p">).</span><span class="nx">toHaveBeenCalledTimes</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>
<span class="p">})</span>

</pre>
<p>Use <a href="https://jestjs.io/docs/en/timer-mocks#run-pending-timers" rel="nofollow">jest.runOnlyPendingTimers()</a> for special cases.</p>
<p><strong>Note:</strong> you should call <code>jest.useFakeTimers()</code> in your test case to use other fake timer methods.</p>
<h2>
<a id="data-driven-tests-jest-23" class="anchor" href="#data-driven-tests-jest-23" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Data-driven tests (Jest 23+)</h2>
<p>Run the same test with different data:</p>
<pre lang="js" class="highlight-js"><span class="nx">test</span><span class="p">.</span><span class="nx">each</span><span class="p">([[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">],</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">,</span> <span class="mi">3</span><span class="p">],</span> <span class="p">[</span><span class="mi">2</span><span class="p">,</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">3</span><span class="p">]])(</span><span class="s1">'.add(%s, %s)'</span><span class="p">,</span> <span class="p">(</span><span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">expected</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>
  <span class="nx">expect</span><span class="p">(</span><span class="nx">a</span> <span class="o">+</span> <span class="nx">b</span><span class="p">).</span><span class="nx">toBe</span><span class="p">(</span><span class="nx">expected</span><span class="p">)</span>
<span class="p">})</span>
</pre>
<p>Or the same using template literals:</p>
<pre lang="js" class="highlight-js"><span class="nx">test</span><span class="p">.</span><span class="nx">each</span><span class="s2">`
  a    | b    | expected
  </span><span class="p">${</span><span class="mi">1</span><span class="p">}</span><span class="s2"> | </span><span class="p">${</span><span class="mi">1</span><span class="p">}</span><span class="s2"> | </span><span class="p">${</span><span class="mi">2</span><span class="p">}</span><span class="s2">
  </span><span class="p">${</span><span class="mi">1</span><span class="p">}</span><span class="s2"> | </span><span class="p">${</span><span class="mi">2</span><span class="p">}</span><span class="s2"> | </span><span class="p">${</span><span class="mi">3</span><span class="p">}</span><span class="s2">
  </span><span class="p">${</span><span class="mi">2</span><span class="p">}</span><span class="s2"> | </span><span class="p">${</span><span class="mi">1</span><span class="p">}</span><span class="s2"> | </span><span class="p">${</span><span class="mi">3</span><span class="p">}</span><span class="s2">
`</span><span class="p">(</span><span class="s1">'returns $expected when $a is added $b'</span><span class="p">,</span> <span class="p">({</span> <span class="nx">a</span><span class="p">,</span> <span class="nx">b</span><span class="p">,</span> <span class="nx">expected</span> <span class="p">})</span> <span class="o">=&gt;</span> <span class="p">{</span>
  <span class="nx">expect</span><span class="p">(</span><span class="nx">a</span> <span class="o">+</span> <span class="nx">b</span><span class="p">).</span><span class="nx">toBe</span><span class="p">(</span><span class="nx">expected</span><span class="p">)</span>
<span class="p">})</span>
</pre>
<p>Or on <code>describe</code> level:</p>
<pre lang="js" class="highlight-js"><span class="nx">describe</span><span class="p">.</span><span class="nx">each</span><span class="p">([[</span><span class="s1">'mobile'</span><span class="p">],</span> <span class="p">[</span><span class="s1">'tablet'</span><span class="p">],</span> <span class="p">[</span><span class="s1">'desktop'</span><span class="p">]])(</span><span class="s1">'checkout flow on %s'</span><span class="p">,</span> <span class="p">(</span><span class="nx">viewport</span><span class="p">)</span> <span class="o">=&gt;</span> <span class="p">{</span>
  <span class="nx">test</span><span class="p">(</span><span class="s1">'displays success page'</span><span class="p">,</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>
    <span class="c1">// </span>
  <span class="p">})</span>
<span class="p">})</span>
</pre>
<p><a href="https://jestjs.io/docs/en/api.html#describeeachtablename-fn-timeout" rel="nofollow">describe.each() docs</a>, <a href="https://jestjs.io/docs/en/api.html#testeachtablename-fn-timeout" rel="nofollow">test.each() docs</a>,</p>
<h2>
<a id="skipping-tests" class="anchor" href="#skipping-tests" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Skipping tests</h2>
<p>Don’t run these tests:</p>
<pre lang="js" class="highlight-js"><span class="nx">describe</span><span class="p">.</span><span class="nx">skip</span><span class="p">(</span><span class="s1">'makePoniesPink'</span><span class="p">...</span>
<span class="nx">tests</span><span class="p">.</span><span class="nx">skip</span><span class="p">(</span><span class="s1">'make each pony pink'</span><span class="p">...</span>
</pre>
<p>Run only these tests:</p>
<pre lang="js" class="highlight-js"><span class="nx">describe</span><span class="p">.</span><span class="nx">only</span><span class="p">(</span><span class="s1">'makePoniesPink'</span><span class="p">...</span>
<span class="nx">tests</span><span class="p">.</span><span class="nx">only</span><span class="p">(</span><span class="s1">'make each pony pink'</span><span class="p">...</span>
</pre>
<h2>
<a id="testing-modules-with-side-effects" class="anchor" href="#testing-modules-with-side-effects" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Testing modules with side effects</h2>
<p>Node.js and Jest will cache modules you <code>require</code>. To test modules with side effects you’ll need to reset the module registry between tests:</p>
<pre lang="js" class="highlight-js"><span class="kd">const</span> <span class="nx">modulePath</span> <span class="o">=</span> <span class="s1">'../module-to-test'</span>

<span class="nx">afterEach</span><span class="p">(()</span> <span class="o">=&gt;</span> <span class="p">{</span>
<span class="nx">jest</span><span class="p">.</span><span class="nx">resetModules</span><span class="p">()</span>
<span class="p">})</span>

<span class="nx">test</span><span class="p">(</span><span class="s1">'first test'</span><span class="p">,</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>
<span class="c1">// Prepare conditions for the first test</span>
<span class="kd">const</span> <span class="nx">result</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="nx">modulePath</span><span class="p">)</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">result</span><span class="p">).</span><span class="nx">toMatchSnapshot</span><span class="p">()</span>
<span class="p">})</span>

<span class="nx">test</span><span class="p">(</span><span class="s1">'second text'</span><span class="p">,</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="p">{</span>
<span class="c1">// Prepare conditions for the second test</span>
<span class="kd">const</span> <span class="nx">fn</span> <span class="o">=</span> <span class="p">()</span> <span class="o">=&gt;</span> <span class="nx">require</span><span class="p">(</span><span class="nx">modulePath</span><span class="p">)</span>
<span class="nx">expect</span><span class="p">(</span><span class="nx">fn</span><span class="p">).</span><span class="nx">toThrow</span><span class="p">()</span>
<span class="p">})</span>

</pre>
<h2>
<a id="usage-with-babel-and-typescript" class="anchor" href="#usage-with-babel-and-typescript" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Usage with Babel and TypeScript</h2>
<p>Add <a href="https://github.com/facebook/jest/tree/master/packages/babel-jest" rel="nofollow">babel-jest</a> or <a href="https://github.com/kulshekhar/ts-jest" rel="nofollow">ts-jest</a>. Check their docs for installation instructions.</p>
<h2>
<a id="resources" class="anchor" href="#resources" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Resources</h2>
<ul>
<li><a href="https://facebook.github.io/jest/" rel="nofollow">Jest site</a></li>
<li>
<a href="https://blog.sapegin.me/all/react-testing-1-best-practices/" rel="nofollow">Modern React testing, part 1: best practices</a> by Artem Sapegin</li>
<li>
<a href="https://blog.sapegin.me/all/react-testing-2-jest-and-enzyme/" rel="nofollow">Modern React testing, part 2: Jest and Enzyme</a> by Artem Sapegin</li>
<li>
<a href="https://blog.sapegin.me/all/react-testing-3-jest-and-react-testing-library/" rel="nofollow">Modern React testing, part 3: Jest and React Testing Library</a> by Artem Sapegin</li>
<li><a href="https://react-testing-examples.com/" rel="nofollow">React Testing Examples</a></li>
<li>
<a href="https://youtu.be/59Ndb3YkLKA" rel="nofollow">Testing React Applications</a> by Max Stoiber</li>
<li>
<a href="https://blog.kentcdodds.com/effective-snapshot-testing-e0d1a2c28eca" rel="nofollow">Effective Snapshot Testing</a> by Kent C. Dodds</li>
<li>
<a href="https://medium.com/@kentcdodds/migrating-to-jest-881f75366e7e#.pc4s5ut6z" rel="nofollow">Migrating to Jest</a> by Kent C. Dodds</li>
<li>
<a href="http://browniefed.com/blog/migrating-ava-to-jest/" rel="nofollow">Migrating AVA to Jest</a> by Jason Brown</li>
<li>
<a href="https://semaphoreci.com/community/tutorials/how-to-test-react-and-mobx-with-jest" rel="nofollow">How to Test React and MobX with Jest</a> by Will Stern</li>
<li>
<a href="https://medium.com/@sapegin/testing-react-intl-components-with-jest-and-enzyme-f9d43d9c923e" rel="nofollow">Testing React Intl components with Jest and Enzyme</a> by Artem Sapegin</li>
<li>
<a href="https://medium.com/@stipsan/testing-with-jest-15-awesome-tips-and-tricks-42150ec4c262" rel="nofollow">Testing with Jest: 15 Awesome Tips and Tricks</a> by Stian Didriksen</li>
<li>Taking Advantage of Jest Matchers by Ben McCormick: <a href="https://benmccormick.org/2017/08/15/jest-matchers-1/" rel="nofollow">Part 1</a>, <a href="https://benmccormick.org/2017/09/04/jest-matchers-2/" rel="nofollow">Part 2</a>
</li>
</ul>
<hr>
<h2>
