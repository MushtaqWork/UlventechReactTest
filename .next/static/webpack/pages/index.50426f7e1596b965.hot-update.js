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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_Textfield__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Textfield */ \"./components/Textfield.tsx\");\n/* harmony import */ var _components_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Select */ \"./components/Select.tsx\");\n/* harmony import */ var _components_TextArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TextArea */ \"./components/TextArea.tsx\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Button */ \"./components/Button.tsx\");\n/* harmony import */ var _state_actions_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state/actions/action */ \"./state/actions/action.tsx\");\n/* harmony import */ var _components_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/AppBar */ \"./components/AppBar.tsx\");\n/* harmony import */ var _components_progress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/progress */ \"./components/progress.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Form() {\n    var _data_data;\n    _s();\n    const data = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{\n        var _state_fields;\n        return state === null || state === void 0 ? void 0 : (_state_fields = state.fields) === null || _state_fields === void 0 ? void 0 : _state_fields.data;\n    });\n    const updatedData = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)((state)=>{\n        var _state_fields;\n        return state === null || state === void 0 ? void 0 : (_state_fields = state.fields) === null || _state_fields === void 0 ? void 0 : _state_fields.updatedData;\n    });\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const updateEndPoint = \"https://ulventech-react-exam.netlify.app/api/form\";\n    const [update, setUpdate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data.data);\n    const [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //  returnedTarget = Object.assign(returnedTarget , {item?.fieldName: item?.value});\n    // console.log(returnedTarget);\n    let arr = data === null || data === void 0 ? void 0 : data.data;\n    console.log(arr);\n    const changeHandler = (name, value)=>{\n        var _data_data;\n        const index = data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.findIndex((object)=>{\n            return object.fieldName == name;\n        }); // 👉️ 1\n        console.log(\"index\", index);\n        if (index !== -1) {\n            arr[index].fieldName = name;\n        }\n    // setUpdate({ ...update, [name]: value });\n    };\n    console.log(\"Arr\", arr);\n    const submitHandler = async (event)=>{\n        event.preventDefault();\n        console.log(\"update\", update);\n        let updated = await axios__WEBPACK_IMPORTED_MODULE_10__[\"default\"].post(updateEndPoint, update);\n        dispatch((0,_state_actions_action__WEBPACK_IMPORTED_MODULE_7__.updateData)(updated));\n        setSubmitted(true);\n    };\n    console.log(\"updatedData\", JSON.stringify(updatedData));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AppBar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: \"Dynamic Form\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    !data || data.length < 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_progress__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            data === null || data === void 0 ? void 0 : (_data_data = data.data) === null || _data_data === void 0 ? void 0 : _data_data.map((value, index)=>{\n                                if (value.type == \"text\" || value.type == \"email\" || value.type == \"number\") {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Textfield__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            value: value.value,\n                                            fieldName: value.fieldName,\n                                            change: changeHandler,\n                                            type: value.type,\n                                            height: \"330px\",\n                                            children: value.value\n                                        }, void 0, false, {\n                                            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false);\n                                } else if (value.type == \"multiline\") {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TextArea__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                            value: value.value,\n                                            change: changeHandler,\n                                            fieldName: value.fieldName,\n                                            children: value.value\n                                        }, void 0, false, {\n                                            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false);\n                                } else {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Select__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            options: value.options,\n                                            fieldName: value.fieldName,\n                                            value: value.value,\n                                            change: changeHandler\n                                        }, void 0, false, {\n                                            fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                            lineNumber: 102,\n                                            columnNumber: 21\n                                        }, this)\n                                    }, void 0, false);\n                                }\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"btn\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    submitHandler: submitHandler\n                                }, void 0, false, {\n                                    fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            submitted && updatedData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Response\"\n                            }, void 0, false, {\n                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                lineNumber: 123,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \" \",\n                                    JSON.stringify(updatedData),\n                                    \" \"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                                lineNumber: 125,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true)\n                }, void 0, false, {\n                    fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n                    lineNumber: 121,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dev/Desktop/ulventech/ulventech/pages/form.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"G7/SW/x2fBJhfPhmpNNRDMc65JU=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFpQztBQUNQO0FBQzZCO0FBQ0Q7QUFDUDtBQUNEO0FBQ0M7QUFDTTtBQUNMO0FBQ1c7QUFTNUMsU0FBU1csT0FBTztRQWlEbEJDOztJQWhEWCxNQUFNQSxPQUFPVix3REFBV0EsQ0FBQyxDQUFDVztZQUFlQTtRQUFBQSxPQUFBQSxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLGdCQUFBQSxNQUFPQyxNQUFNLGNBQWJELDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlRCxJQUFGOztJQUN0RCxNQUFNRyxjQUFjYix3REFBV0EsQ0FBQyxDQUFDVztZQUFlQTtRQUFBQSxPQUFBQSxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLGdCQUFBQSxNQUFPQyxNQUFNLGNBQWJELDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlRSxXQUFGOztJQUM3RCxNQUFNQyxXQUFXYix3REFBV0E7SUFDNUIsTUFBTWMsaUJBQWlCO0lBQ3ZCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHbkIsK0NBQVFBLENBQUNZLEtBQUtBLElBQUk7SUFDOUMsTUFBTSxDQUFDUSxXQUFXQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBVSxLQUFLO0lBQ3pELG9GQUFvRjtJQUNwRiwrQkFBK0I7SUFHL0IsSUFBSXNCLE1BQU1WLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTUEsSUFBSTtJQUNwQlcsUUFBUUMsR0FBRyxDQUFDRjtJQUdaLE1BQU1HLGdCQUFnQixDQUFDQyxNQUFXQyxRQUFlO1lBRWpDZjtRQUFkLE1BQU1nQixRQUFRaEIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxhQUFBQSxLQUFNQSxJQUFJLGNBQVZBLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFZaUIsVUFBVSxDQUFDQyxTQUFnQjtZQUNuRCxPQUFPQSxPQUFPQyxTQUFTLElBQUlMO1FBQzdCLElBQUksT0FBTztRQUNYSCxRQUFRQyxHQUFHLENBQUMsU0FBUUk7UUFHcEIsSUFBSUEsVUFBVSxDQUFDLEdBQUc7WUFDaEJOLEdBQUcsQ0FBQ00sTUFBTSxDQUFDRyxTQUFTLEdBQUdMO1FBQ3pCLENBQUM7SUFFRCwyQ0FBMkM7SUFDN0M7SUFDQUgsUUFBUUMsR0FBRyxDQUFDLE9BQU9GO0lBRW5CLE1BQU1VLGdCQUFnQixPQUFPQyxRQUFlO1FBQzFDQSxNQUFNQyxjQUFjO1FBQ3BCWCxRQUFRQyxHQUFHLENBQUMsVUFBVU47UUFDdEIsSUFBSWlCLFVBQVUsTUFBTWxDLG1EQUFVLENBQUNnQixnQkFBZ0JDO1FBQy9DRixTQUFTUixpRUFBVUEsQ0FBQzJCO1FBQ3BCZCxhQUFhLElBQUk7SUFDbkI7SUFDRkUsUUFBUUMsR0FBRyxDQUFDLGVBQWNhLEtBQUtDLFNBQVMsQ0FBQ3ZCO0lBRXZDLHFCQUNFLDhEQUFDd0I7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUMvQiwwREFBWUE7Ozs7OzBCQUNiLDhEQUFDOEI7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQztrQ0FBRzs7Ozs7O29CQUNILENBQUM3QixRQUFRQSxLQUFLOEIsTUFBTSxHQUFHLGtCQUN0Qiw4REFBQ2hDLDREQUFxQkE7Ozs7NkNBRXRCOzs0QkFDR0UsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxhQUFBQSxLQUFNQSxJQUFJLGNBQVZBLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFZK0IsSUFBSSxDQUFDaEIsT0FBY0MsUUFBZTtnQ0FDN0MsSUFDRUQsTUFBTWlCLElBQUksSUFBSSxVQUNkakIsTUFBTWlCLElBQUksSUFBSSxXQUNkakIsTUFBTWlCLElBQUksSUFBSSxVQUNkO29DQUNBLHFCQUNFO2tEQUNFLDRFQUFDeEMsNkRBQWVBOzRDQUNkdUIsT0FBT0EsTUFBTUEsS0FBSzs0Q0FDbEJJLFdBQVdKLE1BQU1JLFNBQVM7NENBQzFCYyxRQUFRcEI7NENBQ1JtQixNQUFNakIsTUFBTWlCLElBQUk7NENBQ2hCRSxRQUFPO3NEQUVObkIsTUFBTUEsS0FBSzs7Ozs7OztnQ0FJcEIsT0FBTyxJQUFJQSxNQUFNaUIsSUFBSSxJQUFJLGFBQWE7b0NBQ3BDLHFCQUNFO2tEQUNFLDRFQUFDdEMsNERBQVFBOzRDQUNQcUIsT0FBT0EsTUFBTUEsS0FBSzs0Q0FDbEJrQixRQUFRcEI7NENBQ1JNLFdBQVdKLE1BQU1JLFNBQVM7c0RBRXpCSixNQUFNQSxLQUFLOzs7Ozs7O2dDQUlwQixPQUFPO29DQUNMLHFCQUNFO2tEQUNFLDRFQUFDdEIsMERBQVdBOzRDQUNWMEMsU0FBU3BCLE1BQU1vQixPQUFPOzRDQUN0QmhCLFdBQVdKLE1BQU1JLFNBQVM7NENBQzFCSixPQUFPQSxNQUFNQSxLQUFLOzRDQUNsQmtCLFFBQVFwQjs7Ozs7OztnQ0FJaEIsQ0FBQzs0QkFDSDswQ0FDQSw4REFBQ2M7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNqQywwREFBV0E7b0NBQUN5QixlQUFlQTs7Ozs7Ozs7Ozs7O29DQUdqQzs7Ozs7OztZQUVGWixhQUNDTCw2QkFDRTswQkFDRSw0RUFBQ3dCO29CQUFJQyxXQUFVOzhCQUNiOzswQ0FDRSw4REFBQ0M7MENBQUc7Ozs7OzswQ0FFSiw4REFBQ087O29DQUFFO29DQUFFWCxLQUFLQyxTQUFTLENBQUN2QjtvQ0FBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT2pELENBQUM7R0FqSHVCSjs7UUFDVFQsb0RBQVdBO1FBQ0pBLG9EQUFXQTtRQUNkQyxvREFBV0E7OztLQUhOUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mb3JtLnRzeD8wZGJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBCYXNpY1RleHRGaWVsZHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGV4dGZpZWxkXCI7XG5pbXBvcnQgQmFzaWNTZWxlY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2VsZWN0XCI7XG5pbXBvcnQgVGV4dEFyZWEgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGV4dEFyZWFcIjtcbmltcG9ydCBCYXNpY0J1dHRvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCB7IHVwZGF0ZURhdGEgfSBmcm9tIFwiLi4vc3RhdGUvYWN0aW9ucy9hY3Rpb25cIjtcbmltcG9ydCBCdXR0b25BcHBCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwQmFyXCI7XG5pbXBvcnQgQ2lyY3VsYXJJbmRldGVybWluYXRlIGZyb20gXCIuLi9jb21wb25lbnRzL3Byb2dyZXNzXCI7XG5cbmludGVyZmFjZSBJRGF0YSB7XG4gIGZpZWxkTmFtZTogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIG9wdGlvbnM/OiBBcnJheTxzdHJpbmc+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKCkge1xuICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBhbnkpID0+IHN0YXRlPy5maWVsZHM/LmRhdGEpO1xuICBjb25zdCB1cGRhdGVkRGF0YSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogYW55KSA9PiBzdGF0ZT8uZmllbGRzPy51cGRhdGVkRGF0YSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgdXBkYXRlRW5kUG9pbnQgPSBcImh0dHBzOi8vdWx2ZW50ZWNoLXJlYWN0LWV4YW0ubmV0bGlmeS5hcHAvYXBpL2Zvcm1cIjtcbiAgY29uc3QgW3VwZGF0ZSwgc2V0VXBkYXRlXSA9IHVzZVN0YXRlKGRhdGEuZGF0YSk7XG4gIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIC8vICByZXR1cm5lZFRhcmdldCA9IE9iamVjdC5hc3NpZ24ocmV0dXJuZWRUYXJnZXQgLCB7aXRlbT8uZmllbGROYW1lOiBpdGVtPy52YWx1ZX0pO1xuICAvLyBjb25zb2xlLmxvZyhyZXR1cm5lZFRhcmdldCk7XG5cblxuICBsZXQgYXJyID0gZGF0YT8uZGF0YTtcbiAgY29uc29sZS5sb2coYXJyKTtcbiAgXG5cbiAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChuYW1lOiBhbnksIHZhbHVlOiBhbnkpID0+IHtcbiAgICBcbiAgICBjb25zdCBpbmRleCA9IGRhdGE/LmRhdGE/LmZpbmRJbmRleCgob2JqZWN0OiBhbnkpID0+IHtcbiAgICAgIHJldHVybiBvYmplY3QuZmllbGROYW1lID09IG5hbWU7XG4gICAgfSk7IC8vIPCfkYnvuI8gMVxuICAgIGNvbnNvbGUubG9nKFwiaW5kZXhcIixpbmRleCk7XG4gICAgXG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBhcnJbaW5kZXhdLmZpZWxkTmFtZSA9IG5hbWU7XG4gICAgfVxuICAgIFxuICAgIC8vIHNldFVwZGF0ZSh7IC4uLnVwZGF0ZSwgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcbiAgY29uc29sZS5sb2coXCJBcnJcIiwgYXJyKTtcbiAgXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZXZlbnQ6IGFueSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCJ1cGRhdGVcIiwgdXBkYXRlKTtcbiAgICBsZXQgdXBkYXRlZCA9IGF3YWl0IGF4aW9zLnBvc3QodXBkYXRlRW5kUG9pbnQsIHVwZGF0ZSk7XG4gICAgZGlzcGF0Y2godXBkYXRlRGF0YSh1cGRhdGVkKSk7XG4gICAgc2V0U3VibWl0dGVkKHRydWUpO1xuICB9O1xuY29uc29sZS5sb2coXCJ1cGRhdGVkRGF0YVwiLEpTT04uc3RyaW5naWZ5KHVwZGF0ZWREYXRhKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxCdXR0b25BcHBCYXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxoND5EeW5hbWljIEZvcm08L2g0PlxuICAgICAgICB7IWRhdGEgfHwgZGF0YS5sZW5ndGggPCAxID8gKFxuICAgICAgICAgIDxDaXJjdWxhckluZGV0ZXJtaW5hdGUgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge2RhdGE/LmRhdGE/Lm1hcCgodmFsdWU6IElEYXRhLCBpbmRleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB2YWx1ZS50eXBlID09IFwidGV4dFwiIHx8XG4gICAgICAgICAgICAgICAgdmFsdWUudHlwZSA9PSBcImVtYWlsXCIgfHxcbiAgICAgICAgICAgICAgICB2YWx1ZS50eXBlID09IFwibnVtYmVyXCJcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxCYXNpY1RleHRGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXt2YWx1ZS5maWVsZE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgY2hhbmdlPXtjaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3ZhbHVlLnR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzMwcHhcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbHVlLnZhbHVlfVxuICAgICAgICAgICAgICAgICAgICA8L0Jhc2ljVGV4dEZpZWxkcz5cbiAgICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUudHlwZSA9PSBcIm11bHRpbGluZVwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0QXJlYVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgZmllbGROYW1lPXt2YWx1ZS5maWVsZE5hbWV9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsdWUudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIDwvVGV4dEFyZWE+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8QmFzaWNTZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt2YWx1ZS5vcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZT17dmFsdWUuZmllbGROYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS52YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuXCI+XG4gICAgICAgICAgICAgIDxCYXNpY0J1dHRvbiBzdWJtaXRIYW5kbGVyPXtzdWJtaXRIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtzdWJtaXR0ZWQgJiZcbiAgICAgICAgdXBkYXRlZERhdGEgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxoND5SZXNwb25zZTwvaDQ+XG5cbiAgICAgICAgICAgICAgICA8cD4ge0pTT04uc3RyaW5naWZ5KHVwZGF0ZWREYXRhKX0gPC9wPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJ1c2VTZWxlY3RvciIsInVzZURpc3BhdGNoIiwiQmFzaWNUZXh0RmllbGRzIiwiQmFzaWNTZWxlY3QiLCJUZXh0QXJlYSIsIkJhc2ljQnV0dG9uIiwidXBkYXRlRGF0YSIsIkJ1dHRvbkFwcEJhciIsIkNpcmN1bGFySW5kZXRlcm1pbmF0ZSIsIkZvcm0iLCJkYXRhIiwic3RhdGUiLCJmaWVsZHMiLCJ1cGRhdGVkRGF0YSIsImRpc3BhdGNoIiwidXBkYXRlRW5kUG9pbnQiLCJ1cGRhdGUiLCJzZXRVcGRhdGUiLCJzdWJtaXR0ZWQiLCJzZXRTdWJtaXR0ZWQiLCJhcnIiLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlSGFuZGxlciIsIm5hbWUiLCJ2YWx1ZSIsImluZGV4IiwiZmluZEluZGV4Iiwib2JqZWN0IiwiZmllbGROYW1lIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVkIiwicG9zdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsImxlbmd0aCIsIm1hcCIsInR5cGUiLCJjaGFuZ2UiLCJoZWlnaHQiLCJvcHRpb25zIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/form.tsx\n"));

/***/ })

});