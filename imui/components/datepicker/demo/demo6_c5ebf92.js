define("components/datepicker/demo/demo6.jsx",function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var n=e("node_modules/react/react"),a=t(n),d=e("node_modules/react-dom/index"),l=t(d),o=e("components/datepicker/index.jsx"),u=t(o),r=new Date(2016,6,1),c=new Date(2016,6,5),m=new Date(2016,6,24),i=function(){return a.default.createElement("div",null,a.default.createElement("h2",null,"MinDate Or MaxDate To Select"),a.default.createElement(u.default,{placeholder:"点击选择日期",initMonth:r,minDate:c,maxDate:m}))};l.default.render(a.default.createElement(i,null),document.getElementById("demo6"))});