webpackJsonp([254,366],{658:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(109),s(108)),o=t(p),e=s(1),c=t(e),u=s(2);t(u);n.exports={content:[["p","\u548c\u539f\u751f\u7684\u6570\u5b57\u8f93\u5165\u6846\u4e00\u6837\uff0cvalue \u7684\u7cbe\u5ea6\u7531 step \u7684\u5c0f\u6570\u4f4d\u6570\u51b3\u5b9a\u3002"]],meta:{order:3,title:"\u5c0f\u6570",filename:"components/input-number/demo/digit.md",id:"components-input-number-demo-digit"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> InputNumber <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span><span class="token string" >\'changed\'</span><span class="token punctuation" >,</span> value<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>InputNumber</span> <span class="token attr-name" >min</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >max</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >10</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >step</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >0.1</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onChange<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n){console.log("changed",n)}return c["default"].createElement(o["default"],{min:1,max:10,step:.1,onChange:n})}}}});