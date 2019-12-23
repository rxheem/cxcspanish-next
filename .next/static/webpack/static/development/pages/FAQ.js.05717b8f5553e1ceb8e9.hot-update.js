webpackHotUpdate("static/development/pages/FAQ.js",{

/***/ "./common/DropItem.js":
/*!****************************!*\
  !*** ./common/DropItem.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var DropItem = function DropItem(props) {
  return __jsx("div", null, __jsx("input", {
    type: "checkbox",
    id: props.id,
    name: "q",
    className: "questions"
  }), __jsx("div", {
    className: "plus"
  }), __jsx("label", {
    "for": props.id,
    "class": "question"
  }, __jsx("li", {
    style: {
      paddingBottom: "15px"
    }
  }, " ", props.question)), __jsx("div", {
    className: "answers has-text-dark"
  }, __jsx("p", {
    style: {
      color: "#000"
    }
  }, " ", props.answer)));
};

/* harmony default export */ __webpack_exports__["default"] = (DropItem);

/***/ })

})
//# sourceMappingURL=FAQ.js.05717b8f5553e1ceb8e9.hot-update.js.map