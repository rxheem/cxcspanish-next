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
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-animated-css */ "./node_modules/react-animated-css/lib/index.js");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var PaperView = function PaperView(props) {
  return __jsx("li", {
    id: uuid__WEBPACK_IMPORTED_MODULE_1___default()()
  }, __jsx("a", {
    target: "_blank",
    download: true,
    href: props.href
  }, __jsx("style", null, "\n    @media only screen and (min-width: 600px) {\n      .preview-image {\n        max-height: 200px;\n        max-width: 123.3px;\n      }\n    }\n\n    @media only screen and (max-width: 601px) {\n      .preview-image {\n        max-height: 250px;\n        max-width: 108px;\n      }\n    }\n    "), __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx(react_animated_css__WEBPACK_IMPORTED_MODULE_3__["Animated"], {
    animationIn: "slideInRight",
    animationOut: "fadeOut",
    isVisible: true
  }, __jsx("figure", {
    className: "image"
  }, __jsx("img", {
    className: "preview-image",
    alt: "past paper",
    src: props.src
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (PaperView);

/***/ })

})
//# sourceMappingURL=index.js.8fffc52a80c9a5b68461.hot-update.js.map