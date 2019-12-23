webpackHotUpdate("static/development/pages/topics/directed-situations.js",{

/***/ "./common/HeaderImports.js":
/*!*********************************!*\
  !*** ./common/HeaderImports.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var HeaderImports = function HeaderImports(props) {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("meta", {
    name: "Classification",
    content: "Education"
  }), __jsx("meta", {
    name: "copyright",
    content: "CXC Spanish Online"
  }), __jsx("meta", {
    name: "target",
    content: "all"
  }), __jsx("meta", {
    name: "audience",
    content: "all"
  }), __jsx("meta", {
    name: "coverage",
    content: "Worldwide"
  }), __jsx("meta", {
    name: "og:type",
    content: "website"
  }), __jsx("meta", {
    name: "rating",
    content: "safe for kids"
  }), __jsx("meta", {
    name: "author",
    content: "CXC Spanish Online, hola@cxcspanish.com"
  }), __jsx("meta", {
    name: "owner",
    content: "CXC Spanish"
  }), __jsx("meta", {
    name: "directory",
    content: "submission"
  }), __jsx("meta", {
    name: "distribution",
    content: "Global"
  }), __jsx("meta", {
    name: "rating",
    content: "General"
  }), __jsx("meta", {
    name: "revisit-after",
    content: "1 days"
  }), __jsx("meta", {
    httpEquiv: "Expires",
    content: "3\xE5"
  }), __jsx("meta", {
    httpEquiv: "Pragma",
    content: "no-cache"
  }), __jsx("meta", {
    name: "language",
    content: "EN"
  }), __jsx("meta", {
    name: "fb:page_id",
    content: "105703077445673"
  }), __jsx("link", {
    rel: "icon",
    content: "./assets/kisspng-spanish-logos-translation-celebrando-la-navidad-5afdf35c4e3dd8.0682344115265923483205.png"
  }), __jsx("meta", {
    name: "og:site_name",
    content: "CXC Spanish Online"
  }), __jsx("meta", {
    name: "robots",
    content: "archive,follow,imageindex,index,odp,snippet,translate"
  }), __jsx("link", {
    href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
    rel: "stylesheet"
  }), __jsx("link", {
    rel: "stylesheet",
    href: "/assets/bulma.css"
  }), __jsx("script", {
    type: "text/javascript",
    src: "/node_modules/bulma-accordion/dist/js/bulma-accordion.min.js"
  }), __jsx("style", null, "\n    .badge {\n    \tdisplay: inline-block;\n    \tpadding: .25em .4em;\n    \tfont-size: 75%;\n    \tfont-weight: 700;\n    \tline-height: 1;\n    \ttext-align: center;\n    \twhite-space: nowrap;\n    \tvertical-align: baseline;\n    \tborder-radius: .25rem;\n    \ttransition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out\n    }\n\n    @media (prefers-reduced-motion:reduce) {\n    \t.badge {\n    \t\ttransition: none\n    \t}\n    }\n\n    a.badge:focus,\n    a.badge:hover {\n    \ttext-decoration: none\n    }\n\n    .badge:empty {\n    \tdisplay: none\n    }\n\n    .btn .badge {\n    \tposition: relative;\n    \ttop: -1px\n    }\n\n    .badge-pill {\n    \tpadding-right: .6em;\n    \tpadding-left: .6em;\n    \tborder-radius: 10rem\n    }\n\n    .badge-primary {\n    \tcolor: #fff;\n    \tbackground-color: #007bff\n    }\n\n    a.badge-primary:focus,\n    a.badge-primary:hover {\n    \tcolor: #fff;\n    \tbackground-color: #0062cc\n    }\n\n    a.badge-primary.focus,\n    a.badge-primary:focus {\n    \toutline: 0;\n    \tbox-shadow: 0 0 0 .2rem rgba(0, 123, 255, .5)\n    }\n\n    .badge-secondary {\n    \tcolor: #fff;\n    \tbackground-color: #6c757d\n    }\n\n    a.badge-secondary:focus,\n    a.badge-secondary:hover {\n    \tcolor: #fff;\n    \tbackground-color: #545b62\n    }\n\n    a.badge-secondary.focus,\n    a.badge-secondary:focus {\n    \toutline: 0;\n    \tbox-shadow: 0 0 0 .2rem rgba(108, 117, 125, .5)\n    }\n\n    .badge-success {\n    \tcolor: #fff;\n    \tbackground-color: #28a745\n    }\n\n    a.badge-success:focus,\n    a.badge-success:hover {\n    \tcolor: #fff;\n    \tbackground-color: #1e7e34\n    }\n\n    a.badge-success.focus,\n    a.badge-success:focus {\n    \toutline: 0;\n    \tbox-shadow: 0 0 0 .2rem rgba(40, 167, 69, .5)\n    }\n\n    .badge-info {\n    \tcolor: #fff;\n    \tbackground-color: #17a2b8\n    }\n\n    a.badge-info:focus,\n    a.badge-info:hover {\n    \tcolor: #fff;\n    \tbackground-color: #117a8b\n    }\n\n    a.badge-info.focus,\n    a.badge-info:focus {\n    \toutline: 0;\n    \tbox-shadow: 0 0 0 .2rem rgba(23, 162, 184, .5)\n    }\n\n    .badge-warning {\n    \tcolor: #212529;\n    \tbackground-color: #ffc107\n    }\n\n    a.badge-warning:focus,\n    a.badge-warning:hover {\n    \tcolor: #212529;\n    \tbackground-color: #d39e00\n    }\n\n    a.badge-warning.focus,\n    a.badge-warning:focus {\n    \toutline: 0;\n    \tbox-shadow: 0 0 0 .2rem rgba(255, 193, 7, .5)\n    }\n\n    .badge-danger {\n    \tcolor: #fff;\n    \tbackground-color: #dc3545\n    }\n\n    a.badge-danger:focus,\n    a.badge-danger:hover {\n    \tcolor: #fff;\n    \tbackground-color: #bd2130\n    }\n\n    a.badge-danger.focus,\n    a.badge-danger:focus {\n    \toutline: 0;\n    \tbox-shadow: 0 0 0 .2rem rgba(220, 53, 69, .5)\n    }\n\n    .badge-light {\n    \tcolor: #212529;\n    \tbackground-color: #f8f9fa\n    }\n\n    a.badge-light:focus,\n    a.badge-light:hover {\n    \tcolor: #212529;\n    \tbackground-color: #dae0e5\n    }\n\n    a.badge-light.focus,\n    a.badge-light:focus {\n    \toutline: 0;\n    \tbox-shadow: 0 0 0 .2rem rgba(248, 249, 250, .5)\n    }\n\n    .badge-dark {\n    \tcolor: #fff;\n    \tbackground-color: #343a40\n    }\n\n    a.badge-dark:focus,\n    a.badge-dark:hover {\n    \tcolor: #fff;\n    \tbackground-color: #1d2124\n    }\n\n    a.badge-dark.focus,\n    a.badge-dark:focus {\n    \toutline: 0;\n    \tbox-shadow: 0 0 0 .2rem rgba(52, 58, 64, .5)\n    }\n"));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderImports);

/***/ }),

/***/ "./node_modules/react-fontawesome/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-fontawesome/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A React component for the font-awesome icon library.
 *
 * @param {String} [ariaLabel] An extra accessibility label to put on the icon
 * @param {Boolean} [border=false] Whether or not to show a border radius
 * @param {String} [className] An extra set of CSS classes to add to the component
 * @param {Object} [cssModule] Option to pass FontAwesome CSS as a module
 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
 * @param {String} [flip=false] Flip the icon's orientation.
 * @param {Boolean} [inverse=false] Inverse the icon's color
 * @param {String} [name] Name of the icon to use
 * @param {Boolean} [pulse=false] Rotate icon with 8 steps, rather than smoothly
 * @param {Number} [rotate] The degress to rotate the icon by
 * @param {String} [size] The icon scaling size
 * @param {Boolean} [spin=false] Spin the icon
 * @param {String} [stack] Stack an icon on top of another. Arguments specify z-index such as '1x' See documentation for example http://fontawesome.io/examples/#stacked
 * @param {String} [tag=span] The HTML tag to use as a string, eg 'i' or 'em'
 * @module FontAwesome
 * @type {ReactClass}
 */
var FontAwesome = function (_React$Component) {
  _inherits(FontAwesome, _React$Component);

  function FontAwesome() {
    _classCallCheck(this, FontAwesome);

    var _this = _possibleConstructorReturn(this, (FontAwesome.__proto__ || Object.getPrototypeOf(FontAwesome)).call(this));

    _this.displayName = 'FontAwesome';
    return _this;
  }

  _createClass(FontAwesome, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          border = _props.border,
          cssModule = _props.cssModule,
          className = _props.className,
          fixedWidth = _props.fixedWidth,
          flip = _props.flip,
          inverse = _props.inverse,
          name = _props.name,
          pulse = _props.pulse,
          rotate = _props.rotate,
          size = _props.size,
          spin = _props.spin,
          stack = _props.stack,
          _props$tag = _props.tag,
          tag = _props$tag === undefined ? 'span' : _props$tag,
          ariaLabel = _props.ariaLabel,
          props = _objectWithoutProperties(_props, ['border', 'cssModule', 'className', 'fixedWidth', 'flip', 'inverse', 'name', 'pulse', 'rotate', 'size', 'spin', 'stack', 'tag', 'ariaLabel']);

      var ariaProps = ariaLabel ? { 'aria-label': ariaLabel } : { 'aria-hidden': true };
      var classNames = [];

      if (cssModule) {
        classNames.push(cssModule['fa']);
        classNames.push(cssModule['fa-' + name]);
        size && classNames.push(cssModule['fa-' + size]);
        spin && classNames.push(cssModule['fa-spin']);
        pulse && classNames.push(cssModule['fa-pulse']);
        border && classNames.push(cssModule['fa-border']);
        fixedWidth && classNames.push(cssModule['fa-fw']);
        inverse && classNames.push(cssModule['fa-inverse']);
        flip && classNames.push(cssModule['fa-flip-' + flip]);
        rotate && classNames.push(cssModule['fa-rotate-' + rotate]);
        stack && classNames.push(cssModule['fa-stack-' + stack]);
      } else {
        classNames.push('fa');
        classNames.push('fa-' + name);
        size && classNames.push('fa-' + size);
        spin && classNames.push('fa-spin');
        pulse && classNames.push('fa-pulse');
        border && classNames.push('fa-border');
        fixedWidth && classNames.push('fa-fw');
        inverse && classNames.push('fa-inverse');
        flip && classNames.push('fa-flip-' + flip);
        rotate && classNames.push('fa-rotate-' + rotate);
        stack && classNames.push('fa-stack-' + stack);
      }

      // Add any custom class names at the end.
      className && classNames.push(className);
      return _react2.default.createElement(tag, _extends({}, props, ariaProps, {
        className: classNames.join(' ')
      }));
    }
  }]);

  return FontAwesome;
}(_react2.default.Component);

FontAwesome.propTypes = {
  ariaLabel: _propTypes2.default.string,
  border: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  fixedWidth: _propTypes2.default.bool,
  flip: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  inverse: _propTypes2.default.bool,
  name: _propTypes2.default.string.isRequired,
  pulse: _propTypes2.default.bool,
  rotate: _propTypes2.default.oneOf([90, 180, 270]),
  size: _propTypes2.default.oneOf(['lg', '2x', '3x', '4x', '5x']),
  spin: _propTypes2.default.bool,
  stack: _propTypes2.default.oneOf(['1x', '2x']),
  tag: _propTypes2.default.string
};

exports.default = FontAwesome;
module.exports = exports.default;

/***/ }),

/***/ "./pages/topics/directed-situations.js":
/*!*********************************************!*\
  !*** ./pages/topics/directed-situations.js ***!
  \*********************************************/
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
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-fontawesome */ "./node_modules/react-fontawesome/lib/index.js");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/es/YouTube.js");






var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;









var DirectedSituations =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(DirectedSituations, _React$Component);

  function DirectedSituations(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DirectedSituations);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DirectedSituations).call(this, props));
    _this.state = {};
    return _this;
  } // Runs when the component finishes mounting


  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DirectedSituations, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_7__["default"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, __jsx("title", null, "Directed Situations | CXC Spanish Guide"), __jsx("meta", {
        name: "description",
        content: "CXC Spanish Online is the perfect free online study guide to pass your CXC Spanish exam with syllabus revision, exercises and downloadable resouces."
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
        title: __jsx("span", null, __jsx("span", {
          "class": "is-hidden-mobile"
        }, "Directed Situations"), __jsx("span", {
          "class": "is-hidden-desktop"
        }, "Directed Sit..")),
        href: "/topics/directed-situations"
      })), __jsx("h1", {
        className: "title is-5"
      }, "Directed Situations"), __jsx("div", {
        className: "columns"
      }, __jsx("div", {
        className: "column"
      }, __jsx("div", {
        className: "box"
      }, __jsx("p", null, "Directed Situations are short situations/ scenarios in which you are required to give a one sentence response in Spanish."), __jsx("br", null), __jsx("p", null, "For example, you are given the following scenario:"), __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_14___default.a, {
        name: "rocket"
      }))), __jsx("div", {
        className: "column is-one-third"
      }, __jsx("div", {
        className: "box"
      }))));
    }
  }, {
    key: "_onReady",
    value: function _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }]);

  return DirectedSituations;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (DirectedSituations);

/***/ })

})
//# sourceMappingURL=directed-situations.js.bd8c2376d34db33efc09.hot-update.js.map