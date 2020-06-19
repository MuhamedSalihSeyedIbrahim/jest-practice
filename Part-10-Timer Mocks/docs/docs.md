<header class="postHeader"><a class="edit-page-link button" href="https://github.com/facebook/jest/edit/master/docs/TimerMocks.md" target="_blank" rel="noreferrer noopener">Edit</a><h1 id="__docusaurus" class="postHeaderTitle">Timer Mocks</h1></header><article><div><span><p>The native timer functions (i.e., <code>setTimeout</code>, <code>setInterval</code>, <code>clearTimeout</code>, <code>clearInterval</code>) are less than ideal for a testing environment since they depend on real time to elapse. Jest can swap out timers with functions that allow you to control the passage of time. <a href="https://www.youtube.com/watch?v=QZoJ2Pt27BY">Great Scott!</a></p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// timerGame.js</span>
<span class="hljs-meta">&apos;use strict&apos;</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">timerGame</span>(<span class="hljs-params">callback</span>) </span>{
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;Ready....go!&apos;</span>);
setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;Time&apos;s up -- stop!&quot;</span>);
callback &amp;&amp; callback();
}, <span class="hljs-number">1000</span>);
}

<span class="hljs-built_in">module</span>.exports = timerGame;
</code></pre>

<pre><code class="hljs css language-javascript"><span class="hljs-comment">// __tests__/timerGame-test.js</span>
<span class="hljs-meta">&apos;use strict&apos;</span>;

jest.useFakeTimers();

test(<span class="hljs-string">&apos;waits 1 second before ending the game&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> timerGame = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;../timerGame&apos;</span>);
  timerGame();

  expect(setTimeout).toHaveBeenCalledTimes(<span class="hljs-number">1</span>);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(<span class="hljs-built_in">Function</span>), <span class="hljs-number">1000</span>);
});
</code></pre>
<p>Here we enable fake timers by calling <code>jest.useFakeTimers();</code>. This mocks out setTimeout and other timer functions with mock functions. If running multiple tests inside of one file or describe block, <code>jest.useFakeTimers();</code> can be called before each test manually or with a setup function such as <code>beforeEach</code>. Not doing so will result in the internal usage counter not being reset.</p>
<h2><a class="anchor" aria-hidden="true" id="run-all-timers"></a><a href="#run-all-timers" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Run All Timers</h2>
<p>Another test we might want to write for this module is one that asserts that the callback is called after 1 second. To do this, we&apos;re going to use Jest&apos;s timer control APIs to fast-forward time right in the middle of the test:</p>
<pre><code class="hljs css language-javascript">test(<span class="hljs-string">&apos;calls the callback after 1 second&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> timerGame = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;../timerGame&apos;</span>);
  <span class="hljs-keyword">const</span> callback = jest.fn();

timerGame(callback);

<span class="hljs-comment">// At this point in time, the callback should not have been called yet</span>
expect(callback).not.toBeCalled();

<span class="hljs-comment">// Fast-forward until all timers have been executed</span>
jest.runAllTimers();

<span class="hljs-comment">// Now our callback should have been called!</span>
expect(callback).toBeCalled();
expect(callback).toHaveBeenCalledTimes(<span class="hljs-number">1</span>);
});
</code></pre>

<h2><a class="anchor" aria-hidden="true" id="run-pending-timers"></a><a href="#run-pending-timers" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Run Pending Timers</h2>
<p>There are also scenarios where you might have a recursive timer -- that is a timer that sets a new timer in its own callback. For these, running all the timers would be an endless loop&#x2026; so something like <code>jest.runAllTimers()</code> is not desirable. For these cases you might use <code>jest.runOnlyPendingTimers()</code>:</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// infiniteTimerGame.js</span>
<span class="hljs-meta">&apos;use strict&apos;</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">infiniteTimerGame</span>(<span class="hljs-params">callback</span>) </span>{
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;Ready....go!&apos;</span>);

setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;Time&apos;s up! 10 seconds before the next game starts...&quot;</span>);
callback &amp;&amp; callback();

    <span class="hljs-comment">// Schedule the next game in 10 seconds</span>
    setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
      infiniteTimerGame(callback);
    }, <span class="hljs-number">10000</span>);

}, <span class="hljs-number">1000</span>);
}

<span class="hljs-built_in">module</span>.exports = infiniteTimerGame;
</code></pre>

<pre><code class="hljs css language-javascript"><span class="hljs-comment">// __tests__/infiniteTimerGame-test.js</span>
<span class="hljs-meta">&apos;use strict&apos;</span>;

jest.useFakeTimers();

describe(<span class="hljs-string">&apos;infiniteTimerGame&apos;</span>, () =&gt; {
  test(<span class="hljs-string">&apos;schedules a 10-second timer after 1 second&apos;</span>, () =&gt; {
    <span class="hljs-keyword">const</span> infiniteTimerGame = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;../infiniteTimerGame&apos;</span>);
    <span class="hljs-keyword">const</span> callback = jest.fn();

    infiniteTimerGame(callback);

    <span class="hljs-comment">// At this point in time, there should have been a single call to</span>
    <span class="hljs-comment">// setTimeout to schedule the end of the game in 1 second.</span>
    expect(setTimeout).toHaveBeenCalledTimes(<span class="hljs-number">1</span>);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(<span class="hljs-built_in">Function</span>), <span class="hljs-number">1000</span>);

    <span class="hljs-comment">// Fast forward and exhaust only currently pending timers</span>
    <span class="hljs-comment">// (but not any new timers that get created during that process)</span>
    jest.runOnlyPendingTimers();

    <span class="hljs-comment">// At this point, our 1-second timer should have fired it&apos;s callback</span>
    expect(callback).toBeCalled();

    <span class="hljs-comment">// And it should have created a new timer to start the game over in</span>
    <span class="hljs-comment">// 10 seconds</span>
    expect(setTimeout).toHaveBeenCalledTimes(<span class="hljs-number">2</span>);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(<span class="hljs-built_in">Function</span>), <span class="hljs-number">10000</span>);
  });
});
</code></pre>
<h2><a class="anchor" aria-hidden="true" id="advance-timers-by-time"></a><a href="#advance-timers-by-time" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>Advance Timers by Time</h2>
<h5><a class="anchor" aria-hidden="true" id="renamed-from-runtimerstotime-to-advancetimersbytime-in-jest-2200"></a><a href="#renamed-from-runtimerstotime-to-advancetimersbytime-in-jest-2200" aria-hidden="true" class="hash-link"><svg class="hash-link-icon" aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"/></svg></a>renamed from <code>runTimersToTime</code> to <code>advanceTimersByTime</code> in Jest <strong>22.0.0</strong></h5>
<p>Another possibility is use <code>jest.advanceTimersByTime(msToRun)</code>. When this API is called, all timers are advanced by <code>msToRun</code> milliseconds. All pending &quot;macro-tasks&quot; that have been queued via setTimeout() or setInterval(), and would be executed during this time frame, will be executed. Additionally if those macro-tasks schedule new macro-tasks that would be executed within the same time frame, those will be executed until there are no more macro-tasks remaining in the queue that should be run within msToRun milliseconds.</p>
<pre><code class="hljs css language-javascript"><span class="hljs-comment">// timerGame.js</span>
<span class="hljs-meta">&apos;use strict&apos;</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">timerGame</span>(<span class="hljs-params">callback</span>) </span>{
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&apos;Ready....go!&apos;</span>);
setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
<span class="hljs-built_in">console</span>.log(<span class="hljs-string">&quot;Time&apos;s up -- stop!&quot;</span>);
callback &amp;&amp; callback();
}, <span class="hljs-number">1000</span>);
}

<span class="hljs-built_in">module</span>.exports = timerGame;
</code></pre>

<pre><code class="hljs css language-javascript">it(<span class="hljs-string">&apos;calls the callback after 1 second via advanceTimersByTime&apos;</span>, () =&gt; {
  <span class="hljs-keyword">const</span> timerGame = <span class="hljs-built_in">require</span>(<span class="hljs-string">&apos;../timerGame&apos;</span>);
  <span class="hljs-keyword">const</span> callback = jest.fn();

  timerGame(callback);

  <span class="hljs-comment">// At this point in time, the callback should not have been called yet</span>
  expect(callback).not.toBeCalled();

  <span class="hljs-comment">// Fast-forward until all timers have been executed</span>
  jest.advanceTimersByTime(<span class="hljs-number">1000</span>);

  <span class="hljs-comment">// Now our callback should have been called!</span>
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(<span class="hljs-number">1</span>);
});
</code></pre>
<p>Lastly, it may occasionally be useful in some tests to be able to clear all of the pending timers. For this, we have <code>jest.clearAllTimers()</code>.</p>
<p>The code for this example is available at <a href="https://github.com/facebook/jest/tree/master/examples/timer">examples/timer</a>.</p>
</span></div></article>
