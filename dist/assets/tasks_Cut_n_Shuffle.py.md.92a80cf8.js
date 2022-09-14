import{_ as s,c as n,o as a,d as l}from"./app.a2f55f3f.js";const i=JSON.parse('{"title":"Task: Cut_n_Shuffle.py","description":"","frontmatter":{},"headers":[],"relativePath":"tasks/Cut_n_Shuffle.py.md"}'),p={name:"tasks/Cut_n_Shuffle.py.md"},o=l(`<h1 id="task-cut-n-shuffle-py" tabindex="-1">Task: Cut_n_Shuffle.py <a class="header-anchor" href="#task-cut-n-shuffle-py" aria-hidden="true">#</a></h1><div class="language-py"><button class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cut</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    llenn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">llenn</span><span style="color:#89DDFF;">//</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">llenn</span><span style="color:#89DDFF;">]+</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">llenn</span><span style="color:#89DDFF;">//</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> a</span></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">shuffle</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    llenn </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">len</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    f</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">s </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">llenn</span><span style="color:#89DDFF;">//</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">llenn</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">[</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">llenn</span><span style="color:#89DDFF;">//</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    a </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">range</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">llenn</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">%</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">==</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">+=[</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">//</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]]</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">else</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">+=[</span><span style="color:#A6ACCD;">f</span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">//</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">]]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> a</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">deck </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">input</span><span style="color:#89DDFF;">().</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">cmd </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">input</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> cmd</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">==</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">C</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;">deck</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">cut</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">deck</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">==</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">S</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;">deck</span><span style="color:#89DDFF;">=</span><span style="color:#82AAFF;">shuffle</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">deck</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">deck</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span></code></pre></div>`,2),e=[o];function c(t,D,F,r,y,A){return a(),n("div",null,e)}const _=s(p,[["render",c]]);export{i as __pageData,_ as default};