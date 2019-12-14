module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("PZQO");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _typeof = __webpack_require__("iZP3");

var _WeakMap = __webpack_require__("G4HQ");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./common/HeaderImports.js

var __jsx = external_react_default.a.createElement;



const HeaderImports = props => __jsx(head_default.a, null, __jsx("meta", {
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
}), __jsx("meta", {
  name: "rel icon",
  content: "./assets/kisspng-spanish-logos-translation-celebrando-la-navidad-5afdf35c4e3dd8.0682344115265923483205.png"
}), __jsx("meta", {
  name: "og:site_name",
  content: "CXC Spanish Online"
}), __jsx("meta", {
  name: "robots",
  content: "archive,follow,imageindex,index,odp,snippet,translate"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css",
  crossOrigin: "anonymous"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-grid.css",
  integrity: "sha256-cCazLItaM+Zz5UEzu9HNzlgWhXlvknCzjdE45LBeTns=",
  crossOrigin: "anonymous"
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
}), __jsx("style", null, `
.badge {
	display: inline-block;
	padding: .25em .4em;
	font-size: 75%;
	font-weight: 700;
	line-height: 1;
	text-align: center;
	white-space: nowrap;
	vertical-align: baseline;
	border-radius: .25rem;
	transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out
}

@media (prefers-reduced-motion:reduce) {
	.badge {
		transition: none
	}
}

a.badge:focus,
a.badge:hover {
	text-decoration: none
}

.badge:empty {
	display: none
}

.btn .badge {
	position: relative;
	top: -1px
}

.badge-pill {
	padding-right: .6em;
	padding-left: .6em;
	border-radius: 10rem
}

.badge-primary {
	color: #fff;
	background-color: #007bff
}

a.badge-primary:focus,
a.badge-primary:hover {
	color: #fff;
	background-color: #0062cc
}

a.badge-primary.focus,
a.badge-primary:focus {
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .5)
}

.badge-secondary {
	color: #fff;
	background-color: #6c757d
}

a.badge-secondary:focus,
a.badge-secondary:hover {
	color: #fff;
	background-color: #545b62
}

a.badge-secondary.focus,
a.badge-secondary:focus {
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(108, 117, 125, .5)
}

.badge-success {
	color: #fff;
	background-color: #28a745
}

a.badge-success:focus,
a.badge-success:hover {
	color: #fff;
	background-color: #1e7e34
}

a.badge-success.focus,
a.badge-success:focus {
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(40, 167, 69, .5)
}

.badge-info {
	color: #fff;
	background-color: #17a2b8
}

a.badge-info:focus,
a.badge-info:hover {
	color: #fff;
	background-color: #117a8b
}

a.badge-info.focus,
a.badge-info:focus {
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(23, 162, 184, .5)
}

.badge-warning {
	color: #212529;
	background-color: #ffc107
}

a.badge-warning:focus,
a.badge-warning:hover {
	color: #212529;
	background-color: #d39e00
}

a.badge-warning.focus,
a.badge-warning:focus {
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(255, 193, 7, .5)
}

.badge-danger {
	color: #fff;
	background-color: #dc3545
}

a.badge-danger:focus,
a.badge-danger:hover {
	color: #fff;
	background-color: #bd2130
}

a.badge-danger.focus,
a.badge-danger:focus {
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(220, 53, 69, .5)
}

.badge-light {
	color: #212529;
	background-color: #f8f9fa
}

a.badge-light:focus,
a.badge-light:hover {
	color: #212529;
	background-color: #dae0e5
}

a.badge-light.focus,
a.badge-light:focus {
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(248, 249, 250, .5)
}

.badge-dark {
	color: #fff;
	background-color: #343a40
}

a.badge-dark:focus,
a.badge-dark:hover {
	color: #fff;
	background-color: #1d2124
}

a.badge-dark.focus,
a.badge-dark:focus {
	outline: 0;
	box-shadow: 0 0 0 .2rem rgba(52, 58, 64, .5)
}
`));

/* harmony default export */ var common_HeaderImports = (HeaderImports);
// CONCATENATED MODULE: ./common/NavItem.js

var NavItem_jsx = external_react_default.a.createElement;


const NavItem = props => NavItem_jsx(link_default.a, {
  href: props.href
}, NavItem_jsx("a", {
  className: "navbar-item"
}, props.hasIcon ? NavItem_jsx("i", {
  className: props.iconClass,
  style: {
    color: props.color
  }
}) : null, props.title));

/* harmony default export */ var common_NavItem = (NavItem);
// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__("xeH2");
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);

// CONCATENATED MODULE: ./components/Navbar.js

var Navbar_jsx = external_react_default.a.createElement;




class Navbar_Navbar extends external_react_default.a.Component {
  componentDidMount() {
    external_jquery_default()(".navbar-burger").click(function () {
      external_jquery_default()(".navbar-burger").toggleClass("is-active");
      external_jquery_default()(".navbar-menu").toggleClass("is-active");
    });
  }

  render() {
    return Navbar_jsx("nav", {
      className: "navbar has-shadow is-spaced is-danger",
      role: "navigation",
      ariaLabel: "main navigation"
    }, Navbar_jsx("div", {
      className: "navbar-brand"
    }, Navbar_jsx(link_default.a, {
      href: "/"
    }, Navbar_jsx("a", {
      className: "navbar-item"
    }, Navbar_jsx("h1", {
      className: "title is-5",
      style: {
        paddingBottom: "1px"
      }
    }, Navbar_jsx("span", {
      style: {
        color: "white"
      }
    }, "CXC Spanish Guide")))), Navbar_jsx("a", {
      role: "button",
      className: "navbar-burger burger",
      ariaLabel: "menu",
      ariaExpanded: "false",
      dataTarget: "mainNavbar"
    }, Navbar_jsx("span", {
      ariaHidden: "true"
    }), Navbar_jsx("span", {
      ariaHidden: "true"
    }), Navbar_jsx("span", {
      ariaHidden: "true"
    }))), Navbar_jsx("div", {
      id: "mainNavbar",
      className: "navbar-menu"
    }, Navbar_jsx("div", {
      className: "navbar-start"
    }, Navbar_jsx(common_NavItem, {
      title: "Guides",
      href: "/guide"
    }), Navbar_jsx("a", {
      className: "navbar-item has-dropdown is-hoverable"
    }, Navbar_jsx(link_default.a, {
      href: "exam-topics"
    }, Navbar_jsx("a", {
      className: "navbar-link"
    }, "Exam Topics")), Navbar_jsx("div", {
      className: "navbar-dropdown"
    }, Navbar_jsx(common_NavItem, {
      href: "/topics/directed-situations",
      title: "Directed Situations"
    }), Navbar_jsx(common_NavItem, {
      href: "/topics/letter-writing",
      title: "Letter Writing"
    }), Navbar_jsx(common_NavItem, {
      href: "/topics/composition",
      title: "Composition"
    }), Navbar_jsx(common_NavItem, {
      href: "/topics/contextual-announcements",
      title: "Contextual Announcements"
    }), Navbar_jsx(common_NavItem, {
      href: "/topics/contextual-dialogue",
      title: "Contextual Dialogue"
    }), Navbar_jsx(common_NavItem, {
      href: "/topics/reading-comprehension",
      title: "Reading Comprehension"
    }))), Navbar_jsx("a", {
      className: "navbar-item has-dropdown is-hoverable"
    }, Navbar_jsx(link_default.a, {
      href: "exam-topics"
    }, Navbar_jsx("a", {
      className: "navbar-link"
    }, "Verb Tenses")), Navbar_jsx("div", {
      className: "navbar-dropdown"
    }, Navbar_jsx(common_NavItem, {
      title: "Present Tense",
      href: "/tenses/present-tense"
    }), Navbar_jsx(common_NavItem, {
      title: "Present Progressive",
      href: "/tenses/present-progressive"
    }), Navbar_jsx(common_NavItem, {
      title: "Preterite Tense",
      href: "/tenses/preterite-tense"
    }), Navbar_jsx(common_NavItem, {
      title: "Imperfect Tense",
      href: "/tenses/imperfect-tense"
    }), Navbar_jsx(common_NavItem, {
      title: "Conditional Tense",
      href: "/tenses/conditional-tense"
    }), Navbar_jsx(common_NavItem, {
      title: "Future Tense",
      href: "/tenses/subjunctive-mood"
    }), Navbar_jsx(common_NavItem, {
      title: "Subjunctive Mood",
      href: "/tenses/subjunctive-mood"
    }))), Navbar_jsx(common_NavItem, {
      title: "Resources",
      href: "/resources"
    }), Navbar_jsx(common_NavItem, {
      title: "Quiz",
      href: "/quiz"
    }), Navbar_jsx(common_NavItem, {
      title: "Forum",
      href: "/forum"
    }), Navbar_jsx(common_NavItem, {
      title: "CAPE",
      href: "/cape"
    })), Navbar_jsx("div", {
      className: "navbar-end"
    }, Navbar_jsx(common_NavItem, {
      title: "About Us",
      href: "/about"
    }), Navbar_jsx(common_NavItem, {
      title: "Tutoring",
      href: "/tutoring"
    }), Navbar_jsx(common_NavItem, {
      title: "FAQ",
      href: "/FAQ"
    }), Navbar_jsx(common_NavItem, {
      title: "Contact",
      href: "/contact"
    }))));
  }

}

/* harmony default export */ var components_Navbar = (Navbar_Navbar);
// CONCATENATED MODULE: ./components/Footer.js

var Footer_jsx = external_react_default.a.createElement;


class Footer_Footer extends external_react_default.a.Component {
  render() {
    const liStyle = {
      color: "#fff"
    };
    return Footer_jsx("footer", {
      id: "footer",
      class: "footer has-background-dark"
    }, Footer_jsx("div", {
      className: "container"
    }, Footer_jsx("div", {
      className: "columns"
    }, Footer_jsx("div", {
      className: "column"
    }, Footer_jsx("h3", {
      className: "title is-6 has-text-white"
    }, "POPULAR GUIDES"), Footer_jsx("ul", {
      style: {
        lineHeight: "30px"
      }
    }, Footer_jsx("li", null, Footer_jsx(link_default.a, {
      href: "/guides/pronunciation-tips"
    }, Footer_jsx("a", {
      style: liStyle
    }, "Pronunciation Tips"))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
      href: "/guides/adverbs"
    }, Footer_jsx("a", {
      style: liStyle
    }, "Adverbs"))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
      href: "/guides/ser-vs-estar"
    }, Footer_jsx("a", {
      style: liStyle
    }, "'Ser' vs. 'Estar'"))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
      href: "/guides/flirting-in-spanish"
    }, Footer_jsx("a", {
      style: liStyle
    }, " Flirting in Spanish"))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
      href: "/guides/genders-in-spanish"
    }, Footer_jsx("a", {
      style: liStyle
    }, " Genders in Spanish"))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
      href: "/guides/numbers-in-spanish"
    }, Footer_jsx("a", {
      style: liStyle
    }, " Numbers in Spanish"))))), Footer_jsx("div", {
      className: "column"
    }, Footer_jsx("h3", {
      className: "title is-6 has-text-white"
    }, "TOOLS WE USE"), Footer_jsx("ul", {
      style: {
        lineHeight: "30px"
      }
    }, Footer_jsx("li", null, Footer_jsx("a", {
      style: liStyle,
      target: "_blank",
      href: "https://www.spanishdict.com"
    }, "SpanishDict")), Footer_jsx("li", null, Footer_jsx("a", {
      style: liStyle,
      target: "_blank",
      href: "https://www.cxc.org"
    }, "CXC")), Footer_jsx("li", null, Footer_jsx("a", {
      style: liStyle,
      href: "https://cxc-store.com"
    }, "CXC Store")), Footer_jsx("li", null, Footer_jsx("a", {
      style: liStyle,
      target: "_blank",
      href: "https://www.passmycxc.com/courses/view/spanish"
    }, "Pass My CXC")))), Footer_jsx("div", {
      className: "column"
    }, Footer_jsx("h3", {
      className: "title is-6 has-text-white"
    }, "JUMP START"), Footer_jsx("ul", {
      style: {
        lineHeight: "30px"
      }
    }, Footer_jsx("li", null, Footer_jsx(link_default.a, {
      href: "/"
    }, Footer_jsx("a", {
      style: liStyle
    }, " Directed Situation"))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
      href: "/"
    }, Footer_jsx("a", {
      style: liStyle
    }, " Reading Comprehension"))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
      href: "/"
    }, Footer_jsx("a", {
      style: liStyle
    }, " Letter Writing"))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
      href: "/"
    }, Footer_jsx("a", {
      style: liStyle
    }, " Contextual Dialogue"))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
      href: "/"
    }, Footer_jsx("a", {
      style: liStyle
    }, " Contextual Announcement"))))), Footer_jsx("div", {
      className: "column"
    }, Footer_jsx("h3", {
      className: "title is-6 has-text-white"
    }, "ABOUT US"), Footer_jsx("ul", {
      style: {
        lineHeight: "30px"
      }
    }, Footer_jsx("li", null, Footer_jsx(link_default.a, {
      href: "/about"
    }, Footer_jsx("a", {
      style: liStyle
    }, "About Us"))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
      href: "/terms-of-use"
    }, Footer_jsx("a", {
      style: liStyle
    }, "Terms of Use"))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
      href: "/privacy-policy"
    }, Footer_jsx("a", {
      style: liStyle
    }, "Privacy Policy"))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
      href: "/contact"
    }, Footer_jsx("a", {
      style: liStyle
    }, "Contact Us"))), Footer_jsx("li", null, Footer_jsx(link_default.a, {
      href: "/sitemap.xml"
    }, Footer_jsx("a", {
      style: liStyle
    }, "Sitemap"))))))));
  }

}

/* harmony default export */ var components_Footer = (Footer_Footer);
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__("lJcc");
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);

// EXTERNAL MODULE: external "react-lazyload"
var external_react_lazyload_ = __webpack_require__("E4SY");

// CONCATENATED MODULE: ./components/Layout.js


var Layout_jsx = external_react_default.a.createElement;







class Layout_Layout extends external_react_default.a.Component {
  componentDidMount() {
    external_react_ga_default.a.initialize("UA-146229442-1");
    external_react_ga_default.a.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return Layout_jsx("div", {
      className: "jsx-3092385218"
    }, Layout_jsx(common_HeaderImports, null), Layout_jsx(components_Navbar, null), Layout_jsx("br", {
      className: "jsx-3092385218"
    }), Layout_jsx("div", {
      className: "jsx-3092385218" + " " + ((this.props.full ? "container-fluid" : "container") || "")
    }, this.props.children), Layout_jsx("br", {
      className: "jsx-3092385218"
    }), Layout_jsx(components_Footer, null), Layout_jsx(style_default.a, {
      id: "3092385218"
    }, ["*.jsx-3092385218{background-color:#f2f2f2;}", ".black.jsx-3092385218{color:black !important;}", ".styled-ul.jsx-3092385218 li.jsx-3092385218{list-style:disc !important;padding-bottom:1.5em;}", ".container.jsx-3092385218{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}", "@media (min-width:576px){.container.jsx-3092385218{max-width:540px;}}", "@media (min-width:768px){.container.jsx-3092385218{max-width:720px;}}", "@media (min-width:992px){.container.jsx-3092385218{max-width:960px;}}", "@media (min-width:1200px){.container.jsx-3092385218{max-width:1140px;}}", ".rounded.jsx-3092385218{border-radius:15px;border:1px solid #eee;padding-left:20px;padding-top:20px;}", ".hidden.jsx-3092385218{display:none !important;}", ".hidden.jsx-3092385218 *.jsx-3092385218{display:none !important;}", ".answers.jsx-3092385218 p.jsx-3092385218{color:black !important;}", ".underline.jsx-3092385218:hover{-webkit-text-decoration:underline !important;text-decoration:underline !important;}", "caption.jsx-3092385218{padding-top:0.75rem;padding-bottom:0.75rem;color:#6c757d;text-align:left;caption-side:bottom;}", ".scrollable.jsx-3092385218{overflow:auto !important;height:100px !important;}", ".rainbow-text.jsx-3092385218{background-image:linear-gradient( to left, violet, indigo, blue, green, yellow, orange, red );-webkit-background-clip:text;-webkit-text-fill-color:transparent;}", ".shadow-sm.jsx-3092385218{box-shadow:0 0.125rem 0.25rem rgba(0,0,0,0.075) !important;}", ".shadow.jsx-3092385218{box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important;}", ".shadow-lg.jsx-3092385218{box-shadow:0 1rem 3rem rgba(0,0,0,0.175) !important;}", ".shadow-none.jsx-3092385218{box-shadow:none !important;}", ".list-unstyled.jsx-3092385218{padding-top:10px;list-style:none !important;margin:0px !important;}", ".list-unstyled.jsx-3092385218 li.jsx-3092385218{margin-bottom:13px;}", ".nav-icon-1.jsx-3092385218{padding-right:1px;}", ".nav-icon-2.jsx-3092385218{padding-right:2px;}", ".nav-icon-3.jsx-3092385218{padding-right:3px;}", ".nav-icon-4.jsx-3092385218{padding-right:4px;}", ".nav-icon-5.jsx-3092385218{padding-right:5px;}", ".nav-icon-6.jsx-3092385218{padding-right:6px;}", ".nav-icon-7.jsx-3092385218{padding-right:7px;}", ".nav-icon-8.jsx-3092385218{padding-right:8px;}", ".nav-icon-9.jsx-3092385218{padding-right:9px;}", ".nav-icon-10.jsx-3092385218{padding-right:10px;}", ".nav-icon-11.jsx-3092385218{padding-right:11px;}", ".nav-icon-12.jsx-3092385218{padding-right:12px;}", ".nav-icon-13.jsx-3092385218{padding-right:13px;}", ".nav-icon-14.jsx-3092385218{padding-right:14px;}", ".nav-icon-15.jsx-3092385218{padding-right:15px;}", ".nav-icon-17.jsx-3092385218{padding-right:17px;}", ".fa-linkedin-in.jsx-3092385218{display:none !important;}", "p.jsx-3092385218,span.jsx-3092385218,li.jsx-3092385218{line-height:20px;}", ".sticky.jsx-3092385218{position:fixed;top:0;width:100%;}", ".sticky.jsx-3092385218+.content.jsx-3092385218{padding-top:102px;}", ".inline-icon.jsx-3092385218{margin-right:8px;}", ".nav-icon.jsx-3092385218{margin-right:5px;}", ".breadcrumb.jsx-3092385218{background:transparent !important;}", ".nav-tabs.jsx-3092385218>li.active.jsx-3092385218>a.jsx-3092385218,.nav-tabs.jsx-3092385218>li.active.jsx-3092385218>a.jsx-3092385218:focus,.nav-tabs.jsx-3092385218>li.active.jsx-3092385218>a.jsx-3092385218:hover{border:0 !important;}", ".navbar-item.is-mega.jsx-3092385218{position:static;}", ".is-mega-menu-title.jsx-3092385218{margin-bottom:0;padding:0.375rem 1rem;}", ".push-down.jsx-3092385218{margin-top:5px;}", ".translation.jsx-3092385218{color:#0d0314;background-color:#eeeeee;width:100%;padding:10px;margin:5px;}", ".menu-link.jsx-3092385218:hover{color:#8a3ab9;}", ".menu-link.jsx-3092385218{color:#209cee !important;}", ".my-blue.jsx-3092385218{color:#209cee !important;}", ".my-blue.jsx-3092385218:hover{-webkit-text-decoration:none;text-decoration:none;color:#00d8ff !important;}", ".my-blue-on-hover.jsx-3092385218:hover{color:#209cee !important;}", ".support-text.jsx-3092385218{color:grey;}", ".facebook-blue.jsx-3092385218{color:#3b5998 !important;}", ".blink.jsx-3092385218{-webkit-animation-duration:4000ms;animation-duration:4000ms;-webkit-animation-name:blink-jsx-3092385218;animation-name:blink-jsx-3092385218;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate;}", "@-webkit-keyframes blink-jsx-3092385218{from{opacity:1;}to{opacity:0;}}", "@keyframes blink-jsx-3092385218{from{opacity:1;}to{opacity:0;}}", ".loader.jsx-3092385218,.loader.jsx-3092385218:before,.loader.jsx-3092385218:after{border-radius:50%;width:2.5em;height:2.5em;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation:load7-jsx-3092385218 1.8s infinite ease-in-out;animation:load7-jsx-3092385218 1.8s infinite ease-in-out;}", ".loader.jsx-3092385218{color:#ffffff;font-size:10px;margin:80px auto;position:relative;text-indent:-9999em;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-0.16s;animation-delay:-0.16s;}", ".loader.jsx-3092385218:before,.loader.jsx-3092385218:after{content:\"\";position:absolute;top:0;}", ".loader.jsx-3092385218:before{left:-3.5em;-webkit-animation-delay:-0.32s;animation-delay:-0.32s;}", ".loader.jsx-3092385218:after{left:3.5em;}", "@-webkit-keyframes load7-jsx-3092385218{0%,80%,100%{box-shadow:0 2.5em 0 -1.3em;}40%{box-shadow:0 2.5em 0 0;}}", "@keyframes load7-jsx-3092385218{0%,80%,100%{box-shadow:0 2.5em 0 -1.3em;}40%{box-shadow:0 2.5em 0 0;}}", ".midnight-blue.jsx-3092385218{color:#003366;}", ".zoom.jsx-3092385218{padding:50px;background-color:green;-webkit-transition:-webkit-transform 0.2s;-webkit-transition:transform 0.2s;transition:transform 0.2s;width:200px;height:200px;margin:0 auto;}", ".zoom.jsx-3092385218:hover{-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}", ".video-container.jsx-3092385218{position:relative;padding-bottom:56.25%;padding-top:30px;height:0;overflow:hidden;}", ".video-container.jsx-3092385218 iframe.jsx-3092385218,.video-container.jsx-3092385218 object.jsx-3092385218,.video-container.jsx-3092385218 embed.jsx-3092385218{position:absolute;top:0;left:0;width:100%;height:100%;}", "@media (max-width:767px){.text-sm-center.jsx-3092385218{text-align:center !important;}}", ".remove-btn.jsx-3092385218{padding:0px !important;border:none !important;background:none !important;}", ".spin.jsx-3092385218{-webkit-animation:spin 4s infinite linear;}", "@-webkit-keyframes spin{0%.jsx-3092385218{-webkit-transform:rotate(0deg);}100%.jsx-3092385218{-webkit-transform:rotate(360deg);}}", "footer.jsx-3092385218{color:#c9c9c9 !important;}", "footer.jsx-3092385218 a.jsx-3092385218{color:#c9c9c9 !important;}", "footer.jsx-3092385218 a.jsx-3092385218:hover{color:white !important;}", ".u-navbar.jsx-3092385218{border-bottom:1px solid #bbbbbb;}", ".u-nav-link.jsx-3092385218{-webkit-text-decoration:none;text-decoration:none;padding:10px 0px;margin:0px 10px;display:inline-block;position:relative;opacity:0.75;}", ".u-nav-link.jsx-3092385218:hover{opacity:1;}", ".u-nav-link.jsx-3092385218::before{-webkit-transition:300ms;transition:300ms;height:5px;content:\"\";position:absolute;background-color:#031d44;}", ".u-nav-link-ltr.jsx-3092385218::before{width:0%;bottom:10px;}", ".u-nav-link-ltr.jsx-3092385218:hover.jsx-3092385218::before{width:100%;}", ".u-nav-link-fade-up.jsx-3092385218::before{width:100%;bottom:5px;opacity:0;}", ".u-nav-link-fade-up.jsx-3092385218:hover.jsx-3092385218::before{bottom:10px;opacity:1;}", ".u-nav-link-grow-up.jsx-3092385218::before{height:0%;width:100%;bottom:0px;}", ".u-nav-link-grow-up.jsx-3092385218:hover.jsx-3092385218::before{height:5px;}", ".is-mobile-only.jsx-3092385218{visibility:hidden !important;padding-left:5px;}", "@media screen and (max-width:600px) and (max-width:840px){.is-centered-on-small.jsx-3092385218{text-align:center !important;}.white-on-small.jsx-3092385218{color:white !important;}.is-mobile-only.jsx-3092385218{visibility:visible !important;padding-left:5px;}main.jsx-3092385218{margin:0px 10px !important;}.scrollable.jsx-3092385218{height:auto;}}", "footer.jsx-3092385218 li.jsx-3092385218{line-height:25px !important;}", ".field.jsx-3092385218{padding:5px 0px;}", "a.jsx-3092385218:hover{-webkit-text-decoration:none !important;text-decoration:none !important;}", ".pre-scrollable.jsx-3092385218{max-height:340px;overflow-y:scroll;}"]), Layout_jsx("script", {
      src: "https://ajax.cloudflare.com/cdn-cgi/scripts/7089c43e/cloudflare-static/rocket-loader.min.js",
      "data-cf-settings": "5e6cacd3a5277d4e55cfe64b-|49",
      defer: "",
      className: "jsx-3092385218"
    }));
  }

}

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),

/***/ "E4SY":
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "PZQO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5Yp1");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const About = props => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, "CXC Spanish | Guide, Past Papers and Exercises"), __jsx("meta", {
  name: "description",
  content: ""
}), __jsx("meta", {
  name: "keywords",
  content: "your, tags"
}), __jsx("meta", {
  name: "og:title",
  content: ""
}), __jsx("meta", {
  name: "og:url",
  content: ""
}), __jsx("meta", {
  name: "og:description",
  content: ""
})), __jsx("p", null, "This is About"));

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("P5f7");

var _utils = __webpack_require__("g/15");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) { var exact, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("eVuF");

var _Object$assign = __webpack_require__("UXZV");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const rewrite_url_for_export_1 = __webpack_require__("P5f7");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (false) {} else {
            console.error(error);
          }

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (false) {} // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (false) {}

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "lJcc":
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xeH2":
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });