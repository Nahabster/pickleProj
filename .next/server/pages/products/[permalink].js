"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/products/[permalink]";
exports.ids = ["pages/products/[permalink]"];
exports.modules = {

/***/ "./lib/commerce.js":
/*!*************************!*\
  !*** ./lib/commerce.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chec/commerce.js */ \"@chec/commerce.js\");\n/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new (_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default())(\"pk_4745678b191aea018d118ff09611d1631a06a77989b04\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29tbWVyY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBRTVDLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCwwREFBVyxDQUFDRSxrREFBMkMsQ0FBQztBQUUzRSxpRUFBZUQsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGlja2xlcHJvai8uL2xpYi9jb21tZXJjZS5qcz83NTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21tZXJjZVNESyBmcm9tIFwiQGNoZWMvY29tbWVyY2UuanNcIjtcblxuY29uc3QgY2xpZW50ID0gbmV3IENvbW1lcmNlU0RLKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NIRUNfUFVCTElDX0FQSV9LRVkpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGllbnQ7XG4iXSwibmFtZXMiOlsiQ29tbWVyY2VTREsiLCJjbGllbnQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQ0hFQ19QVUJMSUNfQVBJX0tFWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/commerce.js\n");

/***/ }),

/***/ "./pages/products/[permalink].js":
/*!***************************************!*\
  !*** ./pages/products/[permalink].js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductPage),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/commerce */ \"./lib/commerce.js\");\n\n\nasync function getStaticProps({ params  }) {\n    const { permalink  } = params;\n    const product = await _lib_commerce__WEBPACK_IMPORTED_MODULE_1__[\"default\"].products.retrieve(permalink, {\n        type: \"permalink\"\n    });\n    return {\n        props: {\n            product\n        }\n    };\n}\nasync function getStaticPaths() {\n    const { data: products  } = await _lib_commerce__WEBPACK_IMPORTED_MODULE_1__[\"default\"].products.list();\n    return {\n        paths: products.map(({ permalink  })=>({\n                params: {\n                    permalink\n                }\n            })),\n        fallback: false\n    };\n}\nfunction ProductPage({ product  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: product.name\n            }, void 0, false, {\n                fileName: \"/Users/nahabster/nextproject/pickleProj/pages/products/[permalink].js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: product.price.formatted_with_symbol\n            }, void 0, false, {\n                fileName: \"/Users/nahabster/nextproject/pickleProj/pages/products/[permalink].js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9bcGVybWFsaW5rXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUEwQztBQUVuQyxlQUFlQyxjQUFjLENBQUMsRUFBRUMsTUFBTSxHQUFFLEVBQUU7SUFDL0MsTUFBTSxFQUFFQyxTQUFTLEdBQUUsR0FBR0QsTUFBTTtJQUM1QixNQUFNRSxPQUFPLEdBQUcsTUFBTUosdUVBQTBCLENBQUNHLFNBQVMsRUFBRTtRQUMxREksSUFBSSxFQUFFLFdBQVc7S0FDbEIsQ0FBQztJQUNGLE9BQU87UUFDTEMsS0FBSyxFQUFFO1lBQ0xKLE9BQU87U0FDUjtLQUNGLENBQUM7QUFDSixDQUFDO0FBQ00sZUFBZUssY0FBYyxHQUFHO0lBQ3JDLE1BQU0sRUFBRUMsSUFBSSxFQUFFTCxRQUFRLEdBQUUsR0FBRyxNQUFNTCxtRUFBc0IsRUFBRTtJQUN6RCxPQUFPO1FBQ0xZLEtBQUssRUFBRVAsUUFBUSxDQUFDUSxHQUFHLENBQUMsQ0FBQyxFQUFFVixTQUFTLEdBQUUsR0FBTTtnQkFDdENELE1BQU0sRUFBRTtvQkFDTkMsU0FBUztpQkFDVjthQUNGLEVBQUU7UUFDSFcsUUFBUSxFQUFFLEtBQUs7S0FDaEIsQ0FBQztBQUNKLENBQUM7QUFDYyxTQUFTQyxXQUFXLENBQUMsRUFBRVgsT0FBTyxHQUFFLEVBQUU7SUFDL0MscUJBQ0U7OzBCQUNFLDhEQUFDWSxJQUFFOzBCQUFFWixPQUFPLENBQUNhLElBQUk7Ozs7O29CQUFNOzBCQUN2Qiw4REFBQ0MsR0FBQzswQkFBRWQsT0FBTyxDQUFDZSxLQUFLLENBQUNDLHFCQUFxQjs7Ozs7b0JBQUs7O29CQUMzQyxDQUNIO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BpY2tsZXByb2ovLi9wYWdlcy9wcm9kdWN0cy9bcGVybWFsaW5rXS5qcz9mNTYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb21tZXJjZSBmcm9tIFwiLi4vLi4vbGliL2NvbW1lcmNlXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHsgcGVybWFsaW5rIH0gPSBwYXJhbXM7XG4gIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBjb21tZXJjZS5wcm9kdWN0cy5yZXRyaWV2ZShwZXJtYWxpbmssIHtcbiAgICB0eXBlOiBcInBlcm1hbGlua1wiLFxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZHVjdCxcbiAgICB9LFxuICB9O1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCB7IGRhdGE6IHByb2R1Y3RzIH0gPSBhd2FpdCBjb21tZXJjZS5wcm9kdWN0cy5saXN0KCk7XG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHByb2R1Y3RzLm1hcCgoeyBwZXJtYWxpbmsgfSkgPT4gKHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBwZXJtYWxpbmssXG4gICAgICB9LFxuICAgIH0pKSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0UGFnZSh7IHByb2R1Y3QgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+e3Byb2R1Y3QubmFtZX08L2gxPlxuICAgICAgPHA+e3Byb2R1Y3QucHJpY2UuZm9ybWF0dGVkX3dpdGhfc3ltYm9sfTwvcD5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJjb21tZXJjZSIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwicGVybWFsaW5rIiwicHJvZHVjdCIsInByb2R1Y3RzIiwicmV0cmlldmUiLCJ0eXBlIiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsImRhdGEiLCJsaXN0IiwicGF0aHMiLCJtYXAiLCJmYWxsYmFjayIsIlByb2R1Y3RQYWdlIiwiaDEiLCJuYW1lIiwicCIsInByaWNlIiwiZm9ybWF0dGVkX3dpdGhfc3ltYm9sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/[permalink].js\n");

/***/ }),

/***/ "@chec/commerce.js":
/*!************************************!*\
  !*** external "@chec/commerce.js" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@chec/commerce.js");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/products/[permalink].js"));
module.exports = __webpack_exports__;

})();