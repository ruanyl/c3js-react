'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _c = require('c3');

var _c2 = _interopRequireDefault(_c);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chart = function (_Component) {
  (0, _inherits3.default)(Chart, _Component);

  function Chart(props) {
    (0, _classCallCheck3.default)(this, Chart);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Chart).call(this, props));

    _this.chart = null;
    console.log(props);
    return _this;
  }

  (0, _createClass3.default)(Chart, [{
    key: 'generateChart',
    value: function generateChart() {
      var _props = this.props;
      var data = _props.data;
      var config = _props.config;
      var axis = _props.axis;
      var zoom = _props.zoom;
      var subchart = _props.subchart;
      var bindto = config.bindto;
      var restConfig = (0, _objectWithoutProperties3.default)(config, ['bindto']);

      var c3Confg = (0, _extends3.default)({
        bindto: '#' + bindto
      }, restConfig, {
        data: data,
        zoom: zoom,
        axis: axis,
        subchart: subchart
      });

      if (data.columns.length > 0) {
        this.chart = _c2.default.generate(c3Confg);
      } else {
        this.destroyChart();
      }
    }
  }, {
    key: 'destroyChart',
    value: function destroyChart() {
      if (this.chart) {
        this.chart.destroy();
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.generateChart();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.generateChart();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destroyChart();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { id: this.props.config.bindto });
    }
  }]);
  return Chart;
}(_react.Component);

exports.default = Chart;


Chart.propTypes = {
  data: _react2.default.PropTypes.object,
  config: _react2.default.PropTypes.object,
  axis: _react2.default.PropTypes.object,
  zoom: _react2.default.PropTypes.object,
  subchart: _react2.default.PropTypes.object
};

Chart.defaultProps = {
  config: {
    bindto: 'chart-id'
  },
  data: {
    columns: []
  }
};