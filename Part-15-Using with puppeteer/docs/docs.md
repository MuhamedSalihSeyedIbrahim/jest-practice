<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/Puppeteer.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Using with puppeteer</h1></header><article><div><span><p>With the <a href="/docs/en/configuration#globalsetup-string">Global Setup/Teardown</a> and <a href="/docs/en/configuration#testenvironment-string">Async Test Environment</a> APIs, Jest can work smoothly with <a href="https://github.com/GoogleChrome/puppeteer">puppeteer</a>.</p>
<blockquote>
<p>Generating code coverage for test files using Puppeteer is currently not possible if your test uses <code>page.$eval</code>, <code>page.$$eval</code> or <code>page.evaluate</code> as the passed function is executed outside of Jest&apos;s scope. Check out <a href="https://github.com/facebook/jest/issues/7962#issuecomment-495272339">issue #7962</a> on GitHub for a workaround.</p>
</blockquote>
<h2><a class="anchor" aria-hidden="true" id="use-jest-puppeteer-preset"></a><a href="#use-jest-puppeteer-preset" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Use jest-puppeteer Preset</h2>
<p><a href="https://github.com/smooth-code/jest-puppeteer">Jest Puppeteer</a> provides all required configuration to run your tests using Puppeteer.</p>
<ol>
<li>First install <code>jest-puppeteer</code></li>
</ol>
<pre><code class="hljs">yarn <span class="hljs-keyword">add</span><span class="bash"> --dev jest-puppeteer</span>
</code></pre>
<ol start="2">
<li>Specify preset in your Jest configuration:</li>
</ol>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;preset&quot;</span>: <span class="hljs-string">&quot;jest-puppeteer&quot;</span>
}
</code></pre>
<ol start="3">
<li>Write your test</li>
</ol>
<pre><code class="hljs css language-js">describe(<span class="hljs-string">&apos;Google&apos;</span>, () =&gt; {
  beforeAll(<span class="hljs-keyword">async</span> () =&gt; {
    <span class="hljs-keyword">await</span> page.goto(<span class="hljs-string">&apos;https://google.com&apos;</span>);
  });

it(<span class="hljs-string">&apos;should be titled &quot;Google&quot;&apos;</span>, <span class="hljs-keyword">async</span> () =&gt; {
<span class="hljs-keyword">await</span> expect(page.title()).resolves.toMatch(<span class="hljs-string">&apos;Google&apos;</span>);
});
});
</code></pre>

<p>There&apos;s no need to load any dependencies. Puppeteer&apos;s <code>page</code> and <code>browser</code> classes will automatically be exposed</p>
<p>See <a href="https://github.com/smooth-code/jest-puppeteer">documentation</a>.</p>
<h2><a class="anchor" aria-hidden="true" id="custom-example-without-jest-puppeteer-preset"></a><a href="#custom-example-without-jest-puppeteer-preset" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Custom example without jest-puppeteer preset</h2>
<p>You can also hook up puppeteer from scratch. The basic idea is to:</p>
<ol>
<li>launch &amp; file the websocket endpoint of puppeteer with Global Setup</li>
<li>connect to puppeteer from each Test Environment</li>
<li>close puppeteer with Global Teardown</li>
</ol>
<p>Here&apos;s an example of the GlobalSetup script</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// setup.js</span>
<span class="hljs-keyword">const</span> puppeteer = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;puppeteer&apos;</span>);
<span class="hljs-keyword">const</span> mkdirp = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;mkdirp&apos;</span>);
<span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;path&apos;</span>);
<span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;fs&apos;</span>);
<span class="hljs-keyword">const</span> os = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;os&apos;</span>);

<span class="hljs-keyword">const</span> DIR = path.join(os.tmpdir(), <span class="hljs-string">&apos;jest_puppeteer_global_setup&apos;</span>);

<span class="hljs-built_in">module</span>.exports = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
<span class="hljs-keyword">const</span> browser = <span class="hljs-keyword">await</span> puppeteer.launch();
<span class="hljs-comment">// store the browser instance so we can teardown it later</span>
<span class="hljs-comment">// this global is only available in the teardown but not in TestEnvironments</span>
global.**BROWSER_GLOBAL** = browser;

<span class="hljs-comment">// use the file system to expose the wsEndpoint for TestEnvironments</span>
mkdirp.sync(DIR);
fs.writeFileSync(path.join(DIR, <span class="hljs-string">&apos;wsEndpoint&apos;</span>), browser.wsEndpoint());
};
</code></pre>

<p>Then we need a custom Test Environment for puppeteer</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// puppeteer_environment.js</span>
<span class="hljs-keyword">const</span> NodeEnvironment = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;jest-environment-node&apos;</span>);
<span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;fs&apos;</span>);
<span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;path&apos;</span>);
<span class="hljs-keyword">const</span> puppeteer = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;puppeteer&apos;</span>);
<span class="hljs-keyword">const</span> os = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;os&apos;</span>);

<span class="hljs-keyword">const</span> DIR = path.join(os.tmpdir(), <span class="hljs-string">&apos;jest_puppeteer_global_setup&apos;</span>);

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">PuppeteerEnvironment</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">NodeEnvironment</span> </span>{
<span class="hljs-keyword">constructor</span>(config) {
<span class="hljs-keyword">super</span>(config);
}

<span class="hljs-keyword">async</span> setup() {
<span class="hljs-keyword">await</span> <span class="hljs-keyword">super</span>.setup();
<span class="hljs-comment">// get the wsEndpoint</span>
<span class="hljs-keyword">const</span> wsEndpoint = fs.readFileSync(path.join(DIR, <span class="hljs-string">&apos;wsEndpoint&apos;</span>), <span class="hljs-string">&apos;utf8&apos;</span>);
<span class="hljs-keyword">if</span> (!wsEndpoint) {
<span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&apos;wsEndpoint not found&apos;</span>);
}

    <span class="hljs-comment">// connect to puppeteer</span>
    <span class="hljs-keyword">this</span>.global.__BROWSER__ = <span class="hljs-keyword">await</span> puppeteer.connect({
      <span class="hljs-attr">browserWSEndpoint</span>: wsEndpoint,
    });

}

<span class="hljs-keyword">async</span> teardown() {
<span class="hljs-keyword">await</span> <span class="hljs-keyword">super</span>.teardown();
}

runScript(script) {
<span class="hljs-keyword">return</span> <span class="hljs-keyword">super</span>.runScript(script);
}
}

<span class="hljs-built_in">module</span>.exports = PuppeteerEnvironment;
</code></pre>

<p>Finally we can close the puppeteer instance and clean-up the file</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// teardown.js</span>
<span class="hljs-keyword">const</span> os = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;os&apos;</span>);
<span class="hljs-keyword">const</span> rimraf = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;rimraf&apos;</span>);
<span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;path&apos;</span>);

<span class="hljs-keyword">const</span> DIR = path.join(os.tmpdir(), <span class="hljs-string">&apos;jest_puppeteer_global_setup&apos;</span>);
<span class="hljs-built_in">module</span>.exports = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
<span class="hljs-comment">// close the browser instance</span>
<span class="hljs-keyword">await</span> global.**BROWSER_GLOBAL**.close();

<span class="hljs-comment">// clean-up the wsEndpoint file</span>
rimraf.sync(DIR);
};
</code></pre>

<p>With all the things set up, we can now write our tests like this:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// test.js</span>
<span class="hljs-keyword">const</span> timeout = <span class="hljs-number">5000</span>;

describe(
<span class="hljs-string">&apos;/ (Home Page)&apos;</span>,
() =&gt; {
<span class="hljs-keyword">let</span> page;
beforeAll(<span class="hljs-keyword">async</span> () =&gt; {
page = <span class="hljs-keyword">await</span> global.**BROWSER**.newPage();
<span class="hljs-keyword">await</span> page.goto(<span class="hljs-string">&apos;https://google.com&apos;</span>);
}, timeout);

    it(<span class="hljs-string">&apos;should load without error&apos;</span>, <span class="hljs-keyword">async</span> () =&gt; {
      <span class="hljs-keyword">const</span> text = <span class="hljs-keyword">await</span> page.evaluate(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-built_in">document</span>.body.textContent);
      expect(text).toContain(<span class="hljs-string">&apos;google&apos;</span>);
    });

},
timeout,
);
</code></pre>

<p>Finally, set <code>jest.config.js</code> to read from these files. (The <code>jest-puppeteer</code> preset does something like this under the hood.)</p>
<pre><code class="hljs css language-js"><span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">globalSetup</span>: <span class="hljs-string">&apos;./setup.js&apos;</span>,
  <span class="hljs-attr">globalTeardown</span>: <span class="hljs-string">&apos;./teardown.js&apos;</span>,
  <span class="hljs-attr">testEnvironment</span>: <span class="hljs-string">&apos;./puppeteer_environment.js&apos;</span>,
};
</code></pre>
<p>Here&apos;s the code of <a href="https://github.com/xfumihiro/jest-puppeteer-example">full working example</a>.</p>
</span></div></article>
