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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var _components_SignUpForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SignUpForm */ \"./components/SignUpForm.tsx\");\n/* harmony import */ var _components_PatientForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PatientForm */ \"./components/PatientForm.tsx\");\n/* harmony import */ var _hooks_useMedfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useMedfile */ \"./hooks/useMedfile.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,_hooks_useMedfile__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), connect = ref.connect, account = ref.account, user = ref.user, createUser = ref.createUser, postPatient = ref.postPatient, patients = ref.patients;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\"), dweetContent = ref1[0], setDweetContent = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"cursor-pointer flex min-h-screen flex-col items-center justify-center p-1 bg-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Dwitter\"\n                    }, void 0, false, {\n                        fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-1 flex-col items-center justify-center px-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"mb-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"opacity-80 drop-shadow-2xl font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-green-400 to-teal-400\",\n                            children: \"Medfile \"\n                        }, void 0, false, {\n                            fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    !account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        label: \"Connect with Ethereum\",\n                        onClick: connect\n                    }, void 0, false, {\n                        fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this) : account.toUpperCase() !== (user === null || user === void 0 ? void 0 : user.wallet.toUpperCase()) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignUpForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        createUser: createUser\n                    }, void 0, false, {\n                        fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 69\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PatientForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        postPatient: postPatient\n                    }, void 0, false, {\n                        fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 112\n                    }, this),\n                    patients.map(function(patient) {\n                        return(// <span className='opacity-90 text-white drop-shadow-lg bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg w-64 my-2 py-1.5 px-3'>\n                        //   {patient.report}\n                        // </span>\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"block p-6 w-80 bg-black rounded-lg border border-gray-200 shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white\",\n                                    children: patient.pname\n                                }, void 0, false, {\n                                    fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-normal text-gray-700 dark:text-gray-400\",\n                                    children: patient.report\n                                }, void 0, false, {\n                                    fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, _this));\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"opacity-40 text-2xl flex h-24 w-full items-center justify-center\",\n                children: \"Powered By Ethereum\"\n            }, void 0, false, {\n                fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"9kVMXA25vcaJENgjgHN2oP7APmQ=\", false, function() {\n    return [\n        _hooks_useMedfile__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNhO0FBQ1E7QUFDRTtBQUNQO0FBQ1o7O0FBRWxCLFNBQVNNLElBQUksR0FBRzs7O0lBQzdCLElBQW1FRixHQUFZLEdBQVpBLDZEQUFVLEVBQUUsRUFBdkVHLE9BQU8sR0FBb0RILEdBQVksQ0FBdkVHLE9BQU8sRUFBRUMsT0FBTyxHQUEyQ0osR0FBWSxDQUE5REksT0FBTyxFQUFFQyxJQUFJLEdBQXFDTCxHQUFZLENBQXJESyxJQUFJLEVBQUVDLFVBQVUsR0FBeUJOLEdBQVksQ0FBL0NNLFVBQVUsRUFBQ0MsV0FBVyxHQUFhUCxHQUFZLENBQXBDTyxXQUFXLEVBQUNDLFFBQVEsR0FBSVIsR0FBWSxDQUF4QlEsUUFBUTtJQUMvRCxJQUF3Q1AsSUFBb0IsR0FBcEJBLCtDQUFRLENBQVMsRUFBRSxDQUFDLEVBQXJEUSxZQUFZLEdBQXFCUixJQUFvQixHQUF6QyxFQUFFUyxlQUFlLEdBQUlULElBQW9CLEdBQXhCO0lBRXBDLHFCQUNFLDhEQUFDVSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxvRkFBb0Y7OzBCQUNqRyw4REFBQ2hCLGtEQUFJOztrQ0FDSCw4REFBQ2lCLE9BQUs7a0NBQUMsU0FBTzs7Ozs7NEJBQVE7a0NBQ3RCLDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7OzRCQUFHOzs7Ozs7b0JBQ2xDOzBCQUVQLDhEQUFDQyxNQUFJO2dCQUFDTCxTQUFTLEVBQUMsK0RBQStEOztrQ0FDN0UsOERBQUNNLElBQUU7d0JBQUNOLFNBQVMsRUFBQyxNQUFNO2tDQUNsQiw0RUFBQ08sTUFBSTs0QkFBQ1AsU0FBUyxFQUFDLDhIQUE4SDtzQ0FBQyxVQUFROzs7OztnQ0FBTzs7Ozs7NEJBQzNKO29CQUVKLENBQUNSLE9BQU8saUJBQ1AsOERBQUNQLDBEQUFNO3dCQUFDdUIsS0FBSyxFQUFDLHVCQUF1Qjt3QkFBQ0MsT0FBTyxFQUFFbEIsT0FBTzs7Ozs7NEJBQUksR0FDeERDLE9BQU8sQ0FBQ2tCLFdBQVcsRUFBRSxLQUFLakIsQ0FBQUEsSUFBSSxhQUFKQSxJQUFJLFdBQVEsR0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxJQUFJLENBQUVrQixNQUFNLENBQUNELFdBQVcsRUFBRSxrQkFBSSw4REFBQ3hCLDhEQUFVO3dCQUFDUSxVQUFVLEVBQUVBLFVBQVU7Ozs7OzRCQUFJLGlCQUFLLDhEQUFDUCwrREFBVzt3QkFBQ1EsV0FBVyxFQUFFQSxXQUFXOzs7Ozs0QkFBRztvQkFDOUlDLFFBQVEsQ0FBQ2dCLEdBQUcsQ0FBQ0MsU0FBQUEsT0FBTzsrQkFDbkIsc0lBQXNJO3dCQUN0SSxxQkFBcUI7d0JBQ3JCLFVBQVU7c0NBQ1YsOERBQUNkLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxxRUFBcUU7OzhDQUNsRiw4REFBQ2MsSUFBRTtvQ0FBQ2QsU0FBUyxFQUFDLHNFQUFzRTs4Q0FBRWEsT0FBTyxDQUFDRSxLQUFLOzs7Ozt5Q0FBTTs4Q0FDekcsOERBQUNDLEdBQUM7b0NBQUNoQixTQUFTLEVBQUMsOENBQThDOzhDQUFFYSxPQUFPLENBQUNJLE1BQU07Ozs7O3lDQUFLOzs7Ozs7aUNBQzVFO3FCQUNQLENBQUM7Ozs7OztvQkFDRzswQkFFUCw4REFBQ0MsUUFBTTtnQkFBQ2xCLFNBQVMsRUFBQyxrRUFBa0U7MEJBQUMscUJBRXJGOzs7OztvQkFBUzs7Ozs7O1lBQ0wsQ0FDTjtDQUNIO0dBbkN1QlYsSUFBSTs7UUFDeUNGLHlEQUFVOzs7QUFEdkRFLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b24nO1xuaW1wb3J0IFNpZ25VcEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9TaWduVXBGb3JtJztcbmltcG9ydCBQYXRpZW50Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1BhdGllbnRGb3JtJztcbmltcG9ydCB1c2VEd2l0dGVyIGZyb20gJy4uL2hvb2tzL3VzZU1lZGZpbGUnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHsgY29ubmVjdCwgYWNjb3VudCwgdXNlciwgY3JlYXRlVXNlcixwb3N0UGF0aWVudCxwYXRpZW50c30gPSB1c2VEd2l0dGVyKCk7XG4gIGNvbnN0IFtkd2VldENvbnRlbnQsIHNldER3ZWV0Q29udGVudF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMSBiZy1ibGFja1wiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ed2l0dGVyPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBmbGV4LTEgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB4LTIwXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYi04XCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwib3BhY2l0eS04MCBkcm9wLXNoYWRvdy0yeGwgZm9udC1leHRyYWJvbGQgdGV4dC10cmFuc3BhcmVudCB0ZXh0LTZ4bCBiZy1jbGlwLXRleHQgYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyZWVuLTQwMCB0by10ZWFsLTQwMFwiPk1lZGZpbGUgPC9zcGFuPlxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIHshYWNjb3VudCA/IChcbiAgICAgICAgICA8QnV0dG9uIGxhYmVsPVwiQ29ubmVjdCB3aXRoIEV0aGVyZXVtXCIgb25DbGljaz17Y29ubmVjdH0gLz5cbiAgICAgICAgKSA6IGFjY291bnQudG9VcHBlckNhc2UoKSAhPT0gdXNlcj8ud2FsbGV0LnRvVXBwZXJDYXNlKCkgPyAoPFNpZ25VcEZvcm0gY3JlYXRlVXNlcj17Y3JlYXRlVXNlcn0gLz4pIDogKDxQYXRpZW50Rm9ybSBwb3N0UGF0aWVudD17cG9zdFBhdGllbnR9Lz4pfVxuICAgICAgICB7cGF0aWVudHMubWFwKHBhdGllbnQ9PihcbiAgICAgICAgICAvLyA8c3BhbiBjbGFzc05hbWU9J29wYWNpdHktOTAgdGV4dC13aGl0ZSBkcm9wLXNoYWRvdy1sZyBiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS00MDAgdG8tYmx1ZS01MDAgcm91bmRlZC1sZyB3LTY0IG15LTIgcHktMS41IHB4LTMnPlxuICAgICAgICAgIC8vICAge3BhdGllbnQucmVwb3J0fVxuICAgICAgICAgIC8vIDwvc3Bhbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2NrIHAtNiB3LTgwIGJnLWJsYWNrIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBzaGFkb3ctbWRcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0yIHRleHQtMnhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZVwiPntwYXRpZW50LnBuYW1lfTwvaDU+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LWdyYXktNzAwIGRhcms6dGV4dC1ncmF5LTQwMFwiPntwYXRpZW50LnJlcG9ydH08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cIm9wYWNpdHktNDAgdGV4dC0yeGwgZmxleCBoLTI0IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgUG93ZXJlZCBCeSBFdGhlcmV1bVxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59Il0sIm5hbWVzIjpbIkhlYWQiLCJCdXR0b24iLCJTaWduVXBGb3JtIiwiUGF0aWVudEZvcm0iLCJ1c2VEd2l0dGVyIiwidXNlU3RhdGUiLCJIb21lIiwiY29ubmVjdCIsImFjY291bnQiLCJ1c2VyIiwiY3JlYXRlVXNlciIsInBvc3RQYXRpZW50IiwicGF0aWVudHMiLCJkd2VldENvbnRlbnQiLCJzZXREd2VldENvbnRlbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwic3BhbiIsImxhYmVsIiwib25DbGljayIsInRvVXBwZXJDYXNlIiwid2FsbGV0IiwibWFwIiwicGF0aWVudCIsImg1IiwicG5hbWUiLCJwIiwicmVwb3J0IiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});