import{_ as s,c as n,o as a,d as p}from"./app.a2f55f3f.js";const C=JSON.parse('{"title":"Task: Stirling_Factorial.py","description":"","frontmatter":{},"headers":[],"relativePath":"tasks/Stirling_Factorial.py.md"}'),l={name:"tasks/Stirling_Factorial.py.md"},o=p(`<h1 id="task-stirling-factorial-py" tabindex="-1">Task: Stirling_Factorial.py <a class="header-anchor" href="#task-stirling-factorial-py" aria-hidden="true">#</a></h1><div class="language-py"><button class="copy"></button><span class="lang">py</span><pre><code><span class="line"><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> math </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> pi</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">sqrt</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">def</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">stirling</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">):</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">((</span><span style="color:#82AAFF;">sqrt</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">pi</span><span style="color:#89DDFF;">))</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">n </span><span style="color:#89DDFF;">**</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">n</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">))</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">e </span><span style="color:#89DDFF;">**</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">(-</span><span style="color:#82AAFF;">n</span><span style="color:#89DDFF;">+(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">/(</span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">n</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)))))</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">((</span><span style="color:#82AAFF;">sqrt</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">pi</span><span style="color:#89DDFF;">))</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">n </span><span style="color:#89DDFF;">**</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">n</span><span style="color:#89DDFF;">+</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">/</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">))</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">e </span><span style="color:#89DDFF;">**</span><span style="color:#82AAFF;"> </span><span style="color:#89DDFF;">(-</span><span style="color:#82AAFF;">n</span><span style="color:#89DDFF;">+(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">/(</span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">n</span><span style="color:#89DDFF;">)))))</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> n</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">n </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">input</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#82AAFF;">stirling</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">int</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">n</span><span style="color:#89DDFF;">))</span></span>
<span class="line"></span></code></pre></div>`,2),F=[o];function t(e,r,c,y,D,A){return a(),n("div",null,F)}const _=s(l,[["render",t]]);export{C as __pageData,_ as default};
