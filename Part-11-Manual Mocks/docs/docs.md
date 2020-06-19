<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/ManualMocks.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Manual Mocks</h1></header><article><div><span><p>Manual mocks are used to stub out functionality with mock data. For example, instead of accessing a remote resource like a website or a database, you might want to create a manual mock that allows you to use fake data. This ensures your tests will be fast and not flaky.</p>
<h2><a class="anchor" aria-hidden="true" id="mocking-user-modules"></a><a href="#mocking-user-modules" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Mocking user modules</h2>
<p>Manual mocks are defined by writing a module in a <code>__mocks__/</code> subdirectory immediately adjacent to the module. For example, to mock a module called <code>user</code> in the <code>models</code> directory, create a file called <code>user.js</code> and put it in the <code>models/__mocks__</code> directory. Note that the <code>__mocks__</code> folder is case-sensitive, so naming the directory <code>__MOCKS__</code> will break on some systems.</p>
<blockquote>
<p>When we require that module in our tests, explicitly calling <code>jest.mock(&apos;./moduleName&apos;)</code> is <strong>required</strong>.</p>
</blockquote>
<h2><a class="anchor" aria-hidden="true" id="mocking-node-modules"></a><a href="#mocking-node-modules" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Mocking Node modules</h2>
<p>If the module you are mocking is a Node module (e.g.: <code>lodash</code>), the mock should be placed in the <code>__mocks__</code> directory adjacent to <code>node_modules</code> (unless you configured <a href="/docs/en/configuration#roots-arraystring"><code>roots</code></a> to point to a folder other than the project root) and will be <strong>automatically</strong> mocked. There&apos;s no need to explicitly call <code>jest.mock(&apos;module_name&apos;)</code>.</p>
<p>Scoped modules can be mocked by creating a file in a directory structure that matches the name of the scoped module. For example, to mock a scoped module called <code>@scope/project-name</code>, create a file at <code>__mocks__/@scope/project-name.js</code>, creating the <code>@scope/</code> directory accordingly.</p>
<blockquote>
<p>Warning: If we want to mock Node&apos;s core modules (e.g.: <code>fs</code> or <code>path</code>), then explicitly calling e.g. <code>jest.mock(&apos;path&apos;)</code> is <strong>required</strong>, because core Node modules are not mocked by default.</p>
</blockquote>
<h2><a class="anchor" aria-hidden="true" id="examples"></a><a href="#examples" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Examples</h2>
<pre><code class="hljs css language-bash">.
&#x251C;&#x2500;&#x2500; config
&#x251C;&#x2500;&#x2500; __mocks__
&#x2502;   &#x2514;&#x2500;&#x2500; fs.js
&#x251C;&#x2500;&#x2500; models
&#x2502;   &#x251C;&#x2500;&#x2500; __mocks__
&#x2502;   &#x2502;   &#x2514;&#x2500;&#x2500; user.js
&#x2502;   &#x2514;&#x2500;&#x2500; user.js
&#x251C;&#x2500;&#x2500; node_modules
&#x2514;&#x2500;&#x2500; views
</code></pre>
<p>When a manual mock exists for a given module, Jest&apos;s module system will use that module when explicitly calling <code>jest.mock(&apos;moduleName&apos;)</code>. However, when <code>automock</code> is set to <code>true</code>, the manual mock implementation will be used instead of the automatically created mock, even if <code>jest.mock(&apos;moduleName&apos;)</code> is not called. To opt out of this behavior you will need to explicitly call <code>jest.unmock(&apos;moduleName&apos;)</code> in tests that should use the actual module implementation.</p>
<blockquote>
<p>Note: In order to mock properly, Jest needs <code>jest.mock(&apos;moduleName&apos;)</code> to be in the same scope as the <code>require/import</code> statement.</p>
</blockquote>
<p>Here&apos;s a contrived example where we have a module that provides a summary of all the files in a given directory. In this case we use the core (built in) <code>fs</code> module.</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// FileSummarizer.js</span>
<span class="hljs-meta">&apos;use strict&apos;</span>;

<span class="hljs-keyword">const</span> fs = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;fs&apos;</span>);

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">summarizeFilesInDirectorySync</span>(<span class="hljs-params">directory</span>) </span>{
<span class="hljs-keyword">return</span> fs.readdirSync(directory).map(<span class="hljs-function"><span class="hljs-params">fileName</span> =&gt;</span> ({
directory,
fileName,
}));
}

exports.summarizeFilesInDirectorySync = summarizeFilesInDirectorySync;
</code></pre>

<p>Since we&apos;d like our tests to avoid actually hitting the disk (that&apos;s pretty slow and fragile), we create a manual mock for the <code>fs</code> module by extending an automatic mock. Our manual mock will implement custom versions of the <code>fs</code> APIs that we can build on for our tests:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// __mocks__/fs.js</span>
<span class="hljs-meta">&apos;use strict&apos;</span>;

<span class="hljs-keyword">const</span> path = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;path&apos;</span>);

<span class="hljs-keyword">const</span> fs = jest.genMockFromModule(<span class="hljs-string">&apos;fs&apos;</span>);

<span class="hljs-comment">// This is a custom function that our tests can use during setup to specify</span>
<span class="hljs-comment">// what the files on the &quot;mock&quot; filesystem should look like when any of the</span>
<span class="hljs-comment">// `fs` APIs are used.</span>
<span class="hljs-keyword">let</span> mockFiles = <span class="hljs-built_in">Object</span>.create(<span class="hljs-literal">null</span>);
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">\_\_setMockFiles</span>(<span class="hljs-params">newMockFiles</span>) </span>{
mockFiles = <span class="hljs-built_in">Object</span>.create(<span class="hljs-literal">null</span>);
<span class="hljs-keyword">for</span> (<span class="hljs-keyword">const</span> file <span class="hljs-keyword">in</span> newMockFiles) {
<span class="hljs-keyword">const</span> dir = path.dirname(file);

    <span class="hljs-keyword">if</span> (!mockFiles[dir]) {
      mockFiles[dir] = [];
    }
    mockFiles[dir].push(path.basename(file));

}
}

<span class="hljs-comment">// A custom version of `readdirSync` that reads from the special mocked out</span>
<span class="hljs-comment">// file list set via \_\_setMockFiles</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">readdirSync</span>(<span class="hljs-params">directoryPath</span>) </span>{
<span class="hljs-keyword">return</span> mockFiles[directoryPath] || [];
}

fs.**setMockFiles = **setMockFiles;
fs.readdirSync = readdirSync;

<span class="hljs-built_in">module</span>.exports = fs;
</code></pre>

<p>Now we write our test. Note that we need to explicitly tell that we want to mock the <code>fs</code> module because it&#x2019;s a core Node module:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// __tests__/FileSummarizer-test.js</span>
<span class="hljs-meta">&apos;use strict&apos;</span>;

jest.mock(<span class="hljs-string">&apos;fs&apos;</span>);

describe(<span class="hljs-string">&apos;listFilesInDirectorySync&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> MOCK_FILE_INFO = {
<span class="hljs-string">&apos;/path/to/file1.js&apos;</span>: <span class="hljs-string">&apos;console.log(&quot;file1 contents&quot;);&apos;</span>,
<span class="hljs-string">&apos;/path/to/file2.txt&apos;</span>: <span class="hljs-string">&apos;file2 contents&apos;</span>,
};

beforeEach(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-comment">// Set up some mocked out file info before each test</span>
<span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;fs&apos;</span>).\_\_setMockFiles(MOCK_FILE_INFO);
});

test(<span class="hljs-string">&apos;includes all files in the directory in the summary&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> FileSummarizer = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;../FileSummarizer&apos;</span>);
<span class="hljs-keyword">const</span> fileSummary = FileSummarizer.summarizeFilesInDirectorySync(
<span class="hljs-string">&apos;/path/to&apos;</span>,
);

    expect(fileSummary.length).toBe(<span class="hljs-number">2</span>);

});
});
</code></pre>

<p>The example mock shown here uses <a href="/docs/en/jest-object#jestgenmockfrommodulemodulename"><code>jest.genMockFromModule</code></a> to generate an automatic mock, and overrides its default behavior. This is the recommended approach, but is completely optional. If you do not want to use the automatic mock at all, you can export your own functions from the mock file. One downside to fully manual mocks is that they&apos;re manual &#x2013; meaning you have to manually update them any time the module they are mocking changes. Because of this, it&apos;s best to use or extend the automatic mock when it works for your needs.</p>
<p>To ensure that a manual mock and its real implementation stay in sync, it might be useful to require the real module using <a href="/docs/en/jest-object#jestrequireactualmodulename"><code>jest.requireActual(moduleName)</code></a> in your manual mock and amending it with mock functions before exporting it.</p>
<p>The code for this example is available at <a href="https://github.com/facebook/jest/tree/master/examples/manual-mocks">examples/manual-mocks</a>.</p>
<h2><a class="anchor" aria-hidden="true" id="using-with-es-module-imports"></a><a href="#using-with-es-module-imports" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Using with ES module imports</h2>
<p>If you&apos;re using <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import">ES module imports</a> then you&apos;ll normally be inclined to put your <code>import</code> statements at the top of the test file. But often you need to instruct Jest to use a mock before modules use it. For this reason, Jest will automatically hoist <code>jest.mock</code> calls to the top of the module (before any imports). To learn more about this and see it in action, see <a href="https://github.com/kentcdodds/how-jest-mocking-works">this repo</a>.</p>
<h2><a class="anchor" aria-hidden="true" id="mocking-methods-which-are-not-implemented-in-jsdom"></a><a href="#mocking-methods-which-are-not-implemented-in-jsdom" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Mocking methods which are not implemented in JSDOM</h2>
<p>If some code uses a method which JSDOM (the DOM implementation used by Jest) hasn&apos;t implemented yet, testing it is not easily possible. This is e.g. the case with <code>window.matchMedia()</code>. Jest returns <code>TypeError: window.matchMedia is not a function</code> and doesn&apos;t properly execute the test.</p>
<p>In this case, mocking <code>matchMedia</code> in the test file should solve the issue:</p>
<pre><code class="hljs css language-js"><span class="hljs-built_in">Object</span>.defineProperty(<span class="hljs-built_in">window</span>, <span class="hljs-string">&apos;matchMedia&apos;</span>, {
  <span class="hljs-attr">writable</span>: <span class="hljs-literal">true</span>,
  <span class="hljs-attr">value</span>: jest.fn().mockImplementation(<span class="hljs-function"><span class="hljs-params">query</span> =&gt;</span> ({
    <span class="hljs-attr">matches</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">media</span>: query,
    <span class="hljs-attr">onchange</span>: <span class="hljs-literal">null</span>,
    <span class="hljs-attr">addListener</span>: jest.fn(), <span class="hljs-comment">// deprecated</span>
    <span class="hljs-attr">removeListener</span>: jest.fn(), <span class="hljs-comment">// deprecated</span>
    <span class="hljs-attr">addEventListener</span>: jest.fn(),
    <span class="hljs-attr">removeEventListener</span>: jest.fn(),
    <span class="hljs-attr">dispatchEvent</span>: jest.fn(),
  })),
});
</code></pre>
<p>This works if <code>window.matchMedia()</code> is used in a function (or method) which is invoked in the test. If <code>window.matchMedia()</code> is executed directly in the tested file, Jest reports the same error. In this case, the solution is to move the manual mock into a separate file and include this one in the test <strong>before</strong> the tested file:</p>
<pre><code class="hljs css language-js"><span class="hljs-keyword">import</span> <span class="hljs-string">&apos;./matchMedia.mock&apos;</span>; <span class="hljs-comment">// Must be imported before the tested file</span>
<span class="hljs-keyword">import</span> {myMethod} <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./file-to-test&apos;</span>;

describe(<span class="hljs-string">&apos;myMethod()&apos;</span>, () =&gt; {
<span class="hljs-comment">// Test the method here...</span>
});
</code></pre>
</span></div></article>
