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
    className: "jsx-787352105"
  }, __jsx("input", {
    type: "checkbox",
    id: props.id,
    name: "q",
    className: "jsx-787352105" + " " + "questions"
  }), __jsx("div", {
    className: "jsx-787352105" + " " + "plus"
  }), __jsx("label", {
    "for": props.id,
    "class": "question",
    className: "jsx-787352105"
  }, __jsx("li", {
    style: {
      paddingBottom: "15px"
    },
    className: "jsx-787352105"
  }, " ", props.question)), __jsx("div", {
    className: "jsx-787352105" + " " + "answers has-text-dark"
  }, __jsx("p", {
    style: {
      color: "#000"
    },
    className: "jsx-787352105"
  }, " ", props.answer)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "787352105"
  }, ".content.jsx-787352105{width:99%;}.centerplease.jsx-787352105{margin:0 auto;max-width:270px;font-size:40px;}.question.jsx-787352105{position:relative;margin:0;padding:0px 0px 0px 30px;display:block;width:100%;cursor:pointer;}.answers.jsx-787352105{margin:5px 0;color:black !important;max-height:0;overflow:hidden;z-index:-1;position:relative;opacity:0;-webkit-transition:0.7s ease;-moz-transition:0.7s ease;-o-transition:0.7s ease;-webkit-transition:0.7s ease;transition:0.7s ease;}.answers.jsx-787352105{background:#f2f2f2;color:black !important;margin:5px 0;max-height:0;overflow:hidden;z-index:-1;position:relative;opacity:0;-webkit-transition:0.7s ease;-moz-transition:0.7s ease;-o-transition:0.7s ease;-webkit-transition:0.7s ease;transition:0.7s ease;}.questions.jsx-787352105:checked~.answers.jsx-787352105{max-height:500px;opacity:1;padding:15px;}.plus.jsx-787352105{position:absolute;margin-left:5px;z-index:5;font-size:1em;line-height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:0.3s ease;-moz-transition:0.3s ease;-o-transition:0.3s ease;-webkit-transition:0.3s ease;transition:0.3s ease;}.questions.jsx-787352105:checked~.plus.jsx-787352105{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.questions.jsx-787352105 p.jsx-787352105{color:black !important;}.questions.jsx-787352105{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWhlZW1tY2RvbmFsZC9EZXNrdG9wL2N4Y3NwYW5pc2gtbmV4dC9jb21tb24vRHJvcEl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWdCLEFBR21CLEFBSUksQUFNSSxBQVNMLEFBY00sQUFlRixBQU1DLEFBaUJjLEFBT1QsQUFJVixVQWpGZixHQW1CeUIsQUErRHpCLENBOUVrQixHQTRDTixDQXRDRCxBQTRDTyxDQXJCTyxJQTZDekIsSUFuRTJCLEFBc0NaLEdBNUNFLEVBa0VjLEVBaEJuQixFQW5DRyxJQThCZixFQWhCZSxFQXNCQyxDQWxEaEIsSUFla0IsR0FURixHQXVCRCxHQXNCSSxHQWVVLElBbERoQixDQVRBLEVBdUJLLE9Bc0JTLENBbkNQLENBVEgsT0F1QkosSUFvQ2EsSUExRDFCLEVBU1ksQ0FjUSxLQXFCSSxJQWxDTyxTQWNuQixTQXFCVyxDQXBCUSxVQWRILFVBbUNOLFNBcEJNLE9BZEYsSUFtQ1AsU0FZbkIsTUFoQzBCLEtBZEgsbUJBZUEsK0JBZHZCLGVBa0MrQixJQW5CL0IseUJBb0I0QiwwQkFDRix3QkFDSCxrREFDdkIiLCJmaWxlIjoiL1VzZXJzL3JhaGVlbW1jZG9uYWxkL0Rlc2t0b3AvY3hjc3BhbmlzaC1uZXh0L2NvbW1vbi9Ecm9wSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgRHJvcEl0ZW0gPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPXtwcm9wcy5pZH0gbmFtZT1cInFcIiBjbGFzc05hbWU9XCJxdWVzdGlvbnNcIiAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGx1c1wiPjwvZGl2PlxuICAgIDxsYWJlbCBmb3I9e3Byb3BzLmlkfSBjbGFzcz1cInF1ZXN0aW9uXCI+XG4gICAgICA8bGkgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogXCIxNXB4XCIgfX0+IHtwcm9wcy5xdWVzdGlvbn08L2xpPlxuICAgIDwvbGFiZWw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXJzIGhhcy10ZXh0LWRhcmtcIj5cbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIiMwMDBcIiB9fT4ge3Byb3BzLmFuc3dlcn08L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGVudCB7XG4gICAgICAgIHdpZHRoOiA5OSU7XG4gICAgICB9XG5cbiAgICAgIC5jZW50ZXJwbGVhc2Uge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiAyNzBweDtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgfVxuXG4gICAgICAucXVlc3Rpb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMzBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5hbnN3ZXJzIHtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC43cyBlYXNlO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IDAuN3MgZWFzZTtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogMC43cyBlYXNlO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIC5hbnN3ZXJzIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC43cyBlYXNlO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IDAuN3MgZWFzZTtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogMC43cyBlYXNlO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIC5xdWVzdGlvbnM6Y2hlY2tlZCB+IC5hbnN3ZXJzIHtcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICB9XG5cbiAgICAgIC5wbHVzIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICB6LWluZGV4OiA1O1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW8tdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgICAgIC1vLXRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgICAgfVxuXG4gICAgICAucXVlc3Rpb25zOmNoZWNrZWQgfiAucGx1cyB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICB9XG5cbiAgICAgIC5xdWVzdGlvbnMgcCB7XG4gICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAucXVlc3Rpb25zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcEl0ZW07XG4iXX0= */\n/*@ sourceURL=/Users/raheemmcdonald/Desktop/cxcspanish-next/common/DropItem.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (DropItem);

/***/ })

})
//# sourceMappingURL=FAQ.js.f7737209d68d2342f6e3.hot-update.js.map