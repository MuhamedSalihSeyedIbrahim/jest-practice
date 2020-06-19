<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/Es6ClassMocks.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">ES6 Class Mocks</h1></header><article><div><span><p>Jest can be used to mock ES6 classes that are imported into files you want to test.</p>
<p>ES6 classes are constructor functions with some syntactic sugar. Therefore, any mock for an ES6 class must be a function or an actual ES6 class (which is, again, another function). So you can mock them using <a href="/docs/en/mock-functions">mock functions</a>.</p>
<h2><a class="anchor" aria-hidden="true" id="an-es6-class-example"></a><a href="#an-es6-class-example" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>An ES6 Class Example</h2>
<p>We&apos;ll use a contrived example of a class that plays sound files, <code>SoundPlayer</code>, and a consumer class which uses that class, <code>SoundPlayerConsumer</code>. We&apos;ll mock <code>SoundPlayer</code> in our tests for <code>SoundPlayerConsumer</code>.</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// sound-player.js</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">SoundPlayer</span> </span>{
  <span class="hljs-keyword">constructor</span>() {
    <span class="hljs-keyword">this</span>.foo = <span class="hljs-string">&apos;bar&apos;</span>;
  }

playSoundFile(fileName) {
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;Playing sound file &apos;</span> + fileName);
}
}
</code></pre>

<pre><code class="hljs css language-javascript"><span class="hljs-comment">// sound-player-consumer.js</span>
<span class="hljs-keyword">import</span> SoundPlayer <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./sound-player&apos;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">SoundPlayerConsumer</span> </span>{
  <span class="hljs-keyword">constructor</span>() {
    <span class="hljs-keyword">this</span>.soundPlayer = <span class="hljs-keyword">new</span> SoundPlayer();
  }

  playSomethingCool() {
    <span class="hljs-keyword">const</span> coolSoundFileName = <span class="hljs-string">&apos;song.mp3&apos;</span>;
    <span class="hljs-keyword">this</span>.soundPlayer.playSoundFile(coolSoundFileName);
  }
}
</code></pre>
<h2><a class="anchor" aria-hidden="true" id="the-4-ways-to-create-an-es6-class-mock"></a><a href="#the-4-ways-to-create-an-es6-class-mock" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>The 4 ways to create an ES6 class mock</h2>
<h3><a class="anchor" aria-hidden="true" id="automatic-mock"></a><a href="#automatic-mock" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Automatic mock</h3>
<p>Calling <code>jest.mock(&apos;./sound-player&apos;)</code> returns a useful &quot;automatic mock&quot; you can use to spy on calls to the class constructor and all of its methods. It replaces the ES6 class with a mock constructor, and replaces all of its methods with <a href="/docs/en/mock-functions">mock functions</a> that always return <code>undefined</code>. Method calls are saved in <code>theAutomaticMock.mock.instances[index].methodName.mock.calls</code>.</p>
<p>Please note that if you use arrow functions in your classes, they will <em>not</em> be part of the mock. The reason for that is that arrow functions are not present on the object&apos;s prototype, they are merely properties holding a reference to a function.</p>
<p>If you don&apos;t need to replace the implementation of the class, this is the easiest option to set up. For example:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-keyword">import</span> SoundPlayer <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./sound-player&apos;</span>;
<span class="hljs-keyword">import</span> SoundPlayerConsumer <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./sound-player-consumer&apos;</span>;
jest.mock(<span class="hljs-string">&apos;./sound-player&apos;</span>); <span class="hljs-comment">// SoundPlayer is now a mock constructor</span>

beforeEach(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-comment">// Clear all instances and calls to constructor and all methods:</span>
SoundPlayer.mockClear();
});

it(<span class="hljs-string">&apos;We can check if the consumer called the class constructor&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> soundPlayerConsumer = <span class="hljs-keyword">new</span> SoundPlayerConsumer();
expect(SoundPlayer).toHaveBeenCalledTimes(<span class="hljs-number">1</span>);
});

it(<span class="hljs-string">&apos;We can check if the consumer called a method on the class instance&apos;</span>, () =&gt; {
<span class="hljs-comment">// Show that mockClear() is working:</span>
expect(SoundPlayer).not.toHaveBeenCalled();

<span class="hljs-keyword">const</span> soundPlayerConsumer = <span class="hljs-keyword">new</span> SoundPlayerConsumer();
<span class="hljs-comment">// Constructor should have been called again:</span>
expect(SoundPlayer).toHaveBeenCalledTimes(<span class="hljs-number">1</span>);

<span class="hljs-keyword">const</span> coolSoundFileName = <span class="hljs-string">&apos;song.mp3&apos;</span>;
soundPlayerConsumer.playSomethingCool();

<span class="hljs-comment">// mock.instances is available with automatic mocks:</span>
<span class="hljs-keyword">const</span> mockSoundPlayerInstance = SoundPlayer.mock.instances[<span class="hljs-number">0</span>];
<span class="hljs-keyword">const</span> mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;
expect(mockPlaySoundFile.mock.calls[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>]).toEqual(coolSoundFileName);
<span class="hljs-comment">// Equivalent to above check:</span>
expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
expect(mockPlaySoundFile).toHaveBeenCalledTimes(<span class="hljs-number">1</span>);
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="manual-mock"></a><a href="#manual-mock" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Manual mock</h3>
<p>Create a <a href="/docs/en/manual-mocks">manual mock</a> by saving a mock implementation in the <code>__mocks__</code> folder. This allows you to specify the implementation, and it can be used across test files.</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// __mocks__/sound-player.js</span>

<span class="hljs-comment">// Import this named export into your test file:</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> mockPlaySoundFile = jest.fn();
<span class="hljs-keyword">const</span> mock = jest.fn().mockImplementation(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-keyword">return</span> {<span class="hljs-attr">playSoundFile</span>: mockPlaySoundFile};
});

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> mock;
</code></pre>

<p>Import the mock and the mock method shared by all instances:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// sound-player-consumer.test.js</span>
<span class="hljs-keyword">import</span> SoundPlayer, {mockPlaySoundFile} <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./sound-player&apos;</span>;
<span class="hljs-keyword">import</span> SoundPlayerConsumer <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./sound-player-consumer&apos;</span>;
jest.mock(<span class="hljs-string">&apos;./sound-player&apos;</span>); <span class="hljs-comment">// SoundPlayer is now a mock constructor</span>

beforeEach(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-comment">// Clear all instances and calls to constructor and all methods:</span>
SoundPlayer.mockClear();
mockPlaySoundFile.mockClear();
});

it(<span class="hljs-string">&apos;We can check if the consumer called the class constructor&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> soundPlayerConsumer = <span class="hljs-keyword">new</span> SoundPlayerConsumer();
expect(SoundPlayer).toHaveBeenCalledTimes(<span class="hljs-number">1</span>);
});

it(<span class="hljs-string">&apos;We can check if the consumer called a method on the class instance&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> soundPlayerConsumer = <span class="hljs-keyword">new</span> SoundPlayerConsumer();
<span class="hljs-keyword">const</span> coolSoundFileName = <span class="hljs-string">&apos;song.mp3&apos;</span>;
soundPlayerConsumer.playSomethingCool();
expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);
});
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="calling-jestmockdocsenjest-objectjestmockmodulename-factory-options-with-the-module-factory-parameter"></a><a href="#calling-jestmockdocsenjest-objectjestmockmodulename-factory-options-with-the-module-factory-parameter" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Calling <a href="/docs/en/jest-object#jestmockmodulename-factory-options"><code>jest.mock()</code></a> with the module factory parameter</h3>
<p><code>jest.mock(path, moduleFactory)</code> takes a <strong>module factory</strong> argument. A module factory is a function that returns the mock.</p>
<p>In order to mock a constructor function, the module factory must return a constructor function. In other words, the module factory must be a function that returns a function - a higher-order function (HOF).</p>
<pre><code class="hljs css language-javascript"><span class="hljs-keyword">import</span> SoundPlayer <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./sound-player&apos;</span>;
<span class="hljs-keyword">const</span> mockPlaySoundFile = jest.fn();
jest.mock(<span class="hljs-string">&apos;./sound-player&apos;</span>, () =&gt; {
  <span class="hljs-keyword">return</span> jest.fn().mockImplementation(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    <span class="hljs-keyword">return</span> {<span class="hljs-attr">playSoundFile</span>: mockPlaySoundFile};
  });
});
</code></pre>
<p>A limitation with the factory parameter is that, since calls to <code>jest.mock()</code> are hoisted to the top of the file, it&apos;s not possible to first define a variable and then use it in the factory. An exception is made for variables that start with the word &apos;mock&apos;. It&apos;s up to you to guarantee that they will be initialized on time! For example, the following will throw an out-of-scope error due to the use of &apos;fake&apos; instead of &apos;mock&apos; in the variable declaration:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// Note: this will fail</span>
<span class="hljs-keyword">import</span> SoundPlayer <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./sound-player&apos;</span>;
<span class="hljs-keyword">const</span> fakePlaySoundFile = jest.fn();
jest.mock(<span class="hljs-string">&apos;./sound-player&apos;</span>, () =&gt; {
  <span class="hljs-keyword">return</span> jest.fn().mockImplementation(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    <span class="hljs-keyword">return</span> {<span class="hljs-attr">playSoundFile</span>: fakePlaySoundFile};
  });
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="replacing-the-mock-using-mockimplementationdocsenmock-function-apimockfnmockimplementationfn-or-mockimplementationoncedocsenmock-function-apimockfnmockimplementationoncefn"></a><a href="#replacing-the-mock-using-mockimplementationdocsenmock-function-apimockfnmockimplementationfn-or-mockimplementationoncedocsenmock-function-apimockfnmockimplementationoncefn" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Replacing the mock using <a href="/docs/en/mock-function-api#mockfnmockimplementationfn"><code>mockImplementation()</code></a> or <a href="/docs/en/mock-function-api#mockfnmockimplementationoncefn"><code>mockImplementationOnce()</code></a></h3>
<p>You can replace all of the above mocks in order to change the implementation, for a single test or all tests, by calling <code>mockImplementation()</code> on the existing mock.</p>
<p>Calls to jest.mock are hoisted to the top of the code. You can specify a mock later, e.g. in <code>beforeAll()</code>, by calling <code>mockImplementation()</code> (or <code>mockImplementationOnce()</code>) on the existing mock instead of using the factory parameter. This also allows you to change the mock between tests, if needed:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-keyword">import</span> SoundPlayer <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./sound-player&apos;</span>;
<span class="hljs-keyword">import</span> SoundPlayerConsumer <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./sound-player-consumer&apos;</span>;

jest.mock(<span class="hljs-string">&apos;./sound-player&apos;</span>);

describe(<span class="hljs-string">&apos;When SoundPlayer throws an error&apos;</span>, () =&gt; {
beforeAll(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
SoundPlayer.mockImplementation(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-keyword">return</span> {
<span class="hljs-attr">playSoundFile</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span class="hljs-string">&apos;Test error&apos;</span>);
},
};
});
});

it(<span class="hljs-string">&apos;Should throw an error when calling playSomethingCool&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> soundPlayerConsumer = <span class="hljs-keyword">new</span> SoundPlayerConsumer();
expect(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> soundPlayerConsumer.playSomethingCool()).toThrow();
});
});
</code></pre>

<h2><a class="anchor" aria-hidden="true" id="in-depth-understanding-mock-constructor-functions"></a><a href="#in-depth-understanding-mock-constructor-functions" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>In depth: Understanding mock constructor functions</h2>
<p>Building your constructor function mock using <code>jest.fn().mockImplementation()</code> makes mocks appear more complicated than they really are. This section shows how you can create your own mocks to illustrate how mocking works.</p>
<h3><a class="anchor" aria-hidden="true" id="manual-mock-that-is-another-es6-class"></a><a href="#manual-mock-that-is-another-es6-class" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Manual mock that is another ES6 class</h3>
<p>If you define an ES6 class using the same filename as the mocked class in the <code>__mocks__</code> folder, it will serve as the mock. This class will be used in place of the real class. This allows you to inject a test implementation for the class, but does not provide a way to spy on calls.</p>
<p>For the contrived example, the mock might look like this:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// __mocks__/sound-player.js</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">SoundPlayer</span> </span>{
  <span class="hljs-keyword">constructor</span>() {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;Mock SoundPlayer: constructor was called&apos;</span>);
  }

playSoundFile() {
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;Mock SoundPlayer: playSoundFile was called&apos;</span>);
}
}
</code></pre>

<h3><a class="anchor" aria-hidden="true" id="mock-using-module-factory-parameter"></a><a href="#mock-using-module-factory-parameter" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Mock using module factory parameter</h3>
<p>The module factory function passed to <code>jest.mock(path, moduleFactory)</code> can be a HOF that returns a function*. This will allow calling <code>new</code> on the mock. Again, this allows you to inject different behavior for testing, but does not provide a way to spy on calls.</p>
<h4><a class="anchor" aria-hidden="true" id="-module-factory-function-must-return-a-function"></a><a href="#-module-factory-function-must-return-a-function" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>* Module factory function must return a function</h4>
<p>In order to mock a constructor function, the module factory must return a constructor function. In other words, the module factory must be a function that returns a function - a higher-order function (HOF).</p>
<pre><code class="hljs css language-javascript">jest.mock(<span class="hljs-string">&apos;./sound-player&apos;</span>, () =&gt; {
  <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">return</span> {<span class="hljs-attr">playSoundFile</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {}};
  };
});
</code></pre>
<p><strong><em>Note: Arrow functions won&apos;t work</em></strong></p>
<p>Note that the mock can&apos;t be an arrow function because calling <code>new</code> on an arrow function is not allowed in JavaScript. So this won&apos;t work:</p>
<pre><code class="hljs css language-javascript">jest.mock(<span class="hljs-string">&apos;./sound-player&apos;</span>, () =&gt; {
  <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    <span class="hljs-comment">// Does not work; arrow functions can&apos;t be called with new</span>
    <span class="hljs-keyword">return</span> {<span class="hljs-attr">playSoundFile</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {}};
  };
});
</code></pre>
<p>This will throw <strong><em>TypeError: _soundPlayer2.default is not a constructor</em></strong>, unless the code is transpiled to ES5, e.g. by <code>@babel/preset-env</code>. (ES5 doesn&apos;t have arrow functions nor classes, so both will be transpiled to plain functions.)</p>
<h2><a class="anchor" aria-hidden="true" id="keeping-track-of-usage-spying-on-the-mock"></a><a href="#keeping-track-of-usage-spying-on-the-mock" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Keeping track of usage (spying on the mock)</h2>
<p>Injecting a test implementation is helpful, but you will probably also want to test whether the class constructor and methods are called with the correct parameters.</p>
<h3><a class="anchor" aria-hidden="true" id="spying-on-the-constructor"></a><a href="#spying-on-the-constructor" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Spying on the constructor</h3>
<p>In order to track calls to the constructor, replace the function returned by the HOF with a Jest mock function. Create it with <a href="/docs/en/jest-object#jestfnimplementation"><code>jest.fn()</code></a>, and then specify its implementation with <code>mockImplementation()</code>.</p>
<pre><code class="hljs css language-javascript"><span class="hljs-keyword">import</span> SoundPlayer <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./sound-player&apos;</span>;
jest.mock(<span class="hljs-string">&apos;./sound-player&apos;</span>, () =&gt; {
  <span class="hljs-comment">// Works and lets you check for constructor calls:</span>
  <span class="hljs-keyword">return</span> jest.fn().mockImplementation(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    <span class="hljs-keyword">return</span> {<span class="hljs-attr">playSoundFile</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {}};
  });
});
</code></pre>
<p>This will let us inspect usage of our mocked class, using <code>SoundPlayer.mock.calls</code>: <code>expect(SoundPlayer).toHaveBeenCalled();</code> or near-equivalent: <code>expect(SoundPlayer.mock.calls.length).toEqual(1);</code></p>
<h3><a class="anchor" aria-hidden="true" id="mocking-non-default-class-exports"></a><a href="#mocking-non-default-class-exports" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Mocking non default class exports</h3>
<p>If the class is <strong>not</strong> the default export from the module then you need to return an object with the key that is the same as the class export name.</p>
<pre><code class="hljs css language-javascript"><span class="hljs-keyword">import</span> {SoundPlayer} <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./sound-player&apos;</span>;
jest.mock(<span class="hljs-string">&apos;./sound-player&apos;</span>, () =&gt; {
  <span class="hljs-comment">// Works and lets you check for constructor calls:</span>
  <span class="hljs-keyword">return</span> {
    <span class="hljs-attr">SoundPlayer</span>: jest.fn().mockImplementation(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
      <span class="hljs-keyword">return</span> {<span class="hljs-attr">playSoundFile</span>: <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {}};
    }),
  };
});
</code></pre>
<h3><a class="anchor" aria-hidden="true" id="spying-on-methods-of-our-class"></a><a href="#spying-on-methods-of-our-class" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Spying on methods of our class</h3>
<p>Our mocked class will need to provide any member functions (<code>playSoundFile</code> in the example) that will be called during our tests, or else we&apos;ll get an error for calling a function that doesn&apos;t exist. But we&apos;ll probably want to also spy on calls to those methods, to ensure that they were called with the expected parameters.</p>
<p>A new object will be created each time the mock constructor function is called during tests. To spy on method calls in all of these objects, we populate <code>playSoundFile</code> with another mock function, and store a reference to that same mock function in our test file, so it&apos;s available during tests.</p>
<pre><code class="hljs css language-javascript"><span class="hljs-keyword">import</span> SoundPlayer <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./sound-player&apos;</span>;
<span class="hljs-keyword">const</span> mockPlaySoundFile = jest.fn();
jest.mock(<span class="hljs-string">&apos;./sound-player&apos;</span>, () =&gt; {
  <span class="hljs-keyword">return</span> jest.fn().mockImplementation(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
    <span class="hljs-keyword">return</span> {<span class="hljs-attr">playSoundFile</span>: mockPlaySoundFile};
    <span class="hljs-comment">// Now we can track calls to playSoundFile</span>
  });
});
</code></pre>
<p>The manual mock equivalent of this would be:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// __mocks__/sound-player.js</span>

<span class="hljs-comment">// Import this named export into your test file</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">const</span> mockPlaySoundFile = jest.fn();
<span class="hljs-keyword">const</span> mock = jest.fn().mockImplementation(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-keyword">return</span> {<span class="hljs-attr">playSoundFile</span>: mockPlaySoundFile};
});

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> mock;
</code></pre>

<p>Usage is similar to the module factory function, except that you can omit the second argument from <code>jest.mock()</code>, and you must import the mocked method into your test file, since it is no longer defined there. Use the original module path for this; don&apos;t include <code>__mocks__</code>.</p>
<h3><a class="anchor" aria-hidden="true" id="cleaning-up-between-tests"></a><a href="#cleaning-up-between-tests" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Cleaning up between tests</h3>
<p>To clear the record of calls to the mock constructor function and its methods, we call <a href="/docs/en/mock-function-api#mockfnmockclear"><code>mockClear()</code></a> in the <code>beforeEach()</code> function:</p>
<pre><code class="hljs css language-javascript">beforeEach(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
  SoundPlayer.mockClear();
  mockPlaySoundFile.mockClear();
});
</code></pre>
<h2><a class="anchor" aria-hidden="true" id="complete-example"></a><a href="#complete-example" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Complete example</h2>
<p>Here&apos;s a complete test file which uses the module factory parameter to <code>jest.mock</code>:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// sound-player-consumer.test.js</span>
<span class="hljs-keyword">import</span> SoundPlayerConsumer <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./sound-player-consumer&apos;</span>;
<span class="hljs-keyword">import</span> SoundPlayer <span class="hljs-keyword">from</span> <span class="hljs-string">&apos;./sound-player&apos;</span>;

<span class="hljs-keyword">const</span> mockPlaySoundFile = jest.fn();
jest.mock(<span class="hljs-string">&apos;./sound-player&apos;</span>, () =&gt; {
<span class="hljs-keyword">return</span> jest.fn().mockImplementation(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-keyword">return</span> {<span class="hljs-attr">playSoundFile</span>: mockPlaySoundFile};
});
});

beforeEach(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
SoundPlayer.mockClear();
mockPlaySoundFile.mockClear();
});

it(<span class="hljs-string">&apos;The consumer should be able to call new() on SoundPlayer&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> soundPlayerConsumer = <span class="hljs-keyword">new</span> SoundPlayerConsumer();
<span class="hljs-comment">// Ensure constructor created the object:</span>
expect(soundPlayerConsumer).toBeTruthy();
});

it(<span class="hljs-string">&apos;We can check if the consumer called the class constructor&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> soundPlayerConsumer = <span class="hljs-keyword">new</span> SoundPlayerConsumer();
expect(SoundPlayer).toHaveBeenCalledTimes(<span class="hljs-number">1</span>);
});

it(<span class="hljs-string">&apos;We can check if the consumer called a method on the class instance&apos;</span>, () =&gt; {
<span class="hljs-keyword">const</span> soundPlayerConsumer = <span class="hljs-keyword">new</span> SoundPlayerConsumer();
<span class="hljs-keyword">const</span> coolSoundFileName = <span class="hljs-string">&apos;song.mp3&apos;</span>;
soundPlayerConsumer.playSomethingCool();
expect(mockPlaySoundFile.mock.calls[<span class="hljs-number">0</span>][<span class="hljs-number">0</span>]).toEqual(coolSoundFileName);
});
</code></pre>
</span></div></article>
