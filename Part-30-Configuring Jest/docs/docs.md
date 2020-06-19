<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/Configuration.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Configuring Jest</h1></header><article><div><span><p>Jest&apos;s configuration can be defined in the <code>package.json</code> file of your project, or through a <code>jest.config.js</code> file or through the <code>--config &lt;path/to/file.js|cjs|mjs|json&gt;</code> option. If you&apos;d like to use your <code>package.json</code> to store Jest&apos;s config, the <code>&quot;jest&quot;</code> key should be used on the top level so Jest will know how to find your settings:</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;my-project&quot;</span>,
  <span class="hljs-attr">&quot;jest&quot;</span>: {
    <span class="hljs-attr">&quot;verbose&quot;</span>: <span class="hljs-literal">true</span>
  }
}
</code></pre>
<p>Or through JavaScript:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// jest.config.js</span>
<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">verbose</span>: <span class="hljs-literal">true</span>,
};
</code></pre>
<p>Please keep in mind that the resulting configuration must be JSON-serializable.</p>
<p>When using the <code>--config</code> option, the JSON file must not contain a &quot;jest&quot; key:</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;bail&quot;</span>: <span class="hljs-number">1</span>,
  <span class="hljs-attr">&quot;verbose&quot;</span>: <span class="hljs-literal">true</span>
}
</code></pre>
<h2><a class="anchor" aria-hidden="true" id="options"></a><a href="#options" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Options</h2>
<p>These options let you control Jest&apos;s behavior in your <code>package.json</code> file. The Jest philosophy is to work great by default, but sometimes you just need more configuration power.</p>
<h3><a class="anchor" aria-hidden="true" id="defaults"></a><a href="#defaults" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Defaults</h3>
<p>You can retrieve Jest&apos;s default options to expand them if needed:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// jest.config.js</span>
<span class="hljs-keyword">const</span> {defaults} = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;jest-config&apos;</span>);
<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-comment">// ...</span>
  <span class="hljs-attr">moduleFileExtensions</span>: [...defaults.moduleFileExtensions, <span class="hljs-string">&apos;ts&apos;</span>, <span class="hljs-string">&apos;tsx&apos;</span>],
  <span class="hljs-comment">// ...</span>
};
</code></pre>
<ul>
<li><a href="#automock-boolean"><code>automock</code> [boolean]</a></li>
<li><a href="#bail-number--boolean"><code>bail</code> [number | boolean]</a></li>
<li><a href="#cachedirectory-string"><code>cacheDirectory</code> [string]</a></li>
<li><a href="#clearmocks-boolean"><code>clearMocks</code> [boolean]</a></li>
<li><a href="#collectcoverage-boolean"><code>collectCoverage</code> [boolean]</a></li>
<li><a href="#collectcoveragefrom-array"><code>collectCoverageFrom</code> [array]</a></li>
<li><a href="#coveragedirectory-string"><code>coverageDirectory</code> [string]</a></li>
<li><a href="#coveragepathignorepatterns-arraystring"><code>coveragePathIgnorePatterns</code> [array&lt;string&gt;]</a></li>
<li><a href="#coverageprovider-string"><code>coverageProvider</code> [string]</a></li>
<li><a href="#coveragereporters-arraystring--stringany"><code>coverageReporters</code> [array&lt;string | [string,any]&gt;]</a></li>
<li><a href="#coveragethreshold-object"><code>coverageThreshold</code> [object]</a></li>
<li><a href="#dependencyextractor-string"><code>dependencyExtractor</code> [string]</a></li>
<li><a href="#displayname-string-object"><code>displayName</code> [string, object]</a></li>
<li><a href="#errorondeprecated-boolean"><code>errorOnDeprecated</code> [boolean]</a></li>
<li><a href="#extraglobals-arraystring"><code>extraGlobals</code> [array&lt;string&gt;]</a></li>
<li><a href="#forcecoveragematch-arraystring"><code>forceCoverageMatch</code> [array&lt;string&gt;]</a></li>
<li><a href="#globals-object"><code>globals</code> [object]</a></li>
<li><a href="#globalsetup-string"><code>globalSetup</code> [string]</a></li>
<li><a href="#globalteardown-string"><code>globalTeardown</code> [string]</a></li>
<li><a href="#maxconcurrency-number"><code>maxConcurrency</code> [number]</a></li>
<li><a href="#moduledirectories-arraystring"><code>moduleDirectories</code> [array&lt;string&gt;]</a></li>
<li><a href="#modulefileextensions-arraystring"><code>moduleFileExtensions</code> [array&lt;string&gt;]</a></li>
<li><a href="#modulenamemapper-objectstring-string--arraystring"><code>moduleNameMapper</code> [object&lt;string, string | array&lt;string&gt;&gt;]</a></li>
<li><a href="#modulepathignorepatterns-arraystring"><code>modulePathIgnorePatterns</code> [array&lt;string&gt;]</a></li>
<li><a href="#modulepaths-arraystring"><code>modulePaths</code> [array&lt;string&gt;]</a></li>
<li><a href="#notify-boolean"><code>notify</code> [boolean]</a></li>
<li><a href="#notifymode-string"><code>notifyMode</code> [string]</a></li>
<li><a href="#preset-string"><code>preset</code> [string]</a></li>
<li><a href="#prettierpath-string"><code>prettierPath</code> [string]</a></li>
<li><a href="#projects-arraystring--projectconfig"><code>projects</code> [array&lt;string | ProjectConfig&gt;]</a></li>
<li><a href="#reporters-arraymodulename--modulename-options"><code>reporters</code> [array&lt;moduleName | [moduleName, options]&gt;]</a></li>
<li><a href="#resetmocks-boolean"><code>resetMocks</code> [boolean]</a></li>
<li><a href="#resetmodules-boolean"><code>resetModules</code> [boolean]</a></li>
<li><a href="#resolver-string"><code>resolver</code> [string]</a></li>
<li><a href="#restoremocks-boolean"><code>restoreMocks</code> [boolean]</a></li>
<li><a href="#rootdir-string"><code>rootDir</code> [string]</a></li>
<li><a href="#roots-arraystring"><code>roots</code> [array&lt;string&gt;]</a></li>
<li><a href="#runner-string"><code>runner</code> [string]</a></li>
<li><a href="#setupfiles-array"><code>setupFiles</code> [array]</a></li>
<li><a href="#setupfilesafterenv-array"><code>setupFilesAfterEnv</code> [array]</a></li>
<li><a href="#snapshotresolver-string"><code>snapshotResolver</code> [string]</a></li>
<li><a href="#snapshotserializers-arraystring"><code>snapshotSerializers</code> [array&lt;string&gt;]</a></li>
<li><a href="#testenvironment-string"><code>testEnvironment</code> [string]</a></li>
<li><a href="#testenvironmentoptions-object"><code>testEnvironmentOptions</code> [Object]</a></li>
<li><a href="#testmatch-arraystring"><code>testMatch</code> [array&lt;string&gt;]</a></li>
<li><a href="#testpathignorepatterns-arraystring"><code>testPathIgnorePatterns</code> [array&lt;string&gt;]</a></li>
<li><a href="#testregex-string--arraystring"><code>testRegex</code> [string | array&lt;string&gt;]</a></li>
<li><a href="#testresultsprocessor-string"><code>testResultsProcessor</code> [string]</a></li>
<li><a href="#testrunner-string"><code>testRunner</code> [string]</a></li>
<li><a href="#testsequencer-string"><code>testSequencer</code> [string]</a></li>
<li><a href="#testtimeout-number"><code>testTimeout</code> [number]</a></li>
<li><a href="#testurl-string"><code>testURL</code> [string]</a></li>
<li><a href="#timers-string"><code>timers</code> [string]</a></li>
<li><a href="#transform-objectstring-pathtotransformer--pathtotransformer-object"><code>transform</code> [object&lt;string, pathToTransformer | [pathToTransformer, object]&gt;]</a></li>
<li><a href="#transformignorepatterns-arraystring"><code>transformIgnorePatterns</code> [array&lt;string&gt;]</a></li>
<li><a href="#unmockedmodulepathpatterns-arraystring"><code>unmockedModulePathPatterns</code> [array&lt;string&gt;]</a></li>
<li><a href="#verbose-boolean"><code>verbose</code> [boolean]</a></li>
<li><a href="#watchpathignorepatterns-arraystring"><code>watchPathIgnorePatterns</code> [array&lt;string&gt;]</a></li>
<li><a href="#watchplugins-arraystring--string-object"><code>watchPlugins</code> [array&lt;string | [string, Object]&gt;]</a></li>
<li><a href="#-string"><code>//</code> [string]</a></li>
</ul>
<hr>
<h2><a class="anchor" aria-hidden="true" id="reference"></a><a href="#reference" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Reference</h2>
<h3><a class="anchor" aria-hidden="true" id="automock-boolean"></a><a href="#automock-boolean" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>automock</code> [boolean]</h3>
<p>Default: <code>false</code></p>
<p>This option tells Jest that all imported modules in your tests should be mocked automatically. All modules used in your tests will have a replacement implementation, keeping the API surface.</p>
<p>Example:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// utils.js</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">authorize</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="hljs-string">&apos;token&apos;</span>;
  },
  <span class="hljs-attr">isAuthorized</span>: <span class="hljs-function"><span class="hljs-params">secret</span> =&gt;</span> secret === <span class="hljs-string">&apos;wizard&apos;</span>,
};
</code></pre>
<pre><code class="hljs css language-js"><span class="hljs-comment">//__tests__/automocking.test.js</span>
<span class="hljs-keyword">import</span> utils <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;../utils&apos;</span>;

test(<span class="hljs-string">&apos;if utils mocked automatically&apos;</span>, () =&gt; {
<span class="hljs-comment">// Public methods of `utils` are now mock functions</span>
expect(utils.authorize.mock).toBeTruthy();
expect(utils.isAuthorized.mock).toBeTruthy();

<span class="hljs-comment">// You can provide them with your own implementation</span>
<span class="hljs-comment">// or pass the expected return value</span>
utils.authorize.mockReturnValue(<span class="hljs-string">&apos;mocked_token&apos;</span>);
utils.isAuthorized.mockReturnValue(<span class="hljs-literal">true</span>);

expect(utils.authorize()).toBe(<span class="hljs-string">&apos;mocked_token&apos;</span>);
expect(utils.isAuthorized(<span class="hljs-string">&apos;not_wizard&apos;</span>)).toBeTruthy();
});
</code></pre>

<p><em>Note: Node modules are automatically mocked when you have a manual mock in place (e.g.: <code>__mocks__/lodash.js</code>). More info <a href="manual-mocks.html#mocking-node-modules">here</a>.</em></p>
<p><em>Note: Core modules, like <code>fs</code>, are not mocked by default. They can be mocked explicitly, like <code>jest.mock(&apos;fs&apos;)</code>.</em></p>
<h3><a class="anchor" aria-hidden="true" id="bail-number--boolean"></a><a href="#bail-number--boolean" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>bail</code> [number | boolean]</h3>
<p>Default: <code>0</code></p>
<p>By default, Jest runs all tests and produces all errors into the console upon completion. The bail config option can be used here to have Jest stop running tests after <code>n</code> failures. Setting bail to <code>true</code> is the same as setting bail to <code>1</code>.</p>
<h3><a class="anchor" aria-hidden="true" id="cachedirectory-string"></a><a href="#cachedirectory-string" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>cacheDirectory</code> [string]</h3>
<p>Default: <code>&quot;/tmp/&lt;path&gt;&quot;</code></p>
<p>The directory where Jest should store its cached dependency information.</p>
<p>Jest attempts to scan your dependency tree once (up-front) and cache it in order to ease some of the filesystem raking that needs to happen while running tests. This config option lets you customize where Jest stores that cache data on disk.</p>
<h3><a class="anchor" aria-hidden="true" id="clearmocks-boolean"></a><a href="#clearmocks-boolean" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>clearMocks</code> [boolean]</h3>
<p>Default: <code>false</code></p>
<p>Automatically clear mock calls and instances before every test. Equivalent to calling <code>jest.clearAllMocks()</code> before each test. This does not remove any mock implementation that may have been provided.</p>
<h3><a class="anchor" aria-hidden="true" id="collectcoverage-boolean"></a><a href="#collectcoverage-boolean" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>collectCoverage</code> [boolean]</h3>
<p>Default: <code>false</code></p>
<p>Indicates whether the coverage information should be collected while executing the test. Because this retrofits all executed files with coverage collection statements, it may significantly slow down your tests.</p>
<h3><a class="anchor" aria-hidden="true" id="collectcoveragefrom-array"></a><a href="#collectcoveragefrom-array" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>collectCoverageFrom</code> [array]</h3>
<p>Default: <code>undefined</code></p>
<p>An array of <a href="https://github.com/jonschlinkert/micromatch">glob patterns</a> indicating a set of files for which coverage information should be collected. If a file matches the specified glob pattern, coverage information will be collected for it even if no tests exist for this file and it&apos;s never required in the test suite.</p>
<p>Example:</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;collectCoverageFrom&quot;</span>: [
    <span class="hljs-string">&quot;**/*.{js,jsx}&quot;</span>,
    <span class="hljs-string">&quot;!**/node_modules/**&quot;</span>,
    <span class="hljs-string">&quot;!**/vendor/**&quot;</span>
  ]
}
</code></pre>
<p>This will collect coverage information for all the files inside the project&apos;s <code>rootDir</code>, except the ones that match <code>**/node_modules/**</code> or <code>**/vendor/**</code>.</p>
<p><em>Note: This option requires <code>collectCoverage</code> to be set to true or Jest to be invoked with <code>--coverage</code>.</em></p>
<p></p><details>
<summary>Help:</summary>
If you are seeing coverage output such as...<p></p>
<pre><code class="hljs">=============================== Coverage summary ===============================
Statements   : Unknown% ( 0/0 )
Branches     : Unknown% ( 0/0 )
Functions    : Unknown% ( 0/0 )
<span class="hljs-section">Lines        : Unknown% ( 0/0 )
================================================================================</span>
Jest: Coverage data for global was not found.
</code></pre>
<p>Most likely your glob patterns are not matching any files. Refer to the <a href="https://github.com/jonschlinkert/micromatch">micromatch</a> documentation to ensure your globs are compatible.</p>
<p></p></details><p></p>
<h3><a class="anchor" aria-hidden="true" id="coveragedirectory-string"></a><a href="#coveragedirectory-string" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>coverageDirectory</code> [string]</h3>
<p>Default: <code>undefined</code></p>
<p>The directory where Jest should output its coverage files.</p>
<h3><a class="anchor" aria-hidden="true" id="coveragepathignorepatterns-arraystring"></a><a href="#coveragepathignorepatterns-arraystring" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>coveragePathIgnorePatterns</code> [array&lt;string&gt;]</h3>
<p>Default: <code>[&quot;/node_modules/&quot;]</code></p>
<p>An array of regexp pattern strings that are matched against all file paths before executing the test. If the file path matches any of the patterns, coverage information will be skipped.</p>
<p>These pattern strings match against the full path. Use the <code>&lt;rootDir&gt;</code> string token to include the path to your project&apos;s root directory to prevent it from accidentally ignoring all of your files in different environments that may have different root directories. Example: <code>[&quot;&lt;rootDir&gt;/build/&quot;, &quot;&lt;rootDir&gt;/node_modules/&quot;]</code>.</p>
<h3><a class="anchor" aria-hidden="true" id="coverageprovider-string"></a><a href="#coverageprovider-string" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>coverageProvider</code> [string]</h3>
<p>Indicates which provider should be used to instrument code for coverage. Allowed values are <code>babel</code> (default) or <code>v8</code>.</p>
<p>Note that using <code>v8</code> is considered experimental. This uses V8&apos;s builtin code coverage rather than one based on Babel. It is not as well tested, and it has also improved in the last few releases of Node. Using the latest versions of node (v14 at the time of this writing) will yield better results.</p>
<h3><a class="anchor" aria-hidden="true" id="coveragereporters-arraystring--stringany"></a><a href="#coveragereporters-arraystring--stringany" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>coverageReporters</code> [array&lt;string | [string,any]&gt;]</h3>
<p>Default: <code>[&quot;json&quot;, &quot;lcov&quot;, &quot;text&quot;, &quot;clover&quot;]</code></p>
<p>A list of reporter names that Jest uses when writing coverage reports. Any <a href="https://github.com/istanbuljs/istanbuljs/tree/master/packages/istanbul-reports/lib">istanbul reporter</a> can be used.</p>
<p><em>Note: Setting this option overwrites the default values. Add <code>&quot;text&quot;</code> or <code>&quot;text-summary&quot;</code> to see a coverage summary in the console output.</em></p>
<p><em>Note: You can pass additional options to the istanbul reporter using the tuple form. For example:</em></p>
<pre><code class="hljs css language-json">[<span class="hljs-string">&quot;json&quot;</span>, [<span class="hljs-string">&quot;lcov&quot;</span>, {<span class="hljs-attr">&quot;projectRoot&quot;</span>: <span class="hljs-string">&quot;../../&quot;</span>}]]
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="coveragethreshold-object"></a><a href="#coveragethreshold-object" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>coverageThreshold</code> [object]</h3>
<p>Default: <code>undefined</code></p>
<p>This will be used to configure minimum threshold enforcement for coverage results. Thresholds can be specified as <code>global</code>, as a <a href="https://github.com/isaacs/node-glob#glob-primer">glob</a>, and as a directory or file path. If thresholds aren&apos;t met, jest will fail. Thresholds specified as a positive number are taken to be the minimum percentage required. Thresholds specified as a negative number represent the maximum number of uncovered entities allowed.</p>
<p>For example, with the following configuration jest will fail if there is less than 80% branch, line, and function coverage, or if there are more than 10 uncovered statements:</p>
<pre><code class="hljs css language-json">{
  ...
  &quot;jest&quot;: {
    &quot;coverageThreshold&quot;: {
      &quot;global&quot;: {
        &quot;branches&quot;: 80,
        &quot;functions&quot;: 80,
        &quot;lines&quot;: 80,
        &quot;statements&quot;: -10
      }
    }
  }
}
</code></pre>
<p>If globs or paths are specified alongside <code>global</code>, coverage data for matching paths will be subtracted from overall coverage and thresholds will be applied independently. Thresholds for globs are applied to all files matching the glob. If the file specified by path is not found, error is returned.</p>
<p>For example, with the following configuration:</p>
<pre><code class="hljs css language-json">{
  ...
  &quot;jest&quot;: {
    &quot;coverageThreshold&quot;: {
      &quot;global&quot;: {
        &quot;branches&quot;: 50,
        &quot;functions&quot;: 50,
        &quot;lines&quot;: 50,
        &quot;statements&quot;: 50
      },
      &quot;./src/components/&quot;: {
        &quot;branches&quot;: 40,
        &quot;statements&quot;: 40
      },
      &quot;./src/reducers/**/*.js&quot;: {
        &quot;statements&quot;: 90
      },
      &quot;./src/api/very-important-module.js&quot;: {
        &quot;branches&quot;: 100,
        &quot;functions&quot;: 100,
        &quot;lines&quot;: 100,
        &quot;statements&quot;: 100
      }
    }
  }
}
</code></pre>
<p>Jest will fail if:</p>
<ul>
<li>The <code>./src/components</code> directory has less than 40% branch or statement coverage.</li>
<li>One of the files matching the <code>./src/reducers/**/*.js</code> glob has less than 90% statement coverage.</li>
<li>The <code>./src/api/very-important-module.js</code> file has less than 100% coverage.</li>
<li>Every remaining file combined has less than 50% coverage (<code>global</code>).</li>
</ul>
<h3><a class="anchor" aria-hidden="true" id="dependencyextractor-string"></a><a href="#dependencyextractor-string" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>dependencyExtractor</code> [string]</h3>
<p>Default: <code>undefined</code></p>
<p>This option allows the use of a custom dependency extractor. It must be a node module that exports an object with an <code>extract</code> function. E.g.:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;fs&apos;</span>);
<span class="hljs-keyword">const</span> crypto = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;crypto&apos;</span>);

<span class="hljs-built_in">module</span>.exports = {
extract(code, filePath, defaultExtract) {
<span class="hljs-keyword">const</span> deps = defaultExtract(code, filePath);
<span class="hljs-comment">// Scan the file and add dependencies in `deps` (which is a `Set`)</span>
<span class="hljs-keyword">return</span> deps;
},
getCacheKey() {
<span class="hljs-keyword">return</span> crypto
.createHash(<span class="hljs-string">&apos;md5&apos;</span>)
.update(fs.readFileSync(\_\_filename))
.digest(<span class="hljs-string">&apos;hex&apos;</span>);
},
};
</code></pre>

<p>The <code>extract</code> function should return an iterable (<code>Array</code>, <code>Set</code>, etc.) with the dependencies found in the code.</p>
<p>That module can also contain a <code>getCacheKey</code> function to generate a cache key to determine if the logic has changed and any cached artifacts relying on it should be discarded.</p>
<h3><a class="anchor" aria-hidden="true" id="displayname-string-object"></a><a href="#displayname-string-object" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>displayName</code> [string, object]</h3>
<p>default: <code>undefined</code></p>
<p>Allows for a label to be printed along side a test while it is running. This becomes more useful in multiproject repositories where there can be many jest configuration files. This visually tells which project a test belongs to. Here are sample valid values.</p>
<pre><code class="hljs css language-js"><span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">displayName</span>: <span class="hljs-string">&apos;CLIENT&apos;</span>,
};
</code></pre>
<p>or</p>
<pre><code class="hljs css language-js"><span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">displayName</span>: {
    <span class="hljs-attr">name</span>: <span class="hljs-string">&apos;CLIENT&apos;</span>,
    <span class="hljs-attr">color</span>: <span class="hljs-string">&apos;blue&apos;</span>,
  },
};
</code></pre>
<p>As a secondary option, an object with the properties <code>name</code> and <code>color</code> can be passed. This allows for a custom configuration of the background color of the displayName. <code>displayName</code> defaults to white when its value is a string. Jest uses <a href="https://github.com/chalk/chalk">chalk</a> to provide the color. As such, all of the valid options for colors supported by chalk are also supported by jest.</p>
<h3><a class="anchor" aria-hidden="true" id="errorondeprecated-boolean"></a><a href="#errorondeprecated-boolean" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>errorOnDeprecated</code> [boolean]</h3>
<p>Default: <code>false</code></p>
<p>Make calling deprecated APIs throw helpful error messages. Useful for easing the upgrade process.</p>
<h3><a class="anchor" aria-hidden="true" id="extraglobals-arraystring"></a><a href="#extraglobals-arraystring" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>extraGlobals</code> [array&lt;string&gt;]</h3>
<p>Default: <code>undefined</code></p>
<p>Test files run inside a <a href="https://nodejs.org/api/vm.html">vm</a>, which slows calls to global context properties (e.g. <code>Math</code>). With this option you can specify extra properties to be defined inside the vm for faster lookups.</p>
<p>For example, if your tests call <code>Math</code> often, you can pass it by setting <code>extraGlobals</code>.</p>
<pre><code class="hljs css language-json">{
  ...
  &quot;jest&quot;: {
    &quot;extraGlobals&quot;: [&quot;Math&quot;]
  }
}
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="forcecoveragematch-arraystring"></a><a href="#forcecoveragematch-arraystring" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>forceCoverageMatch</code> [array&lt;string&gt;]</h3>
<p>Default: <code>[&apos;&apos;]</code></p>
<p>Test files are normally ignored from collecting code coverage. With this option, you can overwrite this behavior and include otherwise ignored files in code coverage.</p>
<p>For example, if you have tests in source files named with <code>.t.js</code> extension as following:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// sum.t.js</span>

<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">sum</span>(<span class="hljs-params">a, b</span>) </span>{
<span class="hljs-keyword">return</span> a + b;
}

<span class="hljs-keyword">if</span> (process.env.NODE_ENV === <span class="hljs-string">&apos;test&apos;</span>) {
test(<span class="hljs-string">&apos;sum&apos;</span>, () =&gt; {
expect(sum(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>)).toBe(<span class="hljs-number">3</span>);
});
}
</code></pre>

<p>You can collect coverage from those files with setting <code>forceCoverageMatch</code>.</p>
<pre><code class="hljs css language-json">{
  ...
  &quot;jest&quot;: {
    &quot;forceCoverageMatch&quot;: [&quot;**/*.t.js&quot;]
  }
}
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="globals-object"></a><a href="#globals-object" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>globals</code> [object]</h3>
<p>Default: <code>{}</code></p>
<p>A set of global variables that need to be available in all test environments.</p>
<p>For example, the following would create a global <code>__DEV__</code> variable set to <code>true</code> in all test environments:</p>
<pre><code class="hljs css language-json">{
  ...
  &quot;jest&quot;: {
    &quot;globals&quot;: {
      &quot;__DEV__&quot;: true
    }
  }
}
</code></pre>
<p>Note that, if you specify a global reference value (like an object or array) here, and some code mutates that value in the midst of running a test, that mutation will <em>not</em> be persisted across test runs for other test files. In addition the <code>globals</code> object must be json-serializable, so it can&apos;t be used to specify global functions. For that you should use <code>setupFiles</code>.</p>
<h3><a class="anchor" aria-hidden="true" id="globalsetup-string"></a><a href="#globalsetup-string" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>globalSetup</code> [string]</h3>
<p>Default: <code>undefined</code></p>
<p>This option allows the use of a custom global setup module which exports an async function that is triggered once before all test suites. This function gets Jest&apos;s <code>globalConfig</code> object as a parameter.</p>
<p><em>Note: A global setup module configured in a project (using multi-project runner) will be triggered only when you run at least one test from this project.</em></p>
<p><em>Note: Any global variables that are defined through <code>globalSetup</code> can only be read in <code>globalTeardown</code>. You cannot retrieve globals defined here in your test suites.</em></p>
<p><em>Note: While code transformation is applied to the linked setup-file, Jest will <strong>not</strong> transform any code in <code>node_modules</code>. This is due to the need to load the actual transformers (e.g. <code>babel</code> or <code>typescript</code>) to perform transformation.</em></p>
<p>Example:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// setup.js</span>
<span class="hljs-built_in">module</span>.exports = <span class="hljs-keyword">async</span> () =&gt; {
  <span class="hljs-comment">// ...</span>
  <span class="hljs-comment">// Set reference to mongod in order to close the server during teardown.</span>
  global.__MONGOD__ = mongod;
};
</code></pre>
<pre><code class="hljs css language-js"><span class="hljs-comment">// teardown.js</span>
<span class="hljs-built_in">module</span>.exports = <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">await</span> global.__MONGOD__.stop();
};
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="globalteardown-string"></a><a href="#globalteardown-string" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>globalTeardown</code> [string]</h3>
<p>Default: <code>undefined</code></p>
<p>This option allows the use of a custom global teardown module which exports an async function that is triggered once after all test suites. This function gets Jest&apos;s <code>globalConfig</code> object as a parameter.</p>
<p><em>Note: A global teardown module configured in a project (using multi-project runner) will be triggered only when you run at least one test from this project.</em></p>
<p><em>Note: The same caveat concerning transformation of <code>node_modules</code> as for <code>globalSetup</code> applies to <code>globalTeardown</code>.</em></p>
<h3><a class="anchor" aria-hidden="true" id="maxconcurrency-number"></a><a href="#maxconcurrency-number" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>maxConcurrency</code> [number]</h3>
<p>Default: <code>5</code></p>
<p>A number limiting the number of tests that are allowed to run at the same time when using <code>test.concurrent</code>. Any test above this limit will be queued and executed once a slot is released.</p>
<h3><a class="anchor" aria-hidden="true" id="moduledirectories-arraystring"></a><a href="#moduledirectories-arraystring" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>moduleDirectories</code> [array&lt;string&gt;]</h3>
<p>Default: <code>[&quot;node_modules&quot;]</code></p>
<p>An array of directory names to be searched recursively up from the requiring module&apos;s location. Setting this option will <em>override</em> the default, if you wish to still search <code>node_modules</code> for packages include it along with any other options: <code>[&quot;node_modules&quot;, &quot;bower_components&quot;]</code></p>
<h3><a class="anchor" aria-hidden="true" id="modulefileextensions-arraystring"></a><a href="#modulefileextensions-arraystring" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>moduleFileExtensions</code> [array&lt;string&gt;]</h3>
<p>Default: <code>[&quot;js&quot;, &quot;json&quot;, &quot;jsx&quot;, &quot;ts&quot;, &quot;tsx&quot;, &quot;node&quot;]</code></p>
<p>An array of file extensions your modules use. If you require modules without specifying a file extension, these are the extensions Jest will look for, in left-to-right order.</p>
<p>We recommend placing the extensions most commonly used in your project on the left, so if you are using TypeScript, you may want to consider moving &quot;ts&quot; and/or &quot;tsx&quot; to the beginning of the array.</p>
<h3><a class="anchor" aria-hidden="true" id="modulenamemapper-objectstring-string--arraystring"></a><a href="#modulenamemapper-objectstring-string--arraystring" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>moduleNameMapper</code> [object&lt;string, string | array&lt;string&gt;&gt;]</h3>
<p>Default: <code>null</code></p>
<p>A map from regular expressions to module names or to arrays of module names that allow to stub out resources, like images or styles with a single module.</p>
<p>Modules that are mapped to an alias are unmocked by default, regardless of whether automocking is enabled or not.</p>
<p>Use <code>&lt;rootDir&gt;</code> string token to refer to <a href="#rootdir-string"><code>rootDir</code></a> value if you want to use file paths.</p>
<p>Additionally, you can substitute captured regex groups using numbered backreferences.</p>
<p>Example:</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;moduleNameMapper&quot;</span>: {
    <span class="hljs-attr">&quot;^image![a-zA-Z0-9$_-]+$&quot;</span>: <span class="hljs-string">&quot;GlobalImageStub&quot;</span>,
    <span class="hljs-attr">&quot;^[./a-zA-Z0-9$_-]+\\.png$&quot;</span>: <span class="hljs-string">&quot;&lt;rootDir&gt;/RelativeImageStub.js&quot;</span>,
    <span class="hljs-attr">&quot;module_name_(.*)&quot;</span>: <span class="hljs-string">&quot;&lt;rootDir&gt;/substituted_module_$1.js&quot;</span>,
    <span class="hljs-attr">&quot;assets/(.*)&quot;</span>: [
      <span class="hljs-string">&quot;&lt;rootDir&gt;/images/$1&quot;</span>,
      <span class="hljs-string">&quot;&lt;rootDir&gt;/photos/$1&quot;</span>,
      <span class="hljs-string">&quot;&lt;rootDir&gt;/recipes/$1&quot;</span>
    ]
  }
}
</code></pre>
<p>The order in which the mappings are defined matters. Patterns are checked one by one until one fits. The most specific rule should be listed first. This is true for arrays of module names as well.</p>
<p><em>Note: If you provide module name without boundaries <code>^$</code> it may cause hard to spot errors. E.g. <code>relay</code> will replace all modules which contain <code>relay</code> as a substring in its name: <code>relay</code>, <code>react-relay</code> and <code>graphql-relay</code> will all be pointed to your stub.</em></p>
<h3><a class="anchor" aria-hidden="true" id="modulepathignorepatterns-arraystring"></a><a href="#modulepathignorepatterns-arraystring" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>modulePathIgnorePatterns</code> [array&lt;string&gt;]</h3>
<p>Default: <code>[]</code></p>
<p>An array of regexp pattern strings that are matched against all module paths before those paths are to be considered &apos;visible&apos; to the module loader. If a given module&apos;s path matches any of the patterns, it will not be <code>require()</code>-able in the test environment.</p>
<p>These pattern strings match against the full path. Use the <code>&lt;rootDir&gt;</code> string token to include the path to your project&apos;s root directory to prevent it from accidentally ignoring all of your files in different environments that may have different root directories. Example: <code>[&quot;&lt;rootDir&gt;/build/&quot;]</code>.</p>
<h3><a class="anchor" aria-hidden="true" id="modulepaths-arraystring"></a><a href="#modulepaths-arraystring" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>modulePaths</code> [array&lt;string&gt;]</h3>
<p>Default: <code>[]</code></p>
<p>An alternative API to setting the <code>NODE_PATH</code> env variable, <code>modulePaths</code> is an array of absolute paths to additional locations to search when resolving modules. Use the <code>&lt;rootDir&gt;</code> string token to include the path to your project&apos;s root directory. Example: <code>[&quot;&lt;rootDir&gt;/app/&quot;]</code>.</p>
<h3><a class="anchor" aria-hidden="true" id="notify-boolean"></a><a href="#notify-boolean" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>notify</code> [boolean]</h3>
<p>Default: <code>false</code></p>
<p>Activates notifications for test results.</p>
<p><strong>Beware:</strong> Jest uses <a href="https://github.com/mikaelbr/node-notifier">node-notifier</a> to display desktop notifications. On Windows, it creates a new start menu entry on the first use and not display the notification. Notifications will be properly displayed on subsequent runs</p>
<h3><a class="anchor" aria-hidden="true" id="notifymode-string"></a><a href="#notifymode-string" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>notifyMode</code> [string]</h3>
<p>Default: <code>failure-change</code></p>
<p>Specifies notification mode. Requires <code>notify: true</code>.</p>
<h4><a class="anchor" aria-hidden="true" id="modes"></a><a href="#modes" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Modes</h4>
<ul>
<li><code>always</code>: always send a notification.</li>
<li><code>failure</code>: send a notification when tests fail.</li>
<li><code>success</code>: send a notification when tests pass.</li>
<li><code>change</code>: send a notification when the status changed.</li>
<li><code>success-change</code>: send a notification when tests pass or once when it fails.</li>
<li><code>failure-change</code>: send a notification when tests fail or once when it passes.</li>
</ul>
<h3><a class="anchor" aria-hidden="true" id="preset-string"></a><a href="#preset-string" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>preset</code> [string]</h3>
<p>Default: <code>undefined</code></p>
<p>A preset that is used as a base for Jest&apos;s configuration. A preset should point to an npm module that has a <code>jest-preset.json</code> or <code>jest-preset.js</code> file at the root.</p>
<p>For example, this preset <code>foo-bar/jest-preset.js</code> will be configured as follows:</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;preset&quot;</span>: <span class="hljs-string">&quot;foo-bar&quot;</span>
}
</code></pre>
<p>Presets may also be relative filesystem paths.</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;preset&quot;</span>: <span class="hljs-string">&quot;./node_modules/foo-bar/jest-preset.js&quot;</span>
}
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="prettierpath-string"></a><a href="#prettierpath-string" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>prettierPath</code> [string]</h3>
<p>Default: <code>&apos;prettier&apos;</code></p>
<p>Sets the path to the <a href="https://prettier.io/"><code>prettier</code></a> node module used to update inline snapshots.</p>
<h3><a class="anchor" aria-hidden="true" id="projects-arraystring--projectconfig"></a><a href="#projects-arraystring--projectconfig" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>projects</code> [array&lt;string | ProjectConfig&gt;]</h3>
<p>Default: <code>undefined</code></p>
<p>When the <code>projects</code> configuration is provided with an array of paths or glob patterns, Jest will run tests in all of the specified projects at the same time. This is great for monorepos or when working on multiple projects at the same time.</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;projects&quot;</span>: [<span class="hljs-string">&quot;&lt;rootDir&gt;&quot;</span>, <span class="hljs-string">&quot;&lt;rootDir&gt;/examples/*&quot;</span>]
}
</code></pre>
<p>This example configuration will run Jest in the root directory as well as in every folder in the examples directory. You can have an unlimited amount of projects running in the same Jest instance.</p>
<p>The projects feature can also be used to run multiple configurations or multiple <a href="#runner-string">runners</a>. For this purpose you can pass an array of configuration objects. For example, to run both tests and ESLint (via <a href="https://github.com/jest-community/jest-runner-eslint">jest-runner-eslint</a>) in the same invocation of Jest:</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;projects&quot;</span>: [
    {
      <span class="hljs-attr">&quot;displayName&quot;</span>: <span class="hljs-string">&quot;test&quot;</span>
    },
    {
      <span class="hljs-attr">&quot;displayName&quot;</span>: <span class="hljs-string">&quot;lint&quot;</span>,
      <span class="hljs-attr">&quot;runner&quot;</span>: <span class="hljs-string">&quot;jest-runner-eslint&quot;</span>,
      <span class="hljs-attr">&quot;testMatch&quot;</span>: [<span class="hljs-string">&quot;&lt;rootDir&gt;/**/*.js&quot;</span>]
    }
  ]
}
</code></pre>
<p><em>Note: When using multi project runner, it&apos;s recommended to add a <code>displayName</code> for each project. This will show the <code>displayName</code> of a project next to its tests.</em></p>
<h3><a class="anchor" aria-hidden="true" id="reporters-arraymodulename--modulename-options"></a><a href="#reporters-arraymodulename--modulename-options" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>reporters</code> [array&lt;moduleName | [moduleName, options]&gt;]</h3>
<p>Default: <code>undefined</code></p>
<p>Use this configuration option to add custom reporters to Jest. A custom reporter is a class that implements <code>onRunStart</code>, <code>onTestStart</code>, <code>onTestResult</code>, <code>onRunComplete</code> methods that will be called when any of those events occurs.</p>
<p>If custom reporters are specified, the default Jest reporters will be overridden. To keep default reporters, <code>default</code> can be passed as a module name.</p>
<p>This will override default reporters:</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;reporters&quot;</span>: [<span class="hljs-string">&quot;&lt;rootDir&gt;/my-custom-reporter.js&quot;</span>]
}
</code></pre>
<p>This will use custom reporter in addition to default reporters that Jest provides:</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;reporters&quot;</span>: [<span class="hljs-string">&quot;default&quot;</span>, <span class="hljs-string">&quot;&lt;rootDir&gt;/my-custom-reporter.js&quot;</span>]
}
</code></pre>
<p>Additionally, custom reporters can be configured by passing an <code>options</code> object as a second argument:</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;reporters&quot;</span>: [
    <span class="hljs-string">&quot;default&quot;</span>,
    [<span class="hljs-string">&quot;&lt;rootDir&gt;/my-custom-reporter.js&quot;</span>, {<span class="hljs-attr">&quot;banana&quot;</span>: <span class="hljs-string">&quot;yes&quot;</span>, <span class="hljs-attr">&quot;pineapple&quot;</span>: <span class="hljs-string">&quot;no&quot;</span>}]
  ]
}
</code></pre>
<p>Custom reporter modules must define a class that takes a <code>GlobalConfig</code> and reporter options as constructor arguments:</p>
<p>Example reporter:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// my-custom-reporter.js</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyCustomReporter</span> </span>{
  <span class="hljs-keyword">constructor</span>(globalConfig, options) {
    <span class="hljs-keyword">this</span>._globalConfig = globalConfig;
    <span class="hljs-keyword">this</span>._options = options;
  }

onRunComplete(contexts, results) {
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;Custom reporter output:&apos;</span>);
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;GlobalConfig: &apos;</span>, <span class="hljs-keyword">this</span>.\_globalConfig);
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;Options: &apos;</span>, <span class="hljs-keyword">this</span>.\_options);
}
}

<span class="hljs-built_in">module</span>.exports = MyCustomReporter;
<span class="hljs-comment">// or export default MyCustomReporter;</span>
</code></pre>

<p>Custom reporters can also force Jest to exit with non-0 code by returning an Error from <code>getLastError()</code> methods</p>
<pre><code class="hljs css language-js"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyCustomReporter</span> </span>{
  <span class="hljs-comment">// ...</span>
  getLastError() {
    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>._shouldFail) {
      <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&apos;my-custom-reporter.js reported an error&apos;</span>);
    }
  }
}
</code></pre>
<p>For the full list of methods and argument types see <code>Reporter</code> interface in <a href="https://github.com/facebook/jest/blob/master/packages/jest-reporters/src/types.ts">packages/jest-reporters/src/types.ts</a></p>
<h3><a class="anchor" aria-hidden="true" id="resetmocks-boolean"></a><a href="#resetmocks-boolean" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>resetMocks</code> [boolean]</h3>
<p>Default: <code>false</code></p>
<p>Automatically reset mock state before every test. Equivalent to calling <code>jest.resetAllMocks()</code> before each test. This will lead to any mocks having their fake implementations removed but does not restore their initial implementation.</p>
<h3><a class="anchor" aria-hidden="true" id="resetmodules-boolean"></a><a href="#resetmodules-boolean" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>resetModules</code> [boolean]</h3>
<p>Default: <code>false</code></p>
<p>By default, each test file gets its own independent module registry. Enabling <code>resetModules</code> goes a step further and resets the module registry before running each individual test. This is useful to isolate modules for every test so that local module state doesn&apos;t conflict between tests. This can be done programmatically using <a href="/docs/en/jest-object#jestresetmodules"><code>jest.resetModules()</code></a>.</p>
<h3><a class="anchor" aria-hidden="true" id="resolver-string"></a><a href="#resolver-string" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>resolver</code> [string]</h3>
<p>Default: <code>undefined</code></p>
<p>This option allows the use of a custom resolver. This resolver must be a node module that exports a function expecting a string as the first argument for the path to resolve and an object with the following structure as the second argument:</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;basedir&quot;</span>: string,
  <span class="hljs-attr">&quot;defaultResolver&quot;</span>: <span class="hljs-string">&quot;function(request, options)&quot;</span>,
  <span class="hljs-attr">&quot;extensions&quot;</span>: [string],
  <span class="hljs-attr">&quot;moduleDirectory&quot;</span>: [string],
  <span class="hljs-attr">&quot;paths&quot;</span>: [string],
  <span class="hljs-attr">&quot;rootDir&quot;</span>: [string]
}
</code></pre>
<p>The function should either return a path to the module that should be resolved or throw an error if the module can&apos;t be found.</p>
<p>Note: the defaultResolver passed as options is the Jest default resolver which might be useful when you write your custom one. It takes the same arguments as your custom one, e.g. <code>(request, options)</code>.</p>
<p>For example, if you want to respect Browserify&apos;s <a href="https://github.com/browserify/browserify-handbook/blob/master/readme.markdown#browser-field"><code>&quot;browser&quot;</code> field</a>, you can use the following configuration:</p>
<pre><code class="hljs css language-json">{
  ...
  &quot;jest&quot;: {
    &quot;resolver&quot;: &quot;browser-resolve&quot;
  }
}
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="restoremocks-boolean"></a><a href="#restoremocks-boolean" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>restoreMocks</code> [boolean]</h3>
<p>Default: <code>false</code></p>
<p>Automatically restore mock state before every test. Equivalent to calling <code>jest.restoreAllMocks()</code> before each test. This will lead to any mocks having their fake implementations removed and restores their initial implementation.</p>
<h3><a class="anchor" aria-hidden="true" id="rootdir-string"></a><a href="#rootdir-string" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>rootDir</code> [string]</h3>
<p>Default: The root of the directory containing your Jest <a href="#">config file</a> <em>or</em> the <code>package.json</code> <em>or</em> the <a href="http://en.wikipedia.org/wiki/Pwd"><code>pwd</code></a> if no <code>package.json</code> is found</p>
<p>The root directory that Jest should scan for tests and modules within. If you put your Jest config inside your <code>package.json</code> and want the root directory to be the root of your repo, the value for this config param will default to the directory of the <code>package.json</code>.</p>
<p>Oftentimes, you&apos;ll want to set this to <code>&apos;src&apos;</code> or <code>&apos;lib&apos;</code>, corresponding to where in your repository the code is stored.</p>
<p><em>Note that using <code>&apos;&lt;rootDir&gt;&apos;</code> as a string token in any other path-based config settings will refer back to this value. So, for example, if you want your <a href="#setupfiles-array"><code>setupFiles</code></a> config entry to point at the <code>env-setup.js</code> file at the root of your project, you could set its value to <code>[&quot;&lt;rootDir&gt;/env-setup.js&quot;]</code>.</em></p>
<h3><a class="anchor" aria-hidden="true" id="roots-arraystring"></a><a href="#roots-arraystring" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>roots</code> [array&lt;string&gt;]</h3>
<p>Default: <code>[&quot;&lt;rootDir&gt;&quot;]</code></p>
<p>A list of paths to directories that Jest should use to search for files in.</p>
<p>There are times where you only want Jest to search in a single sub-directory (such as cases where you have a <code>src/</code> directory in your repo), but prevent it from accessing the rest of the repo.</p>
<p><em>Note: While <code>rootDir</code> is mostly used as a token to be re-used in other configuration options, <code>roots</code> is used by the internals of Jest to locate <strong>test files and source files</strong>. This applies also when searching for manual mocks for modules from <code>node_modules</code> (<code>__mocks__</code> will need to live in one of the <code>roots</code>).</em></p>
<p><em>Note: By default, <code>roots</code> has a single entry <code>&lt;rootDir&gt;</code> but there are cases where you may want to have multiple roots within one project, for example <code>roots: [&quot;&lt;rootDir&gt;/src/&quot;, &quot;&lt;rootDir&gt;/tests/&quot;]</code>.</em></p>
<h3><a class="anchor" aria-hidden="true" id="runner-string"></a><a href="#runner-string" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>runner</code> [string]</h3>
<p>Default: <code>&quot;jest-runner&quot;</code></p>
<p>This option allows you to use a custom runner instead of Jest&apos;s default test runner. Examples of runners include:</p>
<ul>
<li><a href="https://github.com/jest-community/jest-runner-eslint"><code>jest-runner-eslint</code></a></li>
<li><a href="https://github.com/rogeliog/jest-runner-mocha"><code>jest-runner-mocha</code></a></li>
<li><a href="https://github.com/azz/jest-runner-tsc"><code>jest-runner-tsc</code></a></li>
<li><a href="https://github.com/keplersj/jest-runner-prettier"><code>jest-runner-prettier</code></a></li>
</ul>
<p><em>Note: The <code>runner</code> property value can omit the <code>jest-runner-</code> prefix of the package name.</em></p>
<p>To write a test-runner, export a class with which accepts <code>globalConfig</code> in the constructor, and has a <code>runTests</code> method with the signature:</p>
<pre><code class="hljs css language-ts"><span class="hljs-keyword">async</span> runTests(
  tests: <span class="hljs-built_in">Array</span>&lt;Test&gt;,
  watcher: TestWatcher,
  onStart: OnTestStart,
  onResult: OnTestSuccess,
  onFailure: OnTestFailure,
  options: TestRunnerOptions,
): <span class="hljs-built_in">Promise</span>&lt;<span class="hljs-built_in">void</span>&gt;
</code></pre>
<p>If you need to restrict your test-runner to only run in serial rather than being executed in parallel your class should have the property <code>isSerial</code> to be set as <code>true</code>.</p>
<h3><a class="anchor" aria-hidden="true" id="setupfiles-array"></a><a href="#setupfiles-array" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>setupFiles</code> [array]</h3>
<p>Default: <code>[]</code></p>
<p>A list of paths to modules that run some code to configure or set up the testing environment. Each setupFile will be run once per test file. Since every test runs in its own environment, these scripts will be executed in the testing environment immediately before executing the test code itself.</p>
<p>It&apos;s also worth noting that <code>setupFiles</code> will execute <em>before</em> <a href="#setupfilesafterenv-array"><code>setupFilesAfterEnv</code></a>.</p>
<h3><a class="anchor" aria-hidden="true" id="setupfilesafterenv-array"></a><a href="#setupfilesafterenv-array" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>setupFilesAfterEnv</code> [array]</h3>
<p>Default: <code>[]</code></p>
<p>A list of paths to modules that run some code to configure or set up the testing framework before each test file in the suite is executed. Since <a href="#setupfiles-array"><code>setupFiles</code></a> executes before the test framework is installed in the environment, this script file presents you the opportunity of running some code immediately after the test framework has been installed in the environment.</p>
<p>If you want a path to be <a href="#rootdir-string">relative to the root directory of your project</a>, please include <code>&lt;rootDir&gt;</code> inside a path&apos;s string, like <code>&quot;&lt;rootDir&gt;/a-configs-folder&quot;</code>.</p>
<p>For example, Jest ships with several plug-ins to <code>jasmine</code> that work by monkey-patching the jasmine API. If you wanted to add even more jasmine plugins to the mix (or if you wanted some custom, project-wide matchers for example), you could do so in these modules.</p>
<p><em>Note: <code>setupTestFrameworkScriptFile</code> is deprecated in favor of <code>setupFilesAfterEnv</code>.</em></p>
<p>Example <code>setupFilesAfterEnv</code> array in a jest.config.js:</p>
<pre><code class="hljs css language-js"><span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">setupFilesAfterEnv</span>: [<span class="hljs-string">&apos;./jest.setup.js&apos;</span>],
};
</code></pre>
<p>Example <code>jest.setup.js</code> file</p>
<pre><code class="hljs css language-js">jest.setTimeout(<span class="hljs-number">10000</span>); <span class="hljs-comment">// in milliseconds</span>
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="snapshotresolver-string"></a><a href="#snapshotresolver-string" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>snapshotResolver</code> [string]</h3>
<p>Default: <code>undefined</code></p>
<p>The path to a module that can resolve test&lt;-&gt;snapshot path. This config option lets you customize where Jest stores snapshot files on disk.</p>
<p>Example snapshot resolver module:</p>
<pre><code class="hljs css language-js"><span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-comment">// resolves from test to snapshot path</span>
  <span class="hljs-attr">resolveSnapshotPath</span>: <span class="hljs-function">(<span class="hljs-params">testPath, snapshotExtension</span>) =&gt;</span>
    testPath.replace(<span class="hljs-string">&apos;__tests__&apos;</span>, <span class="hljs-string">&apos;__snapshots__&apos;</span>) + snapshotExtension,

<span class="hljs-comment">// resolves from snapshot to test path</span>
<span class="hljs-attr">resolveTestPath</span>: <span class="hljs-function">(<span class="hljs-params">snapshotFilePath, snapshotExtension</span>) =&gt;</span>
snapshotFilePath
.replace(<span class="hljs-string">&apos;**snapshots**&apos;</span>, <span class="hljs-string">&apos;**tests**&apos;</span>)
.slice(<span class="hljs-number">0</span>, -snapshotExtension.length),

<span class="hljs-comment">// Example test path, used for preflight consistency check of the implementation above</span>
<span class="hljs-attr">testPathForConsistencyCheck</span>: <span class="hljs-string">&apos;some/**tests**/example.test.js&apos;</span>,
};
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="snapshotserializers-arraystring"></a><a href="#snapshotserializers-arraystring" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>snapshotSerializers</code> [array&lt;string&gt;]</h3>
<p>Default: <code>[]</code></p>
<p>A list of paths to snapshot serializer modules Jest should use for snapshot testing.</p>
<p>Jest has default serializers for built-in JavaScript types, HTML elements (Jest 20.0.0+), ImmutableJS (Jest 20.0.0+) and for React elements. See <a href="/docs/en/tutorial-react-native#snapshot-test">snapshot test tutorial</a> for more information.</p>
<p>Example serializer module:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// my-serializer-module</span>
<span class="hljs-built_in">module</span>.exports = {
  serialize(val, config, indentation, depth, refs, printer) {
    <span class="hljs-keyword">return</span> <span class="hljs-string">&apos;Pretty foo: &apos;</span> + printer(val.foo);
  },

test(val) {
<span class="hljs-keyword">return</span> val &amp;&amp; val.hasOwnProperty(<span class="hljs-string">&apos;foo&apos;</span>);
},
};
</code></pre>

<p><code>printer</code> is a function that serializes a value using existing plugins.</p>
<p>To use <code>my-serializer-module</code> as a serializer, configuration would be as follows:</p>
<pre><code class="hljs css language-json">{
  ...
  &quot;jest&quot;: {
    &quot;snapshotSerializers&quot;: [&quot;my-serializer-module&quot;]
  }
}
</code></pre>
<p>Finally tests would look as follows:</p>
<pre><code class="hljs css language-js">test(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  <span class="hljs-keyword">const</span> bar = {
    <span class="hljs-attr">foo</span>: {
      <span class="hljs-attr">x</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">y</span>: <span class="hljs-number">2</span>,
    },
  };

expect(bar).toMatchSnapshot();
});
</code></pre>

<p>Rendered snapshot:</p>
<pre><code class="hljs css language-json">Pretty foo: Object {
  &quot;x&quot;: 1,
  &quot;y&quot;: 2,
}
</code></pre>
<p>To make a dependency explicit instead of implicit, you can call <a href="/docs/en/expect#expectaddsnapshotserializerserializer"><code>expect.addSnapshotSerializer</code></a> to add a module for an individual test file instead of adding its path to <code>snapshotSerializers</code> in Jest configuration.</p>
<p>More about serializers API can be found <a href="https://github.com/facebook/jest/tree/master/packages/pretty-format/README.md#serialize">here</a>.</p>
<h3><a class="anchor" aria-hidden="true" id="testenvironment-string"></a><a href="#testenvironment-string" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>testEnvironment</code> [string]</h3>
<p>Default: <code>&quot;jsdom&quot;</code></p>
<p>The test environment that will be used for testing. The default environment in Jest is a browser-like environment through <a href="https://github.com/jsdom/jsdom">jsdom</a>. If you are building a node service, you can use the <code>node</code> option to use a node-like environment instead.</p>
<p>By adding a <code>@jest-environment</code> docblock at the top of the file, you can specify another environment to be used for all tests in that file:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">/**
 * <span class="hljs-doctag">@jest</span>-environment jsdom
 */</span>

test(<span class="hljs-string">&apos;use jsdom in this test file&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> element = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">&apos;div&apos;</span>);
expect(element).not.toBeNull();
});
</code></pre>

<p>You can create your own module that will be used for setting up the test environment. The module must export a class with <code>setup</code>, <code>teardown</code> and <code>runScript</code> methods. You can also pass variables from this module to your test suites by assigning them to <code>this.global</code> object &#x2013; this will make them available in your test suites as global variables.</p>
<p>The class may optionally expose an asynchronous <code>handleTestEvent</code> method to bind to events fired by <a href="https://github.com/facebook/jest/tree/master/packages/jest-circus"><code>jest-circus</code></a>. Normally, <code>jest-circus</code> test runner would pause until a promise returned from <code>handleTestEvent</code> gets fulfilled, <strong>except for the next events</strong>: <code>start_describe_definition</code>, <code>finish_describe_definition</code>, <code>add_hook</code>, <code>add_test</code> or <code>error</code> (for the up-to-date list you can look at <a href="https://github.com/facebook/jest/tree/master/packages/jest-types/src/Circus.ts">SyncEvent type in the types definitions</a>). That is caused by backward compatibility reasons and <code>process.on(&apos;unhandledRejection&apos;, callback)</code> signature, but that usually should not be a problem for most of the use cases.</p>
<p>Any docblock pragmas in test files will be passed to the environment constructor and can be used for per-test configuration. If the pragma does not have a value, it will be present in the object with it&apos;s value set to an empty string. If the pragma is not present, it will not be present in the object.</p>
<p><em>Note: TestEnvironment is sandboxed. Each test suite will trigger setup/teardown in their own TestEnvironment.</em></p>
<p>Example:</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// my-custom-environment</span>
<span class="hljs-keyword">const</span> NodeEnvironment = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;jest-environment-node&apos;</span>);

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">CustomEnvironment</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">NodeEnvironment</span> </span>{
<span class="hljs-keyword">constructor</span>(config, context) {
<span class="hljs-keyword">super</span>(config, context);
<span class="hljs-keyword">this</span>.testPath = context.testPath;
<span class="hljs-keyword">this</span>.docblockPragmas = context.docblockPragmas;
}

<span class="hljs-keyword">async</span> setup() {
<span class="hljs-keyword">await</span> <span class="hljs-keyword">super</span>.setup();
<span class="hljs-keyword">await</span> someSetupTasks(<span class="hljs-keyword">this</span>.testPath);
<span class="hljs-keyword">this</span>.global.someGlobalObject = createGlobalObject();

    <span class="hljs-comment">// Will trigger if docblock contains @my-custom-pragma my-pragma-value</span>
    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.docblockPragmas[<span class="hljs-string">&apos;my-custom-pragma&apos;</span>] === <span class="hljs-string">&apos;my-pragma-value&apos;</span>) {
      <span class="hljs-comment">// ...</span>
    }

}

<span class="hljs-keyword">async</span> teardown() {
<span class="hljs-keyword">this</span>.global.someGlobalObject = destroyGlobalObject();
<span class="hljs-keyword">await</span> someTeardownTasks();
<span class="hljs-keyword">await</span> <span class="hljs-keyword">super</span>.teardown();
}

runScript(script) {
<span class="hljs-keyword">return</span> <span class="hljs-keyword">super</span>.runScript(script);
}

<span class="hljs-keyword">async</span> handleTestEvent(event, state) {
<span class="hljs-keyword">if</span> (event.name === <span class="hljs-string">&apos;test_start&apos;</span>) {
<span class="hljs-comment">// ...</span>
}
}
}

<span class="hljs-built_in">module</span>.exports = CustomEnvironment;
</code></pre>

<pre><code class="hljs css language-js"><span class="hljs-comment">// my-test-suite</span>
<span class="hljs-keyword">let</span> someGlobalObject;

beforeAll(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  someGlobalObject = global.someGlobalObject;
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="testenvironmentoptions-object"></a><a href="#testenvironmentoptions-object" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>testEnvironmentOptions</code> [Object]</h3>
<p>Default: <code>{}</code></p>
<p>Test environment options that will be passed to the <code>testEnvironment</code>. The relevant options depend on the environment. For example you can override options given to <a href="https://github.com/jsdom/jsdom">jsdom</a> such as <code>{userAgent: &quot;Agent/007&quot;}</code>.</p>
<h3><a class="anchor" aria-hidden="true" id="testmatch-arraystring"></a><a href="#testmatch-arraystring" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>testMatch</code> [array&lt;string&gt;]</h3>
<p>(default: <code>[ &quot;**/__tests__/**/*.[jt]s?(x)&quot;, &quot;**/?(*.)+(spec|test).[jt]s?(x)&quot; ]</code>)</p>
<p>The glob patterns Jest uses to detect test files. By default it looks for <code>.js</code>, <code>.jsx</code>, <code>.ts</code> and <code>.tsx</code> files inside of <code>__tests__</code> folders, as well as any files with a suffix of <code>.test</code> or <code>.spec</code> (e.g. <code>Component.test.js</code> or <code>Component.spec.js</code>). It will also find files called <code>test.js</code> or <code>spec.js</code>.</p>
<p>See the <a href="https://github.com/jonschlinkert/micromatch">micromatch</a> package for details of the patterns you can specify.</p>
<p>See also <a href="#testregex-string--arraystring"><code>testRegex</code> [string | array&lt;string&gt;]</a>, but note that you cannot specify both options.</p>
<h3><a class="anchor" aria-hidden="true" id="testpathignorepatterns-arraystring"></a><a href="#testpathignorepatterns-arraystring" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>testPathIgnorePatterns</code> [array&lt;string&gt;]</h3>
<p>Default: <code>[&quot;/node_modules/&quot;]</code></p>
<p>An array of regexp pattern strings that are matched against all test paths before executing the test. If the test path matches any of the patterns, it will be skipped.</p>
<p>These pattern strings match against the full path. Use the <code>&lt;rootDir&gt;</code> string token to include the path to your project&apos;s root directory to prevent it from accidentally ignoring all of your files in different environments that may have different root directories. Example: <code>[&quot;&lt;rootDir&gt;/build/&quot;, &quot;&lt;rootDir&gt;/node_modules/&quot;]</code>.</p>
<h3><a class="anchor" aria-hidden="true" id="testregex-string--arraystring"></a><a href="#testregex-string--arraystring" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>testRegex</code> [string | array&lt;string&gt;]</h3>
<p>Default: <code>(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$</code></p>
<p>The pattern or patterns Jest uses to detect test files. By default it looks for <code>.js</code>, <code>.jsx</code>, <code>.ts</code> and <code>.tsx</code> files inside of <code>__tests__</code> folders, as well as any files with a suffix of <code>.test</code> or <code>.spec</code> (e.g. <code>Component.test.js</code> or <code>Component.spec.js</code>). It will also find files called <code>test.js</code> or <code>spec.js</code>. See also <a href="#testmatch-arraystring"><code>testMatch</code> [array&lt;string&gt;]</a>, but note that you cannot specify both options.</p>
<p>The following is a visualization of the default regex:</p>
<pre><code class="hljs css language-bash">&#x251C;&#x2500;&#x2500; __tests__
&#x2502;   &#x2514;&#x2500;&#x2500; component.spec.js <span class="hljs-comment"># test</span>
&#x2502;   &#x2514;&#x2500;&#x2500; anything <span class="hljs-comment"># test</span>
&#x251C;&#x2500;&#x2500; package.json <span class="hljs-comment"># not test</span>
&#x251C;&#x2500;&#x2500; foo.test.js <span class="hljs-comment"># test</span>
&#x251C;&#x2500;&#x2500; bar.spec.jsx <span class="hljs-comment"># test</span>
&#x2514;&#x2500;&#x2500; component.js <span class="hljs-comment"># not test</span>
</code></pre>
<p><em>Note: <code>testRegex</code> will try to detect test files using the <strong>absolute file path</strong> therefore having a folder with name that match it will run all the files as tests</em></p>
<h3><a class="anchor" aria-hidden="true" id="testresultsprocessor-string"></a><a href="#testresultsprocessor-string" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>testResultsProcessor</code> [string]</h3>
<p>Default: <code>undefined</code></p>
<p>This option allows the use of a custom results processor. This processor must be a node module that exports a function expecting an object with the following structure as the first argument and return it:</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;success&quot;</span>: bool,
  <span class="hljs-attr">&quot;startTime&quot;</span>: epoch,
  <span class="hljs-attr">&quot;numTotalTestSuites&quot;</span>: number,
  <span class="hljs-attr">&quot;numPassedTestSuites&quot;</span>: number,
  <span class="hljs-attr">&quot;numFailedTestSuites&quot;</span>: number,
  <span class="hljs-attr">&quot;numRuntimeErrorTestSuites&quot;</span>: number,
  <span class="hljs-attr">&quot;numTotalTests&quot;</span>: number,
  <span class="hljs-attr">&quot;numPassedTests&quot;</span>: number,
  <span class="hljs-attr">&quot;numFailedTests&quot;</span>: number,
  <span class="hljs-attr">&quot;numPendingTests&quot;</span>: number,
  <span class="hljs-attr">&quot;numTodoTests&quot;</span>: number,
  <span class="hljs-attr">&quot;openHandles&quot;</span>: Array&lt;Error&gt;,
  <span class="hljs-attr">&quot;testResults&quot;</span>: [{
    <span class="hljs-attr">&quot;numFailingTests&quot;</span>: number,
    <span class="hljs-attr">&quot;numPassingTests&quot;</span>: number,
    <span class="hljs-attr">&quot;numPendingTests&quot;</span>: number,
    <span class="hljs-attr">&quot;testResults&quot;</span>: [{
      <span class="hljs-attr">&quot;title&quot;</span>: string (message in it block),
      <span class="hljs-attr">&quot;status&quot;</span>: <span class="hljs-string">&quot;failed&quot;</span> | <span class="hljs-string">&quot;pending&quot;</span> | <span class="hljs-string">&quot;passed&quot;</span>,
      <span class="hljs-attr">&quot;ancestorTitles&quot;</span>: [string (message in describe blocks)],
      <span class="hljs-attr">&quot;failureMessages&quot;</span>: [string],
      <span class="hljs-attr">&quot;numPassingAsserts&quot;</span>: number,
      <span class="hljs-attr">&quot;location&quot;</span>: {
        <span class="hljs-attr">&quot;column&quot;</span>: number,
        <span class="hljs-attr">&quot;line&quot;</span>: number
      }
    },
    ...
    ],
    <span class="hljs-attr">&quot;perfStats&quot;</span>: {
      <span class="hljs-attr">&quot;start&quot;</span>: epoch,
      <span class="hljs-attr">&quot;end&quot;</span>: epoch
    },
    <span class="hljs-attr">&quot;testFilePath&quot;</span>: absolute path to test file,
    <span class="hljs-attr">&quot;coverage&quot;</span>: {}
  },
  ...
  ]
}
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="testrunner-string"></a><a href="#testrunner-string" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>testRunner</code> [string]</h3>
<p>Default: <code>jasmine2</code></p>
<p>This option allows use of a custom test runner. The default is jasmine2. A custom test runner can be provided by specifying a path to a test runner implementation.</p>
<p>The test runner module must export a function with the following signature:</p>
<pre><code class="hljs css language-ts"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">testRunner</span>(<span class="hljs-params">
  globalConfig: GlobalConfig,
  config: ProjectConfig,
  environment: Environment,
  runtime: Runtime,
  testPath: <span class="hljs-built_in">string</span>,
</span>): <span class="hljs-title">Promise</span>&lt;<span class="hljs-title">TestResult</span>&gt;</span>;
</code></pre>
<p>An example of such function can be found in our default <a href="https://github.com/facebook/jest/blob/master/packages/jest-jasmine2/src/index.ts">jasmine2 test runner package</a>.</p>
<h3><a class="anchor" aria-hidden="true" id="testsequencer-string"></a><a href="#testsequencer-string" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>testSequencer</code> [string]</h3>
<p>Default: <code>@jest/test-sequencer</code></p>
<p>This option allows you to use a custom sequencer instead of Jest&apos;s default. <code>sort</code> may optionally return a Promise.</p>
<p>Example:</p>
<p>Sort test path alphabetically.</p>
<pre><code class="hljs css language-js"><span class="hljs-comment">// testSequencer.js</span>
<span class="hljs-keyword">const</span> Sequencer = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;@jest/test-sequencer&apos;</span>).default;

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">CustomSequencer</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Sequencer</span> </span>{
sort(tests) {
<span class="hljs-comment">// Test structure information</span>
<span class="hljs-comment">// https://github.com/facebook/jest/blob/6b8b1404a1d9254e7d5d90a8934087a9c9899dab/packages/jest-runner/src/types.ts#L17-L21</span>
<span class="hljs-keyword">const</span> copyTests = <span class="hljs-built_in">Array</span>.from(tests);
<span class="hljs-keyword">return</span> copyTests.sort(<span class="hljs-function">(<span class="hljs-params">testA, testB</span>) =&gt;</span> (testA.path &gt; testB.path ? <span class="hljs-number">1</span> : <span class="hljs-number">-1</span>));
}
}

<span class="hljs-built_in">module</span>.exports = CustomSequencer;
</code></pre>

<p>Use it in your Jest config file like this:</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;testSequencer&quot;</span>: <span class="hljs-string">&quot;path/to/testSequencer.js&quot;</span>
}
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="testtimeout-number"></a><a href="#testtimeout-number" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>testTimeout</code> [number]</h3>
<p>Default: <code>5000</code></p>
<p>Default timeout of a test in milliseconds.</p>
<h3><a class="anchor" aria-hidden="true" id="testurl-string"></a><a href="#testurl-string" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>testURL</code> [string]</h3>
<p>Default: <code>http://localhost</code></p>
<p>This option sets the URL for the jsdom environment. It is reflected in properties such as <code>location.href</code>.</p>
<h3><a class="anchor" aria-hidden="true" id="timers-string"></a><a href="#timers-string" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>timers</code> [string]</h3>
<p>Default: <code>real</code></p>
<p>Setting this value to <code>legacy</code> or <code>fake</code> allows the use of fake timers for functions such as <code>setTimeout</code>. Fake timers are useful when a piece of code sets a long timeout that we don&apos;t want to wait for in a test.</p>
<p>If the value is <code>modern</code>, <a href="https://github.com/sinonjs/fake-timers"><code>@sinonjs/fake-timers</code></a> will be used as implementation instead of Jest&apos;s own legacy implementation. This will be the default fake implementation in Jest 27.</p>
<h3><a class="anchor" aria-hidden="true" id="transform-objectstring-pathtotransformer--pathtotransformer-object"></a><a href="#transform-objectstring-pathtotransformer--pathtotransformer-object" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>transform</code> [object&lt;string, pathToTransformer | [pathToTransformer, object]&gt;]</h3>
<p>Default: <code>{&quot;^.+\\.[jt]sx?$&quot;: &quot;babel-jest&quot;}</code></p>
<p>A map from regular expressions to paths to transformers. A transformer is a module that provides a synchronous function for transforming source files. For example, if you wanted to be able to use a new language feature in your modules or tests that isn&apos;t yet supported by node, you might plug in one of many compilers that compile a future version of JavaScript to a current one. Example: see the <a href="https://github.com/facebook/jest/blob/master/examples/typescript/package.json#L16">examples/typescript</a> example or the <a href="/docs/en/webpack">webpack tutorial</a>.</p>
<p>Examples of such compilers include:</p>
<ul>
<li><a href="https://babeljs.io/">Babel</a></li>
<li><a href="http://www.typescriptlang.org/">TypeScript</a></li>
<li><a href="http://github.com/leebyron/async-to-gen#jest">async-to-gen</a></li>
<li>To build your own please visit the <a href="/docs/en/tutorial-react#custom-transformers">Custom Transformer</a> section</li>
</ul>
<p>You can pass configuration to a transformer like <code>{filePattern: [&apos;path-to-transformer&apos;, {options}]}</code> For example, to configure babel-jest for non-default behavior, <code>{&quot;\\.js$&quot;: [&apos;babel-jest&apos;, {rootMode: &quot;upward&quot;}]}</code></p>
<p><em>Note: a transformer is only run once per file unless the file has changed. During development of a transformer it can be useful to run Jest with <code>--no-cache</code> to frequently <a href="/docs/en/troubleshooting#caching-issues">delete Jest&apos;s cache</a>.</em></p>
<p><em>Note: when adding additional code transformers, this will overwrite the default config and <code>babel-jest</code> is no longer automatically loaded. If you want to use it to compile JavaScript or Typescript, it has to be explicitly defined by adding <code>{&quot;^.+\\.[jt]sx?$&quot;: &quot;babel-jest&quot;}</code> to the transform property. See <a href="https://github.com/facebook/jest/tree/master/packages/babel-jest#setup">babel-jest plugin</a></em></p>
<h3><a class="anchor" aria-hidden="true" id="transformignorepatterns-arraystring"></a><a href="#transformignorepatterns-arraystring" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>transformIgnorePatterns</code> [array&lt;string&gt;]</h3>
<p>Default: <code>[&quot;/node_modules/&quot;]</code></p>
<p>An array of regexp pattern strings that are matched against all source file paths before transformation. If the test path matches any of the patterns, it will not be transformed.</p>
<p>These pattern strings match against the full path. Use the <code>&lt;rootDir&gt;</code> string token to include the path to your project&apos;s root directory to prevent it from accidentally ignoring all of your files in different environments that may have different root directories.</p>
<p>Example: <code>[&quot;&lt;rootDir&gt;/bower_components/&quot;, &quot;&lt;rootDir&gt;/node_modules/&quot;]</code>.</p>
<p>Sometimes it happens (especially in React Native or TypeScript projects) that 3rd party modules are published as untranspiled. Since all files inside <code>node_modules</code> are not transformed by default, Jest will not understand the code in these modules, resulting in syntax errors. To overcome this, you may use <code>transformIgnorePatterns</code> to whitelist such modules. You&apos;ll find a good example of this use case in <a href="https://jestjs.io/docs/en/tutorial-react-native#transformignorepatterns-customization">React Native Guide</a>.</p>
<h3><a class="anchor" aria-hidden="true" id="unmockedmodulepathpatterns-arraystring"></a><a href="#unmockedmodulepathpatterns-arraystring" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>unmockedModulePathPatterns</code> [array&lt;string&gt;]</h3>
<p>Default: <code>[]</code></p>
<p>An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them. If a module&apos;s path matches any of the patterns in this list, it will not be automatically mocked by the module loader.</p>
<p>This is useful for some commonly used &apos;utility&apos; modules that are almost always used as implementation details almost all the time (like underscore/lo-dash, etc). It&apos;s generally a best practice to keep this list as small as possible and always use explicit <code>jest.mock()</code>/<code>jest.unmock()</code> calls in individual tests. Explicit per-test setup is far easier for other readers of the test to reason about the environment the test will run in.</p>
<p>It is possible to override this setting in individual tests by explicitly calling <code>jest.mock()</code> at the top of the test file.</p>
<h3><a class="anchor" aria-hidden="true" id="verbose-boolean"></a><a href="#verbose-boolean" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>verbose</code> [boolean]</h3>
<p>Default: <code>false</code></p>
<p>Indicates whether each individual test should be reported during the run. All errors will also still be shown on the bottom after execution. Note that if there is only one test file being run it will default to <code>true</code>.</p>
<h3><a class="anchor" aria-hidden="true" id="watchpathignorepatterns-arraystring"></a><a href="#watchpathignorepatterns-arraystring" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>watchPathIgnorePatterns</code> [array&lt;string&gt;]</h3>
<p>Default: <code>[]</code></p>
<p>An array of RegExp patterns that are matched against all source file paths before re-running tests in watch mode. If the file path matches any of the patterns, when it is updated, it will not trigger a re-run of tests.</p>
<p>These patterns match against the full path. Use the <code>&lt;rootDir&gt;</code> string token to include the path to your project&apos;s root directory to prevent it from accidentally ignoring all of your files in different environments that may have different root directories. Example: <code>[&quot;&lt;rootDir&gt;/node_modules/&quot;]</code>.</p>
<p>Even if nothing is specified here, the watcher will ignore changes to any hidden files and directories, i.e. files and folders that begins with a dot (<code>.</code>).</p>
<h3><a class="anchor" aria-hidden="true" id="watchplugins-arraystring--string-object"></a><a href="#watchplugins-arraystring--string-object" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>watchPlugins</code> [array&lt;string | [string, Object]&gt;]</h3>
<p>Default: <code>[]</code></p>
<p>This option allows you to use a custom watch plugins. Read more about watch plugins <a href="watch-plugins">here</a>.</p>
<p>Examples of watch plugins include:</p>
<ul>
<li><a href="https://github.com/rickhanlonii/jest-watch-master"><code>jest-watch-master</code></a></li>
<li><a href="https://github.com/rogeliog/jest-watch-select-projects"><code>jest-watch-select-projects</code></a></li>
<li><a href="https://github.com/unional/jest-watch-suspend"><code>jest-watch-suspend</code></a></li>
<li><a href="https://github.com/jest-community/jest-watch-typeahead"><code>jest-watch-typeahead</code></a></li>
<li><a href="https://github.com/cameronhunter/jest-watch-directories/tree/master/packages/jest-watch-yarn-workspaces"><code>jest-watch-yarn-workspaces</code></a></li>
</ul>
<p><em>Note: The values in the <code>watchPlugins</code> property value can omit the <code>jest-watch-</code> prefix of the package name.</em></p>
<h3><a class="anchor" aria-hidden="true" id="-string"></a><a href="#-string" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>//</code> [string]</h3>
<p>No default</p>
<p>This option allow comments in <code>package.json</code>. Include the comment text as the value of this key anywhere in <code>package.json</code>.</p>
<p>Example:</p>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;name&quot;</span>: <span class="hljs-string">&quot;my-project&quot;</span>,
  <span class="hljs-attr">&quot;jest&quot;</span>: {
    <span class="hljs-attr">&quot;//&quot;</span>: <span class="hljs-string">&quot;Comment goes here&quot;</span>,
    <span class="hljs-attr">&quot;verbose&quot;</span>: <span class="hljs-literal">true</span>
  }
}
</code></pre>
</span></div></article>
