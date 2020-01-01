webpackHotUpdate("static/development/pages/topics/letter-writing.js",{

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
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-fontawesome */ "./node_modules/react-fontawesome/lib/index.js");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_9__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var Navbar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Navbar, _React$Component);

  function Navbar(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navbar);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navbar).call(this, props));
    _this.state = {
      title: "CXC Spanish Online"
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      jquery__WEBPACK_IMPORTED_MODULE_8___default()(".navbar-burger").click(function () {
        jquery__WEBPACK_IMPORTED_MODULE_8___default()(".navbar-burger").toggleClass("is-active");
        jquery__WEBPACK_IMPORTED_MODULE_8___default()(".navbar-menu").toggleClass("is-active");
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("nav", {
        className: "navbar has-shadow is-spaced is-link",
        role: "navigation",
        ariaLabel: "main navigation"
      }, __jsx("div", {
        className: "navbar-brand"
      }, __jsx("a", {
        href: "/",
        className: "navbar-item"
      }, __jsx("h1", {
        className: "title is-5",
        style: {
          paddingBottom: "1px"
        }
      }, __jsx("span", {
        style: {
          color: "white"
        }
      }, this.state.title))), __jsx("a", {
        role: "button",
        className: "navbar-burger burger",
        ariaLabel: "menu",
        ariaExpanded: "false",
        dataTarget: "mainNavbar"
      }, __jsx("span", {
        ariaHidden: "true"
      }), __jsx("span", {
        ariaHidden: "true"
      }), __jsx("span", {
        ariaHidden: "true"
      }))), __jsx("div", {
        id: "mainNavbar",
        className: "navbar-menu"
      }, __jsx("div", {
        className: "navbar-start"
      }, __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Guides",
        href: "/guide"
      }), __jsx("a", {
        className: "navbar-item has-dropdown is-hoverable"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "exam-topics"
      }, __jsx("a", {
        href: "exam-topics",
        className: "navbar-link"
      }, "Exam Topics")), __jsx("div", {
        className: "navbar-dropdown"
      }, __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        hasIcon: true,
        name: "angle-double-right",
        href: "/topics/directed-situations",
        title: "Directed Situations"
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        hasIcon: true,
        name: "angle-double-right",
        href: "/topics/letter-writing",
        title: "Letter Writing"
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        hasIcon: true,
        name: "angle-double-right",
        href: "/topics/composition",
        title: "Composition"
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        hasIcon: true,
        name: "angle-double-right",
        href: "/topics/contextual-announcements",
        title: "Contextual Announcements"
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        hasIcon: true,
        name: "angle-double-right",
        href: "/topics/contextual-dialogue",
        title: "Contextual Dialogue"
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        hasIcon: true,
        name: "angle-double-right",
        href: "/topics/reading-comprehension",
        title: "Reading Comprehension"
      }))), __jsx("a", {
        className: "navbar-item has-dropdown is-hoverable"
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "exam-topics"
      }, __jsx("a", {
        className: "navbar-link"
      }, "Verb Tenses")), __jsx("div", {
        className: "navbar-dropdown"
      }, __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Present Tense",
        href: "/tenses/present-tense"
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Present Progressive",
        href: "/tenses/present-progressive"
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Preterite Tense",
        href: "/tenses/preterite-tense"
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Imperfect Tense",
        href: "/tenses/imperfect-tense"
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Conditional Tense",
        href: "/tenses/conditional-tense"
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Future Tense",
        href: "/tenses/subjunctive-mood"
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Subjunctive Mood",
        href: "/tenses/subjunctive-mood"
      }))), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Resources",
        href: "/resources"
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Quiz",
        href: "/quiz"
      })), __jsx("div", {
        className: "navbar-end"
      }, __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        hasIcon: true,
        name: "users",
        title: "About Us",
        href: "/about"
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        hasIcon: true,
        name: "chalkboard-teacher",
        title: "Tutoring",
        href: "/tutoring"
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        hasIcon: true,
        name: "comment",
        title: "FAQ",
        href: "/FAQ"
      }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
        hasIcon: true,
        name: "id-badge",
        title: "Contact",
        href: "/contact"
      }))));
    }
  }]);

  return Navbar;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=letter-writing.js.d90bdfae6559b1b06015.hot-update.js.map