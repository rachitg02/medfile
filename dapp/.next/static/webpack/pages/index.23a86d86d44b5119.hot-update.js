"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Input.tsx":
/*!******************************!*\
  !*** ./components/Input.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar Input = function(param) {\n    var label = param.label, value = param.value, setValue = param.setValue, _placeholder = param.placeholder, placeholder = _placeholder === void 0 ? \"\" : _placeholder, _type = param.type, type = _type === void 0 ? \"text\" : _type;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            className: \"block\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"w-full text-emerald-400\",\n                    children: label\n                }, void 0, false, {\n                    fileName: \"/media/rachit/DATA/medfile/dapp/components/Input.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 11\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"mt-1 block w-full bg-gray rounded-md border-white shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50\",\n                    type: type,\n                    value: value,\n                    placeholder: placeholder,\n                    onChange: function(e) {\n                        setValue(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"/media/rachit/DATA/medfile/dapp/components/Input.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/media/rachit/DATA/medfile/dapp/components/Input.tsx\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/media/rachit/DATA/medfile/dapp/components/Input.tsx\",\n        lineNumber: 17,\n        columnNumber: 7\n    }, _this);\n};\n_c = Input;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\nvar _c;\n$RefreshReg$(_c, \"Input\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTs7QUFRRSxJQUFNQSxLQUFLLEdBQW9CLGdCQU16QjtRQUxKQyxLQUFLLFNBQUxBLEtBQUssRUFDTEMsS0FBSyxTQUFMQSxLQUFLLEVBQ0xDLFFBQVEsU0FBUkEsUUFBUSx1QkFDUkMsV0FBVyxFQUFYQSxXQUFXLDZCQUFHLEVBQUUsK0JBQ2hCQyxJQUFJLEVBQUpBLElBQUksc0JBQUcsTUFBTTtJQUViLHFCQUNFLDhEQUFDQyxLQUFHO2tCQUNGLDRFQUFDTCxPQUFLO1lBQUNNLFNBQVMsRUFBQyxPQUFPOzs4QkFDdEIsOERBQUNDLE1BQUk7b0JBQUNELFNBQVMsRUFBQyx5QkFBeUI7OEJBQUVOLEtBQUs7Ozs7O3lCQUFROzhCQUN4RCw4REFBQ1EsT0FBSztvQkFDSkYsU0FBUyxFQUFDLDRJQUE0STtvQkFDdEpGLElBQUksRUFBRUEsSUFBSTtvQkFDVkgsS0FBSyxFQUFFQSxLQUFLO29CQUNaRSxXQUFXLEVBQUVBLFdBQVc7b0JBQ3hCTSxRQUFRLEVBQUUsU0FBQ0MsQ0FBQyxFQUFLO3dCQUNmUixRQUFRLENBQUNRLENBQUMsQ0FBQ0MsTUFBTSxDQUFDVixLQUFLLENBQUMsQ0FBQztxQkFDMUI7Ozs7O3lCQUNEOzs7Ozs7aUJBQ0k7Ozs7O2FBQ0osQ0FDTjtDQUNIO0FBdkJLRixLQUFBQSxLQUFLO0FBeUJYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dC50c3g/N2YxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIFByb3BzID0ge1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgdmFsdWU6IHN0cmluZztcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgICB0eXBlPzogc3RyaW5nO1xuICAgIHNldFZhbHVlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgfTtcbiAgXG4gIGNvbnN0IElucHV0OiBSZWFjdC5GQzxQcm9wcz4gPSAoe1xuICAgIGxhYmVsLFxuICAgIHZhbHVlLFxuICAgIHNldFZhbHVlLFxuICAgIHBsYWNlaG9sZGVyID0gJycsXG4gICAgdHlwZSA9ICd0ZXh0JyxcbiAgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2tcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1lbWVyYWxkLTQwMFwiPntsYWJlbH08L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCBiZy1ncmF5IHJvdW5kZWQtbWQgYm9yZGVyLXdoaXRlIHNoYWRvdy1zbSBmb2N1czpib3JkZXItaW5kaWdvLTMwMCBmb2N1czpyaW5nIGZvY3VzOnJpbmctaW5kaWdvLTIwMCBmb2N1czpyaW5nLW9wYWNpdHktNTBcIlxuICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9O1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgSW5wdXQ7Il0sIm5hbWVzIjpbIklucHV0IiwibGFiZWwiLCJ2YWx1ZSIsInNldFZhbHVlIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3BhbiIsImlucHV0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Input.tsx\n"));

/***/ })

});