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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Textfield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Textfield */ \"./components/Textfield.tsx\");\n/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Select */ \"./components/Select.tsx\");\n/* harmony import */ var _components_TextArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TextArea */ \"./components/TextArea.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AppBar */ \"./components/AppBar.tsx\");\n/* harmony import */ var _components_progress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/progress */ \"./components/progress.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Form() {\n    var _data_data;\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{\n        var _state_fields;\n        return state === null || state === void 0 ? void 0 : (_state_fields = state.fields) === null || _state_fields === void 0 ? void 0 : _state_fields.data;\n    });\n    const updatedData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{\n        var _state_fields;\n        return state === null || state === void 0 ? void 0 : (_state_fields = state.fields) === null || _state_fields === void 0 ? void 0 : _state_fields.updatedData;\n    });\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const updateEndPoint = \"https://ulventech-react-exam.netlify.app/api/form\";\n    const [update, setUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.data);\n    const [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //  returnedTarget = Object.assign(returnedTarget , {item?.fieldName: item?.value});\n    // console.log(returnedTarget);\n    let arr = data === null || data === void 0 ? void 0 : data.data;\n    console.log(arr);\n    const changeHandler = (name, value)=>{\n        const index = arr === null || arr === void 0 ? void 0 : arr.findIndex((object)=>{\n            return object.fieldName == name;\n        });\n        if (index !== -1) {\n            console.log(\"  console.log\", arr[index].fieldName);\n            arr[index].value = value;\n        }\n    // setUpdate({ ...update, [name]: value });\n    };\n    const submitHandler = async (event)=>{\n        event.preventDefault();\n        console.log(\"update\", {\n            ...arr[0]\n        });\n    // let updated = await axios.post(updateEndPoint, update);\n    // dispatch(updateData(updated));\n    // setSubmitted(true);\n    };\n    console.log(\"Arr\", arr);\n    var newObj = {};\n    for(var i = 0; i < (arr === null || arr === void 0 ? void 0 : arr.length); i++){\n        newObj[arr[i].fieldName] = arr[i].value;\n    }\n    console.log(\"updatedData\", newObj);\n    console.log(\"updatedData\", JSON.stringify(updatedData));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppBar__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Dynamic Form\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    !data || data.length < 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_progress__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.map((value, index)=>{\n                                if (value.type == \"text\" || value.type == \"email\" || value.type == \"number\") {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Textfield__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            value: value.value,\n                                            fieldName: value.fieldName,\n                                            change: changeHandler,\n                                            type: value.type,\n                                            height: \"330px\",\n                                            children: value.value\n                                        }, void 0, false, {\n                                            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                            lineNumber: 81,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false);\n                                } else if (value.type == \"multiline\") {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TextArea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            value: value.value,\n                                            change: changeHandler,\n                                            fieldName: value.fieldName,\n                                            children: value.value\n                                        }, void 0, false, {\n                                            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                            lineNumber: 95,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false);\n                                } else {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Select__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            options: value.options,\n                                            fieldName: value.fieldName,\n                                            value: value.value,\n                                            change: changeHandler\n                                        }, void 0, false, {\n                                            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                            lineNumber: 107,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false);\n                                }\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"btn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    submitHandler: submitHandler\n                                }, void 0, false, {\n                                    fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                lineNumber: 117,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            submitted && updatedData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Response\"\n                            }, void 0, false, {\n                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                lineNumber: 128,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \" \",\n                                    JSON.stringify(updatedData),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                lineNumber: 130,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"G7/SW/x2fBJhfPhmpNNRDMc65JU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQ2Q7b0NBQ0EscUJBQ0U7a0RBQ0UsNEVBQUN2Qyw2REFBZUE7NENBQ2RzQixPQUFPQSxNQUFNQSxLQUFLOzRDQUNsQkksV0FBV0osTUFBTUksU0FBUzs0Q0FDMUJjLFFBQVFwQjs0Q0FDUm1CLE1BQU1qQixNQUFNaUIsSUFBSTs0Q0FDaEJFLFFBQU87c0RBRU5uQixNQUFNQSxLQUFLOzs7Ozs7O2dDQUlwQixPQUFPLElBQUlBLE1BQU1pQixJQUFJLElBQUksYUFBYTtvQ0FDcEMscUJBQ0U7a0RBQ0UsNEVBQUNyQyw0REFBUUE7NENBQ1BvQixPQUFPQSxNQUFNQSxLQUFLOzRDQUNsQmtCLFFBQVFwQjs0Q0FDUk0sV0FBV0osTUFBTUksU0FBUztzREFFekJKLE1BQU1BLEtBQUs7Ozs7Ozs7Z0NBSXBCLE9BQU87b0NBQ0wscUJBQ0U7a0RBQ0UsNEVBQUNyQiwwREFBV0E7NENBQ1Z5QyxTQUFTcEIsTUFBTW9CLE9BQU87NENBQ3RCaEIsV0FBV0osTUFBTUksU0FBUzs0Q0FDMUJKLE9BQU9BLE1BQU1BLEtBQUs7NENBQ2xCa0IsUUFBUXBCOzs7Ozs7O2dDQUloQixDQUFDOzRCQUNIOzBDQUNBLDhEQUFDZTtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ2pDLDBEQUFXQTtvQ0FBQ3dCLGVBQWVBOzs7Ozs7Ozs7Ozs7b0NBR2pDOzs7Ozs7O1lBRUZaLGFBQ0NMLDZCQUNFOzBCQUNFLDRFQUFDeUI7b0JBQUlDLFdBQVU7OEJBQ2I7OzBDQUNFLDhEQUFDQzswQ0FBRzs7Ozs7OzBDQUVKLDhEQUFDTTs7b0NBQUU7b0NBQUVWLEtBQUtDLFNBQVMsQ0FBQ3hCO29DQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPakQsQ0FBQztHQXRIdUJKOztRQUNUUixvREFBV0E7UUFDSkEsb0RBQVdBO1FBQ2RDLG9EQUFXQTs7O0tBSE5PIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Zvcm0udHN4PzBkYmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEJhc2ljVGV4dEZpZWxkcyBmcm9tIFwiLi4vY29tcG9uZW50cy9UZXh0ZmllbGRcIjtcbmltcG9ydCBCYXNpY1NlbGVjdCBmcm9tIFwiLi4vY29tcG9uZW50cy9TZWxlY3RcIjtcbmltcG9ydCBUZXh0QXJlYSBmcm9tIFwiLi4vY29tcG9uZW50cy9UZXh0QXJlYVwiO1xuaW1wb3J0IEJhc2ljQnV0dG9uIGZyb20gXCIuLi9jb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IHsgdXBkYXRlRGF0YSB9IGZyb20gXCIuLi9zdGF0ZS9hY3Rpb25zL2FjdGlvblwiO1xuaW1wb3J0IEJ1dHRvbkFwcEJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBCYXJcIjtcbmltcG9ydCBDaXJjdWxhckluZGV0ZXJtaW5hdGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvcHJvZ3Jlc3NcIjtcblxuaW50ZXJmYWNlIElEYXRhIHtcbiAgZmllbGROYW1lOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgb3B0aW9ucz86IEFycmF5PHN0cmluZz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0oKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IGFueSkgPT4gc3RhdGU/LmZpZWxkcz8uZGF0YSk7XG4gIGNvbnN0IHVwZGF0ZWREYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlPy5maWVsZHM/LnVwZGF0ZWREYXRhKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB1cGRhdGVFbmRQb2ludCA9IFwiaHR0cHM6Ly91bHZlbnRlY2gtcmVhY3QtZXhhbS5uZXRsaWZ5LmFwcC9hcGkvZm9ybVwiO1xuICBjb25zdCBbdXBkYXRlLCBzZXRVcGRhdGVdID0gdXNlU3RhdGUoZGF0YS5kYXRhKTtcbiAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgLy8gIHJldHVybmVkVGFyZ2V0ID0gT2JqZWN0LmFzc2lnbihyZXR1cm5lZFRhcmdldCAsIHtpdGVtPy5maWVsZE5hbWU6IGl0ZW0/LnZhbHVlfSk7XG4gIC8vIGNvbnNvbGUubG9nKHJldHVybmVkVGFyZ2V0KTtcblxuXG4gIGxldCBhcnIgPSBkYXRhPy5kYXRhO1xuICBjb25zb2xlLmxvZyhhcnIpO1xuICBcblxuICBjb25zdCBjaGFuZ2VIYW5kbGVyID0gKG5hbWU6IGFueSwgdmFsdWU6IGFueSkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gYXJyPy5maW5kSW5kZXgoKG9iamVjdDogYW55KSA9PiB7XG4gICAgICByZXR1cm4gb2JqZWN0LmZpZWxkTmFtZSA9PSBuYW1lO1xuICAgIH0pOyBcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIiAgY29uc29sZS5sb2dcIiwgYXJyW2luZGV4XS5maWVsZE5hbWUpOyBcbiAgICAgIGFycltpbmRleF0udmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgLy8gc2V0VXBkYXRlKHsgLi4udXBkYXRlLCBbbmFtZV06IHZhbHVlIH0pO1xuICB9O1xuXG5cbiAgXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJ1cGRhdGVcIiwgey4uLmFyclswXX0pO1xuICAgIC8vIGxldCB1cGRhdGVkID0gYXdhaXQgYXhpb3MucG9zdCh1cGRhdGVFbmRQb2ludCwgdXBkYXRlKTtcbiAgICAvLyBkaXNwYXRjaCh1cGRhdGVEYXRhKHVwZGF0ZWQpKTtcbiAgICAvLyBzZXRTdWJtaXR0ZWQodHJ1ZSk7XG4gIH07XG4gIGNvbnNvbGUubG9nKFwiQXJyXCIsIGFycik7XG4gIHZhciBuZXdPYmo6IGFueSA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycj8ubGVuZ3RoOyBpKyspIHtcbiAgICBuZXdPYmpbYXJyW2ldLmZpZWxkTmFtZV0gPSBhcnJbaV0udmFsdWU7XG4gIH1cbiAgY29uc29sZS5sb2coXCJ1cGRhdGVkRGF0YVwiLG5ld09iaik7XG5cblxuY29uc29sZS5sb2coXCJ1cGRhdGVkRGF0YVwiLEpTT04uc3RyaW5naWZ5KHVwZGF0ZWREYXRhKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxCdXR0b25BcHBCYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoND5EeW5hbWljIEZvcm08L2g0PlxuICAgICAgICB7IWRhdGEgfHwgZGF0YS5sZW5ndGggPCAxID8gKFxuICAgICAgICAgIDxDaXJjdWxhckluZGV0ZXJtaW5hdGUgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge2RhdGE/LmRhdGE/Lm1hcCgodmFsdWU6IElEYXRhLCBpbmRleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB2YWx1ZS50eXBlID09IFwidGV4dFwiIHx8XG4gICAgICAgICAgICAgICAgdmFsdWUudHlwZSA9PSBcImVtYWlsXCIgfHxcbiAgICAgICAgICAgICAgICB2YWx1ZS50eXBlID09IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxCYXNpY1RleHRGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXt2YWx1ZS5maWVsZE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlPXtjaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3ZhbHVlLnR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzMwcHhcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICA8L0Jhc2ljVGV4dEZpZWxkcz5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudHlwZSA9PSBcIm11bHRpbGluZVwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXt2YWx1ZS5maWVsZE5hbWV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dEFyZWE+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8QmFzaWNTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt2YWx1ZS5vcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17dmFsdWUuZmllbGROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuXCI+XG4gICAgICAgICAgICAgIDxCYXNpY0J1dHRvbiBzdWJtaXRIYW5kbGVyPXtzdWJtaXRIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzdWJtaXR0ZWQgJiZcbiAgICAgICAgdXBkYXRlZERhdGEgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxoND5SZXNwb25zZTwvaDQ+XG5cbiAgICAgICAgICAgICAgICA8cD4ge0pTT04uc3RyaW5naWZ5KHVwZGF0ZWREYXRhKX0gPC9wPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsIkJhc2ljVGV4dEZpZWxkcyIsIkJhc2ljU2VsZWN0IiwiVGV4dEFyZWEiLCJCYXNpY0J1dHRvbiIsIkJ1dHRvbkFwcEJhciIsIkNpcmN1bGFySW5kZXRlcm1pbmF0ZSIsIkZvcm0iLCJkYXRhIiwic3RhdGUiLCJmaWVsZHMiLCJ1cGRhdGVkRGF0YSIsImRpc3BhdGNoIiwidXBkYXRlRW5kUG9pbnQiLCJ1cGRhdGUiLCJzZXRVcGRhdGUiLCJzdWJtaXR0ZWQiLCJzZXRTdWJtaXR0ZWQiLCJhcnIiLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlSGFuZGxlciIsIm5hbWUiLCJ2YWx1ZSIsImluZGV4IiwiZmluZEluZGV4Iiwib2JqZWN0IiwiZmllbGROYW1lIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuZXdPYmoiLCJpIiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSIsImRpdiIsImNsYXNzTmFtZSIsImg0IiwibWFwIiwidHlwZSIsImNoYW5nZSIsImhlaWdodCIsIm9wdGlvbnMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/form.tsx\n"));

/***/ })

});