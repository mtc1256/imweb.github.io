define('components/icon/index.jsx', function(require, exports, module) {

  /**
   * imui.Icon
   * @author lonnyhuang
   * @date 2016-07-29
   */
  
  // @require 'components/icon/style/index.scss'
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  
  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
  
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _classnames2 = require('node_modules/classnames/index');
  
  var _classnames3 = _interopRequireDefault(_classnames2);
  
  var Icon = (function (_React$Component) {
    _inherits(Icon, _React$Component);
  
    function Icon(props) {
      _classCallCheck(this, Icon);
  
      _get(Object.getPrototypeOf(Icon.prototype), 'constructor', this).call(this, props);
      this.state = {};
    }
  
    _createClass(Icon, [{
      key: 'render',
      value: function render() {
        var _classnames;
  
        var _props = this.props;
        var prefixCls = _props.prefixCls;
        var type = _props.type;
        var className = _props.className;
  
        var other = _objectWithoutProperties(_props, ['prefixCls', 'type', 'className']);
  
        var cls = (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, prefixCls, true), _defineProperty(_classnames, 'icon-font', true), _defineProperty(_classnames, 'i-' + type, true), _defineProperty(_classnames, className, true), _classnames));
  
        return _react2['default'].createElement('i', _extends({}, other, { className: cls }));
      }
    }]);
  
    return Icon;
  })(_react2['default'].Component);
  
  Icon.propTypes = {
    prefixCls: _react.PropTypes.string,
    type: _react.PropTypes.string,
    className: _react.PropTypes.string
  };
  
  Icon.defaultProps = {
    prefixCls: 'im-icon',
    type: '',
    className: ''
  };
  
  exports['default'] = Icon;
  module.exports = exports['default'];

});
