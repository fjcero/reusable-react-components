'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _lodashCollection = require('lodash/collection');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Dropdown = (function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown() {
    _classCallCheck(this, Dropdown);

    _get(Object.getPrototypeOf(Dropdown.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Dropdown, [{
    key: 'renderOptions',
    value: function renderOptions(options) {
      return options.map(function (o) {
        return _react2['default'].createElement(
          'option',
          { key: o.value, value: o.value },
          o.text
        );
      });
    }

    /**
     * Group options by property path. If `groupedBy` is null then render options only.
     * @param options (Array)
     * @param groupedBy (String)
     */
  }, {
    key: 'renderOptGroups',
    value: function renderOptGroups(options, groupedBy) {
      var _this = this;

      if (!groupedBy || groupedBy === '') {
        return this.renderOptions(options);
      }

      var groups = (0, _lodashCollection.groupBy)(options, groupedBy);

      return (0, _lodashCollection.map)(groups, function (options, groupName) {
        return _react2['default'].createElement(
          'optgroup',
          { key: groupName, label: groupName },
          _this.renderOptions(options)
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var allowEmptyOptions = _props.allowEmptyOptions;
      var className = _props.className;
      var dataTestId = _props.dataTestId;
      var groupedBy = _props.groupedBy;
      var options = _props.options;
      var placeholder = _props.placeholder;

      var otherDropdownProps = _objectWithoutProperties(_props, ['allowEmptyOptions', 'className', 'dataTestId', 'groupedBy', 'options', 'placeholder']);

      if (allowEmptyOptions || options && options.length) {
        return _react2['default'].createElement(
          'select',
          _extends({
            className: className,
            'data-test-id': dataTestId
          }, otherDropdownProps),
          _react2['default'].createElement(
            'option',
            { value: '' },
            placeholder
          ),
          options && options.length > 0 && (groupedBy ? this.renderOptGroups(options, groupedBy) : this.renderOptions(options))
        );
      }

      return _react2['default'].createElement('span', null);
    }
  }], [{
    key: 'propTypes',
    value: {
      allowEmptyOptions: _react.PropTypes.bool,
      className: _react.PropTypes.string,
      dataTestId: _react.PropTypes.string,
      groupedBy: _react.PropTypes.string,
      options: _react.PropTypes.array,
      placeholder: _react.PropTypes.string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      allowEmptyOptions: false,
      className: '',
      dataTestId: '',
      groupedBy: null,
      options: [],
      placeholder: ''
    },
    enumerable: true
  }]);

  return Dropdown;
})(_react.Component);

exports.Dropdown = Dropdown;
