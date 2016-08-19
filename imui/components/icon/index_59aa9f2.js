define("components/icon/index.jsx",function(require,exports){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj)keys.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(obj,i)&&(target[i]=obj[i]);return target}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=require("node_modules/react/react"),_react2=_interopRequireDefault(_react),_classnames2=require("node_modules/classnames/index"),_classnames3=_interopRequireDefault(_classnames2),Icon=function(_React$Component){function Icon(props){_classCallCheck(this,Icon);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Icon).call(this,props));return _this.state={},_this}return _inherits(Icon,_React$Component),_createClass(Icon,[{key:"render",value:function(){var _classnames,_props=this.props,prefixCls=_props.prefixCls,type=_props.type,className=_props.className,other=_objectWithoutProperties(_props,["prefixCls","type","className"]),cls=_classnames3.default((_classnames={},_defineProperty(_classnames,prefixCls,!0),_defineProperty(_classnames,"icon-font",!0),_defineProperty(_classnames,"i-"+type,!0),_defineProperty(_classnames,className,!0),_classnames));return _react2.default.createElement("i",_extends({},other,{className:cls}))}}]),Icon}(_react2.default.Component);Icon.propTypes={prefixCls:_react.PropTypes.string,type:_react.PropTypes.string,className:_react.PropTypes.string},Icon.defaultProps={prefixCls:"im-icon",type:"",className:""},exports.default=Icon});