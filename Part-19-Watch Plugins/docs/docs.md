<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/WatchPlugins.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Watch Plugins</h1></header><article><div><span><p>The Jest watch plugin system provides a way to hook into specific parts of Jest and to define watch mode menu prompts that execute code on key press. Combined, these features allow you to develop interactive experiences custom for your workflow.</p>
<h2><a class="anchor" aria-hidden="true" id="watch-plugin-interface"></a><a href="#watch-plugin-interface" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Watch Plugin Interface</h2>
<pre><code class="hljs css language-javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyWatchPlugin</span> </span>{
  <span class="hljs-comment">// Add hooks to Jest lifecycle events</span>
  apply(jestHooks) {}

<span class="hljs-comment">// Get the prompt information for interactive plugins</span>
getUsageInfo(globalConfig) {}

<span class="hljs-comment">// Executed when the key from `getUsageInfo` is input</span>
run(globalConfig, updateConfigAndRun) {}
}
</code></pre>

<h2><a class="anchor" aria-hidden="true" id="hooking-into-jest"></a><a href="#hooking-into-jest" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Hooking into Jest</h2>
<p>To connect your watch plugin to Jest, add its path under <code>watchPlugins</code> in your Jest configuration:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// jest.config.js</span>
<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-comment">// ...</span>
  <span class="hljs-attr">watchPlugins</span>: [<span class="hljs-string">&apos;path/to/yourWatchPlugin&apos;</span>],
};
</code></pre>
<p>Custom watch plugins can add hooks to Jest events. These hooks can be added either with or without having an interactive key in the watch mode menu.</p>
<h3><a class="anchor" aria-hidden="true" id="applyjesthooks"></a><a href="#applyjesthooks" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>apply(jestHooks)</code></h3>
<p>Jest hooks can be attached by implementing the <code>apply</code> method. This method receives a <code>jestHooks</code> argument that allows the plugin to hook into specific parts of the lifecycle of a test run.</p>
<pre><code class="hljs css language-javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyWatchPlugin</span> </span>{
  apply(jestHooks) {}
}
</code></pre>
<p>Below are the hooks available in Jest.</p>
<h4><a class="anchor" aria-hidden="true" id="jesthooksshouldruntestsuitetestsuiteinfo"></a><a href="#jesthooksshouldruntestsuitetestsuiteinfo" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jestHooks.shouldRunTestSuite(testSuiteInfo)</code></h4>
<p>Returns a boolean (or <code>Promise&lt;boolean&gt;</code> for handling asynchronous operations) to specify if a test should be run or not.</p>
<p>For example:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyWatchPlugin</span> </span>{
  apply(jestHooks) {
    jestHooks.shouldRunTestSuite(<span class="hljs-function"><span class="hljs-params">testSuiteInfo</span> =&gt;</span> {
      <span class="hljs-keyword">return</span> testSuiteInfo.testPath.includes(<span class="hljs-string">&apos;my-keyword&apos;</span>);
    });

    <span class="hljs-comment">// or a promise</span>
    jestHooks.shouldRunTestSuite(<span class="hljs-function"><span class="hljs-params">testSuiteInfo</span> =&gt;</span> {
      <span class="hljs-keyword">return</span> <span class="hljs-built_in">Promise</span>.resolve(testSuiteInfo.testPath.includes(<span class="hljs-string">&apos;my-keyword&apos;</span>));
    });

}
}
</code></pre>

<h4><a class="anchor" aria-hidden="true" id="jesthooksontestruncompleteresults"></a><a href="#jesthooksontestruncompleteresults" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jestHooks.onTestRunComplete(results)</code></h4>
<p>Gets called at the end of every test run. It has the test results as an argument.</p>
<p>For example:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyWatchPlugin</span> </span>{
  apply(jestHooks) {
    jestHooks.onTestRunComplete(<span class="hljs-function"><span class="hljs-params">results</span> =&gt;</span> {
      <span class="hljs-keyword">this</span>._hasSnapshotFailure = results.snapshot.failure;
    });
  }
}
</code></pre>
<h4><a class="anchor" aria-hidden="true" id="jesthooksonfilechangeprojects"></a><a href="#jesthooksonfilechangeprojects" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>jestHooks.onFileChange({projects})</code></h4>
<p>Gets called whenever there is a change in the file system</p>
<ul>
<li><code>projects: Array&lt;config: ProjectConfig, testPaths: Array&lt;string&gt;</code>: Includes all the test paths that Jest is watching.</li>
</ul>
<p>For example:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyWatchPlugin</span> </span>{
  apply(jestHooks) {
    jestHooks.onFileChange(<span class="hljs-function">(<span class="hljs-params">{projects}</span>) =&gt;</span> {
      <span class="hljs-keyword">this</span>._projects = projects;
    });
  }
}
</code></pre>
<h2><a class="anchor" aria-hidden="true" id="watch-menu-integration"></a><a href="#watch-menu-integration" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Watch Menu Integration</h2>
<p>Custom watch plugins can also add or override functionality to the watch menu by specifying a key/prompt pair in <code>getUsageInfo</code> method and a <code>run</code> method for the execution of the key.</p>
<h3><a class="anchor" aria-hidden="true" id="getusageinfoglobalconfig"></a><a href="#getusageinfoglobalconfig" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>getUsageInfo(globalConfig)</code></h3>
<p>To add a key to the watch menu, implement the <code>getUsageInfo</code> method, returning a key and the prompt:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyWatchPlugin</span> </span>{
  getUsageInfo(globalConfig) {
    <span class="hljs-keyword">return</span> {
      <span class="hljs-attr">key</span>: <span class="hljs-string">&apos;s&apos;</span>,
      <span class="hljs-attr">prompt</span>: <span class="hljs-string">&apos;do something&apos;</span>,
    };
  }
}
</code></pre>
<p>This will add a line in the watch mode menu <em>(<code>&#x203A; Press s to do something.</code>)</em></p>
<pre><code class="hljs css language-text">Watch Usage
 &#x203A; Press p to filter by a filename regex pattern.
 &#x203A; Press t to filter by a test name regex pattern.
 &#x203A; Press q to quit watch mode.
 &#x203A; Press s to do something. // &lt;-- This is our plugin
 &#x203A; Press Enter to trigger a test run.
</code></pre>
<p><strong>Note</strong>: If the key for your plugin already exists as a default key, your plugin will override that key.</p>
<h3><a class="anchor" aria-hidden="true" id="runglobalconfig-updateconfigandrun"></a><a href="#runglobalconfig-updateconfigandrun" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a><code>run(globalConfig, updateConfigAndRun)</code></h3>
<p>To handle key press events from the key returned by <code>getUsageInfo</code>, you can implement the <code>run</code> method. This method returns a <code>Promise&lt;boolean&gt;</code> that can be resolved when the plugin wants to return control to Jest. The <code>boolean</code> specifies if Jest should rerun the tests after it gets the control back.</p>
<ul>
<li><code>globalConfig</code>: A representation of Jest&apos;s current global configuration</li>
<li><code>updateConfigAndRun</code>: Allows you to trigger a test run while the interactive plugin is running.</li>
</ul>
<pre><code class="hljs css language-javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyWatchPlugin</span> </span>{
  run(globalConfig, updateConfigAndRun) {
    <span class="hljs-comment">// do something.</span>
  }
}
</code></pre>
<p><strong>Note</strong>: If you do call <code>updateConfigAndRun</code>, your <code>run</code> method should not resolve to a truthy value, as that would trigger a double-run.</p>
<h4><a class="anchor" aria-hidden="true" id="authorized-configuration-keys"></a><a href="#authorized-configuration-keys" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Authorized configuration keys</h4>
<p>For stability and safety reasons, only part of the global configuration keys can be updated with <code>updateConfigAndRun</code>. The current white list is as follows:</p>
<ul>
<li><a href="configuration.html#bail-number--boolean"><code>bail</code></a></li>
<li><a href="cli.html#--changedsince"><code>changedSince</code></a></li>
<li><a href="configuration.html#collectcoverage-boolean"><code>collectCoverage</code></a></li>
<li><a href="configuration.html#collectcoveragefrom-array"><code>collectCoverageFrom</code></a></li>
<li><a href="configuration.html#collectcoverageonlyfrom-array"><code>collectCoverageOnlyFrom</code></a></li>
<li><a href="configuration.html#coveragedirectory-string"><code>coverageDirectory</code></a></li>
<li><a href="configuration.html#coveragereporters-arraystring"><code>coverageReporters</code></a></li>
<li><a href="configuration.html#notify-boolean"><code>notify</code></a></li>
<li><a href="configuration.html#notifymode-string"><code>notifyMode</code></a></li>
<li><a href="configuration.html#onlyfailures-boolean"><code>onlyFailures</code></a></li>
<li><a href="configuration.html#reporters-arraymodulename--modulename-options"><code>reporters</code></a></li>
<li><a href="cli.html#--testnamepatternregex"><code>testNamePattern</code></a></li>
<li><a href="cli.html#--testpathpatternregex"><code>testPathPattern</code></a></li>
<li><a href="cli.html#--updatesnapshot"><code>updateSnapshot</code></a></li>
<li><a href="configuration.html#verbose-boolean"><code>verbose</code></a></li>
</ul>
<h2><a class="anchor" aria-hidden="true" id="customization"></a><a href="#customization" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Customization</h2>
<p>Plugins can be customized via your Jest configuration.</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// jest.config.js</span>
<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-comment">// ...</span>
  <span class="hljs-attr">watchPlugins</span>: [
    [
      <span class="hljs-string">&apos;path/to/yourWatchPlugin&apos;</span>,
      {
        <span class="hljs-attr">key</span>: <span class="hljs-string">&apos;k&apos;</span>, <span class="hljs-comment">// &lt;- your custom key</span>
        <span class="hljs-attr">prompt</span>: <span class="hljs-string">&apos;show a custom prompt&apos;</span>,
      },
    ],
  ],
};
</code></pre>
<p>Recommended config names:</p>
<ul>
<li><code>key</code>: Modifies the plugin key.</li>
<li><code>prompt</code>: Allows user to customize the text in the plugin prompt.</li>
</ul>
<p>If the user provided a custom configuration, it will be passed as an argument to the plugin constructor.</p>
<pre><code class="hljs css language-javascript"><span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MyWatchPlugin</span> </span>{
  <span class="hljs-keyword">constructor</span>({config}) {}
}
</code></pre>
<h2><a class="anchor" aria-hidden="true" id="choosing-a-good-key"></a><a href="#choosing-a-good-key" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Choosing a good key</h2>
<p>Jest allows third-party plugins to override some of its built-in feature keys, but not all. Specifically, the following keys are <strong>not overwritable</strong> :</p>
<ul>
<li><code>c</code> (clears filter patterns)</li>
<li><code>i</code> (updates non-matching snapshots interactively)</li>
<li><code>q</code> (quits)</li>
<li><code>u</code> (updates all non-matching snapshots)</li>
<li><code>w</code> (displays watch mode usage / available actions)</li>
</ul>
<p>The following keys for built-in functionality <strong>can be overwritten</strong> :</p>
<ul>
<li><code>p</code> (test filename pattern)</li>
<li><code>t</code> (test name pattern)</li>
</ul>
<p>Any key not used by built-in functionality can be claimed, as you would expect. Try to avoid using keys that are difficult to obtain on various keyboards (e.g. <code>&#xE9;</code>, <code>&#x20AC;</code>), or not visible by default (e.g. many Mac keyboards do not have visual hints for characters such as <code>|</code>, <code>\</code>, <code>[</code>, etc.)</p>
<h3><a class="anchor" aria-hidden="true" id="when-a-conflict-happens"></a><a href="#when-a-conflict-happens" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>When a conflict happens</h3>
<p>Should your plugin attempt to overwrite a reserved key, Jest will error out with a descriptive message, something like:</p>
<blockquote>
<p>Watch plugin YourFaultyPlugin attempted to register key <q>, that is reserved internally for quitting watch mode. Please change the configuration key for this plugin.</q></p>
</blockquote>
<p>Third-party plugins are also forbidden to overwrite a key reserved already by another third-party plugin present earlier in the configured plugins list (<code>watchPlugins</code> array setting). When this happens, you&#x2019;ll also get an error message that tries to help you fix that:</p>
<blockquote>
<p>Watch plugins YourFaultyPlugin and TheirFaultyPlugin both attempted to register key <x>. Please change the key configuration for one of the conflicting plugins to avoid overlap.</x></p>
</blockquote>
</span></div></article>
