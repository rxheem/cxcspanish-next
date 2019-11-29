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
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxcspanish-next/common/Breadcrumb.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Breadcrumb = props => __jsx("nav", {
  className: "breadcrumb",
  "aria-label": "breadcrumbs",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("a", {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
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
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxcspanish-next/common/HeaderImports.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const HeaderImports = props => __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("meta", {
  name: "Classification",
  content: "Education",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx("meta", {
  name: "copyright",
  content: "CXC Spanish Online",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx("meta", {
  name: "target",
  content: "all",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("meta", {
  name: "audience",
  content: "all",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("meta", {
  name: "coverage",
  content: "Worldwide",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("meta", {
  name: "og:type",
  content: "website",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("meta", {
  name: "rating",
  content: "safe for kids",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("meta", {
  name: "author",
  content: "CXC Spanish Online, hola@cxcspanish.com",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("meta", {
  name: "owner",
  content: "CXC Spanish",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("meta", {
  name: "directory",
  content: "submission",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("meta", {
  name: "distribution",
  content: "Global",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}), __jsx("meta", {
  name: "rating",
  content: "General",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx("meta", {
  name: "revisit-after",
  content: "1 days",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), __jsx("meta", {
  httpEquiv: "Expires",
  content: "3\xE5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx("meta", {
  httpEquiv: "Pragma",
  content: "no-cache",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx("meta", {
  name: "language",
  content: "EN",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}), __jsx("meta", {
  name: "fb:page_id",
  content: "105703077445673",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), __jsx("meta", {
  name: "rel icon",
  content: "./assets/kisspng-spanish-logos-translation-celebrando-la-navidad-5afdf35c4e3dd8.0682344115265923483205.png",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}), __jsx("meta", {
  name: "og:site_name",
  content: "CXC Spanish Online",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}), __jsx("meta", {
  name: "robots",
  content: "archive,follow,imageindex,index,odp,snippet,translate",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css",
  crossOrigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-grid.css",
  integrity: "sha256-cCazLItaM+Zz5UEzu9HNzlgWhXlvknCzjdE45LBeTns=",
  crossOrigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}), __jsx("style", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, `
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
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxcspanish-next/common/NavItem.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const NavItem = props => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: props.href,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("a", {
  className: "navbar-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, props.hasIcon ? __jsx("i", {
  className: props.iconClass,
  style: {
    color: props.color
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
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
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxcspanish-next/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const liStyle = {
      color: "#fff"
    };
    return __jsx("footer", {
      id: "footer",
      class: "footer has-background-dark",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx("div", {
      className: "columns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("h3", {
      className: "title is-6 has-text-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "POPULAR GUIDES"), __jsx("ul", {
      style: {
        lineHeight: "30px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/guides/pronunciation-tips",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("a", {
      style: liStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, "Pronunciation Tips"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/guides/adverbs",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("a", {
      style: liStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "Adverbs"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/guides/ser-vs-estar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("a", {
      style: liStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "'Ser' vs. 'Estar'"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/guides/flirting-in-spanish",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx("a", {
      style: liStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, " Flirting in Spanish"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/guides/genders-in-spanish",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("a", {
      style: liStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, " Genders in Spanish"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/guides/numbers-in-spanish",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("a", {
      style: liStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, " Numbers in Spanish"))))), __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("h3", {
      className: "title is-6 has-text-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "TOOLS WE USE"), __jsx("ul", {
      style: {
        lineHeight: "30px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("a", {
      style: liStyle,
      target: "_blank",
      href: "https://www.spanishdict.com",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "SpanishDict")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, __jsx("a", {
      style: liStyle,
      target: "_blank",
      href: "https://www.cxc.org",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, "CXC")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("a", {
      style: liStyle,
      href: "https://cxc-store.com",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "CXC Store")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("a", {
      style: liStyle,
      target: "_blank",
      href: "https://www.passmycxc.com/courses/view/spanish",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Pass My CXC")))), __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("h3", {
      className: "title is-6 has-text-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, "JUMP START"), __jsx("ul", {
      style: {
        lineHeight: "30px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("a", {
      style: liStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, " Directed Situation"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("a", {
      style: liStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, " Reading Comprehension"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx("a", {
      style: liStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, " Letter Writing"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx("a", {
      style: liStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, " Contextual Dialogue"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx("a", {
      style: liStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, " Contextual Announcement"))))), __jsx("div", {
      className: "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx("h3", {
      className: "title is-6 has-text-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "ABOUT US"), __jsx("ul", {
      style: {
        lineHeight: "30px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx("a", {
      style: liStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, "About Us"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/terms-of-use",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, __jsx("a", {
      style: liStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, "Terms of Use"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/privacy-policy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, __jsx("a", {
      style: liStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, "Privacy Policy"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }, __jsx("a", {
      style: liStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, "Contact Us"))), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/sitemap.xml",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, __jsx("a", {
      style: liStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, "Sitemap"))))))));
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
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxcspanish-next/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Layout extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  componentDidMount() {
    react_ga__WEBPACK_IMPORTED_MODULE_5___default.a.initialize("UA-146229442-1");
    react_ga__WEBPACK_IMPORTED_MODULE_5___default.a.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return __jsx("div", {
      className: "jsx-69621802",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx(_common_HeaderImports__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }), __jsx("br", {
      className: "jsx-69621802",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-69621802" + " " + "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, this.props.children), __jsx("br", {
      className: "jsx-69621802",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "69621802",
      __self: this
    }, ".black.jsx-69621802{color:black !important;}.styled-ul.jsx-69621802 li.jsx-69621802{list-style:disc !important;padding-bottom:1.5em;}.container.jsx-69621802{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}@media (min-width:576px){.container.jsx-69621802{max-width:540px;}}@media (min-width:768px){.container.jsx-69621802{max-width:720px;}}@media (min-width:992px){.container.jsx-69621802{max-width:960px;}}@media (min-width:1200px){.container.jsx-69621802{max-width:1140px;}}.rounded.jsx-69621802{border-radius:15px;border:1px solid #eee;padding-left:20px;padding-top:20px;}.hidden.jsx-69621802{display:none !important;}.hidden.jsx-69621802 *.jsx-69621802{display:none !important;}.answers.jsx-69621802 p.jsx-69621802{color:black !important;}.underline.jsx-69621802:hover{-webkit-text-decoration:underline !important;text-decoration:underline !important;}caption.jsx-69621802{padding-top:0.75rem;padding-bottom:0.75rem;color:#6c757d;text-align:left;caption-side:bottom;}.scrollable.jsx-69621802{overflow:auto !important;height:100px !important;}.rainbow-text.jsx-69621802{background-image:linear-gradient( to left, violet, indigo, blue, green, yellow, orange, red );-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.shadow-sm.jsx-69621802{box-shadow:0 0.125rem 0.25rem rgba(0,0,0,0.075) !important;}.shadow.jsx-69621802{box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important;}.shadow-lg.jsx-69621802{box-shadow:0 1rem 3rem rgba(0,0,0,0.175) !important;}.shadow-none.jsx-69621802{box-shadow:none !important;}.list-unstyled.jsx-69621802{padding-top:10px;list-style:none !important;margin:0px !important;}.list-unstyled.jsx-69621802 li.jsx-69621802{margin-bottom:13px;}.nav-icon-1.jsx-69621802{padding-right:1px;}.nav-icon-2.jsx-69621802{padding-right:2px;}.nav-icon-3.jsx-69621802{padding-right:3px;}.nav-icon-4.jsx-69621802{padding-right:4px;}.nav-icon-5.jsx-69621802{padding-right:5px;}.nav-icon-6.jsx-69621802{padding-right:6px;}.nav-icon-7.jsx-69621802{padding-right:7px;}.nav-icon-8.jsx-69621802{padding-right:8px;}.nav-icon-9.jsx-69621802{padding-right:9px;}.nav-icon-10.jsx-69621802{padding-right:10px;}.nav-icon-11.jsx-69621802{padding-right:11px;}.nav-icon-12.jsx-69621802{padding-right:12px;}.nav-icon-13.jsx-69621802{padding-right:13px;}.nav-icon-14.jsx-69621802{padding-right:14px;}.nav-icon-15.jsx-69621802{padding-right:15px;}.nav-icon-17.jsx-69621802{padding-right:17px;}.fa-linkedin-in.jsx-69621802{display:none !important;}p.jsx-69621802,span.jsx-69621802,li.jsx-69621802{line-height:20px;}.sticky.jsx-69621802{position:fixed;top:0;width:100%;}.sticky.jsx-69621802+.content.jsx-69621802{padding-top:102px;}.inline-icon.jsx-69621802{margin-right:8px;}.nav-icon.jsx-69621802{margin-right:5px;}.breadcrumb.jsx-69621802{background:transparent !important;}.nav-tabs.jsx-69621802>li.active.jsx-69621802>a.jsx-69621802,.nav-tabs.jsx-69621802>li.active.jsx-69621802>a.jsx-69621802:focus,.nav-tabs.jsx-69621802>li.active.jsx-69621802>a.jsx-69621802:hover{border:0 !important;}.navbar-item.is-mega.jsx-69621802{position:static;}.is-mega-menu-title.jsx-69621802{margin-bottom:0;padding:0.375rem 1rem;}.push-down.jsx-69621802{margin-top:5px;}.translation.jsx-69621802{color:#0d0314;background-color:#eeeeee;width:100%;padding:10px;margin:5px;}.menu-link.jsx-69621802:hover{color:#8a3ab9;}.menu-link.jsx-69621802{color:#209cee !important;}.my-blue.jsx-69621802{color:#209cee !important;}.my-blue.jsx-69621802:hover{-webkit-text-decoration:none;text-decoration:none;color:#00d8ff !important;}.my-blue-on-hover.jsx-69621802:hover{color:#209cee !important;}.support-text.jsx-69621802{color:grey;}.facebook-blue.jsx-69621802{color:#3b5998 !important;}.blink.jsx-69621802{-webkit-animation-duration:4000ms;animation-duration:4000ms;-webkit-animation-name:blink-jsx-69621802;animation-name:blink-jsx-69621802;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate;}@-webkit-keyframes blink-jsx-69621802{from{opacity:1;}to{opacity:0;}}@keyframes blink-jsx-69621802{from{opacity:1;}to{opacity:0;}}.loader.jsx-69621802,.loader.jsx-69621802:before,.loader.jsx-69621802:after{border-radius:50%;width:2.5em;height:2.5em;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation:load7-jsx-69621802 1.8s infinite ease-in-out;animation:load7-jsx-69621802 1.8s infinite ease-in-out;}.loader.jsx-69621802{color:#ffffff;font-size:10px;margin:80px auto;position:relative;text-indent:-9999em;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-0.16s;animation-delay:-0.16s;}.loader.jsx-69621802:before,.loader.jsx-69621802:after{content:\"\";position:absolute;top:0;}.loader.jsx-69621802:before{left:-3.5em;-webkit-animation-delay:-0.32s;animation-delay:-0.32s;}.loader.jsx-69621802:after{left:3.5em;}@-webkit-keyframes load7-jsx-69621802{0%,80%,100%{box-shadow:0 2.5em 0 -1.3em;}40%{box-shadow:0 2.5em 0 0;}}@keyframes load7-jsx-69621802{0%,80%,100%{box-shadow:0 2.5em 0 -1.3em;}40%{box-shadow:0 2.5em 0 0;}}.midnight-blue.jsx-69621802{color:#003366;}.zoom.jsx-69621802{padding:50px;background-color:green;-webkit-transition:-webkit-transform 0.2s;-webkit-transition:transform 0.2s;transition:transform 0.2s;width:200px;height:200px;margin:0 auto;}.zoom.jsx-69621802:hover{-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}.video-container.jsx-69621802{position:relative;padding-bottom:56.25%;padding-top:30px;height:0;overflow:hidden;}.video-container.jsx-69621802 iframe.jsx-69621802,.video-container.jsx-69621802 object.jsx-69621802,.video-container.jsx-69621802 embed.jsx-69621802{position:absolute;top:0;left:0;width:100%;height:100%;}@media (max-width:767px){.text-sm-center.jsx-69621802{text-align:center !important;}}.remove-btn.jsx-69621802{padding:0px !important;border:none !important;background:none !important;}.spin.jsx-69621802{-webkit-animation:spin 4s infinite linear;}@-webkit-keyframes spin{0%.jsx-69621802{-webkit-transform:rotate(0deg);}100%.jsx-69621802{-webkit-transform:rotate(360deg);}}footer.jsx-69621802{color:#c9c9c9 !important;}footer.jsx-69621802 a.jsx-69621802{color:#c9c9c9 !important;}footer.jsx-69621802 a.jsx-69621802:hover{color:white !important;}.u-navbar.jsx-69621802{border-bottom:1px solid #bbbbbb;}.u-nav-link.jsx-69621802{-webkit-text-decoration:none;text-decoration:none;padding:10px 0px;margin:0px 10px;display:inline-block;position:relative;opacity:0.75;}.u-nav-link.jsx-69621802:hover{opacity:1;}.u-nav-link.jsx-69621802::before{-webkit-transition:300ms;transition:300ms;height:5px;content:\"\";position:absolute;background-color:#031d44;}.u-nav-link-ltr.jsx-69621802::before{width:0%;bottom:10px;}.u-nav-link-ltr.jsx-69621802:hover.jsx-69621802::before{width:100%;}.u-nav-link-fade-up.jsx-69621802::before{width:100%;bottom:5px;opacity:0;}.u-nav-link-fade-up.jsx-69621802:hover.jsx-69621802::before{bottom:10px;opacity:1;}.u-nav-link-grow-up.jsx-69621802::before{height:0%;width:100%;bottom:0px;}.u-nav-link-grow-up.jsx-69621802:hover.jsx-69621802::before{height:5px;}.is-mobile-only.jsx-69621802{visibility:hidden !important;padding-left:5px;}@media screen and (max-width:600px) and (max-width:840px){.is-centered-on-small.jsx-69621802{text-align:center !important;}.white-on-small.jsx-69621802{color:white !important;}.is-mobile-only.jsx-69621802{visibility:visible !important;padding-left:5px;}main.jsx-69621802{margin:0px 10px !important;}.scrollable.jsx-69621802{height:auto;}}footer.jsx-69621802 li.jsx-69621802{line-height:25px !important;}.field.jsx-69621802{padding:5px 0px;}a.jsx-69621802:hover{-webkit-text-decoration:none !important;text-decoration:none !important;}.pre-scrollable.jsx-69621802{max-height:340px;overflow-y:scroll;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWhlZW1tY2RvbmFsZC9EZXNrdG9wL2N4Y3NwYW5pc2gtbmV4dC9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQm9CLEFBR29DLEFBSUksQUFLaEIsQUFTTyxBQU1BLEFBTUEsQUFNQyxBQUtBLEFBT0ssQUFJQSxBQUlELEFBSWMsQUFJakIsQUFRSyxBQWN4QixBQU02RCxBQUlOLEFBSUQsQUFJNUIsQUFJVixBQU1FLEFBS0QsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUMsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFNSyxBQU1QLEFBSUYsQUFPRyxBQUlELEFBSUEsQUFJaUIsQUFRZCxBQUlKLEFBSUEsQUFLRCxBQUlELEFBUUEsQUFJVyxBQUlBLEFBSUosQUFLSSxBQUlkLEFBSWMsQUFJQyxBQVFkLEFBSUEsQUFPTSxBQVFKLEFBV0gsQUFNQyxBQUtELEFBT21CLEFBSUwsQUFLWCxBQUtELEFBVVEsQUFNSCxBQVVBLEFBU2EsQUFPUixBQU1tQixBQUtULEFBSUUsQUFLVixBQUlBLEFBSUYsQUFJUyxBQUlYLEFBU1gsQUFJTyxBQVFSLEFBS0UsQUFJQSxBQU1DLEFBS0YsQUFNQyxBQUlrQixBQU1FLEFBSU4sQUFJTyxBQUtILEFBSWYsQUFLYyxBQUlaLEFBSWdCLEFBSWYsU0FyRUwsQ0FqS1osQUFJQSxBQWlKRixBQWdDYSxDQXhjUSxBQW1RckIsQUE4Q29CLEFBV3BCLEFBNkhBLEFBSWEsQUFpQmIsQ0F2SnlCLEFBNEliLEFBc0NWLENBeEp1QixDQTNHRSxBQVEzQixBQXdEaUIsQUFzQ2pCLENBbEpRLEFBd0NSLENBek5FLEFBTUEsQUFNQSxBQW9NRixBQUl3QixBQXFSeEIsQ0F2ZEUsQUF3RTJCLEFBbUY3QixBQWVBLEFBSUEsQUFpVG9CLENBNVlwQixBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFtREEsQUE2RmMsQUFtRVUsQUFVaEIsQ0EzVWdCLEFBeUV4QixBQXlDQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxDQW5IeUIsQUE4SnpCLENBMUJhLEFBMFBiLEFBb0JhLENBWEQsQUFNWixDQTdjQSxBQXdEQSxBQXdSRSxBQW9EdUIsQUE0QnpCLEFBcUVFLENBcmJGLEFBSUEsQUFxSUEsQUE0TFMsQ0E3U2lCLEFBbUwxQixBQUlBLEFBU0EsQUFRQSxBQXdJQSxBQUlBLEVBeFp1QixBQW9HdkIsQUFzWUUsQ0FsS0EsQUEyS0YsQ0F2TW1CLEFBV1gsQUFrRU4sQUE4RmlCLEFBTWpCLENBdmRrQixBQThSTCxBQWlNTSxDQW5IUixBQXlCWCxDQTFNRixBQStOQSxBQW9DQSxBQVdBLENBaEVFLENBN0xGLENBc0dBLEFBd01BLENBeks0QixFQXBINUIsQ0FTYSxDQTJITSxDQWpVQyxDQTZVTixBQW1CZCxBQTJDYSxDQXBYRyxBQXdPVyxDQTVMSCxFQW9NSixBQW9GUyxBQXVGN0IsQ0FjRSxDQXJlRixBQU1vQixDQThEcEIsQ0F3S2UsQUFrQlksQUFxS1IsRUFwVW5CLENBSkEsQUFzVmEsQ0E5RGIsR0F0VGtCLEFBMFNQLEVBalVRLEFBaURuQixDQXdMdUIsR0FsQ1YsQ0FnRVMsQUFxSUYsRUEzYUQsQUFrR25CLEFBbU5BLEFBNENrQixDQTREQSxLQXNGbEIsQ0E1YnNCLEFBbVV0QixDQW5KQSxDQWlCQSxBQWlHQSxDQXpUQSxNQWdCQSxBQWtUQSxBQTBFMkIsQ0EzYTNCLEFBNlp1QixDQXZIRyxTQS9PMUIsQ0FrQitCLE9Bb05hLEdBaUl4QixHQWNwQixlQWJlLENBclZ1QixZQXNWdEMsQ0F4SnFDLEVBd0V2QixZQUNDLFNBdFFmLElBdVFnQixLQTNDUyxTQTRDekIscUNBMUVnQyxLQXFCaEMsR0FVQSw0REE5QkEiLCJmaWxlIjoiL1VzZXJzL3JhaGVlbW1jZG9uYWxkL0Rlc2t0b3AvY3hjc3BhbmlzaC1uZXh0L2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlckltcG9ydHMgZnJvbSBcIi4uL2NvbW1vbi9IZWFkZXJJbXBvcnRzXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBSZWFjdEdBIGZyb20gXCJyZWFjdC1nYVwiO1xuXG5jbGFzcyBMYXlvdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBSZWFjdEdBLmluaXRpYWxpemUoXCJVQS0xNDYyMjk0NDItMVwiKTtcbiAgICBSZWFjdEdBLnBhZ2V2aWV3KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVySW1wb3J0cyAvPlxuICAgICAgICA8TmF2YmFyIC8+XG5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5ibGFjayB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3R5bGVkLXVsIGxpIHtcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IGRpc2MgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNTQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3MjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDExNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucm91bmRlZCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oaWRkZW4ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5oaWRkZW4gKiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmFuc3dlcnMgcCB7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudW5kZXJsaW5lOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FwdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMC43NXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xuICAgICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgY2FwdGlvbi1zaWRlOiBib3R0b207XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNjcm9sbGFibGUge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmFpbmJvdy10ZXh0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgdG8gbGVmdCxcbiAgICAgICAgICAgICAgdmlvbGV0LFxuICAgICAgICAgICAgICBpbmRpZ28sXG4gICAgICAgICAgICAgIGJsdWUsXG4gICAgICAgICAgICAgIGdyZWVuLFxuICAgICAgICAgICAgICB5ZWxsb3csXG4gICAgICAgICAgICAgIG9yYW5nZSxcbiAgICAgICAgICAgICAgcmVkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNoYWRvdy1zbSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjA3NSkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2hhZG93IHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zaGFkb3ctbGcge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcmVtIDNyZW0gcmdiYSgwLCAwLCAwLCAwLjE3NSkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2hhZG93LW5vbmUge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saXN0LXVuc3R5bGVkIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlzdC11bnN0eWxlZCBsaSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIE5hdmlnYXRpb24gaWNvbiBwYWRkaW5nICovXG4gICAgICAgICAgLm5hdi1pY29uLTEge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtaWNvbi0yIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tMyB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTQge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtaWNvbi01IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tNiB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTcge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogN3B4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtaWNvbi04IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tOSB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA5cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTEwIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTExIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDExcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTEyIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTEzIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTE0IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTE1IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTE3IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogTWFzdGVyLmNzcyAqL1xuXG4gICAgICAgICAgLmZhLWxpbmtlZGluLWluIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwLFxuICAgICAgICAgIHNwYW4sXG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnN0aWNreSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBBZGQgc29tZSB0b3AgcGFkZGluZyB0byB0aGUgcGFnZSBjb250ZW50IHRvIHByZXZlbnQgc3VkZGVuIHF1aWNrIG1vdmVtZW50IChhcyB0aGUgaGVhZGVyIGdldHMgYSBuZXcgcG9zaXRpb24gYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSAocG9zaXRpb246Zml4ZWQgYW5kIHRvcDowKSAqL1xuICAgICAgICAgIC5zdGlja3kgKyAuY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlubGluZS1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYnJlYWRjcnVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIEluZGV4LmNzcyAqL1xuXG4gICAgICAgICAgLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYSxcbiAgICAgICAgICAubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhOmZvY3VzLFxuICAgICAgICAgIC5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGE6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdmJhci1pdGVtLmlzLW1lZ2Ege1xuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaXMtbWVnYS1tZW51LXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjM3NXJlbSAxcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wdXNoLWRvd24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50cmFuc2xhdGlvbiB7XG4gICAgICAgICAgICBjb2xvcjogIzBkMDMxNDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVudS1saW5rOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOGEzYWI5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZW51LWxpbmsge1xuICAgICAgICAgICAgY29sb3I6ICMyMDljZWUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubXktYmx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzIwOWNlZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5teS1ibHVlOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMDBkOGZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm15LWJsdWUtb24taG92ZXI6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICMyMDljZWUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3VwcG9ydC10ZXh0IHtcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mYWNlYm9vay1ibHVlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjM2I1OTk4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJsaW5rIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNDAwMG1zO1xuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGJsaW5rO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGtleWZyYW1lcyBibGluayB7XG4gICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2FkZXIsXG4gICAgICAgICAgLmxvYWRlcjpiZWZvcmUsXG4gICAgICAgICAgLmxvYWRlcjphZnRlciB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB3aWR0aDogMi41ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDIuNWVtO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbG9hZDcgMS44cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG9hZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA4MHB4IGF1dG87XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2FkZXI6YmVmb3JlLFxuICAgICAgICAgIC5sb2FkZXI6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG9hZGVyOmJlZm9yZSB7XG4gICAgICAgICAgICBsZWZ0OiAtMy41ZW07XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG9hZGVyOmFmdGVyIHtcbiAgICAgICAgICAgIGxlZnQ6IDMuNWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgbG9hZDcge1xuICAgICAgICAgICAgMCUsXG4gICAgICAgICAgICA4MCUsXG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIC0xLjNlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgNDAlIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1pZG5pZ2h0LWJsdWUge1xuICAgICAgICAgICAgY29sb3I6ICMwMDMzNjY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ob3d0by9ob3d0b19jc3Nfem9vbV9ob3Zlci5hc3AgKi9cbiAgICAgICAgICAuem9vbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICAgICAgICAgIC8qIEFuaW1hdGlvbiAqL1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC56b29tOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICAgICAgICAgIC8qICgxNTAlIHpvb20gLSBOb3RlOiBpZiB0aGUgem9vbSBpcyB0b28gbGFyZ2UsIGl0IHdpbGwgZ28gb3V0c2lkZSBvZiB0aGUgdmlld3BvcnQpICovXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogTUFLRSBZT1VUVUJFIFZJREVPUyBSRVNQT05TSVZFIC0gaHR0cHM6Ly9hdmV4ZGVzaWducy5jb20vcmVzcG9uc2l2ZS15b3V0dWJlLWVtYmVkLyAgKi9cbiAgICAgICAgICAudmlkZW8tY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciBpZnJhbWUsXG4gICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciBvYmplY3QsXG4gICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciBlbWJlZCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAudGV4dC1zbS1jZW50ZXIge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiA2ZmI5ZjUgaXMgYSB2ZXJ5IG5pY2UgY29sb3IgKi9cblxuICAgICAgICAgIC5yZW1vdmUtYnRuIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNwaW4ge1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gNHMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb290ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNjOWM5YzkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb290ZXIgYSB7XG4gICAgICAgICAgICBjb2xvcjogI2M5YzljOSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvb3RlciBhOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51LW5hdmJhciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JiYmJiYjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudS1uYXYtbGluayB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51LW5hdi1saW5rOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnUtbmF2LWxpbms6OmJlZm9yZSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcztcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzFkNDQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnUtbmF2LWxpbmstbHRyOjpiZWZvcmUge1xuICAgICAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51LW5hdi1saW5rLWx0cjpob3Zlcjo6YmVmb3JlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51LW5hdi1saW5rLWZhZGUtdXA6OmJlZm9yZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudS1uYXYtbGluay1mYWRlLXVwOmhvdmVyOjpiZWZvcmUge1xuICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudS1uYXYtbGluay1ncm93LXVwOjpiZWZvcmUge1xuICAgICAgICAgICAgaGVpZ2h0OiAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnUtbmF2LWxpbmstZ3Jvdy11cDpob3Zlcjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pcy1tb2JpbGUtb25seSB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcbiAgICAgICAgICAgIC5pcy1jZW50ZXJlZC1vbi1zbWFsbCB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAud2hpdGUtb24tc21hbGwge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmlzLW1vYmlsZS1vbmx5IHtcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNjcm9sbGFibGUge1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9vdGVyIGxpIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZpZWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucHJlLXNjcm9sbGFibGUge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMzQwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/raheemmcdonald/Desktop/cxcspanish-next/components/Layout.js */"));
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
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxcspanish-next/components/Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Navbar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
    jquery__WEBPACK_IMPORTED_MODULE_3___default()(document).ready(function () {
      // Check for click events on the navbar burger icon
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(".navbar-burger").click(function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        jquery__WEBPACK_IMPORTED_MODULE_3___default()(".navbar-burger").toggleClass("is-active");
        jquery__WEBPACK_IMPORTED_MODULE_3___default()(".navbar-menu").toggleClass("is-active");
      });
    });
  }

  render() {
    return __jsx("nav", {
      className: "navbar has-shadow is-spaced is-danger",
      role: "navigation",
      ariaLabel: "main navigation",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, __jsx("div", {
      className: "navbar-brand",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("a", {
      className: "navbar-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("h1", {
      className: "title is-5",
      style: {
        paddingBottom: "1px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("span", {
      style: {
        color: "white"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, "CXC Spanish Guide")))), __jsx("a", {
      role: "button",
      className: "navbar-burger burger",
      ariaLabel: "menu",
      ariaExpanded: "false",
      dataTarget: "mainNavbar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("span", {
      ariaHidden: "true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }), __jsx("span", {
      ariaHidden: "true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }), __jsx("span", {
      ariaHidden: "true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }))), __jsx("div", {
      id: "mainNavbar",
      className: "navbar-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("div", {
      className: "navbar-start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Guides",
      href: "/guide",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), __jsx("a", {
      className: "navbar-item has-dropdown is-hoverable",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "exam-topics",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("a", {
      className: "navbar-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "Exam Topics")), __jsx("div", {
      className: "navbar-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/topics/directed-situations",
      title: "Directed Situations",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/topics/letter-writing",
      title: "Letter Writing",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/topics/composition",
      title: "Composition",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/topics/contextual-announcements",
      title: "Contextual Announcements",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/topics/contextual-dialogue",
      title: "Contextual Dialogue",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      href: "/topics/reading-comprehension",
      title: "Reading Comprehension",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }))), __jsx("a", {
      className: "navbar-item has-dropdown is-hoverable",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "exam-topics",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, __jsx("a", {
      className: "navbar-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, "Verb Tenses")), __jsx("div", {
      className: "navbar-dropdown",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Present Tense",
      href: "/tenses/present-tense",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Present Progressive",
      href: "/tenses/present-progressive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Preterite Tense",
      href: "/tenses/preterite-tense",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Imperfect Tense",
      href: "/tenses/imperfect-tense",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Conditional Tense",
      href: "/tenses/conditional-tense",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Future Tense",
      href: "/tenses/subjunctive-mood",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Subjunctive Mood",
      href: "/tenses/subjunctive-mood",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }))), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Resources",
      href: "/resources",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Quiz",
      href: "/quiz",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Forum",
      href: "/forum",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    })), __jsx("div", {
      className: "navbar-end",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "About Us",
      href: "/about",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Tutoring",
      href: "/tutoring",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "FAQ",
      href: "/FAQ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: "Contact",
      href: "/contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
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

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
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
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

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
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

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

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
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
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
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

/***/ "./pages/tutoring.js":
/*!***************************!*\
  !*** ./pages/tutoring.js ***!
  \***************************/
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
var _jsxFileName = "/Users/raheemmcdonald/Desktop/cxcspanish-next/pages/tutoring.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // All other Header Imports




const Tutoring = props => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Tutoring | CXC Spanish Guide"), __jsx("meta", {
  name: "description",
  content: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("meta", {
  name: "keywords",
  content: "your, tags",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("meta", {
  name: "og:title",
  content: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), __jsx("meta", {
  name: "og:url",
  content: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}), __jsx("meta", {
  name: "og:description",
  content: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
})), __jsx(_common_Breadcrumb__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx(_common_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
  title: "Tutoring",
  href: "/tutoring",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
})), __jsx("div", {
  className: "columns",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("div", {
  className: "column",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("h1", {
  className: "title is-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "Tutoring"))), __jsx("div", {
  className: "column is-one-third",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("div", {
  className: "box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, __jsx("h1", {
  className: "title is-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, "Have more questions?"), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "Read our ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
  href: "/faq",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, "FAQ"), " or send us an enquiry at", " ", __jsx("a", {
  href: "mailto:hola@cxcspanish.com",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, "hola@cxcspanish.com"))))));

/* harmony default export */ __webpack_exports__["default"] = (Tutoring);

/***/ }),

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/tutoring.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raheemmcdonald/Desktop/cxcspanish-next/pages/tutoring.js */"./pages/tutoring.js");


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
//# sourceMappingURL=tutoring.js.map