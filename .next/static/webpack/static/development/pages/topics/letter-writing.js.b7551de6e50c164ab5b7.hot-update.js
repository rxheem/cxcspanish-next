webpackHotUpdate("static/development/pages/topics/letter-writing.js",{

/***/ "./common/NavItem.js":
/*!***************************!*\
  !*** ./common/NavItem.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-fontawesome */ "./node_modules/react-fontawesome/lib/index.js");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var NavItem = function NavItem(props) {
  return __jsx("a", {
    href: props.href,
    className: "navbar-item",
    style: {
      display: props.hide ? "none" : "visible"
    }
  }, props.hasIcon ? __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      paddingRight: "7px"
    },
    name: props.name
  }) : null, props.title);
};

/* harmony default export */ __webpack_exports__["default"] = (NavItem);

/***/ })

})
//# sourceMappingURL=letter-writing.js.b7551de6e50c164ab5b7.hot-update.js.map