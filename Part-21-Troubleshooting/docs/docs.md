<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/Troubleshooting.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Troubleshooting</h1></header><article><div><span><p>Uh oh, something went wrong? Use this guide to resolve issues with Jest.</p>
<h2><a class="anchor" aria-hidden="true" id="tests-are-failing-and-you-dont-know-why"></a><a href="#tests-are-failing-and-you-dont-know-why" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Tests are Failing and You Don&apos;t Know Why</h2>
<p>Try using the debugging support built into Node. Note: This will only work in Node.js 8+.</p>
<p>Place a <code>debugger;</code> statement in any of your tests, and then, in your project&apos;s directory, run:</p>
<pre><code class="hljs css language-bash">node --inspect-brk node_modules/.bin/jest --runInBand [any other arguments here]
or on Windows
node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand [any other arguments here]
</code></pre>
<p>This will run Jest in a Node process that an external debugger can connect to. Note that the process will pause until the debugger has connected to it.</p>
<p>To debug in Google Chrome (or any Chromium-based browser), open your browser and go to <code>chrome://inspect</code> and click on &quot;Open Dedicated DevTools for Node&quot;, which will give you a list of available node instances you can connect to. Click on the address displayed in the terminal (usually something like <code>localhost:9229</code>) after running the above command, and you will be able to debug Jest using Chrome&apos;s DevTools.</p>
<p>The Chrome Developer Tools will be displayed, and a breakpoint will be set at the first line of the Jest CLI script (this is done to give you time to open the developer tools and to prevent Jest from executing before you have time to do so). Click the button that looks like a &quot;play&quot; button in the upper right hand side of the screen to continue execution. When Jest executes the test that contains the <code>debugger</code> statement, execution will pause and you can examine the current scope and call stack.</p>
<blockquote>
<p>Note: the <code>--runInBand</code> cli option makes sure Jest runs test in the same process rather than spawning processes for individual tests. Normally Jest parallelizes test runs across processes but it is hard to debug many processes at the same time.</p>
</blockquote>
<h2><a class="anchor" aria-hidden="true" id="debugging-in-vs-code"></a><a href="#debugging-in-vs-code" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Debugging in VS Code</h2>
<p>There are multiple ways to debug Jest tests with <a href="https://code.visualstudio.com">Visual Studio Code&apos;s</a> built in <a href="https://code.visualstudio.com/docs/nodejs/nodejs-debugging">debugger</a>.</p>
<p>To attach the built-in debugger, run your tests as aforementioned:</p>
<pre><code class="hljs css language-bash">node --inspect-brk node_modules/.bin/jest --runInBand [any other arguments here]
or on Windows
node --inspect-brk ./node_modules/jest/bin/jest.js --runInBand [any other arguments here]
</code></pre>
<p>Then attach VS Code&apos;s debugger using the following <code>launch.json</code> config:</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;version&quot;</span>: <span class="hljs-string">&quot;0.2.0&quot;</span>,
  <span class="hljs-attr">&quot;configurations&quot;</span>: [
    {
      <span class="hljs-attr">&quot;type&quot;</span>: <span class="hljs-string">&quot;node&quot;</span>,
      <span class="hljs-attr">&quot;request&quot;</span>: <span class="hljs-string">&quot;attach&quot;</span>,
      <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;Attach&quot;</span>,
      <span class="hljs-attr">&quot;port&quot;</span>: <span class="hljs-number">9229</span>
    }
  ]
}
</code></pre>
<p>To automatically launch and attach to a process running your tests, use the following configuration:</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;version&quot;</span>: <span class="hljs-string">&quot;0.2.0&quot;</span>,
  <span class="hljs-attr">&quot;configurations&quot;</span>: [
    {
      <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;Debug Jest Tests&quot;</span>,
      <span class="hljs-attr">&quot;type&quot;</span>: <span class="hljs-string">&quot;node&quot;</span>,
      <span class="hljs-attr">&quot;request&quot;</span>: <span class="hljs-string">&quot;launch&quot;</span>,
      <span class="hljs-attr">&quot;runtimeArgs&quot;</span>: [
        <span class="hljs-string">&quot;--inspect-brk&quot;</span>,
        <span class="hljs-string">&quot;${workspaceRoot}/node_modules/.bin/jest&quot;</span>,
        <span class="hljs-string">&quot;--runInBand&quot;</span>
      ],
      <span class="hljs-attr">&quot;console&quot;</span>: <span class="hljs-string">&quot;integratedTerminal&quot;</span>,
      <span class="hljs-attr">&quot;internalConsoleOptions&quot;</span>: <span class="hljs-string">&quot;neverOpen&quot;</span>,
      <span class="hljs-attr">&quot;port&quot;</span>: <span class="hljs-number">9229</span>
    }
  ]
}
</code></pre>
<p>or the following for Windows:</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;version&quot;</span>: <span class="hljs-string">&quot;0.2.0&quot;</span>,
  <span class="hljs-attr">&quot;configurations&quot;</span>: [
    {
      <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;Debug Jest Tests&quot;</span>,
      <span class="hljs-attr">&quot;type&quot;</span>: <span class="hljs-string">&quot;node&quot;</span>,
      <span class="hljs-attr">&quot;request&quot;</span>: <span class="hljs-string">&quot;launch&quot;</span>,
      <span class="hljs-attr">&quot;runtimeArgs&quot;</span>: [
        <span class="hljs-string">&quot;--inspect-brk&quot;</span>,
        <span class="hljs-string">&quot;${workspaceRoot}/node_modules/jest/bin/jest.js&quot;</span>,
        <span class="hljs-string">&quot;--runInBand&quot;</span>
      ],
      <span class="hljs-attr">&quot;console&quot;</span>: <span class="hljs-string">&quot;integratedTerminal&quot;</span>,
      <span class="hljs-attr">&quot;internalConsoleOptions&quot;</span>: <span class="hljs-string">&quot;neverOpen&quot;</span>,
      <span class="hljs-attr">&quot;port&quot;</span>: <span class="hljs-number">9229</span>
    }
  ]
}
</code></pre>
<p>If you are using Facebook&apos;s <a href="https://github.com/facebookincubator/create-react-app"><code>create-react-app</code></a>, you can debug your Jest tests with the following configuration:</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;version&quot;</span>: <span class="hljs-string">&quot;0.2.0&quot;</span>,
  <span class="hljs-attr">&quot;configurations&quot;</span>: [
    {
      <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;Debug CRA Tests&quot;</span>,
      <span class="hljs-attr">&quot;type&quot;</span>: <span class="hljs-string">&quot;node&quot;</span>,
      <span class="hljs-attr">&quot;request&quot;</span>: <span class="hljs-string">&quot;launch&quot;</span>,
      <span class="hljs-attr">&quot;runtimeExecutable&quot;</span>: <span class="hljs-string">&quot;${workspaceRoot}/node_modules/.bin/react-scripts&quot;</span>,
      <span class="hljs-attr">&quot;args&quot;</span>: [<span class="hljs-string">&quot;test&quot;</span>, <span class="hljs-string">&quot;--runInBand&quot;</span>, <span class="hljs-string">&quot;--no-cache&quot;</span>, <span class="hljs-string">&quot;--env=jsdom&quot;</span>],
      <span class="hljs-attr">&quot;cwd&quot;</span>: <span class="hljs-string">&quot;${workspaceRoot}&quot;</span>,
      <span class="hljs-attr">&quot;protocol&quot;</span>: <span class="hljs-string">&quot;inspector&quot;</span>,
      <span class="hljs-attr">&quot;console&quot;</span>: <span class="hljs-string">&quot;integratedTerminal&quot;</span>,
      <span class="hljs-attr">&quot;internalConsoleOptions&quot;</span>: <span class="hljs-string">&quot;neverOpen&quot;</span>
    }
  ]
}
</code></pre>
<p>More information on Node debugging can be found <a href="https://nodejs.org/api/debugger.html">here</a>.</p>
<h2><a class="anchor" aria-hidden="true" id="debugging-in-webstorm"></a><a href="#debugging-in-webstorm" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Debugging in WebStorm</h2>
<p>The easiest way to debug Jest tests in <a href="https://www.jetbrains.com/webstorm/">WebStorm</a> is using <code>Jest run/debug configuration</code>. It will launch tests and automatically attach debugger.</p>
<p>In the WebStorm menu <code>Run</code> select <code>Edit Configurations...</code>. Then click <code>+</code> and select <code>Jest</code>. Optionally specify the Jest configuration file, additional options, and environment variables. Save the configuration, put the breakpoints in the code, then click the green debug icon to start debugging.</p>
<p>If you are using Facebook&apos;s <a href="https://github.com/facebookincubator/create-react-app"><code>create-react-app</code></a>, in the Jest run/debug configuration specify the path to the <code>react-scripts</code> package in the Jest package field and add <code>--env=jsdom</code> to the Jest options field.</p>
<h2><a class="anchor" aria-hidden="true" id="caching-issues"></a><a href="#caching-issues" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Caching Issues</h2>
<p>The transform script was changed or Babel was updated and the changes aren&apos;t being recognized by Jest?</p>
<p>Retry with <a href="/docs/en/cli#--cache"><code>--no-cache</code></a>. Jest caches transformed module files to speed up test execution. If you are using your own custom transformer, consider adding a <code>getCacheKey</code> function to it: <a href="https://github.com/facebook/relay/blob/58cf36c73769690f0bbf90562707eadb062b029d/scripts/jest/preprocessor.js#L56-L61">getCacheKey in Relay</a>.</p>
<h2><a class="anchor" aria-hidden="true" id="unresolved-promises"></a><a href="#unresolved-promises" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Unresolved Promises</h2>
<p>If a promise doesn&apos;t resolve at all, this error might be thrown:</p>
<pre><code class="hljs css language-bash">- Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.`
</code></pre>
<p>Most commonly this is being caused by conflicting Promise implementations. Consider replacing the global promise implementation with your own, for example <code>global.Promise = jest.requireActual(&apos;promise&apos;);</code> and/or consolidate the used Promise libraries to a single one.</p>
<p>If your test is long running, you may want to consider to increase the timeout by calling <code>jest.setTimeout</code></p>
<pre><code class="hljs css language-js">jest.setTimeout(<span class="hljs-number">10000</span>); <span class="hljs-comment">// 10 second timeout</span>
</code></pre>
<h2><a class="anchor" aria-hidden="true" id="watchman-issues"></a><a href="#watchman-issues" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Watchman Issues</h2>
<p>Try running Jest with <a href="/docs/en/cli#--watchman"><code>--no-watchman</code></a> or set the <code>watchman</code> configuration option to <code>false</code>.</p>
<p>Also see <a href="https://facebook.github.io/watchman/docs/troubleshooting">watchman troubleshooting</a>.</p>
<h2><a class="anchor" aria-hidden="true" id="tests-are-extremely-slow-on-docker-andor-continuous-integration-ci-server"></a><a href="#tests-are-extremely-slow-on-docker-andor-continuous-integration-ci-server" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Tests are Extremely Slow on Docker and/or Continuous Integration (CI) server.</h2>
<p>While Jest is most of the time extremely fast on modern multi-core computers with fast SSDs, it may be slow on certain setups as our users <a href="https://github.com/facebook/jest/issues/1395">have</a> <a href="https://github.com/facebook/jest/issues/1524#issuecomment-260246008">discovered</a>.</p>
<p>Based on the <a href="https://github.com/facebook/jest/issues/1524#issuecomment-262366820">findings</a>, one way to mitigate this issue and improve the speed by up to 50% is to run tests sequentially.</p>
<p>In order to do this you can run tests in the same thread using <a href="/docs/en/cli#--runinband"><code>--runInBand</code></a>:</p>
<pre><code class="hljs css language-bash"><span class="hljs-comment"># Using Jest CLI</span>
jest --runInBand

<span class="hljs-comment"># Using yarn test (e.g. with create-react-app)</span>
yarn <span class="hljs-built_in">test</span> --runInBand
</code></pre>

<p>Another alternative to expediting test execution time on Continuous Integration Servers such as Travis-CI is to set the max worker pool to ~<em>4</em>. Specifically on Travis-CI, this can reduce test execution time in half. Note: The Travis CI <em>free</em> plan available for open source projects only includes 2 CPU cores.</p>
<pre><code class="hljs css language-bash"><span class="hljs-comment"># Using Jest CLI</span>
jest --maxWorkers=4

<span class="hljs-comment"># Using yarn test (e.g. with create-react-app)</span>
yarn <span class="hljs-built_in">test</span> --maxWorkers=4
</code></pre>

<h2><a class="anchor" aria-hidden="true" id="coveragepathignorepatterns-seems-to-not-have-any-effect"></a><a href="#coveragepathignorepatterns-seems-to-not-have-any-effect" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>coveragePathIgnorePatterns</code> seems to not have any effect.</h2>
<p>Make sure you are not using the <code>babel-plugin-istanbul</code> plugin. Jest wraps Istanbul, and therefore also tells Istanbul what files to instrument with coverage collection. When using <code>babel-plugin-istanbul</code>, every file that is processed by Babel will have coverage collection code, hence it is not being ignored by <code>coveragePathIgnorePatterns</code>.</p>
<h2><a class="anchor" aria-hidden="true" id="defining-tests"></a><a href="#defining-tests" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Defining Tests</h2>
<p>Tests must be defined synchronously for Jest to be able to collect your tests.</p>
<p>As an example to show why this is the case, imagine we wrote a test like so:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// Don&apos;t do this it will not work</span>
setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  it(<span class="hljs-string">&apos;passes&apos;</span>, () =&gt; expect(<span class="hljs-number">1</span>).toBe(<span class="hljs-number">1</span>));
}, <span class="hljs-number">0</span>);
</code></pre>
<p>When Jest runs your test to collect the <code>test</code>s it will not find any because we have set the definition to happen asynchronously on the next tick of the event loop.</p>
<p><em>Note:</em> This means when you are using <code>test.each</code> you cannot set the table asynchronously within a <code>beforeEach</code> / <code>beforeAll</code>.</p>
<h2><a class="anchor" aria-hidden="true" id="still-unresolved"></a><a href="#still-unresolved" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Still unresolved?</h2>
<p>See <a href="/help.html">Help</a>.</p>
</span></div></article>
