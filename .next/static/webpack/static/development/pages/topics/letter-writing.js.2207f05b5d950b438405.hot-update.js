webpackHotUpdate("static/development/pages/topics/letter-writing.js",{

/***/ "./pages/topics/letter-writing.js":
/*!****************************************!*\
  !*** ./pages/topics/letter-writing.js ***!
  \****************************************/
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_Breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/Breadcrumb */ "./common/Breadcrumb.js");
/* harmony import */ var _common_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/BreadcrumbItem */ "./common/BreadcrumbItem.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







var LetterWriting =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LetterWriting, _React$Component);

  function LetterWriting() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LetterWriting);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LetterWriting).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LetterWriting, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      function removeActiveClass() {
        $(".liOverview").removeClass("is-active");
        $(".liTips").removeClass("is-active");
        $(".liExamples").removeClass("is-active");
      } // Function to hide all the content


      function hideAllContent() {
        $("#overview").hide();
        $("#resources").hide();
        $("#examples").hide();
        $("#tipsandtricks").hide();
      } // On click event for overview


      $(".btnOverview").click(function () {
        removeActiveClass();
        hideAllContent();
        $("#overview").show();
        $(".liOverview").addClass("is-active");
      }); // On click event for Examples

      $(".btnExamples").click(function () {
        removeActiveClass();
        hideAllContent();
        $("#examples").show();
        $(".liExamples").addClass("is-active");
      }); // On click event for overview

      $(".btnTips").click(function () {
        hideAllContent();
        removeActiveClass();
        $("#tips").show();
        $(".liTips").addClass("is-active");
      }); // Triggers click on Overview tabs

      $(".btnOverview").trigger("click");
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, __jsx("title", null, "Letter Writing | CXC Spanish Guide"), __jsx("meta", {
        name: "description",
        content: ""
      }), __jsx("meta", {
        name: "keywords",
        content: "cxc,csec spanish,spanish jamaica,contact,cxc spanish,cxc spansih jamaica,espanol jamaica, csec spanish past papers, spanish, cape, caribbean examination counsil,caribbean examination counsel, espa\xF1ol, espanol, study guide, study, pass csec spanish exam, caribbean examination counsil,caribbean examination counsel, espa\xF1ol, espanol, study guide, study, directed situations, free response,present tense,imperfect tense,ser vs estar,subjunctive mood,subjunctive tense spanish,reading comprehension,contextual dialogue, contextual announcements, poster,spanish,pass"
      }), __jsx("meta", {
        name: "og:title",
        content: ""
      }), __jsx("meta", {
        name: "og:url",
        content: ""
      }), __jsx("meta", {
        name: "og:description",
        content: ""
      })), __jsx(_common_Breadcrumb__WEBPACK_IMPORTED_MODULE_10__["default"], null, __jsx(_common_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Exam Topics",
        href: "/exam-topics"
      }), __jsx(_common_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
        title: "Letter Writing",
        href: "/topics/letter-writing"
      })), __jsx("h1", {
        className: "title is-5"
      }, "Letter Writing"), __jsx("div", {
        className: "columns"
      }, __jsx("div", {
        className: "column is-one-third"
      }, __jsx("div", {
        className: ""
      })), __jsx("div", {
        className: "column"
      }, __jsx("div", {
        className: "tabs"
      }, __jsx("ul", null, __jsx("li", {
        "class": "liOverview is-active"
      }, __jsx("a", {
        className: "btnOverview"
      }, "Overview")), __jsx("li", {
        className: "liExamples"
      }, __jsx("a", {
        className: "btnExamples"
      }, "Examples")), __jsx("li", {
        className: "liExercises"
      }, __jsx("a", {
        className: "btnExercises"
      }, "Exercises")), __jsx("li", {
        className: "liResources"
      }, __jsx("a", {
        className: "btnResources"
      }, "Resources")))), __jsx("section", {
        className: "content"
      }, __jsx("div", {
        id: "overview"
      }), __jsx("div", {
        id: "examples"
      }), __jsx("div", {
        id: "exercises"
      }), __jsx("div", {
        id: "resources"
      })))));
    }
  }]);

  return LetterWriting;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LetterWriting);

/***/ })

})
//# sourceMappingURL=letter-writing.js.2207f05b5d950b438405.hot-update.js.map