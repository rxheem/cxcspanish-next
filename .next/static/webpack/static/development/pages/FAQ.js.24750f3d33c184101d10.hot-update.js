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
    className: "jsx-2559011686"
  }, __jsx("input", {
    type: "checkbox",
    id: props.id,
    name: "q",
    className: "jsx-2559011686" + " " + "questions"
  }), __jsx("div", {
    className: "jsx-2559011686" + " " + "plus"
  }), __jsx("label", {
    "for": props.id,
    "class": "question",
    className: "jsx-2559011686"
  }, __jsx("li", {
    style: {
      paddingBottom: "15px"
    },
    className: "jsx-2559011686"
  }, " ", props.question)), __jsx("div", {
    className: "jsx-2559011686" + " " + "answers"
  }, __jsx("p", {
    style: {
      color: "#000"
    },
    className: "jsx-2559011686"
  }, " ", props.answer)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2559011686"
  }, ".content.jsx-2559011686{width:99%;}.centerplease.jsx-2559011686{margin:0 auto;max-width:270px;font-size:40px;}.question.jsx-2559011686{position:relative;margin:0;padding:10px 5px 0px 40px;display:block;width:100%;cursor:pointer;}.answers.jsx-2559011686{background:#f2f2f2;margin:5px 0;max-height:0;overflow:hidden;z-index:-1;position:relative;opacity:0;-webkit-transition:0.7s ease;-moz-transition:0.7s ease;-o-transition:0.7s ease;-webkit-transition:0.7s ease;transition:0.7s ease;}.questions.jsx-2559011686:checked~.answers.jsx-2559011686{max-height:500px;opacity:1;padding:15px;}.plus.jsx-2559011686{position:absolute;margin-left:5px;z-index:5;font-size:2em;line-height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:0.3s ease;-moz-transition:0.3s ease;-o-transition:0.3s ease;-webkit-transition:0.3s ease;transition:0.3s ease;}.questions.jsx-2559011686:checked~.plus.jsx-2559011686{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.questions.jsx-2559011686{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWhlZW1tY2RvbmFsZC9EZXNrdG9wL2N4Y3NwYW5pc2gtbmV4dC9jb21tb24vRHJvcEl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWdCLEFBR21CLEFBSUksQUFNSSxBQVNDLEFBY0YsQUFNQyxBQWlCYyxBQU9uQixVQTlEZixHQStEQSxDQTNEa0IsR0E2Qk4sQ0F0QkQsQUE0Qk8sQ0FwQkgsUUFQYSxBQXNCYixHQTdCRSxFQWVGLEFBb0NnQixFQWhCbkIsTUFMWixJQU1nQixDQW5DaEIsQUFla0IsUUFSRixLQTZCRyxHQXBCTixBQW1DZ0IsTUEzQ2hCLEtBU08sR0FvQk8sR0E1QlYsVUEyQ1MsRUFsQ2QsR0FSWixPQVMrQixBQW1CUCxzQkFDRCxPQW5CSyxjQW9CTixZQW5CSSxRQW9CUCxTQVluQixPQS9CdUIsa0RBQ3ZCLG1CQW1CK0IsNkJBQ0gsMEJBQ0Ysd0JBQ0gsa0RBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9yYWhlZW1tY2RvbmFsZC9EZXNrdG9wL2N4Y3NwYW5pc2gtbmV4dC9jb21tb24vRHJvcEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IERyb3BJdGVtID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD17cHJvcHMuaWR9IG5hbWU9XCJxXCIgY2xhc3NOYW1lPVwicXVlc3Rpb25zXCIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBsdXNcIj48L2Rpdj5cbiAgICA8bGFiZWwgZm9yPXtwcm9wcy5pZH0gY2xhc3M9XCJxdWVzdGlvblwiPlxuICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiMTVweFwiIH19PiB7cHJvcHMucXVlc3Rpb259PC9saT5cbiAgICA8L2xhYmVsPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2Vyc1wiPlxuICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwiIzAwMFwiIH19PiB7cHJvcHMuYW5zd2VyfTwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDk5JTtcbiAgICAgIH1cblxuICAgICAgLmNlbnRlcnBsZWFzZSB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDI3MHB4O1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICB9XG5cbiAgICAgIC5xdWVzdGlvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggNXB4IDBweCA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICAgIC5hbnN3ZXJzIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjdzIGVhc2U7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogMC43cyBlYXNlO1xuICAgICAgICAtby10cmFuc2l0aW9uOiAwLjdzIGVhc2U7XG4gICAgICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZTtcbiAgICAgIH1cblxuICAgICAgLnF1ZXN0aW9uczpjaGVja2VkIH4gLmFuc3dlcnMge1xuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIH1cblxuICAgICAgLnBsdXMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIC5xdWVzdGlvbnM6Y2hlY2tlZCB+IC5wbHVzIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cblxuICAgICAgLnF1ZXN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERyb3BJdGVtO1xuIl19 */\n/*@ sourceURL=/Users/raheemmcdonald/Desktop/cxcspanish-next/common/DropItem.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (DropItem);

/***/ })

})
//# sourceMappingURL=FAQ.js.24750f3d33c184101d10.hot-update.js.map