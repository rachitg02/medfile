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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var _components_SignUpForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SignUpForm */ \"./components/SignUpForm.tsx\");\n/* harmony import */ var _components_PatientForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/PatientForm */ \"./components/PatientForm.tsx\");\n/* harmony import */ var _hooks_useMedfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useMedfile */ \"./hooks/useMedfile.ts\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    var _this = this;\n    _s();\n    var ref = (0,_hooks_useMedfile__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(), connect = ref.connect, account = ref.account, user = ref.user, createUser = ref.createUser, postPatient = ref.postPatient, patients = ref.patients;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"cursor-pointer flex min-h-screen flex-col items-center justify-center p-1 bg-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Medfile\"\n                    }, void 0, false, {\n                        fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"https://www.pinterest.com/pin/705305991637972518/\"\n                    }, void 0, false, {\n                        fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-1 flex-col items-center justify-center px-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"mb-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"opacity-80 drop-shadow-2xl font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-green-400 to-teal-400\",\n                            children: \"Medfile \"\n                        }, void 0, false, {\n                            fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    !account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        label: \"Connect with Ethereum\",\n                        onClick: connect\n                    }, void 0, false, {\n                        fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this) : account.toUpperCase() !== (user === null || user === void 0 ? void 0 : user.wallet.toUpperCase()) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignUpForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        createUser: createUser\n                    }, void 0, false, {\n                        fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 69\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600 m-10\",\n                                children: [\n                                    \"Hi \",\n                                    user === null || user === void 0 ? void 0 : user.post,\n                                    \" \",\n                                    user === null || user === void 0 ? void 0 : user.name\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PatientForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                postPatient: postPatient\n                            }, void 0, false, {\n                                fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true),\n                    patients.map(function(patient) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"block m-6 p-6 w-80 bg-black rounded-lg border border-gray-800 shadow-md\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"mb-1 text-4xl font-bold text-white\",\n                                    children: patient.pname\n                                }, void 0, false, {\n                                    fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"mb-1 text-xl font-bold text-slate-400\",\n                                    children: patient.ppno\n                                }, void 0, false, {\n                                    fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"mb-3 text-xl font-bold text-slate-400\",\n                                    children: patient.paddress\n                                }, void 0, false, {\n                                    fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-normal text-white\",\n                                    children: patient.report\n                                }, void 0, false, {\n                                    fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-normal text-slate-400\",\n                                    children: patient.treatment\n                                }, void 0, false, {\n                                    fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-normal text-emerald-400 text-clip overflow-hidden\",\n                                    children: [\n                                        \"Submitted by \",\n                                        patient.author\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, _this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"opacity-40 text-2xl flex h-24 w-full items-center justify-center\",\n                children: \"Powered By Ethereum\"\n            }, void 0, false, {\n                fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/media/rachit/DATA/medfile/dapp/pages/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"aVxn7NuvRgqeVUGftN7EmHw5JA0=\", false, function() {\n    return [\n        _hooks_useMedfile__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dDQUFDZ0IsT0FBTyxDQUFDTyxNQUFNOzs7Ozs7eUNBQUs7Ozs7OztpQ0FDbkc7cUJBQ1AsQ0FBQzs7Ozs7O29CQUNHOzBCQUVQLDhEQUFDQyxRQUFNO2dCQUFDeEIsU0FBUyxFQUFDLGtFQUFrRTswQkFBQyxxQkFFckY7Ozs7O29CQUFTOzs7Ozs7WUFDTCxDQUNOO0NBQ0g7R0FyQ3VCUixJQUFJOztRQUN5Q0QseURBQVU7OztBQUR2REMsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbic7XG5pbXBvcnQgU2lnblVwRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1NpZ25VcEZvcm0nO1xuaW1wb3J0IFBhdGllbnRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUGF0aWVudEZvcm0nO1xuaW1wb3J0IHVzZUR3aXR0ZXIgZnJvbSAnLi4vaG9va3MvdXNlTWVkZmlsZSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgeyBjb25uZWN0LCBhY2NvdW50LCB1c2VyLCBjcmVhdGVVc2VyLHBvc3RQYXRpZW50LHBhdGllbnRzfSA9IHVzZUR3aXR0ZXIoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHAtMSBiZy1ibGFja1wiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NZWRmaWxlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCJodHRwczovL3d3dy5waW50ZXJlc3QuY29tL3Bpbi83MDUzMDU5OTE2Mzc5NzI1MTgvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgZmxleC0xIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweC0yMFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItOFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm9wYWNpdHktODAgZHJvcC1zaGFkb3ctMnhsIGZvbnQtZXh0cmFib2xkIHRleHQtdHJhbnNwYXJlbnQgdGV4dC02eGwgYmctY2xpcC10ZXh0IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi00MDAgdG8tdGVhbC00MDBcIj5NZWRmaWxlIDwvc3Bhbj5cbiAgICAgICAgPC9oMT5cblxuICAgICAgICB7IWFjY291bnQgPyAoXG4gICAgICAgICAgPEJ1dHRvbiBsYWJlbD1cIkNvbm5lY3Qgd2l0aCBFdGhlcmV1bVwiIG9uQ2xpY2s9e2Nvbm5lY3R9IC8+XG4gICAgICAgICkgOiBhY2NvdW50LnRvVXBwZXJDYXNlKCkgIT09IHVzZXI/LndhbGxldC50b1VwcGVyQ2FzZSgpID8gKDxTaWduVXBGb3JtIGNyZWF0ZVVzZXI9e2NyZWF0ZVVzZXJ9IC8+KSA6ICg8PlxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAgbS0xMCc+SGkge3VzZXI/LnBvc3R9IHt1c2VyPy5uYW1lfTwvcD5cbiAgICAgICAgPFBhdGllbnRGb3JtIHBvc3RQYXRpZW50PXtwb3N0UGF0aWVudH0vPjwvPil9XG4gICAgICAgIHtwYXRpZW50cy5tYXAocGF0aWVudD0+KFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgbS02IHAtNiB3LTgwIGJnLWJsYWNrIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci1ncmF5LTgwMCBzaGFkb3ctbWRcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0xIHRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+e3BhdGllbnQucG5hbWV9PC9oNT5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtYi0xIHRleHQteGwgZm9udC1ib2xkIHRleHQtc2xhdGUtNDAwXCI+e3BhdGllbnQucHBub308L2g1PlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTMgdGV4dC14bCBmb250LWJvbGQgdGV4dC1zbGF0ZS00MDBcIj57cGF0aWVudC5wYWRkcmVzc308L2g1PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC13aGl0ZVwiPntwYXRpZW50LnJlcG9ydH08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LXNsYXRlLTQwMFwiPntwYXRpZW50LnRyZWF0bWVudH08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb250LW5vcm1hbCB0ZXh0LWVtZXJhbGQtNDAwIHRleHQtY2xpcCBvdmVyZmxvdy1oaWRkZW5cIj5TdWJtaXR0ZWQgYnkge3BhdGllbnQuYXV0aG9yfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwib3BhY2l0eS00MCB0ZXh0LTJ4bCBmbGV4IGgtMjQgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICBQb3dlcmVkIEJ5IEV0aGVyZXVtXG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiSGVhZCIsIkJ1dHRvbiIsIlNpZ25VcEZvcm0iLCJQYXRpZW50Rm9ybSIsInVzZUR3aXR0ZXIiLCJIb21lIiwiY29ubmVjdCIsImFjY291bnQiLCJ1c2VyIiwiY3JlYXRlVXNlciIsInBvc3RQYXRpZW50IiwicGF0aWVudHMiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwic3BhbiIsImxhYmVsIiwib25DbGljayIsInRvVXBwZXJDYXNlIiwid2FsbGV0IiwicCIsInBvc3QiLCJuYW1lIiwibWFwIiwicGF0aWVudCIsImg1IiwicG5hbWUiLCJwcG5vIiwicGFkZHJlc3MiLCJyZXBvcnQiLCJ0cmVhdG1lbnQiLCJhdXRob3IiLCJmb290ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});