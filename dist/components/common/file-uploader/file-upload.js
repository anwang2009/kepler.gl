'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _class, _temp2;

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  margin-top: 10px;\n  color: ', ';\n'], ['\n  margin-top: 10px;\n  color: ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n'], ['\n  color: ', ';\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n  background-color: white;\n  border-radius: 4px;\n  border-style: dashed;\n  border-width: 1px;\n  border-color: ', ';\n  height: 414px;\n  padding-top: 60px;\n  text-align: center;\n  width: 100%;\n\n  .file-upload-or {\n    color: ', ';\n    padding-right: 4px;\n  }\n'], ['\n  background-color: white;\n  border-radius: 4px;\n  border-style: dashed;\n  border-width: 1px;\n  border-color: ', ';\n  height: 414px;\n  padding-top: 60px;\n  text-align: center;\n  width: 100%;\n\n  .file-upload-or {\n    color: ', ';\n    padding-right: 4px;\n  }\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  font-size: 20px;\n  height: 36px;\n'], ['\n  color: ', ';\n  font-size: 20px;\n  height: 36px;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n  color: ', ';\n  margin-bottom: 60px;\n\n  .file-type-row {\n    margin-bottom: 26px;\n  }\n'], ['\n  color: ', ';\n  margin-bottom: 60px;\n\n  .file-type-row {\n    margin-bottom: 26px;\n  }\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n  .filter-upload__input {\n    visibility: hidden;\n    height: 0;\n    position: absolute;\n  }\n\n  .file-drop {\n    position: relative;\n  }\n\n  .file-upload__message {\n    color: ', ';\n    font-size: 14px;\n    margin-bottom: 12px;\n  }\n'], ['\n  .filter-upload__input {\n    visibility: hidden;\n    height: 0;\n    position: absolute;\n  }\n\n  .file-drop {\n    position: relative;\n  }\n\n  .file-upload__message {\n    color: ', ';\n    font-size: 14px;\n    margin-bottom: 12px;\n  }\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n'], ['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n  position: absolute;\n  bottom: 0;\n  padding: 10px 30px;\n'], ['\n  position: absolute;\n  bottom: 0;\n  padding: 10px 30px;\n']); // Copyright (c) 2018 Uber Technologies, Inc.
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

var _uploadButton = require('./upload-button');

var _uploadButton2 = _interopRequireDefault(_uploadButton);

var _icons = require('../icons');

var _loadingSpinner = require('../loading-spinner');

var _loadingSpinner2 = _interopRequireDefault(_loadingSpinner);

var _utils = require('../../../utils/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileDrop = typeof document !== 'undefined' ? require('react-file-drop') : null;

// File.type is not reliable if the OS does not have a
// registered mapping for the extension.
// NOTE: Shapefiles must be in a compressed format since
// it requires multiple files to be present.
var defaultValidFileExt = ['csv',
// 'tar.gz',
// 'tgz',
// 'zip',
// 'gpx',
// 'kml',
'json', 'geojson'];

var MESSAGE = ' Drag & Drop Your File(s) Here';
var CHROME_MSG = '*Chrome user: Limit file size to 250mb, if need to upload larger file, try Safari';
var DISCLAIMER = '*Kepler.gl is a client-side application with no server backend. Data lives only on your machine/browser. ' + 'No information or map data is sent to any server.';
var CONFIG_UPLOAD_MESSAGE = 'Upload data files or upload a saved map via previously exported single Json of both config and data';

var fileIconColor = '#D3D8E0';

var WarningMsg = _styledComponents2.default.span(_templateObject, function (props) {
  return props.theme.errorColor;
});

var PositiveMsg = _styledComponents2.default.span(_templateObject2, function (props) {
  return props.theme.primaryBtnActBgd;
});

var StyledFileDrop = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.theme.subtextColorLT;
}, function (props) {
  return props.theme.linkBtnColor;
});

var MsgWrapper = _styledComponents2.default.div(_templateObject4, function (props) {
  return props.theme.modalTitleColor;
});

var StyledDragNDropIcon = _styledComponents2.default.div(_templateObject5, fileIconColor);

var StyledFileUpload = _styledComponents2.default.div(_templateObject6, function (props) {
  return props.theme.textColorLT;
});

var StyledMessage = _styledComponents2.default.div(_templateObject7);

var StyledDisclaimer = StyledMessage.extend(_templateObject8);

var FileUpload = (_temp2 = _class = function (_Component) {
  (0, _inherits3.default)(FileUpload, _Component);

  function FileUpload() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, FileUpload);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = FileUpload.__proto__ || Object.getPrototypeOf(FileUpload)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dragOver: false,
      files: [],
      errorFiles: []
    }, _this._isValidFileType = function (filename) {
      var validFileExt = _this.props.validFileExt;

      var fileExt = validFileExt.find(function (ext) {
        return filename.endsWith(ext);
      });

      return Boolean(fileExt);
    }, _this._handleFileDrop = function (files, e) {
      if (e) {
        e.stopPropagation();
      }

      var nextState = { files: [], errorFiles: [], dragOver: false };
      for (var i = 0; i < files.length; i++) {
        var file = files[i];

        if (file && _this._isValidFileType(file.name)) {
          nextState.files.push(file);
        } else {
          nextState.errorFiles.push(file.name);
        }
      }

      _this.setState(nextState, function () {
        return nextState.files.length ? _this.props.onFileUpload(nextState.files) : null;
      });
    }, _this._toggleDragState = function (newState) {
      _this.setState({ dragOver: newState });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(FileUpload, [{
    key: '_renderMessage',
    value: function _renderMessage() {
      var _state = this.state,
          errorFiles = _state.errorFiles,
          files = _state.files;


      if (errorFiles.length) {
        return _react2.default.createElement(
          WarningMsg,
          null,
          'File ' + errorFiles.join(', ') + ' is not supported.'
        );
      }

      if (!files.length) {
        return null;
      }

      return _react2.default.createElement(
        StyledMessage,
        { className: 'file-uploader__message' },
        _react2.default.createElement(
          'div',
          null,
          'Uploading...'
        ),
        _react2.default.createElement(
          PositiveMsg,
          null,
          files.map(function (f) {
            return f.name;
          }).join(' and ') + '...'
        ),
        _react2.default.createElement(_loadingSpinner2.default, { size: 20 })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state2 = this.state,
          dragOver = _state2.dragOver,
          files = _state2.files;
      var validFileExt = this.props.validFileExt;

      return _react2.default.createElement(
        StyledFileUpload,
        {
          className: 'file-uploader',
          innerRef: function innerRef(cmp) {
            return _this2.frame = cmp;
          }
        },
        _react2.default.createElement('input', {
          className: 'filter-upload__input',
          type: 'file',
          onChange: this._onChange
        }),
        FileDrop ? _react2.default.createElement(
          FileDrop,
          {
            frame: this.frame,
            targetAlwaysVisible: true,
            onDragOver: function onDragOver() {
              return _this2._toggleDragState(true);
            },
            onDragLeave: function onDragLeave() {
              return _this2._toggleDragState(false);
            },
            onDrop: this._handleFileDrop
          },
          _react2.default.createElement(
            'div',
            { className: 'file-upload__message' },
            CONFIG_UPLOAD_MESSAGE
          ),
          _react2.default.createElement(
            StyledFileDrop,
            { dragOver: dragOver },
            _react2.default.createElement(
              'div',
              { style: { opacity: dragOver ? 0.5 : 1 } },
              _react2.default.createElement(
                StyledDragNDropIcon,
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'file-type-row' },
                  validFileExt.map(function (ext) {
                    return _react2.default.createElement(_icons.FileType, { key: ext, ext: ext, height: '50px', fontSize: '9px' });
                  })
                ),
                _react2.default.createElement(_icons.DragNDrop, { height: '44px' })
              ),
              _react2.default.createElement(
                'div',
                null,
                this._renderMessage()
              )
            ),
            !files.length ? _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                MsgWrapper,
                null,
                MESSAGE
              ),
              _react2.default.createElement(
                'span',
                { className: 'file-upload-or' },
                'or'
              ),
              _react2.default.createElement(
                _uploadButton2.default,
                { onUpload: this._handleFileDrop },
                'browse your files'
              )
            ) : null,
            _react2.default.createElement(
              StyledDisclaimer,
              null,
              DISCLAIMER
            )
          )
        ) : null,
        _react2.default.createElement(
          WarningMsg,
          null,
          (0, _utils.isChrome)() ? CHROME_MSG : ''
        )
      );
    }
  }]);
  return FileUpload;
}(_react.Component), _class.defaultProps = {
  validFileExt: defaultValidFileExt
}, _class.propTypes = {
  onFileUpload: _propTypes2.default.func.isRequired,
  validFileExt: _propTypes2.default.arrayOf(_propTypes2.default.string)
}, _temp2);
exports.default = FileUpload;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkLmpzIl0sIm5hbWVzIjpbIkZpbGVEcm9wIiwiZG9jdW1lbnQiLCJyZXF1aXJlIiwiZGVmYXVsdFZhbGlkRmlsZUV4dCIsIk1FU1NBR0UiLCJDSFJPTUVfTVNHIiwiRElTQ0xBSU1FUiIsIkNPTkZJR19VUExPQURfTUVTU0FHRSIsImZpbGVJY29uQ29sb3IiLCJXYXJuaW5nTXNnIiwic3R5bGVkIiwic3BhbiIsInByb3BzIiwidGhlbWUiLCJlcnJvckNvbG9yIiwiUG9zaXRpdmVNc2ciLCJwcmltYXJ5QnRuQWN0QmdkIiwiU3R5bGVkRmlsZURyb3AiLCJkaXYiLCJzdWJ0ZXh0Q29sb3JMVCIsImxpbmtCdG5Db2xvciIsIk1zZ1dyYXBwZXIiLCJtb2RhbFRpdGxlQ29sb3IiLCJTdHlsZWREcmFnTkRyb3BJY29uIiwiU3R5bGVkRmlsZVVwbG9hZCIsInRleHRDb2xvckxUIiwiU3R5bGVkTWVzc2FnZSIsIlN0eWxlZERpc2NsYWltZXIiLCJleHRlbmQiLCJGaWxlVXBsb2FkIiwic3RhdGUiLCJkcmFnT3ZlciIsImZpbGVzIiwiZXJyb3JGaWxlcyIsIl9pc1ZhbGlkRmlsZVR5cGUiLCJ2YWxpZEZpbGVFeHQiLCJmaWxlRXh0IiwiZmluZCIsImZpbGVuYW1lIiwiZW5kc1dpdGgiLCJleHQiLCJCb29sZWFuIiwiX2hhbmRsZUZpbGVEcm9wIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIm5leHRTdGF0ZSIsImkiLCJsZW5ndGgiLCJmaWxlIiwibmFtZSIsInB1c2giLCJzZXRTdGF0ZSIsIm9uRmlsZVVwbG9hZCIsIl90b2dnbGVEcmFnU3RhdGUiLCJuZXdTdGF0ZSIsImpvaW4iLCJtYXAiLCJmIiwiZnJhbWUiLCJjbXAiLCJfb25DaGFuZ2UiLCJvcGFjaXR5IiwiX3JlbmRlck1lc3NhZ2UiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQ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QUFNZSxNQUFQLEdBQWdCO0FBQUE7QUFBQTtBQUNmO0FBQUMsMEJBQUQ7QUFBQTtBQUFhM0M7QUFBYixlQURlO0FBRWY7QUFBQTtBQUFBLGtCQUFNLFdBQVUsZ0JBQWhCO0FBQUE7QUFBQSxlQUZlO0FBR2Y7QUFBQyxzQ0FBRDtBQUFBLGtCQUFjLFVBQVUsS0FBS3NDLGVBQTdCO0FBQUE7QUFBQTtBQUhlLGFBQWhCLEdBTVEsSUFsQlg7QUFtQkU7QUFBQyw4QkFBRDtBQUFBO0FBQW1CcEM7QUFBbkI7QUFuQkY7QUFSRixTQURELEdBK0JHLElBeENOO0FBMENFO0FBQUMsb0JBQUQ7QUFBQTtBQUFhLG1DQUFhRCxVQUFiLEdBQTBCO0FBQXZDO0FBMUNGLE9BREY7QUE4Q0Q7OztFQTdIcUMwRCxnQixVQUMvQkMsWSxHQUFlO0FBQ3BCN0IsZ0JBQWNoQztBQURNLEMsU0FJZjhELFMsR0FBWTtBQUNqQmIsZ0JBQWNjLG9CQUFVQyxJQUFWLENBQWVDLFVBRFo7QUFFakJqQyxnQkFBYytCLG9CQUFVRyxPQUFWLENBQWtCSCxvQkFBVUksTUFBNUI7QUFGRyxDO2tCQUxBekMsVSIsImZpbGUiOiJmaWxlLXVwbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvcHlyaWdodCAoYykgMjAxOCBVYmVyIFRlY2hub2xvZ2llcywgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgVXBsb2FkQnV0dG9uIGZyb20gJy4vdXBsb2FkLWJ1dHRvbic7XG5pbXBvcnQge0ZpbGVUeXBlLCBEcmFnTkRyb3B9IGZyb20gJ2NvbXBvbmVudHMvY29tbW9uL2ljb25zJztcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tICdjb21wb25lbnRzL2NvbW1vbi9sb2FkaW5nLXNwaW5uZXInO1xuaW1wb3J0IHtpc0Nocm9tZX0gZnJvbSAndXRpbHMvdXRpbHMnO1xuXG5jb25zdCBGaWxlRHJvcCA9XG4gIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyByZXF1aXJlKCdyZWFjdC1maWxlLWRyb3AnKSA6IG51bGw7XG5cbi8vIEZpbGUudHlwZSBpcyBub3QgcmVsaWFibGUgaWYgdGhlIE9TIGRvZXMgbm90IGhhdmUgYVxuLy8gcmVnaXN0ZXJlZCBtYXBwaW5nIGZvciB0aGUgZXh0ZW5zaW9uLlxuLy8gTk9URTogU2hhcGVmaWxlcyBtdXN0IGJlIGluIGEgY29tcHJlc3NlZCBmb3JtYXQgc2luY2Vcbi8vIGl0IHJlcXVpcmVzIG11bHRpcGxlIGZpbGVzIHRvIGJlIHByZXNlbnQuXG5jb25zdCBkZWZhdWx0VmFsaWRGaWxlRXh0ID0gW1xuICAnY3N2JyxcbiAgLy8gJ3Rhci5neicsXG4gIC8vICd0Z3onLFxuICAvLyAnemlwJyxcbiAgLy8gJ2dweCcsXG4gIC8vICdrbWwnLFxuICAnanNvbicsXG4gICdnZW9qc29uJ1xuXTtcblxuY29uc3QgTUVTU0FHRSA9ICcgRHJhZyAmIERyb3AgWW91ciBGaWxlKHMpIEhlcmUnO1xuY29uc3QgQ0hST01FX01TRyA9XG4gICcqQ2hyb21lIHVzZXI6IExpbWl0IGZpbGUgc2l6ZSB0byAyNTBtYiwgaWYgbmVlZCB0byB1cGxvYWQgbGFyZ2VyIGZpbGUsIHRyeSBTYWZhcmknO1xuY29uc3QgRElTQ0xBSU1FUiA9ICcqS2VwbGVyLmdsIGlzIGEgY2xpZW50LXNpZGUgYXBwbGljYXRpb24gd2l0aCBubyBzZXJ2ZXIgYmFja2VuZC4gRGF0YSBsaXZlcyBvbmx5IG9uIHlvdXIgbWFjaGluZS9icm93c2VyLiAnICtcbiAgJ05vIGluZm9ybWF0aW9uIG9yIG1hcCBkYXRhIGlzIHNlbnQgdG8gYW55IHNlcnZlci4nO1xuY29uc3QgQ09ORklHX1VQTE9BRF9NRVNTQUdFID0gJ1VwbG9hZCBkYXRhIGZpbGVzIG9yIHVwbG9hZCBhIHNhdmVkIG1hcCB2aWEgcHJldmlvdXNseSBleHBvcnRlZCBzaW5nbGUgSnNvbiBvZiBib3RoIGNvbmZpZyBhbmQgZGF0YSc7XG5cbmNvbnN0IGZpbGVJY29uQ29sb3IgPSAnI0QzRDhFMCc7XG5cbmNvbnN0IFdhcm5pbmdNc2cgPSBzdHlsZWQuc3BhbmBcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuZXJyb3JDb2xvcn07XG5gO1xuXG5jb25zdCBQb3NpdGl2ZU1zZyA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wcmltYXJ5QnRuQWN0QmdkfTtcbmA7XG5cbmNvbnN0IFN0eWxlZEZpbGVEcm9wID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuc3VidGV4dENvbG9yTFR9O1xuICBoZWlnaHQ6IDQxNHB4O1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcblxuICAuZmlsZS11cGxvYWQtb3Ige1xuICAgIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmxpbmtCdG5Db2xvcn07XG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xuICB9XG5gO1xuXG5jb25zdCBNc2dXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUubW9kYWxUaXRsZUNvbG9yfTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBoZWlnaHQ6IDM2cHg7XG5gO1xuXG5jb25zdCBTdHlsZWREcmFnTkRyb3BJY29uID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6ICR7ZmlsZUljb25Db2xvcn07XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG5cbiAgLmZpbGUtdHlwZS1yb3cge1xuICAgIG1hcmdpbi1ib3R0b206IDI2cHg7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEZpbGVVcGxvYWQgPSBzdHlsZWQuZGl2YFxuICAuZmlsdGVyLXVwbG9hZF9faW5wdXQge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLmZpbGUtZHJvcCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLmZpbGUtdXBsb2FkX19tZXNzYWdlIHtcbiAgICBjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS50ZXh0Q29sb3JMVH07XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZE1lc3NhZ2UgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IFN0eWxlZERpc2NsYWltZXIgPSBTdHlsZWRNZXNzYWdlLmV4dGVuZGBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVVcGxvYWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHZhbGlkRmlsZUV4dDogZGVmYXVsdFZhbGlkRmlsZUV4dFxuICB9O1xuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgb25GaWxlVXBsb2FkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHZhbGlkRmlsZUV4dDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZylcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBkcmFnT3ZlcjogZmFsc2UsXG4gICAgZmlsZXM6IFtdLFxuICAgIGVycm9yRmlsZXM6IFtdXG4gIH07XG5cbiAgX2lzVmFsaWRGaWxlVHlwZSA9IGZpbGVuYW1lID0+IHtcbiAgICBjb25zdCB7dmFsaWRGaWxlRXh0fSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZmlsZUV4dCA9IHZhbGlkRmlsZUV4dC5maW5kKGV4dCA9PiBmaWxlbmFtZS5lbmRzV2l0aChleHQpKTtcblxuICAgIHJldHVybiBCb29sZWFuKGZpbGVFeHQpO1xuICB9O1xuXG4gIF9oYW5kbGVGaWxlRHJvcCA9IChmaWxlcywgZSkgPT4ge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtmaWxlczogW10sIGVycm9yRmlsZXM6IFtdLCBkcmFnT3ZlcjogZmFsc2V9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tpXTtcblxuICAgICAgaWYgKGZpbGUgJiYgdGhpcy5faXNWYWxpZEZpbGVUeXBlKGZpbGUubmFtZSkpIHtcbiAgICAgICAgbmV4dFN0YXRlLmZpbGVzLnB1c2goZmlsZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0U3RhdGUuZXJyb3JGaWxlcy5wdXNoKGZpbGUubmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShcbiAgICAgIG5leHRTdGF0ZSxcbiAgICAgICgpID0+XG4gICAgICAgIG5leHRTdGF0ZS5maWxlcy5sZW5ndGggPyB0aGlzLnByb3BzLm9uRmlsZVVwbG9hZChuZXh0U3RhdGUuZmlsZXMpIDogbnVsbFxuICAgICk7XG4gIH07XG5cbiAgX3RvZ2dsZURyYWdTdGF0ZSA9IG5ld1N0YXRlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtkcmFnT3ZlcjogbmV3U3RhdGV9KTtcbiAgfTtcblxuICBfcmVuZGVyTWVzc2FnZSgpIHtcbiAgICBjb25zdCB7ZXJyb3JGaWxlcywgZmlsZXN9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChlcnJvckZpbGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFdhcm5pbmdNc2c+XG4gICAgICAgICAge2BGaWxlICR7ZXJyb3JGaWxlcy5qb2luKCcsICcpfSBpcyBub3Qgc3VwcG9ydGVkLmB9XG4gICAgICAgIDwvV2FybmluZ01zZz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFmaWxlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8U3R5bGVkTWVzc2FnZSBjbGFzc05hbWU9XCJmaWxlLXVwbG9hZGVyX19tZXNzYWdlXCI+XG4gICAgICAgIDxkaXY+VXBsb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgIDxQb3NpdGl2ZU1zZz5cbiAgICAgICAgICB7YCR7ZmlsZXMubWFwKGYgPT4gZi5uYW1lKS5qb2luKCcgYW5kICcpfS4uLmB9XG4gICAgICAgIDwvUG9zaXRpdmVNc2c+XG4gICAgICAgIDxMb2FkaW5nU3Bpbm5lciBzaXplPXsyMH0gLz5cbiAgICAgIDwvU3R5bGVkTWVzc2FnZT5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtkcmFnT3ZlciwgZmlsZXN9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7dmFsaWRGaWxlRXh0fSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdHlsZWRGaWxlVXBsb2FkXG4gICAgICAgIGNsYXNzTmFtZT1cImZpbGUtdXBsb2FkZXJcIlxuICAgICAgICBpbm5lclJlZj17Y21wID0+ICh0aGlzLmZyYW1lID0gY21wKX1cbiAgICAgID5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmlsdGVyLXVwbG9hZF9faW5wdXRcIlxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICAgIHtGaWxlRHJvcCA/IChcbiAgICAgICAgICA8RmlsZURyb3BcbiAgICAgICAgICAgIGZyYW1lPXt0aGlzLmZyYW1lfVxuICAgICAgICAgICAgdGFyZ2V0QWx3YXlzVmlzaWJsZVxuICAgICAgICAgICAgb25EcmFnT3Zlcj17KCkgPT4gdGhpcy5fdG9nZ2xlRHJhZ1N0YXRlKHRydWUpfVxuICAgICAgICAgICAgb25EcmFnTGVhdmU9eygpID0+IHRoaXMuX3RvZ2dsZURyYWdTdGF0ZShmYWxzZSl9XG4gICAgICAgICAgICBvbkRyb3A9e3RoaXMuX2hhbmRsZUZpbGVEcm9wfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS11cGxvYWRfX21lc3NhZ2VcIj57Q09ORklHX1VQTE9BRF9NRVNTQUdFfTwvZGl2PlxuICAgICAgICAgICAgPFN0eWxlZEZpbGVEcm9wIGRyYWdPdmVyPXtkcmFnT3Zlcn0+XG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tvcGFjaXR5OiBkcmFnT3ZlciA/IDAuNSA6IDF9fT5cbiAgICAgICAgICAgICAgICA8U3R5bGVkRHJhZ05Ecm9wSWNvbj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS10eXBlLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICB7dmFsaWRGaWxlRXh0Lm1hcChleHQgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxGaWxlVHlwZSBrZXk9e2V4dH0gZXh0PXtleHR9IGhlaWdodD1cIjUwcHhcIiBmb250U2l6ZT1cIjlweFwiLz5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxEcmFnTkRyb3AgaGVpZ2h0PVwiNDRweFwiIC8+XG4gICAgICAgICAgICAgICAgPC9TdHlsZWREcmFnTkRyb3BJY29uPlxuICAgICAgICAgICAgICAgIDxkaXY+e3RoaXMuX3JlbmRlck1lc3NhZ2UoKX08L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHshZmlsZXMubGVuZ3RoID8gPGRpdj5cbiAgICAgICAgICAgICAgICA8TXNnV3JhcHBlcj57TUVTU0FHRX08L01zZ1dyYXBwZXI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsZS11cGxvYWQtb3JcIj5vcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8VXBsb2FkQnV0dG9uIG9uVXBsb2FkPXt0aGlzLl9oYW5kbGVGaWxlRHJvcH0+XG4gICAgICAgICAgICAgICAgICBicm93c2UgeW91ciBmaWxlc1xuICAgICAgICAgICAgICAgIDwvVXBsb2FkQnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj4gOiBudWxsfVxuICAgICAgICAgICAgICA8U3R5bGVkRGlzY2xhaW1lcj57RElTQ0xBSU1FUn08L1N0eWxlZERpc2NsYWltZXI+XG4gICAgICAgICAgICA8L1N0eWxlZEZpbGVEcm9wPlxuICAgICAgICAgIDwvRmlsZURyb3A+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxXYXJuaW5nTXNnPntpc0Nocm9tZSgpID8gQ0hST01FX01TRyA6ICcnfTwvV2FybmluZ01zZz5cbiAgICAgIDwvU3R5bGVkRmlsZVVwbG9hZD5cbiAgICApO1xuICB9XG59XG4iXX0=