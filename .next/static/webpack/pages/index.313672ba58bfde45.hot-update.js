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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Textfield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Textfield */ \"./components/Textfield.tsx\");\n/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Select */ \"./components/Select.tsx\");\n/* harmony import */ var _components_TextArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TextArea */ \"./components/TextArea.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var _state_actions_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state/actions/action */ \"./state/actions/action.tsx\");\n/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/AppBar */ \"./components/AppBar.tsx\");\n/* harmony import */ var _components_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/progress */ \"./components/progress.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Form() {\n    var _data_data;\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{\n        var _state_fields;\n        return state === null || state === void 0 ? void 0 : (_state_fields = state.fields) === null || _state_fields === void 0 ? void 0 : _state_fields.data;\n    });\n    const updatedData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{\n        var _state_fields;\n        return state === null || state === void 0 ? void 0 : (_state_fields = state.fields) === null || _state_fields === void 0 ? void 0 : _state_fields.updatedData;\n    });\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const updateEndPoint = \"https://ulventech-react-exam.netlify.app/api/form\";\n    const [update, setUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.data);\n    const [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const changeHandler = (name, value)=>{\n        setUpdate({\n            ...update,\n            [name]: value\n        });\n    };\n    const submitHandler = async (event)=>{\n        event.preventDefault();\n        console.log(\"update\", update);\n        let updated = await axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].post(updateEndPoint, update);\n        dispatch((0,_state_actions_action__WEBPACK_IMPORTED_MODULE_7__.updateData)(updated));\n        setSubmitted(true);\n    };\n    // console.log(\"updatedData\",`\"${updatedData}\"`);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Dynamic Form\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    !data || data.length < 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_progress__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.map((value, index)=>{\n                                if (value.type == \"text\" || value.type == \"email\" || value.type == \"number\") {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Textfield__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            value: value.value,\n                                            fieldName: value.fieldName,\n                                            change: changeHandler,\n                                            type: value.type,\n                                            height: \"330px\",\n                                            children: value.value\n                                        }, void 0, false, {\n                                            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false);\n                                } else if (value.type == \"multiline\") {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TextArea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            value: value.value,\n                                            change: changeHandler,\n                                            fieldName: value.fieldName,\n                                            children: value.value\n                                        }, void 0, false, {\n                                            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false);\n                                } else {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Select__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            options: value.options,\n                                            fieldName: value.fieldName,\n                                            value: value.value,\n                                            change: changeHandler\n                                        }, void 0, false, {\n                                            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false);\n                                }\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"btn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    submitHandler: submitHandler\n                                }, void 0, false, {\n                                    fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            submitted && updatedData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Response\"\n                            }, void 0, false, {\n                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \" \",\n                                    updatedData.toString(),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"G7/SW/x2fBJhfPhmpNNRDMc65JU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akM7Ozs7Ozs7WUFFRkwsYUFDQ0wsNkJBQ0U7MEJBQ0UsNEVBQUNpQjtvQkFBSUMsV0FBVTs4QkFDYjs7MENBQ0UsOERBQUNDOzBDQUFHOzs7Ozs7MENBRUosOERBQUNTOztvQ0FBRTtvQ0FBRTVCLFlBQVk2QixRQUFRO29DQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUMsQ0FBQztHQTdGdUJqQzs7UUFDVFQsb0RBQVdBO1FBQ0pBLG9EQUFXQTtRQUNkQyxvREFBV0E7OztLQUhOUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mb3JtLnRzeD8wZGJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBCYXNpY1RleHRGaWVsZHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGV4dGZpZWxkXCI7XG5pbXBvcnQgQmFzaWNTZWxlY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VsZWN0XCI7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGV4dEFyZWFcIjtcbmltcG9ydCBCYXNpY0J1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IHVwZGF0ZURhdGEgfSBmcm9tIFwiLi4vc3RhdGUvYWN0aW9ucy9hY3Rpb25cIjtcbmltcG9ydCBCdXR0b25BcHBCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwQmFyXCI7XG5pbXBvcnQgQ2lyY3VsYXJJbmRldGVybWluYXRlIGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2dyZXNzXCI7XG5cbmludGVyZmFjZSBJRGF0YSB7XG4gIGZpZWxkTmFtZTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIG9wdGlvbnM/OiBBcnJheTxzdHJpbmc+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKCkge1xuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlPy5maWVsZHM/LmRhdGEpO1xuICBjb25zdCB1cGRhdGVkRGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZT8uZmllbGRzPy51cGRhdGVkRGF0YSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgdXBkYXRlRW5kUG9pbnQgPSBcImh0dHBzOi8vdWx2ZW50ZWNoLXJlYWN0LWV4YW0ubmV0bGlmeS5hcHAvYXBpL2Zvcm1cIjtcbiAgY29uc3QgW3VwZGF0ZSwgc2V0VXBkYXRlXSA9IHVzZVN0YXRlKGRhdGEuZGF0YSk7XG4gIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChuYW1lOiBhbnksIHZhbHVlOiBhbnkpID0+IHtcbiAgICBzZXRVcGRhdGUoeyAuLi51cGRhdGUsIFtuYW1lXTogdmFsdWUgfSk7XG4gIH07XG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJ1cGRhdGVcIiwgdXBkYXRlKTtcbiAgICBsZXQgdXBkYXRlZCA9IGF3YWl0IGF4aW9zLnBvc3QodXBkYXRlRW5kUG9pbnQsIHVwZGF0ZSk7XG4gICAgZGlzcGF0Y2godXBkYXRlRGF0YSh1cGRhdGVkKSk7XG4gICAgc2V0U3VibWl0dGVkKHRydWUpO1xuICB9O1xuLy8gY29uc29sZS5sb2coXCJ1cGRhdGVkRGF0YVwiLGBcIiR7dXBkYXRlZERhdGF9XCJgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPEJ1dHRvbkFwcEJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGg0PkR5bmFtaWMgRm9ybTwvaDQ+XG4gICAgICAgIHshZGF0YSB8fCBkYXRhLmxlbmd0aCA8IDEgPyAoXG4gICAgICAgICAgPENpcmN1bGFySW5kZXRlcm1pbmF0ZSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7ZGF0YT8uZGF0YT8ubWFwKCh2YWx1ZTogSURhdGEsIGluZGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHZhbHVlLnR5cGUgPT0gXCJ0ZXh0XCIgfHxcbiAgICAgICAgICAgICAgICB2YWx1ZS50eXBlID09IFwiZW1haWxcIiB8fFxuICAgICAgICAgICAgICAgIHZhbHVlLnR5cGUgPT0gXCJudW1iZXJcIlxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPEJhc2ljVGV4dEZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e3ZhbHVlLmZpZWxkTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT17dmFsdWUudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMzBweFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIDwvQmFzaWNUZXh0RmllbGRzPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS50eXBlID09IFwibXVsdGlsaW5lXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZT17Y2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e3ZhbHVlLmZpZWxkTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0QXJlYT5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxCYXNpY1NlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3ZhbHVlLm9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXt2YWx1ZS5maWVsZE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZT17Y2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5cIj5cbiAgICAgICAgICAgICAgPEJhc2ljQnV0dG9uIHN1Ym1pdEhhbmRsZXI9e3N1Ym1pdEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAge3N1Ym1pdHRlZCAmJlxuICAgICAgICB1cGRhdGVkRGF0YSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGg0PlJlc3BvbnNlPC9oND5cblxuICAgICAgICAgICAgICAgIDxwPiB7dXBkYXRlZERhdGEudG9TdHJpbmcoKX0gPC9wPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiQmFzaWNUZXh0RmllbGRzIiwiQmFzaWNTZWxlY3QiLCJUZXh0QXJlYSIsIkJhc2ljQnV0dG9uIiwidXBkYXRlRGF0YSIsIkJ1dHRvbkFwcEJhciIsIkNpcmN1bGFySW5kZXRlcm1pbmF0ZSIsIkZvcm0iLCJkYXRhIiwic3RhdGUiLCJmaWVsZHMiLCJ1cGRhdGVkRGF0YSIsImRpc3BhdGNoIiwidXBkYXRlRW5kUG9pbnQiLCJ1cGRhdGUiLCJzZXRVcGRhdGUiLCJzdWJtaXR0ZWQiLCJzZXRTdWJtaXR0ZWQiLCJjaGFuZ2VIYW5kbGVyIiwibmFtZSIsInZhbHVlIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidXBkYXRlZCIsInBvc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsImxlbmd0aCIsIm1hcCIsImluZGV4IiwidHlwZSIsImZpZWxkTmFtZSIsImNoYW5nZSIsImhlaWdodCIsIm9wdGlvbnMiLCJwIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/form.tsx\n"));

/***/ })

});