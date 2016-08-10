define('components/select/demo/basic.jsx', function(require, exports, module) {

  'use strict';
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = require('node_modules/react-dom/index');
  
  var _reactDom2 = _interopRequireDefault(_reactDom);
  
  var _index = require('components/select/index.jsx');
  
  var _index2 = _interopRequireDefault(_index);
  
  var SelectBasicDemo = (function (_React$Component) {
    _inherits(SelectBasicDemo, _React$Component);
  
    function SelectBasicDemo() {
      _classCallCheck(this, SelectBasicDemo);
  
      _get(Object.getPrototypeOf(SelectBasicDemo.prototype), 'constructor', this).apply(this, arguments);
    }
  
    _createClass(SelectBasicDemo, [{
      key: 'render',
      value: function render() {
        var options = [{
          name: 'swift',
          value: 101
        }, {
          name: 'java',
          value: 121
        }, {
          name: 'javascript',
          value: 332
        }];
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(_index2['default'], {
            options: options, defaultOption: options[0], onChange: this.handleChange,
            style: { width: '200px' }
          })
        );
      }
    }, {
      key: 'handleChange',
      value: function handleChange(newValue, oldValue) {
        console.log(newValue, oldValue);
      }
    }]);
  
    return SelectBasicDemo;
  })(_react2['default'].Component);
  
  _reactDom2['default'].render(_react2['default'].createElement(SelectBasicDemo, null), document.getElementById('basic'));

});
