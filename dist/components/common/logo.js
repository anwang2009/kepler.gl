'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  display: inline-block;\n  margin-left: 6px;\n'], ['\n  display: inline-block;\n  margin-left: 6px;\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  .logo__link {\n    color: ', ';\n    font-size: 14px;\n    font-weight: 600;\n    letter-spacing: 1.17px;\n  }\n'], ['\n  .logo__link {\n    color: ', ';\n    font-size: 14px;\n    font-weight: 600;\n    letter-spacing: 1.17px;\n  }\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  font-size: 10px;\n  color: ', ';\n  letter-spacing: 0.83px;\n  line-height: 14px;\n'], ['\n  font-size: 10px;\n  color: ', ';\n  letter-spacing: 0.83px;\n  line-height: 14px;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  align-items: flex-start;\n'], ['\n  display: flex;\n  align-items: flex-start;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  margin-top: 3px;\n'], ['\n  margin-top: 3px;\n']); // Copyright (c) 2018 Uber Technologies, Inc.
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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _defaultSettings = require('../../constants/default-settings');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LogoTitle = _styledComponents2.default.div(_templateObject);

var LogoName = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.theme.activeColor;
});
var LogoVersion = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.subtextColor;
});

var LogoWrapper = _styledComponents2.default.div(_templateObject4);

var LogoSvgWrapper = _styledComponents2.default.div(_templateObject5);

var LogoSvg = function LogoSvg() {
  return _react2.default.createElement(
    'svg',
    {
      className: 'side-panel-logo__logo',
      width: '22px',
      height: '15px',
      viewBox: '0 0 22 15'
    },
    _react2.default.createElement(
      'g',
      { transform: 'translate(11, -3) rotate(45.000000)' },
      _react2.default.createElement('rect', { fill: '#535C6C', x: '0', y: '5', width: '10', height: '10' }),
      _react2.default.createElement('rect', { fill: '#1FBAD6', x: '5', y: '0', width: '10', height: '10' })
    )
  );
};

var KeplerGlLogo = function KeplerGlLogo(_ref) {
  var _ref$appName = _ref.appName,
      appName = _ref$appName === undefined ? _defaultSettings.KEPLER_GL_NAME : _ref$appName,
      _ref$version = _ref.version,
      version = _ref$version === undefined ? _defaultSettings.KEPLER_GL_VERSION : _ref$version;
  return _react2.default.createElement(
    LogoWrapper,
    { className: 'side-panel-logo' },
    _react2.default.createElement(
      LogoSvgWrapper,
      null,
      _react2.default.createElement(LogoSvg, null)
    ),
    _react2.default.createElement(
      LogoTitle,
      { className: 'logo__title' },
      _react2.default.createElement(
        LogoName,
        { className: 'logo__name' },
        _react2.default.createElement(
          'a',
          { className: 'logo__link', target: '_blank', rel: 'noopener noreferrer', href: _defaultSettings.KEPLER_GL_WEBSITE },
          appName
        )
      ),
      version ? _react2.default.createElement(
        LogoVersion,
        { className: 'logo__version' },
        version
      ) : null
    )
  );
};

KeplerGlLogo.defaultProps = {
  appName: _propTypes2.default.string,
  version: _propTypes2.default.string
};

exports.default = KeplerGlLogo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9sb2dvLmpzIl0sIm5hbWVzIjpbIkxvZ29UaXRsZSIsInN0eWxlZCIsImRpdiIsIkxvZ29OYW1lIiwicHJvcHMiLCJ0aGVtZSIsImFjdGl2ZUNvbG9yIiwiTG9nb1ZlcnNpb24iLCJzdWJ0ZXh0Q29sb3IiLCJMb2dvV3JhcHBlciIsIkxvZ29TdmdXcmFwcGVyIiwiTG9nb1N2ZyIsIktlcGxlckdsTG9nbyIsImFwcE5hbWUiLCJLRVBMRVJfR0xfTkFNRSIsInZlcnNpb24iLCJLRVBMRVJfR0xfVkVSU0lPTiIsIktFUExFUl9HTF9XRUJTSVRFIiwiZGVmYXVsdFByb3BzIiwiUHJvcFR5cGVzIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztxSEFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1BLFlBQVlDLDJCQUFPQyxHQUFuQixpQkFBTjs7QUFLQSxJQUFNQyxXQUFXRiwyQkFBT0MsR0FBbEIsbUJBRU87QUFBQSxTQUFTRSxNQUFNQyxLQUFOLENBQVlDLFdBQXJCO0FBQUEsQ0FGUCxDQUFOO0FBUUEsSUFBTUMsY0FBY04sMkJBQU9DLEdBQXJCLG1CQUVLO0FBQUEsU0FBU0UsTUFBTUMsS0FBTixDQUFZRyxZQUFyQjtBQUFBLENBRkwsQ0FBTjs7QUFPQSxJQUFNQyxjQUFjUiwyQkFBT0MsR0FBckIsa0JBQU47O0FBS0EsSUFBTVEsaUJBQWlCVCwyQkFBT0MsR0FBeEIsa0JBQU47O0FBSUEsSUFBTVMsVUFBVSxTQUFWQSxPQUFVO0FBQUEsU0FDZDtBQUFBO0FBQUE7QUFDRSxpQkFBVSx1QkFEWjtBQUVFLGFBQU0sTUFGUjtBQUdFLGNBQU8sTUFIVDtBQUlFLGVBQVE7QUFKVjtBQU1FO0FBQUE7QUFBQSxRQUFHLFdBQVUscUNBQWI7QUFDRSw4Q0FBTSxNQUFLLFNBQVgsRUFBcUIsR0FBRSxHQUF2QixFQUEyQixHQUFFLEdBQTdCLEVBQWlDLE9BQU0sSUFBdkMsRUFBNEMsUUFBTyxJQUFuRCxHQURGO0FBRUUsOENBQU0sTUFBSyxTQUFYLEVBQXFCLEdBQUUsR0FBdkIsRUFBMkIsR0FBRSxHQUE3QixFQUFpQyxPQUFNLElBQXZDLEVBQTRDLFFBQU8sSUFBbkQ7QUFGRjtBQU5GLEdBRGM7QUFBQSxDQUFoQjs7QUFjQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWU7QUFBQSwwQkFBRUMsT0FBRjtBQUFBLE1BQUVBLE9BQUYsZ0NBQVlDLCtCQUFaO0FBQUEsMEJBQTRCQyxPQUE1QjtBQUFBLE1BQTRCQSxPQUE1QixnQ0FBc0NDLGtDQUF0QztBQUFBLFNBQ25CO0FBQUMsZUFBRDtBQUFBLE1BQWEsV0FBVSxpQkFBdkI7QUFDRTtBQUFDLG9CQUFEO0FBQUE7QUFDRSxvQ0FBQyxPQUFEO0FBREYsS0FERjtBQUlFO0FBQUMsZUFBRDtBQUFBLFFBQVcsV0FBVSxhQUFyQjtBQUNFO0FBQUMsZ0JBQUQ7QUFBQSxVQUFVLFdBQVUsWUFBcEI7QUFDRTtBQUFBO0FBQUEsWUFBRyxXQUFVLFlBQWIsRUFBMEIsUUFBTyxRQUFqQyxFQUEwQyxLQUFJLHFCQUE5QyxFQUFvRSxNQUFNQyxrQ0FBMUU7QUFBOEZKO0FBQTlGO0FBREYsT0FERjtBQUlHRSxnQkFBVTtBQUFDLG1CQUFEO0FBQUEsVUFBYSxXQUFVLGVBQXZCO0FBQXdDQTtBQUF4QyxPQUFWLEdBQTJFO0FBSjlFO0FBSkYsR0FEbUI7QUFBQSxDQUFyQjs7QUFjQUgsYUFBYU0sWUFBYixHQUE0QjtBQUMxQkwsV0FBU00sb0JBQVVDLE1BRE87QUFFMUJMLFdBQVNJLG9CQUFVQztBQUZPLENBQTVCOztrQkFLZVIsWSIsImZpbGUiOiJsb2dvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29weXJpZ2h0IChjKSAyMDE4IFViZXIgVGVjaG5vbG9naWVzLCBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7S0VQTEVSX0dMX05BTUUsIEtFUExFUl9HTF9WRVJTSU9OLCBLRVBMRVJfR0xfV0VCU0lURX0gZnJvbSAnY29uc3RhbnRzL2RlZmF1bHQtc2V0dGluZ3MnO1xuXG5jb25zdCBMb2dvVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG5gO1xuXG5jb25zdCBMb2dvTmFtZSA9IHN0eWxlZC5kaXZgXG4gIC5sb2dvX19saW5rIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5hY3RpdmVDb2xvcn07XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuMTdweDtcbiAgfVxuYDtcbmNvbnN0IExvZ29WZXJzaW9uID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5zdWJ0ZXh0Q29sb3J9O1xuICBsZXR0ZXItc3BhY2luZzogMC44M3B4O1xuICBsaW5lLWhlaWdodDogMTRweDtcbmA7XG5cbmNvbnN0IExvZ29XcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5gO1xuXG5jb25zdCBMb2dvU3ZnV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi10b3A6IDNweDtcbmA7XG5cbmNvbnN0IExvZ29TdmcgPSAoKSA9PiAoXG4gIDxzdmdcbiAgICBjbGFzc05hbWU9XCJzaWRlLXBhbmVsLWxvZ29fX2xvZ29cIlxuICAgIHdpZHRoPVwiMjJweFwiXG4gICAgaGVpZ2h0PVwiMTVweFwiXG4gICAgdmlld0JveD1cIjAgMCAyMiAxNVwiXG4gID5cbiAgICA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTEsIC0zKSByb3RhdGUoNDUuMDAwMDAwKVwiPlxuICAgICAgPHJlY3QgZmlsbD1cIiM1MzVDNkNcIiB4PVwiMFwiIHk9XCI1XCIgd2lkdGg9XCIxMFwiIGhlaWdodD1cIjEwXCIgLz5cbiAgICAgIDxyZWN0IGZpbGw9XCIjMUZCQUQ2XCIgeD1cIjVcIiB5PVwiMFwiIHdpZHRoPVwiMTBcIiBoZWlnaHQ9XCIxMFwiIC8+XG4gICAgPC9nPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IEtlcGxlckdsTG9nbyA9ICh7YXBwTmFtZSA9IEtFUExFUl9HTF9OQU1FLCB2ZXJzaW9uID0gS0VQTEVSX0dMX1ZFUlNJT059KSA9PiAoXG4gIDxMb2dvV3JhcHBlciBjbGFzc05hbWU9XCJzaWRlLXBhbmVsLWxvZ29cIj5cbiAgICA8TG9nb1N2Z1dyYXBwZXI+XG4gICAgICA8TG9nb1N2ZyAvPlxuICAgIDwvTG9nb1N2Z1dyYXBwZXI+XG4gICAgPExvZ29UaXRsZSBjbGFzc05hbWU9XCJsb2dvX190aXRsZVwiPlxuICAgICAgPExvZ29OYW1lIGNsYXNzTmFtZT1cImxvZ29fX25hbWVcIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nb19fbGlua1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiBocmVmPXtLRVBMRVJfR0xfV0VCU0lURX0+e2FwcE5hbWV9PC9hPlxuICAgICAgPC9Mb2dvTmFtZT5cbiAgICAgIHt2ZXJzaW9uID8gPExvZ29WZXJzaW9uIGNsYXNzTmFtZT1cImxvZ29fX3ZlcnNpb25cIj57dmVyc2lvbn08L0xvZ29WZXJzaW9uPiA6IG51bGx9XG4gICAgPC9Mb2dvVGl0bGU+XG4gIDwvTG9nb1dyYXBwZXI+XG4pO1xuXG5LZXBsZXJHbExvZ28uZGVmYXVsdFByb3BzID0ge1xuICBhcHBOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2ZXJzaW9uOiBQcm9wVHlwZXMuc3RyaW5nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBLZXBsZXJHbExvZ287XG4iXX0=