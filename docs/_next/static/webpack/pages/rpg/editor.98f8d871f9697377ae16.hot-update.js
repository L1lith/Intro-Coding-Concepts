webpackHotUpdate_N_E("pages/rpg/editor",{

/***/ "./pages/rpg/editor.js":
/*!*****************************!*\
  !*** ./pages/rpg/editor.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CodeSandbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/CodeSandbox */ "./components/CodeSandbox.js");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
var _jsxFileName = "C:\\Users\\05L1\\Projects\\Intro-Coding-Concepts\\pages\\rpg\\editor.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var defaultGame = "function smartPrompt(question) {\n  var output = null\n  while(output === null || output.trim().length < 1) {\n      output = prompt(question)\n  }\n  return output.trim()\n}\n\nfunction getAction(question, actionList) { \n  // Here we give a list of possible actions and retry until the user provides a valid response\n  let answer = null\n  while (!actionList.includes(answer)) {\n      answer = smartPrompt(question + \" - possible actions: \" + actionList.join(\", \")) // Here we convert the list to a string by joining all of its contents with a comma and a space\n  }\n  return answer\n}\n\n//////////\n// INFO //\n//////////\n// If you get stuck or want to learn how to do more things consider checking out the resources section https://l1lith.github.io/Intro-Coding-Concepts#resources\n// Also, don't be afraid to google it!\n///////////\n\nvar name = smartPrompt(\"What is your name adventurer?\")\n\nalert(\"You wake up on a strange beach. '\" + name + \"' is written on the inside of your shirt.\")\n\nconst firstAction = getAction(\"What would you like to do?\", [\"wait\", \"explore the beach\", \"leave the beach\"]) // Lists are surrounded by square brackets and separated by commas\n\nwhile (true) { // We trap the user in this loop until they leave the beach\n  if (firstAction === \"wait\") {\n      alert(\"You wait around. The barking of the gulls and the lapping of the ocean lulls you into a deep sleep\")\n  } else if (firstAction === \"explore the beach\") {\n      alert(\"You find a large Oyster shell. Years of bombardment by the waves has left it brittle and chipped, but it's curves are still beautiful and pearlescent\")\n  } else { // the only remaining option is to leave the beach so we assume that\n      break // The break keyword exits us out of the current loop\n  }\n}\n\n\nconst direction = getAction(\"As you leave the beach you reach the edge of a divide between a dark forest and a giant cave in the side of the mountain. Which way would you like to go?\", [\"enter the forest\", \"enter the cave\", \"return to the beach\"])\n\n// TODO: Continue the adventure :)";

function Editor() {
  return __jsx("div", {
    className: "game-editor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__["NextSeo"], {
    title: "Game Editor",
    description: "Build a game of your own",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }), __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, "Game Editor"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, "Build your own game! Be sure to press the \u2601\uFE0F button and share your url.", __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), " Warning: You must save your URL or your game data could be lost."), __jsx(_components_CodeSandbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
    value: "",
    consoleMode: true,
    sharing: true,
    disableAutoRun: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }));
}

_c = Editor;
/* harmony default export */ __webpack_exports__["default"] = (Editor);

var _c;

$RefreshReg$(_c, "Editor");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcnBnL2VkaXRvci5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0R2FtZSIsIkVkaXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLFdBQVcsK2pFQUFqQjs7QUE2Q0EsU0FBU0MsTUFBVCxHQUFrQjtBQUNoQixTQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBUyxTQUFLLEVBQUMsYUFBZjtBQUE2QixlQUFXLEVBQUMsMEJBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBGQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixzRUFIRixFQU9FLE1BQUMsK0RBQUQ7QUFBYSxTQUFLLEVBQUMsRUFBbkI7QUFBc0IsZUFBVyxNQUFqQztBQUFrQyxXQUFPLE1BQXpDO0FBQTBDLGtCQUFjLE1BQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQRixDQURGO0FBV0Q7O0tBWlFBLE07QUFjTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcnBnL2VkaXRvci45OGY4ZDg3MWY5Njk3Mzc3YWUxNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvZGVTYW5kYm94IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29kZVNhbmRib3gnXHJcbmltcG9ydCB7IE5leHRTZW8gfSBmcm9tICduZXh0LXNlbydcclxuXHJcbmNvbnN0IGRlZmF1bHRHYW1lID0gYGZ1bmN0aW9uIHNtYXJ0UHJvbXB0KHF1ZXN0aW9uKSB7XHJcbiAgdmFyIG91dHB1dCA9IG51bGxcclxuICB3aGlsZShvdXRwdXQgPT09IG51bGwgfHwgb3V0cHV0LnRyaW0oKS5sZW5ndGggPCAxKSB7XHJcbiAgICAgIG91dHB1dCA9IHByb21wdChxdWVzdGlvbilcclxuICB9XHJcbiAgcmV0dXJuIG91dHB1dC50cmltKClcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QWN0aW9uKHF1ZXN0aW9uLCBhY3Rpb25MaXN0KSB7IFxyXG4gIC8vIEhlcmUgd2UgZ2l2ZSBhIGxpc3Qgb2YgcG9zc2libGUgYWN0aW9ucyBhbmQgcmV0cnkgdW50aWwgdGhlIHVzZXIgcHJvdmlkZXMgYSB2YWxpZCByZXNwb25zZVxyXG4gIGxldCBhbnN3ZXIgPSBudWxsXHJcbiAgd2hpbGUgKCFhY3Rpb25MaXN0LmluY2x1ZGVzKGFuc3dlcikpIHtcclxuICAgICAgYW5zd2VyID0gc21hcnRQcm9tcHQocXVlc3Rpb24gKyBcIiAtIHBvc3NpYmxlIGFjdGlvbnM6IFwiICsgYWN0aW9uTGlzdC5qb2luKFwiLCBcIikpIC8vIEhlcmUgd2UgY29udmVydCB0aGUgbGlzdCB0byBhIHN0cmluZyBieSBqb2luaW5nIGFsbCBvZiBpdHMgY29udGVudHMgd2l0aCBhIGNvbW1hIGFuZCBhIHNwYWNlXHJcbiAgfVxyXG4gIHJldHVybiBhbnN3ZXJcclxufVxyXG5cclxuLy8vLy8vLy8vL1xyXG4vLyBJTkZPIC8vXHJcbi8vLy8vLy8vLy9cclxuLy8gSWYgeW91IGdldCBzdHVjayBvciB3YW50IHRvIGxlYXJuIGhvdyB0byBkbyBtb3JlIHRoaW5ncyBjb25zaWRlciBjaGVja2luZyBvdXQgdGhlIHJlc291cmNlcyBzZWN0aW9uIGh0dHBzOi8vbDFsaXRoLmdpdGh1Yi5pby9JbnRyby1Db2RpbmctQ29uY2VwdHMjcmVzb3VyY2VzXHJcbi8vIEFsc28sIGRvbid0IGJlIGFmcmFpZCB0byBnb29nbGUgaXQhXHJcbi8vLy8vLy8vLy8vXHJcblxyXG52YXIgbmFtZSA9IHNtYXJ0UHJvbXB0KFwiV2hhdCBpcyB5b3VyIG5hbWUgYWR2ZW50dXJlcj9cIilcclxuXHJcbmFsZXJ0KFwiWW91IHdha2UgdXAgb24gYSBzdHJhbmdlIGJlYWNoLiAnXCIgKyBuYW1lICsgXCInIGlzIHdyaXR0ZW4gb24gdGhlIGluc2lkZSBvZiB5b3VyIHNoaXJ0LlwiKVxyXG5cclxuY29uc3QgZmlyc3RBY3Rpb24gPSBnZXRBY3Rpb24oXCJXaGF0IHdvdWxkIHlvdSBsaWtlIHRvIGRvP1wiLCBbXCJ3YWl0XCIsIFwiZXhwbG9yZSB0aGUgYmVhY2hcIiwgXCJsZWF2ZSB0aGUgYmVhY2hcIl0pIC8vIExpc3RzIGFyZSBzdXJyb3VuZGVkIGJ5IHNxdWFyZSBicmFja2V0cyBhbmQgc2VwYXJhdGVkIGJ5IGNvbW1hc1xyXG5cclxud2hpbGUgKHRydWUpIHsgLy8gV2UgdHJhcCB0aGUgdXNlciBpbiB0aGlzIGxvb3AgdW50aWwgdGhleSBsZWF2ZSB0aGUgYmVhY2hcclxuICBpZiAoZmlyc3RBY3Rpb24gPT09IFwid2FpdFwiKSB7XHJcbiAgICAgIGFsZXJ0KFwiWW91IHdhaXQgYXJvdW5kLiBUaGUgYmFya2luZyBvZiB0aGUgZ3VsbHMgYW5kIHRoZSBsYXBwaW5nIG9mIHRoZSBvY2VhbiBsdWxscyB5b3UgaW50byBhIGRlZXAgc2xlZXBcIilcclxuICB9IGVsc2UgaWYgKGZpcnN0QWN0aW9uID09PSBcImV4cGxvcmUgdGhlIGJlYWNoXCIpIHtcclxuICAgICAgYWxlcnQoXCJZb3UgZmluZCBhIGxhcmdlIE95c3RlciBzaGVsbC4gWWVhcnMgb2YgYm9tYmFyZG1lbnQgYnkgdGhlIHdhdmVzIGhhcyBsZWZ0IGl0IGJyaXR0bGUgYW5kIGNoaXBwZWQsIGJ1dCBpdCdzIGN1cnZlcyBhcmUgc3RpbGwgYmVhdXRpZnVsIGFuZCBwZWFybGVzY2VudFwiKVxyXG4gIH0gZWxzZSB7IC8vIHRoZSBvbmx5IHJlbWFpbmluZyBvcHRpb24gaXMgdG8gbGVhdmUgdGhlIGJlYWNoIHNvIHdlIGFzc3VtZSB0aGF0XHJcbiAgICAgIGJyZWFrIC8vIFRoZSBicmVhayBrZXl3b3JkIGV4aXRzIHVzIG91dCBvZiB0aGUgY3VycmVudCBsb29wXHJcbiAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgZGlyZWN0aW9uID0gZ2V0QWN0aW9uKFwiQXMgeW91IGxlYXZlIHRoZSBiZWFjaCB5b3UgcmVhY2ggdGhlIGVkZ2Ugb2YgYSBkaXZpZGUgYmV0d2VlbiBhIGRhcmsgZm9yZXN0IGFuZCBhIGdpYW50IGNhdmUgaW4gdGhlIHNpZGUgb2YgdGhlIG1vdW50YWluLiBXaGljaCB3YXkgd291bGQgeW91IGxpa2UgdG8gZ28/XCIsIFtcImVudGVyIHRoZSBmb3Jlc3RcIiwgXCJlbnRlciB0aGUgY2F2ZVwiLCBcInJldHVybiB0byB0aGUgYmVhY2hcIl0pXHJcblxyXG4vLyBUT0RPOiBDb250aW51ZSB0aGUgYWR2ZW50dXJlIDopYFxyXG5cclxuZnVuY3Rpb24gRWRpdG9yKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtZWRpdG9yXCI+XHJcbiAgICAgIDxOZXh0U2VvIHRpdGxlPVwiR2FtZSBFZGl0b3JcIiBkZXNjcmlwdGlvbj1cIkJ1aWxkIGEgZ2FtZSBvZiB5b3VyIG93blwiIC8+XHJcbiAgICAgIDxoMT5HYW1lIEVkaXRvcjwvaDE+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIEJ1aWxkIHlvdXIgb3duIGdhbWUhIEJlIHN1cmUgdG8gcHJlc3MgdGhlIOKYge+4jyBidXR0b24gYW5kIHNoYXJlIHlvdXIgdXJsLlxyXG4gICAgICAgIDxiciAvPiBXYXJuaW5nOiBZb3UgbXVzdCBzYXZlIHlvdXIgVVJMIG9yIHlvdXIgZ2FtZSBkYXRhIGNvdWxkIGJlIGxvc3QuXHJcbiAgICAgIDwvcD5cclxuICAgICAgPENvZGVTYW5kYm94IHZhbHVlPVwiXCIgY29uc29sZU1vZGUgc2hhcmluZyBkaXNhYmxlQXV0b1J1biAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==