webpackHotUpdate("static/development/pages/FAQ.js",{

/***/ "./common/DropItem.js":
/*!****************************!*\
  !*** ./common/DropItem.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var DropItem = function DropItem(props) {
  return __jsx("div", {
    className: "jsx-793257128"
  }, __jsx("input", {
    checked: true,
    type: "checkbox",
    id: props.id,
    name: "q",
    className: "jsx-793257128" + " " + "questions"
  }), __jsx("div", {
    className: "jsx-793257128" + " " + "plus"
  }), __jsx("label", {
    "for": props.id,
    "class": "question",
    className: "jsx-793257128"
  }, __jsx("li", {
    style: {
      paddingBottom: "15px"
    },
    className: "jsx-793257128"
  }, " ", props.question)), __jsx("div", {
    className: "jsx-793257128" + " " + "answers"
  }, __jsx("p", {
    style: {
      color: "#000"
    },
    className: "jsx-793257128"
  }, " ", props.answer)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "793257128"
  }, ".content.jsx-793257128{width:99%;}.centerplease.jsx-793257128{margin:0 auto;max-width:270px;font-size:40px;}.question.jsx-793257128{position:relative;margin:0;padding:10px 5px 0px 40px;display:block;width:100%;cursor:pointer;}.answers.jsx-793257128{background:white;margin:5px 0;max-height:0;overflow:hidden;z-index:-1;position:relative;opacity:0;-webkit-transition:0.7s ease;-moz-transition:0.7s ease;-o-transition:0.7s ease;-webkit-transition:0.7s ease;transition:0.7s ease;}.questions.jsx-793257128:checked~.answers.jsx-793257128{max-height:500px;opacity:100;padding:15px;}.plus.jsx-793257128{position:absolute;margin-left:5px;z-index:5;font-size:2em;line-height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:0.3s ease;-moz-transition:0.3s ease;-o-transition:0.3s ease;-webkit-transition:0.3s ease;transition:0.3s ease;}.questions.jsx-793257128:checked~.plus.jsx-793257128{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.questions.jsx-793257128{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWhlZW1tY2RvbmFsZC9EZXNrdG9wL2N4Y3NwYW5pc2gtbmV4dC9jb21tb24vRHJvcEl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJnQixBQUdtQixBQUlJLEFBTUksQUFTRCxBQWNBLEFBTUMsQUFpQmMsQUFPbkIsVUE5RGYsR0ErREEsQ0EzRGtCLEdBZUgsQUFjRCxDQXRCSCxBQTRCTyxTQTNCVSxFQXNCYixDQTdCRSxBQWVGLEVBb0NnQixFQWhCbkIsUUFMWixDQWRrQixDQW9CRixDQW5DaEIsUUFPZ0IsS0E2QkcsQ0FwQk4sRUFtQ2dCLE1BM0NoQixHQVNPLEtBb0JPLEdBNUJWLFVBU0wsQUFrQ2MsS0ExQzFCLEtBUytCLEVBbUJQLHNCQUNELEtBbkJLLGdCQW9CTixVQW5CSSxVQW9CUCxTQVluQixLQS9CdUIsa0RBQ3ZCLHFCQW1CK0IsNkJBQ0gsMEJBQ0Ysd0JBQ0gsa0RBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9yYWhlZW1tY2RvbmFsZC9EZXNrdG9wL2N4Y3NwYW5pc2gtbmV4dC9jb21tb24vRHJvcEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IERyb3BJdGVtID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIDxpbnB1dFxuICAgICAgY2hlY2tlZFxuICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgIGlkPXtwcm9wcy5pZH1cbiAgICAgIG5hbWU9XCJxXCJcbiAgICAgIGNsYXNzTmFtZT1cInF1ZXN0aW9uc1wiXG4gICAgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBsdXNcIj48L2Rpdj5cbiAgICA8bGFiZWwgZm9yPXtwcm9wcy5pZH0gY2xhc3M9XCJxdWVzdGlvblwiPlxuICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiMTVweFwiIH19PiB7cHJvcHMucXVlc3Rpb259PC9saT5cbiAgICA8L2xhYmVsPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2Vyc1wiPlxuICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwiIzAwMFwiIH19PiB7cHJvcHMuYW5zd2VyfTwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDk5JTtcbiAgICAgIH1cblxuICAgICAgLmNlbnRlcnBsZWFzZSB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDI3MHB4O1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICB9XG5cbiAgICAgIC5xdWVzdGlvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggNXB4IDBweCA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIC5hbnN3ZXJzIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC43cyBlYXNlO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IDAuN3MgZWFzZTtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogMC43cyBlYXNlO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIC5xdWVzdGlvbnM6Y2hlY2tlZCB+IC5hbnN3ZXJzIHtcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgIG9wYWNpdHk6IDEwMDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIH1cblxuICAgICAgLnBsdXMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIC5xdWVzdGlvbnM6Y2hlY2tlZCB+IC5wbHVzIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cblxuICAgICAgLnF1ZXN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERyb3BJdGVtO1xuIl19 */\n/*@ sourceURL=/Users/raheemmcdonald/Desktop/cxcspanish-next/common/DropItem.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (DropItem);

/***/ })

})
//# sourceMappingURL=FAQ.js.fadff554a7ad889b9510.hot-update.js.map