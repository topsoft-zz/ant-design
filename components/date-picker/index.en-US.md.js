webpackJsonp([279,366],{633:function(t,e,a){"use strict";function d(t){return t&&t.__esModule?t:{"default":t}}var n=a(1),o=(d(n),a(2));d(o);t.exports={content:["section",["p","To select/input a date."],["h2","When To Use"],["p","By clicking the input box, you can select a date from a popup calendar."]],meta:{category:"Components",type:"Form Controls",english:"DatePicker",filename:"components/date-picker/index.en-US.md"},toc:["ul",["li",["a",{href:"#When To Use"},"When To Use"]],["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["h3","DatePicker"],["pre",{lang:"html",highlighted:'<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DatePicker</span> <span class="token attr-name" >defaultValue</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2015-01-01<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>'},["code",'<DatePicker defaultValue="2015-01-01" />']],["blockquote",["p","Warning: ",["code","Datepicker"]," is renamed to ",["code","DatePicker"]," after ",["code","0.11"],"."]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","value"],["td","to set date"],["td","String/Date"],["td","-"]],["tr",["td","defaultValue"],["td","to set default date"],["td","String/Date"],["td","-"]],["tr",["td","format"],["td","to set the date format, refer to ",["a",{title:null,href:"https://github.com/yiminghe/gregorian-calendar-format"},"GregorianCalendarFormat"]],["td","String"],["td",'"yyyy-MM-dd"']],["tr",["td","disabledDate"],["td","to specify the date that cannot be selected"],["td","function"],["td","-"]],["tr",["td","onChange"],["td","a callback function, can be executed when the selected time is changing"],["td","function(date, dateString)"],["td","-"]],["tr",["td","disabled"],["td","determine whether the DatePicker is disabled"],["td","Boolean"],["td","false"]],["tr",["td","style"],["td","to customize the style of the input box"],["td","Object"],["td","{}"]],["tr",["td","popupStyle"],["td","to customize the style of the popup calendar"],["td","Object"],["td","{}"]],["tr",["td","size"],["td","determine the size of the input box, the height of ",["code","large"]," and ",["code","small"],", are 32px and 22px respectively, while default size is 28px"],["td","String"],["td","-"]],["tr",["td","locale"],["td","localization configuration"],["td","Object"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/424"},"default"]]],["tr",["td","onOk"],["td","a callback function, can be executed when OK-button is clicked"],["td","function(Date value)"],["td","-"]],["tr",["td","toggleOpen"],["td","a callback function, can be executed whether the popup calendar is popped up or closed"],["td","function(status)"],["td","-"]],["tr",["td","getCalendarContainer"],["td","to set the container of the floating layer, while the default is to create a ",["code","div"]," element in ",["code","body"]],["td","function(trigger)"],["td","-"]],["tr",["td","showTime"],["td","to provide an additional time selection"],["td","Object/Boolean"],["td",["a",{title:null,href:"http://ant.design/components/time-picker/#api"},"TimePicker Options"]]]]],["h3","MonthPicker"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","value"],["td","to set date"],["td","String/Date"],["td","-"]],["tr",["td","defaultValue"],["td","to set default date"],["td","String/Date"],["td","-"]],["tr",["td","format"],["td","to set the date format, refer to ",["a",{title:null,href:"https://github.com/yiminghe/gregorian-calendar-format"},"GregorianCalendarFormat"]],["td","String"],["td",'"yyyy-MM"']],["tr",["td","disabledDate"],["td","to specify the date that cannot be selected"],["td","function"],["td","-"]],["tr",["td","onChange"],["td","a callback function, can be executed when the selected time is changing"],["td","function(Date value)"],["td","-"]],["tr",["td","disabled"],["td","determine whether the MonthPicker is disabled"],["td","Boolean"],["td","false"]],["tr",["td","style"],["td","to customize the style of the input box"],["td","Object"],["td","{}"]],["tr",["td","popupStyle"],["td","to customize the style of the popup calendar"],["td","Object"],["td","{}"]],["tr",["td","size"],["td","determine the size of the input box, the height of ",["code","large"]," and ",["code","small"],", are 32px and 22px respectively, while default size is 28px"],["td","String"],["td","-"]],["tr",["td","locale"],["td","localization configuration"],["td","Object"],["td",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/424"},"default"]]],["tr",["td","getCalendarContainer"],["td","to set the container of the floating layer, while the default is to create a ",["code","div"]," element in ",["code","body"]],["td","function(trigger)"],["td","-"]]]],["h3","RangePicker"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","value"],["td","to set date"],["td","[string/date, string/date]"],["td","-"]],["tr",["td","defaultValue"],["td","to set default date"],["td","[string/date, string/date]"],["td","-"]],["tr",["td","format"],["td","to set the date format"],["td","String"],["td",'"yyyy-MM-dd HH:mm:ss"']],["tr",["td","onChange"],["td","a callback function, can be executed when the selected time is changing"],["td","function(date[], dateString[])"],["td","-"]],["tr",["td","showTime"],["td","to provide an additional time selection"],["td","Object/Boolean"],["td",["a",{title:null,href:"http://ant.design/components/time-picker/#api"},"TimePicker Options"]]]]],["p","The following properties are the same with ",["code","DatePicker"],": ",["code","disabled"]," ",["code","style"]," ",["code","popupStyle"]," ",["code","size"]," ",["code","locale"]," ",["code","showTime"]," ",["code","onOk"]," ",["code","getCalendarContainer"]],["style","\n.code-box-demo .ant-calendar-picker {\n  margin: 0 8px 12px 0;\n}\n"]]}}});