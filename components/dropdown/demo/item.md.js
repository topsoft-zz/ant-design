webpackJsonp([274,366],{638:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(95),s(94)),e=t(p),o=(s(10),s(8)),c=t(o),l=(s(27),s(26)),u=t(l),k=s(1),i=t(k),r=s(2);t(r);n.exports={content:[["p","\u5206\u5272\u7ebf\u548c\u4e0d\u53ef\u7528\u83dc\u5355\u9879\u3002"]],meta:{order:1,title:"\u5176\u4ed6\u5143\u7d20",filename:"components/dropdown/demo/item.md",id:"components-dropdown-demo-item"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Menu<span class="token punctuation" >,</span> Dropdown<span class="token punctuation" >,</span> Icon <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> menu <span class="token operator" >=</span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>0<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >target</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>_blank<span class="token punctuation" >"</span></span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>http://www.alipay.com/<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u7b2c\u4e00\u4e2a\u83dc\u5355\u9879<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >target</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>_blank<span class="token punctuation" >"</span></span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>http://www.taobao.com/<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u7b2c\u4e8c\u4e2a\u83dc\u5355\u9879<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Divider</span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>3<span class="token punctuation" >"</span></span> <span class="token attr-name" >disabled</span><span class="token punctuation" >></span></span>\u7b2c\u4e09\u4e2a\u83dc\u5355\u9879\uff08\u4e0d\u53ef\u7528\uff09<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Dropdown</span> <span class="token attr-name" >overlay</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>menu<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-dropdown-link<span class="token punctuation" >"</span></span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      \u9f20\u6807\u79fb\u5165 <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>down<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Dropdown</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=i["default"].createElement(u["default"],null,i["default"].createElement(u["default"].Item,{key:"0"},i["default"].createElement("a",{target:"_blank",href:"http://www.alipay.com/"},"\u7b2c\u4e00\u4e2a\u83dc\u5355\u9879")),i["default"].createElement(u["default"].Item,{key:"1"},i["default"].createElement("a",{target:"_blank",href:"http://www.taobao.com/"},"\u7b2c\u4e8c\u4e2a\u83dc\u5355\u9879")),i["default"].createElement(u["default"].Divider,null),i["default"].createElement(u["default"].Item,{key:"3",disabled:!0},"\u7b2c\u4e09\u4e2a\u83dc\u5355\u9879\uff08\u4e0d\u53ef\u7528\uff09"));return i["default"].createElement(e["default"],{overlay:n},i["default"].createElement("a",{className:"ant-dropdown-link",href:"#"},"\u9f20\u6807\u79fb\u5165 ",i["default"].createElement(c["default"],{type:"down"})))}}}});