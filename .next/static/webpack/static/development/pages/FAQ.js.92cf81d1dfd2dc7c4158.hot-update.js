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
    className: "jsx-4009350282"
  }, __jsx("input", {
    type: "checkbox",
    id: props.id,
    name: "q",
    className: "jsx-4009350282" + " " + "questions"
  }), __jsx("div", {
    className: "jsx-4009350282" + " " + "plus"
  }), __jsx("label", {
    "for": props.id,
    "class": "question",
    className: "jsx-4009350282"
  }, __jsx("li", {
    style: {
      paddingBottom: "15px"
    },
    className: "jsx-4009350282"
  }, " ", props.question)), __jsx("div", {
    className: "jsx-4009350282" + " " + "answers"
  }, __jsx("p", {
    style: {
      color: "#000"
    },
    className: "jsx-4009350282"
  }, " ", props.answer)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4009350282"
  }, ".content.jsx-4009350282{width:99%;}.centerplease.jsx-4009350282{margin:0 auto;max-width:270px;font-size:40px;}.question.jsx-4009350282{position:relative;margin:0;padding:10px 5px 0px 40px;display:block;width:100%;cursor:pointer;}.answers.jsx-4009350282{color:#000;margin:5px 0;max-height:0;overflow:hidden;z-index:-1;position:relative;opacity:100;-webkit-transition:0.7s ease;-moz-transition:0.7s ease;-o-transition:0.7s ease;-webkit-transition:0.7s ease;transition:0.7s ease;}.questions.jsx-4009350282:checked~.answers.jsx-4009350282{max-height:500px;opacity:1;padding:15px;}.plus.jsx-4009350282{position:absolute;margin-left:5px;z-index:5;font-size:2em;line-height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:0.3s ease;-moz-transition:0.3s ease;-o-transition:0.3s ease;-webkit-transition:0.3s ease;transition:0.3s ease;}.questions.jsx-4009350282:checked~.plus.jsx-4009350282{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.questions.jsx-4009350282{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWhlZW1tY2RvbmFsZC9EZXNrdG9wL2N4Y3NwYW5pc2gtbmV4dC9jb21tb24vRHJvcEl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWdCLEFBR21CLEFBSUksQUFNSSxBQVVQLEFBY00sQUFNQyxBQWlCYyxBQU9uQixVQS9EZixDQW9CZSxFQTRDZixDQTVEa0IsR0E4Qk4sQ0F2QkQsQUE2Qk8sTUFuQkgsR0FUYSxBQXVCYixHQTlCRSxFQW9EYyxFQWhCbkIsR0FuQk0sR0FjbEIsSUFNZ0IsQ0FwQ2hCLFFBT2dCLEFBVUgsS0FvQk0sR0FlVSxHQWxDVCxHQVZQLFFBOEJjLEdBN0JWLElBVUgsTUFrQ1ksS0EzQzFCLENBVStCLE1BbUJQLHNCQUNELENBbkJLLG9CQW9CTixNQW5CSSxjQW9CUCxTQVluQixDQS9CdUIsa0RBQ3ZCLHlCQW1CK0IsNkJBQ0gsMEJBQ0Ysd0JBQ0gsa0RBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9yYWhlZW1tY2RvbmFsZC9EZXNrdG9wL2N4Y3NwYW5pc2gtbmV4dC9jb21tb24vRHJvcEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IERyb3BJdGVtID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD17cHJvcHMuaWR9IG5hbWU9XCJxXCIgY2xhc3NOYW1lPVwicXVlc3Rpb25zXCIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBsdXNcIj48L2Rpdj5cbiAgICA8bGFiZWwgZm9yPXtwcm9wcy5pZH0gY2xhc3M9XCJxdWVzdGlvblwiPlxuICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiMTVweFwiIH19PiB7cHJvcHMucXVlc3Rpb259PC9saT5cbiAgICA8L2xhYmVsPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2Vyc1wiPlxuICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwiIzAwMFwiIH19PiB7cHJvcHMuYW5zd2VyfTwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDk5JTtcbiAgICAgIH1cblxuICAgICAgLmNlbnRlcnBsZWFzZSB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDI3MHB4O1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICB9XG5cbiAgICAgIC5xdWVzdGlvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggNXB4IDBweCA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmFuc3dlcnMge1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3BhY2l0eTogMTAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuN3MgZWFzZTtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiAwLjdzIGVhc2U7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IDAuN3MgZWFzZTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC43cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAucXVlc3Rpb25zOmNoZWNrZWQgfiAuYW5zd2VycyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgfVxuXG4gICAgICAucGx1cyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgICAgICAtby10cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICAgIH1cblxuICAgICAgLnF1ZXN0aW9uczpjaGVja2VkIH4gLnBsdXMge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgfVxuXG4gICAgICAucXVlc3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcEl0ZW07XG4iXX0= */\n/*@ sourceURL=/Users/raheemmcdonald/Desktop/cxcspanish-next/common/DropItem.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (DropItem);

/***/ })

})
//# sourceMappingURL=FAQ.js.92cf81d1dfd2dc7c4158.hot-update.js.map