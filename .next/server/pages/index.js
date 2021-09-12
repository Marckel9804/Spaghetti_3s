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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/AppLayout.js":
/*!*********************************!*\
  !*** ./components/AppLayout.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/yuhohyeon/Desktop/project/Spaghetti_3s/components/AppLayout.js\";\n\n\n\n\nconst AppLayout = ({\n  children\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: \"\\uB808\\uC774\\uC544\\uC6C3\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), children]\n  }, void 0, true);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppLayout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FwcExheW91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7OztBQUVBLE1BQU1DLFNBQVMsR0FBRyxDQUFDO0FBQUVDLEVBQUFBO0FBQUYsQ0FBRCxLQUFrQjtBQUNsQyxzQkFDRTtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEVBRUdBLFFBRkg7QUFBQSxrQkFERjtBQU1ELENBUEQ7O0FBU0EsaUVBQWVELFNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGFnaGV0dGkvLi9jb21wb25lbnRzL0FwcExheW91dC5qcz9kNzNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj7roIjsnbTslYTsm4M8L2Rpdj5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkFwcExheW91dCIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AppLayout.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppLayout */ \"./components/AppLayout.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/yuhohyeon/Desktop/project/Spaghetti_3s/pages/index.js\";\n\n\n\n\nconst {\n  Search\n} = antd__WEBPACK_IMPORTED_MODULE_1__.Input;\n\nconst Home = () => {\n  const searchBook = value => {\n    console.log(value);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_AppLayout__WEBPACK_IMPORTED_MODULE_2__.default, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Search, {\n      placeholder: \"\\uCC45 \\uC81C\\uBAA9\",\n      onSearch: searchBook,\n      enterButton: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTTtBQUFFRyxFQUFBQTtBQUFGLElBQWFGLHVDQUFuQjs7QUFFQSxNQUFNRyxJQUFJLEdBQUcsTUFBTTtBQUNqQixRQUFNQyxVQUFVLEdBQUlDLEtBQUQsSUFBVztBQUM1QkMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDRCxHQUZEOztBQUlBLHNCQUNFLDhEQUFDLDBEQUFEO0FBQUEsMkJBQ0UsOERBQUMsTUFBRDtBQUFRLGlCQUFXLEVBQUMscUJBQXBCO0FBQTJCLGNBQVEsRUFBRUQsVUFBckM7QUFBaUQsaUJBQVc7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBVkQ7O0FBWUEsaUVBQWVELElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGFnaGV0dGkvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IEFwcExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0FwcExheW91dCc7XG5cbmNvbnN0IHsgU2VhcmNoIH0gPSBJbnB1dDtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoQm9vayA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxBcHBMYXlvdXQ+XG4gICAgICA8U2VhcmNoIHBsYWNlaG9sZGVyPVwi7LGFIOygnOuqqVwiIG9uU2VhcmNoPXtzZWFyY2hCb29rfSBlbnRlckJ1dHRvbiAvPlxuICAgIDwvQXBwTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIklucHV0IiwiQXBwTGF5b3V0IiwiU2VhcmNoIiwiSG9tZSIsInNlYXJjaEJvb2siLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();