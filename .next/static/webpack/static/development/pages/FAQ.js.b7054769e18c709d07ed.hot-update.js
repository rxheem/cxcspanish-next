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
  }, "+"), __jsx("label", {
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
  }, ".content.jsx-793257128{width:99%;}.centerplease.jsx-793257128{margin:0 auto;max-width:270px;font-size:40px;}.question.jsx-793257128{position:relative;margin:0;padding:10px 5px 0px 40px;display:block;width:100%;cursor:pointer;}.answers.jsx-793257128{background:white;margin:5px 0;max-height:0;overflow:hidden;z-index:-1;position:relative;opacity:0;-webkit-transition:0.7s ease;-moz-transition:0.7s ease;-o-transition:0.7s ease;-webkit-transition:0.7s ease;transition:0.7s ease;}.questions.jsx-793257128:checked~.answers.jsx-793257128{max-height:500px;opacity:100;padding:15px;}.plus.jsx-793257128{position:absolute;margin-left:5px;z-index:5;font-size:2em;line-height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:0.3s ease;-moz-transition:0.3s ease;-o-transition:0.3s ease;-webkit-transition:0.3s ease;transition:0.3s ease;}.questions.jsx-793257128:checked~.plus.jsx-793257128{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.questions.jsx-793257128{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWhlZW1tY2RvbmFsZC9EZXNrdG9wL2N4Y3NwYW5pc2gtbmV4dC9jb21tb24vRHJvcEl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJnQixBQUdtQixBQUlJLEFBTUksQUFTRCxBQWNBLEFBTUMsQUFpQmMsQUFPbkIsVUE5RGYsR0ErREEsQ0EzRGtCLEdBZUgsQUFjRCxDQXRCSCxBQTRCTyxTQTNCVSxFQXNCYixDQTdCRSxBQWVGLEVBb0NnQixFQWhCbkIsUUFMWixDQWRrQixDQW9CRixDQW5DaEIsUUFPZ0IsS0E2QkcsQ0FwQk4sRUFtQ2dCLE1BM0NoQixHQVNPLEtBb0JPLEdBNUJWLFVBU0wsQUFrQ2MsS0ExQzFCLEtBUytCLEVBbUJQLHNCQUNELEtBbkJLLGdCQW9CTixVQW5CSSxVQW9CUCxTQVluQixLQS9CdUIsa0RBQ3ZCLHFCQW1CK0IsNkJBQ0gsMEJBQ0Ysd0JBQ0gsa0RBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9yYWhlZW1tY2RvbmFsZC9EZXNrdG9wL2N4Y3NwYW5pc2gtbmV4dC9jb21tb24vRHJvcEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IERyb3BJdGVtID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxuICAgIDxpbnB1dFxuICAgICAgY2hlY2tlZFxuICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgIGlkPXtwcm9wcy5pZH1cbiAgICAgIG5hbWU9XCJxXCJcbiAgICAgIGNsYXNzTmFtZT1cInF1ZXN0aW9uc1wiXG4gICAgLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBsdXNcIj4rPC9kaXY+XG4gICAgPGxhYmVsIGZvcj17cHJvcHMuaWR9IGNsYXNzPVwicXVlc3Rpb25cIj5cbiAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiBcIjE1cHhcIiB9fT4ge3Byb3BzLnF1ZXN0aW9ufTwvbGk+XG4gICAgPC9sYWJlbD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlcnNcIj5cbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIiMwMDBcIiB9fT4ge3Byb3BzLmFuc3dlcn08L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGVudCB7XG4gICAgICAgIHdpZHRoOiA5OSU7XG4gICAgICB9XG5cbiAgICAgIC5jZW50ZXJwbGVhc2Uge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiAyNzBweDtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgfVxuXG4gICAgICAucXVlc3Rpb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweCAwcHggNDBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAuYW5zd2VycyB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICBtYXgtaGVpZ2h0OiAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuN3MgZWFzZTtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiAwLjdzIGVhc2U7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IDAuN3MgZWFzZTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC43cyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAucXVlc3Rpb25zOmNoZWNrZWQgfiAuYW5zd2VycyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICBvcGFjaXR5OiAxMDA7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICB9XG5cbiAgICAgIC5wbHVzIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAucXVlc3Rpb25zOmNoZWNrZWQgfiAucGx1cyB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICB9XG5cbiAgICAgIC5xdWVzdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wSXRlbTtcbiJdfQ== */\n/*@ sourceURL=/Users/raheemmcdonald/Desktop/cxcspanish-next/common/DropItem.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (DropItem);

/***/ })

})
//# sourceMappingURL=FAQ.js.b7054769e18c709d07ed.hot-update.js.map