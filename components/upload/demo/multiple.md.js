webpackJsonp([50,366],{866:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(81),a(80)),o=t(p),e=(a(7),a(6)),c=t(e),u=(a(10),a(8)),l=t(u),i=(a(71),a(70)),k=t(i),r=a(1),d=t(r),f=a(2);t(f);n.exports={content:[["p","\u6309\u4f4f ctrl \u53ef\u9009\u62e9\u591a\u4e2a\u6587\u4ef6\uff0c",["code","ie10+"]," \u652f\u6301\u3002"]],meta:{order:5,hidden:!0,title:"\u591a\u6587\u4ef6\u9009\u62e9",filename:"components/upload/demo/multiple.md",id:"components-upload-demo-multiple"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Upload<span class="token punctuation" >,</span> message<span class="token punctuation" >,</span> Button<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> props <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n  action<span class="token punctuation" >:</span> <span class="token string" >\'/upload.do\'</span><span class="token punctuation" >,</span>\n  multiple<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>info<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>info<span class="token punctuation" >.</span>file<span class="token punctuation" >.</span>status <span class="token operator" >!==</span> <span class="token string" >\'uploading\'</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>info<span class="token punctuation" >.</span>file<span class="token punctuation" >,</span> info<span class="token punctuation" >.</span>fileList<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>info<span class="token punctuation" >.</span>file<span class="token punctuation" >.</span>status <span class="token operator" >===</span> <span class="token string" >\'done\'</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      message<span class="token punctuation" >.</span><span class="token function" >success</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>info<span class="token punctuation" >.</span>file<span class="token punctuation" >.</span>name<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" > \u4e0a\u4f20\u6210\u529f\u3002`</span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span> <span class="token keyword" >else</span> <span class="token keyword" >if</span> <span class="token punctuation" >(</span>info<span class="token punctuation" >.</span>file<span class="token punctuation" >.</span>status <span class="token operator" >===</span> <span class="token string" >\'error\'</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      message<span class="token punctuation" >.</span><span class="token function" >error</span><span class="token punctuation" >(</span><span class="token template-string" ><span class="token string" >`</span><span class="token interpolation" ><span class="token interpolation-punctuation punctuation" >${</span>info<span class="token punctuation" >.</span>file<span class="token punctuation" >.</span>name<span class="token interpolation-punctuation punctuation" >}</span></span><span class="token string" > \u4e0a\u4f20\u5931\u8d25\u3002`</span></span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token operator" >&lt;</span>Upload <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>props<span class="token punctuation" >}</span><span class="token operator" >></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ghost<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>upload<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span> \u70b9\u51fb\u4e0a\u4f20\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Upload</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n={action:"/upload.do",multiple:!0,onChange:function(n){"uploading"!==n.file.status&&console.log(n.file,n.fileList),"done"===n.file.status?k["default"].success(n.file.name+" \u4e0a\u4f20\u6210\u529f\u3002"):"error"===n.file.status&&k["default"].error(n.file.name+" \u4e0a\u4f20\u5931\u8d25\u3002")}};return d["default"].createElement(o["default"],n,d["default"].createElement(c["default"],{type:"ghost"},d["default"].createElement(l["default"],{type:"upload"})," \u70b9\u51fb\u4e0a\u4f20"))}}}});