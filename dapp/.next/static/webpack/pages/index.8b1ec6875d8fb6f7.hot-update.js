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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var _components_SignUpForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SignUpForm */ \"./components/SignUpForm.tsx\");\n/* harmony import */ var _components_PatientForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PatientForm */ \"./components/PatientForm.tsx\");\n/* harmony import */ var _hooks_useMedfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useMedfile */ \"./hooks/useMedfile.ts\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,_hooks_useMedfile__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), connect = ref.connect, account = ref.account, user = ref.user, createUser = ref.createUser, postPatient = ref.postPatient, patients = ref.patients;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"cursor-pointer flex min-h-screen flex-col items-center justify-center p-1 bg-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Dwitter\"\n                    }, void 0, false, {\n                        fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-1 flex-col items-center justify-center px-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"mb-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"opacity-80 drop-shadow-2xl font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-green-400 to-teal-400\",\n                            children: \"Medfile \"\n                        }, void 0, false, {\n                            fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    !account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        label: \"Connect with Ethereum\",\n                        onClick: connect\n                    }, void 0, false, {\n                        fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this) : account.toUpperCase() !== (user === null || user === void 0 ? void 0 : user.wallet.toUpperCase()) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignUpForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        createUser: createUser\n                    }, void 0, false, {\n                        fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 69\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PatientForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        postPatient: postPatient\n                    }, void 0, false, {\n                        fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 112\n                    }, this),\n                    patients.map(function(patient) {\n                        return(// <span className='opacity-90 text-white drop-shadow-lg bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg w-64 my-2 py-1.5 px-3'>\n                        //   {patient.report}\n                        // </span>\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"block m-20 p-6 w-80 bg-black rounded-lg border border-gray-800 shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"mb-2 text-3xl font-bold tracking-tight text-white dark:text-white\",\n                                    children: patient.pname\n                                }, void 0, false, {\n                                    fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-normal text-white\",\n                                    children: patient.report\n                                }, void 0, false, {\n                                    fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-normal text-slate-400\",\n                                    children: patient.report\n                                }, void 0, false, {\n                                    fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, _this));\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"opacity-40 text-2xl flex h-24 w-full items-center justify-center\",\n                children: \"Powered By Ethereum\"\n            }, void 0, false, {\n                fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"aVxn7NuvRgqeVUGftN7EmHw5JA0=\", false, function() {\n    return [\n        _hooks_useMedfile__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDYTtBQUNRO0FBQ0U7QUFDUDs7QUFHOUIsU0FBU0ssSUFBSSxHQUFHOzs7SUFDN0IsSUFBbUVELEdBQVksR0FBWkEsNkRBQVUsRUFBRSxFQUF2RUUsT0FBTyxHQUFvREYsR0FBWSxDQUF2RUUsT0FBTyxFQUFFQyxPQUFPLEdBQTJDSCxHQUFZLENBQTlERyxPQUFPLEVBQUVDLElBQUksR0FBcUNKLEdBQVksQ0FBckRJLElBQUksRUFBRUMsVUFBVSxHQUF5QkwsR0FBWSxDQUEvQ0ssVUFBVSxFQUFDQyxXQUFXLEdBQWFOLEdBQVksQ0FBcENNLFdBQVcsRUFBQ0MsUUFBUSxHQUFJUCxHQUFZLENBQXhCTyxRQUFRO0lBRS9ELHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxvRkFBb0Y7OzBCQUNqRyw4REFBQ2Isa0RBQUk7O2tDQUNILDhEQUFDYyxPQUFLO2tDQUFDLFNBQU87Ozs7OzRCQUFRO2tDQUN0Qiw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs0QkFBRzs7Ozs7O29CQUNsQzswQkFFUCw4REFBQ0MsTUFBSTtnQkFBQ0wsU0FBUyxFQUFDLCtEQUErRDs7a0NBQzdFLDhEQUFDTSxJQUFFO3dCQUFDTixTQUFTLEVBQUMsTUFBTTtrQ0FDbEIsNEVBQUNPLE1BQUk7NEJBQUNQLFNBQVMsRUFBQyw4SEFBOEg7c0NBQUMsVUFBUTs7Ozs7Z0NBQU87Ozs7OzRCQUMzSjtvQkFFSixDQUFDTixPQUFPLGlCQUNQLDhEQUFDTiwwREFBTTt3QkFBQ29CLEtBQUssRUFBQyx1QkFBdUI7d0JBQUNDLE9BQU8sRUFBRWhCLE9BQU87Ozs7OzRCQUFJLEdBQ3hEQyxPQUFPLENBQUNnQixXQUFXLEVBQUUsS0FBS2YsQ0FBQUEsSUFBSSxhQUFKQSxJQUFJLFdBQVEsR0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxJQUFJLENBQUVnQixNQUFNLENBQUNELFdBQVcsRUFBRSxrQkFBSSw4REFBQ3JCLDhEQUFVO3dCQUFDTyxVQUFVLEVBQUVBLFVBQVU7Ozs7OzRCQUFJLGlCQUFLLDhEQUFDTiwrREFBVzt3QkFBQ08sV0FBVyxFQUFFQSxXQUFXOzs7Ozs0QkFBRztvQkFDOUlDLFFBQVEsQ0FBQ2MsR0FBRyxDQUFDQyxTQUFBQSxPQUFPOytCQUNuQixzSUFBc0k7d0JBQ3RJLHFCQUFxQjt3QkFDckIsVUFBVTtzQ0FDViw4REFBQ2QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLDBFQUEwRTs7OENBQ3ZGLDhEQUFDYyxJQUFFO29DQUFDZCxTQUFTLEVBQUMsbUVBQW1FOzhDQUFFYSxPQUFPLENBQUNFLEtBQUs7Ozs7O3lDQUFNOzhDQUN0Ryw4REFBQ0MsR0FBQztvQ0FBQ2hCLFNBQVMsRUFBQyx3QkFBd0I7OENBQUVhLE9BQU8sQ0FBQ0ksTUFBTTs7Ozs7eUNBQUs7OENBQzFELDhEQUFDRCxHQUFDO29DQUFDaEIsU0FBUyxFQUFDLDRCQUE0Qjs4Q0FBRWEsT0FBTyxDQUFDSSxNQUFNOzs7Ozt5Q0FBSzs7Ozs7O2lDQUMxRDtxQkFDUCxDQUFDOzs7Ozs7b0JBQ0c7MEJBRVAsOERBQUNDLFFBQU07Z0JBQUNsQixTQUFTLEVBQUMsa0VBQWtFOzBCQUFDLHFCQUVyRjs7Ozs7b0JBQVM7Ozs7OztZQUNMLENBQ047Q0FDSDtHQW5DdUJSLElBQUk7O1FBQ3lDRCx5REFBVTs7O0FBRHZEQyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBTaWduVXBGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvU2lnblVwRm9ybSc7XG5pbXBvcnQgUGF0aWVudEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9QYXRpZW50Rm9ybSc7XG5pbXBvcnQgdXNlRHdpdHRlciBmcm9tICcuLi9ob29rcy91c2VNZWRmaWxlJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGNvbm5lY3QsIGFjY291bnQsIHVzZXIsIGNyZWF0ZVVzZXIscG9zdFBhdGllbnQscGF0aWVudHN9ID0gdXNlRHdpdHRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciBmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0xIGJnLWJsYWNrXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkR3aXR0ZXI8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGZsZXgtMSBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtMjBcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvcGFjaXR5LTgwIGRyb3Atc2hhZG93LTJ4bCBmb250LWV4dHJhYm9sZCB0ZXh0LXRyYW5zcGFyZW50IHRleHQtNnhsIGJnLWNsaXAtdGV4dCBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JlZW4tNDAwIHRvLXRlYWwtNDAwXCI+TWVkZmlsZSA8L3NwYW4+XG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgeyFhY2NvdW50ID8gKFxuICAgICAgICAgIDxCdXR0b24gbGFiZWw9XCJDb25uZWN0IHdpdGggRXRoZXJldW1cIiBvbkNsaWNrPXtjb25uZWN0fSAvPlxuICAgICAgICApIDogYWNjb3VudC50b1VwcGVyQ2FzZSgpICE9PSB1c2VyPy53YWxsZXQudG9VcHBlckNhc2UoKSA/ICg8U2lnblVwRm9ybSBjcmVhdGVVc2VyPXtjcmVhdGVVc2VyfSAvPikgOiAoPFBhdGllbnRGb3JtIHBvc3RQYXRpZW50PXtwb3N0UGF0aWVudH0vPil9XG4gICAgICAgIHtwYXRpZW50cy5tYXAocGF0aWVudD0+KFxuICAgICAgICAgIC8vIDxzcGFuIGNsYXNzTmFtZT0nb3BhY2l0eS05MCB0ZXh0LXdoaXRlIGRyb3Atc2hhZG93LWxnIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTQwMCB0by1ibHVlLTUwMCByb3VuZGVkLWxnIHctNjQgbXktMiBweS0xLjUgcHgtMyc+XG4gICAgICAgICAgLy8gICB7cGF0aWVudC5yZXBvcnR9XG4gICAgICAgICAgLy8gPC9zcGFuPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbS0yMCBwLTYgdy04MCBiZy1ibGFjayByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItZ3JheS04MDAgc2hhZG93LW1kXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibWItMiB0ZXh0LTN4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC13aGl0ZSBkYXJrOnRleHQtd2hpdGVcIj57cGF0aWVudC5wbmFtZX08L2g1PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC13aGl0ZVwiPntwYXRpZW50LnJlcG9ydH08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LXNsYXRlLTQwMFwiPntwYXRpZW50LnJlcG9ydH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cIm9wYWNpdHktNDAgdGV4dC0yeGwgZmxleCBoLTI0IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgUG93ZXJlZCBCeSBFdGhlcmV1bVxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJCdXR0b24iLCJTaWduVXBGb3JtIiwiUGF0aWVudEZvcm0iLCJ1c2VEd2l0dGVyIiwiSG9tZSIsImNvbm5lY3QiLCJhY2NvdW50IiwidXNlciIsImNyZWF0ZVVzZXIiLCJwb3N0UGF0aWVudCIsInBhdGllbnRzIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJoMSIsInNwYW4iLCJsYWJlbCIsIm9uQ2xpY2siLCJ0b1VwcGVyQ2FzZSIsIndhbGxldCIsIm1hcCIsInBhdGllbnQiLCJoNSIsInBuYW1lIiwicCIsInJlcG9ydCIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});