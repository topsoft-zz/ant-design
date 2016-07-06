webpackJsonp([34,366],{882:function(t,n,a){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}var s=a(1),l=(e(s),a(2));e(l);t.exports={content:["article",{},["h2","\u7279\u6027"],["ul",["li",["p","Designed as Ant Design\uff0c\u63d0\u70bc\u548c\u670d\u52a1\u4f01\u4e1a\u7ea7\u4e2d\u540e\u53f0\u4ea7\u54c1\u7684\u4ea4\u4e92\u8bed\u8a00\u548c\u89c6\u89c9\u98ce\u683c\u3002"]],["li",["p",["a",{title:null,href:"http://react-component.github.io/badgeboard/"},"React Component"]," \u4e0a\u7cbe\u5fc3\u5c01\u88c5\u7684\u9ad8\u8d28\u91cf UI \u5e93\u3002"]],["li",["p","\u57fa\u4e8e npm + webpack + babel \u7684\u5de5\u4f5c\u6d41\uff0c\u652f\u6301 ES2015\u3002"]]],["h2","\u5b89\u88c5"],["pre",{lang:"bash",highlighted:'$ npm <span class="token function" >install</span> antd'},["code","$ npm install antd"]],["h2","\u793a\u4f8b"],["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> DatePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DatePicker</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'},["code","import { DatePicker } from 'antd';\nReactDOM.render(<DatePicker />, mountNode);"]],["p","\u5f15\u5165\u6837\u5f0f\uff1a"],["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token string" >\'antd/dist/antd.css\'</span><span class="token punctuation" >;</span>  <span class="token comment" spellcheck="true">// or \'antd/dist/antd.less\'</span>'},["code","import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'"]],["p","\u6309\u9700\u52a0\u8f7d\u53ef\u901a\u8fc7\u6b64\u5199\u6cd5 ",["code","import DatePicker from 'antd/lib/date-picker'"]," \u6216\u4f7f\u7528\u63d2\u4ef6 ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-antd"},"babel-plugin-antd"],"\uff08\u6b64\u63d2\u4ef6\u652f\u6301 js \u548c css \u540c\u65f6\u6309\u9700\u52a0\u8f7d\uff09\u3002"],["h2","\u7248\u672c"],["ul",["li",["p","\u7a33\u5b9a\u7248\uff1a",["a",{title:null,href:"https://www.npmjs.org/package/antd"},["img",{title:null,src:"http://img.shields.io/npm/v/antd.svg?style=flat-square",alt:"npm package"}]]]],["li",["p","\u5f00\u53d1\u7248\uff1a",["a",{title:null,href:"https://www.npmjs.org/package/antd"},["img",{title:null,src:"https://cnpmjs.org/badge/v/antd.svg?&tag=beta&subject=npm",alt:null}]]]]],["h2","\u6d4f\u89c8\u5668\u652f\u6301"],["p","\u73b0\u4ee3\u6d4f\u89c8\u5668\u548c IE8 \u53ca\u4ee5\u4e0a\u3002"],["blockquote",["p",["a",{title:null,href:"https://github.com/xcatliu/react-ie8"},"IE8 issues"]]],["h2","\u94fe\u63a5"],["ul",["li",["p",["a",{title:null,href:"http://ant.design/"},"\u9996\u9875"]]],["li",["p",["a",{title:null,href:"/changelog"},"\u66f4\u65b0\u65e5\u5fd7"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/antd-init/"},"\u5f00\u53d1\u811a\u624b\u67b6"]]],["li",["p",["a",{title:null,href:"http://ant-tool.github.io/"},"\u5f00\u53d1\u5de5\u5177\u6587\u6863"]]],["li",["p",["a",{title:null,href:"http://react-component.github.io/"},"React \u7ec4\u4ef6"]]],["li",["p",["a",{title:null,href:"https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-code-style.md"},"React \u4ee3\u7801\u89c4\u8303"]]],["li",["p",["a",{title:null,href:"https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-design.md"},"\u7ec4\u4ef6\u8bbe\u8ba1\u539f\u5219"]]],["li",["p",["a",{title:null,href:"https://os.alipayobjects.com/rmsportal/HTXUgPGkyyxEivE.png"},"\u8bbe\u8ba1\u89c4\u8303\u901f\u67e5\u624b\u518c"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/129"},"\u793e\u533a\u8d21\u732e\u811a\u624b\u67b6\u548c\u8303\u4f8b"]]]],["h2","\u8c01\u5728\u4f7f\u7528"],["ul",["li",["p","\u8682\u8681\u91d1\u670d"]],["li",["p","\u963f\u91cc\u5df4\u5df4"]],["li",["p","\u53e3\u7891"]],["li",["p","\u65b0\u7f8e\u5927"]],["li",["p","\u6ef4\u6ef4"]]],["blockquote",["p","\u5982\u679c\u4f60\u7684\u516c\u53f8\u548c\u4ea7\u54c1\u4f7f\u7528\u4e86 Ant Design\uff0c\u6b22\u8fce\u5230 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/477"},"\u8fd9\u91cc"]," \u7559\u8a00\u3002"]],["h2","\u5982\u4f55\u8d21\u732e"],["p","\u5728\u4efb\u4f55\u5f62\u5f0f\u7684\u53c2\u4e0e\u524d\uff0c\u8bf7\u5148\u9605\u8bfb ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/.github/CONTRIBUTING.md"},"\u8d21\u732e\u8005\u6587\u6863"],"\u3002\u6709\u4efb\u4f55\u5efa\u8bae\u6216\u610f\u89c1\u60a8\u53ef\u4ee5 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/pulls"},"Pull Request"],"\uff0c\u7ed9\u6211\u4eec ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/new"},"\u62a5\u544a Bug"]," \u6216 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues"},"\u63d0\u95ee"],"\u3002"],["blockquote",["p","\u5f3a\u70c8\u63a8\u8350\u9605\u8bfb ",["a",{title:null,href:"https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way"},"\u300a\u63d0\u95ee\u7684\u667a\u6167\u300b"],"\u3001",["a",{title:null,href:"https://github.com/seajs/seajs/issues/545"},"\u300a\u5982\u4f55\u5411\u5f00\u6e90\u793e\u533a\u63d0\u95ee\u9898\u300b"]," \u548c ",["a",{title:null,href:"http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html"},"\u300a\u5982\u4f55\u6709\u6548\u5730\u62a5\u544a Bug\u300b"],"\uff0c\u66f4\u597d\u7684\u95ee\u9898\u66f4\u5bb9\u6613\u83b7\u5f97\u5e2e\u52a9\u3002"]]],meta:{order:0,english:"Ant Design of React",filename:"docs/react/introduce.md"},description:["section",["p","\u8fd9\u91cc\u662f Ant Design \u7684 React \u5b9e\u73b0\uff0c\u5f00\u53d1\u548c\u670d\u52a1\u4e8e\u4f01\u4e1a\u7ea7\u540e\u53f0\u4ea7\u54c1\u3002"],["div",{"class":"pic-plus"},["img",{width:"150",src:"https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg"}],["span","+"],["img",{width:"160",src:"https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg"}]],["style","\n.pic-plus > * {\n  display: inline-block!important;\n  vertical-align: middle;\n}\n.pic-plus span {\n  font-size: 30px;\n  color: #aaa;\n  margin: 0 20px;\n}\n"]],toc:["ul",["li",["a",{href:"#\u7279\u6027"},"\u7279\u6027"]],["li",["a",{href:"#\u5b89\u88c5"},"\u5b89\u88c5"]],["li",["a",{href:"#\u793a\u4f8b"},"\u793a\u4f8b"]],["li",["a",{href:"#\u7248\u672c"},"\u7248\u672c"]],["li",["a",{href:"#\u6d4f\u89c8\u5668\u652f\u6301"},"\u6d4f\u89c8\u5668\u652f\u6301"]],["li",["a",{href:"#\u94fe\u63a5"},"\u94fe\u63a5"]],["li",["a",{href:"#\u8c01\u5728\u4f7f\u7528"},"\u8c01\u5728\u4f7f\u7528"]],["li",["a",{href:"#\u5982\u4f55\u8d21\u732e"},"\u5982\u4f55\u8d21\u732e"]]]}}});