webpackHotUpdate("static/development/pages/topics/letter-writing.js",{

/***/ "./common/Answer.js":
/*!**************************!*\
  !*** ./common/Answer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fontawesome */ "./node_modules/react-fontawesome/lib/index.js");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Answer = function Answer(props) {
  return __jsx("div", {
    id: uuid__WEBPACK_IMPORTED_MODULE_2___default()(),
    style: {
      paddingBottom: "20px"
    }
  }, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "has-text-primary",
    name: "angle-double-right"
  }), __jsx("span", {
    className: "has-text-black",
    style: {
      paddingLeft: "5px"
    }
  }, props.text), __jsx("p", {
    style: {
      paddingLeft: "18px"
    },
    className: "has-text-grey"
  }, props.translated, __jsx("a", {
    href: props.href,
    className: props.noIcon ? "is-hidden" : null,
    target: "_blank"
  }, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      paddingLeft: "10px"
    },
    name: "external-link-alt"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Answer);

/***/ })

})
//# sourceMappingURL=letter-writing.js.6b874c4305e10a99f64a.hot-update.js.map