define("components/align/demo/demo",function(require){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=require("node_modules/react/react"),_react2=_interopRequireDefault(_react),_rcAlign=require("node_modules/rc-align/lib/index"),_rcAlign2=_interopRequireDefault(_rcAlign),_reactDom=require("node_modules/react-dom/index"),_reactDom2=_interopRequireDefault(_reactDom),Demo=function(_React$Component){function Demo(props){_classCallCheck(this,Demo);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Demo).call(this,props));return _this.state={align:{points:["cc","cc"]}},_this}return _inherits(Demo,_React$Component),_createClass(Demo,[{key:"render",value:function(){return _react2.default.createElement(_rcAlign2.default,{align:this.state.align},_react2.default.createElement("div",{style:{position:"absolute",width:100,height:100,background:"yellow"}},"target is window"))}}]),Demo}(_react2.default.Component);_reactDom2.default.render(_react2.default.createElement(Demo,null),document.getElementById("demo"))});