webpackJsonp([91,366],{825:function(a,n,s){"use strict";function t(a){return a&&a.__esModule?a:{"default":a}}var p=(s(63),s(62)),e=t(p),o=s(1),c=t(o),l=s(2);t(l);a.exports={content:[["p","\u53ef\u4ee5\u5de6\u53f3\u6ed1\u52a8\uff0c\u5bb9\u7eb3\u66f4\u591a\u6807\u7b7e\u3002"]],meta:{order:3,title:"\u6ed1\u52a8",filename:"components/tabs/demo/slide.md",id:"components-tabs-demo-slide"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tabs <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> TabPane <span class="token operator" >=</span> Tabs<span class="token punctuation" >.</span>TabPane<span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tabs</span> <span class="token attr-name" >defaultActiveKey</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u4e00<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e00<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u4e8c<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e8c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u4e09<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>3<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e09<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u56db<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>4<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u56db<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u4e94<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>5<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e94<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u516d<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>6<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u516d<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u4e03<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>7<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e03<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u516b<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>8<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u516b<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u4e5d<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>9<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e5d<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tabs</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var a=e["default"].TabPane;return c["default"].createElement(e["default"],{defaultActiveKey:"1"},c["default"].createElement(a,{tab:"\u9009\u9879\u4e00",key:"1"},"\u9009\u9879\u5361\u4e00"),c["default"].createElement(a,{tab:"\u9009\u9879\u4e8c",key:"2"},"\u9009\u9879\u5361\u4e8c"),c["default"].createElement(a,{tab:"\u9009\u9879\u4e09",key:"3"},"\u9009\u9879\u5361\u4e09"),c["default"].createElement(a,{tab:"\u9009\u9879\u56db",key:"4"},"\u9009\u9879\u5361\u56db"),c["default"].createElement(a,{tab:"\u9009\u9879\u4e94",key:"5"},"\u9009\u9879\u5361\u4e94"),c["default"].createElement(a,{tab:"\u9009\u9879\u516d",key:"6"},"\u9009\u9879\u5361\u516d"),c["default"].createElement(a,{tab:"\u9009\u9879\u4e03",key:"7"},"\u9009\u9879\u5361\u4e03"),c["default"].createElement(a,{tab:"\u9009\u9879\u516b",key:"8"},"\u9009\u9879\u5361\u516b"),c["default"].createElement(a,{tab:"\u9009\u9879\u4e5d",key:"9"},"\u9009\u9879\u5361\u4e5d"))}}}});