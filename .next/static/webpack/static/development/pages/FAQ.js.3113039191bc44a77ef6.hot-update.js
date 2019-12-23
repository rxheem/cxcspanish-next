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
    className: "jsx-2445095592"
  }, __jsx("input", {
    type: "checkbox",
    id: props.id,
    name: "q",
    className: "jsx-2445095592" + " " + "questions"
  }), __jsx("div", {
    className: "jsx-2445095592" + " " + "plus"
  }), __jsx("label", {
    "for": props.id,
    "class": "question",
    className: "jsx-2445095592"
  }, __jsx("li", {
    style: {
      paddingBottom: "15px"
    },
    className: "jsx-2445095592"
  }, " ", props.question)), __jsx("div", {
    className: "jsx-2445095592" + " " + "answers has-text-dark"
  }, __jsx("p", {
    style: {
      color: "#000"
    },
    className: "jsx-2445095592"
  }, " ", props.answer)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2445095592"
  }, ".content.jsx-2445095592{width:99%;}.centerplease.jsx-2445095592{margin:0 auto;max-width:270px;font-size:40px;}.question.jsx-2445095592{position:relative;margin:0;padding:0px 0px 0px 30px;display:block;width:100%;cursor:pointer;}.answers.jsx-2445095592{margin:5px 0;color:black !important;max-height:0;overflow:hidden;z-index:-1;position:relative;opacity:0;-webkit-transition:0.7s ease;-moz-transition:0.7s ease;-o-transition:0.7s ease;-webkit-transition:0.7s ease;transition:0.7s ease;}.answers.jsx-2445095592{margin:5px 0;max-height:0;overflow:hidden;z-index:-1;position:relative;opacity:0;-webkit-transition:0.7s ease;-moz-transition:0.7s ease;-o-transition:0.7s ease;-webkit-transition:0.7s ease;transition:0.7s ease;}.questions.jsx-2445095592:checked~.answers.jsx-2445095592{max-height:500px;opacity:1;padding:15px;}.plus.jsx-2445095592{position:absolute;margin-left:5px;z-index:5;font-size:1em;line-height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:0.3s ease;-moz-transition:0.3s ease;-o-transition:0.3s ease;-webkit-transition:0.3s ease;transition:0.3s ease;}.questions.jsx-2445095592:checked~.plus.jsx-2445095592{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.questions.jsx-2445095592 p.jsx-2445095592{color:black !important;}.questions.jsx-2445095592{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWhlZW1tY2RvbmFsZC9EZXNrdG9wL2N4Y3NwYW5pc2gtbmV4dC9jb21tb24vRHJvcEl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWdCLEFBR21CLEFBSUksQUFNSSxBQVNMLEFBY0EsQUFhSSxBQU1DLEFBaUJjLEFBT1QsQUFJVixVQS9FZixHQW1CeUIsQUFjVixBQStDZixDQTVFa0IsR0EwQ04sQ0FwQ0QsQUEwQ08sS0F3QmxCLEdBMUNrQixDQXZCUyxBQW9DWixHQTFDRSxFQWdFYyxFQWhCbkIsRUFqQ0csSUE0QmYsRUFiYSxFQW1CRyxDQWhEaEIsSUFla0IsR0FURixDQXdCSSxLQW1CRCxHQWVVLElBaERoQixDQVRBLEtBd0JELElBbUJlLENBakNQLENBVEgsSUF3QmMsT0FpQ0wsSUF4RDFCLEVBU1ksTUFpQ1ksSUFoQ08sTUFjSCxZQW1CTCxXQWhDSyxHQWNGLE9BbUJKLGdCQWhDSSxDQWNILEdBbUJKLFNBWW5CLFdBNUN1QiwyQkFjdkIsdUJBYkEsZUFnQytCLDZCQUNILDBCQUNGLHdCQUNILGtEQUN2QiIsImZpbGUiOiIvVXNlcnMvcmFoZWVtbWNkb25hbGQvRGVza3RvcC9jeGNzcGFuaXNoLW5leHQvY29tbW9uL0Ryb3BJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBEcm9wSXRlbSA9IHByb3BzID0+IChcbiAgPGRpdj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9e3Byb3BzLmlkfSBuYW1lPVwicVwiIGNsYXNzTmFtZT1cInF1ZXN0aW9uc1wiIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwbHVzXCI+PC9kaXY+XG4gICAgPGxhYmVsIGZvcj17cHJvcHMuaWR9IGNsYXNzPVwicXVlc3Rpb25cIj5cbiAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiBcIjE1cHhcIiB9fT4ge3Byb3BzLnF1ZXN0aW9ufTwvbGk+XG4gICAgPC9sYWJlbD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlcnMgaGFzLXRleHQtZGFya1wiPlxuICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwiIzAwMFwiIH19PiB7cHJvcHMuYW5zd2VyfTwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDk5JTtcbiAgICAgIH1cblxuICAgICAgLmNlbnRlcnBsZWFzZSB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDI3MHB4O1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICB9XG5cbiAgICAgIC5xdWVzdGlvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAzMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmFuc3dlcnMge1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjdzIGVhc2U7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogMC43cyBlYXNlO1xuICAgICAgICAtby10cmFuc2l0aW9uOiAwLjdzIGVhc2U7XG4gICAgICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZTtcbiAgICAgIH1cblxuICAgICAgLmFuc3dlcnMge1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuN3MgZWFzZTtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiAwLjdzIGVhc2U7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IDAuN3MgZWFzZTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC43cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAucXVlc3Rpb25zOmNoZWNrZWQgfiAuYW5zd2VycyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgfVxuXG4gICAgICAucGx1cyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgei1pbmRleDogNTtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1vLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgICAgICAtby10cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICAgIH1cblxuICAgICAgLnF1ZXN0aW9uczpjaGVja2VkIH4gLnBsdXMge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgfVxuXG4gICAgICAucXVlc3Rpb25zIHAge1xuICAgICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLnF1ZXN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERyb3BJdGVtO1xuIl19 */\n/*@ sourceURL=/Users/raheemmcdonald/Desktop/cxcspanish-next/common/DropItem.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (DropItem);

/***/ })

})
//# sourceMappingURL=FAQ.js.3113039191bc44a77ef6.hot-update.js.map