import{_ as s,c as a,o as n,d as p}from"./app.7162f395.js";const i=JSON.parse('{"title":"Task: ZigZag_2.py","description":"","frontmatter":{},"headers":[],"relativePath":"tasks/ZigZag_2.py.md"}'),l={name:"tasks/ZigZag_2.py.md"},o=p(`<h1 id="task-zigzag-2-py" tabindex="-1">Task: ZigZag_2.py <a class="header-anchor" href="#task-zigzag-2-py" aria-hidden="true">#</a></h1><div class="language-py"><button class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#A6ACCD;">cmd </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[],[]</span></span>
<span class="line"><span style="color:#A6ACCD;">toggle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">True</span></span>
<span class="line"><span style="color:#89DDFF;">while</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    cmd </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">input</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">try</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        x</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">y </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">i</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> i </span><span style="color:#89DDFF;">in</span><span style="color:#A6ACCD;"> cmd</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">split</span><span style="color:#89DDFF;">())</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">toggle</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">+=[</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">;b</span><span style="color:#89DDFF;">+=[</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">else</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> b</span><span style="color:#89DDFF;">+=[</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">;a</span><span style="color:#89DDFF;">+=[</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">        toggle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">not</span><span style="color:#A6ACCD;"> toggle</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">except</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Exception</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">break</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">b</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">if</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">cmd </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Zig-Zag</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">min</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;"> max</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">b</span><span style="color:#89DDFF;">))</span></span>
<span class="line"><span style="color:#89DDFF;">else</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">min</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">b</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;"> max</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span></code></pre></div>`,2),e=[o];function t(c,D,F,r,y,A){return n(),a("div",null,e)}const _=s(l,[["render",t]]);export{i as __pageData,_ as default};
