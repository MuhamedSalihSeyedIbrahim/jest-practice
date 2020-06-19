<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/TutorialReact.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Testing React Apps</h1></header><article><div><span><p>At Facebook, we use Jest to test <a href="https://reactjs.org/">React</a> applications.</p>
<h2><a class="anchor" aria-hidden="true" id="setup"></a><a href="#setup" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Setup</h2>
<h3><a class="anchor" aria-hidden="true" id="setup-with-create-react-app"></a><a href="#setup-with-create-react-app" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Setup with Create React App</h3>
<p>If you are new to React, we recommend using <a href="https://create-react-app.dev/">Create React App</a>. It is ready to use and <a href="https://create-react-app.dev/docs/running-tests/#docsNav">ships with Jest</a>! You will only need to add <code>react-test-renderer</code> for rendering snapshots.</p>
<p>Run</p>
<pre><code class="hljs css language-bash">yarn add --dev react-test-renderer
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="setup-without-create-react-app"></a><a href="#setup-without-create-react-app" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Setup without Create React App</h3>
<p>If you have an existing application you&apos;ll need to install a few packages to make everything work well together. We are using the <code>babel-jest</code> package and the <code>react</code> babel preset to transform our code inside of the test environment. Also see <a href="/docs/en/getting-started#using-babel">using babel</a>.</p>
<p>Run</p>
<pre><code class="hljs css language-bash">yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer
</code></pre>
<p>Your <code>package.json</code> should look something like this (where <code>&lt;current-version&gt;</code> is the actual latest version number for the package). Please add the scripts and jest configuration entries:</p>
<pre><code class="hljs css language-json">// package.json
  &quot;dependencies&quot;: {
    &quot;react&quot;: &quot;&lt;current-version&gt;&quot;,
    &quot;react-dom&quot;: &quot;&lt;current-version&gt;&quot;
  },
  &quot;devDependencies&quot;: {
    &quot;@babel/preset-env&quot;: &quot;&lt;current-version&gt;&quot;,
    &quot;@babel/preset-react&quot;: &quot;&lt;current-version&gt;&quot;,
    &quot;babel-jest&quot;: &quot;&lt;current-version&gt;&quot;,
    &quot;jest&quot;: &quot;&lt;current-version&gt;&quot;,
    &quot;react-test-renderer&quot;: &quot;&lt;current-version&gt;&quot;
  },
  &quot;scripts&quot;: {
    &quot;test&quot;: &quot;jest&quot;
  }
</code></pre>
<pre><code class="hljs css language-js"><span class="hljs-comment">// babel.config.js</span>
<span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">presets</span>: [<span class="hljs-string">&apos;@babel/preset-env&apos;</span>, <span class="hljs-string">&apos;@babel/preset-react&apos;</span>],
};
</code></pre>
<p><strong>And you&apos;re good to go!</strong></p>
<h3><a class="anchor" aria-hidden="true" id="snapshot-testing"></a><a href="#snapshot-testing" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Snapshot Testing</h3>
<p>Let&apos;s create a <a href="/docs/en/snapshot-testing">snapshot test</a> for a Link component that renders hyperlinks:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// Link.react.js</span>
<span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react&apos;</span>;

<span class="hljs-keyword">const</span> STATUS = {
<span class="hljs-attr">HOVERED</span>: <span class="hljs-string">&apos;hovered&apos;</span>,
<span class="hljs-attr">NORMAL</span>: <span class="hljs-string">&apos;normal&apos;</span>,
};

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Link</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
<span class="hljs-keyword">constructor</span>(props) {
<span class="hljs-keyword">super</span>(props);

    <span class="hljs-keyword">this</span>._onMouseEnter = <span class="hljs-keyword">this</span>._onMouseEnter.bind(<span class="hljs-keyword">this</span>);
    <span class="hljs-keyword">this</span>._onMouseLeave = <span class="hljs-keyword">this</span>._onMouseLeave.bind(<span class="hljs-keyword">this</span>);

    <span class="hljs-keyword">this</span>.state = {
      <span class="hljs-attr">class</span>: STATUS.NORMAL,
    };

}

\_onMouseEnter() {
<span class="hljs-keyword">this</span>.setState({<span class="hljs-attr">class</span>: STATUS.HOVERED});
}

\_onMouseLeave() {
<span class="hljs-keyword">this</span>.setState({<span class="hljs-attr">class</span>: STATUS.NORMAL});
}

render() {
<span class="hljs-keyword">return</span> (
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">a</span>
<span class="hljs-attr">className</span>=<span class="hljs-string">{this.state.class}</span>
<span class="hljs-attr">href</span>=<span class="hljs-string">{this.props.page</span> || &apos;#&apos;}
<span class="hljs-attr">onMouseEnter</span>=<span class="hljs-string">{this.\_onMouseEnter}</span>
<span class="hljs-attr">onMouseLeave</span>=<span class="hljs-string">{this.\_onMouseLeave}</span>
&gt;</span>
{this.props.children}
<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span></span>
);
}
}
</code></pre>

<p>Now let&apos;s use React&apos;s test renderer and Jest&apos;s snapshot feature to interact with the component and capture the rendered output and create a snapshot file:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// Link.react.test.js</span>
<span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react&apos;</span>;
<span class="hljs-keyword">import</span> Link <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;../Link.react&apos;</span>;
<span class="hljs-keyword">import</span> renderer <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react-test-renderer&apos;</span>;

test(<span class="hljs-string">&apos;Link changes the class when hovered&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> component = renderer.create(
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Link</span> <span class="hljs-attr">page</span>=<span class="hljs-string">&quot;http://www.facebook.com&quot;</span>&gt;</span>Facebook<span class="hljs-tag">&lt;/<span class="hljs-name">Link</span>&gt;</span></span>,
);
<span class="hljs-keyword">let</span> tree = component.toJSON();
expect(tree).toMatchSnapshot();

<span class="hljs-comment">// manually trigger the callback</span>
tree.props.onMouseEnter();
<span class="hljs-comment">// re-rendering</span>
tree = component.toJSON();
expect(tree).toMatchSnapshot();

<span class="hljs-comment">// manually trigger the callback</span>
tree.props.onMouseLeave();
<span class="hljs-comment">// re-rendering</span>
tree = component.toJSON();
expect(tree).toMatchSnapshot();
});
</code></pre>

<p>When you run <code>yarn test</code> or <code>jest</code>, this will produce an output file like this:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// __tests__/__snapshots__/Link.react.test.js.snap</span>
exports[<span class="hljs-string">`Link changes the class when hovered 1`</span>] = <span class="hljs-string">`
&lt;a
  className=&quot;normal&quot;
  href=&quot;http://www.facebook.com&quot;
  onMouseEnter={[Function]}
  onMouseLeave={[Function]}&gt;
  Facebook
&lt;/a&gt;
`</span>;

exports[<span class="hljs-string">`Link changes the class when hovered 2`</span>] = <span class="hljs-string">`&lt;a className=&quot;hovered&quot; href=&quot;http://www.facebook.com&quot; onMouseEnter={[Function]} onMouseLeave={[Function]}&gt; Facebook &lt;/a&gt;`</span>;

exports[<span class="hljs-string">`Link changes the class when hovered 3`</span>] = <span class="hljs-string">`&lt;a className=&quot;normal&quot; href=&quot;http://www.facebook.com&quot; onMouseEnter={[Function]} onMouseLeave={[Function]}&gt; Facebook &lt;/a&gt;`</span>;
</code></pre>

<p>The next time you run the tests, the rendered output will be compared to the previously created snapshot. The snapshot should be committed along code changes. When a snapshot test fails, you need to inspect whether it is an intended or unintended change. If the change is expected you can invoke Jest with <code>jest -u</code> to overwrite the existing snapshot.</p>
<p>The code for this example is available at <a href="https://github.com/facebook/jest/tree/master/examples/snapshot">examples/snapshot</a>.</p>
<h4><a class="anchor" aria-hidden="true" id="snapshot-testing-with-mocks-enzyme-and-react-16"></a><a href="#snapshot-testing-with-mocks-enzyme-and-react-16" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Snapshot Testing with Mocks, Enzyme and React 16</h4>
<p>There&apos;s a caveat around snapshot testing when using Enzyme and React 16+. If you mock out a module using the following style:</p>
<pre><code class="hljs css language-js">jest.mock(<span class="hljs-string">&apos;../SomeDirectory/SomeComponent&apos;</span>, () =&gt; <span class="hljs-string">&apos;SomeComponent&apos;</span>);
</code></pre>
<p>Then you will see warnings in the console:</p>
<pre><code class="hljs css language-bash">Warning: &lt;SomeComponent /&gt; is using uppercase HTML. Always use lowercase HTML tags <span class="hljs-keyword">in</span> React.

<span class="hljs-comment"># Or:</span>
Warning: The tag &lt;SomeComponent&gt; is unrecognized <span class="hljs-keyword">in</span> this browser. If you meant to render a React component, start its name with an uppercase letter.
</code></pre>

<p>React 16 triggers these warnings due to how it checks element types, and the mocked module fails these checks. Your options are:</p>
<ol>
<li>Render as text. This way you won&apos;t see the props passed to the mock component in the snapshot, but it&apos;s straightforward:
<pre><code class="hljs css language-js">jest.mock(<span class="hljs-string">&apos;./SomeComponent&apos;</span>, () =&gt; <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-string">&apos;SomeComponent&apos;</span>);
</code></pre></li>
<li>Render as a custom element. DOM &quot;custom elements&quot; aren&apos;t checked for anything and shouldn&apos;t fire warnings. They are lowercase and have a dash in the name.
<pre><code class="hljs css language-js">jest.mock(<span class="hljs-string">&apos;./Widget&apos;</span>, () =&gt; <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">mock-widget</span> /&gt;</span></span>);
</code></pre></li>
<li>Use <code>react-test-renderer</code>. The test renderer doesn&apos;t care about element types and will happily accept e.g. <code>SomeComponent</code>. You could check snapshots using the test renderer, and check component behavior separately using Enzyme.</li>
<li>Disable warnings all together (should be done in your jest setup file):
<pre><code class="hljs css language-js">jest.mock(<span class="hljs-string">&apos;fbjs/lib/warning&apos;</span>, () =&gt; <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;fbjs/lib/emptyFunction&apos;</span>));
</code></pre>
This shouldn&apos;t normally be your option of choice as useful warnings could be lost. However, in some cases, for example when testing react-native&apos;s components we are rendering react-native tags into the DOM and many warnings are irrelevant. Another option is to swizzle the console.warn and suppress specific warnings.</li>
</ol>
<h3><a class="anchor" aria-hidden="true" id="dom-testing"></a><a href="#dom-testing" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>DOM Testing</h3>
<p>If you&apos;d like to assert, and manipulate your rendered components you can use <a href="https://github.com/kentcdodds/react-testing-library">react-testing-library</a>, <a href="http://airbnb.io/enzyme/">Enzyme</a>, or React&apos;s <a href="https://reactjs.org/docs/test-utils.html">TestUtils</a>. The following two examples use react-testing-library and Enzyme.</p>
<h4><a class="anchor" aria-hidden="true" id="react-testing-library"></a><a href="#react-testing-library" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>react-testing-library</h4>
<p>You have to run <code>yarn add --dev @testing-library/react</code> to use react-testing-library.</p>
<p>Let&apos;s implement a checkbox which swaps between two labels:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// CheckboxWithLabel.js</span>

<span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react&apos;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">CheckboxWithLabel</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
<span class="hljs-keyword">constructor</span>(props) {
<span class="hljs-keyword">super</span>(props);
<span class="hljs-keyword">this</span>.state = {<span class="hljs-attr">isChecked</span>: <span class="hljs-literal">false</span>};

    <span class="hljs-comment">// bind manually because React class components don&apos;t auto-bind</span>
    <span class="hljs-comment">// https://reactjs.org/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding</span>
    <span class="hljs-keyword">this</span>.onChange = <span class="hljs-keyword">this</span>.onChange.bind(<span class="hljs-keyword">this</span>);

}

onChange() {
<span class="hljs-keyword">this</span>.setState({<span class="hljs-attr">isChecked</span>: !<span class="hljs-keyword">this</span>.state.isChecked});
}

render() {
<span class="hljs-keyword">return</span> (
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">input</span>
<span class="hljs-attr">type</span>=<span class="hljs-string">&quot;checkbox&quot;</span>
<span class="hljs-attr">checked</span>=<span class="hljs-string">{this.state.isChecked}</span>
<span class="hljs-attr">onChange</span>=<span class="hljs-string">{this.onChange}</span>
/&gt;</span>
{this.state.isChecked ? this.props.labelOn : this.props.labelOff}
<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span></span>
);
}
}
</code></pre>

<pre><code class="hljs css language-javascript"><span class="hljs-comment">// __tests__/CheckboxWithLabel-test.js</span>
<span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react&apos;</span>;
<span class="hljs-keyword">import</span> {cleanup, fireEvent, render} <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;@testing-library/react&apos;</span>;
<span class="hljs-keyword">import</span> CheckboxWithLabel <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;../CheckboxWithLabel&apos;</span>;

<span class="hljs-comment">// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher</span>
<span class="hljs-comment">// unmount and cleanup DOM after the test is finished.</span>
afterEach(cleanup);

it(<span class="hljs-string">&apos;CheckboxWithLabel changes the text after click&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> {queryByLabelText, getByLabelText} = render(
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">CheckboxWithLabel</span> <span class="hljs-attr">labelOn</span>=<span class="hljs-string">&quot;On&quot;</span> <span class="hljs-attr">labelOff</span>=<span class="hljs-string">&quot;Off&quot;</span> /&gt;</span></span>,
  );

  expect(queryByLabelText(<span class="hljs-regexp">/off/i</span>)).toBeTruthy();

  fireEvent.click(getByLabelText(<span class="hljs-regexp">/off/i</span>));

  expect(queryByLabelText(<span class="hljs-regexp">/on/i</span>)).toBeTruthy();
});
</code></pre>
<p>The code for this example is available at <a href="https://github.com/facebook/jest/tree/master/examples/react-testing-library">examples/react-testing-library</a>.</p>
<h4><a class="anchor" aria-hidden="true" id="enzyme"></a><a href="#enzyme" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Enzyme</h4>
<p>You have to run <code>yarn add --dev enzyme</code> to use Enzyme. If you are using a React version below 15.5.0, you will also need to install <code>react-addons-test-utils</code>.</p>
<p>Let&apos;s rewrite the test from above using Enzyme instead of react-testing-library. We use Enzyme&apos;s <a href="http://airbnb.io/enzyme/docs/api/shallow.html">shallow renderer</a> in this example.</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// __tests__/CheckboxWithLabel-test.js</span>

<span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react&apos;</span>;
<span class="hljs-keyword">import</span> {shallow} <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;enzyme&apos;</span>;
<span class="hljs-keyword">import</span> CheckboxWithLabel <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;../CheckboxWithLabel&apos;</span>;

test(<span class="hljs-string">&apos;CheckboxWithLabel changes the text after click&apos;</span>, () =&gt; {
<span class="hljs-comment">// Render a checkbox with label in the document</span>
<span class="hljs-keyword">const</span> checkbox = shallow(<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">CheckboxWithLabel</span> <span class="hljs-attr">labelOn</span>=<span class="hljs-string">&quot;On&quot;</span> <span class="hljs-attr">labelOff</span>=<span class="hljs-string">&quot;Off&quot;</span> /&gt;</span></span>);

expect(checkbox.text()).toEqual(<span class="hljs-string">&apos;Off&apos;</span>);

checkbox.find(<span class="hljs-string">&apos;input&apos;</span>).simulate(<span class="hljs-string">&apos;change&apos;</span>);

expect(checkbox.text()).toEqual(<span class="hljs-string">&apos;On&apos;</span>);
});
</code></pre>

<p>The code for this example is available at <a href="https://github.com/facebook/jest/tree/master/examples/enzyme">examples/enzyme</a>.</p>
<h3><a class="anchor" aria-hidden="true" id="custom-transformers"></a><a href="#custom-transformers" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Custom transformers</h3>
<p>If you need more advanced functionality, you can also build your own transformer. Instead of using babel-jest, here is an example of using babel:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// custom-transformer.js</span>
<span class="hljs-meta">&apos;use strict&apos;</span>;

<span class="hljs-keyword">const</span> {transform} = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;@babel/core&apos;</span>);
<span class="hljs-keyword">const</span> jestPreset = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;babel-preset-jest&apos;</span>);

<span class="hljs-built_in">module</span>.exports = {
process(src, filename) {
<span class="hljs-keyword">const</span> result = transform(src, {
filename,
<span class="hljs-attr">presets</span>: [jestPreset],
});

    <span class="hljs-keyword">return</span> result ? result.code : src;

},
};
</code></pre>

<p>Don&apos;t forget to install the <code>@babel/core</code> and <code>babel-preset-jest</code> packages for this example to work.</p>
<p>To make this work with Jest you need to update your Jest configuration with this: <code>&quot;transform&quot;: {&quot;\\.js$&quot;: &quot;path/to/custom-transformer.js&quot;}</code>.</p>
<p>If you&apos;d like to build a transformer with babel support, you can also use babel-jest to compose one and pass in your custom configuration options:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-keyword">const</span> babelJest = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;babel-jest&apos;</span>);

<span class="hljs-built_in">module</span>.exports = babelJest.createTransformer({
<span class="hljs-attr">presets</span>: [<span class="hljs-string">&apos;my-custom-preset&apos;</span>],
});
</code></pre>
</span></div></article>
