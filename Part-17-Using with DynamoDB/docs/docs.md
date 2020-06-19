<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/DynamoDB.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Using with DynamoDB</h1></header><article><div><span><p>With the <a href="/docs/en/configuration#globalsetup-string">Global Setup/Teardown</a> and <a href="/docs/en/configuration#testenvironment-string">Async Test Environment</a> APIs, Jest can work smoothly with <a href="https://aws.amazon.com/dynamodb/">DynamoDB</a>.</p>
<h2><a class="anchor" aria-hidden="true" id="use-jest-dynamodb-preset"></a><a href="#use-jest-dynamodb-preset" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Use jest-dynamodb Preset</h2>
<p><a href="https://github.com/shelfio/jest-dynamodb">Jest DynamoDB</a> provides all required configuration to run your tests using DynamoDB.</p>
<ol>
<li>First install <code>@shelf/jest-dynamodb</code></li>
</ol>
<pre><code class="hljs">yarn <span class="hljs-keyword">add</span><span class="bash"> @shelf/jest-dynamodb --dev</span>
</code></pre>
<ol start="2">
<li>Specify preset in your Jest configuration:</li>
</ol>
<pre><code class="hljs css language-json">{
  <span class="hljs-attr">&quot;preset&quot;</span>: <span class="hljs-string">&quot;@shelf/jest-dynamodb&quot;</span>
}
</code></pre>
<ol start="3">
<li>Create <code>jest-dynamodb-config.js</code> and define DynamoDB tables</li>
</ol>
<p>See <a href="https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#createTable-property">Create Table API</a></p>
<pre><code class="hljs css language-js"><span class="hljs-built_in">module</span>.exports = {
  <span class="hljs-attr">tables</span>: [
    {
      <span class="hljs-attr">TableName</span>: <span class="hljs-string">`files`</span>,
      <span class="hljs-attr">KeySchema</span>: [{<span class="hljs-attr">AttributeName</span>: <span class="hljs-string">&apos;id&apos;</span>, <span class="hljs-attr">KeyType</span>: <span class="hljs-string">&apos;HASH&apos;</span>}],
      <span class="hljs-attr">AttributeDefinitions</span>: [{<span class="hljs-attr">AttributeName</span>: <span class="hljs-string">&apos;id&apos;</span>, <span class="hljs-attr">AttributeType</span>: <span class="hljs-string">&apos;S&apos;</span>}],
      <span class="hljs-attr">ProvisionedThroughput</span>: {<span class="hljs-attr">ReadCapacityUnits</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">WriteCapacityUnits</span>: <span class="hljs-number">1</span>},
    },
    <span class="hljs-comment">// etc</span>
  ],
};
</code></pre>
<ol start="4">
<li>Configure DynamoDB client</li>
</ol>
<pre><code class="hljs css language-js"><span class="hljs-keyword">const</span> {DocumentClient} = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;aws-sdk/clients/dynamodb&apos;</span>);

<span class="hljs-keyword">const</span> isTest = process.env.JEST_WORKER_ID;
<span class="hljs-keyword">const</span> config = {
<span class="hljs-attr">convertEmptyValues</span>: <span class="hljs-literal">true</span>,
...(isTest &amp;&amp; {
<span class="hljs-attr">endpoint</span>: <span class="hljs-string">&apos;localhost:8000&apos;</span>,
<span class="hljs-attr">sslEnabled</span>: <span class="hljs-literal">false</span>,
<span class="hljs-attr">region</span>: <span class="hljs-string">&apos;local-env&apos;</span>,
}),
};

<span class="hljs-keyword">const</span> ddb = <span class="hljs-keyword">new</span> DocumentClient(config);
</code></pre>

<ol start="5">
<li>Write tests</li>
</ol>
<pre><code class="hljs css language-js">it(<span class="hljs-string">&apos;should insert item into table&apos;</span>, <span class="hljs-keyword">async</span> () =&gt; {
  <span class="hljs-keyword">await</span> ddb
    .put({<span class="hljs-attr">TableName</span>: <span class="hljs-string">&apos;files&apos;</span>, <span class="hljs-attr">Item</span>: {<span class="hljs-attr">id</span>: <span class="hljs-string">&apos;1&apos;</span>, <span class="hljs-attr">hello</span>: <span class="hljs-string">&apos;world&apos;</span>}})
    .promise();

<span class="hljs-keyword">const</span> {Item} = <span class="hljs-keyword">await</span> ddb.get({<span class="hljs-attr">TableName</span>: <span class="hljs-string">&apos;files&apos;</span>, <span class="hljs-attr">Key</span>: {<span class="hljs-attr">id</span>: <span class="hljs-string">&apos;1&apos;</span>}}).promise();

expect(Item).toEqual({
<span class="hljs-attr">id</span>: <span class="hljs-string">&apos;1&apos;</span>,
<span class="hljs-attr">hello</span>: <span class="hljs-string">&apos;world&apos;</span>,
});
});
</code></pre>

<p>There&apos;s no need to load any dependencies.</p>
<p>See <a href="https://github.com/shelfio/jest-dynamodb">documentation</a> for details.</p>
</span></div></article>
