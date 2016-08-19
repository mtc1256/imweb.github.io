define("components/tab/lib/Tab.jsx",function(require,exports){"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(self,call){if(!self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!call||"object"!=typeof call&&"function"!=typeof call?self:call}function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:!1,writable:!0,configurable:!0}}),superClass&&(Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){return protoProps&&defineProperties(Constructor.prototype,protoProps),staticProps&&defineProperties(Constructor,staticProps),Constructor}}(),_react=require("node_modules/react/react"),_react2=_interopRequireDefault(_react),_TabNav=require("components/tab/lib/TabNav.jsx"),_TabNav2=_interopRequireDefault(_TabNav),Tab=function(_React$Component){function Tab(props){_classCallCheck(this,Tab);var _this=_possibleConstructorReturn(this,Object.getPrototypeOf(Tab).call(this,props));return _this.state={active:props.active},_this.getActivePanel=_this.getActivePanel.bind(_this),_this.onActive=_this.onActive.bind(_this),_this}return _inherits(Tab,_React$Component),_createClass(Tab,[{key:"getActivePanel",value:function(){var children=this.props.children,active=this.state.active,newChild=[];return _react2.default.Children.forEach(children,function(child,index){+active===index&&newChild.push(child)}),newChild}},{key:"onActive",value:function(current,prev){this.setState({active:current}),this.props.onActive(current,prev)}},{key:"render",value:function(){var _props=this.props,children=_props.children,tabType=_props.tabType,onTabClick=_props.onTabClick,onBeforeActive=_props.onBeforeActive,active=this.state.active,activePanel=this.getActivePanel();return _react2.default.createElement("div",{className:"im-tab"},_react2.default.createElement(_TabNav2.default,{onTabClick:onTabClick,onActive:this.onActive,onBeforeActive:onBeforeActive,panels:children,active:active,tabType:tabType}),_react2.default.createElement("div",{className:"im-tab-bd"},activePanel))}}]),Tab}(_react2.default.Component);Tab.propTypes={prefixCls:_react.PropTypes.string,active:_react.PropTypes.string,onTabClick:_react.PropTypes.func,onActive:_react.PropTypes.func,onBeforeActive:_react.PropTypes.func,tabType:_react.PropTypes.oneOf(["bottom","border","top"])},Tab.defaultProps={prefixCls:"im-tab",active:"0",tabType:"bottom",onTabClick:function(){},onActive:function(){},onBeforeActive:function(){}},exports.default=Tab});