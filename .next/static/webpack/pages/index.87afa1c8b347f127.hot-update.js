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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Textfield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Textfield */ \"./components/Textfield.tsx\");\n/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Select */ \"./components/Select.tsx\");\n/* harmony import */ var _components_TextArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TextArea */ \"./components/TextArea.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var _state_actions_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state/actions/action */ \"./state/actions/action.tsx\");\n/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/AppBar */ \"./components/AppBar.tsx\");\n/* harmony import */ var _components_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/progress */ \"./components/progress.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Form() {\n    var _data_data;\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{\n        var _state_fields;\n        return state === null || state === void 0 ? void 0 : (_state_fields = state.fields) === null || _state_fields === void 0 ? void 0 : _state_fields.data;\n    });\n    const updatedData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{\n        var _state_fields;\n        return state === null || state === void 0 ? void 0 : (_state_fields = state.fields) === null || _state_fields === void 0 ? void 0 : _state_fields.updatedData;\n    });\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const updateEndPoint = \"https://ulventech-react-exam.netlify.app/api/form\";\n    const [update, setUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.data);\n    const [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const changeHandler = (name, value)=>{\n        setUpdate({\n            ...update,\n            ...{\n                [name]: value\n            }\n        });\n    };\n    const submitHandler = async (event)=>{\n        event.preventDefault();\n        console.log(event.target[0]);\n        console.log(event.target.elements.username);\n        console.log(event.target.username);\n    // let updated = await axios.post(updateEndPoint, update);\n    // dispatch(updateData(updated));\n    // setSubmitted(true);\n    };\n    console.log(\"update\", update);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: submitHandler,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"main\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: \"Dynamic Form\"\n                        }, void 0, false, {\n                            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 9\n                        }, this),\n                        !data || data.length < 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_progress__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.map((value, index)=>{\n                                    if (value.type == \"text\" || value.type == \"email\" || value.type == \"number\") {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Textfield__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                value: value.value,\n                                                fieldName: value.fieldName,\n                                                change: changeHandler,\n                                                type: value.type,\n                                                height: \"330px\",\n                                                children: value.value\n                                            }, void 0, false, {\n                                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false);\n                                    } else if (value.type == \"multiline\") {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TextArea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                value: value.value,\n                                                change: changeHandler,\n                                                fieldName: value.fieldName,\n                                                children: value.value\n                                            }, void 0, false, {\n                                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                                lineNumber: 74,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false);\n                                    } else {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Select__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                                options: value.options,\n                                                fieldName: value.fieldName,\n                                                value: value.value,\n                                                change: changeHandler\n                                            }, void 0, false, {\n                                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false);\n                                    }\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"btn\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        submitHandler: submitHandler\n                                    }, void 0, false, {\n                                        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 7\n                }, this),\n                submitted && updatedData && (0,_state_actions_action__WEBPACK_IMPORTED_MODULE_7__.updateData)(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Response\"\n                            }, void 0, false, {\n                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false)\n                    }, void 0, false, {\n                        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false))\n            ]\n        }, void 0, true, {\n            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n            lineNumber: 44,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"G7/SW/x2fBJhfPhmpNNRDMc65JU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTO2dEQUMxQmxCLE9BQU9BLE1BQU1BLEtBQUs7Z0RBQ2xCbUIsUUFBUXJCOzs7Ozs7O29DQUloQixDQUFDO2dDQUNIOzhDQUNBLDhEQUFDYTtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQzdCLDBEQUFXQTt3Q0FBQ2tCLGVBQWVBOzs7Ozs7Ozs7Ozs7d0NBR2pDOzs7Ozs7O2dCQUVGTCxhQUNDTCxlQUNBUCxpRUFBVUEsZUFDUjs4QkFDRSw0RUFBQzJCO3dCQUFJQyxXQUFVO2tDQUNiO3NDQUNFLDRFQUFDQzswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVXBCLENBQUM7R0FuR3VCMUI7O1FBQ1RULG9EQUFXQTtRQUNKQSxvREFBV0E7UUFDZEMsb0RBQVdBOzs7S0FITlEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybS50c3g/MGRiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQmFzaWNUZXh0RmllbGRzIGZyb20gXCIuLi9jb21wb25lbnRzL1RleHRmaWVsZFwiO1xuaW1wb3J0IEJhc2ljU2VsZWN0IGZyb20gXCIuLi9jb21wb25lbnRzL1NlbGVjdFwiO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gXCIuLi9jb21wb25lbnRzL1RleHRBcmVhXCI7XG5pbXBvcnQgQmFzaWNCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgeyB1cGRhdGVEYXRhIH0gZnJvbSBcIi4uL3N0YXRlL2FjdGlvbnMvYWN0aW9uXCI7XG5pbXBvcnQgQnV0dG9uQXBwQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL0FwcEJhclwiO1xuaW1wb3J0IENpcmN1bGFySW5kZXRlcm1pbmF0ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9ncmVzc1wiO1xuXG5pbnRlcmZhY2UgSURhdGEge1xuICBmaWVsZE5hbWU6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBvcHRpb25zPzogQXJyYXk8c3RyaW5nPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZT8uZmllbGRzPy5kYXRhKTtcbiAgY29uc3QgdXBkYXRlZERhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGU/LmZpZWxkcz8udXBkYXRlZERhdGEpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHVwZGF0ZUVuZFBvaW50ID0gXCJodHRwczovL3VsdmVudGVjaC1yZWFjdC1leGFtLm5ldGxpZnkuYXBwL2FwaS9mb3JtXCI7XG4gIGNvbnN0IFt1cGRhdGUsIHNldFVwZGF0ZV0gPSB1c2VTdGF0ZShkYXRhLmRhdGEpO1xuICBjb25zdCBbc3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSAobmFtZTogYW55LCB2YWx1ZTogYW55KSA9PiB7XG4gICAgc2V0VXBkYXRlKHsgLi4udXBkYXRlLCAuLi57IFtuYW1lXTogdmFsdWUgfSB9KTtcbiAgfTtcbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IGFzeW5jIChldmVudDogYW55KSA9PiB7XG5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuY29uc29sZS5sb2coZXZlbnQudGFyZ2V0WzBdKVxuY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmVsZW1lbnRzLnVzZXJuYW1lKVxuY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnVzZXJuYW1lKVxuICAgIC8vIGxldCB1cGRhdGVkID0gYXdhaXQgYXhpb3MucG9zdCh1cGRhdGVFbmRQb2ludCwgdXBkYXRlKTtcbiAgICAvLyBkaXNwYXRjaCh1cGRhdGVEYXRhKHVwZGF0ZWQpKTtcbiAgICAvLyBzZXRTdWJtaXR0ZWQodHJ1ZSk7XG4gIH07XG4gIGNvbnNvbGUubG9nKFwidXBkYXRlXCIsIHVwZGF0ZSk7XG4gIFxuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPEJ1dHRvbkFwcEJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGg0PkR5bmFtaWMgRm9ybTwvaDQ+XG4gICAgICAgIHshZGF0YSB8fCBkYXRhLmxlbmd0aCA8IDEgPyAoXG4gICAgICAgICAgPENpcmN1bGFySW5kZXRlcm1pbmF0ZSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7ZGF0YT8uZGF0YT8ubWFwKCh2YWx1ZTogSURhdGEsIGluZGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHZhbHVlLnR5cGUgPT0gXCJ0ZXh0XCIgfHxcbiAgICAgICAgICAgICAgICB2YWx1ZS50eXBlID09IFwiZW1haWxcIiB8fFxuICAgICAgICAgICAgICAgIHZhbHVlLnR5cGUgPT0gXCJudW1iZXJcIlxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPEJhc2ljVGV4dEZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e3ZhbHVlLmZpZWxkTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT17dmFsdWUudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMzBweFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIDwvQmFzaWNUZXh0RmllbGRzPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS50eXBlID09IFwibXVsdGlsaW5lXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZT17Y2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e3ZhbHVlLmZpZWxkTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0QXJlYT5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxCYXNpY1NlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3ZhbHVlLm9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXt2YWx1ZS5maWVsZE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZT17Y2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5cIj5cbiAgICAgICAgICAgICAgPEJhc2ljQnV0dG9uIHN1Ym1pdEhhbmRsZXI9e3N1Ym1pdEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAge3N1Ym1pdHRlZCAmJlxuICAgICAgICB1cGRhdGVkRGF0YSAmJlxuICAgICAgICB1cGRhdGVEYXRhKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxoND5SZXNwb25zZTwvaDQ+XG5cbiAgICAgICAgICAgICAgICB7LyogPHA+IHtteUpTT059IDwvcD4gKi99XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsIkJhc2ljVGV4dEZpZWxkcyIsIkJhc2ljU2VsZWN0IiwiVGV4dEFyZWEiLCJCYXNpY0J1dHRvbiIsInVwZGF0ZURhdGEiLCJCdXR0b25BcHBCYXIiLCJDaXJjdWxhckluZGV0ZXJtaW5hdGUiLCJGb3JtIiwiZGF0YSIsInN0YXRlIiwiZmllbGRzIiwidXBkYXRlZERhdGEiLCJkaXNwYXRjaCIsInVwZGF0ZUVuZFBvaW50IiwidXBkYXRlIiwic2V0VXBkYXRlIiwic3VibWl0dGVkIiwic2V0U3VibWl0dGVkIiwiY2hhbmdlSGFuZGxlciIsIm5hbWUiLCJ2YWx1ZSIsInN1Ym1pdEhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsImVsZW1lbnRzIiwidXNlcm5hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsImxlbmd0aCIsIm1hcCIsImluZGV4IiwidHlwZSIsImZpZWxkTmFtZSIsImNoYW5nZSIsImhlaWdodCIsIm9wdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/form.tsx\n"));

/***/ })

});