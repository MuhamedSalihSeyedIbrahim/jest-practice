<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/MongoDB.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Using with MongoDB</h1></header><article><div><span><p>With the <a href="/docs/en/configuration#globalsetup-string">Global Setup/Teardown</a> and <a href="/docs/en/configuration#testenvironment-string">Async Test Environment</a> APIs, Jest can work smoothly with <a href="https://www.mongodb.com/">MongoDB</a>.</p>
<h2><a class="anchor" aria-hidden="true" id="use-jest-mongodb-preset"></a><a href="#use-jest-mongodb-preset" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Use jest-mongodb Preset</h2>
<p><a href="https://github.com/shelfio/jest-mongodb">Jest MongoDB</a> provides all required configuration to run your tests using MongoDB.</p>
<ol>
<li>First install <code>@shelf/jest-mongodb</code></li>
</ol>
<pre><code class="hljs">yarn <span class="hljs-keyword">add</span><span class="bash"> @shelf/jest-mongodb --dev</span>
</code></pre>
<ol start="2">
<li>Specify preset in your Jest configuration:</li>
</ol>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;preset&quot;</span>: <span class="hljs-string">&quot;@shelf/jest-mongodb&quot;</span>
}
</code></pre>
<ol start="3">
<li>Write your test</li>
</ol>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> {MongoClient} = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;mongodb&apos;</span>);

describe(<span class="hljs-string">&apos;insert&apos;</span>, () =&gt; {
<span class="hljs-keyword">let</span> connection;
<span class="hljs-keyword">let</span> db;

beforeAll(<span class="hljs-keyword">async</span> () =&gt; {
connection = <span class="hljs-keyword">await</span> MongoClient.connect(global.**MONGO_URI**, {
<span class="hljs-attr">useNewUrlParser</span>: <span class="hljs-literal">true</span>,
});
db = <span class="hljs-keyword">await</span> connection.db(global.**MONGO_DB_NAME**);
});

afterAll(<span class="hljs-keyword">async</span> () =&gt; {
<span class="hljs-keyword">await</span> connection.close();
<span class="hljs-keyword">await</span> db.close();
});

it(<span class="hljs-string">&apos;should insert a doc into collection&apos;</span>, <span class="hljs-keyword">async</span> () =&gt; {
<span class="hljs-keyword">const</span> users = db.collection(<span class="hljs-string">&apos;users&apos;</span>);

    <span class="hljs-keyword">const</span> mockUser = {<span class="hljs-attr">_id</span>: <span class="hljs-string">&apos;some-user-id&apos;</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&apos;John&apos;</span>};
    <span class="hljs-keyword">await</span> users.insertOne(mockUser);

    <span class="hljs-keyword">const</span> insertedUser = <span class="hljs-keyword">await</span> users.findOne({<span class="hljs-attr">_id</span>: <span class="hljs-string">&apos;some-user-id&apos;</span>});
    expect(insertedUser).toEqual(mockUser);

});
});
</code></pre>

<p>There&apos;s no need to load any dependencies.</p>
<p>See <a href="https://github.com/shelfio/jest-mongodb">documentation</a> for details (configuring MongoDB version, etc).</p>
</span></div></article>
