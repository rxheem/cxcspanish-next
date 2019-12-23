webpackHotUpdate("static/development/pages/index.js",{

/***/ "./common/PaperView.js":
/*!*****************************!*\
  !*** ./common/PaperView.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var PaperView = function PaperView(props) {
  return __jsx("a", {
    download: true,
    href: props.href
  }, __jsx("style", null, "\n    @media only screen and (min-width: 600px) {\n      .preview-image {\n        max-height: 200px;\n        max-width: 120px;\n        padding-right: 15px;\n      }\n    }\n\n    @media only screen and (max-width: 601px) {\n      .preview-image {\n        max-height: 250px;\n        max-width: 150px;\n        padding-right: 15px;\n      }\n    }\n    "), __jsx("img", {
    className: "preview-image",
    alt: "past paper",
    src: props.src
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (PaperView);

/***/ })

})
//# sourceMappingURL=index.js.07140d206a49c19b23ae.hot-update.js.map