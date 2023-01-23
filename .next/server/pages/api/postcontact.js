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
exports.id = "pages/api/postcontact";
exports.ids = ["pages/api/postcontact"];
exports.modules = {

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "(api)/./pages/api/postcontact.js":
/*!**********************************!*\
  !*** ./pages/api/postcontact.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:fs */ \"node:fs\");\n/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fs__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        let data = await node_fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(\"contactdata\");\n        node_fs__WEBPACK_IMPORTED_MODULE_0__.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body), ()=>{});\n        res.status(200).json([\n            \"done\"\n        ]);\n    } else {\n        // Handle any other HTTP method\n        res.status(500).json([\n            \"allBlogs\"\n        ]);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdGNvbnRhY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThCO0FBRWYsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsSUFBSUMsT0FBTyxNQUFNTCxxREFBbUIsQ0FBQztRQUNyQ0EsOENBQVksQ0FBQyxDQUFDLFlBQVksRUFBRUssS0FBS0ksTUFBTSxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUVDLEtBQUtDLFNBQVMsQ0FBQ1QsSUFBSVUsSUFBSSxHQUFFLElBQUksQ0FBQztRQUNsRlQsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDO1NBQU87SUFDL0IsT0FBTztRQUNMLCtCQUErQjtRQUMvQlgsSUFBSVUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDO1NBQVc7SUFDbkMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJzdC8uL3BhZ2VzL2FwaS9wb3N0Y29udGFjdC5qcz9iNWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ25vZGU6ZnMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xyXG4gICAgICBsZXQgZGF0YSA9IGF3YWl0IGZzLnByb21pc2VzLnJlYWRkaXIoJ2NvbnRhY3RkYXRhJyk7XHJcbiAgICAgIGZzLndyaXRlRmlsZShgY29udGFjdGRhdGEvJHtkYXRhLmxlbmd0aCArIDF9Lmpzb25gLCBKU09OLnN0cmluZ2lmeShyZXEuYm9keSksKCk9Pnt9KTtcclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oW1wiZG9uZVwiXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBIYW5kbGUgYW55IG90aGVyIEhUVFAgbWV0aG9kXHJcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKFtcImFsbEJsb2dzXCJdKTtcclxuICAgIH1cclxuICB9Il0sIm5hbWVzIjpbImZzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImRhdGEiLCJwcm9taXNlcyIsInJlYWRkaXIiLCJ3cml0ZUZpbGUiLCJsZW5ndGgiLCJKU09OIiwic3RyaW5naWZ5IiwiYm9keSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/postcontact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/postcontact.js"));
module.exports = __webpack_exports__;

})();