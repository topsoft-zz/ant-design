webpackJsonp([51,366],{865:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(81),a(80)),o=t(p),e=(a(7),a(6)),c=t(e),u=(a(10),a(8)),l=t(u),i=Object.assign||function(n){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])}return n},k=a(1),r=t(k),f=a(2);t(f);n.exports={content:[["p","\u4f7f\u7528 ",["code","fileList"]," \u5bf9\u5217\u8868\u8fdb\u884c\u5b8c\u5168\u63a7\u5236\uff0c\u53ef\u4ee5\u5b9e\u73b0\u5404\u79cd\u81ea\u5b9a\u4e49\u529f\u80fd\uff0c\u4ee5\u4e0b\u6f14\u793a\u4e09\u79cd\u60c5\u51b5\uff1a"],["p","1) \u4e0a\u4f20\u5217\u8868\u6570\u91cf\u7684\u9650\u5236\u3002"],["p","2) \u8bfb\u53d6\u8fdc\u7a0b\u8def\u5f84\u5e76\u663e\u793a\u94fe\u63a5\u3002"],["p","3) \u6309\u7167\u670d\u52a1\u5668\u8fd4\u56de\u4fe1\u606f\u7b5b\u9009\u6210\u529f\u4e0a\u4f20\u7684\u6587\u4ef6\u3002"]],meta:{order:2,title:"\u5b8c\u5168\u63a7\u5236\u7684\u4e0a\u4f20\u5217\u8868",filename:"components/upload/demo/fileList.md",id:"components-upload-demo-fileList"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Upload<span class="token punctuation" >,</span> Button<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> MyUpload <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      fileList<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n        uid<span class="token punctuation" >:</span> <span class="token operator" >-</span><span class="token number" >1</span><span class="token punctuation" >,</span>\n        name<span class="token punctuation" >:</span> <span class="token string" >\'xxx.png\'</span><span class="token punctuation" >,</span>\n        status<span class="token punctuation" >:</span> <span class="token string" >\'done\'</span><span class="token punctuation" >,</span>\n        url<span class="token punctuation" >:</span> <span class="token string" >\'http://www.baidu.com/xxx.png\'</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleChange</span><span class="token punctuation" >(</span>info<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >let</span> fileList <span class="token operator" >=</span> info<span class="token punctuation" >.</span>fileList<span class="token punctuation" >;</span>\n\n    <span class="token comment" spellcheck="true">// 1. \u4e0a\u4f20\u5217\u8868\u6570\u91cf\u7684\u9650\u5236</span>\n    <span class="token comment" spellcheck="true">//    \u53ea\u663e\u793a\u6700\u8fd1\u4e0a\u4f20\u7684\u4e00\u4e2a\uff0c\u65e7\u7684\u4f1a\u88ab\u65b0\u7684\u9876\u6389</span>\n    fileList <span class="token operator" >=</span> fileList<span class="token punctuation" >.</span><span class="token function" >slice</span><span class="token punctuation" >(</span><span class="token operator" >-</span><span class="token number" >2</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\n    <span class="token comment" spellcheck="true">// 2. \u8bfb\u53d6\u8fdc\u7a0b\u8def\u5f84\u5e76\u663e\u793a\u94fe\u63a5</span>\n    fileList <span class="token operator" >=</span> fileList<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>file<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >if</span> <span class="token punctuation" >(</span>file<span class="token punctuation" >.</span>response<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n        <span class="token comment" spellcheck="true">// \u7ec4\u4ef6\u4f1a\u5c06 file.url \u4f5c\u4e3a\u94fe\u63a5\u8fdb\u884c\u5c55\u793a</span>\n        file<span class="token punctuation" >.</span>url <span class="token operator" >=</span> file<span class="token punctuation" >.</span>response<span class="token punctuation" >.</span>url<span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span>\n      <span class="token keyword" >return</span> file<span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\n    <span class="token comment" spellcheck="true">// 3. \u6309\u7167\u670d\u52a1\u5668\u8fd4\u56de\u4fe1\u606f\u7b5b\u9009\u6210\u529f\u4e0a\u4f20\u7684\u6587\u4ef6</span>\n    fileList <span class="token operator" >=</span> fileList<span class="token punctuation" >.</span><span class="token function" >filter</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span>file<span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >if</span> <span class="token punctuation" >(</span>file<span class="token punctuation" >.</span>response<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n        <span class="token keyword" >return</span> file<span class="token punctuation" >.</span>response<span class="token punctuation" >.</span>status <span class="token operator" >===</span> <span class="token string" >\'success\'</span><span class="token punctuation" >;</span>\n      <span class="token punctuation" >}</span>\n      <span class="token keyword" >return</span> <span class="token boolean" >true</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span> fileList <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >const</span> props <span class="token operator" >=</span> <span class="token punctuation" >{</span>\n      action<span class="token punctuation" >:</span> <span class="token string" >\'/upload.do\'</span><span class="token punctuation" >,</span>\n      onChange<span class="token punctuation" >:</span> <span class="token keyword" >this</span><span class="token punctuation" >.</span>handleChange<span class="token punctuation" >,</span>\n      multiple<span class="token punctuation" >:</span> <span class="token boolean" >true</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token operator" >&lt;</span>Upload <span class="token punctuation" >{</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span><span class="token punctuation" >.</span>props<span class="token punctuation" >}</span> fileList<span class="token operator" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>fileList<span class="token punctuation" >}</span><span class="token operator" >></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ghost<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>upload<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span> \u70b9\u51fb\u4e0a\u4f20\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Upload</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>MyUpload</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=r["default"].createClass({displayName:"MyUpload",getInitialState:function(){return{fileList:[{uid:-1,name:"xxx.png",status:"done",url:"http://www.baidu.com/xxx.png"}]}},handleChange:function(n){var s=n.fileList;s=s.slice(-2),s=s.map(function(n){return n.response&&(n.url=n.response.url),n}),s=s.filter(function(n){return!n.response||"success"===n.response.status}),this.setState({fileList:s})},render:function(){var n={action:"/upload.do",onChange:this.handleChange,multiple:!0};return r["default"].createElement(o["default"],i({},n,{fileList:this.state.fileList}),r["default"].createElement(c["default"],{type:"ghost"},r["default"].createElement(l["default"],{type:"upload"})," \u70b9\u51fb\u4e0a\u4f20"))}});return r["default"].createElement(n,null)}}}});