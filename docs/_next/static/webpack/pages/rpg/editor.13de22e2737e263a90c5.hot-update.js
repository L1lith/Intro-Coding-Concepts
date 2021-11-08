webpackHotUpdate_N_E("pages/rpg/editor",{

/***/ "./components/CodeSandbox.js":
/*!***********************************!*\
  !*** ./components/CodeSandbox.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _AceEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AceEditor */ "./components/AceEditor.js");
/* harmony import */ var _CodeSandbox_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CodeSandbox.scss */ "./components/CodeSandbox.scss");
/* harmony import */ var _CodeSandbox_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_CodeSandbox_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! util */ "./node_modules/node-libs-browser/node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! auto-bind */ "./node_modules/auto-bind/index.js");
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(auto_bind__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "C:\\Users\\05L1\\Projects\\Intro-Coding-Concepts\\components\\CodeSandbox.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }







var CodeSandbox = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CodeSandbox, _Component);

  var _super = _createSuper(CodeSandbox);

  function CodeSandbox(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CodeSandbox);

    _this = _super.call(this, props);
    auto_bind__WEBPACK_IMPORTED_MODULE_10___default()(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.state = {
      value: _this.props.value || '',
      output: null
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CodeSandbox, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: 'sandbox' + (this.props.hasOwnProperty('className') ? ' ' + this.props.className : ''),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 7
        }
      }, typeof this.state.shareURL == 'string' ? __jsx("span", {
        className: "share-popup",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }
      }, "Your Sharing URL:", __jsx("a", {
        href: this.state.shareURL,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }
      }, this.state.shareURL)) : null, __jsx("h2", {
        className: "main-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 9
        }
      }, this.props.disableAutoRun === true ? __jsx("span", {
        title: "Run",
        className: "icon play",
        onClick: this.run,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }
      }, "\u25B6") : null, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }
      }, "JavaScript ", this.props.consoleMode === true ? 'Terminal' : 'Evaluator'), this.props.readOnly === true ? ' (Read Only)' : null, this.props.noReset !== true ? __jsx("span", {
        title: "Reset",
        className: "icon reset",
        onClick: this.reset,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }
      }, "\u274C") : null, this.props.sharing == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }
      }, __jsx("span", {
        title: "Share",
        className: "icon share",
        onClick: this.share,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 15
        }
      }, "\u2601\uFE0F")) : null), __jsx("div", {
        className: "titles",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }
      }, __jsx("h2", {
        className: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }, "Code Input"), __jsx("h2", {
        className: "title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }, this.props.consoleMode === true ? 'Console' : 'Output')), __jsx("div", {
        className: "inner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }
      }, __jsx(_AceEditor__WEBPACK_IMPORTED_MODULE_7__["default"], {
        width: "50%",
        height: "100%",
        mode: "javascript",
        theme: "ambiance",
        readOnly: this.props.readOnly === true,
        value: this.state.value,
        onChange: function onChange() {
          _this2.handleChange.apply(_this2, arguments);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }
      }), this.getOutput()));
    }
  }, {
    key: "getOutput",
    value: function getOutput() {
      var skipAutoRun = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var output = null;

      if (skipAutoRun !== true && this.props.disableAutoRun === true) {
        output = this.state.output !== null ? this.state.output : __jsx("span", {
          className: "output empty",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 11
          }
        }, "Run the program to see your output");
      } else if (this.state.value.trim().length > 0) {
        output = this.props.consoleMode === true ? this.getConsoleOutput(this.state.value) : this.getEvalOutput(this.state.value);
      } else {
        output = __jsx("span", {
          className: "output empty",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 16
          }
        }, "Type something to see the evaluated output");
      }

      return output;
    }
  }, {
    key: "getConsoleOutput",
    value: function getConsoleOutput(source) {
      var oldLog = console.log;
      var logOutput = [];

      console.log = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (args.length > 1) {
          logOutput.push(args);
        } else {
          logOutput.push(args[0]);
        }
      };

      try {
        eval(source);
        console.log = oldLog;
        if (logOutput.length < 1) return __jsx("span", {
          className: "output empty",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 11
          }
        }, "Try logging something to the console to see some output");
        return __jsx(_AceEditor__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: "output valid",
          width: "50%",
          height: "100%",
          mode: "javascript",
          theme: "ambiance",
          readOnly: true,
          value: logOutput.map(function (value) {
            return Object(util__WEBPACK_IMPORTED_MODULE_9__["inspect"])(value);
          }).join(';\n'),
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 9
          }
        });
      } catch (err) {
        console.log = oldLog;
        return __jsx("span", {
          className: "output error",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119,
            columnNumber: 14
          }
        }, Object(util__WEBPACK_IMPORTED_MODULE_9__["inspect"])(err));
      }
    }
  }, {
    key: "getEvalOutput",
    value: function getEvalOutput(source) {
      try {
        var output = eval(source);
        var outputSource = Object(util__WEBPACK_IMPORTED_MODULE_9__["inspect"])(output); //console.log('x', outputSource)

        return __jsx(_AceEditor__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: "output valid",
          width: "50%",
          height: "100%",
          mode: "javascript",
          theme: "ambiance",
          readOnly: true,
          value: outputSource,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 9
          }
        });
      } catch (err) {
        return __jsx("span", {
          className: "output error",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 14
          }
        }, Object(util__WEBPACK_IMPORTED_MODULE_9__["inspect"])(err));
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(output) {
      this.setState({
        value: output
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        value: this.props.value || ''
      });
    }
  }, {
    key: "run",
    value: function run() {
      this.setState({
        output: this.getOutput(true)
      });
    }
  }, {
    key: "share",
    value: function share() {
      this.setState({
        shareURL: 'google.com'
      });
    }
  }, {
    key: "getShareURL",
    value: function getShareURL() {
      return 'google.com';
    }
  }]);

  return CodeSandbox;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CodeSandbox);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlU2FuZGJveC5qcyJdLCJuYW1lcyI6WyJDb2RlU2FuZGJveCIsInByb3BzIiwiYXV0b0JpbmQiLCJzdGF0ZSIsInZhbHVlIiwib3V0cHV0IiwiaGFzT3duUHJvcGVydHkiLCJjbGFzc05hbWUiLCJzaGFyZVVSTCIsImRpc2FibGVBdXRvUnVuIiwicnVuIiwiY29uc29sZU1vZGUiLCJyZWFkT25seSIsIm5vUmVzZXQiLCJyZXNldCIsInNoYXJpbmciLCJzaGFyZSIsImhhbmRsZUNoYW5nZSIsImdldE91dHB1dCIsInNraXBBdXRvUnVuIiwidHJpbSIsImxlbmd0aCIsImdldENvbnNvbGVPdXRwdXQiLCJnZXRFdmFsT3V0cHV0Iiwic291cmNlIiwib2xkTG9nIiwiY29uc29sZSIsImxvZyIsImxvZ091dHB1dCIsImFyZ3MiLCJwdXNoIiwiZXZhbCIsIm1hcCIsImluc3BlY3QiLCJqb2luIiwiZXJyIiwib3V0cHV0U291cmNlIiwic2V0U3RhdGUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxXOzs7OztBQUNKLHVCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOO0FBQ0FDLHFEQUFRLENBQUMsd0dBQVQ7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBRUMsV0FBSyxFQUFFLE1BQUtILEtBQUwsQ0FBV0csS0FBWCxJQUFvQixFQUE3QjtBQUFpQ0MsWUFBTSxFQUFFO0FBQXpDLEtBQWI7QUFIaUI7QUFJbEI7Ozs7V0FDRCxrQkFBUztBQUFBOztBQUNQLGFBQ0U7QUFDRSxpQkFBUyxFQUNQLGFBQWEsS0FBS0osS0FBTCxDQUFXSyxjQUFYLENBQTBCLFdBQTFCLElBQXlDLE1BQU0sS0FBS0wsS0FBTCxDQUFXTSxTQUExRCxHQUFzRSxFQUFuRixDQUZK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WUFKUDtBQUtFLGVBQUssRUFBQyxVQUxSO0FBTUUsa0JBQVEsTUFOVjtBQU9FLGVBQUssRUFBRStCLFlBUFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBV0QsT0FmRCxDQWVFLE9BQU9ELEdBQVAsRUFBWTtBQUNaLGVBQU87QUFBTSxtQkFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBZ0NGLG9EQUFPLENBQUNFLEdBQUQsQ0FBdkMsQ0FBUDtBQUNEO0FBQ0Y7OztXQUNELHNCQUFhOUIsTUFBYixFQUFxQjtBQUNuQixXQUFLZ0MsUUFBTCxDQUFjO0FBQUVqQyxhQUFLLEVBQUVDO0FBQVQsT0FBZDtBQUNEOzs7V0FDRCxpQkFBUTtBQUNOLFdBQUtnQyxRQUFMLENBQWM7QUFBRWpDLGFBQUssRUFBRSxLQUFLSCxLQUFMLENBQVdHLEtBQVgsSUFBb0I7QUFBN0IsT0FBZDtBQUNEOzs7V0FDRCxlQUFNO0FBQ0osV0FBS2lDLFFBQUwsQ0FBYztBQUFFaEMsY0FBTSxFQUFFLEtBQUthLFNBQUwsQ0FBZSxJQUFmO0FBQVYsT0FBZDtBQUNEOzs7V0FDRCxpQkFBUTtBQUNOLFdBQUttQixRQUFMLENBQWM7QUFBRTdCLGdCQUFRLEVBQUU7QUFBWixPQUFkO0FBQ0Q7OztXQUNELHVCQUFjO0FBQ1osYUFBTyxZQUFQO0FBQ0Q7Ozs7RUFySnVCOEIsK0M7O0FBd0pYdEMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcnBnL2VkaXRvci4xM2RlMjJlMjczN2UyNjNhOTBjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWNlRWRpdG9yIGZyb20gJy4vQWNlRWRpdG9yJ1xyXG5pbXBvcnQgJy4vQ29kZVNhbmRib3guc2NzcydcclxuaW1wb3J0IHsgaW5zcGVjdCB9IGZyb20gJ3V0aWwnXHJcbmltcG9ydCBhdXRvQmluZCBmcm9tICdhdXRvLWJpbmQnXHJcblxyXG5jbGFzcyBDb2RlU2FuZGJveCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgYXV0b0JpbmQodGhpcylcclxuICAgIHRoaXMuc3RhdGUgPSB7IHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlIHx8ICcnLCBvdXRwdXQ6IG51bGwgfVxyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICdzYW5kYm94JyArICh0aGlzLnByb3BzLmhhc093blByb3BlcnR5KCdjbGFzc05hbWUnKSA/ICcgJyArIHRoaXMucHJvcHMuY2xhc3NOYW1lIDogJycpXHJcbiAgICAgICAgfT5cclxuICAgICAgICB7dHlwZW9mIHRoaXMuc3RhdGUuc2hhcmVVUkwgPT0gJ3N0cmluZycgPyAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaGFyZS1wb3B1cFwiPlxyXG4gICAgICAgICAgICBZb3VyIFNoYXJpbmcgVVJMOlxyXG4gICAgICAgICAgICA8YSBocmVmPXt0aGlzLnN0YXRlLnNoYXJlVVJMfT57dGhpcy5zdGF0ZS5zaGFyZVVSTH08L2E+XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmRpc2FibGVBdXRvUnVuID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgICA8c3BhbiB0aXRsZT1cIlJ1blwiIGNsYXNzTmFtZT1cImljb24gcGxheVwiIG9uQ2xpY2s9e3RoaXMucnVufT5cclxuICAgICAgICAgICAgICDilrZcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8aDI+SmF2YVNjcmlwdCB7dGhpcy5wcm9wcy5jb25zb2xlTW9kZSA9PT0gdHJ1ZSA/ICdUZXJtaW5hbCcgOiAnRXZhbHVhdG9yJ308L2gyPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMucmVhZE9ubHkgPT09IHRydWUgPyAnIChSZWFkIE9ubHkpJyA6IG51bGx9XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5ub1Jlc2V0ICE9PSB0cnVlID8gKFxyXG4gICAgICAgICAgICA8c3BhbiB0aXRsZT1cIlJlc2V0XCIgY2xhc3NOYW1lPVwiaWNvbiByZXNldFwiIG9uQ2xpY2s9e3RoaXMucmVzZXR9PlxyXG4gICAgICAgICAgICAgIOKdjFxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgIHt0aGlzLnByb3BzLnNoYXJpbmcgPT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiU2hhcmVcIiBjbGFzc05hbWU9XCJpY29uIHNoYXJlXCIgb25DbGljaz17dGhpcy5zaGFyZX0+XHJcbiAgICAgICAgICAgICAgICDimIHvuI9cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlc1wiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+Q29kZSBJbnB1dDwvaDI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57dGhpcy5wcm9wcy5jb25zb2xlTW9kZSA9PT0gdHJ1ZSA/ICdDb25zb2xlJyA6ICdPdXRwdXQnfTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgICAgPEFjZUVkaXRvclxyXG4gICAgICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbiAgICAgICAgICAgIHRoZW1lPVwiYW1iaWFuY2VcIlxyXG4gICAgICAgICAgICByZWFkT25seT17dGhpcy5wcm9wcy5yZWFkT25seSA9PT0gdHJ1ZX1cclxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoLi4uYXJncykgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKC4uLmFyZ3MpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge3RoaXMuZ2V0T3V0cHV0KCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICBnZXRPdXRwdXQoc2tpcEF1dG9SdW4gPSBmYWxzZSkge1xyXG4gICAgbGV0IG91dHB1dCA9IG51bGxcclxuICAgIGlmIChza2lwQXV0b1J1biAhPT0gdHJ1ZSAmJiB0aGlzLnByb3BzLmRpc2FibGVBdXRvUnVuID09PSB0cnVlKSB7XHJcbiAgICAgIG91dHB1dCA9XHJcbiAgICAgICAgdGhpcy5zdGF0ZS5vdXRwdXQgIT09IG51bGwgPyAoXHJcbiAgICAgICAgICB0aGlzLnN0YXRlLm91dHB1dFxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZW1wdHlcIj5SdW4gdGhlIHByb2dyYW0gdG8gc2VlIHlvdXIgb3V0cHV0PC9zcGFuPlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS52YWx1ZS50cmltKCkubGVuZ3RoID4gMCkge1xyXG4gICAgICBvdXRwdXQgPVxyXG4gICAgICAgIHRoaXMucHJvcHMuY29uc29sZU1vZGUgPT09IHRydWVcclxuICAgICAgICAgID8gdGhpcy5nZXRDb25zb2xlT3V0cHV0KHRoaXMuc3RhdGUudmFsdWUpXHJcbiAgICAgICAgICA6IHRoaXMuZ2V0RXZhbE91dHB1dCh0aGlzLnN0YXRlLnZhbHVlKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3V0cHV0ID0gPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVtcHR5XCI+VHlwZSBzb21ldGhpbmcgdG8gc2VlIHRoZSBldmFsdWF0ZWQgb3V0cHV0PC9zcGFuPlxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG91dHB1dFxyXG4gIH1cclxuICBnZXRDb25zb2xlT3V0cHV0KHNvdXJjZSkge1xyXG4gICAgY29uc3Qgb2xkTG9nID0gY29uc29sZS5sb2dcclxuICAgIGNvbnN0IGxvZ091dHB1dCA9IFtdXHJcbiAgICBjb25zb2xlLmxvZyA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBsb2dPdXRwdXQucHVzaChhcmdzKVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxvZ091dHB1dC5wdXNoKGFyZ3NbMF0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGV2YWwoc291cmNlKVxyXG4gICAgICBjb25zb2xlLmxvZyA9IG9sZExvZ1xyXG4gICAgICBpZiAobG9nT3V0cHV0Lmxlbmd0aCA8IDEpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlxyXG4gICAgICAgICAgICBUcnkgbG9nZ2luZyBzb21ldGhpbmcgdG8gdGhlIGNvbnNvbGUgdG8gc2VlIHNvbWUgb3V0cHV0XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBY2VFZGl0b3JcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm91dHB1dCB2YWxpZFwiXHJcbiAgICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbiAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICAgIG1vZGU9XCJqYXZhc2NyaXB0XCJcclxuICAgICAgICAgIHRoZW1lPVwiYW1iaWFuY2VcIlxyXG4gICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgIHZhbHVlPXtsb2dPdXRwdXQubWFwKHZhbHVlID0+IGluc3BlY3QodmFsdWUpKS5qb2luKCc7XFxuJyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgKVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nID0gb2xkTG9nXHJcbiAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZXJyb3JcIj57aW5zcGVjdChlcnIpfTwvc3Bhbj5cclxuICAgIH1cclxuICB9XHJcbiAgZ2V0RXZhbE91dHB1dChzb3VyY2UpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IG91dHB1dCA9IGV2YWwoc291cmNlKVxyXG4gICAgICBsZXQgb3V0cHV0U291cmNlID0gaW5zcGVjdChvdXRwdXQpXHJcbiAgICAgIC8vY29uc29sZS5sb2coJ3gnLCBvdXRwdXRTb3VyY2UpXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFjZUVkaXRvclxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0IHZhbGlkXCJcclxuICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4gICAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbiAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgdmFsdWU9e291dHB1dFNvdXJjZX1cclxuICAgICAgICAvPlxyXG4gICAgICApXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlcnJvclwiPntpbnNwZWN0KGVycil9PC9zcGFuPlxyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVDaGFuZ2Uob3V0cHV0KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IG91dHB1dCB9KVxyXG4gIH1cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZSB8fCAnJyB9KVxyXG4gIH1cclxuICBydW4oKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3V0cHV0OiB0aGlzLmdldE91dHB1dCh0cnVlKSB9KVxyXG4gIH1cclxuICBzaGFyZSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzaGFyZVVSTDogJ2dvb2dsZS5jb20nIH0pXHJcbiAgfVxyXG4gIGdldFNoYXJlVVJMKCkge1xyXG4gICAgcmV0dXJuICdnb29nbGUuY29tJ1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29kZVNhbmRib3hcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==