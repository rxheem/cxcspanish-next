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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-fontawesome */ "./node_modules/react-fontawesome/lib/index.js");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _contents_let_wri_Overview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contents/let-wri/Overview */ "./pages/topics/contents/let-wri/Overview.js");
/* harmony import */ var _contents_let_wri_TryThese__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contents/let-wri/TryThese */ "./pages/topics/contents/let-wri/TryThese.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







 // All contents




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
        jquery__WEBPACK_IMPORTED_MODULE_12___default()(".liOverview").removeClass("is-active");
        jquery__WEBPACK_IMPORTED_MODULE_12___default()(".liTips").removeClass("is-active");
        jquery__WEBPACK_IMPORTED_MODULE_12___default()(".liSample1").removeClass("is-active");
        jquery__WEBPACK_IMPORTED_MODULE_12___default()(".liSample2").removeClass("is-active");
        jquery__WEBPACK_IMPORTED_MODULE_12___default()(".liSample3").removeClass("is-active");
      } // Function to hide all the content


      function hideAllContent() {
        jquery__WEBPACK_IMPORTED_MODULE_12___default()("#overview").hide();
        jquery__WEBPACK_IMPORTED_MODULE_12___default()("#tips").hide();
        jquery__WEBPACK_IMPORTED_MODULE_12___default()("#sample1").hide();
        jquery__WEBPACK_IMPORTED_MODULE_12___default()("#sample2").hide();
        jquery__WEBPACK_IMPORTED_MODULE_12___default()("#sample3").hide();
      } // On click event for overview


      jquery__WEBPACK_IMPORTED_MODULE_12___default()(".btnOverview").click(function () {
        removeActiveClass();
        hideAllContent();
        jquery__WEBPACK_IMPORTED_MODULE_12___default()("#overview").show();
        jquery__WEBPACK_IMPORTED_MODULE_12___default()(".liOverview").addClass("is-active");
      }); // On click event for Tips

      jquery__WEBPACK_IMPORTED_MODULE_12___default()(".btnTips").click(function () {
        removeActiveClass();
        hideAllContent();
        jquery__WEBPACK_IMPORTED_MODULE_12___default()("#tips").show();
        jquery__WEBPACK_IMPORTED_MODULE_12___default()(".liTips").addClass("is-active");
      }); // On click event for Sample 1

      jquery__WEBPACK_IMPORTED_MODULE_12___default()(".btnSample1").click(function () {
        removeActiveClass();
        hideAllContent();
        jquery__WEBPACK_IMPORTED_MODULE_12___default()("#sample1").show();
        jquery__WEBPACK_IMPORTED_MODULE_12___default()(".liSample1").addClass("is-active");
      }); // On click event for Sample 1

      jquery__WEBPACK_IMPORTED_MODULE_12___default()(".btnSample2").click(function () {
        removeActiveClass();
        hideAllContent();
        jquery__WEBPACK_IMPORTED_MODULE_12___default()("#sample2").show();
        jquery__WEBPACK_IMPORTED_MODULE_12___default()(".liSample2").addClass("is-active");
      }); // On click event for Sample 1

      jquery__WEBPACK_IMPORTED_MODULE_12___default()(".btnSample3").click(function () {
        removeActiveClass();
        hideAllContent();
        jquery__WEBPACK_IMPORTED_MODULE_12___default()("#sample3").show();
        jquery__WEBPACK_IMPORTED_MODULE_12___default()(".liSample3").addClass("is-active");
      }); // Triggers click on Overview tabs

      jquery__WEBPACK_IMPORTED_MODULE_12___default()(".btnOverview").trigger("click");
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
        className: "column"
      }, __jsx("nav", {
        className: "tabs"
      }, __jsx("ul", null, __jsx("li", {
        "class": "liOverview is-active"
      }, __jsx("a", {
        className: "btnOverview"
      }, "Overview")), __jsx("li", {
        className: "liTips"
      }, __jsx("a", {
        className: "btnTips"
      }, "Tips")), __jsx("li", {
        className: "liSample1"
      }, __jsx("a", {
        className: "btnSample1"
      }, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: "has-text-danger",
        style: {
          paddingRight: "7px"
        },
        name: "pencil-alt"
      }), "Sample 1")), __jsx("li", {
        className: "liSample2"
      }, __jsx("a", {
        className: "btnSample2"
      }, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: "has-text-danger",
        style: {
          paddingRight: "7px"
        },
        name: "pencil-alt"
      }), "Sample 2")), __jsx("li", {
        className: "liSample3"
      }, __jsx("a", {
        className: "btnSample3"
      }, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_13___default.a, {
        className: "has-text-danger",
        style: {
          paddingRight: "7px"
        },
        name: "pencil-alt"
      }), "Sample 3")))), __jsx("section", {
        id: "content",
        className: "box"
      }, __jsx("div", {
        id: "overview"
      }, __jsx(_contents_let_wri_Overview__WEBPACK_IMPORTED_MODULE_14__["default"], null)), __jsx("div", {
        id: "tips"
      }), __jsx("div", {
        id: "sample1"
      }), __jsx("div", {
        id: "sample2"
      }), __jsx("div", {
        id: "sample3"
      }))), __jsx("div", {
        className: "column is-one-third"
      }, __jsx(_contents_let_wri_TryThese__WEBPACK_IMPORTED_MODULE_15__["default"], null))));
    }
  }]);

  return LetterWriting;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LetterWriting);

/***/ })

})
//# sourceMappingURL=letter-writing.js.bbe042c58848097734cd.hot-update.js.map