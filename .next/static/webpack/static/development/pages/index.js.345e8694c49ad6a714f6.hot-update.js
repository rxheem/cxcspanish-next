webpackHotUpdate("static/development/pages/index.js",{

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

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var NavItem = function NavItem(props) {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: props.href
  }, __jsx("a", {
    className: "navbar-item",
    style: {
      display: props.isLive ? "visible" : "none"
    }
  }, props.hasIcon ? __jsx("i", {
    className: props.iconClass,
    style: {
      color: props.color
    }
  }) : null, props.title));
};

/* harmony default export */ __webpack_exports__["default"] = (NavItem);

/***/ })

})
//# sourceMappingURL=index.js.345e8694c49ad6a714f6.hot-update.js.map