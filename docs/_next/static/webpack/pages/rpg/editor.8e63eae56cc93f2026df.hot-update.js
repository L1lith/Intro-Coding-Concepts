webpackHotUpdate_N_E("pages/rpg/editor",{

/***/ "./components/CodeSandbox.js":
/*!***********************************!*\
  !*** ./components/CodeSandbox.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AceEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AceEditor */ "./components/AceEditor.js");
/* harmony import */ var _CodeSandbox_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CodeSandbox.scss */ "./components/CodeSandbox.scss");
/* harmony import */ var _CodeSandbox_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CodeSandbox_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/node-libs-browser/node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! auto-bind */ "./node_modules/auto-bind/index.js");
/* harmony import */ var auto_bind__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(auto_bind__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\05L1\\Projects\\Intro-Coding-Concepts\\components\\CodeSandbox.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





 // class CodeSandbox extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     const value = this.getValue()
//     return (
//       <div
//         className={
//           'sandbox' + (this.props.hasOwnProperty('className') ? ' ' + this.props.className : '')
//         }>
//         {typeof this.state.shareURL == 'string' ? (
//           <span className="share-popup">
//             Your Sharing URL:
//             <a className="url" href={this.state.shareURL}>
//               Right Click and Copy This Link
//             </a>
//             <span className="icon close" onClick={this.closeSharing}>
//               ❌
//             </span>
//           </span>
//         ) : null}
//         <h2 className="main-title">
//           {this.props.disableAutoRun === true ? (
//             <span title="Run" className="icon play" onClick={this.run}>
//               ▶
//             </span>
//           ) : null}
//           <h2>JavaScript {this.props.consoleMode === true ? 'Terminal' : 'Evaluator'}</h2>
//           {this.props.readOnly === true ? ' (Read Only)' : null}
//           {this.props.noReset !== true ? (
//             <span title="Reset" className="icon reset" onClick={this.reset}>
//               ❌
//             </span>
//           ) : null}
//           {this.props.sharing == true ? (
//             <Fragment>
//               <span title="Share" className="icon share" onClick={this.share}>
//                 ☁️
//               </span>
//             </Fragment>
//           ) : null}
//         </h2>
//         <div className="titles">
//           <h2 className="title">Code Input</h2>
//           <h2 className="title">{this.props.consoleMode === true ? 'Console' : 'Output'}</h2>
//         </div>
//         <div className="inner">
//           <AceEditor
//             width="50%"
//             height="100%"
//             mode="javascript"
//             theme="ambiance"
//             readOnly={this.props.readOnly === true}
//             value={value}
//             onChange={(...args) => {
//               this.handleChange(...args)
//             }}
//           />
//           {this.getOutput()}
//         </div>
//       </div>
//     )
//   }
//   getOutput(skipAutoRun = false) {
//     let output = null
//     if (skipAutoRun !== true && this.props.disableAutoRun === true) {
//       output =
//         this.state.output !== null ? (
//           this.state.output
//         ) : (
//           <span className="output empty">Run the program to see your output</span>
//         )
//     } else if (this.state.value.trim().length > 0) {
//       output =
//         this.props.consoleMode === true
//           ? this.getConsoleOutput(this.state.value)
//           : this.getEvalOutput(this.state.value)
//     } else {
//       output = <span className="output empty">Type something to see the evaluated output</span>
//     }
//     return output
//   }
//   getValue() {
//     let value = ''
//     if (this.state.hasOwnProperty('value')) {
//       value = this.state.value
//     } else if (typeof this.props.codeQueryParam == 'string') {
//       const router = useRouter()
//       if (router.query.hasOwnProperty(this.props.codeQueryParam)) {
//         value = router.query[this.props.codeQueryParam]
//       } else {
//         value = this.props.value || ''
//       }
//     } else {
//       value = this.props.value || ''
//     }
//     return value
//   }
//   getConsoleOutput(source) {
//     const oldLog = console.log
//     const logOutput = []
//     console.log = (...args) => {
//       if (args.length > 1) {
//         logOutput.push(args)
//       } else {
//         logOutput.push(args[0])
//       }
//     }
//     try {
//       eval(source)
//       console.log = oldLog
//       if (logOutput.length < 1)
//         return (
//           <span className="output empty">
//             Try logging something to the console to see some output
//           </span>
//         )
//       return (
//         <AceEditor
//           className="output valid"
//           width="50%"
//           height="100%"
//           mode="javascript"
//           theme="ambiance"
//           readOnly
//           value={logOutput.map(value => inspect(value)).join(';\n')}
//         />
//       )
//     } catch (err) {
//       console.log = oldLog
//       return <span className="output error">{inspect(err)}</span>
//     }
//   }
//   getEvalOutput(source) {
//     try {
//       const output = eval(source)
//       let outputSource = inspect(output)
//       //console.log('x', outputSource)
//       return (
//         <AceEditor
//           className="output valid"
//           width="50%"
//           height="100%"
//           mode="javascript"
//           theme="ambiance"
//           readOnly
//           value={outputSource}
//         />
//       )
//     } catch (err) {
//       return <span className="output error">{inspect(err)}</span>
//     }
//   }
//   handleChange(output) {
//     this.setState({ value: output })
//   }
//   reset() {
//     this.setState({ value: this.props.value || '' })
//   }
//   run() {
//     this.setState({ output: this.getOutput(true) })
//   }
//   share() {
//     this.setState({
//       shareURL: 'https://yourfirstrpg.com/rpg/editor?code=' + encodeURIComponent(this.state.value)
//     })
//   }
//   closeSharing() {
//     this.setState({ shareURL: null })
//   }
// }

function CodeSandbox(props) {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      shareURL = _useState[0],
      setShareURL = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  console.log('x', router);

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      output = _useState2[0],
      setOutput = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(router.query.hasOwnProperty(props.codeQueryParam) ? router.query[props.codeQueryParam] : props.value || ''),
      code = _useState3[0],
      setCode = _useState3[1];

  return __jsx("div", {
    className: 'sandbox' + (props.hasOwnProperty('className') ? ' ' + props.className : ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 5
    }
  }, typeof shareURL == 'string' ? __jsx("span", {
    className: "share-popup",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 9
    }
  }, "Your Sharing URL:", __jsx("a", {
    className: "url",
    href: shareURL,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 11
    }
  }, "Right Click and Copy This Link"), __jsx("span", {
    className: "icon close",
    onClick: function onClick() {
      setShareURL(null);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 11
    }
  }, "\u274C")) : null, __jsx("h2", {
    className: "main-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 7
    }
  }, props.disableAutoRun === true ? __jsx("span", {
    title: "Run",
    className: "icon play",
    onClick: function onClick() {
      setOutput(getOutput(code, props.consoleMode));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  }, "\u25B6") : null, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 9
    }
  }, "JavaScript ", props.consoleMode === true ? 'Terminal' : 'Evaluator'), props.readOnly === true ? ' (Read Only)' : null, props.noReset !== true ? __jsx("span", {
    title: "Reset",
    className: "icon reset",
    onClick: function onClick() {
      setCode(router.query.hasOwnProperty(props.codeQueryParam) ? router.query[props.codeQueryParam] : defaultCode);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 11
    }
  }, "\u274C") : null, props.sharing == true ? __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 11
    }
  }, __jsx("span", {
    title: "Share",
    className: "icon share",
    onClick: function onClick() {
      setShareURL('/rpg/editor?code=' + encodeURIComponent(_this.state.value));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }, "\u2601\uFE0F")) : null), __jsx("div", {
    className: "titles",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 9
    }
  }, "Code Input"), __jsx("h2", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 9
    }
  }, props.consoleMode === true ? 'Console' : 'Output')), __jsx("div", {
    className: "inner",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 7
    }
  }, __jsx(_AceEditor__WEBPACK_IMPORTED_MODULE_1__["default"], {
    width: "50%",
    height: "100%",
    mode: "javascript",
    theme: "ambiance",
    readOnly: props.readOnly === true,
    value: code,
    onChange: function onChange(newCode) {
      setCode(newCode);

      if (props.disableAutoRun !== true) {
        setOutput(getOutput(newCode, props.consoleMode));
      }
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 9
    }
  }), output === null ? __jsx("span", {
    className: "output empty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 11
    }
  }, "Run the program to see your output") : output));
}

_s(CodeSandbox, "PATVYxlrP+7e8XyR8BOo1E0DrUY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = CodeSandbox;

function getOutput(code, consoleMode) {
  if (code.length > 0) {
    return consoleMode === true ? getConsoleOutput(code) : getEvalOutput(code);
  } else {
    return __jsx("span", {
      className: "output empty",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 12
      }
    }, "Type something to see the evaluated output");
  }
}

function getConsoleOutput(code) {
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
    eval(code);
    console.log = oldLog;
    if (logOutput.length < 1) return __jsx("span", {
      className: "output empty",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 9
      }
    }, "Try logging something to the console to see some output");
    return __jsx(_AceEditor__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "output valid",
      width: "50%",
      height: "100%",
      mode: "javascript",
      theme: "ambiance",
      readOnly: true,
      value: logOutput.map(function (value) {
        return Object(util__WEBPACK_IMPORTED_MODULE_3__["inspect"])(value);
      }).join(';\n'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 7
      }
    });
  } catch (err) {
    console.log = oldLog;
    return __jsx("span", {
      className: "output error",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 12
      }
    }, Object(util__WEBPACK_IMPORTED_MODULE_3__["inspect"])(err));
  }
}

function getEvalOutput(code) {
  try {
    var output = eval(code);
    var outputSource = Object(util__WEBPACK_IMPORTED_MODULE_3__["inspect"])(output);
    return __jsx(_AceEditor__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
        lineNumber: 328,
        columnNumber: 7
      }
    });
  } catch (err) {
    return __jsx("span", {
      className: "output error",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 12
      }
    }, Object(util__WEBPACK_IMPORTED_MODULE_3__["inspect"])(err));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (CodeSandbox);

var _c;

$RefreshReg$(_c, "CodeSandbox");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db2RlU2FuZGJveC5qcyJdLCJuYW1lcyI6WyJDb2RlU2FuZGJveCIsInByb3BzIiwidXNlU3RhdGUiLCJzaGFyZVVSTCIsInNldFNoYXJlVVJMIiwicm91dGVyIiwidXNlUm91dGVyIiwiY29uc29sZSIsImxvZyIsIm91dHB1dCIsInNldE91dHB1dCIsInF1ZXJ5IiwiaGFzT3duUHJvcGVydHkiLCJjb2RlUXVlcnlQYXJhbSIsInZhbHVlIiwiY29kZSIsInNldENvZGUiLCJjbGFzc05hbWUiLCJkaXNhYmxlQXV0b1J1biIsImdldE91dHB1dCIsImNvbnNvbGVNb2RlIiwicmVhZE9ubHkiLCJub1Jlc2V0IiwiZGVmYXVsdENvZGUiLCJzaGFyaW5nIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic3RhdGUiLCJuZXdDb2RlIiwibGVuZ3RoIiwiZ2V0Q29uc29sZU91dHB1dCIsImdldEV2YWxPdXRwdXQiLCJvbGRMb2ciLCJsb2dPdXRwdXQiLCJhcmdzIiwicHVzaCIsImV2YWwiLCJtYXAiLCJpbnNwZWN0Iiwiam9pbiIsImVyciIsIm91dHB1dFNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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V0QsR0FwQkQsQ0FvQkUsT0FBT0MsR0FBUCxFQUFZO0FBQ1poQyxXQUFPLENBQUNDLEdBQVIsR0FBY3VCLE1BQWQ7QUFDQSxXQUFPO0FBQU0sZUFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0NNLG9EQUFPLENBQUNFLEdBQUQsQ0FBdkMsQ0FBUDtBQUNEO0FBQ0Y7O0FBRUQsU0FBU1QsYUFBVCxDQUF1QmYsSUFBdkIsRUFBNkI7QUFDM0IsTUFBSTtBQUNGLFFBQU1OLE1BQU0sR0FBRzBCLElBQUksQ0FBQ3BCLElBQUQsQ0FBbkI7QUFDQSxRQUFJeUIsWUFBWSxHQUFHSCxvREFBTyxDQUFDNUIsTUFBRCxDQUExQjtBQUNBLFdBQ0UsTUFBQyxrREFBRDtBQUNFLGVBQVMsRUFBQyxjQURaO0FBRUUsV0FBSyxFQUFDLEtBRlI7QUFHRSxZQUFNLEVBQUMsTUFIVDtBQUlFLFVBQUksRUFBQyxZQUpQO0FBS0UsV0FBSyxFQUFDLFVBTFI7QUFNRSxjQUFRLE1BTlY7QUFPRSxXQUFLLEVBQUUrQixZQVBUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQVdELEdBZEQsQ0FjRSxPQUFPRCxHQUFQLEVBQVk7QUFDWixXQUFPO0FBQU0sZUFBUyxFQUFDLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBZ0NGLG9EQUFPLENBQUNFLEdBQUQsQ0FBdkMsQ0FBUDtBQUNEO0FBQ0Y7O0FBRWN2QywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ycGcvZWRpdG9yLjhlNjNlYWU1NmNjOTNmMjAyNmRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWNlRWRpdG9yIGZyb20gJy4vQWNlRWRpdG9yJ1xyXG5pbXBvcnQgJy4vQ29kZVNhbmRib3guc2NzcydcclxuaW1wb3J0IHsgaW5zcGVjdCB9IGZyb20gJ3V0aWwnXHJcbmltcG9ydCBhdXRvQmluZCBmcm9tICdhdXRvLWJpbmQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuLy8gY2xhc3MgQ29kZVNhbmRib3ggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbi8vICAgICBzdXBlcihwcm9wcylcclxuLy8gICB9XHJcbi8vICAgcmVuZGVyKCkge1xyXG4vLyAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKClcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgIDxkaXZcclxuLy8gICAgICAgICBjbGFzc05hbWU9e1xyXG4vLyAgICAgICAgICAgJ3NhbmRib3gnICsgKHRoaXMucHJvcHMuaGFzT3duUHJvcGVydHkoJ2NsYXNzTmFtZScpID8gJyAnICsgdGhpcy5wcm9wcy5jbGFzc05hbWUgOiAnJylcclxuLy8gICAgICAgICB9PlxyXG4vLyAgICAgICAgIHt0eXBlb2YgdGhpcy5zdGF0ZS5zaGFyZVVSTCA9PSAnc3RyaW5nJyA/IChcclxuLy8gICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNoYXJlLXBvcHVwXCI+XHJcbi8vICAgICAgICAgICAgIFlvdXIgU2hhcmluZyBVUkw6XHJcbi8vICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVybFwiIGhyZWY9e3RoaXMuc3RhdGUuc2hhcmVVUkx9PlxyXG4vLyAgICAgICAgICAgICAgIFJpZ2h0IENsaWNrIGFuZCBDb3B5IFRoaXMgTGlua1xyXG4vLyAgICAgICAgICAgICA8L2E+XHJcbi8vICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImljb24gY2xvc2VcIiBvbkNsaWNrPXt0aGlzLmNsb3NlU2hhcmluZ30+XHJcbi8vICAgICAgICAgICAgICAg4p2MXHJcbi8vICAgICAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgICApIDogbnVsbH1cclxuLy8gICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWFpbi10aXRsZVwiPlxyXG4vLyAgICAgICAgICAge3RoaXMucHJvcHMuZGlzYWJsZUF1dG9SdW4gPT09IHRydWUgPyAoXHJcbi8vICAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiUnVuXCIgY2xhc3NOYW1lPVwiaWNvbiBwbGF5XCIgb25DbGljaz17dGhpcy5ydW59PlxyXG4vLyAgICAgICAgICAgICAgIOKWtlxyXG4vLyAgICAgICAgICAgICA8L3NwYW4+XHJcbi8vICAgICAgICAgICApIDogbnVsbH1cclxuLy8gICAgICAgICAgIDxoMj5KYXZhU2NyaXB0IHt0aGlzLnByb3BzLmNvbnNvbGVNb2RlID09PSB0cnVlID8gJ1Rlcm1pbmFsJyA6ICdFdmFsdWF0b3InfTwvaDI+XHJcbi8vICAgICAgICAgICB7dGhpcy5wcm9wcy5yZWFkT25seSA9PT0gdHJ1ZSA/ICcgKFJlYWQgT25seSknIDogbnVsbH1cclxuLy8gICAgICAgICAgIHt0aGlzLnByb3BzLm5vUmVzZXQgIT09IHRydWUgPyAoXHJcbi8vICAgICAgICAgICAgIDxzcGFuIHRpdGxlPVwiUmVzZXRcIiBjbGFzc05hbWU9XCJpY29uIHJlc2V0XCIgb25DbGljaz17dGhpcy5yZXNldH0+XHJcbi8vICAgICAgICAgICAgICAg4p2MXHJcbi8vICAgICAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgICAgICkgOiBudWxsfVxyXG4vLyAgICAgICAgICAge3RoaXMucHJvcHMuc2hhcmluZyA9PSB0cnVlID8gKFxyXG4vLyAgICAgICAgICAgICA8RnJhZ21lbnQ+XHJcbi8vICAgICAgICAgICAgICAgPHNwYW4gdGl0bGU9XCJTaGFyZVwiIGNsYXNzTmFtZT1cImljb24gc2hhcmVcIiBvbkNsaWNrPXt0aGlzLnNoYXJlfT5cclxuLy8gICAgICAgICAgICAgICAgIOKYge+4j1xyXG4vLyAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuLy8gICAgICAgICAgICkgOiBudWxsfVxyXG4vLyAgICAgICAgIDwvaDI+XHJcblxyXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVzXCI+XHJcbi8vICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5Db2RlIElucHV0PC9oMj5cclxuLy8gICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aGlzLnByb3BzLmNvbnNvbGVNb2RlID09PSB0cnVlID8gJ0NvbnNvbGUnIDogJ091dHB1dCd9PC9oMj5cclxuLy8gICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyXCI+XHJcbi8vICAgICAgICAgICA8QWNlRWRpdG9yXHJcbi8vICAgICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuLy8gICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbi8vICAgICAgICAgICAgIG1vZGU9XCJqYXZhc2NyaXB0XCJcclxuLy8gICAgICAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbi8vICAgICAgICAgICAgIHJlYWRPbmx5PXt0aGlzLnByb3BzLnJlYWRPbmx5ID09PSB0cnVlfVxyXG4vLyAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbi8vICAgICAgICAgICAgIG9uQ2hhbmdlPXsoLi4uYXJncykgPT4ge1xyXG4vLyAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKC4uLmFyZ3MpXHJcbi8vICAgICAgICAgICAgIH19XHJcbi8vICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAge3RoaXMuZ2V0T3V0cHV0KCl9XHJcbi8vICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgKVxyXG4vLyAgIH1cclxuLy8gICBnZXRPdXRwdXQoc2tpcEF1dG9SdW4gPSBmYWxzZSkge1xyXG4vLyAgICAgbGV0IG91dHB1dCA9IG51bGxcclxuLy8gICAgIGlmIChza2lwQXV0b1J1biAhPT0gdHJ1ZSAmJiB0aGlzLnByb3BzLmRpc2FibGVBdXRvUnVuID09PSB0cnVlKSB7XHJcbi8vICAgICAgIG91dHB1dCA9XHJcbi8vICAgICAgICAgdGhpcy5zdGF0ZS5vdXRwdXQgIT09IG51bGwgPyAoXHJcbi8vICAgICAgICAgICB0aGlzLnN0YXRlLm91dHB1dFxyXG4vLyAgICAgICAgICkgOiAoXHJcbi8vICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZW1wdHlcIj5SdW4gdGhlIHByb2dyYW0gdG8gc2VlIHlvdXIgb3V0cHV0PC9zcGFuPlxyXG4vLyAgICAgICAgIClcclxuLy8gICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS52YWx1ZS50cmltKCkubGVuZ3RoID4gMCkge1xyXG4vLyAgICAgICBvdXRwdXQgPVxyXG4vLyAgICAgICAgIHRoaXMucHJvcHMuY29uc29sZU1vZGUgPT09IHRydWVcclxuLy8gICAgICAgICAgID8gdGhpcy5nZXRDb25zb2xlT3V0cHV0KHRoaXMuc3RhdGUudmFsdWUpXHJcbi8vICAgICAgICAgICA6IHRoaXMuZ2V0RXZhbE91dHB1dCh0aGlzLnN0YXRlLnZhbHVlKVxyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgb3V0cHV0ID0gPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVtcHR5XCI+VHlwZSBzb21ldGhpbmcgdG8gc2VlIHRoZSBldmFsdWF0ZWQgb3V0cHV0PC9zcGFuPlxyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIG91dHB1dFxyXG4vLyAgIH1cclxuLy8gICBnZXRWYWx1ZSgpIHtcclxuLy8gICAgIGxldCB2YWx1ZSA9ICcnXHJcbi8vICAgICBpZiAodGhpcy5zdGF0ZS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xyXG4vLyAgICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWVcclxuLy8gICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoaXMucHJvcHMuY29kZVF1ZXJ5UGFyYW0gPT0gJ3N0cmluZycpIHtcclxuLy8gICAgICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuLy8gICAgICAgaWYgKHJvdXRlci5xdWVyeS5oYXNPd25Qcm9wZXJ0eSh0aGlzLnByb3BzLmNvZGVRdWVyeVBhcmFtKSkge1xyXG4vLyAgICAgICAgIHZhbHVlID0gcm91dGVyLnF1ZXJ5W3RoaXMucHJvcHMuY29kZVF1ZXJ5UGFyYW1dXHJcbi8vICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgdmFsdWUgPSB0aGlzLnByb3BzLnZhbHVlIHx8ICcnXHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0gZWxzZSB7XHJcbi8vICAgICAgIHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSB8fCAnJ1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIHZhbHVlXHJcbi8vICAgfVxyXG4vLyAgIGdldENvbnNvbGVPdXRwdXQoc291cmNlKSB7XHJcbi8vICAgICBjb25zdCBvbGRMb2cgPSBjb25zb2xlLmxvZ1xyXG4vLyAgICAgY29uc3QgbG9nT3V0cHV0ID0gW11cclxuLy8gICAgIGNvbnNvbGUubG9nID0gKC4uLmFyZ3MpID0+IHtcclxuLy8gICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSkge1xyXG4vLyAgICAgICAgIGxvZ091dHB1dC5wdXNoKGFyZ3MpXHJcbi8vICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgbG9nT3V0cHV0LnB1c2goYXJnc1swXSlcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgZXZhbChzb3VyY2UpXHJcbi8vICAgICAgIGNvbnNvbGUubG9nID0gb2xkTG9nXHJcbi8vICAgICAgIGlmIChsb2dPdXRwdXQubGVuZ3RoIDwgMSlcclxuLy8gICAgICAgICByZXR1cm4gKFxyXG4vLyAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVtcHR5XCI+XHJcbi8vICAgICAgICAgICAgIFRyeSBsb2dnaW5nIHNvbWV0aGluZyB0byB0aGUgY29uc29sZSB0byBzZWUgc29tZSBvdXRwdXRcclxuLy8gICAgICAgICAgIDwvc3Bhbj5cclxuLy8gICAgICAgICApXHJcbi8vICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPEFjZUVkaXRvclxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0IHZhbGlkXCJcclxuLy8gICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuLy8gICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4vLyAgICAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4vLyAgICAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbi8vICAgICAgICAgICByZWFkT25seVxyXG4vLyAgICAgICAgICAgdmFsdWU9e2xvZ091dHB1dC5tYXAodmFsdWUgPT4gaW5zcGVjdCh2YWx1ZSkpLmpvaW4oJztcXG4nKX1cclxuLy8gICAgICAgICAvPlxyXG4vLyAgICAgICApXHJcbi8vICAgICB9IGNhdGNoIChlcnIpIHtcclxuLy8gICAgICAgY29uc29sZS5sb2cgPSBvbGRMb2dcclxuLy8gICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlcnJvclwiPntpbnNwZWN0KGVycil9PC9zcGFuPlxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gICBnZXRFdmFsT3V0cHV0KHNvdXJjZSkge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgY29uc3Qgb3V0cHV0ID0gZXZhbChzb3VyY2UpXHJcbi8vICAgICAgIGxldCBvdXRwdXRTb3VyY2UgPSBpbnNwZWN0KG91dHB1dClcclxuLy8gICAgICAgLy9jb25zb2xlLmxvZygneCcsIG91dHB1dFNvdXJjZSlcclxuLy8gICAgICAgcmV0dXJuIChcclxuLy8gICAgICAgICA8QWNlRWRpdG9yXHJcbi8vICAgICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXQgdmFsaWRcIlxyXG4vLyAgICAgICAgICAgd2lkdGg9XCI1MCVcIlxyXG4vLyAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbi8vICAgICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbi8vICAgICAgICAgICB0aGVtZT1cImFtYmlhbmNlXCJcclxuLy8gICAgICAgICAgIHJlYWRPbmx5XHJcbi8vICAgICAgICAgICB2YWx1ZT17b3V0cHV0U291cmNlfVxyXG4vLyAgICAgICAgIC8+XHJcbi8vICAgICAgIClcclxuLy8gICAgIH0gY2F0Y2ggKGVycikge1xyXG4vLyAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwib3V0cHV0IGVycm9yXCI+e2luc3BlY3QoZXJyKX08L3NwYW4+XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIGhhbmRsZUNoYW5nZShvdXRwdXQpIHtcclxuLy8gICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogb3V0cHV0IH0pXHJcbi8vICAgfVxyXG4vLyAgIHJlc2V0KCkge1xyXG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlIHx8ICcnIH0pXHJcbi8vICAgfVxyXG4vLyAgIHJ1bigpIHtcclxuLy8gICAgIHRoaXMuc2V0U3RhdGUoeyBvdXRwdXQ6IHRoaXMuZ2V0T3V0cHV0KHRydWUpIH0pXHJcbi8vICAgfVxyXG4vLyAgIHNoYXJlKCkge1xyXG4vLyAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbi8vICAgICAgIHNoYXJlVVJMOiAnaHR0cHM6Ly95b3VyZmlyc3RycGcuY29tL3JwZy9lZGl0b3I/Y29kZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuc3RhdGUudmFsdWUpXHJcbi8vICAgICB9KVxyXG4vLyAgIH1cclxuLy8gICBjbG9zZVNoYXJpbmcoKSB7XHJcbi8vICAgICB0aGlzLnNldFN0YXRlKHsgc2hhcmVVUkw6IG51bGwgfSlcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIENvZGVTYW5kYm94KHByb3BzKSB7XHJcbiAgY29uc3QgW3NoYXJlVVJMLCBzZXRTaGFyZVVSTF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc29sZS5sb2coJ3gnLCByb3V0ZXIpXHJcbiAgY29uc3QgW291dHB1dCwgc2V0T3V0cHV0XSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGUoXHJcbiAgICByb3V0ZXIucXVlcnkuaGFzT3duUHJvcGVydHkocHJvcHMuY29kZVF1ZXJ5UGFyYW0pXHJcbiAgICAgID8gcm91dGVyLnF1ZXJ5W3Byb3BzLmNvZGVRdWVyeVBhcmFtXVxyXG4gICAgICA6IHByb3BzLnZhbHVlIHx8ICcnXHJcbiAgKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17J3NhbmRib3gnICsgKHByb3BzLmhhc093blByb3BlcnR5KCdjbGFzc05hbWUnKSA/ICcgJyArIHByb3BzLmNsYXNzTmFtZSA6ICcnKX0+XHJcbiAgICAgIHt0eXBlb2Ygc2hhcmVVUkwgPT0gJ3N0cmluZycgPyAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2hhcmUtcG9wdXBcIj5cclxuICAgICAgICAgIFlvdXIgU2hhcmluZyBVUkw6XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ1cmxcIiBocmVmPXtzaGFyZVVSTH0+XHJcbiAgICAgICAgICAgIFJpZ2h0IENsaWNrIGFuZCBDb3B5IFRoaXMgTGlua1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaWNvbiBjbG9zZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRTaGFyZVVSTChudWxsKVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAg4p2MXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgICAgPGgyIGNsYXNzTmFtZT1cIm1haW4tdGl0bGVcIj5cclxuICAgICAgICB7cHJvcHMuZGlzYWJsZUF1dG9SdW4gPT09IHRydWUgPyAoXHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICB0aXRsZT1cIlJ1blwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gcGxheVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICBzZXRPdXRwdXQoZ2V0T3V0cHV0KGNvZGUsIHByb3BzLmNvbnNvbGVNb2RlKSlcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIOKWtlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDxoMj5KYXZhU2NyaXB0IHtwcm9wcy5jb25zb2xlTW9kZSA9PT0gdHJ1ZSA/ICdUZXJtaW5hbCcgOiAnRXZhbHVhdG9yJ308L2gyPlxyXG4gICAgICAgIHtwcm9wcy5yZWFkT25seSA9PT0gdHJ1ZSA/ICcgKFJlYWQgT25seSknIDogbnVsbH1cclxuICAgICAgICB7cHJvcHMubm9SZXNldCAhPT0gdHJ1ZSA/IChcclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIHRpdGxlPVwiUmVzZXRcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIHJlc2V0XCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldENvZGUoXHJcbiAgICAgICAgICAgICAgICByb3V0ZXIucXVlcnkuaGFzT3duUHJvcGVydHkocHJvcHMuY29kZVF1ZXJ5UGFyYW0pXHJcbiAgICAgICAgICAgICAgICAgID8gcm91dGVyLnF1ZXJ5W3Byb3BzLmNvZGVRdWVyeVBhcmFtXVxyXG4gICAgICAgICAgICAgICAgICA6IGRlZmF1bHRDb2RlXHJcbiAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAg4p2MXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAge3Byb3BzLnNoYXJpbmcgPT0gdHJ1ZSA/IChcclxuICAgICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICB0aXRsZT1cIlNoYXJlXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIHNoYXJlXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTaGFyZVVSTCgnL3JwZy9lZGl0b3I/Y29kZT0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuc3RhdGUudmFsdWUpKVxyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgIOKYge+4j1xyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICA8L2gyPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZXNcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj5Db2RlIElucHV0PC9oMj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGl0bGVcIj57cHJvcHMuY29uc29sZU1vZGUgPT09IHRydWUgPyAnQ29uc29sZScgOiAnT3V0cHV0J308L2gyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbm5lclwiPlxyXG4gICAgICAgIDxBY2VFZGl0b3JcclxuICAgICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICAgIGhlaWdodD1cIjEwMCVcIlxyXG4gICAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4gICAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbiAgICAgICAgICByZWFkT25seT17cHJvcHMucmVhZE9ubHkgPT09IHRydWV9XHJcbiAgICAgICAgICB2YWx1ZT17Y29kZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtuZXdDb2RlID0+IHtcclxuICAgICAgICAgICAgc2V0Q29kZShuZXdDb2RlKVxyXG4gICAgICAgICAgICBpZiAocHJvcHMuZGlzYWJsZUF1dG9SdW4gIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICBzZXRPdXRwdXQoZ2V0T3V0cHV0KG5ld0NvZGUsIHByb3BzLmNvbnNvbGVNb2RlKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtvdXRwdXQgPT09IG51bGwgPyAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZW1wdHlcIj5SdW4gdGhlIHByb2dyYW0gdG8gc2VlIHlvdXIgb3V0cHV0PC9zcGFuPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICBvdXRwdXRcclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0T3V0cHV0KGNvZGUsIGNvbnNvbGVNb2RlKSB7XHJcbiAgaWYgKGNvZGUubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIGNvbnNvbGVNb2RlID09PSB0cnVlID8gZ2V0Q29uc29sZU91dHB1dChjb2RlKSA6IGdldEV2YWxPdXRwdXQoY29kZSlcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cIm91dHB1dCBlbXB0eVwiPlR5cGUgc29tZXRoaW5nIHRvIHNlZSB0aGUgZXZhbHVhdGVkIG91dHB1dDwvc3Bhbj5cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbnNvbGVPdXRwdXQoY29kZSkge1xyXG4gIGNvbnN0IG9sZExvZyA9IGNvbnNvbGUubG9nXHJcbiAgY29uc3QgbG9nT3V0cHV0ID0gW11cclxuICBjb25zb2xlLmxvZyA9ICguLi5hcmdzKSA9PiB7XHJcbiAgICBpZiAoYXJncy5sZW5ndGggPiAxKSB7XHJcbiAgICAgIGxvZ091dHB1dC5wdXNoKGFyZ3MpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsb2dPdXRwdXQucHVzaChhcmdzWzBdKVxyXG4gICAgfVxyXG4gIH1cclxuICB0cnkge1xyXG4gICAgZXZhbChjb2RlKVxyXG4gICAgY29uc29sZS5sb2cgPSBvbGRMb2dcclxuICAgIGlmIChsb2dPdXRwdXQubGVuZ3RoIDwgMSlcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZW1wdHlcIj5cclxuICAgICAgICAgIFRyeSBsb2dnaW5nIHNvbWV0aGluZyB0byB0aGUgY29uc29sZSB0byBzZWUgc29tZSBvdXRwdXRcclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxBY2VFZGl0b3JcclxuICAgICAgICBjbGFzc05hbWU9XCJvdXRwdXQgdmFsaWRcIlxyXG4gICAgICAgIHdpZHRoPVwiNTAlXCJcclxuICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcclxuICAgICAgICBtb2RlPVwiamF2YXNjcmlwdFwiXHJcbiAgICAgICAgdGhlbWU9XCJhbWJpYW5jZVwiXHJcbiAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICB2YWx1ZT17bG9nT3V0cHV0Lm1hcCh2YWx1ZSA9PiBpbnNwZWN0KHZhbHVlKSkuam9pbignO1xcbicpfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5sb2cgPSBvbGRMb2dcclxuICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZXJyb3JcIj57aW5zcGVjdChlcnIpfTwvc3Bhbj5cclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEV2YWxPdXRwdXQoY29kZSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBvdXRwdXQgPSBldmFsKGNvZGUpXHJcbiAgICBsZXQgb3V0cHV0U291cmNlID0gaW5zcGVjdChvdXRwdXQpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QWNlRWRpdG9yXHJcbiAgICAgICAgY2xhc3NOYW1lPVwib3V0cHV0IHZhbGlkXCJcclxuICAgICAgICB3aWR0aD1cIjUwJVwiXHJcbiAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXHJcbiAgICAgICAgbW9kZT1cImphdmFzY3JpcHRcIlxyXG4gICAgICAgIHRoZW1lPVwiYW1iaWFuY2VcIlxyXG4gICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgdmFsdWU9e291dHB1dFNvdXJjZX1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJvdXRwdXQgZXJyb3JcIj57aW5zcGVjdChlcnIpfTwvc3Bhbj5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvZGVTYW5kYm94XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=