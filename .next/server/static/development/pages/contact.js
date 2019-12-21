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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/bulma-accordian.css":
/*!************************************!*\
  !*** ./assets/bulma-accordian.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/bulma.css":
/*!**************************!*\
  !*** ./assets/bulma.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./common/Breadcrumb.js":
/*!******************************!*\
  !*** ./common/Breadcrumb.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Breadcrumb = props => __jsx("nav", {
  className: "breadcrumb is-desktop-only",
  "aria-label": "breadcrumbs"
}, __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/"
}, "Home")), props.children));

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

/***/ }),

/***/ "./common/BreadcrumbItem.js":
/*!**********************************!*\
  !*** ./common/BreadcrumbItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxcspanish-next/common/BreadcrumbItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const BreadcrumbItem = props => __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: props.href,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("a", {
  href: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, props.title)));

/* harmony default export */ __webpack_exports__["default"] = (BreadcrumbItem);

/***/ }),

/***/ "./common/HeaderImports.js":
/*!*********************************!*\
  !*** ./common/HeaderImports.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const HeaderImports = props => __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("meta", {
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
  rel: "stylesheet",
  href: "/assets/bulma.css"
}), __jsx("script", {
  type: "text/javascript",
  src: "/node_modules/bulma-accordion/dist/js/bulma-accordion.min.js"
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

/* harmony default export */ __webpack_exports__["default"] = (HeaderImports);

/***/ }),

/***/ "./common/NavItem.js":
/*!***************************!*\
  !*** ./common/NavItem.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const NavItem = props => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: props.href
}, __jsx("a", {
  className: "navbar-item",
  style: {
    display: props.hide ? "none" : "visible"
  }
}, props.hasIcon ? __jsx("i", {
  className: props.iconClass,
  style: {
    color: props.color
  }
}) : null, props.title));

/* harmony default export */ __webpack_exports__["default"] = (NavItem);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const liStyle = {
      color: "#fff"
    };
    return __jsx("footer", {
      id: "footer",
      class: "footer has-background-dark"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "columns"
    }, __jsx("div", {
      className: "column"
    }, __jsx("h3", {
      className: "title is-6 has-text-white"
    }, "POPULAR GUIDES"), __jsx("ul", {
      style: {
        lineHeight: "30px"
      }
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/guides/pronunciation-tips"
    }, __jsx("a", {
      style: liStyle
    }, "Pronunciation Tips"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/guides/adverbs"
    }, __jsx("a", {
      style: liStyle
    }, "Adverbs"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/guides/ser-vs-estar"
    }, __jsx("a", {
      style: liStyle
    }, "'Ser' vs. 'Estar'"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/guides/flirting-in-spanish"
    }, __jsx("a", {
      style: liStyle
    }, " Flirting in Spanish"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/guides/genders-in-spanish"
    }, __jsx("a", {
      style: liStyle
    }, " Genders in Spanish"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/guides/numbers-in-spanish"
    }, __jsx("a", {
      style: liStyle
    }, " Numbers in Spanish"))))), __jsx("div", {
      className: "column"
    }, __jsx("h3", {
      className: "title is-6 has-text-white"
    }, "TOOLS WE USE"), __jsx("ul", {
      style: {
        lineHeight: "30px"
      }
    }, __jsx("li", null, __jsx("a", {
      style: liStyle,
      target: "_blank",
      href: "https://www.spanishdict.com"
    }, "SpanishDict")), __jsx("li", null, __jsx("a", {
      style: liStyle,
      target: "_blank",
      href: "https://www.cxc.org"
    }, "CXC")), __jsx("li", null, __jsx("a", {
      style: liStyle,
      href: "https://cxc-store.com"
    }, "CXC Store")), __jsx("li", null, __jsx("a", {
      style: liStyle,
      target: "_blank",
      href: "https://www.passmycxc.com/courses/view/spanish"
    }, "Pass My CXC")))), __jsx("div", {
      className: "column"
    }, __jsx("h3", {
      className: "title is-6 has-text-white"
    }, "JUMP START"), __jsx("ul", {
      style: {
        lineHeight: "30px"
      }
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", {
      style: liStyle
    }, " Directed Situation"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", {
      style: liStyle
    }, " Reading Comprehension"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", {
      style: liStyle
    }, " Letter Writing"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", {
      style: liStyle
    }, " Contextual Dialogue"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/"
    }, __jsx("a", {
      style: liStyle
    }, " Contextual Announcement"))))), __jsx("div", {
      className: "column"
    }, __jsx("h3", {
      className: "title is-6 has-text-white"
    }, "ABOUT US"), __jsx("ul", {
      style: {
        lineHeight: "30px"
      }
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about"
    }, __jsx("a", {
      style: liStyle
    }, "About Us"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/terms-of-use"
    }, __jsx("a", {
      style: liStyle
    }, "Terms of Use"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/privacy-policy"
    }, __jsx("a", {
      style: liStyle
    }, "Privacy Policy"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact"
    }, __jsx("a", {
      style: liStyle
    }, "Contact Us"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sitemap.xml"
    }, __jsx("a", {
      style: liStyle
    }, "Sitemap")))))), __jsx("br", null), __jsx("div", {
      className: "has-text-centered has-text-light"
    }, "\xA9 2018 Copyright: CXC Spanish Online")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_HeaderImports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/HeaderImports */ "./common/HeaderImports.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-lazyload */ "react-lazyload");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_bulma_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/bulma.css */ "./assets/bulma.css");
/* harmony import */ var _assets_bulma_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_bulma_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_bulma_accordian_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/bulma-accordian.css */ "./assets/bulma-accordian.css");
/* harmony import */ var _assets_bulma_accordian_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_bulma_accordian_css__WEBPACK_IMPORTED_MODULE_9__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





 // CSS imports




class Layout extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  componentDidMount() {
    react_ga__WEBPACK_IMPORTED_MODULE_5___default.a.initialize("UA-146229442-1");
    react_ga__WEBPACK_IMPORTED_MODULE_5___default.a.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return __jsx("div", {
      className: "jsx-3092385218" + " " + "app"
    }, __jsx(_common_HeaderImports__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx("br", {
      className: "jsx-3092385218"
    }), __jsx("div", {
      className: "jsx-3092385218" + " " + ((this.props.full ? "container-fluid" : "container") || "")
    }, this.props.children), __jsx("br", {
      className: "jsx-3092385218"
    }), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3092385218"
    }, "*.jsx-3092385218{background-color:#f2f2f2;}.black.jsx-3092385218{color:black !important;}.styled-ul.jsx-3092385218 li.jsx-3092385218{list-style:disc !important;padding-bottom:1.5em;}.container.jsx-3092385218{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}@media (min-width:576px){.container.jsx-3092385218{max-width:540px;}}@media (min-width:768px){.container.jsx-3092385218{max-width:720px;}}@media (min-width:992px){.container.jsx-3092385218{max-width:960px;}}@media (min-width:1200px){.container.jsx-3092385218{max-width:1140px;}}.rounded.jsx-3092385218{border-radius:15px;border:1px solid #eee;padding-left:20px;padding-top:20px;}.hidden.jsx-3092385218{display:none !important;}.hidden.jsx-3092385218 *.jsx-3092385218{display:none !important;}.answers.jsx-3092385218 p.jsx-3092385218{color:black !important;}.underline.jsx-3092385218:hover{-webkit-text-decoration:underline !important;text-decoration:underline !important;}caption.jsx-3092385218{padding-top:0.75rem;padding-bottom:0.75rem;color:#6c757d;text-align:left;caption-side:bottom;}.scrollable.jsx-3092385218{overflow:auto !important;height:100px !important;}.rainbow-text.jsx-3092385218{background-image:linear-gradient( to left, violet, indigo, blue, green, yellow, orange, red );-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.shadow-sm.jsx-3092385218{box-shadow:0 0.125rem 0.25rem rgba(0,0,0,0.075) !important;}.shadow.jsx-3092385218{box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important;}.shadow-lg.jsx-3092385218{box-shadow:0 1rem 3rem rgba(0,0,0,0.175) !important;}.shadow-none.jsx-3092385218{box-shadow:none !important;}.list-unstyled.jsx-3092385218{padding-top:10px;list-style:none !important;margin:0px !important;}.list-unstyled.jsx-3092385218 li.jsx-3092385218{margin-bottom:13px;}.nav-icon-1.jsx-3092385218{padding-right:1px;}.nav-icon-2.jsx-3092385218{padding-right:2px;}.nav-icon-3.jsx-3092385218{padding-right:3px;}.nav-icon-4.jsx-3092385218{padding-right:4px;}.nav-icon-5.jsx-3092385218{padding-right:5px;}.nav-icon-6.jsx-3092385218{padding-right:6px;}.nav-icon-7.jsx-3092385218{padding-right:7px;}.nav-icon-8.jsx-3092385218{padding-right:8px;}.nav-icon-9.jsx-3092385218{padding-right:9px;}.nav-icon-10.jsx-3092385218{padding-right:10px;}.nav-icon-11.jsx-3092385218{padding-right:11px;}.nav-icon-12.jsx-3092385218{padding-right:12px;}.nav-icon-13.jsx-3092385218{padding-right:13px;}.nav-icon-14.jsx-3092385218{padding-right:14px;}.nav-icon-15.jsx-3092385218{padding-right:15px;}.nav-icon-17.jsx-3092385218{padding-right:17px;}.fa-linkedin-in.jsx-3092385218{display:none !important;}p.jsx-3092385218,span.jsx-3092385218,li.jsx-3092385218{line-height:20px;}.sticky.jsx-3092385218{position:fixed;top:0;width:100%;}.sticky.jsx-3092385218+.content.jsx-3092385218{padding-top:102px;}.inline-icon.jsx-3092385218{margin-right:8px;}.nav-icon.jsx-3092385218{margin-right:5px;}.breadcrumb.jsx-3092385218{background:transparent !important;}.nav-tabs.jsx-3092385218>li.active.jsx-3092385218>a.jsx-3092385218,.nav-tabs.jsx-3092385218>li.active.jsx-3092385218>a.jsx-3092385218:focus,.nav-tabs.jsx-3092385218>li.active.jsx-3092385218>a.jsx-3092385218:hover{border:0 !important;}.navbar-item.is-mega.jsx-3092385218{position:static;}.is-mega-menu-title.jsx-3092385218{margin-bottom:0;padding:0.375rem 1rem;}.push-down.jsx-3092385218{margin-top:5px;}.translation.jsx-3092385218{color:#0d0314;background-color:#eeeeee;width:100%;padding:10px;margin:5px;}.menu-link.jsx-3092385218:hover{color:#8a3ab9;}.menu-link.jsx-3092385218{color:#209cee !important;}.my-blue.jsx-3092385218{color:#209cee !important;}.my-blue.jsx-3092385218:hover{-webkit-text-decoration:none;text-decoration:none;color:#00d8ff !important;}.my-blue-on-hover.jsx-3092385218:hover{color:#209cee !important;}.support-text.jsx-3092385218{color:grey;}.facebook-blue.jsx-3092385218{color:#3b5998 !important;}.blink.jsx-3092385218{-webkit-animation-duration:4000ms;animation-duration:4000ms;-webkit-animation-name:blink-jsx-3092385218;animation-name:blink-jsx-3092385218;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate;}@-webkit-keyframes blink-jsx-3092385218{from{opacity:1;}to{opacity:0;}}@keyframes blink-jsx-3092385218{from{opacity:1;}to{opacity:0;}}.loader.jsx-3092385218,.loader.jsx-3092385218:before,.loader.jsx-3092385218:after{border-radius:50%;width:2.5em;height:2.5em;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation:load7-jsx-3092385218 1.8s infinite ease-in-out;animation:load7-jsx-3092385218 1.8s infinite ease-in-out;}.loader.jsx-3092385218{color:#ffffff;font-size:10px;margin:80px auto;position:relative;text-indent:-9999em;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-0.16s;animation-delay:-0.16s;}.loader.jsx-3092385218:before,.loader.jsx-3092385218:after{content:\"\";position:absolute;top:0;}.loader.jsx-3092385218:before{left:-3.5em;-webkit-animation-delay:-0.32s;animation-delay:-0.32s;}.loader.jsx-3092385218:after{left:3.5em;}@-webkit-keyframes load7-jsx-3092385218{0%,80%,100%{box-shadow:0 2.5em 0 -1.3em;}40%{box-shadow:0 2.5em 0 0;}}@keyframes load7-jsx-3092385218{0%,80%,100%{box-shadow:0 2.5em 0 -1.3em;}40%{box-shadow:0 2.5em 0 0;}}.midnight-blue.jsx-3092385218{color:#003366;}.zoom.jsx-3092385218{padding:50px;background-color:green;-webkit-transition:-webkit-transform 0.2s;-webkit-transition:transform 0.2s;transition:transform 0.2s;width:200px;height:200px;margin:0 auto;}.zoom.jsx-3092385218:hover{-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}.video-container.jsx-3092385218{position:relative;padding-bottom:56.25%;padding-top:30px;height:0;overflow:hidden;}.video-container.jsx-3092385218 iframe.jsx-3092385218,.video-container.jsx-3092385218 object.jsx-3092385218,.video-container.jsx-3092385218 embed.jsx-3092385218{position:absolute;top:0;left:0;width:100%;height:100%;}@media (max-width:767px){.text-sm-center.jsx-3092385218{text-align:center !important;}}.remove-btn.jsx-3092385218{padding:0px !important;border:none !important;background:none !important;}.spin.jsx-3092385218{-webkit-animation:spin 4s infinite linear;}@-webkit-keyframes spin{0%.jsx-3092385218{-webkit-transform:rotate(0deg);}100%.jsx-3092385218{-webkit-transform:rotate(360deg);}}footer.jsx-3092385218{color:#c9c9c9 !important;}footer.jsx-3092385218 a.jsx-3092385218{color:#c9c9c9 !important;}footer.jsx-3092385218 a.jsx-3092385218:hover{color:white !important;}.u-navbar.jsx-3092385218{border-bottom:1px solid #bbbbbb;}.u-nav-link.jsx-3092385218{-webkit-text-decoration:none;text-decoration:none;padding:10px 0px;margin:0px 10px;display:inline-block;position:relative;opacity:0.75;}.u-nav-link.jsx-3092385218:hover{opacity:1;}.u-nav-link.jsx-3092385218::before{-webkit-transition:300ms;transition:300ms;height:5px;content:\"\";position:absolute;background-color:#031d44;}.u-nav-link-ltr.jsx-3092385218::before{width:0%;bottom:10px;}.u-nav-link-ltr.jsx-3092385218:hover.jsx-3092385218::before{width:100%;}.u-nav-link-fade-up.jsx-3092385218::before{width:100%;bottom:5px;opacity:0;}.u-nav-link-fade-up.jsx-3092385218:hover.jsx-3092385218::before{bottom:10px;opacity:1;}.u-nav-link-grow-up.jsx-3092385218::before{height:0%;width:100%;bottom:0px;}.u-nav-link-grow-up.jsx-3092385218:hover.jsx-3092385218::before{height:5px;}.is-mobile-only.jsx-3092385218{visibility:hidden !important;padding-left:5px;}@media screen and (max-width:600px) and (max-width:840px){.is-centered-on-small.jsx-3092385218{text-align:center !important;}.white-on-small.jsx-3092385218{color:white !important;}.is-mobile-only.jsx-3092385218{visibility:visible !important;padding-left:5px;}main.jsx-3092385218{margin:0px 10px !important;}.scrollable.jsx-3092385218{height:auto;}}footer.jsx-3092385218 li.jsx-3092385218{line-height:25px !important;}.field.jsx-3092385218{padding:5px 0px;}a.jsx-3092385218:hover{-webkit-text-decoration:none !important;text-decoration:none !important;}.pre-scrollable.jsx-3092385218{max-height:340px;overflow-y:scroll;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWhlZW1tY2RvbmFsZC9EZXNrdG9wL2N4Y3NwYW5pc2gtbmV4dC9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4Qm9CLEFBR3NDLEFBSUYsQUFJSSxBQUtoQixBQVNPLEFBTUEsQUFNQSxBQU1DLEFBS0EsQUFPSyxBQUlBLEFBSUQsQUFJYyxBQUlqQixBQVFLLEFBY3hCLEFBTTZELEFBSU4sQUFJRCxBQUk1QixBQUlWLEFBTUUsQUFLRCxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQyxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQU1LLEFBTVAsQUFJRixBQU9HLEFBSUQsQUFJQSxBQUlpQixBQVFkLEFBSUosQUFJQSxBQUtELEFBSUQsQUFRQSxBQUlXLEFBSUEsQUFJSixBQUtJLEFBSWQsQUFJYyxBQUlDLEFBUWQsQUFJQSxBQU9NLEFBUUosQUFXSCxBQU1DLEFBS0QsQUFPbUIsQUFJTCxBQUtYLEFBS0QsQUFVUSxBQU1ILEFBVUEsQUFTYSxBQU9SLEFBTW1CLEFBS1QsQUFJRSxBQUtWLEFBSUEsQUFJRixBQUlTLEFBSVgsQUFTWCxBQUlPLEFBUVIsQUFLRSxBQUlBLEFBTUMsQUFLRixBQU1DLEFBSWtCLEFBTUUsQUFJTixBQUlPLEFBS0gsQUFJZixBQUtjLEFBSVosQUFJZ0IsQUFJZixTQXJFTCxDQWpLWixBQUlBLEFBaUpGLEFBZ0NhLENBeGNRLEFBbVFyQixBQThDb0IsQUFXcEIsQUE2SEEsQUFJYSxBQWlCYixDQXZKeUIsQUE0SWIsQUFzQ1YsQ0F4SnVCLENBM0dFLEFBUTNCLEFBd0RpQixBQXNDakIsQ0FsSlEsQUF3Q1IsQ0F6TkUsQUFNQSxBQU1BLEFBb01GLEFBSXdCLEFBcVJ4QixDQXZkRSxBQXdFMkIsQUFtRjdCLEFBZUEsQUFJQSxBQWlUb0IsQ0E1WXBCLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQW1EQSxBQTZGYyxBQW1FVSxBQVVoQixDQTNVZ0IsQUF5RXhCLEFBeUNBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLENBbkh5QixBQThKekIsQ0ExQmEsQUEwUGIsQUFvQmEsQ0FYRCxBQU1aLENBN2NBLEFBd0RBLEFBd1JFLEFBb0R1QixBQTRCekIsQUFxRUUsQ0FyYkYsQUFJQSxBQXFJQSxBQTRMUyxDQXpYVCxBQTRFMEIsQUFtTDFCLEFBSUEsQUFTQSxBQVFBLEFBd0lBLEFBSUEsRUF4WnVCLEFBb0d2QixBQXNZRSxDQWxLQSxBQTJLRixDQXZNbUIsQUFXWCxBQWtFTixBQThGaUIsQUFNakIsQ0F2ZGtCLEFBOFJMLEFBaU1NLENBbkhSLEFBeUJYLENBMU1GLEFBK05BLEFBb0NBLEFBV0EsQ0FoRUUsQ0E3TEYsQ0FzR0EsQUF3TUEsQ0F6SzRCLEVBcEg1QixDQVNhLENBMkhNLENBalVDLENBNlVOLEFBbUJkLEFBMkNhLENBcFhHLEFBd09XLENBNUxILEVBb01KLEFBb0ZTLEFBdUY3QixDQWNFLENBcmVGLEFBTW9CLENBOERwQixDQXdLZSxBQWtCWSxBQXFLUixFQXBVbkIsQ0FKQSxBQXNWYSxDQTlEYixHQXRUa0IsQUEwU1AsRUFqVVEsQUFpRG5CLENBd0x1QixHQWxDVixDQWdFUyxBQXFJRixFQTNhRCxBQWtHbkIsQUFtTkEsQUE0Q2tCLENBNERBLEtBc0ZsQixDQTVic0IsQUFtVXRCLENBbkpBLENBaUJBLEFBaUdBLENBelRBLE1BZ0JBLEFBa1RBLEFBMEUyQixDQTNhM0IsQUE2WnVCLENBdkhHLFNBL08xQixDQWtCK0IsT0FvTmEsR0FpSXhCLEdBY3BCLGVBYmUsQ0FyVnVCLFlBc1Z0QyxHQWhGYyxFQXhFdUIsVUF5RXRCLFNBdFFmLElBdVFnQixLQTNDUyxTQTRDekIseUNBMUVnQyxJQStCaEMsQ0FWQSwrREFwQkEiLCJmaWxlIjoiL1VzZXJzL3JhaGVlbW1jZG9uYWxkL0Rlc2t0b3AvY3hjc3BhbmlzaC1uZXh0L2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlckltcG9ydHMgZnJvbSBcIi4uL2NvbW1vbi9IZWFkZXJJbXBvcnRzXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBSZWFjdEdBIGZyb20gXCJyZWFjdC1nYVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExhenlMb2FkIGZyb20gXCJyZWFjdC1sYXp5bG9hZFwiO1xuXG4vLyBDU1MgaW1wb3J0c1xuaW1wb3J0IENTUyBmcm9tIFwiLi4vYXNzZXRzL2J1bG1hLmNzc1wiO1xuaW1wb3J0IEJ1bG1hQWNjb3JkaWFuQ1NTIGZyb20gXCIuLi9hc3NldHMvYnVsbWEtYWNjb3JkaWFuLmNzc1wiO1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBSZWFjdEdBLmluaXRpYWxpemUoXCJVQS0xNDYyMjk0NDItMVwiKTtcbiAgICBSZWFjdEdBLnBhZ2V2aWV3KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcFwiPlxuICAgICAgICA8SGVhZGVySW1wb3J0cyAvPlxuICAgICAgICA8TmF2YmFyIC8+XG5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmZ1bGwgPyBcImNvbnRhaW5lci1mbHVpZFwiIDogXCJjb250YWluZXJcIn0+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJsYWNrIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdHlsZWQtdWwgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogZGlzYyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1NDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogOTYwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTE0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yb3VuZGVkIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhpZGRlbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhpZGRlbiAqIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYW5zd2VycyBwIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51bmRlcmxpbmU6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXB0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gICAgICAgICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBjYXB0aW9uLXNpZGU6IGJvdHRvbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2Nyb2xsYWJsZSB7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yYWluYm93LXRleHQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICB0byBsZWZ0LFxuICAgICAgICAgICAgICB2aW9sZXQsXG4gICAgICAgICAgICAgIGluZGlnbyxcbiAgICAgICAgICAgICAgYmx1ZSxcbiAgICAgICAgICAgICAgZ3JlZW4sXG4gICAgICAgICAgICAgIHllbGxvdyxcbiAgICAgICAgICAgICAgb3JhbmdlLFxuICAgICAgICAgICAgICByZWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2hhZG93LXNtIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDc1KSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zaGFkb3cge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNoYWRvdy1sZyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFyZW0gM3JlbSByZ2JhKDAsIDAsIDAsIDAuMTc1KSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zaGFkb3ctbm9uZSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpc3QtdW5zdHlsZWQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saXN0LXVuc3R5bGVkIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEzcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogTmF2aWdhdGlvbiBpY29uIHBhZGRpbmcgKi9cbiAgICAgICAgICAubmF2LWljb24tMSB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTIge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtaWNvbi0zIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tNCB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTUge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtaWNvbi02IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tNyB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTgge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtaWNvbi05IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDlweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tMTAge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tMTEge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTFweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tMTIge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tMTMge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTNweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tMTQge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tMTUge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tMTcge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTdweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBNYXN0ZXIuY3NzICovXG5cbiAgICAgICAgICAuZmEtbGlua2VkaW4taW4ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHAsXG4gICAgICAgICAgc3BhbixcbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3RpY2t5IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIEFkZCBzb21lIHRvcCBwYWRkaW5nIHRvIHRoZSBwYWdlIGNvbnRlbnQgdG8gcHJldmVudCBzdWRkZW4gcXVpY2sgbW92ZW1lbnQgKGFzIHRoZSBoZWFkZXIgZ2V0cyBhIG5ldyBwb3NpdGlvbiBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlIChwb3NpdGlvbjpmaXhlZCBhbmQgdG9wOjApICovXG4gICAgICAgICAgLnN0aWNreSArIC5jb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW5saW5lLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5icmVhZGNydW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogSW5kZXguY3NzICovXG5cbiAgICAgICAgICAubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhLFxuICAgICAgICAgIC5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGE6Zm9jdXMsXG4gICAgICAgICAgLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYTpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2YmFyLWl0ZW0uaXMtbWVnYSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pcy1tZWdhLW1lbnUtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMzc1cmVtIDFyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnB1c2gtZG93biB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRyYW5zbGF0aW9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMGQwMzE0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZW51LWxpbms6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICM4YTNhYjk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lbnUtbGluayB7XG4gICAgICAgICAgICBjb2xvcjogIzIwOWNlZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5teS1ibHVlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMjA5Y2VlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm15LWJsdWU6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICMwMGQ4ZmYgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubXktYmx1ZS1vbi1ob3Zlcjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogIzIwOWNlZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdXBwb3J0LXRleHQge1xuICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZhY2Vib29rLWJsdWUge1xuICAgICAgICAgICAgY29sb3I6ICMzYjU5OTggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYmxpbmsge1xuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDAwbXM7XG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogYmxpbms7XG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxvYWRlcixcbiAgICAgICAgICAubG9hZGVyOmJlZm9yZSxcbiAgICAgICAgICAubG9hZGVyOmFmdGVyIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHdpZHRoOiAyLjVlbTtcbiAgICAgICAgICAgIGhlaWdodDogMi41ZW07XG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBsb2FkNyAxLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2FkZXIge1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDgwcHggYXV0bztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxvYWRlcjpiZWZvcmUsXG4gICAgICAgICAgLmxvYWRlcjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2FkZXI6YmVmb3JlIHtcbiAgICAgICAgICAgIGxlZnQ6IC0zLjVlbTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2FkZXI6YWZ0ZXIge1xuICAgICAgICAgICAgbGVmdDogMy41ZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGtleWZyYW1lcyBsb2FkNyB7XG4gICAgICAgICAgICAwJSxcbiAgICAgICAgICAgIDgwJSxcbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgLTEuM2VtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA0MCUge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWlkbmlnaHQtYmx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMzM2NjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2hvd3RvL2hvd3RvX2Nzc196b29tX2hvdmVyLmFzcCAqL1xuICAgICAgICAgIC56b29tIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAgICAgICAgICAgLyogQW5pbWF0aW9uICovXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnpvb206aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAgICAgICAgICAgLyogKDE1MCUgem9vbSAtIE5vdGU6IGlmIHRoZSB6b29tIGlzIHRvbyBsYXJnZSwgaXQgd2lsbCBnbyBvdXRzaWRlIG9mIHRoZSB2aWV3cG9ydCkgKi9cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBNQUtFIFlPVVRVQkUgVklERU9TIFJFU1BPTlNJVkUgLSBodHRwczovL2F2ZXhkZXNpZ25zLmNvbS9yZXNwb25zaXZlLXlvdXR1YmUtZW1iZWQvICAqL1xuICAgICAgICAgIC52aWRlby1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmlkZW8tY29udGFpbmVyIGlmcmFtZSxcbiAgICAgICAgICAudmlkZW8tY29udGFpbmVyIG9iamVjdCxcbiAgICAgICAgICAudmlkZW8tY29udGFpbmVyIGVtYmVkIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgIC50ZXh0LXNtLWNlbnRlciB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIDZmYjlmNSBpcyBhIHZlcnkgbmljZSBjb2xvciAqL1xuXG4gICAgICAgICAgLnJlbW92ZS1idG4ge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3BpbiB7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA0cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICBjb2xvcjogI2M5YzljOSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYzljOWM5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9vdGVyIGE6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnUtbmF2YmFyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJiYmJiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51LW5hdi1saW5rIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnUtbmF2LWxpbms6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudS1uYXYtbGluazo6YmVmb3JlIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDMwMG1zO1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMWQ0NDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudS1uYXYtbGluay1sdHI6OmJlZm9yZSB7XG4gICAgICAgICAgICB3aWR0aDogMCU7XG4gICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnUtbmF2LWxpbmstbHRyOmhvdmVyOjpiZWZvcmUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnUtbmF2LWxpbmstZmFkZS11cDo6YmVmb3JlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm90dG9tOiA1cHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51LW5hdi1saW5rLWZhZGUtdXA6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51LW5hdi1saW5rLWdyb3ctdXA6OmJlZm9yZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudS1uYXYtbGluay1ncm93LXVwOmhvdmVyOjpiZWZvcmUge1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlzLW1vYmlsZS1vbmx5IHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA4NDBweCkge1xuICAgICAgICAgICAgLmlzLWNlbnRlcmVkLW9uLXNtYWxsIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC53aGl0ZS1vbi1zbWFsbCB7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaXMtbW9iaWxlLW9ubHkge1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2Nyb2xsYWJsZSB7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb290ZXIgbGkge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmllbGQge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wcmUtc2Nyb2xsYWJsZSB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzNDBweDtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vYWpheC5jbG91ZGZsYXJlLmNvbS9jZG4tY2dpL3NjcmlwdHMvNzA4OWM0M2UvY2xvdWRmbGFyZS1zdGF0aWMvcm9ja2V0LWxvYWRlci5taW4uanNcIlxuICAgICAgICAgIGRhdGEtY2Ytc2V0dGluZ3M9XCI1ZTZjYWNkM2E1Mjc3ZDRlNTVjZmU2NGItfDQ5XCJcbiAgICAgICAgICBkZWZlcj1cIlwiXG4gICAgICAgID48L3NjcmlwdD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/raheemmcdonald/Desktop/cxcspanish-next/components/Layout.js */"), __jsx("script", {
      src: "https://ajax.cloudflare.com/cdn-cgi/scripts/7089c43e/cloudflare-static/rocket-loader.min.js",
      "data-cf-settings": "5e6cacd3a5277d4e55cfe64b-|49",
      defer: "",
      className: "jsx-3092385218"
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_NavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/NavItem */ "./common/NavItem.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Navbar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "CXC Spanish Guide"
    };
  }

  componentDidMount() {
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(".navbar-burger").click(function () {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(".navbar-burger").toggleClass("is-active");
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(".navbar-menu").toggleClass("is-active");
    });
  }

  render() {
    return __jsx("nav", {
      className: "navbar has-shadow is-spaced is-link",
      role: "navigation",
      ariaLabel: "main navigation"
    }, __jsx("div", {
      className: "navbar-brand"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/"
    }, __jsx("a", {
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
    }, this.state.title)))), __jsx("a", {
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
    }, __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Guides",
      href: "/guide"
    }), __jsx("a", {
      className: "navbar-item has-dropdown is-hoverable"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "exam-topics"
    }, __jsx("a", {
      className: "navbar-link"
    }, "Exam Topics")), __jsx("div", {
      className: "navbar-dropdown"
    }, __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/topics/directed-situations",
      title: "Directed Situations"
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/topics/letter-writing",
      title: "Letter Writing"
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/topics/composition",
      title: "Composition"
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/topics/contextual-announcements",
      title: "Contextual Announcements"
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/topics/contextual-dialogue",
      title: "Contextual Dialogue"
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/topics/reading-comprehension",
      title: "Reading Comprehension"
    }))), __jsx("a", {
      className: "navbar-item has-dropdown is-hoverable"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "exam-topics"
    }, __jsx("a", {
      className: "navbar-link"
    }, "Verb Tenses")), __jsx("div", {
      className: "navbar-dropdown"
    }, __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Present Tense",
      href: "/tenses/present-tense"
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Present Progressive",
      href: "/tenses/present-progressive"
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Preterite Tense",
      href: "/tenses/preterite-tense"
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Imperfect Tense",
      href: "/tenses/imperfect-tense"
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Conditional Tense",
      href: "/tenses/conditional-tense"
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Future Tense",
      href: "/tenses/subjunctive-mood"
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Subjunctive Mood",
      href: "/tenses/subjunctive-mood"
    }))), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Resources",
      href: "/resources"
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Quiz",
      href: "/quiz"
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Forum",
      href: "/forum"
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "CAPE",
      href: "/cape"
    })), __jsx("div", {
      className: "navbar-end"
    }, __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "About Us",
      href: "/about"
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Tutoring",
      href: "/tutoring"
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "FAQ",
      href: "/FAQ"
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Contact",
      href: "/contact"
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

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

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

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

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

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

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

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

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

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
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

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

          if (true) {
            throw new Error(error);
          } else {}

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

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


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
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

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

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

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
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
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
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


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

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Breadcrumb */ "./common/Breadcrumb.js");
/* harmony import */ var _common_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/BreadcrumbItem */ "./common/BreadcrumbItem.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Contact = props => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, "Contact | CXC Spanish Guide"), __jsx("meta", {
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
})), __jsx(_common_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__["default"], null, __jsx(_common_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
  title: "Contact",
  href: "/contact"
})), __jsx("h1", {
  className: "title is-5"
}, "Contact Us"), __jsx("div", {
  className: "columns"
}, __jsx("div", {
  className: "column"
}, __jsx("div", {
  className: "box"
}, __jsx("p", null, "Whether you're a beginner or just looking for some refreshers, we want to express gratitude for letting us be a part of your journey."), __jsx("br", null), __jsx("p", null, "You can read our", " ", __jsx("span", {
  className: "has-text-dark"
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/FAQ"
}, "Frequently Aksed Questions ")), "to see if your question has already been answered."))), __jsx("div", {
  className: "column is-one-third"
}, "...")));

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/contact.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raheemmcdonald/Desktop/cxcspanish-next/pages/contact.js */"./pages/contact.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-lazyload":
/*!*********************************!*\
  !*** external "react-lazyload" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=contact.js.map