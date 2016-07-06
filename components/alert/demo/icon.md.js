webpackJsonp([355,366],{555:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(90),s(89)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);n.exports={content:[["p","\u53ef\u53e3\u7684\u56fe\u6807\u8ba9\u4fe1\u606f\u7c7b\u578b\u66f4\u52a0\u9192\u76ee\u3002"]],meta:{order:4,title:"\u56fe\u6807",filename:"components/alert/demo/icon.md",id:"components-alert-demo-icon"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Alert <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6210\u529f\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>success<span class="token punctuation" >"</span></span> <span class="token attr-name" >showIcon</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6d88\u606f\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span> <span class="token attr-name" >showIcon</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8b66\u544a\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>warning<span class="token punctuation" >"</span></span> <span class="token attr-name" >showIcon</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9519\u8bef\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span> <span class="token attr-name" >showIcon</span> <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6210\u529f\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>success<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >showIcon</span>\n  <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span> <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6d88\u606f\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >showIcon</span>\n  <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span>\n    <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8b66\u544a\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8b66\u544a\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u8b66\u544a\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>warning<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >showIcon</span>\n  <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Alert</span>\n    <span class="token attr-name" >message</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9519\u8bef\u63d0\u793a\u7684\u6587\u6848<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >description</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span>\n    <span class="token attr-name" >showIcon</span>\n  <span class="token punctuation" >/></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){return c["default"].createElement("div",null,c["default"].createElement(e["default"],{message:"\u6210\u529f\u63d0\u793a\u7684\u6587\u6848",type:"success",showIcon:!0}),c["default"].createElement(e["default"],{message:"\u6d88\u606f\u63d0\u793a\u7684\u6587\u6848",type:"info",showIcon:!0}),c["default"].createElement(e["default"],{message:"\u8b66\u544a\u63d0\u793a\u7684\u6587\u6848",type:"warning",showIcon:!0}),c["default"].createElement(e["default"],{message:"\u9519\u8bef\u63d0\u793a\u7684\u6587\u6848",type:"error",showIcon:!0}),c["default"].createElement(e["default"],{message:"\u6210\u529f\u63d0\u793a\u7684\u6587\u6848",description:"\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6210\u529f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd",type:"success",showIcon:!0}),c["default"].createElement(e["default"],{message:"\u6d88\u606f\u63d0\u793a\u7684\u6587\u6848",description:"\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u6d88\u606f\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd",type:"info",showIcon:!0}),c["default"].createElement(e["default"],{message:"\u8b66\u544a\u63d0\u793a\u7684\u6587\u6848",description:"\u8b66\u544a\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u8b66\u544a\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd",type:"warning",showIcon:!0}),c["default"].createElement(e["default"],{message:"\u9519\u8bef\u63d0\u793a\u7684\u6587\u6848",description:"\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd\u9519\u8bef\u63d0\u793a\u7684\u8f85\u52a9\u6027\u6587\u5b57\u4ecb\u7ecd",type:"error",showIcon:!0}))}}}});