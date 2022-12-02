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

/***/ "./pages/form.tsx":
/*!************************!*\
  !*** ./pages/form.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Textfield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Textfield */ \"./components/Textfield.tsx\");\n/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Select */ \"./components/Select.tsx\");\n/* harmony import */ var _components_TextArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TextArea */ \"./components/TextArea.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var _state_actions_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state/actions/action */ \"./state/actions/action.tsx\");\n/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/AppBar */ \"./components/AppBar.tsx\");\n/* harmony import */ var _components_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/progress */ \"./components/progress.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Form() {\n    var _data_data;\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{\n        var _state_fields;\n        return state === null || state === void 0 ? void 0 : (_state_fields = state.fields) === null || _state_fields === void 0 ? void 0 : _state_fields.data;\n    });\n    const updatedData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{\n        var _state_fields;\n        return state === null || state === void 0 ? void 0 : (_state_fields = state.fields) === null || _state_fields === void 0 ? void 0 : _state_fields.updatedData;\n    });\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const updateEndPoint = \"https://ulventech-react-exam.netlify.app/api/form\";\n    const [update, setUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.data);\n    const [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const changeHandler = (name, value)=>{\n        setUpdate({\n            ...update,\n            ...{\n                [name]: value\n            }\n        });\n    };\n    const submitHandler = async (e)=>{\n        e.preventDefault();\n        console.log(\"clicked\", e.target[0].value);\n    // let updated = await axios.post(updateEndPoint, update);\n    // dispatch(updateData(updated));\n    // setSubmitted(true);\n    };\n    console.log(\"update\", update);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: submitHandler,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"main\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: \"Dynamic Form\"\n                        }, void 0, false, {\n                            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 9\n                        }, this),\n                        !data || data.length < 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_progress__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.map((value, index)=>{\n                                    if (value.type == \"text\" || value.type == \"email\" || value.type == \"number\") {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Textfield__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                value: value.value,\n                                                fieldName: value.fieldName,\n                                                change: changeHandler,\n                                                type: value.type,\n                                                height: \"330px\",\n                                                children: value.value\n                                            }, void 0, false, {\n                                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false);\n                                    } else if (value.type == \"multiline\") {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TextArea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                value: value.value,\n                                                change: changeHandler,\n                                                fieldName: value.fieldName,\n                                                children: value.value\n                                            }, void 0, false, {\n                                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false);\n                                    } else {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Select__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                options: value.options,\n                                                fieldName: value.fieldName,\n                                                value: value.value,\n                                                change: changeHandler\n                                            }, void 0, false, {\n                                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                                lineNumber: 84,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false);\n                                    }\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"btn\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        submitHandler: submitHandler\n                                    }, void 0, false, {\n                                        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 7\n                }, this),\n                submitted && updatedData && (0,_state_actions_action__WEBPACK_IMPORTED_MODULE_7__.updateData)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Response\"\n                            }, void 0, false, {\n                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                lineNumber: 106,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                        lineNumber: 104,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false))\n            ]\n        }, void 0, true, {\n            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n            lineNumber: 42,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"G7/SW/x2fBJhfPhmpNNRDMc65JU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2IsNEVBQUMzQiwwREFBV0E7d0NBQUNrQixlQUFlQTs7Ozs7Ozs7Ozs7O3dDQUdqQzs7Ozs7OztnQkFFRkwsYUFDQ0wsZUFDQVAsaUVBQVVBLGVBQ1I7OEJBQ0UsNEVBQUN5Qjt3QkFBSUMsV0FBVTtrQ0FDYjtzQ0FDRSw0RUFBQ0M7MENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVVwQixDQUFDO0dBakd1QnhCOztRQUNUVCxvREFBV0E7UUFDSkEsb0RBQVdBO1FBQ2RDLG9EQUFXQTs7O0tBSE5RIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Zvcm0udHN4PzBkYmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEJhc2ljVGV4dEZpZWxkcyBmcm9tIFwiLi4vY29tcG9uZW50cy9UZXh0ZmllbGRcIjtcbmltcG9ydCBCYXNpY1NlbGVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWxlY3RcIjtcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiLi4vY29tcG9uZW50cy9UZXh0QXJlYVwiO1xuaW1wb3J0IEJhc2ljQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IHsgdXBkYXRlRGF0YSB9IGZyb20gXCIuLi9zdGF0ZS9hY3Rpb25zL2FjdGlvblwiO1xuaW1wb3J0IEJ1dHRvbkFwcEJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBCYXJcIjtcbmltcG9ydCBDaXJjdWxhckluZGV0ZXJtaW5hdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvZ3Jlc3NcIjtcblxuaW50ZXJmYWNlIElEYXRhIHtcbiAgZmllbGROYW1lOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgb3B0aW9ucz86IEFycmF5PHN0cmluZz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0oKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGU/LmZpZWxkcz8uZGF0YSk7XG4gIGNvbnN0IHVwZGF0ZWREYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlPy5maWVsZHM/LnVwZGF0ZWREYXRhKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB1cGRhdGVFbmRQb2ludCA9IFwiaHR0cHM6Ly91bHZlbnRlY2gtcmVhY3QtZXhhbS5uZXRsaWZ5LmFwcC9hcGkvZm9ybVwiO1xuICBjb25zdCBbdXBkYXRlLCBzZXRVcGRhdGVdID0gdXNlU3RhdGUoZGF0YS5kYXRhKTtcbiAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcblxuICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gKG5hbWU6IGFueSwgdmFsdWU6IGFueSkgPT4ge1xuICAgIHNldFVwZGF0ZSh7IC4uLnVwZGF0ZSwgLi4ueyBbbmFtZV06IHZhbHVlIH0gfSk7XG4gIH07XG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZTogYW55KSA9PiB7XG5lLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJjbGlja2VkXCIsIGUudGFyZ2V0WzBdLnZhbHVlKTtcbiAgICAvLyBsZXQgdXBkYXRlZCA9IGF3YWl0IGF4aW9zLnBvc3QodXBkYXRlRW5kUG9pbnQsIHVwZGF0ZSk7XG4gICAgLy8gZGlzcGF0Y2godXBkYXRlRGF0YSh1cGRhdGVkKSk7XG4gICAgLy8gc2V0U3VibWl0dGVkKHRydWUpO1xuICB9O1xuICBjb25zb2xlLmxvZyhcInVwZGF0ZVwiLCB1cGRhdGUpO1xuICBcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxCdXR0b25BcHBCYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoND5EeW5hbWljIEZvcm08L2g0PlxuICAgICAgICB7IWRhdGEgfHwgZGF0YS5sZW5ndGggPCAxID8gKFxuICAgICAgICAgIDxDaXJjdWxhckluZGV0ZXJtaW5hdGUgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge2RhdGE/LmRhdGE/Lm1hcCgodmFsdWU6IElEYXRhLCBpbmRleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB2YWx1ZS50eXBlID09IFwidGV4dFwiIHx8XG4gICAgICAgICAgICAgICAgdmFsdWUudHlwZSA9PSBcImVtYWlsXCIgfHxcbiAgICAgICAgICAgICAgICB2YWx1ZS50eXBlID09IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxCYXNpY1RleHRGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXt2YWx1ZS5maWVsZE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlPXtjaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3ZhbHVlLnR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzMwcHhcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICA8L0Jhc2ljVGV4dEZpZWxkcz5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudHlwZSA9PSBcIm11bHRpbGluZVwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXt2YWx1ZS5maWVsZE5hbWV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dEFyZWE+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8QmFzaWNTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt2YWx1ZS5vcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17dmFsdWUuZmllbGROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuXCI+XG4gICAgICAgICAgICAgIDxCYXNpY0J1dHRvbiBzdWJtaXRIYW5kbGVyPXtzdWJtaXRIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzdWJtaXR0ZWQgJiZcbiAgICAgICAgdXBkYXRlZERhdGEgJiZcbiAgICAgICAgdXBkYXRlRGF0YShcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aDQ+UmVzcG9uc2U8L2g0PlxuXG4gICAgICAgICAgICAgICAgey8qIDxwPiB7bXlKU09OfSA8L3A+ICovfVxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJCYXNpY1RleHRGaWVsZHMiLCJCYXNpY1NlbGVjdCIsIlRleHRBcmVhIiwiQmFzaWNCdXR0b24iLCJ1cGRhdGVEYXRhIiwiQnV0dG9uQXBwQmFyIiwiQ2lyY3VsYXJJbmRldGVybWluYXRlIiwiRm9ybSIsImRhdGEiLCJzdGF0ZSIsImZpZWxkcyIsInVwZGF0ZWREYXRhIiwiZGlzcGF0Y2giLCJ1cGRhdGVFbmRQb2ludCIsInVwZGF0ZSIsInNldFVwZGF0ZSIsInN1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsImNoYW5nZUhhbmRsZXIiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImZvcm0iLCJvblN1Ym1pdCIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwibGVuZ3RoIiwibWFwIiwiaW5kZXgiLCJ0eXBlIiwiZmllbGROYW1lIiwiY2hhbmdlIiwiaGVpZ2h0Iiwib3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/form.tsx\n"));

/***/ })

});