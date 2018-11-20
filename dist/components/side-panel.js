'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PanelTitleFactory = undefined;

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

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  ', ';\n  flex-grow: 1;\n  padding: 16px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n'], ['\n  ', ';\n  flex-grow: 1;\n  padding: 16px;\n  overflow-y: scroll;\n  overflow-x: hidden;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  font-size: 20px;\n  font-weight: 400;\n  letter-spacing: 1.25px;\n  margin-bottom: 14px;\n'], ['\n  color: ', ';\n  font-size: 20px;\n  font-weight: 400;\n  letter-spacing: 1.25px;\n  margin-bottom: 14px;\n']); // Copyright (c) 2018 Uber Technologies, Inc.
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

exports.default = SidePanelFactory;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _sideBar = require('./side-panel/side-bar');

var _sideBar2 = _interopRequireDefault(_sideBar);

var _panelHeader = require('./side-panel/panel-header');

var _panelHeader2 = _interopRequireDefault(_panelHeader);

var _layerManager = require('./side-panel/layer-manager');

var _layerManager2 = _interopRequireDefault(_layerManager);

var _filterManager = require('./side-panel/filter-manager');

var _filterManager2 = _interopRequireDefault(_filterManager);

var _interactionManager = require('./side-panel/interaction-manager');

var _interactionManager2 = _interopRequireDefault(_interactionManager);

var _mapManager = require('./side-panel/map-manager');

var _mapManager2 = _interopRequireDefault(_mapManager);

var _panelToggle = require('./side-panel/panel-toggle');

var _panelToggle2 = _interopRequireDefault(_panelToggle);

var _defaultSettings = require('../constants/default-settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SidePanelContent = _styledComponents2.default.div(_templateObject, function (props) {
  return props.theme.sidePanelScrollBar;
});

var PanelTitleFactory = exports.PanelTitleFactory = function PanelTitleFactory() {
  return _styledComponents2.default.div(_templateObject2, function (props) {
    return props.theme.titleTextColor;
  });
};

SidePanelFactory.deps = [_sideBar2.default, _panelHeader2.default, _panelToggle2.default, PanelTitleFactory, _layerManager2.default, _filterManager2.default, _interactionManager2.default, _mapManager2.default];

/**
 *
 * Vertical sidebar containing input components for the rendering layers
 */
function SidePanelFactory(Sidebar, PanelHeader, PanelToggle, PanelTitle, LayerManager, FilterManager, InteractionManager, MapManager) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    (0, _inherits3.default)(SidePanel, _Component);

    function SidePanel() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, SidePanel);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = SidePanel.__proto__ || Object.getPrototypeOf(SidePanel)).call.apply(_ref, [this].concat(args))), _this), _this._onOpenOrClose = function () {
        _this.props.uiStateActions.toggleSidePanel(_this.props.uiState.activeSidePanel ? null : 'layer');
      }, _this._showDatasetTable = function (dataId) {
        // this will open data table modal
        _this.props.visStateActions.showDatasetTable(dataId);
        _this.props.uiStateActions.toggleModal(_defaultSettings.DATA_TABLE_ID);
      }, _this._showAddDataModal = function () {
        _this.props.uiStateActions.toggleModal(_defaultSettings.ADD_DATA_ID);
      }, _this._showAddMapStyleModal = function () {
        _this.props.uiStateActions.toggleModal(_defaultSettings.ADD_MAP_STYLE_ID);
      }, _this._removeDataset = function (key) {
        // this will show the modal dialog to confirm deletion
        _this.props.uiStateActions.openDeleteModal(key);
      }, _this._onExportImage = function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_IMAGE_ID);
      }, _this._onExportData = function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_DATA_ID);
      }, _this._onExportConfig = function () {
        return _this.props.uiStateActions.toggleModal(_defaultSettings.EXPORT_CONFIG_ID);
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    /* component private functions */


    (0, _createClass3.default)(SidePanel, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            appName = _props.appName,
            version = _props.version,
            datasets = _props.datasets,
            filters = _props.filters,
            layers = _props.layers,
            layerBlending = _props.layerBlending,
            layerClasses = _props.layerClasses,
            uiState = _props.uiState,
            layerOrder = _props.layerOrder,
            interactionConfig = _props.interactionConfig,
            visStateActions = _props.visStateActions,
            mapStyleActions = _props.mapStyleActions,
            uiStateActions = _props.uiStateActions;
        var activeSidePanel = uiState.activeSidePanel;

        var isOpen = Boolean(activeSidePanel);

        var layerManagerActions = {
          addLayer: visStateActions.addLayer,
          layerConfigChange: visStateActions.layerConfigChange,
          layerVisualChannelConfigChange: visStateActions.layerVisualChannelConfigChange,
          layerTypeChange: visStateActions.layerTypeChange,
          layerVisConfigChange: visStateActions.layerVisConfigChange,
          updateLayerBlending: visStateActions.updateLayerBlending,
          updateLayerOrder: visStateActions.reorderLayer,
          showDatasetTable: this._showDatasetTable,
          showAddDataModal: this._showAddDataModal,
          removeLayer: visStateActions.removeLayer,
          removeDataset: this._removeDataset
        };

        var filterManagerActions = {
          addFilter: visStateActions.addFilter,
          removeFilter: visStateActions.removeFilter,
          setFilter: visStateActions.setFilter,
          showDatasetTable: this._showDatasetTable,
          showAddDataModal: this._showAddDataModal,
          toggleAnimation: visStateActions.toggleAnimation,
          enlargeFilter: visStateActions.enlargeFilter
        };

        var interactionManagerActions = {
          onConfigChange: visStateActions.interactionConfigChange
        };

        var mapManagerActions = {
          addMapStyleUrl: mapStyleActions.addMapStyleUrl,
          onConfigChange: mapStyleActions.mapConfigChange,
          onStyleChange: mapStyleActions.mapStyleChange,
          onBuildingChange: mapStyleActions.mapBuildingChange,
          showAddMapStyleModal: this._showAddMapStyleModal
        };

        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            Sidebar,
            {
              width: this.props.width,
              isOpen: isOpen,
              minifiedWidth: 0,
              onOpenOrClose: this._onOpenOrClose
            },
            _react2.default.createElement(PanelHeader, {
              appName: appName,
              version: version,
              onExportImage: this._onExportImage,
              onExportData: this._onExportData,
              visibleDropdown: uiState.visibleDropdown,
              showExportDropdown: uiStateActions.showExportDropdown,
              hideExportDropdown: uiStateActions.hideExportDropdown,
              onExportConfig: this._onExportConfig,
              onSaveMap: this.props.onSaveMap
            }),
            _react2.default.createElement(PanelToggle, {
              panels: _defaultSettings.PANELS,
              activePanel: activeSidePanel,
              togglePanel: uiStateActions.toggleSidePanel
            }),
            _react2.default.createElement(
              SidePanelContent,
              { className: 'side-panel__content' },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  PanelTitle,
                  { className: 'side-panel__content__title' },
                  (_defaultSettings.PANELS.find(function (_ref2) {
                    var id = _ref2.id;
                    return id === activeSidePanel;
                  }) || {}).label
                ),
                activeSidePanel === 'layer' && _react2.default.createElement(LayerManager, (0, _extends3.default)({}, layerManagerActions, {
                  datasets: datasets,
                  layers: layers,
                  layerClasses: layerClasses,
                  layerOrder: layerOrder,
                  layerBlending: layerBlending,
                  openModal: uiStateActions.toggleModal
                })),
                activeSidePanel === 'filter' && _react2.default.createElement(FilterManager, (0, _extends3.default)({}, filterManagerActions, {
                  datasets: datasets,
                  filters: filters
                })),
                activeSidePanel === 'interaction' && _react2.default.createElement(InteractionManager, (0, _extends3.default)({}, interactionManagerActions, {
                  datasets: datasets,
                  interactionConfig: interactionConfig
                })),
                activeSidePanel === 'map' && _react2.default.createElement(MapManager, (0, _extends3.default)({}, mapManagerActions, {
                  mapStyle: this.props.mapStyle
                }))
              )
            )
          )
        );
      }
    }]);
    return SidePanel;
  }(_react.Component), _class.propTypes = {
    filters: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
    interactionConfig: _propTypes2.default.object.isRequired,
    layerBlending: _propTypes2.default.string.isRequired,
    layers: _propTypes2.default.arrayOf(_propTypes2.default.any).isRequired,
    layerClasses: _propTypes2.default.object.isRequired,
    mapStyle: _propTypes2.default.object.isRequired,
    width: _propTypes2.default.number.isRequired,
    datasets: _propTypes2.default.object.isRequired,
    visStateActions: _propTypes2.default.object.isRequired,
    mapStyleActions: _propTypes2.default.object.isRequired
  }, _temp2;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3NpZGUtcGFuZWwuanMiXSwibmFtZXMiOlsiU2lkZVBhbmVsRmFjdG9yeSIsIlNpZGVQYW5lbENvbnRlbnQiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsInRoZW1lIiwic2lkZVBhbmVsU2Nyb2xsQmFyIiwiUGFuZWxUaXRsZUZhY3RvcnkiLCJ0aXRsZVRleHRDb2xvciIsImRlcHMiLCJTaWRlYmFyRmFjdG9yeSIsIlBhbmVsSGVhZGVyRmFjdG9yeSIsIlBhbmVsVG9nZ2xlRmFjdG9yeSIsIkxheWVyTWFuYWdlckZhY3RvcnkiLCJGaWx0ZXJNYW5hZ2VyRmFjdG9yeSIsIkludGVyYWN0aW9uTWFuYWdlckZhY3RvcnkiLCJNYXBNYW5hZ2VyRmFjdG9yeSIsIlNpZGViYXIiLCJQYW5lbEhlYWRlciIsIlBhbmVsVG9nZ2xlIiwiUGFuZWxUaXRsZSIsIkxheWVyTWFuYWdlciIsIkZpbHRlck1hbmFnZXIiLCJJbnRlcmFjdGlvbk1hbmFnZXIiLCJNYXBNYW5hZ2VyIiwiX29uT3Blbk9yQ2xvc2UiLCJ1aVN0YXRlQWN0aW9ucyIsInRvZ2dsZVNpZGVQYW5lbCIsInVpU3RhdGUiLCJhY3RpdmVTaWRlUGFuZWwiLCJfc2hvd0RhdGFzZXRUYWJsZSIsInZpc1N0YXRlQWN0aW9ucyIsInNob3dEYXRhc2V0VGFibGUiLCJkYXRhSWQiLCJ0b2dnbGVNb2RhbCIsIkRBVEFfVEFCTEVfSUQiLCJfc2hvd0FkZERhdGFNb2RhbCIsIkFERF9EQVRBX0lEIiwiX3Nob3dBZGRNYXBTdHlsZU1vZGFsIiwiQUREX01BUF9TVFlMRV9JRCIsIl9yZW1vdmVEYXRhc2V0Iiwib3BlbkRlbGV0ZU1vZGFsIiwia2V5IiwiX29uRXhwb3J0SW1hZ2UiLCJFWFBPUlRfSU1BR0VfSUQiLCJfb25FeHBvcnREYXRhIiwiRVhQT1JUX0RBVEFfSUQiLCJfb25FeHBvcnRDb25maWciLCJFWFBPUlRfQ09ORklHX0lEIiwiYXBwTmFtZSIsInZlcnNpb24iLCJkYXRhc2V0cyIsImZpbHRlcnMiLCJsYXllcnMiLCJsYXllckJsZW5kaW5nIiwibGF5ZXJDbGFzc2VzIiwibGF5ZXJPcmRlciIsImludGVyYWN0aW9uQ29uZmlnIiwibWFwU3R5bGVBY3Rpb25zIiwiaXNPcGVuIiwiQm9vbGVhbiIsImxheWVyTWFuYWdlckFjdGlvbnMiLCJhZGRMYXllciIsImxheWVyQ29uZmlnQ2hhbmdlIiwibGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlIiwibGF5ZXJUeXBlQ2hhbmdlIiwibGF5ZXJWaXNDb25maWdDaGFuZ2UiLCJ1cGRhdGVMYXllckJsZW5kaW5nIiwidXBkYXRlTGF5ZXJPcmRlciIsInJlb3JkZXJMYXllciIsInNob3dBZGREYXRhTW9kYWwiLCJyZW1vdmVMYXllciIsInJlbW92ZURhdGFzZXQiLCJmaWx0ZXJNYW5hZ2VyQWN0aW9ucyIsImFkZEZpbHRlciIsInJlbW92ZUZpbHRlciIsInNldEZpbHRlciIsInRvZ2dsZUFuaW1hdGlvbiIsImVubGFyZ2VGaWx0ZXIiLCJpbnRlcmFjdGlvbk1hbmFnZXJBY3Rpb25zIiwib25Db25maWdDaGFuZ2UiLCJpbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZSIsIm1hcE1hbmFnZXJBY3Rpb25zIiwiYWRkTWFwU3R5bGVVcmwiLCJtYXBDb25maWdDaGFuZ2UiLCJvblN0eWxlQ2hhbmdlIiwibWFwU3R5bGVDaGFuZ2UiLCJvbkJ1aWxkaW5nQ2hhbmdlIiwibWFwQnVpbGRpbmdDaGFuZ2UiLCJzaG93QWRkTWFwU3R5bGVNb2RhbCIsIndpZHRoIiwidmlzaWJsZURyb3Bkb3duIiwic2hvd0V4cG9ydERyb3Bkb3duIiwiaGlkZUV4cG9ydERyb3Bkb3duIiwib25TYXZlTWFwIiwiUEFORUxTIiwiZmluZCIsImlkIiwibGFiZWwiLCJtYXBTdHlsZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJhbnkiLCJpc1JlcXVpcmVkIiwib2JqZWN0Iiwic3RyaW5nIiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7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QkQsVUFSVjtBQVNqQjFFLHFCQUFpQnVFLG9CQUFVSSxNQUFWLENBQWlCRCxVQVRqQjtBQVVqQi9DLHFCQUFpQjRDLG9CQUFVSSxNQUFWLENBQWlCRDtBQVZqQixHQURyQjtBQXlLRCIsImZpbGUiOiJzaWRlLXBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE4IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmltcG9ydCBTaWRlYmFyRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvc2lkZS1iYXInO1xuaW1wb3J0IFBhbmVsSGVhZGVyRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvcGFuZWwtaGVhZGVyJztcbmltcG9ydCBMYXllck1hbmFnZXJGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9sYXllci1tYW5hZ2VyJztcbmltcG9ydCBGaWx0ZXJNYW5hZ2VyRmFjdG9yeSBmcm9tICcuL3NpZGUtcGFuZWwvZmlsdGVyLW1hbmFnZXInO1xuaW1wb3J0IEludGVyYWN0aW9uTWFuYWdlckZhY3RvcnkgZnJvbSAnLi9zaWRlLXBhbmVsL2ludGVyYWN0aW9uLW1hbmFnZXInO1xuaW1wb3J0IE1hcE1hbmFnZXJGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9tYXAtbWFuYWdlcic7XG5pbXBvcnQgUGFuZWxUb2dnbGVGYWN0b3J5IGZyb20gJy4vc2lkZS1wYW5lbC9wYW5lbC10b2dnbGUnO1xuXG5pbXBvcnQge1xuICBBRERfREFUQV9JRCxcbiAgQUREX01BUF9TVFlMRV9JRCxcbiAgREFUQV9UQUJMRV9JRCxcbiAgRVhQT1JUX0lNQUdFX0lELFxuICBFWFBPUlRfREFUQV9JRCxcbiAgRVhQT1JUX0NPTkZJR19JRCxcbiAgUEFORUxTXG59IGZyb20gJ2NvbnN0YW50cy9kZWZhdWx0LXNldHRpbmdzJztcblxuY29uc3QgU2lkZVBhbmVsQ29udGVudCA9IHN0eWxlZC5kaXZgXG4gICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc2lkZVBhbmVsU2Nyb2xsQmFyfTtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nOiAxNnB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbmA7XG5cbmV4cG9ydCBjb25zdCBQYW5lbFRpdGxlRmFjdG9yeSA9ICgpID0+IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnRpdGxlVGV4dENvbG9yfTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMS4yNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuYDtcblxuU2lkZVBhbmVsRmFjdG9yeS5kZXBzID0gW1xuICBTaWRlYmFyRmFjdG9yeSxcbiAgUGFuZWxIZWFkZXJGYWN0b3J5LFxuICBQYW5lbFRvZ2dsZUZhY3RvcnksXG4gIFBhbmVsVGl0bGVGYWN0b3J5LFxuICBMYXllck1hbmFnZXJGYWN0b3J5LFxuICBGaWx0ZXJNYW5hZ2VyRmFjdG9yeSxcbiAgSW50ZXJhY3Rpb25NYW5hZ2VyRmFjdG9yeSxcbiAgTWFwTWFuYWdlckZhY3Rvcnlcbl07XG5cbi8qKlxuICpcbiAqIFZlcnRpY2FsIHNpZGViYXIgY29udGFpbmluZyBpbnB1dCBjb21wb25lbnRzIGZvciB0aGUgcmVuZGVyaW5nIGxheWVyc1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlUGFuZWxGYWN0b3J5KFxuICBTaWRlYmFyLFxuICBQYW5lbEhlYWRlcixcbiAgUGFuZWxUb2dnbGUsXG4gIFBhbmVsVGl0bGUsXG4gIExheWVyTWFuYWdlcixcbiAgRmlsdGVyTWFuYWdlcixcbiAgSW50ZXJhY3Rpb25NYW5hZ2VyLFxuICBNYXBNYW5hZ2VyXG4pIHtcblxuICByZXR1cm4gY2xhc3MgU2lkZVBhbmVsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgZmlsdGVyczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmFueSkuaXNSZXF1aXJlZCxcbiAgICAgIGludGVyYWN0aW9uQ29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICBsYXllckJsZW5kaW5nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBsYXllcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5hbnkpLmlzUmVxdWlyZWQsXG4gICAgICBsYXllckNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIG1hcFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgICB3aWR0aDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgZGF0YXNldHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICAgIHZpc1N0YXRlQWN0aW9uczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgICAgbWFwU3R5bGVBY3Rpb25zOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgICB9O1xuXG4gICAgLyogY29tcG9uZW50IHByaXZhdGUgZnVuY3Rpb25zICovXG4gICAgX29uT3Blbk9yQ2xvc2UgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZVNpZGVQYW5lbChcbiAgICAgICAgdGhpcy5wcm9wcy51aVN0YXRlLmFjdGl2ZVNpZGVQYW5lbCA/IG51bGwgOiAnbGF5ZXInXG4gICAgICApO1xuICAgIH07XG5cbiAgICBfc2hvd0RhdGFzZXRUYWJsZSA9IGRhdGFJZCA9PiB7XG4gICAgICAvLyB0aGlzIHdpbGwgb3BlbiBkYXRhIHRhYmxlIG1vZGFsXG4gICAgICB0aGlzLnByb3BzLnZpc1N0YXRlQWN0aW9ucy5zaG93RGF0YXNldFRhYmxlKGRhdGFJZCk7XG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKERBVEFfVEFCTEVfSUQpO1xuICAgIH07XG5cbiAgICBfc2hvd0FkZERhdGFNb2RhbCA9ICgpID0+IHtcbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoQUREX0RBVEFfSUQpO1xuICAgIH07XG5cbiAgICBfc2hvd0FkZE1hcFN0eWxlTW9kYWwgPSAoKSA9PiB7XG4gICAgICB0aGlzLnByb3BzLnVpU3RhdGVBY3Rpb25zLnRvZ2dsZU1vZGFsKEFERF9NQVBfU1RZTEVfSUQpO1xuICAgIH07XG5cbiAgICBfcmVtb3ZlRGF0YXNldCA9IGtleSA9PiB7XG4gICAgICAvLyB0aGlzIHdpbGwgc2hvdyB0aGUgbW9kYWwgZGlhbG9nIHRvIGNvbmZpcm0gZGVsZXRpb25cbiAgICAgIHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMub3BlbkRlbGV0ZU1vZGFsKGtleSk7XG4gICAgfTtcblxuICAgIF9vbkV4cG9ydEltYWdlID0gKCkgPT4gdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChFWFBPUlRfSU1BR0VfSUQpO1xuXG4gICAgX29uRXhwb3J0RGF0YSA9ICgpID0+IHRoaXMucHJvcHMudWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWwoRVhQT1JUX0RBVEFfSUQpO1xuXG4gICAgX29uRXhwb3J0Q29uZmlnID0gKCkgPT4gdGhpcy5wcm9wcy51aVN0YXRlQWN0aW9ucy50b2dnbGVNb2RhbChFWFBPUlRfQ09ORklHX0lEKTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgYXBwTmFtZSxcbiAgICAgICAgdmVyc2lvbixcbiAgICAgICAgZGF0YXNldHMsXG4gICAgICAgIGZpbHRlcnMsXG4gICAgICAgIGxheWVycyxcbiAgICAgICAgbGF5ZXJCbGVuZGluZyxcbiAgICAgICAgbGF5ZXJDbGFzc2VzLFxuICAgICAgICB1aVN0YXRlLFxuICAgICAgICBsYXllck9yZGVyLFxuICAgICAgICBpbnRlcmFjdGlvbkNvbmZpZyxcbiAgICAgICAgdmlzU3RhdGVBY3Rpb25zLFxuICAgICAgICBtYXBTdHlsZUFjdGlvbnMsXG4gICAgICAgIHVpU3RhdGVBY3Rpb25zXG4gICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgIGNvbnN0IHthY3RpdmVTaWRlUGFuZWx9ID0gdWlTdGF0ZTtcbiAgICAgIGNvbnN0IGlzT3BlbiA9IEJvb2xlYW4oYWN0aXZlU2lkZVBhbmVsKTtcblxuICAgICAgY29uc3QgbGF5ZXJNYW5hZ2VyQWN0aW9ucyA9IHtcbiAgICAgICAgYWRkTGF5ZXI6IHZpc1N0YXRlQWN0aW9ucy5hZGRMYXllcixcbiAgICAgICAgbGF5ZXJDb25maWdDaGFuZ2U6IHZpc1N0YXRlQWN0aW9ucy5sYXllckNvbmZpZ0NoYW5nZSxcbiAgICAgICAgbGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlOlxuICAgICAgICB2aXNTdGF0ZUFjdGlvbnMubGF5ZXJWaXN1YWxDaGFubmVsQ29uZmlnQ2hhbmdlLFxuICAgICAgICBsYXllclR5cGVDaGFuZ2U6IHZpc1N0YXRlQWN0aW9ucy5sYXllclR5cGVDaGFuZ2UsXG4gICAgICAgIGxheWVyVmlzQ29uZmlnQ2hhbmdlOiB2aXNTdGF0ZUFjdGlvbnMubGF5ZXJWaXNDb25maWdDaGFuZ2UsXG4gICAgICAgIHVwZGF0ZUxheWVyQmxlbmRpbmc6IHZpc1N0YXRlQWN0aW9ucy51cGRhdGVMYXllckJsZW5kaW5nLFxuICAgICAgICB1cGRhdGVMYXllck9yZGVyOiB2aXNTdGF0ZUFjdGlvbnMucmVvcmRlckxheWVyLFxuICAgICAgICBzaG93RGF0YXNldFRhYmxlOiB0aGlzLl9zaG93RGF0YXNldFRhYmxlLFxuICAgICAgICBzaG93QWRkRGF0YU1vZGFsOiB0aGlzLl9zaG93QWRkRGF0YU1vZGFsLFxuICAgICAgICByZW1vdmVMYXllcjogdmlzU3RhdGVBY3Rpb25zLnJlbW92ZUxheWVyLFxuICAgICAgICByZW1vdmVEYXRhc2V0OiB0aGlzLl9yZW1vdmVEYXRhc2V0XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBmaWx0ZXJNYW5hZ2VyQWN0aW9ucyA9IHtcbiAgICAgICAgYWRkRmlsdGVyOiB2aXNTdGF0ZUFjdGlvbnMuYWRkRmlsdGVyLFxuICAgICAgICByZW1vdmVGaWx0ZXI6IHZpc1N0YXRlQWN0aW9ucy5yZW1vdmVGaWx0ZXIsXG4gICAgICAgIHNldEZpbHRlcjogdmlzU3RhdGVBY3Rpb25zLnNldEZpbHRlcixcbiAgICAgICAgc2hvd0RhdGFzZXRUYWJsZTogdGhpcy5fc2hvd0RhdGFzZXRUYWJsZSxcbiAgICAgICAgc2hvd0FkZERhdGFNb2RhbDogdGhpcy5fc2hvd0FkZERhdGFNb2RhbCxcbiAgICAgICAgdG9nZ2xlQW5pbWF0aW9uOiB2aXNTdGF0ZUFjdGlvbnMudG9nZ2xlQW5pbWF0aW9uLFxuICAgICAgICBlbmxhcmdlRmlsdGVyOiB2aXNTdGF0ZUFjdGlvbnMuZW5sYXJnZUZpbHRlclxuICAgICAgfTtcblxuICAgICAgY29uc3QgaW50ZXJhY3Rpb25NYW5hZ2VyQWN0aW9ucyA9IHtcbiAgICAgICAgb25Db25maWdDaGFuZ2U6IHZpc1N0YXRlQWN0aW9ucy5pbnRlcmFjdGlvbkNvbmZpZ0NoYW5nZVxuICAgICAgfTtcblxuICAgICAgY29uc3QgbWFwTWFuYWdlckFjdGlvbnMgPSB7XG4gICAgICAgIGFkZE1hcFN0eWxlVXJsOiBtYXBTdHlsZUFjdGlvbnMuYWRkTWFwU3R5bGVVcmwsXG4gICAgICAgIG9uQ29uZmlnQ2hhbmdlOiBtYXBTdHlsZUFjdGlvbnMubWFwQ29uZmlnQ2hhbmdlLFxuICAgICAgICBvblN0eWxlQ2hhbmdlOiBtYXBTdHlsZUFjdGlvbnMubWFwU3R5bGVDaGFuZ2UsXG4gICAgICAgIG9uQnVpbGRpbmdDaGFuZ2U6IG1hcFN0eWxlQWN0aW9ucy5tYXBCdWlsZGluZ0NoYW5nZSxcbiAgICAgICAgc2hvd0FkZE1hcFN0eWxlTW9kYWw6IHRoaXMuX3Nob3dBZGRNYXBTdHlsZU1vZGFsXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxTaWRlYmFyXG4gICAgICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH1cbiAgICAgICAgICAgIGlzT3Blbj17aXNPcGVufVxuICAgICAgICAgICAgbWluaWZpZWRXaWR0aD17MH1cbiAgICAgICAgICAgIG9uT3Blbk9yQ2xvc2U9e3RoaXMuX29uT3Blbk9yQ2xvc2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFBhbmVsSGVhZGVyXG4gICAgICAgICAgICAgIGFwcE5hbWU9e2FwcE5hbWV9XG4gICAgICAgICAgICAgIHZlcnNpb249e3ZlcnNpb259XG4gICAgICAgICAgICAgIG9uRXhwb3J0SW1hZ2U9e3RoaXMuX29uRXhwb3J0SW1hZ2V9XG4gICAgICAgICAgICAgIG9uRXhwb3J0RGF0YT17dGhpcy5fb25FeHBvcnREYXRhfVxuICAgICAgICAgICAgICB2aXNpYmxlRHJvcGRvd249e3VpU3RhdGUudmlzaWJsZURyb3Bkb3dufVxuICAgICAgICAgICAgICBzaG93RXhwb3J0RHJvcGRvd249e3VpU3RhdGVBY3Rpb25zLnNob3dFeHBvcnREcm9wZG93bn1cbiAgICAgICAgICAgICAgaGlkZUV4cG9ydERyb3Bkb3duPXt1aVN0YXRlQWN0aW9ucy5oaWRlRXhwb3J0RHJvcGRvd259XG4gICAgICAgICAgICAgIG9uRXhwb3J0Q29uZmlnPXt0aGlzLl9vbkV4cG9ydENvbmZpZ31cbiAgICAgICAgICAgICAgb25TYXZlTWFwPXt0aGlzLnByb3BzLm9uU2F2ZU1hcH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UGFuZWxUb2dnbGVcbiAgICAgICAgICAgICAgcGFuZWxzPXtQQU5FTFN9XG4gICAgICAgICAgICAgIGFjdGl2ZVBhbmVsPXthY3RpdmVTaWRlUGFuZWx9XG4gICAgICAgICAgICAgIHRvZ2dsZVBhbmVsPXt1aVN0YXRlQWN0aW9ucy50b2dnbGVTaWRlUGFuZWx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFNpZGVQYW5lbENvbnRlbnQgY2xhc3NOYW1lPVwic2lkZS1wYW5lbF9fY29udGVudFwiPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxQYW5lbFRpdGxlIGNsYXNzTmFtZT1cInNpZGUtcGFuZWxfX2NvbnRlbnRfX3RpdGxlXCI+XG4gICAgICAgICAgICAgICAgICB7KFBBTkVMUy5maW5kKCh7aWR9KSA9PiBpZCA9PT0gYWN0aXZlU2lkZVBhbmVsKSB8fCB7fSkubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9QYW5lbFRpdGxlPlxuICAgICAgICAgICAgICAgIHthY3RpdmVTaWRlUGFuZWwgPT09ICdsYXllcicgJiYgKFxuICAgICAgICAgICAgICAgICAgPExheWVyTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICB7Li4ubGF5ZXJNYW5hZ2VyQWN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldHM9e2RhdGFzZXRzfVxuICAgICAgICAgICAgICAgICAgICBsYXllcnM9e2xheWVyc31cbiAgICAgICAgICAgICAgICAgICAgbGF5ZXJDbGFzc2VzPXtsYXllckNsYXNzZXN9XG4gICAgICAgICAgICAgICAgICAgIGxheWVyT3JkZXI9e2xheWVyT3JkZXJ9XG4gICAgICAgICAgICAgICAgICAgIGxheWVyQmxlbmRpbmc9e2xheWVyQmxlbmRpbmd9XG4gICAgICAgICAgICAgICAgICAgIG9wZW5Nb2RhbD17dWlTdGF0ZUFjdGlvbnMudG9nZ2xlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2FjdGl2ZVNpZGVQYW5lbCA9PT0gJ2ZpbHRlcicgJiYgKFxuICAgICAgICAgICAgICAgICAgPEZpbHRlck1hbmFnZXJcbiAgICAgICAgICAgICAgICAgICAgey4uLmZpbHRlck1hbmFnZXJBY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge2FjdGl2ZVNpZGVQYW5lbCA9PT0gJ2ludGVyYWN0aW9uJyAmJiAoXG4gICAgICAgICAgICAgICAgICA8SW50ZXJhY3Rpb25NYW5hZ2VyXG4gICAgICAgICAgICAgICAgICAgIHsuLi5pbnRlcmFjdGlvbk1hbmFnZXJBY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0cz17ZGF0YXNldHN9XG4gICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9uQ29uZmlnPXtpbnRlcmFjdGlvbkNvbmZpZ31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7YWN0aXZlU2lkZVBhbmVsID09PSAnbWFwJyAmJiAoXG4gICAgICAgICAgICAgICAgICA8TWFwTWFuYWdlclxuICAgICAgICAgICAgICAgICAgICB7Li4ubWFwTWFuYWdlckFjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIG1hcFN0eWxlPXt0aGlzLnByb3BzLm1hcFN0eWxlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvU2lkZVBhbmVsQ29udGVudD5cbiAgICAgICAgICA8L1NpZGViYXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG4iXX0=