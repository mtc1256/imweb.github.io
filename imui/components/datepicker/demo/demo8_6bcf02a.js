define("components/datepicker/demo/demo8.jsx",function(require){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var _react=require("node_modules/react/react"),_react2=_interopRequireDefault(_react),_reactDom=require("node_modules/react-dom/index"),_reactDom2=_interopRequireDefault(_reactDom),_index=require("components/datepicker/index.jsx"),_index2=_interopRequireDefault(_index),dateNow=new Date,Demo=function(){return _react2.default.createElement("div",null,_react2.default.createElement("h2",null,"String Format Pattern Of Date"),_react2.default.createElement(_index2.default,{placeholder:"点击选择日期",selected:dateNow,dateFormat:"YYYY年MM月DD日"}))};_reactDom2.default.render(_react2.default.createElement(Demo,null),document.getElementById("demo8"))});