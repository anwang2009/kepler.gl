'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  font-family: ff-clan-web-pro, \'Helvetica Neue\', Helvetica, sans-serif;\n  font-weight: 400;\n  font-size: 0.875em;\n  line-height: 1.71429;\n\n  *,\n  *:before,\n  *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    margin: 0;\n  }\n\n  a {\n    text-decoration: none;\n    color: ', ';\n  }\n'], ['\n  font-family: ff-clan-web-pro, \'Helvetica Neue\', Helvetica, sans-serif;\n  font-weight: 400;\n  font-size: 0.875em;\n  line-height: 1.71429;\n\n  *,\n  *:before,\n  *:after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    margin: 0;\n  }\n\n  a {\n    text-decoration: none;\n    color: ', ';\n  }\n']); // Copyright (c) 2018 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _window = require('global/window');

var _redux = require('redux');

var _d3Request = require('d3-request');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _keplerglConnect = require('../connect/keplergl-connect');

var _visStateActions = require('../actions/vis-state-actions');

var VisStateActions = _interopRequireWildcard(_visStateActions);

var _mapStateActions = require('../actions/map-state-actions');

var MapStateActions = _interopRequireWildcard(_mapStateActions);

var _mapStyleActions = require('../actions/map-style-actions');

var MapStyleActions = _interopRequireWildcard(_mapStyleActions);

var _uiStateActions = require('../actions/ui-state-actions');

var UIStateActions = _interopRequireWildcard(_uiStateActions);

var _defaultSettings = require('../constants/default-settings');

var _sidePanel = require('./side-panel');

var _sidePanel2 = _interopRequireDefault(_sidePanel);

var _mapContainer = require('./map-container');

var _mapContainer2 = _interopRequireDefault(_mapContainer);

var _bottomWidget = require('./bottom-widget');

var _bottomWidget2 = _interopRequireDefault(_bottomWidget);

var _modalContainer = require('./modal-container');

var _modalContainer2 = _interopRequireDefault(_modalContainer);

var _plotContainer = require('./plot-container');

var _plotContainer2 = _interopRequireDefault(_plotContainer);

var _utils = require('../utils/utils');

var _base = require('../styles/base');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlobalStyle = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.labelColor;
});

KeplerGlFactory.deps = [_bottomWidget2.default, _mapContainer2.default, _modalContainer2.default, _sidePanel2.default, _plotContainer2.default];

function KeplerGlFactory(BottomWidget, MapContainer, ModalWrapper, SidePanel, PlotContainer) {
  var _class, _temp2;

  var KeplerGL = (_temp2 = _class = function (_Component) {
    (0, _inherits3.default)(KeplerGL, _Component);

    function KeplerGL() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, KeplerGL);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = KeplerGL.__proto__ || Object.getPrototypeOf(KeplerGL)).call.apply(_ref, [this].concat(args))), _this), _this._loadMapStyle = function () {
        var defaultStyles = Object.values(_this.props.mapStyle.mapStyles);
        // add id to custom map styles if not given
        var customeStyles = (_this.props.mapStyles || []).map(function (ms) {
          return (0, _extends3.default)({}, ms, {
            id: ms.id || (0, _utils.generateHashId)()
          });
        });

        [].concat((0, _toConsumableArray3.default)(customeStyles), (0, _toConsumableArray3.default)(defaultStyles)).forEach(function (style) {
          if (style.style) {
            _this.props.mapStyleActions.loadMapStyles((0, _defineProperty3.default)({}, style.id, style));
          } else {
            _this._requestMapStyle(style);
          }
        });
      }, _this._requestMapStyle = function (mapStyle) {
        var url = mapStyle.url,
            id = mapStyle.id;

        (0, _d3Request.json)(url, function (error, result) {
          if (error) {
            _window.console.warn('Error loading map style ' + mapStyle.url);
          } else {
            _this.props.mapStyleActions.loadMapStyles((0, _defineProperty3.default)({}, id, (0, _extends3.default)({}, mapStyle, { style: result })));
          }
        });
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(KeplerGL, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._loadMapStyle(this.props.mapStyles);
        this._handleResize(this.props);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        if (
        // if dimension props has changed
        this.props.height !== nextProps.height || this.props.width !== nextProps.width ||
        // react-map-gl will dispatch updateViewport after this._handleResize is called
        // here we check if this.props.mapState.height is sync with props.height
        nextProps.height !== this.props.mapState.height) {
          this._handleResize(nextProps);
        }
      }
    }, {
      key: '_handleResize',
      value: function _handleResize(_ref2) {
        var width = _ref2.width,
            height = _ref2.height;

        if (!Number.isFinite(width) || !Number.isFinite(height)) {
          _window.console.warn('width and height is required');
          return;
        }
        this.props.mapStateActions.updateMap({
          width: width / (1 + Number(this.props.mapState.isSplit)),
          height: height
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var _props = this.props,
            id = _props.id,
            appName = _props.appName,
            version = _props.version,
            onSaveMap = _props.onSaveMap,
            width = _props.width,
            height = _props.height,
            mapboxApiAccessToken = _props.mapboxApiAccessToken,
            mapStyle = _props.mapStyle,
            mapState = _props.mapState,
            uiState = _props.uiState,
            visState = _props.visState,
            visStateActions = _props.visStateActions,
            mapStateActions = _props.mapStateActions,
            mapStyleActions = _props.mapStyleActions,
            uiStateActions = _props.uiStateActions;
        var filters = visState.filters,
            layers = visState.layers,
            splitMaps = visState.splitMaps,
            layerOrder = visState.layerOrder,
            layerBlending = visState.layerBlending,
            layerClasses = visState.layerClasses,
            interactionConfig = visState.interactionConfig,
            datasets = visState.datasets,
            layerData = visState.layerData,
            hoverInfo = visState.hoverInfo,
            clicked = visState.clicked;


        var sideFields = {
          appName: appName,
          version: version,
          datasets: datasets,
          filters: filters,
          layers: layers,
          layerOrder: layerOrder,
          layerClasses: layerClasses,
          interactionConfig: interactionConfig,
          mapStyle: mapStyle,
          layerBlending: layerBlending,
          onSaveMap: onSaveMap,
          uiState: uiState,
          mapStyleActions: mapStyleActions,
          visStateActions: visStateActions,
          uiStateActions: uiStateActions,
          width: _defaultSettings.DIMENSIONS.sidePanel.width
        };

        var mapFields = {
          datasets: datasets,
          mapboxApiAccessToken: mapboxApiAccessToken,
          mapState: mapState,
          mapStyle: mapStyle,
          mapControls: uiState.mapControls,
          layers: layers,
          layerOrder: layerOrder,
          layerData: layerData,
          layerBlending: layerBlending,
          interactionConfig: interactionConfig,
          hoverInfo: hoverInfo,
          clicked: clicked,
          toggleMapControl: uiStateActions.toggleMapControl,
          uiStateActions: uiStateActions,
          visStateActions: visStateActions,
          mapStateActions: mapStateActions
        };

        var isSplit = splitMaps && splitMaps.length > 1;
        var containerW = mapState.width * (Number(isSplit) + 1);

        var mapContainers = !isSplit ? [_react2.default.createElement(MapContainer, (0, _extends3.default)({
          key: 0,
          index: 0
        }, mapFields, {
          mapLayers: isSplit ? splitMaps[0].layers : null
        }))] : splitMaps.map(function (settings, index) {
          return _react2.default.createElement(MapContainer, (0, _extends3.default)({
            key: index,
            index: index
          }, mapFields, {
            mapLayers: splitMaps[index].layers
          }));
        });

        var isExporting = uiState.currentModal === _defaultSettings.EXPORT_IMAGE_ID;

        return _react2.default.createElement(
          _styledComponents.ThemeProvider,
          { theme: _base.theme },
          _react2.default.createElement(
            GlobalStyle,
            {
              style: {
                position: 'relative',
                width: width + 'px',
                height: height + 'px'
              },
              className: 'kepler-gl',
              id: 'kepler-gl__' + id,
              innerRef: function innerRef(node) {
                _this2.root = node;
              }
            },
            !uiState.readOnly && _react2.default.createElement(SidePanel, sideFields),
            _react2.default.createElement(
              'div',
              { className: 'maps', style: { display: 'flex' } },
              mapContainers
            ),
            isExporting && _react2.default.createElement(PlotContainer, {
              width: width,
              height: height,
              exportImageSetting: uiState.exportImage,
              mapFields: mapFields,
              startExportingImage: uiStateActions.startExportingImage,
              setExportImageDataUri: uiStateActions.setExportImageDataUri
            }),
            _react2.default.createElement(BottomWidget, {
              filters: filters,
              datasets: datasets,
              uiState: uiState,
              visStateActions: visStateActions,
              sidePanelWidth: _defaultSettings.DIMENSIONS.sidePanel.width + _defaultSettings.DIMENSIONS.sidePanel.margin.left,
              containerW: containerW
            }),
            _react2.default.createElement(ModalWrapper, {
              mapStyle: mapStyle,
              visState: visState,
              mapState: mapState,
              uiState: uiState,
              mapboxApiAccessToken: mapboxApiAccessToken,
              visStateActions: visStateActions,
              uiStateActions: uiStateActions,
              mapStyleActions: mapStyleActions,
              rootNode: this.root,
              containerW: containerW,
              containerH: mapState.height
            })
          )
        );
      }
    }]);
    return KeplerGL;
  }(_react.Component), _class.defaultProps = {
    mapStyles: [],
    width: 800,
    height: 800,
    appName: _defaultSettings.KEPLER_GL_NAME,
    version: _defaultSettings.KEPLER_GL_VERSION
  }, _temp2);


  return (0, _keplerglConnect.connect)(mapStateToProps, mapDispatchToProps)(KeplerGL);
}

function mapStateToProps(state, props) {
  return (0, _extends3.default)({}, props, {
    visState: state.visState,
    mapStyle: state.mapStyle,
    mapState: state.mapState,
    uiState: state.uiState
  });
}

function mapDispatchToProps(dispatch, ownProps) {
  var userActions = ownProps.actions || {};

  var _map = [VisStateActions, MapStateActions, MapStyleActions, UIStateActions].map(function (actions) {
    return (0, _redux.bindActionCreators)(mergeActions(actions, userActions), dispatch);
  }),
      _map2 = (0, _slicedToArray3.default)(_map, 4),
      visStateActions = _map2[0],
      mapStateActions = _map2[1],
      mapStyleActions = _map2[2],
      uiStateActions = _map2[3];

  return {
    visStateActions: visStateActions,
    mapStateActions: mapStateActions,
    mapStyleActions: mapStyleActions,
    uiStateActions: uiStateActions,
    dispatch: dispatch
  };
}

/**
 * Override default maps-gl actions with user defined actions using the same key
 */
function mergeActions(actions, userActions) {
  var overrides = {};
  for (var key in userActions) {
    if (userActions.hasOwnProperty(key) && actions.hasOwnProperty(key)) {
      overrides[key] = userActions[key];
    }
  }

  return (0, _extends3.default)({}, actions, overrides);
}

exports.default = KeplerGlFactory;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2tlcGxlci1nbC5qcyJdLCJuYW1lcyI6WyJWaXNTdGF0ZUFjdGlvbnMiLCJNYXBTdGF0ZUFjdGlvbnMiLCJNYXBTdHlsZUFjdGlvbnMiLCJVSVN0YXRlQWN0aW9ucyIsIkdsb2JhbFN0eWxlIiwic3R5bGVkIiwiZGl2IiwicHJvcHMiLCJ0aGVtZSIsImxhYmVsQ29sb3IiLCJLZXBsZXJHbEZhY3RvcnkiLCJkZXBzIiwiQm90dG9tV2lkZ2V0RmFjdG9yeSIsIk1hcENvbnRhaW5lckZhY3RvcnkiLCJNb2RhbENvbnRhaW5lckZhY3RvcnkiLCJTaWRlUGFuZWxGYWN0b3J5IiwiUGxvdENvbnRhaW5lckZhY3RvcnkiLCJCb3R0b21XaWRnZXQiLCJNYXBDb250YWluZXIiLCJNb2RhbFdyYXBwZXIiLCJTaWRlUGFuZWwiLCJQbG90Q29udGFpbmVyIiwiS2VwbGVyR0wiLCJfbG9hZE1hcFN0eWxlIiwiZGVmYXVsdFN0eWxlcyIsIk9iamVjdCIsInZhbHVlcyIsIm1hcFN0eWxlIiwibWFwU3R5bGVzIiwiY3VzdG9tZVN0eWxlcyIsIm1hcCIsIm1zIiwiaWQiLCJmb3JFYWNoIiwic3R5bGUiLCJtYXBTdHlsZUFjdGlvbnMiLCJsb2FkTWFwU3R5bGVzIiwiX3JlcXVlc3RNYXBTdHlsZSIsInVybCIsImVycm9yIiwicmVzdWx0IiwiQ29uc29sZSIsIndhcm4iLCJfaGFuZGxlUmVzaXplIiwibmV4dFByb3BzIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXBTdGF0ZSIsIk51bWJlciIsImlzRmluaXRlIiwibWFwU3RhdGVBY3Rpb25zIiwidXBkYXRlTWFwIiwiaXNTcGxpdCIsImFwcE5hbWUiLCJ2ZXJzaW9uIiwib25TYXZlTWFwIiwibWFwYm94QXBpQWNjZXNzVG9rZW4iLCJ1aVN0YXRlIiwidmlzU3RhdGUiLCJ2aXNTdGF0ZUFjdGlvbnMiLCJ1aVN0YXRlQWN0aW9ucyIsImZpbHRlcnMiLCJsYXllcnMiLCJzcGxpdE1hcHMiLCJsYXllck9yZGVyIiwibGF5ZXJCbGVuZGluZyIsImxheWVyQ2xhc3NlcyIsImludGVyYWN0aW9uQ29uZmlnIiwiZGF0YXNldHMiLCJsYXllckRhdGEiLCJob3ZlckluZm8iLCJjbGlja2VkIiwic2lkZUZpZWxkcyIsIkRJTUVOU0lPTlMiLCJzaWRlUGFuZWwiLCJtYXBGaWVsZHMiLCJtYXBDb250cm9scyIsInRvZ2dsZU1hcENvbnRyb2wiLCJsZW5ndGgiLCJjb250YWluZXJXIiwibWFwQ29udGFpbmVycyIsInNldHRpbmdzIiwiaW5kZXgiLCJpc0V4cG9ydGluZyIsImN1cnJlbnRNb2RhbCIsIkVYUE9SVF9JTUFHRV9JRCIsInBvc2l0aW9uIiwicm9vdCIsIm5vZGUiLCJyZWFkT25seSIsImRpc3BsYXkiLCJleHBvcnRJbWFnZSIsInN0YXJ0RXhwb3J0aW5nSW1hZ2UiLCJzZXRFeHBvcnRJbWFnZURhdGFVcmkiLCJtYXJnaW4iLCJsZWZ0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwiS0VQTEVSX0dMX05BTUUiLCJLRVBMRVJfR0xfVkVSU0lPTiIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsInN0YXRlIiwiZGlzcGF0Y2giLCJvd25Qcm9wcyIsInVzZXJBY3Rpb25zIiwiYWN0aW9ucyIsIm1lcmdlQWN0aW9ucyIsIm92ZXJyaWRlcyIsImtleSIsImhhc093blByb3BlcnR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MDVCQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFFQTs7SUFBWUEsZTs7QUFDWjs7SUFBWUMsZTs7QUFDWjs7SUFBWUMsZTs7QUFDWjs7SUFBWUMsYzs7QUFFWjs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7O0FBRUE7Ozs7OztBQUVBLElBQU1DLGNBQWNDLDJCQUFPQyxHQUFyQixrQkF5Qk87QUFBQSxTQUFTQyxNQUFNQyxLQUFOLENBQVlDLFVBQXJCO0FBQUEsQ0F6QlAsQ0FBTjs7QUE2QkFDLGdCQUFnQkMsSUFBaEIsR0FBdUIsQ0FDckJDLHNCQURxQixFQUVyQkMsc0JBRnFCLEVBR3JCQyx3QkFIcUIsRUFJckJDLG1CQUpxQixFQUtyQkMsdUJBTHFCLENBQXZCOztBQVFBLFNBQVNOLGVBQVQsQ0FDRU8sWUFERixFQUVFQyxZQUZGLEVBR0VDLFlBSEYsRUFJRUMsU0FKRixFQUtFQyxhQUxGLEVBTUU7QUFBQTs7QUFBQSxNQUNNQyxRQUROO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUEsME1BdUNFQyxhQXZDRixHQXVDa0IsWUFBTTtBQUNwQixZQUFNQyxnQkFBZ0JDLE9BQU9DLE1BQVAsQ0FBYyxNQUFLbkIsS0FBTCxDQUFXb0IsUUFBWCxDQUFvQkMsU0FBbEMsQ0FBdEI7QUFDQTtBQUNBLFlBQU1DLGdCQUFnQixDQUFDLE1BQUt0QixLQUFMLENBQVdxQixTQUFYLElBQXdCLEVBQXpCLEVBQTZCRSxHQUE3QixDQUFpQztBQUFBLDRDQUNsREMsRUFEa0Q7QUFFckRDLGdCQUFJRCxHQUFHQyxFQUFILElBQVM7QUFGd0M7QUFBQSxTQUFqQyxDQUF0Qjs7QUFLQSxtREFBSUgsYUFBSixvQ0FBc0JMLGFBQXRCLEdBQXFDUyxPQUFyQyxDQUNFLGlCQUFTO0FBQ1AsY0FBSUMsTUFBTUEsS0FBVixFQUFpQjtBQUNmLGtCQUFLM0IsS0FBTCxDQUFXNEIsZUFBWCxDQUEyQkMsYUFBM0IsbUNBQ0dGLE1BQU1GLEVBRFQsRUFDY0UsS0FEZDtBQUdELFdBSkQsTUFJTztBQUNMLGtCQUFLRyxnQkFBTCxDQUFzQkgsS0FBdEI7QUFDRDtBQUNGLFNBVEg7QUFXRCxPQTFESCxRQTRERUcsZ0JBNURGLEdBNERxQixVQUFDVixRQUFELEVBQWM7QUFBQSxZQUN4QlcsR0FEd0IsR0FDYlgsUUFEYSxDQUN4QlcsR0FEd0I7QUFBQSxZQUNuQk4sRUFEbUIsR0FDYkwsUUFEYSxDQUNuQkssRUFEbUI7O0FBRS9CLDZCQUFZTSxHQUFaLEVBQWlCLFVBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNsQyxjQUFJRCxLQUFKLEVBQVc7QUFDVEUsNEJBQVFDLElBQVIsOEJBQXdDZixTQUFTVyxHQUFqRDtBQUNELFdBRkQsTUFFTztBQUNMLGtCQUFLL0IsS0FBTCxDQUFXNEIsZUFBWCxDQUEyQkMsYUFBM0IsbUNBQ0dKLEVBREgsNkJBQ1lMLFFBRFosSUFDc0JPLE9BQU9NLE1BRDdCO0FBR0Q7QUFDRixTQVJEO0FBU0QsT0F2RUg7QUFBQTs7QUFBQTtBQUFBO0FBQUEsMkNBVXVCO0FBQ25CLGFBQUtqQixhQUFMLENBQW1CLEtBQUtoQixLQUFMLENBQVdxQixTQUE5QjtBQUNBLGFBQUtlLGFBQUwsQ0FBbUIsS0FBS3BDLEtBQXhCO0FBQ0Q7QUFiSDtBQUFBO0FBQUEsZ0RBZTRCcUMsU0FmNUIsRUFldUM7QUFDbkM7QUFDRTtBQUNBLGFBQUtyQyxLQUFMLENBQVdzQyxNQUFYLEtBQXNCRCxVQUFVQyxNQUFoQyxJQUNBLEtBQUt0QyxLQUFMLENBQVd1QyxLQUFYLEtBQXFCRixVQUFVRSxLQUQvQjtBQUVBO0FBQ0E7QUFDQUYsa0JBQVVDLE1BQVYsS0FBcUIsS0FBS3RDLEtBQUwsQ0FBV3dDLFFBQVgsQ0FBb0JGLE1BTjNDLEVBT0U7QUFDQSxlQUFLRixhQUFMLENBQW1CQyxTQUFuQjtBQUNEO0FBQ0Y7QUExQkg7QUFBQTtBQUFBLDJDQTRCaUM7QUFBQSxZQUFoQkUsS0FBZ0IsU0FBaEJBLEtBQWdCO0FBQUEsWUFBVEQsTUFBUyxTQUFUQSxNQUFTOztBQUM3QixZQUFJLENBQUNHLE9BQU9DLFFBQVAsQ0FBZ0JILEtBQWhCLENBQUQsSUFBMkIsQ0FBQ0UsT0FBT0MsUUFBUCxDQUFnQkosTUFBaEIsQ0FBaEMsRUFBeUQ7QUFDdkRKLDBCQUFRQyxJQUFSLENBQWEsOEJBQWI7QUFDQTtBQUNEO0FBQ0QsYUFBS25DLEtBQUwsQ0FBVzJDLGVBQVgsQ0FBMkJDLFNBQTNCLENBQXFDO0FBQ25DTCxpQkFBT0EsU0FBUyxJQUFJRSxPQUFPLEtBQUt6QyxLQUFMLENBQVd3QyxRQUFYLENBQW9CSyxPQUEzQixDQUFiLENBRDRCO0FBRW5DUDtBQUZtQyxTQUFyQztBQUlEO0FBckNIO0FBQUE7QUFBQSwrQkF5RVc7QUFBQTs7QUFBQSxxQkFzQkgsS0FBS3RDLEtBdEJGO0FBQUEsWUFHTHlCLEVBSEssVUFHTEEsRUFISztBQUFBLFlBSUxxQixPQUpLLFVBSUxBLE9BSks7QUFBQSxZQUtMQyxPQUxLLFVBS0xBLE9BTEs7QUFBQSxZQU1MQyxTQU5LLFVBTUxBLFNBTks7QUFBQSxZQU9MVCxLQVBLLFVBT0xBLEtBUEs7QUFBQSxZQVFMRCxNQVJLLFVBUUxBLE1BUks7QUFBQSxZQVNMVyxvQkFUSyxVQVNMQSxvQkFUSztBQUFBLFlBWUw3QixRQVpLLFVBWUxBLFFBWks7QUFBQSxZQWFMb0IsUUFiSyxVQWFMQSxRQWJLO0FBQUEsWUFjTFUsT0FkSyxVQWNMQSxPQWRLO0FBQUEsWUFlTEMsUUFmSyxVQWVMQSxRQWZLO0FBQUEsWUFrQkxDLGVBbEJLLFVBa0JMQSxlQWxCSztBQUFBLFlBbUJMVCxlQW5CSyxVQW1CTEEsZUFuQks7QUFBQSxZQW9CTGYsZUFwQkssVUFvQkxBLGVBcEJLO0FBQUEsWUFxQkx5QixjQXJCSyxVQXFCTEEsY0FyQks7QUFBQSxZQXlCTEMsT0F6QkssR0FvQ0hILFFBcENHLENBeUJMRyxPQXpCSztBQUFBLFlBMEJMQyxNQTFCSyxHQW9DSEosUUFwQ0csQ0EwQkxJLE1BMUJLO0FBQUEsWUEyQkxDLFNBM0JLLEdBb0NITCxRQXBDRyxDQTJCTEssU0EzQks7QUFBQSxZQTRCTEMsVUE1QkssR0FvQ0hOLFFBcENHLENBNEJMTSxVQTVCSztBQUFBLFlBNkJMQyxhQTdCSyxHQW9DSFAsUUFwQ0csQ0E2QkxPLGFBN0JLO0FBQUEsWUE4QkxDLFlBOUJLLEdBb0NIUixRQXBDRyxDQThCTFEsWUE5Qks7QUFBQSxZQStCTEMsaUJBL0JLLEdBb0NIVCxRQXBDRyxDQStCTFMsaUJBL0JLO0FBQUEsWUFnQ0xDLFFBaENLLEdBb0NIVixRQXBDRyxDQWdDTFUsUUFoQ0s7QUFBQSxZQWlDTEMsU0FqQ0ssR0FvQ0hYLFFBcENHLENBaUNMVyxTQWpDSztBQUFBLFlBa0NMQyxTQWxDSyxHQW9DSFosUUFwQ0csQ0FrQ0xZLFNBbENLO0FBQUEsWUFtQ0xDLE9BbkNLLEdBb0NIYixRQXBDRyxDQW1DTGEsT0FuQ0s7OztBQXNDUCxZQUFNQyxhQUFhO0FBQ2pCbkIsMEJBRGlCO0FBRWpCQywwQkFGaUI7QUFHakJjLDRCQUhpQjtBQUlqQlAsMEJBSmlCO0FBS2pCQyx3QkFMaUI7QUFNakJFLGdDQU5pQjtBQU9qQkUsb0NBUGlCO0FBUWpCQyw4Q0FSaUI7QUFTakJ4Qyw0QkFUaUI7QUFVakJzQyxzQ0FWaUI7QUFXakJWLDhCQVhpQjtBQVlqQkUsMEJBWmlCO0FBYWpCdEIsMENBYmlCO0FBY2pCd0IsMENBZGlCO0FBZWpCQyx3Q0FmaUI7QUFnQmpCZCxpQkFBTzJCLDRCQUFXQyxTQUFYLENBQXFCNUI7QUFoQlgsU0FBbkI7O0FBbUJBLFlBQU02QixZQUFZO0FBQ2hCUCw0QkFEZ0I7QUFFaEJaLG9EQUZnQjtBQUdoQlQsNEJBSGdCO0FBSWhCcEIsNEJBSmdCO0FBS2hCaUQsdUJBQWFuQixRQUFRbUIsV0FMTDtBQU1oQmQsd0JBTmdCO0FBT2hCRSxnQ0FQZ0I7QUFRaEJLLDhCQVJnQjtBQVNoQkosc0NBVGdCO0FBVWhCRSw4Q0FWZ0I7QUFXaEJHLDhCQVhnQjtBQVloQkMsMEJBWmdCO0FBYWhCTSw0QkFBa0JqQixlQUFlaUIsZ0JBYmpCO0FBY2hCakIsd0NBZGdCO0FBZWhCRCwwQ0FmZ0I7QUFnQmhCVDtBQWhCZ0IsU0FBbEI7O0FBbUJBLFlBQU1FLFVBQVVXLGFBQWFBLFVBQVVlLE1BQVYsR0FBbUIsQ0FBaEQ7QUFDQSxZQUFNQyxhQUFhaEMsU0FBU0QsS0FBVCxJQUFrQkUsT0FBT0ksT0FBUCxJQUFrQixDQUFwQyxDQUFuQjs7QUFFQSxZQUFNNEIsZ0JBQWdCLENBQUM1QixPQUFELEdBQ2xCLENBQ0UsOEJBQUMsWUFBRDtBQUNFLGVBQUssQ0FEUDtBQUVFLGlCQUFPO0FBRlQsV0FHTXVCLFNBSE47QUFJRSxxQkFBV3ZCLFVBQVVXLFVBQVUsQ0FBVixFQUFhRCxNQUF2QixHQUFnQztBQUo3QyxXQURGLENBRGtCLEdBU2xCQyxVQUFVakMsR0FBVixDQUFjLFVBQUNtRCxRQUFELEVBQVdDLEtBQVg7QUFBQSxpQkFDWiw4QkFBQyxZQUFEO0FBQ0UsaUJBQUtBLEtBRFA7QUFFRSxtQkFBT0E7QUFGVCxhQUdNUCxTQUhOO0FBSUUsdUJBQVdaLFVBQVVtQixLQUFWLEVBQWlCcEI7QUFKOUIsYUFEWTtBQUFBLFNBQWQsQ0FUSjs7QUFrQkEsWUFBTXFCLGNBQWMxQixRQUFRMkIsWUFBUixLQUF5QkMsZ0NBQTdDOztBQUVBLGVBQ0U7QUFBQyx5Q0FBRDtBQUFBLFlBQWUsT0FBTzdFLFdBQXRCO0FBQ0U7QUFBQyx1QkFBRDtBQUFBO0FBQ0UscUJBQU87QUFDTDhFLDBCQUFVLFVBREw7QUFFTHhDLHVCQUFVQSxLQUFWLE9BRks7QUFHTEQsd0JBQVdBLE1BQVg7QUFISyxlQURUO0FBTUUseUJBQVUsV0FOWjtBQU9FLGtDQUFrQmIsRUFQcEI7QUFRRSx3QkFBVSx3QkFBUTtBQUNoQix1QkFBS3VELElBQUwsR0FBWUMsSUFBWjtBQUNEO0FBVkg7QUFZRyxhQUFDL0IsUUFBUWdDLFFBQVQsSUFBcUIsOEJBQUMsU0FBRCxFQUFlakIsVUFBZixDQVp4QjtBQWFFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLE1BQWYsRUFBc0IsT0FBTyxFQUFDa0IsU0FBUyxNQUFWLEVBQTdCO0FBQ0dWO0FBREgsYUFiRjtBQWdCR0csMkJBQ0MsOEJBQUMsYUFBRDtBQUNFLHFCQUFPckMsS0FEVDtBQUVFLHNCQUFRRCxNQUZWO0FBR0Usa0NBQW9CWSxRQUFRa0MsV0FIOUI7QUFJRSx5QkFBV2hCLFNBSmI7QUFLRSxtQ0FBcUJmLGVBQWVnQyxtQkFMdEM7QUFNRSxxQ0FBdUJoQyxlQUFlaUM7QUFOeEMsY0FqQko7QUEwQkUsMENBQUMsWUFBRDtBQUNFLHVCQUFTaEMsT0FEWDtBQUVFLHdCQUFVTyxRQUZaO0FBR0UsdUJBQVNYLE9BSFg7QUFJRSwrQkFBaUJFLGVBSm5CO0FBS0UsOEJBQ0VjLDRCQUFXQyxTQUFYLENBQXFCNUIsS0FBckIsR0FBNkIyQiw0QkFBV0MsU0FBWCxDQUFxQm9CLE1BQXJCLENBQTRCQyxJQU43RDtBQVFFLDBCQUFZaEI7QUFSZCxjQTFCRjtBQW9DRSwwQ0FBQyxZQUFEO0FBQ0Usd0JBQVVwRCxRQURaO0FBRUUsd0JBQVUrQixRQUZaO0FBR0Usd0JBQVVYLFFBSFo7QUFJRSx1QkFBU1UsT0FKWDtBQUtFLG9DQUFzQkQsb0JBTHhCO0FBTUUsK0JBQWlCRyxlQU5uQjtBQU9FLDhCQUFnQkMsY0FQbEI7QUFRRSwrQkFBaUJ6QixlQVJuQjtBQVNFLHdCQUFVLEtBQUtvRCxJQVRqQjtBQVVFLDBCQUFZUixVQVZkO0FBV0UsMEJBQVloQyxTQUFTRjtBQVh2QjtBQXBDRjtBQURGLFNBREY7QUFzREQ7QUFsT0g7QUFBQTtBQUFBLElBQ3VCbUQsZ0JBRHZCLFVBRVNDLFlBRlQsR0FFd0I7QUFDcEJyRSxlQUFXLEVBRFM7QUFFcEJrQixXQUFPLEdBRmE7QUFHcEJELFlBQVEsR0FIWTtBQUlwQlEsYUFBUzZDLCtCQUpXO0FBS3BCNUMsYUFBUzZDO0FBTFcsR0FGeEI7OztBQXFPQSxTQUFPLDhCQUFnQkMsZUFBaEIsRUFBaUNDLGtCQUFqQyxFQUFxRC9FLFFBQXJELENBQVA7QUFDRDs7QUFFRCxTQUFTOEUsZUFBVCxDQUF5QkUsS0FBekIsRUFBZ0MvRixLQUFoQyxFQUF1QztBQUNyQyxvQ0FDS0EsS0FETDtBQUVFbUQsY0FBVTRDLE1BQU01QyxRQUZsQjtBQUdFL0IsY0FBVTJFLE1BQU0zRSxRQUhsQjtBQUlFb0IsY0FBVXVELE1BQU12RCxRQUpsQjtBQUtFVSxhQUFTNkMsTUFBTTdDO0FBTGpCO0FBT0Q7O0FBRUQsU0FBUzRDLGtCQUFULENBQTRCRSxRQUE1QixFQUFzQ0MsUUFBdEMsRUFBZ0Q7QUFDOUMsTUFBTUMsY0FBY0QsU0FBU0UsT0FBVCxJQUFvQixFQUF4Qzs7QUFEOEMsYUFRMUMsQ0FDRjFHLGVBREUsRUFFRkMsZUFGRSxFQUdGQyxlQUhFLEVBSUZDLGNBSkUsRUFLRjJCLEdBTEUsQ0FLRTtBQUFBLFdBQ0osK0JBQW1CNkUsYUFBYUQsT0FBYixFQUFzQkQsV0FBdEIsQ0FBbkIsRUFBdURGLFFBQXZELENBREk7QUFBQSxHQUxGLENBUjBDO0FBQUE7QUFBQSxNQUk1QzVDLGVBSjRDO0FBQUEsTUFLNUNULGVBTDRDO0FBQUEsTUFNNUNmLGVBTjRDO0FBQUEsTUFPNUN5QixjQVA0Qzs7QUFpQjlDLFNBQU87QUFDTEQsb0NBREs7QUFFTFQsb0NBRks7QUFHTGYsb0NBSEs7QUFJTHlCLGtDQUpLO0FBS0wyQztBQUxLLEdBQVA7QUFPRDs7QUFFRDs7O0FBR0EsU0FBU0ksWUFBVCxDQUFzQkQsT0FBdEIsRUFBK0JELFdBQS9CLEVBQTRDO0FBQzFDLE1BQU1HLFlBQVksRUFBbEI7QUFDQSxPQUFLLElBQU1DLEdBQVgsSUFBa0JKLFdBQWxCLEVBQStCO0FBQzdCLFFBQUlBLFlBQVlLLGNBQVosQ0FBMkJELEdBQTNCLEtBQW1DSCxRQUFRSSxjQUFSLENBQXVCRCxHQUF2QixDQUF2QyxFQUFvRTtBQUNsRUQsZ0JBQVVDLEdBQVYsSUFBaUJKLFlBQVlJLEdBQVosQ0FBakI7QUFDRDtBQUNGOztBQUVELG9DQUFXSCxPQUFYLEVBQXVCRSxTQUF2QjtBQUNEOztrQkFFY2xHLGUiLCJmaWxlIjoia2VwbGVyLWdsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE4IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2NvbnNvbGUgYXMgQ29uc29sZX0gZnJvbSAnZ2xvYmFsL3dpbmRvdyc7XG5pbXBvcnQge2JpbmRBY3Rpb25DcmVhdG9yc30gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHtqc29uIGFzIHJlcXVlc3RKc29ufSBmcm9tICdkMy1yZXF1ZXN0JztcbmltcG9ydCBzdHlsZWQsIHtUaGVtZVByb3ZpZGVyfSAgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtjb25uZWN0IGFzIGtlcGxlckdsQ29ubmVjdH0gZnJvbSAnLi4vY29ubmVjdC9rZXBsZXJnbC1jb25uZWN0JztcblxuaW1wb3J0ICogYXMgVmlzU3RhdGVBY3Rpb25zIGZyb20gJ2FjdGlvbnMvdmlzLXN0YXRlLWFjdGlvbnMnO1xuaW1wb3J0ICogYXMgTWFwU3RhdGVBY3Rpb25zIGZyb20gJ2FjdGlvbnMvbWFwLXN0YXRlLWFjdGlvbnMnO1xuaW1wb3J0ICogYXMgTWFwU3R5bGVBY3Rpb25zIGZyb20gJ2FjdGlvbnMvbWFwLXN0eWxlLWFjdGlvbnMnO1xuaW1wb3J0ICogYXMgVUlTdGF0ZUFjdGlvbnMgZnJvbSAnYWN0aW9ucy91aS1zdGF0ZS1hY3Rpb25zJztcblxuaW1wb3J0IHtFWFBPUlRfSU1BR0VfSUQsIERJTUVOU0lPTlMsXG4gIEtFUExFUl9HTF9OQU1FLCBLRVBMRVJfR0xfVkVSU0lPTn0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5pbXBvcnQgU2lkZVBhbmVsRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwnO1xuaW1wb3J0IE1hcENvbnRhaW5lckZhY3RvcnkgZnJvbSAnLi9tYXAtY29udGFpbmVyJztcbmltcG9ydCBCb3R0b21XaWRnZXRGYWN0b3J5IGZyb20gJy4vYm90dG9tLXdpZGdldCc7XG5pbXBvcnQgTW9kYWxDb250YWluZXJGYWN0b3J5IGZyb20gJy4vbW9kYWwtY29udGFpbmVyJztcbmltcG9ydCBQbG90Q29udGFpbmVyRmFjdG9yeSBmcm9tICcuL3Bsb3QtY29udGFpbmVyJztcblxuaW1wb3J0IHtnZW5lcmF0ZUhhc2hJZH0gZnJvbSAndXRpbHMvdXRpbHMnO1xuXG5pbXBvcnQge3RoZW1lfSBmcm9tICdzdHlsZXMvYmFzZSc7XG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gc3R5bGVkLmRpdmBcbiAgZm9udC1mYW1pbHk6IGZmLWNsYW4td2ViLXBybywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuODc1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjcxNDI5O1xuXG4gICosXG4gICo6YmVmb3JlLFxuICAqOmFmdGVyIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICB1bCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBsaSB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxhYmVsQ29sb3J9O1xuICB9XG5gO1xuXG5LZXBsZXJHbEZhY3RvcnkuZGVwcyA9IFtcbiAgQm90dG9tV2lkZ2V0RmFjdG9yeSxcbiAgTWFwQ29udGFpbmVyRmFjdG9yeSxcbiAgTW9kYWxDb250YWluZXJGYWN0b3J5LFxuICBTaWRlUGFuZWxGYWN0b3J5LFxuICBQbG90Q29udGFpbmVyRmFjdG9yeVxuXTtcblxuZnVuY3Rpb24gS2VwbGVyR2xGYWN0b3J5KFxuICBCb3R0b21XaWRnZXQsXG4gIE1hcENvbnRhaW5lcixcbiAgTW9kYWxXcmFwcGVyLFxuICBTaWRlUGFuZWwsXG4gIFBsb3RDb250YWluZXJcbikge1xuICBjbGFzcyBLZXBsZXJHTCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIG1hcFN0eWxlczogW10sXG4gICAgICB3aWR0aDogODAwLFxuICAgICAgaGVpZ2h0OiA4MDAsXG4gICAgICBhcHBOYW1lOiBLRVBMRVJfR0xfTkFNRSxcbiAgICAgIHZlcnNpb246IEtFUExFUl9HTF9WRVJTSU9OXG4gICAgfTtcblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHRoaXMuX2xvYWRNYXBTdHlsZSh0aGlzLnByb3BzLm1hcFN0eWxlcyk7XG4gICAgICB0aGlzLl9oYW5kbGVSZXNpemUodGhpcy5wcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIGlmIChcbiAgICAgICAgLy8gaWYgZGltZW5zaW9uIHByb3BzIGhhcyBjaGFuZ2VkXG4gICAgICAgIHRoaXMucHJvcHMuaGVpZ2h0ICE9PSBuZXh0UHJvcHMuaGVpZ2h0IHx8XG4gICAgICAgIHRoaXMucHJvcHMud2lkdGggIT09IG5leHRQcm9wcy53aWR0aCB8fFxuICAgICAgICAvLyByZWFjdC1tYXAtZ2wgd2lsbCBkaXNwYXRjaCB1cGRhdGVWaWV3cG9ydCBhZnRlciB0aGlzLl9oYW5kbGVSZXNpemUgaXMgY2FsbGVkXG4gICAgICAgIC8vIGhlcmUgd2UgY2hlY2sgaWYgdGhpcy5wcm9wcy5tYXBTdGF0ZS5oZWlnaHQgaXMgc3luYyB3aXRoIHByb3BzLmhlaWdodFxuICAgICAgICBuZXh0UHJvcHMuaGVpZ2h0ICE9PSB0aGlzLnByb3BzLm1hcFN0YXRlLmhlaWdodFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZVJlc2l6ZShuZXh0UHJvcHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9oYW5kbGVSZXNpemUoe3dpZHRoLCBoZWlnaHR9KSB7XG4gICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZSh3aWR0aCkgfHwgIU51bWJlci5pc0Zpbml0ZShoZWlnaHQpKSB7XG4gICAgICAgIENvbnNvbGUud2Fybignd2lkdGggYW5kIGhlaWdodCBpcyByZXF1aXJlZCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnByb3BzLm1hcFN0YXRlQWN0aW9ucy51cGRhdGVNYXAoe1xuICAgICAgICB3aWR0aDogd2lkdGggLyAoMSArIE51bWJlcih0aGlzLnByb3BzLm1hcFN0YXRlLmlzU3BsaXQpKSxcbiAgICAgICAgaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBfbG9hZE1hcFN0eWxlID0gKCkgPT4ge1xuICAgICAgY29uc3QgZGVmYXVsdFN0eWxlcyA9IE9iamVjdC52YWx1ZXModGhpcy5wcm9wcy5tYXBTdHlsZS5tYXBTdHlsZXMpO1xuICAgICAgLy8gYWRkIGlkIHRvIGN1c3RvbSBtYXAgc3R5bGVzIGlmIG5vdCBnaXZlblxuICAgICAgY29uc3QgY3VzdG9tZVN0eWxlcyA9ICh0aGlzLnByb3BzLm1hcFN0eWxlcyB8fCBbXSkubWFwKG1zID0+ICh7XG4gICAgICAgIC4uLm1zLFxuICAgICAgICBpZDogbXMuaWQgfHwgZ2VuZXJhdGVIYXNoSWQoKVxuICAgICAgfSkpO1xuXG4gICAgICBbLi4uY3VzdG9tZVN0eWxlcywgLi4uZGVmYXVsdFN0eWxlc10uZm9yRWFjaChcbiAgICAgICAgc3R5bGUgPT4ge1xuICAgICAgICAgIGlmIChzdHlsZS5zdHlsZSkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5tYXBTdHlsZUFjdGlvbnMubG9hZE1hcFN0eWxlcyh7XG4gICAgICAgICAgICAgIFtzdHlsZS5pZF06IHN0eWxlXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZXF1ZXN0TWFwU3R5bGUoc3R5bGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgX3JlcXVlc3RNYXBTdHlsZSA9IChtYXBTdHlsZSkgPT4ge1xuICAgICAgY29uc3Qge3VybCwgaWR9ID0gbWFwU3R5bGU7XG4gICAgICByZXF1ZXN0SnNvbih1cmwsIChlcnJvciwgcmVzdWx0KSA9PiB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIENvbnNvbGUud2FybihgRXJyb3IgbG9hZGluZyBtYXAgc3R5bGUgJHttYXBTdHlsZS51cmx9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5tYXBTdHlsZUFjdGlvbnMubG9hZE1hcFN0eWxlcyh7XG4gICAgICAgICAgICBbaWRdOiB7Li4ubWFwU3R5bGUsIHN0eWxlOiByZXN1bHR9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIC8vIHByb3BzXG4gICAgICAgIGlkLFxuICAgICAgICBhcHBOYW1lLFxuICAgICAgICB2ZXJzaW9uLFxuICAgICAgICBvblNhdmVNYXAsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIG1hcGJveEFwaUFjY2Vzc1Rva2VuLFxuXG4gICAgICAgIC8vIHJlZHV4IHN0YXRlXG4gICAgICAgIG1hcFN0eWxlLFxuICAgICAgICBtYXBTdGF0ZSxcbiAgICAgICAgdWlTdGF0ZSxcbiAgICAgICAgdmlzU3RhdGUsXG5cbiAgICAgICAgLy8gYWN0aW9ucyxcbiAgICAgICAgdmlzU3RhdGVBY3Rpb25zLFxuICAgICAgICBtYXBTdGF0ZUFjdGlvbnMsXG4gICAgICAgIG1hcFN0eWxlQWN0aW9ucyxcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnNcbiAgICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICBjb25zdCB7XG4gICAgICAgIGZpbHRlcnMsXG4gICAgICAgIGxheWVycyxcbiAgICAgICAgc3BsaXRNYXBzLCAvLyB0aGlzIHdpbGwgc3RvcmUgc3VwcG9ydCBmb3Igc3BsaXQgbWFwIHZpZXcgaXMgbmVjZXNzYXJ5XG4gICAgICAgIGxheWVyT3JkZXIsXG4gICAgICAgIGxheWVyQmxlbmRpbmcsXG4gICAgICAgIGxheWVyQ2xhc3NlcyxcbiAgICAgICAgaW50ZXJhY3Rpb25Db25maWcsXG4gICAgICAgIGRhdGFzZXRzLFxuICAgICAgICBsYXllckRhdGEsXG4gICAgICAgIGhvdmVySW5mbyxcbiAgICAgICAgY2xpY2tlZFxuICAgICAgfSA9IHZpc1N0YXRlO1xuXG4gICAgICBjb25zdCBzaWRlRmllbGRzID0ge1xuICAgICAgICBhcHBOYW1lLFxuICAgICAgICB2ZXJzaW9uLFxuICAgICAgICBkYXRhc2V0cyxcbiAgICAgICAgZmlsdGVycyxcbiAgICAgICAgbGF5ZXJzLFxuICAgICAgICBsYXllck9yZGVyLFxuICAgICAgICBsYXllckNsYXNzZXMsXG4gICAgICAgIGludGVyYWN0aW9uQ29uZmlnLFxuICAgICAgICBtYXBTdHlsZSxcbiAgICAgICAgbGF5ZXJCbGVuZGluZyxcbiAgICAgICAgb25TYXZlTWFwLFxuICAgICAgICB1aVN0YXRlLFxuICAgICAgICBtYXBTdHlsZUFjdGlvbnMsXG4gICAgICAgIHZpc1N0YXRlQWN0aW9ucyxcbiAgICAgICAgdWlTdGF0ZUFjdGlvbnMsXG4gICAgICAgIHdpZHRoOiBESU1FTlNJT05TLnNpZGVQYW5lbC53aWR0aFxuICAgICAgfTtcblxuICAgICAgY29uc3QgbWFwRmllbGRzID0ge1xuICAgICAgICBkYXRhc2V0cyxcbiAgICAgICAgbWFwYm94QXBpQWNjZXNzVG9rZW4sXG4gICAgICAgIG1hcFN0YXRlLFxuICAgICAgICBtYXBTdHlsZSxcbiAgICAgICAgbWFwQ29udHJvbHM6IHVpU3RhdGUubWFwQ29udHJvbHMsXG4gICAgICAgIGxheWVycyxcbiAgICAgICAgbGF5ZXJPcmRlcixcbiAgICAgICAgbGF5ZXJEYXRhLFxuICAgICAgICBsYXllckJsZW5kaW5nLFxuICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAgICAgaG92ZXJJbmZvLFxuICAgICAgICBjbGlja2VkLFxuICAgICAgICB0b2dnbGVNYXBDb250cm9sOiB1aVN0YXRlQWN0aW9ucy50b2dnbGVNYXBDb250cm9sLFxuICAgICAgICB1aVN0YXRlQWN0aW9ucyxcbiAgICAgICAgdmlzU3RhdGVBY3Rpb25zLFxuICAgICAgICBtYXBTdGF0ZUFjdGlvbnNcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGlzU3BsaXQgPSBzcGxpdE1hcHMgJiYgc3BsaXRNYXBzLmxlbmd0aCA+IDE7XG4gICAgICBjb25zdCBjb250YWluZXJXID0gbWFwU3RhdGUud2lkdGggKiAoTnVtYmVyKGlzU3BsaXQpICsgMSk7XG5cbiAgICAgIGNvbnN0IG1hcENvbnRhaW5lcnMgPSAhaXNTcGxpdFxuICAgICAgICA/IFtcbiAgICAgICAgICAgIDxNYXBDb250YWluZXJcbiAgICAgICAgICAgICAga2V5PXswfVxuICAgICAgICAgICAgICBpbmRleD17MH1cbiAgICAgICAgICAgICAgey4uLm1hcEZpZWxkc31cbiAgICAgICAgICAgICAgbWFwTGF5ZXJzPXtpc1NwbGl0ID8gc3BsaXRNYXBzWzBdLmxheWVycyA6IG51bGx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIF1cbiAgICAgICAgOiBzcGxpdE1hcHMubWFwKChzZXR0aW5ncywgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxNYXBDb250YWluZXJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgICAgICB7Li4ubWFwRmllbGRzfVxuICAgICAgICAgICAgICBtYXBMYXllcnM9e3NwbGl0TWFwc1tpbmRleF0ubGF5ZXJzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKTtcblxuICAgICAgY29uc3QgaXNFeHBvcnRpbmcgPSB1aVN0YXRlLmN1cnJlbnRNb2RhbCA9PT0gRVhQT1JUX0lNQUdFX0lEO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDxHbG9iYWxTdHlsZVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgICAgICAgICAgIGhlaWdodDogYCR7aGVpZ2h0fXB4YFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImtlcGxlci1nbFwiXG4gICAgICAgICAgICBpZD17YGtlcGxlci1nbF9fJHtpZH1gfVxuICAgICAgICAgICAgaW5uZXJSZWY9e25vZGUgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnJvb3QgPSBub2RlO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7IXVpU3RhdGUucmVhZE9ubHkgJiYgPFNpZGVQYW5lbCB7Li4uc2lkZUZpZWxkc30gLz59XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcHNcIiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxuICAgICAgICAgICAgICB7bWFwQ29udGFpbmVyc31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2lzRXhwb3J0aW5nICYmXG4gICAgICAgICAgICAgIDxQbG90Q29udGFpbmVyXG4gICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgICAgIGV4cG9ydEltYWdlU2V0dGluZz17dWlTdGF0ZS5leHBvcnRJbWFnZX1cbiAgICAgICAgICAgICAgICBtYXBGaWVsZHM9e21hcEZpZWxkc31cbiAgICAgICAgICAgICAgICBzdGFydEV4cG9ydGluZ0ltYWdlPXt1aVN0YXRlQWN0aW9ucy5zdGFydEV4cG9ydGluZ0ltYWdlfVxuICAgICAgICAgICAgICAgIHNldEV4cG9ydEltYWdlRGF0YVVyaT17dWlTdGF0ZUFjdGlvbnMuc2V0RXhwb3J0SW1hZ2VEYXRhVXJpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPEJvdHRvbVdpZGdldFxuICAgICAgICAgICAgICBmaWx0ZXJzPXtmaWx0ZXJzfVxuICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgIHVpU3RhdGU9e3VpU3RhdGV9XG4gICAgICAgICAgICAgIHZpc1N0YXRlQWN0aW9ucz17dmlzU3RhdGVBY3Rpb25zfVxuICAgICAgICAgICAgICBzaWRlUGFuZWxXaWR0aD17XG4gICAgICAgICAgICAgICAgRElNRU5TSU9OUy5zaWRlUGFuZWwud2lkdGggKyBESU1FTlNJT05TLnNpZGVQYW5lbC5tYXJnaW4ubGVmdFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNvbnRhaW5lclc9e2NvbnRhaW5lcld9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPE1vZGFsV3JhcHBlclxuICAgICAgICAgICAgICBtYXBTdHlsZT17bWFwU3R5bGV9XG4gICAgICAgICAgICAgIHZpc1N0YXRlPXt2aXNTdGF0ZX1cbiAgICAgICAgICAgICAgbWFwU3RhdGU9e21hcFN0YXRlfVxuICAgICAgICAgICAgICB1aVN0YXRlPXt1aVN0YXRlfVxuICAgICAgICAgICAgICBtYXBib3hBcGlBY2Nlc3NUb2tlbj17bWFwYm94QXBpQWNjZXNzVG9rZW59XG4gICAgICAgICAgICAgIHZpc1N0YXRlQWN0aW9ucz17dmlzU3RhdGVBY3Rpb25zfVxuICAgICAgICAgICAgICB1aVN0YXRlQWN0aW9ucz17dWlTdGF0ZUFjdGlvbnN9XG4gICAgICAgICAgICAgIG1hcFN0eWxlQWN0aW9ucz17bWFwU3R5bGVBY3Rpb25zfVxuICAgICAgICAgICAgICByb290Tm9kZT17dGhpcy5yb290fVxuICAgICAgICAgICAgICBjb250YWluZXJXPXtjb250YWluZXJXfVxuICAgICAgICAgICAgICBjb250YWluZXJIPXttYXBTdGF0ZS5oZWlnaHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvR2xvYmFsU3R5bGU+XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGtlcGxlckdsQ29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoS2VwbGVyR0wpO1xufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIHByb3BzKSB7XG4gIHJldHVybiB7XG4gICAgLi4ucHJvcHMsXG4gICAgdmlzU3RhdGU6IHN0YXRlLnZpc1N0YXRlLFxuICAgIG1hcFN0eWxlOiBzdGF0ZS5tYXBTdHlsZSxcbiAgICBtYXBTdGF0ZTogc3RhdGUubWFwU3RhdGUsXG4gICAgdWlTdGF0ZTogc3RhdGUudWlTdGF0ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKSB7XG4gIGNvbnN0IHVzZXJBY3Rpb25zID0gb3duUHJvcHMuYWN0aW9ucyB8fCB7fTtcblxuICBjb25zdCBbXG4gICAgdmlzU3RhdGVBY3Rpb25zLFxuICAgIG1hcFN0YXRlQWN0aW9ucyxcbiAgICBtYXBTdHlsZUFjdGlvbnMsXG4gICAgdWlTdGF0ZUFjdGlvbnNcbiAgXSA9IFtcbiAgICBWaXNTdGF0ZUFjdGlvbnMsXG4gICAgTWFwU3RhdGVBY3Rpb25zLFxuICAgIE1hcFN0eWxlQWN0aW9ucyxcbiAgICBVSVN0YXRlQWN0aW9uc1xuICBdLm1hcChhY3Rpb25zID0+XG4gICAgYmluZEFjdGlvbkNyZWF0b3JzKG1lcmdlQWN0aW9ucyhhY3Rpb25zLCB1c2VyQWN0aW9ucyksIGRpc3BhdGNoKVxuICApO1xuXG4gIHJldHVybiB7XG4gICAgdmlzU3RhdGVBY3Rpb25zLFxuICAgIG1hcFN0YXRlQWN0aW9ucyxcbiAgICBtYXBTdHlsZUFjdGlvbnMsXG4gICAgdWlTdGF0ZUFjdGlvbnMsXG4gICAgZGlzcGF0Y2hcbiAgfTtcbn1cblxuLyoqXG4gKiBPdmVycmlkZSBkZWZhdWx0IG1hcHMtZ2wgYWN0aW9ucyB3aXRoIHVzZXIgZGVmaW5lZCBhY3Rpb25zIHVzaW5nIHRoZSBzYW1lIGtleVxuICovXG5mdW5jdGlvbiBtZXJnZUFjdGlvbnMoYWN0aW9ucywgdXNlckFjdGlvbnMpIHtcbiAgY29uc3Qgb3ZlcnJpZGVzID0ge307XG4gIGZvciAoY29uc3Qga2V5IGluIHVzZXJBY3Rpb25zKSB7XG4gICAgaWYgKHVzZXJBY3Rpb25zLmhhc093blByb3BlcnR5KGtleSkgJiYgYWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBvdmVycmlkZXNba2V5XSA9IHVzZXJBY3Rpb25zW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsuLi5hY3Rpb25zLCAuLi5vdmVycmlkZXN9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBLZXBsZXJHbEZhY3Rvcnk7XG4iXX0=