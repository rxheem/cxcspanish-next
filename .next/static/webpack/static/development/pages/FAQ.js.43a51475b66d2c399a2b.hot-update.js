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
    className: "jsx-4280818797"
  }, __jsx("input", {
    type: "checkbox",
    id: props.id,
    name: "q",
    className: "jsx-4280818797" + " " + "questions"
  }), __jsx("div", {
    className: "jsx-4280818797" + " " + "plus"
  }), __jsx("label", {
    "for": props.id,
    "class": "question",
    className: "jsx-4280818797"
  }, __jsx("li", {
    style: {
      paddingBottom: "15px"
    },
    className: "jsx-4280818797"
  }, " ", props.question)), __jsx("div", {
    className: "jsx-4280818797" + " " + "answers has-text-dark"
  }, __jsx("p", {
    style: {
      color: "#000"
    },
    className: "jsx-4280818797"
  }, " ", props.answer)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4280818797"
  }, ".content.jsx-4280818797{width:99%;}.centerplease.jsx-4280818797{margin:0 auto;max-width:270px;font-size:40px;}.question.jsx-4280818797{position:relative;margin:0;padding:0px 0px 0px 30px;display:block;width:100%;cursor:pointer;}.answers.jsx-4280818797{margin:5px 0;color:black !important;max-height:0;overflow:hidden;z-index:-1;position:relative;opacity:0;-webkit-transition:0.7s ease;-moz-transition:0.7s ease;-o-transition:0.7s ease;-webkit-transition:0.7s ease;transition:0.7s ease;}.answers.jsx-4280818797 p.jsx-4280818797{color:black;margin:5px 0;max-height:0;overflow:hidden;z-index:-1;position:relative;opacity:0;-webkit-transition:0.7s ease;-moz-transition:0.7s ease;-o-transition:0.7s ease;-webkit-transition:0.7s ease;transition:0.7s ease;}.questions.jsx-4280818797:checked~.answers.jsx-4280818797{max-height:500px;opacity:1;padding:15px;}.plus.jsx-4280818797{position:absolute;margin-left:5px;z-index:5;font-size:1em;line-height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:0.3s ease;-moz-transition:0.3s ease;-o-transition:0.3s ease;-webkit-transition:0.3s ease;transition:0.3s ease;}.questions.jsx-4280818797:checked~.plus.jsx-4280818797{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.questions.jsx-4280818797 p.jsx-4280818797{color:black !important;}.questions.jsx-4280818797{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWhlZW1tY2RvbmFsZC9EZXNrdG9wL2N4Y3NwYW5pc2gtbmV4dC9jb21tb24vRHJvcEl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWdCLEFBR21CLEFBSUksQUFNSSxBQVNMLEFBY0QsQUFjSyxBQU1DLEFBaUJjLEFBT1QsQUFJVixVQWhGZixFQWlDZSxDQWRVLEFBOER6QixDQTdFa0IsR0EyQ04sQ0FyQ0QsQUEyQ08sS0F3QmxCLEVBM0NlLEVBdkJZLEFBcUNaLEdBM0NFLEVBaUVjLEVBaEJuQixFQWxDRyxFQWVHLEVBY2xCLElBTWdCLENBakRoQixJQWVrQixHQVRGLEVBd0JILElBb0JNLEdBZVUsSUFqRGhCLEFBZU8sQ0F4QlAsU0E0Q2MsQ0FsQ1AsQ0FUSCxNQXdCTCxLQWtDYyxJQXpEMUIsQ0F3QitCLENBZm5CLE1Ba0NZLElBakNPLGtCQWVILEFBbUJMLFdBakNLLFVBa0NOLEtBbkJJLFdBZEEsSUFrQ1AsU0FuQkksQUErQnZCLFdBN0N1Qix1Q0FldkIsV0FkQSxlQWlDK0IsNkJBQ0gsMEJBQ0Ysd0JBQ0gsa0RBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9yYWhlZW1tY2RvbmFsZC9EZXNrdG9wL2N4Y3NwYW5pc2gtbmV4dC9jb21tb24vRHJvcEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IERyb3BJdGVtID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD17cHJvcHMuaWR9IG5hbWU9XCJxXCIgY2xhc3NOYW1lPVwicXVlc3Rpb25zXCIgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBsdXNcIj48L2Rpdj5cbiAgICA8bGFiZWwgZm9yPXtwcm9wcy5pZH0gY2xhc3M9XCJxdWVzdGlvblwiPlxuICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IFwiMTVweFwiIH19PiB7cHJvcHMucXVlc3Rpb259PC9saT5cbiAgICA8L2xhYmVsPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2VycyBoYXMtdGV4dC1kYXJrXCI+XG4gICAgICA8cCBzdHlsZT17eyBjb2xvcjogXCIjMDAwXCIgfX0+IHtwcm9wcy5hbnN3ZXJ9PC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRlbnQge1xuICAgICAgICB3aWR0aDogOTklO1xuICAgICAgfVxuXG4gICAgICAuY2VudGVycGxlYXNlIHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC13aWR0aDogMjcwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgIH1cblxuICAgICAgLnF1ZXN0aW9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDMwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuYW5zd2VycyB7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuN3MgZWFzZTtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiAwLjdzIGVhc2U7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IDAuN3MgZWFzZTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC43cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAuYW5zd2VycyBwIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuN3MgZWFzZTtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiAwLjdzIGVhc2U7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IDAuN3MgZWFzZTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC43cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAucXVlc3Rpb25zOmNoZWNrZWQgfiAuYW5zd2VycyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgfVxuXG4gICAgICAucGx1cyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgICAgICAtby10cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICAgIH1cblxuICAgICAgLnF1ZXN0aW9uczpjaGVja2VkIH4gLnBsdXMge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgfVxuXG4gICAgICAucXVlc3Rpb25zIHAge1xuICAgICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLnF1ZXN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERyb3BJdGVtO1xuIl19 */\n/*@ sourceURL=/Users/raheemmcdonald/Desktop/cxcspanish-next/common/DropItem.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (DropItem);

/***/ })

})
//# sourceMappingURL=FAQ.js.43a51475b66d2c399a2b.hot-update.js.map