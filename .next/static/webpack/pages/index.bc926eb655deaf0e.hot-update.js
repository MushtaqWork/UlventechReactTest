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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Textfield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Textfield */ \"./components/Textfield.tsx\");\n/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Select */ \"./components/Select.tsx\");\n/* harmony import */ var _components_TextArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TextArea */ \"./components/TextArea.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var _state_actions_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state/actions/action */ \"./state/actions/action.tsx\");\n/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/AppBar */ \"./components/AppBar.tsx\");\n/* harmony import */ var _components_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/progress */ \"./components/progress.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Form() {\n    var _data_data;\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{\n        var _state_fields;\n        return state === null || state === void 0 ? void 0 : (_state_fields = state.fields) === null || _state_fields === void 0 ? void 0 : _state_fields.data;\n    });\n    const updatedData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{\n        var _state_fields;\n        return state === null || state === void 0 ? void 0 : (_state_fields = state.fields) === null || _state_fields === void 0 ? void 0 : _state_fields.updatedData;\n    });\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const updateEndPoint = \"https://ulventech-react-exam.netlify.app/api/form\";\n    const [update, setUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.data);\n    const [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const changeHandler = (name, value)=>{\n        setUpdate({\n            ...update,\n            [name]: value\n        });\n    };\n    const submitHandler = async (event)=>{\n        event.preventDefault();\n        console.log(\"update\", update);\n        let updated = await axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].post(updateEndPoint, update);\n        dispatch((0,_state_actions_action__WEBPACK_IMPORTED_MODULE_7__.updateData)(updated));\n        setSubmitted(true);\n    };\n    console.log(\"updatedData\", JSON.stringify(updatedData));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Dynamic Form\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    !data || data.length < 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_progress__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.map((value, index)=>{\n                                if (value.type == \"text\" || value.type == \"email\" || value.type == \"number\") {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Textfield__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            value: value.value,\n                                            fieldName: value.fieldName,\n                                            change: changeHandler,\n                                            type: value.type,\n                                            height: \"330px\",\n                                            children: value.value\n                                        }, void 0, false, {\n                                            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false);\n                                } else if (value.type == \"multiline\") {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TextArea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            value: value.value,\n                                            change: changeHandler,\n                                            fieldName: value.fieldName,\n                                            children: value.value\n                                        }, void 0, false, {\n                                            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false);\n                                } else {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Select__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            options: value.options,\n                                            fieldName: value.fieldName,\n                                            value: value.value,\n                                            change: changeHandler\n                                        }, void 0, false, {\n                                            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                            lineNumber: 82,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false);\n                                }\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"btn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    submitHandler: submitHandler\n                                }, void 0, false, {\n                                    fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            submitted && updatedData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Response\"\n                            }, void 0, false, {\n                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \" \",\n                                    updatedData.toString(),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                    lineNumber: 101,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"G7/SW/x2fBJhfPhmpNNRDMc65JU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTswQ0FDYiw0RUFBQzVCLDBEQUFXQTtvQ0FBQ2tCLGVBQWVBOzs7Ozs7Ozs7Ozs7b0NBR2pDOzs7Ozs7O1lBRUZMLGFBQ0NMLDZCQUNFOzBCQUNFLDRFQUFDbUI7b0JBQUlDLFdBQVU7OEJBQ2I7OzBDQUNFLDhEQUFDQzswQ0FBRzs7Ozs7OzBDQUVKLDhEQUFDUzs7b0NBQUU7b0NBQUU5QixZQUFZK0IsUUFBUTtvQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzVDLENBQUM7R0E3RnVCbkM7O1FBQ1RULG9EQUFXQTtRQUNKQSxvREFBV0E7UUFDZEMsb0RBQVdBOzs7S0FITlEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybS50c3g/MGRiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQmFzaWNUZXh0RmllbGRzIGZyb20gXCIuLi9jb21wb25lbnRzL1RleHRmaWVsZFwiO1xuaW1wb3J0IEJhc2ljU2VsZWN0IGZyb20gXCIuLi9jb21wb25lbnRzL1NlbGVjdFwiO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gXCIuLi9jb21wb25lbnRzL1RleHRBcmVhXCI7XG5pbXBvcnQgQmFzaWNCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgeyB1cGRhdGVEYXRhIH0gZnJvbSBcIi4uL3N0YXRlL2FjdGlvbnMvYWN0aW9uXCI7XG5pbXBvcnQgQnV0dG9uQXBwQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL0FwcEJhclwiO1xuaW1wb3J0IENpcmN1bGFySW5kZXRlcm1pbmF0ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9ncmVzc1wiO1xuXG5pbnRlcmZhY2UgSURhdGEge1xuICBmaWVsZE5hbWU6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBvcHRpb25zPzogQXJyYXk8c3RyaW5nPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZT8uZmllbGRzPy5kYXRhKTtcbiAgY29uc3QgdXBkYXRlZERhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGU/LmZpZWxkcz8udXBkYXRlZERhdGEpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHVwZGF0ZUVuZFBvaW50ID0gXCJodHRwczovL3VsdmVudGVjaC1yZWFjdC1leGFtLm5ldGxpZnkuYXBwL2FwaS9mb3JtXCI7XG4gIGNvbnN0IFt1cGRhdGUsIHNldFVwZGF0ZV0gPSB1c2VTdGF0ZShkYXRhLmRhdGEpO1xuICBjb25zdCBbc3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSAobmFtZTogYW55LCB2YWx1ZTogYW55KSA9PiB7XG4gICAgc2V0VXBkYXRlKHsgLi4udXBkYXRlLCBbbmFtZV06IHZhbHVlIH0pO1xuICB9O1xuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnNvbGUubG9nKFwidXBkYXRlXCIsIHVwZGF0ZSk7XG4gICAgbGV0IHVwZGF0ZWQgPSBhd2FpdCBheGlvcy5wb3N0KHVwZGF0ZUVuZFBvaW50LCB1cGRhdGUpO1xuICAgIGRpc3BhdGNoKHVwZGF0ZURhdGEodXBkYXRlZCkpO1xuICAgIHNldFN1Ym1pdHRlZCh0cnVlKTtcbiAgfTtcbmNvbnNvbGUubG9nKFwidXBkYXRlZERhdGFcIixKU09OLnN0cmluZ2lmeSh1cGRhdGVkRGF0YSkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICA8QnV0dG9uQXBwQmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8aDQ+RHluYW1pYyBGb3JtPC9oND5cbiAgICAgICAgeyFkYXRhIHx8IGRhdGEubGVuZ3RoIDwgMSA/IChcbiAgICAgICAgICA8Q2lyY3VsYXJJbmRldGVybWluYXRlIC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHtkYXRhPy5kYXRhPy5tYXAoKHZhbHVlOiBJRGF0YSwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdmFsdWUudHlwZSA9PSBcInRleHRcIiB8fFxuICAgICAgICAgICAgICAgIHZhbHVlLnR5cGUgPT0gXCJlbWFpbFwiIHx8XG4gICAgICAgICAgICAgICAgdmFsdWUudHlwZSA9PSBcIm51bWJlclwiXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8QmFzaWNUZXh0RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17dmFsdWUuZmllbGROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZT17Y2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPXt2YWx1ZS50eXBlfVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMzMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9CYXNpY1RleHRGaWVsZHM+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnR5cGUgPT0gXCJtdWx0aWxpbmVcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEFyZWFcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlPXtjaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17dmFsdWUuZmllbGROYW1lfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICA8L1RleHRBcmVhPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPEJhc2ljU2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dmFsdWUub3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e3ZhbHVlLmZpZWxkTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlPXtjaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0blwiPlxuICAgICAgICAgICAgICA8QmFzaWNCdXR0b24gc3VibWl0SGFuZGxlcj17c3VibWl0SGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7c3VibWl0dGVkICYmXG4gICAgICAgIHVwZGF0ZWREYXRhICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICA8aDQ+UmVzcG9uc2U8L2g0PlxuXG4gICAgICAgICAgICAgICAgPHA+IHt1cGRhdGVkRGF0YS50b1N0cmluZygpfSA8L3A+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJCYXNpY1RleHRGaWVsZHMiLCJCYXNpY1NlbGVjdCIsIlRleHRBcmVhIiwiQmFzaWNCdXR0b24iLCJ1cGRhdGVEYXRhIiwiQnV0dG9uQXBwQmFyIiwiQ2lyY3VsYXJJbmRldGVybWluYXRlIiwiRm9ybSIsImRhdGEiLCJzdGF0ZSIsImZpZWxkcyIsInVwZGF0ZWREYXRhIiwiZGlzcGF0Y2giLCJ1cGRhdGVFbmRQb2ludCIsInVwZGF0ZSIsInNldFVwZGF0ZSIsInN1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsImNoYW5nZUhhbmRsZXIiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ1cGRhdGVkIiwicG9zdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsImxlbmd0aCIsIm1hcCIsImluZGV4IiwidHlwZSIsImZpZWxkTmFtZSIsImNoYW5nZSIsImhlaWdodCIsIm9wdGlvbnMiLCJwIiwidG9TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/form.tsx\n"));

/***/ })

});