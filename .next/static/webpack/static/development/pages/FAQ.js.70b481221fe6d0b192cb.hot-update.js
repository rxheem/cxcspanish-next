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
    className: "jsx-1305781130"
  }, __jsx("input", {
    type: "checkbox",
    id: props.id,
    name: "q",
    className: "jsx-1305781130" + " " + "questions"
  }), __jsx("div", {
    className: "jsx-1305781130" + " " + "plus"
  }), __jsx("label", {
    "for": props.id,
    "class": "question",
    className: "jsx-1305781130"
  }, __jsx("li", {
    style: {
      paddingBottom: "15px"
    },
    className: "jsx-1305781130"
  }, " ", props.question)), __jsx("div", {
    className: "jsx-1305781130" + " " + "answers has-text-dark"
  }, __jsx("p", {
    style: {
      color: "#000"
    },
    className: "jsx-1305781130"
  }, " ", props.answer)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1305781130"
  }, ".content.jsx-1305781130{width:99%;}.centerplease.jsx-1305781130{margin:0 auto;max-width:270px;font-size:40px;}.question.jsx-1305781130{position:relative;margin:0;padding:10px 5px 0px 40px;display:block;width:100%;cursor:pointer;}.answers.jsx-1305781130{background:#f2f2f2;margin:5px 0;max-height:0;overflow:hidden;z-index:-1;position:relative;opacity:0;-webkit-transition:0.7s ease;-moz-transition:0.7s ease;-o-transition:0.7s ease;-webkit-transition:0.7s ease;transition:0.7s ease;}.questions.jsx-1305781130:checked~.answers.jsx-1305781130{max-height:500px;opacity:1;padding:15px;}.plus.jsx-1305781130{position:absolute;margin-left:5px;z-index:5;font-size:2em;line-height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transition:0.3s ease;-moz-transition:0.3s ease;-o-transition:0.3s ease;-webkit-transition:0.3s ease;transition:0.3s ease;}.questions.jsx-1305781130:checked~.plus.jsx-1305781130{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-o-transform:rotate(45deg);-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);}.questions.jsx-1305781130{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWhlZW1tY2RvbmFsZC9EZXNrdG9wL2N4Y3NwYW5pc2gtbmV4dC9jb21tb24vRHJvcEl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYWdCLEFBR21CLEFBSUksQUFNSSxBQVVDLEFBY0YsQUFNQyxBQWlCYyxBQU9uQixVQS9EZixHQWdFQSxDQTVEa0IsR0E4Qk4sQ0F2QkQsQUE2Qk8sQ0FwQkgsUUFSYSxBQXVCYixHQTlCRSxFQWdCRixBQW9DZ0IsRUFoQm5CLE1BTFosSUFNZ0IsQ0FwQ2hCLEFBZ0JrQixRQVRGLEtBOEJHLEdBcEJOLEFBbUNnQixNQTVDaEIsS0FVTyxHQW9CTyxHQTdCVixVQTRDUyxFQWxDZCxHQVRaLE9BVStCLEFBbUJQLHNCQUNELE9BbkJLLGNBb0JOLFlBbkJJLFFBb0JQLFNBWW5CLE9BL0J1QixrREFDdkIsbUJBbUIrQiw2QkFDSCwwQkFDRix3QkFDSCxrREFDdkIiLCJmaWxlIjoiL1VzZXJzL3JhaGVlbW1jZG9uYWxkL0Rlc2t0b3AvY3hjc3BhbmlzaC1uZXh0L2NvbW1vbi9Ecm9wSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgRHJvcEl0ZW0gPSBwcm9wcyA9PiAoXG4gIDxkaXY+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPXtwcm9wcy5pZH0gbmFtZT1cInFcIiBjbGFzc05hbWU9XCJxdWVzdGlvbnNcIiAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGx1c1wiPjwvZGl2PlxuICAgIDxsYWJlbCBmb3I9e3Byb3BzLmlkfSBjbGFzcz1cInF1ZXN0aW9uXCI+XG4gICAgICA8bGkgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogXCIxNXB4XCIgfX0+IHtwcm9wcy5xdWVzdGlvbn08L2xpPlxuICAgIDwvbGFiZWw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXJzIGhhcy10ZXh0LWRhcmtcIj5cbiAgICAgIDxwIHN0eWxlPXt7IGNvbG9yOiBcIiMwMDBcIiB9fT4ge3Byb3BzLmFuc3dlcn08L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY29udGVudCB7XG4gICAgICAgIHdpZHRoOiA5OSU7XG4gICAgICB9XG5cbiAgICAgIC5jZW50ZXJwbGVhc2Uge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiAyNzBweDtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgfVxuXG4gICAgICAucXVlc3Rpb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweCAwcHggNDBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5hbnN3ZXJzIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjdzIGVhc2U7XG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjogMC43cyBlYXNlO1xuICAgICAgICAtby10cmFuc2l0aW9uOiAwLjdzIGVhc2U7XG4gICAgICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZTtcbiAgICAgIH1cblxuICAgICAgLnF1ZXN0aW9uczpjaGVja2VkIH4gLmFuc3dlcnMge1xuICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIH1cblxuICAgICAgLnBsdXMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgIHotaW5kZXg6IDU7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtby11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246IDAuM3MgZWFzZTtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIC5xdWVzdGlvbnM6Y2hlY2tlZCB+IC5wbHVzIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgIH1cblxuICAgICAgLnF1ZXN0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERyb3BJdGVtO1xuIl19 */\n/*@ sourceURL=/Users/raheemmcdonald/Desktop/cxcspanish-next/common/DropItem.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (DropItem);

/***/ })

})
//# sourceMappingURL=FAQ.js.70b481221fe6d0b192cb.hot-update.js.map