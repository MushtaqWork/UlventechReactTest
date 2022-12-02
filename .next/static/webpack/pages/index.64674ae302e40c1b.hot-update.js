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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Textfield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Textfield */ \"./components/Textfield.tsx\");\n/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Select */ \"./components/Select.tsx\");\n/* harmony import */ var _components_TextArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TextArea */ \"./components/TextArea.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var _state_actions_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state/actions/action */ \"./state/actions/action.tsx\");\n/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/AppBar */ \"./components/AppBar.tsx\");\n/* harmony import */ var _components_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/progress */ \"./components/progress.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Form() {\n    var _data_data;\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{\n        var _state_fields;\n        return state === null || state === void 0 ? void 0 : (_state_fields = state.fields) === null || _state_fields === void 0 ? void 0 : _state_fields.data;\n    });\n    const updatedData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{\n        var _state_fields;\n        return state === null || state === void 0 ? void 0 : (_state_fields = state.fields) === null || _state_fields === void 0 ? void 0 : _state_fields.updatedData;\n    });\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const updateEndPoint = \"https://ulventech-react-exam.netlify.app/api/form\";\n    const [update, setUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.data);\n    const [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //  returnedTarget = Object.assign(returnedTarget , {item?.fieldName: item?.value});\n    // console.log(returnedTarget);\n    let arr = data === null || data === void 0 ? void 0 : data.data;\n    console.log(arr);\n    const changeHandler = (name, value)=>{\n        const index = arr === null || arr === void 0 ? void 0 : arr.findIndex((object)=>{\n            return object.fieldName == name;\n        }); // 👉️ 1\n        console.log(\"index\", index);\n        if (index !== -1) {\n            arr[index].fieldName = name;\n        }\n    // setUpdate({ ...update, [name]: value });\n    };\n    const submitHandler = async (event)=>{\n        event.preventDefault();\n        console.log(\"update\", arr);\n        let updated = await axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].post(updateEndPoint, update);\n        dispatch((0,_state_actions_action__WEBPACK_IMPORTED_MODULE_7__.updateData)(updated));\n        setSubmitted(true);\n    };\n    console.log(\"Arr\", arr);\n    console.log(\"updatedData\", JSON.stringify(updatedData));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Dynamic Form\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    !data || data.length < 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_progress__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.map((value, index)=>{\n                                if (value.type == \"text\" || value.type == \"email\" || value.type == \"number\") {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Textfield__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            value: value.value,\n                                            fieldName: value.fieldName,\n                                            change: changeHandler,\n                                            type: value.type,\n                                            height: \"330px\",\n                                            children: value.value\n                                        }, void 0, false, {\n                                            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false);\n                                } else if (value.type == \"multiline\") {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TextArea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            value: value.value,\n                                            change: changeHandler,\n                                            fieldName: value.fieldName,\n                                            children: value.value\n                                        }, void 0, false, {\n                                            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false);\n                                } else {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Select__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            options: value.options,\n                                            fieldName: value.fieldName,\n                                            value: value.value,\n                                            change: changeHandler\n                                        }, void 0, false, {\n                                            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                            lineNumber: 103,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false);\n                                }\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"btn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    submitHandler: submitHandler\n                                }, void 0, false, {\n                                    fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            submitted && updatedData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Response\"\n                            }, void 0, false, {\n                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                lineNumber: 124,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \" \",\n                                    JSON.stringify(updatedData),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"G7/SW/x2fBJhfPhmpNNRDMc65JU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxxQkFDRTtrREFDRSw0RUFBQ3RDLDREQUFRQTs0Q0FDUHFCLE9BQU9BLE1BQU1BLEtBQUs7NENBQ2xCa0IsUUFBUXBCOzRDQUNSTSxXQUFXSixNQUFNSSxTQUFTO3NEQUV6QkosTUFBTUEsS0FBSzs7Ozs7OztnQ0FJcEIsT0FBTztvQ0FDTCxxQkFDRTtrREFDRSw0RUFBQ3RCLDBEQUFXQTs0Q0FDVjBDLFNBQVNwQixNQUFNb0IsT0FBTzs0Q0FDdEJoQixXQUFXSixNQUFNSSxTQUFTOzRDQUMxQkosT0FBT0EsTUFBTUEsS0FBSzs0Q0FDbEJrQixRQUFRcEI7Ozs7Ozs7Z0NBSWhCLENBQUM7NEJBQ0g7MENBQ0EsOERBQUNjO2dDQUFJQyxXQUFVOzBDQUNiLDRFQUFDakMsMERBQVdBO29DQUFDeUIsZUFBZUE7Ozs7Ozs7Ozs7OztvQ0FHakM7Ozs7Ozs7WUFFRlosYUFDQ0wsNkJBQ0U7MEJBQ0UsNEVBQUN3QjtvQkFBSUMsV0FBVTs4QkFDYjs7MENBQ0UsOERBQUNDOzBDQUFHOzs7Ozs7MENBRUosOERBQUNPOztvQ0FBRTtvQ0FBRVgsS0FBS0MsU0FBUyxDQUFDdkI7b0NBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qRCxDQUFDO0dBbEh1Qko7O1FBQ1RULG9EQUFXQTtRQUNKQSxvREFBV0E7UUFDZEMsb0RBQVdBOzs7S0FITlEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybS50c3g/MGRiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgQmFzaWNUZXh0RmllbGRzIGZyb20gXCIuLi9jb21wb25lbnRzL1RleHRmaWVsZFwiO1xuaW1wb3J0IEJhc2ljU2VsZWN0IGZyb20gXCIuLi9jb21wb25lbnRzL1NlbGVjdFwiO1xuaW1wb3J0IFRleHRBcmVhIGZyb20gXCIuLi9jb21wb25lbnRzL1RleHRBcmVhXCI7XG5pbXBvcnQgQmFzaWNCdXR0b24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgeyB1cGRhdGVEYXRhIH0gZnJvbSBcIi4uL3N0YXRlL2FjdGlvbnMvYWN0aW9uXCI7XG5pbXBvcnQgQnV0dG9uQXBwQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL0FwcEJhclwiO1xuaW1wb3J0IENpcmN1bGFySW5kZXRlcm1pbmF0ZSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9ncmVzc1wiO1xuXG5pbnRlcmZhY2UgSURhdGEge1xuICBmaWVsZE5hbWU6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICB2YWx1ZTogc3RyaW5nO1xuICBvcHRpb25zPzogQXJyYXk8c3RyaW5nPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpIHtcbiAgY29uc3QgZGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZT8uZmllbGRzPy5kYXRhKTtcbiAgY29uc3QgdXBkYXRlZERhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGU/LmZpZWxkcz8udXBkYXRlZERhdGEpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHVwZGF0ZUVuZFBvaW50ID0gXCJodHRwczovL3VsdmVudGVjaC1yZWFjdC1leGFtLm5ldGxpZnkuYXBwL2FwaS9mb3JtXCI7XG4gIGNvbnN0IFt1cGRhdGUsIHNldFVwZGF0ZV0gPSB1c2VTdGF0ZShkYXRhLmRhdGEpO1xuICBjb25zdCBbc3VibWl0dGVkLCBzZXRTdWJtaXR0ZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICAvLyAgcmV0dXJuZWRUYXJnZXQgPSBPYmplY3QuYXNzaWduKHJldHVybmVkVGFyZ2V0ICwge2l0ZW0/LmZpZWxkTmFtZTogaXRlbT8udmFsdWV9KTtcbiAgLy8gY29uc29sZS5sb2cocmV0dXJuZWRUYXJnZXQpO1xuXG5cbiAgbGV0IGFyciA9IGRhdGE/LmRhdGE7XG4gIGNvbnNvbGUubG9nKGFycik7XG4gIFxuXG4gIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSAobmFtZTogYW55LCB2YWx1ZTogYW55KSA9PiB7XG4gICAgXG4gICAgY29uc3QgaW5kZXggPSBhcnI/LmZpbmRJbmRleCgob2JqZWN0OiBhbnkpID0+IHtcbiAgICAgIHJldHVybiBvYmplY3QuZmllbGROYW1lID09IG5hbWU7XG4gICAgfSk7IC8vIPCfkYnvuI8gMVxuICAgIGNvbnNvbGUubG9nKFwiaW5kZXhcIixpbmRleCk7XG4gICAgXG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBhcnJbaW5kZXhdLmZpZWxkTmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIFxuICAgIC8vIHNldFVwZGF0ZSh7IC4uLnVwZGF0ZSwgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBcbiAgY29uc3Qgc3VibWl0SGFuZGxlciA9IGFzeW5jIChldmVudDogYW55KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcInVwZGF0ZVwiLCBhcnIpO1xuICAgIGxldCB1cGRhdGVkID0gYXdhaXQgYXhpb3MucG9zdCh1cGRhdGVFbmRQb2ludCwgdXBkYXRlKTtcbiAgICBkaXNwYXRjaCh1cGRhdGVEYXRhKHVwZGF0ZWQpKTtcbiAgICBzZXRTdWJtaXR0ZWQodHJ1ZSk7XG4gIH07XG4gIGNvbnNvbGUubG9nKFwiQXJyXCIsIGFycik7XG5jb25zb2xlLmxvZyhcInVwZGF0ZWREYXRhXCIsSlNPTi5zdHJpbmdpZnkodXBkYXRlZERhdGEpKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgPEJ1dHRvbkFwcEJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGg0PkR5bmFtaWMgRm9ybTwvaDQ+XG4gICAgICAgIHshZGF0YSB8fCBkYXRhLmxlbmd0aCA8IDEgPyAoXG4gICAgICAgICAgPENpcmN1bGFySW5kZXRlcm1pbmF0ZSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7ZGF0YT8uZGF0YT8ubWFwKCh2YWx1ZTogSURhdGEsIGluZGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHZhbHVlLnR5cGUgPT0gXCJ0ZXh0XCIgfHxcbiAgICAgICAgICAgICAgICB2YWx1ZS50eXBlID09IFwiZW1haWxcIiB8fFxuICAgICAgICAgICAgICAgIHZhbHVlLnR5cGUgPT0gXCJudW1iZXJcIlxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPEJhc2ljVGV4dEZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e3ZhbHVlLmZpZWxkTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT17dmFsdWUudHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMzBweFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIDwvQmFzaWNUZXh0RmllbGRzPlxuICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS50eXBlID09IFwibXVsdGlsaW5lXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRBcmVhXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZT17Y2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICBmaWVsZE5hbWU9e3ZhbHVlLmZpZWxkTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgPC9UZXh0QXJlYT5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxCYXNpY1NlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3ZhbHVlLm9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXt2YWx1ZS5maWVsZE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZT17Y2hhbmdlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5cIj5cbiAgICAgICAgICAgICAgPEJhc2ljQnV0dG9uIHN1Ym1pdEhhbmRsZXI9e3N1Ym1pdEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAge3N1Ym1pdHRlZCAmJlxuICAgICAgICB1cGRhdGVkRGF0YSAmJiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGg0PlJlc3BvbnNlPC9oND5cblxuICAgICAgICAgICAgICAgIDxwPiB7SlNPTi5zdHJpbmdpZnkodXBkYXRlZERhdGEpfSA8L3A+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJheGlvcyIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJCYXNpY1RleHRGaWVsZHMiLCJCYXNpY1NlbGVjdCIsIlRleHRBcmVhIiwiQmFzaWNCdXR0b24iLCJ1cGRhdGVEYXRhIiwiQnV0dG9uQXBwQmFyIiwiQ2lyY3VsYXJJbmRldGVybWluYXRlIiwiRm9ybSIsImRhdGEiLCJzdGF0ZSIsImZpZWxkcyIsInVwZGF0ZWREYXRhIiwiZGlzcGF0Y2giLCJ1cGRhdGVFbmRQb2ludCIsInVwZGF0ZSIsInNldFVwZGF0ZSIsInN1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsImFyciIsImNvbnNvbGUiLCJsb2ciLCJjaGFuZ2VIYW5kbGVyIiwibmFtZSIsInZhbHVlIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJvYmplY3QiLCJmaWVsZE5hbWUiLCJzdWJtaXRIYW5kbGVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZWQiLCJwb3N0IiwiSlNPTiIsInN0cmluZ2lmeSIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwibGVuZ3RoIiwibWFwIiwidHlwZSIsImNoYW5nZSIsImhlaWdodCIsIm9wdGlvbnMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/form.tsx\n"));

/***/ })

});