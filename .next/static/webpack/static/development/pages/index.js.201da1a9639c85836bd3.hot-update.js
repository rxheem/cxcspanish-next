webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_NavItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/NavItem */ "./common/NavItem.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxcspanish-next/components/Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var Navbar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Navbar, _React$Component);

  function Navbar() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      jquery__WEBPACK_IMPORTED_MODULE_8___default()(document).ready(function () {
        // Check for click events on the navbar burger icon
        jquery__WEBPACK_IMPORTED_MODULE_8___default()(".navbar-burger").click(function () {
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          jquery__WEBPACK_IMPORTED_MODULE_8___default()(".navbar-burger").toggleClass("is-active");
          jquery__WEBPACK_IMPORTED_MODULE_8___default()(".navbar-menu").toggleClass("is-active");
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("nav", {
        className: "navbar has-shadow is-spaced is-danger",
        role: "navigation",
        "aria-label": "main navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx("div", {
        className: "navbar-brand",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx("a", {
        className: "navbar-item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx("h1", {
        className: "title is-5",
        style: {
          paddingBottom: "1px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("span", {
        style: {
          color: "white"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "CXC Spanish Guide")))), __jsx("a", {
        role: "button",
        className: "navbar-burger burger",
        "aria-label": "menu",
        "aria-expanded": "false",
        dataTarget: "mainNavbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx("span", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), __jsx("span", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), __jsx("span", {
        "aria-hidden": "true",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }))), __jsx("div", {
        id: "mainNavbar",
        className: "navbar-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, __jsx("div", {
        className: "navbar-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Guides",
        href: "/guide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), __jsx("a", {
        className: "navbar-item has-dropdown is-hoverable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "exam-topics",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, __jsx("a", {
        className: "navbar-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "Exam Topics")), __jsx("div", {
        className: "navbar-dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        href: "/topics/directed-situations",
        title: "Directed Situations",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        href: "/topics/letter-writing",
        title: "Letter Writing",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        href: "/topics/composition",
        title: "Composition",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        href: "/topics/contextual-announcements",
        title: "Contextual Announcements",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        href: "/topics/contextual-dialogue",
        title: "Contextual Dialogue",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        href: "/topics/reading-comprehension",
        title: "Reading Comprehension",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }))), __jsx("a", {
        className: "navbar-item has-dropdown is-hoverable",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "exam-topics",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, __jsx("a", {
        className: "navbar-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Verb Tenses")), __jsx("div", {
        className: "navbar-dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Present Tense",
        href: "/tenses/present-tense",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Present Progressive",
        href: "/tenses/present-progressive",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Preterite Tense",
        href: "/tenses/preterite-tense",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Imperfect Tense",
        href: "/tenses/imperfect-tense",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Conditional Tense",
        href: "/tenses/conditional-tense",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Future Tense",
        href: "/tenses/subjunctive-mood",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Subjunctive Mood",
        href: "/tenses/subjunctive-mood",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }))), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Resources",
        href: "/resources",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "eTest",
        href: "/etest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Forum",
        href: "/forum",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      })), __jsx("div", {
        className: "navbar-end",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "About Us",
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Tutoring",
        href: "/tutoring",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "FAQ",
        href: "/FAQ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Contact",
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }))));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.201da1a9639c85836bd3.hot-update.js.map