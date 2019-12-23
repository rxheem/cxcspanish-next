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
    className: "jsx-3584422433"
  }, __jsx("input", {
    checked: true,
    type: "checkbox",
    id: props.id,
    name: "q",
    className: "jsx-3584422433" + " " + "questions"
  }), __jsx("div", {
    className: "jsx-3584422433" + " " + "plus"
  }), __jsx("label", {
    "for": props.id,
    "class": "question",
    className: "jsx-3584422433"
  }, __jsx("li", {
    style: {
      paddingBottom: "15px"
    },
    className: "jsx-3584422433"
  }, " ", props.question)), __jsx("div", {
    className: "jsx-3584422433" + " " + "answers"
  }, __jsx("p", {
    style: {
      color: "#000"
    },
    className: "jsx-3584422433"
  }, " ", props.answer)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3584422433"
  }, ".content.jsx-3584422433{width:99%;}.centerplease.jsx-3584422433{margin:0 auto;max-width:270px;font-size:40px;}.question.jsx-3584422433{position:relative;margin:0;padding:10px 5px 0px 40px;display:block;width:100%;cursor:pointer;}.answers.jsx-3584422433{margin:5px 0;max-height:0;overflow:hidden;z-index:-1;position:relative;opacity:0;-webkit-transition:0.7s ease;-moz-transition:0.7s ease;-o-transition:0.7s ease;-webkit-transition:0.7s ease;transition:0.7s ease;}.questions.jsx-3584422433:checked~.answers.jsx-3584422433{max-height:500px;opacity:100;padding:15px;}.plus.jsx-3584422433{position:absolute;margin-left:5px;z-index:5;font-size:2em;line-height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:0.3s ease;-moz-transition:0.3s ease;-o-transition:0.3s ease;-webkit-transition:0.3s ease;transition:0.3s ease;}.questions.jsx-3584422433:checked~.plus.jsx-3584422433{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.questions.jsx-3584422433{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWhlZW1tY2RvbmFsZC9EZXNrdG9wL2N4Y3NwYW5pc2gtbmV4dC9jb21tb24vRHJvcEl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJnQixBQUdtQixBQUlJLEFBTUksQUFTTCxBQWFJLEFBTUMsQUFpQmMsQUFPbkIsVUE3RGYsR0FtQmUsQUEyQ2YsQ0ExRGtCLEdBNEJKLENBckJILEFBMkJPLFFBbEJBLENBUlUsRUFxQmIsQ0E1QkUsRUFrRGMsRUFoQm5CLFFBbEJDLEFBYWIsRUFNZ0IsQ0FsQ2hCLFFBT2dCLEFBU0ksS0FtQkQsR0FlVSxNQTFDaEIsSUFTRCxJQW1CZSxHQTNCVixHQVNjLE9BaUNMLEtBekMxQixPQTJCd0IsVUFsQkksWUFtQkwsY0FsQkcsT0FtQkosaUJBbEJDLEdBbUJKLFNBWW5CLHNDQTlCQSxzQ0FtQitCLDZCQUNILDBCQUNGLHdCQUNILGtEQUN2QiIsImZpbGUiOiIvVXNlcnMvcmFoZWVtbWNkb25hbGQvRGVza3RvcC9jeGNzcGFuaXNoLW5leHQvY29tbW9uL0Ryb3BJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBEcm9wSXRlbSA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICA8aW5wdXRcbiAgICAgIGNoZWNrZWRcbiAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICBpZD17cHJvcHMuaWR9XG4gICAgICBuYW1lPVwicVwiXG4gICAgICBjbGFzc05hbWU9XCJxdWVzdGlvbnNcIlxuICAgIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwbHVzXCI+PC9kaXY+XG4gICAgPGxhYmVsIGZvcj17cHJvcHMuaWR9IGNsYXNzPVwicXVlc3Rpb25cIj5cbiAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiBcIjE1cHhcIiB9fT4ge3Byb3BzLnF1ZXN0aW9ufTwvbGk+XG4gICAgPC9sYWJlbD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlcnNcIj5cbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIiMwMDBcIiB9fT4ge3Byb3BzLmFuc3dlcn08L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGVudCB7XG4gICAgICAgIHdpZHRoOiA5OSU7XG4gICAgICB9XG5cbiAgICAgIC5jZW50ZXJwbGVhc2Uge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiAyNzBweDtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgfVxuXG4gICAgICAucXVlc3Rpb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweCAwcHggNDBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAuYW5zd2VycyB7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC43cyBlYXNlO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IDAuN3MgZWFzZTtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogMC43cyBlYXNlO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIC5xdWVzdGlvbnM6Y2hlY2tlZCB+IC5hbnN3ZXJzIHtcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgIG9wYWNpdHk6IDEwMDtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIH1cblxuICAgICAgLnBsdXMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIC5xdWVzdGlvbnM6Y2hlY2tlZCB+IC5wbHVzIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cblxuICAgICAgLnF1ZXN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERyb3BJdGVtO1xuIl19 */\n/*@ sourceURL=/Users/raheemmcdonald/Desktop/cxcspanish-next/common/DropItem.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (DropItem);

/***/ })

})
//# sourceMappingURL=FAQ.js.b14d2710430c78d30a85.hot-update.js.map