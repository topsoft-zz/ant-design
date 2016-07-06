webpackJsonp([192,366],{722:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(151),s(150)),o=t(p),c=(s(7),s(6)),e=t(c),l=(s(71),s(70)),u=t(l),k=s(1),i=t(k),r=s(2);t(r);n.exports={content:[["p","\u4f4d\u7f6e\u6709\u5341\u4e8c\u4e2a\u65b9\u5411\u3002"]],meta:{order:1,title:"\u4f4d\u7f6e",filename:"components/popconfirm/demo/placement.md",id:"components-popconfirm-demo-placement"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Popconfirm<span class="token punctuation" >,</span> message<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> text <span class="token operator" >=</span> <span class="token string" >\'\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u4e2a\u4efb\u52a1\u5417\uff1f\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >confirm</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  message<span class="token punctuation" >.</span><span class="token function" >info</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u786e\u5b9a\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >60</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Popconfirm</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>topLeft<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span> <span class="token attr-name" >onConfirm</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>confirm<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>\u4e0a\u5de6<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Popconfirm</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Popconfirm</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>top<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span> <span class="token attr-name" >onConfirm</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>confirm<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>\u4e0a\u8fb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Popconfirm</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Popconfirm</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>topRight<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span> <span class="token attr-name" >onConfirm</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>confirm<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>\u4e0a\u53f3<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Popconfirm</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >60</span><span class="token punctuation" >,</span> float<span class="token punctuation" >:</span> <span class="token string" >\'left\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Popconfirm</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>leftTop<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span> <span class="token attr-name" >onConfirm</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>confirm<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>\u5de6\u4e0a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Popconfirm</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Popconfirm</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>left<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span> <span class="token attr-name" >onConfirm</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>confirm<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>\u5de6\u8fb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Popconfirm</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Popconfirm</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>leftBottom<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span> <span class="token attr-name" >onConfirm</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>confirm<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>\u5de6\u4e0b<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Popconfirm</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >60</span><span class="token punctuation" >,</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >252</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Popconfirm</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>rightTop<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span> <span class="token attr-name" >onConfirm</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>confirm<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>\u53f3\u4e0a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Popconfirm</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Popconfirm</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>right<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span> <span class="token attr-name" >onConfirm</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>confirm<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>\u53f3\u8fb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Popconfirm</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Popconfirm</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>rightBottom<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span> <span class="token attr-name" >onConfirm</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>confirm<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>\u53f3\u4e0b<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Popconfirm</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> marginLeft<span class="token punctuation" >:</span> <span class="token number" >60</span><span class="token punctuation" >,</span> clear<span class="token punctuation" >:</span> <span class="token string" >\'both\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Popconfirm</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>bottomLeft<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span> <span class="token attr-name" >onConfirm</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>confirm<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>\u4e0b\u5de6<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Popconfirm</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Popconfirm</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>bottom<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span> <span class="token attr-name" >onConfirm</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>confirm<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>\u4e0b\u8fb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Popconfirm</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Popconfirm</span> <span class="token attr-name" >placement</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>bottomRight<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>text<span class="token punctuation" >}</span></span> <span class="token attr-name" >onConfirm</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>confirm<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>\u4e0b\u53f3<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Popconfirm</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(){u["default"].info("\u70b9\u51fb\u4e86\u786e\u5b9a")}var a="\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u4e2a\u4efb\u52a1\u5417\uff1f";return i["default"].createElement("div",null,i["default"].createElement("div",{style:{marginLeft:60}},i["default"].createElement(o["default"],{placement:"topLeft",title:a,onConfirm:n},i["default"].createElement(e["default"],null,"\u4e0a\u5de6")),i["default"].createElement(o["default"],{placement:"top",title:a,onConfirm:n},i["default"].createElement(e["default"],null,"\u4e0a\u8fb9")),i["default"].createElement(o["default"],{placement:"topRight",title:a,onConfirm:n},i["default"].createElement(e["default"],null,"\u4e0a\u53f3"))),i["default"].createElement("div",{style:{width:60,"float":"left"}},i["default"].createElement(o["default"],{placement:"leftTop",title:a,onConfirm:n},i["default"].createElement(e["default"],null,"\u5de6\u4e0a")),i["default"].createElement(o["default"],{placement:"left",title:a,onConfirm:n},i["default"].createElement(e["default"],null,"\u5de6\u8fb9")),i["default"].createElement(o["default"],{placement:"leftBottom",title:a,onConfirm:n},i["default"].createElement(e["default"],null,"\u5de6\u4e0b"))),i["default"].createElement("div",{style:{width:60,marginLeft:252}},i["default"].createElement(o["default"],{placement:"rightTop",title:a,onConfirm:n},i["default"].createElement(e["default"],null,"\u53f3\u4e0a")),i["default"].createElement(o["default"],{placement:"right",title:a,onConfirm:n},i["default"].createElement(e["default"],null,"\u53f3\u8fb9")),i["default"].createElement(o["default"],{placement:"rightBottom",title:a,onConfirm:n},i["default"].createElement(e["default"],null,"\u53f3\u4e0b"))),i["default"].createElement("div",{style:{marginLeft:60,clear:"both"}},i["default"].createElement(o["default"],{placement:"bottomLeft",title:a,onConfirm:n},i["default"].createElement(e["default"],null,"\u4e0b\u5de6")),i["default"].createElement(o["default"],{placement:"bottom",title:a,onConfirm:n},i["default"].createElement(e["default"],null,"\u4e0b\u8fb9")),i["default"].createElement(o["default"],{placement:"bottomRight",title:a,onConfirm:n},i["default"].createElement(e["default"],null,"\u4e0b\u53f3"))))},style:"\n.code-box-demo .ant-popover-wrap > a {\n  margin-right: 1em;\n}\n.code-box-demo .ant-btn {\n  margin-right: 1em;\n  margin-bottom: 1em;\n}\n"}}});