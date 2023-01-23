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
exports.id = "pages/api/blogsapi";
exports.ids = ["pages/api/blogsapi"];
exports.modules = {

/***/ "node:fs":
/*!**************************!*\
  !*** external "node:fs" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("node:fs");

/***/ }),

/***/ "(api)/./pages/api/blogsapi.js":
/*!*******************************!*\
  !*** ./pages/api/blogsapi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:fs */ \"node:fs\");\n/* harmony import */ var node_fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fs__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    let data = await node_fs__WEBPACK_IMPORTED_MODULE_0__.promises.readdir(\"blogdata\");\n    data = data.slice(0, parseInt(req.query.count));\n    // res.status(200).json(data);\n    let allBlogs = [];\n    let myfile;\n    // ***********forEach function cant able to await because of certain limitation so use traditional for loop instead.************\n    // data.forEach(async (item)=>{\n    //       // console.log(item);\n    //       myfile = await fs.promises.readFile(('blogdata/' + item),'utf-8');\n    //       allBlogs.push(JSON.parse(myfile));    \n    //     })\n    // *****************************************************************************************************************************\n    for(let index = 0; index < data.length; index++){\n        myfile = await node_fs__WEBPACK_IMPORTED_MODULE_0__.promises.readFile(\"blogdata/\" + data[index], \"utf-8\");\n        allBlogs.push(JSON.parse(myfile));\n    }\n    res.status(200).json(allBlogs);\n// fs.promise.readdir(\"blogdata\",'utf-8',(err,data)=>{\n//   console.log(data);\n//   let allBlogs = [];\n//   data.forEach((item)=>{\n//     console.log(item)\n//     fs.readFile(('blogdata/' + item),(err,data)=>{\n//       allBlogs.push(data);\n//     })\n//   })\n// })\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYmxvZ3NhcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzhCO0FBQ2YsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUMsT0FBTyxNQUFNSixxREFBbUIsQ0FBQztJQUNyQ0ksT0FBT0EsS0FBS0csS0FBSyxDQUFDLEdBQUVDLFNBQVNOLElBQUlPLEtBQUssQ0FBQ0MsS0FBSztJQUM1Qyw4QkFBOEI7SUFDOUIsSUFBSUMsV0FBVyxFQUFFO0lBQ2pCLElBQUlDO0lBQ0osZ0lBQWdJO0lBQ2hJLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsMkVBQTJFO0lBQzNFLCtDQUErQztJQUMvQyxTQUFTO0lBQ1QsZ0lBQWdJO0lBQ2hJLElBQUssSUFBSUMsUUFBUSxHQUFHQSxRQUFRVCxLQUFLVSxNQUFNLEVBQUVELFFBQVM7UUFDaERELFNBQVMsTUFBTVosc0RBQW9CLENBQUUsY0FBY0ksSUFBSSxDQUFDUyxNQUFNLEVBQUU7UUFDMURGLFNBQVNLLElBQUksQ0FBQ0MsS0FBS0MsS0FBSyxDQUFDTjtJQUM3QjtJQUNBVCxJQUFJZ0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1Q7QUFFekIsc0RBQXNEO0FBQ3RELHVCQUF1QjtBQUN2Qix1QkFBdUI7QUFDdkIsMkJBQTJCO0FBQzNCLHdCQUF3QjtBQUN4QixxREFBcUQ7QUFDckQsNkJBQTZCO0FBQzdCLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNQLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJzdC8uL3BhZ2VzL2FwaS9ibG9nc2FwaS5qcz80ODYyIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdub2RlOmZzJztcclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGxldCBkYXRhID0gYXdhaXQgZnMucHJvbWlzZXMucmVhZGRpcihcImJsb2dkYXRhXCIpO1xyXG4gIGRhdGEgPSBkYXRhLnNsaWNlKDAscGFyc2VJbnQocmVxLnF1ZXJ5LmNvdW50KSk7XHJcbiAgLy8gcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XHJcbiAgbGV0IGFsbEJsb2dzID0gW107XHJcbiAgbGV0IG15ZmlsZTtcclxuICAvLyAqKioqKioqKioqKmZvckVhY2ggZnVuY3Rpb24gY2FudCBhYmxlIHRvIGF3YWl0IGJlY2F1c2Ugb2YgY2VydGFpbiBsaW1pdGF0aW9uIHNvIHVzZSB0cmFkaXRpb25hbCBmb3IgbG9vcCBpbnN0ZWFkLioqKioqKioqKioqKlxyXG4gIC8vIGRhdGEuZm9yRWFjaChhc3luYyAoaXRlbSk9PntcclxuICAvLyAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAvLyAgICAgICBteWZpbGUgPSBhd2FpdCBmcy5wcm9taXNlcy5yZWFkRmlsZSgoJ2Jsb2dkYXRhLycgKyBpdGVtKSwndXRmLTgnKTtcclxuICAvLyAgICAgICBhbGxCbG9ncy5wdXNoKEpTT04ucGFyc2UobXlmaWxlKSk7ICAgIFxyXG4gIC8vICAgICB9KVxyXG4gIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICBteWZpbGUgPSBhd2FpdCBmcy5wcm9taXNlcy5yZWFkRmlsZSgoJ2Jsb2dkYXRhLycgKyBkYXRhW2luZGV4XSksJ3V0Zi04JylcclxuICAgICAgICAgIGFsbEJsb2dzLnB1c2goSlNPTi5wYXJzZShteWZpbGUpKTsgICAgXHJcbiAgICAgIH1cclxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oYWxsQmxvZ3MpO1xyXG5cclxuICAvLyBmcy5wcm9taXNlLnJlYWRkaXIoXCJibG9nZGF0YVwiLCd1dGYtOCcsKGVycixkYXRhKT0+e1xyXG4gIC8vICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgLy8gICBsZXQgYWxsQmxvZ3MgPSBbXTtcclxuICAvLyAgIGRhdGEuZm9yRWFjaCgoaXRlbSk9PntcclxuICAvLyAgICAgY29uc29sZS5sb2coaXRlbSlcclxuICAvLyAgICAgZnMucmVhZEZpbGUoKCdibG9nZGF0YS8nICsgaXRlbSksKGVycixkYXRhKT0+e1xyXG4gIC8vICAgICAgIGFsbEJsb2dzLnB1c2goZGF0YSk7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICB9KVxyXG4gIC8vIH0pXHJcbn1cclxuIl0sIm5hbWVzIjpbImZzIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImRhdGEiLCJwcm9taXNlcyIsInJlYWRkaXIiLCJzbGljZSIsInBhcnNlSW50IiwicXVlcnkiLCJjb3VudCIsImFsbEJsb2dzIiwibXlmaWxlIiwiaW5kZXgiLCJsZW5ndGgiLCJyZWFkRmlsZSIsInB1c2giLCJKU09OIiwicGFyc2UiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/blogsapi.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/blogsapi.js"));
module.exports = __webpack_exports__;

})();