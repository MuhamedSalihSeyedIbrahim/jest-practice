<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/TutorialReactNative.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Testing React Native Apps</h1></header><article><div><span><p>At Facebook, we use Jest to test <a href="https://reactnative.dev/">React Native</a> applications.</p>
<p>Get a deeper insight into testing a working React Native app example by reading the following series: <a href="https://callstack.com/blog/testing-react-native-with-the-new-jest-part-1-snapshots-come-into-play/">Part 1: Jest &#x2013; Snapshot come into play</a> and <a href="https://callstack.com/blog/testing-react-native-with-the-new-jest-part-2-redux-snapshots-for-your-actions-and-reducers/">Part 2: Jest &#x2013; Redux Snapshots for your Actions and Reducers</a>.</p>
<h2><a class="anchor" aria-hidden="true" id="setup"></a><a href="#setup" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Setup</h2>
<p>Starting from react-native version 0.38, a Jest setup is included by default when running <code>react-native init</code>. The following configuration should be automatically added to your package.json file:</p>
<pre><code class="hljs css language-json">// package.json
  &quot;scripts&quot;: {
    &quot;test&quot;: &quot;jest&quot;
  },
  &quot;jest&quot;: {
    &quot;preset&quot;: &quot;react-native&quot;
  }
</code></pre>
<p><em>Note: If you are upgrading your react-native application and previously used the <code>jest-react-native</code> preset, remove the dependency from your <code>package.json</code> file and change the preset to <code>react-native</code> instead.</em></p>
<p>Run <code>yarn test</code> to run tests with Jest.</p>
<h2><a class="anchor" aria-hidden="true" id="snapshot-test"></a><a href="#snapshot-test" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Snapshot Test</h2>
<p>Let&apos;s create a <a href="/docs/en/snapshot-testing">snapshot test</a> for a small intro component with a few views and text components and some styles:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// Intro.js</span>
<span class="hljs-keyword">import</span> React, {Component} <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react&apos;</span>;
<span class="hljs-keyword">import</span> {StyleSheet, Text, View} <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react-native&apos;</span>;

<span class="hljs-keyword">const</span> styles = StyleSheet.create({
<span class="hljs-attr">container</span>: {
<span class="hljs-attr">alignItems</span>: <span class="hljs-string">&apos;center&apos;</span>,
<span class="hljs-attr">backgroundColor</span>: <span class="hljs-string">&apos;#F5FCFF&apos;</span>,
<span class="hljs-attr">flex</span>: <span class="hljs-number">1</span>,
<span class="hljs-attr">justifyContent</span>: <span class="hljs-string">&apos;center&apos;</span>,
},
<span class="hljs-attr">instructions</span>: {
<span class="hljs-attr">color</span>: <span class="hljs-string">&apos;#333333&apos;</span>,
<span class="hljs-attr">marginBottom</span>: <span class="hljs-number">5</span>,
<span class="hljs-attr">textAlign</span>: <span class="hljs-string">&apos;center&apos;</span>,
},
<span class="hljs-attr">welcome</span>: {
<span class="hljs-attr">fontSize</span>: <span class="hljs-number">20</span>,
<span class="hljs-attr">margin</span>: <span class="hljs-number">10</span>,
<span class="hljs-attr">textAlign</span>: <span class="hljs-string">&apos;center&apos;</span>,
},
});

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Intro</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Component</span> </span>{
render() {
<span class="hljs-keyword">return</span> (
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">View</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{styles.container}</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Text</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{styles.welcome}</span>&gt;</span>Welcome to React Native!<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Text</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{styles.instructions}</span>&gt;</span>
This is a React Native snapshot test.
<span class="hljs-tag">&lt;/<span class="hljs-name">Text</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span></span>
);
}
}
</code></pre>

<p>Now let&apos;s use React&apos;s test renderer and Jest&apos;s snapshot feature to interact with the component and capture the rendered output and create a snapshot file:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// __tests__/Intro-test.js</span>
<span class="hljs-keyword">import</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react&apos;</span>;
<span class="hljs-keyword">import</span> Intro <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;../Intro&apos;</span>;

<span class="hljs-keyword">import</span> renderer <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;react-test-renderer&apos;</span>;

test(<span class="hljs-string">&apos;renders correctly&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> tree = renderer.create(<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Intro</span> /&gt;</span></span>).toJSON();
expect(tree).toMatchSnapshot();
});
</code></pre>

<p>When you run <code>yarn test</code> or <code>jest</code>, this will produce an output file like this:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// __tests__/__snapshots__/Intro-test.js.snap</span>
exports[<span class="hljs-string">`Intro renders correctly 1`</span>] = <span class="hljs-string">`
&lt;View
  style={
    Object {
      &quot;alignItems&quot;: &quot;center&quot;,
      &quot;backgroundColor&quot;: &quot;#F5FCFF&quot;,
      &quot;flex&quot;: 1,
      &quot;justifyContent&quot;: &quot;center&quot;,
    }
  }&gt;
  &lt;Text
    style={
      Object {
        &quot;fontSize&quot;: 20,
        &quot;margin&quot;: 10,
        &quot;textAlign&quot;: &quot;center&quot;,
      }
    }&gt;
    Welcome to React Native!
  &lt;/Text&gt;
  &lt;Text
    style={
      Object {
        &quot;color&quot;: &quot;#333333&quot;,
        &quot;marginBottom&quot;: 5,
        &quot;textAlign&quot;: &quot;center&quot;,
      }
    }&gt;
    This is a React Native snapshot test.
  &lt;/Text&gt;
&lt;/View&gt;
`</span>;
</code></pre>
<p>The next time you run the tests, the rendered output will be compared to the previously created snapshot. The snapshot should be committed along code changes. When a snapshot test fails, you need to inspect whether it is an intended or unintended change. If the change is expected you can invoke Jest with <code>jest -u</code> to overwrite the existing snapshot.</p>
<p>The code for this example is available at <a href="https://github.com/facebook/jest/tree/master/examples/react-native">examples/react-native</a>.</p>
<h2><a class="anchor" aria-hidden="true" id="preset-configuration"></a><a href="#preset-configuration" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Preset configuration</h2>
<p>The preset sets up the environment and is very opinionated and based on what we found to be useful at Facebook. All of the configuration options can be overwritten just as they can be customized when no preset is used.</p>
<h3><a class="anchor" aria-hidden="true" id="environment"></a><a href="#environment" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Environment</h3>
<p><code>react-native</code> ships with a Jest preset, so the <code>jest.preset</code> field of your <code>package.json</code> should point to <code>react-native</code>. The preset is a node environment that mimics the environment of a React Native app. Because it doesn&apos;t load any DOM or browser APIs, it greatly improves Jest&apos;s startup time.</p>
<h3><a class="anchor" aria-hidden="true" id="transformignorepatterns-customization"></a><a href="#transformignorepatterns-customization" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>transformIgnorePatterns customization</h3>
<p>The <a href="configuration.html#transformignorepatterns-arraystring"><code>transformIgnorePatterns</code></a> option can be used to whitelist or blacklist files from being transformed with Babel. Many react-native npm modules unfortunately don&apos;t pre-compile their source code before publishing.</p>
<p>By default the jest-react-native preset only processes the project&apos;s own source files and react-native. If you have npm dependencies that have to be transformed you can customize this configuration option by whitelisting modules other than react-native:</p>
<pre><code class="hljs css language-json">&quot;transformIgnorePatterns&quot;: [
  &quot;node_modules/(?!(react-native|my-project|react-native-button)/)&quot;
]
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="setupfiles"></a><a href="#setupfiles" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>setupFiles</h3>
<p>If you&apos;d like to provide additional configuration for every test file, the <a href="configuration.html#setupfiles-array"><code>setupFiles</code> configuration option</a> can be used to specify setup scripts.</p>
<h3><a class="anchor" aria-hidden="true" id="modulenamemapper"></a><a href="#modulenamemapper" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>moduleNameMapper</h3>
<p>The <a href="configuration.html#modulenamemapper-objectstring-string--arraystring"><code>moduleNameMapper</code></a> can be used to map a module path to a different module. By default the preset maps all images to an image stub module but if a module cannot be found this configuration option can help:</p>
<pre><code class="hljs css language-json">&quot;moduleNameMapper&quot;: {
  &quot;my-module.js&quot;: &quot;&lt;rootDir&gt;/path/to/my-module.js&quot;
}
</code></pre>
<h2><a class="anchor" aria-hidden="true" id="tips"></a><a href="#tips" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Tips</h2>
<h3><a class="anchor" aria-hidden="true" id="mock-native-modules-using-jestmock"></a><a href="#mock-native-modules-using-jestmock" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Mock native modules using jest.mock</h3>
<p>The Jest preset built into <code>react-native</code> comes with a few default mocks that are applied on a react-native repository. However some react-native components or third party components rely on native code to be rendered. In such cases, Jest&apos;s manual mocking system can help to mock out the underlying implementation.</p>
<p>For example, if your code depends on a third party native video component called <code>react-native-video</code> you might want to stub it out with a manual mock like this:</p>
<pre><code class="hljs css language-js">jest.mock(<span class="hljs-string">&apos;react-native-video&apos;</span>, () =&gt; <span class="hljs-string">&apos;Video&apos;</span>);
</code></pre>
<p>This will render the component as <code>&lt;Video {...props} /&gt;</code> with all of its props in the snapshot output. See also <a href="tutorial-react.html#snapshot-testing-with-mocks-enzyme-and-react-16">caveats around Enzyme and React 16</a>.</p>
<p>Sometimes you need to provide a more complex manual mock. For example if you&apos;d like to forward the prop types or static fields of a native component to a mock, you can return a different React component from a mock through this helper from jest-react-native:</p>
<pre><code class="hljs css language-js">jest.mock(<span class="hljs-string">&apos;path/to/MyNativeComponent&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> mockComponent = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;react-native/jest/mockComponent&apos;</span>);
  <span class="hljs-keyword">return</span> mockComponent(<span class="hljs-string">&apos;path/to/MyNativeComponent&apos;</span>);
});
</code></pre>
<p>Or if you&apos;d like to create your own manual mock, you can do something like this:</p>
<pre><code class="hljs css language-js">jest.mock(<span class="hljs-string">&apos;Text&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> RealComponent = jest.requireActual(<span class="hljs-string">&apos;Text&apos;</span>);
  <span class="hljs-keyword">const</span> React = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;React&apos;</span>);
  <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Text</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">React</span>.<span class="hljs-title">Component</span> </span>{
    render() {
      <span class="hljs-keyword">return</span> React.createElement(<span class="hljs-string">&apos;Text&apos;</span>, <span class="hljs-keyword">this</span>.props, <span class="hljs-keyword">this</span>.props.children);
    }
  }
  Text.propTypes = RealComponent.propTypes;
  <span class="hljs-keyword">return</span> Text;
});
</code></pre>
<p>In other cases you may want to mock a native module that isn&apos;t a React component. The same technique can be applied. We recommend inspecting the native module&apos;s source code and logging the module when running a react native app on a real device and then modeling a manual mock after the real module.</p>
<p>If you end up mocking the same modules over and over it is recommended to define these mocks in a separate file and add it to the list of <code>setupFiles</code>.</p>
</span></div></article>
