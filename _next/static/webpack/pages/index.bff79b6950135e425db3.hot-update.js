self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsStyles */ "./src/components/Projects/ProjectsStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Websites\\portfolio_website-STARTER\\src\\components\\Projects\\Projects.js",
    _this = undefined;






var Projects = function Projects() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    nopadding: true,
    id: "projects",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      main: true,
      children: "Projects"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.GridContainer, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.projects.map(function (_ref) {
        var id = _ref.id,
            image = _ref.image,
            title = _ref.title,
            description = _ref.description,
            tags = _ref.tags,
            source = _ref.source,
            visit = _ref.visit;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.BlogCard, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
              src: project.image
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.HeaderThree, {
                title: project.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, _this)]
          }, project.id, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }, _this);
};

_c = Projects;
/* harmony default export */ __webpack_exports__["default"] = (Projects);

var _c;

$RefreshReg$(_c, "Projects");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiXSwibmFtZXMiOlsiUHJvamVjdHMiLCJwcm9qZWN0cyIsImlkIiwiaW1hZ2UiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGFncyIsInNvdXJjZSIsInZpc2l0IiwicHJvamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLHNCQUNmLDhEQUFDLDZEQUFEO0FBQVMsYUFBUyxNQUFsQjtBQUFtQixNQUFFLEVBQUMsVUFBdEI7QUFBQSw0QkFDRSw4REFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFSSw4REFBQyxrRUFBRDtBQUFjLFVBQUksTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUdJLDhEQUFDLDBEQUFEO0FBQUEsZ0JBQ0dDLDhEQUFBLENBQWE7QUFBQSxZQUFFQyxFQUFGLFFBQUVBLEVBQUY7QUFBQSxZQUFNQyxLQUFOLFFBQU1BLEtBQU47QUFBQSxZQUFhQyxLQUFiLFFBQWFBLEtBQWI7QUFBQSxZQUFvQkMsV0FBcEIsUUFBb0JBLFdBQXBCO0FBQUEsWUFBaUNDLElBQWpDLFFBQWlDQSxJQUFqQztBQUFBLFlBQXVDQyxNQUF2QyxRQUF1Q0EsTUFBdkM7QUFBQSxZQUErQ0MsS0FBL0MsUUFBK0NBLEtBQS9DO0FBQUEsNEJBQ1o7QUFBQSxpQ0FDRSw4REFBQyxxREFBRDtBQUFBLG9DQUNFLDhEQUFDLGdEQUFEO0FBQUssaUJBQUcsRUFBRUMsT0FBTyxDQUFDTjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUUsOERBQUMseURBQUQ7QUFBQSxxQ0FDRSw4REFBQyx3REFBRDtBQUFhLHFCQUFLLEVBQUVNLE9BQU8sQ0FBQ0w7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkY7QUFBQSxhQUFlSyxPQUFPLENBQUNQLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURZO0FBQUEsT0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEZTtBQUFBLENBQWpCOztLQUFNRixRO0FBbUJOLCtEQUFlQSxRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJmZjc5YjY5NTAxMzVlNDI1ZGIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCbG9nQ2FyZCwgQ2FyZEluZm8sIEV4dGVybmFsTGlua3MsIEdyaWRDb250YWluZXIsIEhlYWRlclRocmVlLCBIciwgVGFnLCBUYWdMaXN0LCBUaXRsZUNvbnRlbnQsIFV0aWxpdHlMaXN0LCBJbWcgfSBmcm9tICcuL1Byb2plY3RzU3R5bGVzJztcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuXG5cblxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiAoXG4gIDxTZWN0aW9uIG5vcGFkZGluZyBpZD1cInByb2plY3RzXCI+XG4gICAgPFNlY3Rpb25EaXZpZGVyIC8gPlxuICAgICAgPFNlY3Rpb25UaXRsZSBtYWluPlByb2plY3RzPC9TZWN0aW9uVGl0bGU+XG4gICAgICA8R3JpZENvbnRhaW5lcj5cbiAgICAgICAge3Byb2plY3RzLm1hcCgoe2lkLCBpbWFnZSwgdGl0bGUsIGRlc2NyaXB0aW9uLCB0YWdzLCBzb3VyY2UsIHZpc2l0fSkgPT4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QmxvZ0NhcmQga2V5PXtwcm9qZWN0LmlkfT5cbiAgICAgICAgICAgICAgPEltZyBzcmM9e3Byb2plY3QuaW1hZ2V9PjwvSW1nPlxuICAgICAgICAgICAgICA8VGl0bGVDb250ZW50PlxuICAgICAgICAgICAgICAgIDxIZWFkZXJUaHJlZSB0aXRsZT17cHJvamVjdC50aXRsZX0+PC9IZWFkZXJUaHJlZT5cbiAgICAgICAgICAgICAgPC9UaXRsZUNvbnRlbnQ+XG4gICAgICAgICAgICA8L0Jsb2dDYXJkPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvR3JpZENvbnRhaW5lcj5cbiAgPC9TZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==