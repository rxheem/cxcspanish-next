module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./assets/emoji.css":
/*!**************************!*\
  !*** ./assets/emoji.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./assets/fontawesome.js":
/*!*******************************!*\
  !*** ./assets/fontawesome.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

window.FontAwesomeKitConfig = {
  asyncLoading: {
    enabled: true
  },
  autoA11y: {
    enabled: true
  },
  baseUrl: "https://kit-free.fontawesome.com",
  license: "free",
  method: "css",
  minify: {
    enabled: true
  },
  v4shim: {
    enabled: false
  },
  version: "latest"
};
!function () {
  !function () {
    if (!(void 0 === window.Element || "classList" in document.documentElement)) {
      var e,
          t,
          n,
          i = Array.prototype,
          o = i.push,
          a = i.splice,
          s = i.join;
      r.prototype = {
        add: function (e) {
          this.contains(e) || (o.call(this, e), this.el.className = this.toString());
        },
        contains: function (e) {
          return -1 != this.el.className.indexOf(e);
        },
        item: function (e) {
          return this[e] || null;
        },
        remove: function (e) {
          if (this.contains(e)) {
            for (var t = 0; t < this.length && this[t] != e; t++);

            a.call(this, t, 1), this.el.className = this.toString();
          }
        },
        toString: function () {
          return s.call(this, " ");
        },
        toggle: function (e) {
          return this.contains(e) ? this.remove(e) : this.add(e), this.contains(e);
        }
      }, window.DOMTokenList = r, e = Element.prototype, t = "classList", n = function () {
        return new r(this);
      }, _Object$defineProperty ? _Object$defineProperty(e, t, {
        get: n
      }) : e.__defineGetter__(t, n);
    }

    function r(e) {
      for (var t = (this.el = e).className.replace(/^\s+|\s+$/g, "").split(/\s+/), n = 0; n < t.length; n++) o.call(this, t[n]);
    }
  }();

  function f(e) {
    var t, n, i, o;
    prefixesArray = e || ["fa"], prefixesSelectorString = "." + Array.prototype.join.call(e, ",."), t = document.querySelectorAll(prefixesSelectorString), Array.prototype.forEach.call(t, function (e) {
      n = e.getAttribute("title"), e.setAttribute("aria-hidden", "true"), i = !e.nextElementSibling || !e.nextElementSibling.classList.contains("sr-only"), n && i && ((o = document.createElement("span")).innerHTML = n, o.classList.add("sr-only"), e.parentNode.insertBefore(o, e.nextSibling));
    });
  }

  var e,
      t,
      u = function (e) {
    var t = document.createElement("link");
    t.href = e, t.media = "all", t.rel = "stylesheet", document.getElementsByTagName("head")[0].appendChild(t);
  },
      m = function (e) {
    !function (e, t, n) {
      var i,
          o = window.document,
          a = o.createElement("link");
      if (t) i = t;else {
        var s = (o.body || o.getElementsByTagName("head")[0]).childNodes;
        i = s[s.length - 1];
      }
      var r = o.styleSheets;
      a.rel = "stylesheet", a.href = e, a.media = "only x", function e(t) {
        if (o.body) return t();
        setTimeout(function () {
          e(t);
        });
      }(function () {
        i.parentNode.insertBefore(a, t ? i : i.nextSibling);
      });

      var l = function (e) {
        for (var t = a.href, n = r.length; n--;) if (r[n].href === t) return e();

        setTimeout(function () {
          l(e);
        });
      };

      function c() {
        a.addEventListener && a.removeEventListener("load", c), a.media = n || "all";
      }

      a.addEventListener && a.addEventListener("load", c), (a.onloadcssdefined = l)(c);
    }(e);
  },
      n = function (e, t) {
    var n = t && void 0 !== t.autoFetchSvg ? t.autoFetchSvg : void 0,
        i = t && void 0 !== t.async ? t.async : void 0,
        o = t && void 0 !== t.autoA11y ? t.autoA11y : void 0,
        a = document.createElement("script"),
        s = document.scripts[0];
    a.src = e, void 0 !== o && a.setAttribute("data-auto-a11y", o ? "true" : "false"), n && (a.setAttributeNode(document.createAttribute("data-auto-fetch-svg")), a.setAttribute("data-fetch-svg-from", t.fetchSvgFrom)), i && a.setAttributeNode(document.createAttribute("defer")), s.parentNode.appendChild(a);
  };

  function h(e, t) {
    var n = t && t.shim ? e.license + "-v4-shims" : e.license,
        i = t && t.minify ? ".min" : "";
    return e.baseUrl + "/releases/" + ("latest" === e.version ? "latest" : "v".concat(e.version)) + "/" + e.method + "/" + n + i + "." + e.method;
  }

  try {
    if (window.FontAwesomeKitConfig) {
      var i = window.FontAwesomeKitConfig;
      "js" === i.method && (t = {
        async: (e = i).asyncLoading.enabled,
        autoA11y: e.autoA11y.enabled
      }, "pro" === e.license && (t.autoFetchSvg = !0, t.fetchSvgFrom = e.baseUrl + "/releases/" + ("latest" === e.version ? "latest" : "v".concat(e.version)) + "/svgs"), e.v4shim.enabled && n(h(e, {
        shim: !0,
        minify: e.minify.enabled
      })), n(h(e, {
        minify: e.minify.enabled
      }), t)), "css" === i.method && function (e) {
        var t,
            n,
            i,
            o,
            a,
            s,
            r,
            l,
            c = f.bind(f, ["fa", "fab", "fas", "far", "fal"]);
        e.autoA11y.enabled && (n = c, o = [], a = document, s = a.documentElement.doScroll, r = "DOMContentLoaded", (l = (s ? /^loaded|^c/ : /^loaded|^i|^c/).test(a.readyState)) || a.addEventListener(r, i = function () {
          for (a.removeEventListener(r, i), l = 1; i = o.shift();) i();
        }), l ? setTimeout(n, 0) : o.push(n), t = c, "undefined" != typeof MutationObserver && new MutationObserver(t).observe(document, {
          childList: !0,
          subtree: !0
        })), e.v4shim.enabled && (e.asyncLoading.enabled ? m(h(e, {
          shim: !0,
          minify: e.minify.enabled
        })) : u(h(e, {
          shim: !0,
          minify: e.minify.enabled
        })));
        var d = h(e, {
          minify: e.minify.enabled
        });
        e.asyncLoading.enabled ? m(d) : u(d);
      }(i);
    }
  } catch (e) {}
}();

/***/ }),

/***/ "./common/Answer.js":
/*!**************************!*\
  !*** ./common/Answer.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fontawesome */ "react-fontawesome");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Answer = props => __jsx("div", {
  id: uuid__WEBPACK_IMPORTED_MODULE_2___default()(),
  style: {
    paddingBottom: "20px"
  }
}, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
  className: "has-text-primary",
  name: "angle-double-right"
}), __jsx("span", {
  className: "has-text-black",
  style: {
    paddingLeft: "5px"
  }
}, props.text), __jsx("p", {
  style: {
    paddingLeft: "18px"
  },
  className: "has-text-grey"
}, props.translated, __jsx("a", {
  href: props.href,
  target: "_blank"
}, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
  style: {
    paddingLeft: "10px"
  },
  name: "external-link-alt"
}))));

/* harmony default export */ __webpack_exports__["default"] = (Answer);

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
  href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
  rel: "stylesheet"
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
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-fontawesome */ "react-fontawesome");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const NavItem = props => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: props.href
}, __jsx("a", {
  className: "navbar-item",
  style: {
    display: props.hide ? "none" : "visible"
  }
}, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default.a, {
  name: props.faName
}), props.hasIcon ? __jsx("i", {
  className: props.iconClass,
  style: {
    color: props.color
  }
}) : null, props.title));

/* harmony default export */ __webpack_exports__["default"] = (NavItem);

/***/ }),

/***/ "./common/PDFFile.js":
/*!***************************!*\
  !*** ./common/PDFFile.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fontawesome */ "react-fontawesome");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const PDFFIle = props => __jsx("a", {
  href: props.href,
  download: true
}, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
  name: "file-pdf",
  style: {
    color: "#f00"
  }
}), __jsx("span", {
  style: {
    paddingLeft: "10px"
  }
}, props.title));

/* harmony default export */ __webpack_exports__["default"] = (PDFFIle);

/***/ }),

/***/ "./common/Quote.js":
/*!*************************!*\
  !*** ./common/Quote.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fontawesome */ "react-fontawesome");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Quote = props => __jsx("div", null, __jsx(react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default.a, {
  className: "has-text-danger",
  name: "quote-left"
}), __jsx("span", {
  style: {
    paddingLeft: "5px"
  }
}, " ", props.text));

/* harmony default export */ __webpack_exports__["default"] = (Quote);

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
/* harmony import */ var _assets_emoji_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/emoji.css */ "./assets/emoji.css");
/* harmony import */ var _assets_emoji_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_emoji_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_bulma_accordian_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/bulma-accordian.css */ "./assets/bulma-accordian.css");
/* harmony import */ var _assets_bulma_accordian_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_bulma_accordian_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_fontawesome_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/fontawesome.js */ "./assets/fontawesome.js");
/* harmony import */ var _assets_fontawesome_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_fontawesome_js__WEBPACK_IMPORTED_MODULE_11__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





 // CSS imports






class Layout extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    };
  }

  componentWillMount() {}

  componentDidMount() {
    react_ga__WEBPACK_IMPORTED_MODULE_5___default.a.initialize("UA-146229442-1");
    react_ga__WEBPACK_IMPORTED_MODULE_5___default.a.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return __jsx("div", {
      className: "jsx-692352764" + " " + "app"
    }, __jsx(_common_HeaderImports__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx("br", {
      className: "jsx-692352764"
    }), __jsx("main", {
      role: "main",
      id: "main",
      className: "jsx-692352764"
    }, __jsx("div", {
      className: "jsx-692352764" + " " + ((this.props.full ? "container-fluid" : "container") || "")
    }, this.props.children)), __jsx("br", {
      className: "jsx-692352764"
    }), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "692352764"
    }, "*.jsx-692352764{box-sizing:border-box;}.slider.jsx-692352764{width:300px;text-align:center;overflow:hidden;}.slides.jsx-692352764{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow-x:auto;-webkit-scroll-snap-type:x mandatory;-moz-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;}.slides.jsx-692352764::-webkit-scrollbar{width:10px;height:10px;}.slides.jsx-692352764::-webkit-scrollbar-thumb{background:black;border-radius:10px;}.slides.jsx-692352764::-webkit-scrollbar-track{background:transparent;}.slides.jsx-692352764>div.jsx-692352764{-webkit-scroll-snap-align:start;-moz-scroll-snap-align:start;-ms-scroll-snap-align:start;scroll-snap-align:start;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:300px;height:300px;margin-right:50px;border-radius:10px;background:#eee;-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:100px;}.author-info.jsx-692352764{background:rgba(0,0,0,0.75);color:white;padding:0.75rem;text-align:center;position:absolute;bottom:0;left:0;width:100%;margin:0;}.author-info.jsx-692352764 a.jsx-692352764{color:white;}img.jsx-692352764{object-fit:cover;position:absolute;top:0;left:0;width:100%;height:100%;}.slider.jsx-692352764>a.jsx-692352764{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:1.5rem;height:1.5rem;background:white;-webkit-text-decoration:none;text-decoration:none;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:50%;margin:0 0 0.5rem 0;position:relative;}.slider.jsx-692352764>a.jsx-692352764:active{top:1px;}.slider.jsx-692352764>a.jsx-692352764:focus{background:#000;}@supports (-webkit-scroll-snap-type) or (-moz-scroll-snap-type) or (-ms-scroll-snap-type) or (scroll-snap-type){.slider.jsx-692352764>a.jsx-692352764{display:none;}}html.jsx-692352764,body.jsx-692352764{height:100%;overflow:hidden;}body.jsx-692352764{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:linear-gradient(to bottom,#74abe2,#5563de);font-family:\"Ropa Sans\",sans-serif;}*.jsx-692352764{background-color:#f6f8fa;}.black.jsx-692352764{color:black !important;}.styled-ul.jsx-692352764 li.jsx-692352764{list-style:disc !important;padding-bottom:1.5em;}.container.jsx-692352764{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}@media (min-width:576px){.container.jsx-692352764{max-width:540px;}}@media (min-width:768px){.container.jsx-692352764{max-width:720px;}}@media (min-width:992px){.container.jsx-692352764{max-width:960px;}}@media (min-width:1200px){.container.jsx-692352764{max-width:1140px;}}.rounded.jsx-692352764{border-radius:15px;border:1px solid #eee;padding-left:20px;padding-top:20px;}.hidden.jsx-692352764{display:none !important;}.hidden.jsx-692352764 *.jsx-692352764{display:none !important;}.underline.jsx-692352764:hover{-webkit-text-decoration:underline !important;text-decoration:underline !important;}caption.jsx-692352764{padding-top:0.75rem;padding-bottom:0.75rem;color:#6c757d;text-align:left;caption-side:bottom;}.scrollable.jsx-692352764{overflow:auto !important;height:100px !important;}.rainbow-text.jsx-692352764{background-image:linear-gradient( to left, violet, indigo, blue, green, yellow, orange, red );-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.shadow-sm.jsx-692352764{box-shadow:0 0.125rem 0.25rem rgba(0,0,0,0.075) !important;}.shadow.jsx-692352764{box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important;}.shadow-lg.jsx-692352764{box-shadow:0 1rem 3rem rgba(0,0,0,0.175) !important;}.shadow-none.jsx-692352764{box-shadow:none !important;}.list-unstyled.jsx-692352764{padding-top:10px;list-style:none !important;margin:0px !important;}.list-unstyled.jsx-692352764 li.jsx-692352764{margin-bottom:13px;}.nav-icon-1.jsx-692352764{padding-right:1px;}.nav-icon-2.jsx-692352764{padding-right:2px;}.nav-icon-3.jsx-692352764{padding-right:3px;}.nav-icon-4.jsx-692352764{padding-right:4px;}.nav-icon-5.jsx-692352764{padding-right:5px;}.nav-icon-6.jsx-692352764{padding-right:6px;}.nav-icon-7.jsx-692352764{padding-right:7px;}.nav-icon-8.jsx-692352764{padding-right:8px;}.nav-icon-9.jsx-692352764{padding-right:9px;}.nav-icon-10.jsx-692352764{padding-right:10px;}.nav-icon-11.jsx-692352764{padding-right:11px;}.nav-icon-12.jsx-692352764{padding-right:12px;}.nav-icon-13.jsx-692352764{padding-right:13px;}.nav-icon-14.jsx-692352764{padding-right:14px;}.nav-icon-15.jsx-692352764{padding-right:15px;}.nav-icon-17.jsx-692352764{padding-right:17px;}.fa-linkedin-in.jsx-692352764{display:none !important;}p.jsx-692352764,span.jsx-692352764,li.jsx-692352764{line-height:20px;}.sticky.jsx-692352764{position:fixed;top:0;width:100%;}.sticky.jsx-692352764+.content.jsx-692352764{padding-top:102px;}.inline-icon.jsx-692352764{margin-right:8px;}.nav-icon.jsx-692352764{margin-right:5px;}.breadcrumb.jsx-692352764{background:transparent !important;}.nav-tabs.jsx-692352764>li.active.jsx-692352764>a.jsx-692352764,.nav-tabs.jsx-692352764>li.active.jsx-692352764>a.jsx-692352764:focus,.nav-tabs.jsx-692352764>li.active.jsx-692352764>a.jsx-692352764:hover{border:0 !important;}.navbar-item.is-mega.jsx-692352764{position:static;}.is-mega-menu-title.jsx-692352764{margin-bottom:0;padding:0.375rem 1rem;}.push-down.jsx-692352764{margin-top:5px;}.translation.jsx-692352764{color:#0d0314;background-color:#eeeeee;width:100%;padding:10px;margin:5px;}.menu-link.jsx-692352764:hover{color:#8a3ab9;}.menu-link.jsx-692352764{color:#209cee !important;}.my-blue.jsx-692352764{color:#209cee !important;}.my-blue.jsx-692352764:hover{-webkit-text-decoration:none;text-decoration:none;color:#00d8ff !important;}.my-blue-on-hover.jsx-692352764:hover{color:#209cee !important;}.support-text.jsx-692352764{color:grey;}.facebook-blue.jsx-692352764{color:#3b5998 !important;}.blink.jsx-692352764{-webkit-animation-duration:4000ms;animation-duration:4000ms;-webkit-animation-name:blink-jsx-692352764;animation-name:blink-jsx-692352764;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate;}@-webkit-keyframes blink-jsx-692352764{from{opacity:1;}to{opacity:0;}}@keyframes blink-jsx-692352764{from{opacity:1;}to{opacity:0;}}.loader.jsx-692352764,.loader.jsx-692352764:before,.loader.jsx-692352764:after{border-radius:50%;width:2.5em;height:2.5em;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation:load7-jsx-692352764 1.8s infinite ease-in-out;animation:load7-jsx-692352764 1.8s infinite ease-in-out;}.loader.jsx-692352764{color:#ffffff;font-size:10px;margin:80px auto;position:relative;text-indent:-9999em;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-0.16s;animation-delay:-0.16s;}.loader.jsx-692352764:before,.loader.jsx-692352764:after{content:\"\";position:absolute;top:0;}.loader.jsx-692352764:before{left:-3.5em;-webkit-animation-delay:-0.32s;animation-delay:-0.32s;}.loader.jsx-692352764:after{left:3.5em;}@-webkit-keyframes load7-jsx-692352764{0%,80%,100%{box-shadow:0 2.5em 0 -1.3em;}40%{box-shadow:0 2.5em 0 0;}}@keyframes load7-jsx-692352764{0%,80%,100%{box-shadow:0 2.5em 0 -1.3em;}40%{box-shadow:0 2.5em 0 0;}}.midnight-blue.jsx-692352764{color:#003366;}.zoom.jsx-692352764{padding:50px;background-color:green;-webkit-transition:-webkit-transform 0.2s;-webkit-transition:transform 0.2s;transition:transform 0.2s;width:200px;height:200px;margin:0 auto;}.zoom.jsx-692352764:hover{-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}.video-container.jsx-692352764{position:relative;padding-bottom:56.25%;padding-top:30px;height:0;overflow:hidden;}.video-container.jsx-692352764 iframe.jsx-692352764,.video-container.jsx-692352764 object.jsx-692352764,.video-container.jsx-692352764 embed.jsx-692352764{position:absolute;top:0;left:0;width:100%;height:100%;}@media (max-width:767px){.text-sm-center.jsx-692352764{text-align:center !important;}}.remove-btn.jsx-692352764{padding:0px !important;border:none !important;background:none !important;}.spin.jsx-692352764{-webkit-animation:spin 4s infinite linear;}@-webkit-keyframes spin{0%.jsx-692352764{-webkit-transform:rotate(0deg);}100%.jsx-692352764{-webkit-transform:rotate(360deg);}}footer.jsx-692352764{color:#c9c9c9 !important;}footer.jsx-692352764 a.jsx-692352764{color:#c9c9c9 !important;}footer.jsx-692352764 a.jsx-692352764:hover{color:white !important;}.u-navbar.jsx-692352764{border-bottom:1px solid #bbbbbb;}.u-nav-link.jsx-692352764{-webkit-text-decoration:none;text-decoration:none;padding:10px 0px;margin:0px 10px;display:inline-block;position:relative;opacity:0.75;}.u-nav-link.jsx-692352764:hover{opacity:1;}.u-nav-link.jsx-692352764::before{-webkit-transition:300ms;transition:300ms;height:5px;content:\"\";position:absolute;background-color:#031d44;}.u-nav-link-ltr.jsx-692352764::before{width:0%;bottom:10px;}.u-nav-link-ltr.jsx-692352764:hover.jsx-692352764::before{width:100%;}.u-nav-link-fade-up.jsx-692352764::before{width:100%;bottom:5px;opacity:0;}.u-nav-link-fade-up.jsx-692352764:hover.jsx-692352764::before{bottom:10px;opacity:1;}.u-nav-link-grow-up.jsx-692352764::before{height:0%;width:100%;bottom:0px;}.u-nav-link-grow-up.jsx-692352764:hover.jsx-692352764::before{height:5px;}.is-mobile-only.jsx-692352764{visibility:hidden !important;padding-left:5px;}@media screen and (max-width:600px) and (max-width:840px){.is-centered-on-small.jsx-692352764{text-align:center !important;}.white-on-small.jsx-692352764{color:white !important;}.is-mobile-only.jsx-692352764{visibility:visible !important;padding-left:5px;}main.jsx-692352764{margin:0px 10px !important;}.scrollable.jsx-692352764{height:auto;}}footer.jsx-692352764 li.jsx-692352764{line-height:25px !important;}.field.jsx-692352764{padding:5px 0px;}a.jsx-692352764:hover{-webkit-text-decoration:none !important;text-decoration:none !important;}.pre-scrollable.jsx-692352764{max-height:340px;overflow-y:scroll;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWhlZW1tY2RvbmFsZC9EZXNrdG9wL2N4Y3NwYW5pc2gtbmV4dC9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q29CLEFBR21DLEFBSVYsQUFNQyxBQVNGLEFBSU0sQUFJTSxBQUdDLEFBcUJPLEFBV25CLEFBR0ssQUFTRyxBQVlaLEFBR1EsQUFNRCxBQU1ILEFBSUMsQUFRWSxBQUlGLEFBSUksQUFLaEIsQUFTTyxBQU1BLEFBTUEsQUFNQyxBQUtBLEFBT0ssQUFJQSxBQUlhLEFBSWpCLEFBUUssQUFjeEIsQUFNNkQsQUFJTixBQUlELEFBSTVCLEFBSVYsQUFNRSxBQUtELEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlDLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBTUssQUFNUCxBQUlGLEFBT0csQUFJRCxBQUlBLEFBSWlCLEFBUWQsQUFJSixBQUlBLEFBS0QsQUFJRCxBQVFBLEFBSVcsQUFJQSxBQUlKLEFBS0ksQUFJZCxBQUljLEFBSUMsQUFRZCxBQUlBLEFBT00sQUFRSixBQVdILEFBTUMsQUFLRCxBQU9tQixBQUlMLEFBS1gsQUFLRCxBQVVRLEFBTUgsQUFVQSxBQVNhLEFBT1IsQUFNbUIsQUFLVCxBQUlFLEFBS1YsQUFJQSxBQUlGLEFBSVMsQUFJWCxBQVNYLEFBSU8sQUFRUixBQUtFLEFBSUEsQUFNQyxBQUtGLEFBTUMsQUFJa0IsQUFNRSxBQUlOLEFBSU8sQUFLSCxBQUlmLEFBS2MsQUFJWixBQUlnQixBQUlmLFFBN2hCbkIsQ0F3ZGMsQ0FqS1osQUFJQSxBQWlKRixBQWdDYSxDQS9pQkMsQUEyR08sQUErUHJCLEFBOENvQixBQVdwQixBQTZIQSxBQUlhLEFBaUJiLENBcGtCb0IsQUEwRHBCLEFBdUNrQixBQTRVTyxBQTRJYixBQXNDVixDQXBnQkEsQUE0V3VCLENBM0dFLEFBUTNCLEFBd0RpQixBQXNDakIsQ0FsSlEsQUF3Q1IsQ0FuUUEsQUE4Q0UsQUFNQSxBQU1BLEFBZ01GLEFBSXdCLEFBcVJ4QixDQXJsQnFCLEFBMENELEFBd0ZsQixBQW9FMkIsQUFtRjdCLEFBZUEsQUFJQSxBQWlUb0IsQ0E1WXBCLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQW1EQSxBQTZGYyxBQW1FVSxBQVVoQixDQXZVZ0IsQUFxRXhCLEFBeUNBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLENBbkh5QixBQThKekIsQ0ExQmEsQUEwUGIsQUFvQmEsQ0Fua0JiLEFBd2pCWSxBQU1aLENBMWlCQSxBQU9BLEFBMEZBLEFBNFVFLEFBb0R1QixBQTRCekIsQUFxRUUsQ0FqYkYsQUFJQSxBQWlJQSxBQTRMUyxDQXJYVCxBQXdFMEIsQUFtTDFCLEFBSUEsQUFTQSxBQVFBLEFBd0lBLEFBSUEsRUFwWnVCLEFBZ0d2QixBQXNZRSxDQTVpQlksQUFtRGQsQUF1VkUsQUEyS0YsQ0F2TW1CLEFBV1gsQUFrRU4sQUE4RmlCLEFBTWpCLENBN2tCZ0IsQUEwSEUsQUEwUkwsQUFpTU0sQ0FuSFIsQUF5QlgsQ0ExTUYsQUErTkEsQUFvQ0EsQUFXQSxDQWhFRSxDQTdMRixDQXJRUSxBQTJXUixBQXdNQSxDQTdsQkEsQUFvYjRCLEVBcEg1QixDQVNhLENBN1NLLEFBd2FDLENBelpWLEFBNEZXLENBeVVOLEFBbUJkLEFBMkNhLENBcFhHLEFBd09XLENBNUxILEVBeE54QixBQTRab0IsQUFvRlMsQUF1RjdCLENBY0UsQ0F2aEJXLEFBc0RiLEFBTW9CLENBMERwQixDQXdLZSxBQWtCWSxBQXFLUixFQXBVbkIsQ0FKQSxBQXNWYSxDQTlEYixFQXBib0IsQ0E4SEYsQUEwU1AsRUF4WkcsQUEyRkssQUE2Q25CLENBd0x1QixHQWxDVixDQWdFUyxBQXFJRixFQXZhRCxBQThGbkIsQUFtTkEsQUE0Q2tCLENBNERBLElBcGRsQixDQTBpQkEsQ0E1YnNCLEFBbVV0QixDQTVla0IsQUEyQ0UsQUFtREMsQUEyUHJCLENBaUJBLEFBaUdBLENBclRBLE1BWUEsQUFrVEEsQUEwRTJCLENBdmEzQixBQXladUIsQ0F2SEcsTUF4WkssRUEyQ3BCLENBOEhYLENBa0IrQixPQS9JdEIsQUFtV21DLENBalY3QixFQWtkSyxHQWNwQixDQWpmYSxLQTNCRyxFQTZDQSxJQWpCTCxHQW1lSSxDQXJWdUIsS0E3SXRDLENBaUJtQixNQWtkbkIsR0F4SnFDLEFBd0V2QixRQWpZUyxJQWtZUixTQXRRZixJQXVRZ0IsSUF0V1MsQ0EyVEEsQ0F0WVgsUUFrYmQsSUFqYmUsYUFDSyxFQTZDQyxnQkE1Q0EsSUFxV1csS0FxQmhDLENBVUEsQ0F4WnlCLFFBcUJQLGdCQUNlLG1CQXVFeUIsa0JBNlIxRCxLQXpUeUIsK0JBNkJhLFlBN0ZILG9CQXNCZCxHQXdFckIsVUE3RkEsdUJBZ0VvQixrQkFDRSxlQTNDTSxLQTRDUixrQkFDcEIsK0VBNUNvQixrQkFFTCwwRUFDVSxtR0FDSiw2RkFDSCxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL3JhaGVlbW1jZG9uYWxkL0Rlc2t0b3AvY3hjc3BhbmlzaC1uZXh0L2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlckltcG9ydHMgZnJvbSBcIi4uL2NvbW1vbi9IZWFkZXJJbXBvcnRzXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBSZWFjdEdBIGZyb20gXCJyZWFjdC1nYVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExhenlMb2FkIGZyb20gXCJyZWFjdC1sYXp5bG9hZFwiO1xuXG4vLyBDU1MgaW1wb3J0c1xuaW1wb3J0IENTUyBmcm9tIFwiLi4vYXNzZXRzL2J1bG1hLmNzc1wiO1xuaW1wb3J0IEVtb2ppcyBmcm9tIFwiLi4vYXNzZXRzL2Vtb2ppLmNzc1wiO1xuaW1wb3J0IEJ1bG1hQWNjb3JkaWFuQ1NTIGZyb20gXCIuLi9hc3NldHMvYnVsbWEtYWNjb3JkaWFuLmNzc1wiO1xuaW1wb3J0IFwiLi4vYXNzZXRzL2ZvbnRhd2Vzb21lLmpzXCI7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzTW9iaWxlOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7fVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIFJlYWN0R0EuaW5pdGlhbGl6ZShcIlVBLTE0NjIyOTQ0Mi0xXCIpO1xuICAgIFJlYWN0R0EucGFnZXZpZXcod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgIDxIZWFkZXJJbXBvcnRzIC8+XG4gICAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPG1haW4gcm9sZT1cIm1haW5cIiBpZD1cIm1haW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5mdWxsID8gXCJjb250YWluZXItZmx1aWRcIiA6IFwiY29udGFpbmVyXCJ9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxGb290ZXIgLz5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zbGlkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2xpZGVzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcblxuICAgICAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gICAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGlkZXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2xpZGVzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGlkZXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2xpZGVzID4gZGl2IHtcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGlkZXMgPiBkaXY6dGFyZ2V0IHtcbiAgICAgICAgICAgIC8qICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpOyAqL1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXV0aG9yLWluZm8ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdXRob3ItaW5mbyBhIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zbGlkZXIgPiBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNsaWRlciA+IGE6YWN0aXZlIHtcbiAgICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2xpZGVyID4gYTpmb2N1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIERvbid0IG5lZWQgYnV0dG9uIG5hdmlnYXRpb24gKi9cbiAgICAgICAgICBAc3VwcG9ydHMgKHNjcm9sbC1zbmFwLXR5cGUpIHtcbiAgICAgICAgICAgIC5zbGlkZXIgPiBhIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBodG1sLFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzc0YWJlMiwgIzU1NjNkZSk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb3BhIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY4ZmE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJsYWNrIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdHlsZWQtdWwgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogZGlzYyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1NDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogOTYwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTE0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yb3VuZGVkIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhpZGRlbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhpZGRlbiAqIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudW5kZXJsaW5lOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FwdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMC43NXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xuICAgICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgY2FwdGlvbi1zaWRlOiBib3R0b207XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNjcm9sbGFibGUge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmFpbmJvdy10ZXh0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgdG8gbGVmdCxcbiAgICAgICAgICAgICAgdmlvbGV0LFxuICAgICAgICAgICAgICBpbmRpZ28sXG4gICAgICAgICAgICAgIGJsdWUsXG4gICAgICAgICAgICAgIGdyZWVuLFxuICAgICAgICAgICAgICB5ZWxsb3csXG4gICAgICAgICAgICAgIG9yYW5nZSxcbiAgICAgICAgICAgICAgcmVkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNoYWRvdy1zbSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjA3NSkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2hhZG93IHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zaGFkb3ctbGcge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcmVtIDNyZW0gcmdiYSgwLCAwLCAwLCAwLjE3NSkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2hhZG93LW5vbmUge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saXN0LXVuc3R5bGVkIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlzdC11bnN0eWxlZCBsaSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIE5hdmlnYXRpb24gaWNvbiBwYWRkaW5nICovXG4gICAgICAgICAgLm5hdi1pY29uLTEge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtaWNvbi0yIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tMyB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTQge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtaWNvbi01IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tNiB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTcge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogN3B4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtaWNvbi04IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tOSB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA5cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTEwIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTExIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDExcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTEyIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTEzIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTE0IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTE1IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTE3IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogTWFzdGVyLmNzcyAqL1xuXG4gICAgICAgICAgLmZhLWxpbmtlZGluLWluIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwLFxuICAgICAgICAgIHNwYW4sXG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnN0aWNreSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBBZGQgc29tZSB0b3AgcGFkZGluZyB0byB0aGUgcGFnZSBjb250ZW50IHRvIHByZXZlbnQgc3VkZGVuIHF1aWNrIG1vdmVtZW50IChhcyB0aGUgaGVhZGVyIGdldHMgYSBuZXcgcG9zaXRpb24gYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSAocG9zaXRpb246Zml4ZWQgYW5kIHRvcDowKSAqL1xuICAgICAgICAgIC5zdGlja3kgKyAuY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlubGluZS1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYnJlYWRjcnVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIEluZGV4LmNzcyAqL1xuXG4gICAgICAgICAgLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYSxcbiAgICAgICAgICAubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhOmZvY3VzLFxuICAgICAgICAgIC5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGE6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdmJhci1pdGVtLmlzLW1lZ2Ege1xuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaXMtbWVnYS1tZW51LXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjM3NXJlbSAxcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wdXNoLWRvd24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50cmFuc2xhdGlvbiB7XG4gICAgICAgICAgICBjb2xvcjogIzBkMDMxNDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVudS1saW5rOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOGEzYWI5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZW51LWxpbmsge1xuICAgICAgICAgICAgY29sb3I6ICMyMDljZWUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubXktYmx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzIwOWNlZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5teS1ibHVlOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMDBkOGZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm15LWJsdWUtb24taG92ZXI6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICMyMDljZWUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3VwcG9ydC10ZXh0IHtcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mYWNlYm9vay1ibHVlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjM2I1OTk4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJsaW5rIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNDAwMG1zO1xuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGJsaW5rO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGtleWZyYW1lcyBibGluayB7XG4gICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2FkZXIsXG4gICAgICAgICAgLmxvYWRlcjpiZWZvcmUsXG4gICAgICAgICAgLmxvYWRlcjphZnRlciB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB3aWR0aDogMi41ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDIuNWVtO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbG9hZDcgMS44cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG9hZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA4MHB4IGF1dG87XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2FkZXI6YmVmb3JlLFxuICAgICAgICAgIC5sb2FkZXI6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG9hZGVyOmJlZm9yZSB7XG4gICAgICAgICAgICBsZWZ0OiAtMy41ZW07XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG9hZGVyOmFmdGVyIHtcbiAgICAgICAgICAgIGxlZnQ6IDMuNWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgbG9hZDcge1xuICAgICAgICAgICAgMCUsXG4gICAgICAgICAgICA4MCUsXG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIC0xLjNlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgNDAlIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1pZG5pZ2h0LWJsdWUge1xuICAgICAgICAgICAgY29sb3I6ICMwMDMzNjY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ob3d0by9ob3d0b19jc3Nfem9vbV9ob3Zlci5hc3AgKi9cbiAgICAgICAgICAuem9vbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICAgICAgICAgIC8qIEFuaW1hdGlvbiAqL1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC56b29tOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICAgICAgICAgIC8qICgxNTAlIHpvb20gLSBOb3RlOiBpZiB0aGUgem9vbSBpcyB0b28gbGFyZ2UsIGl0IHdpbGwgZ28gb3V0c2lkZSBvZiB0aGUgdmlld3BvcnQpICovXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogTUFLRSBZT1VUVUJFIFZJREVPUyBSRVNQT05TSVZFIC0gaHR0cHM6Ly9hdmV4ZGVzaWducy5jb20vcmVzcG9uc2l2ZS15b3V0dWJlLWVtYmVkLyAgKi9cbiAgICAgICAgICAudmlkZW8tY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciBpZnJhbWUsXG4gICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciBvYmplY3QsXG4gICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciBlbWJlZCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAudGV4dC1zbS1jZW50ZXIge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiA2ZmI5ZjUgaXMgYSB2ZXJ5IG5pY2UgY29sb3IgKi9cblxuICAgICAgICAgIC5yZW1vdmUtYnRuIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNwaW4ge1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gNHMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb290ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNjOWM5YzkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb290ZXIgYSB7XG4gICAgICAgICAgICBjb2xvcjogI2M5YzljOSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvb3RlciBhOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51LW5hdmJhciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JiYmJiYjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudS1uYXYtbGluayB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51LW5hdi1saW5rOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnUtbmF2LWxpbms6OmJlZm9yZSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcztcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzFkNDQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnUtbmF2LWxpbmstbHRyOjpiZWZvcmUge1xuICAgICAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51LW5hdi1saW5rLWx0cjpob3Zlcjo6YmVmb3JlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51LW5hdi1saW5rLWZhZGUtdXA6OmJlZm9yZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudS1uYXYtbGluay1mYWRlLXVwOmhvdmVyOjpiZWZvcmUge1xuICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudS1uYXYtbGluay1ncm93LXVwOjpiZWZvcmUge1xuICAgICAgICAgICAgaGVpZ2h0OiAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnUtbmF2LWxpbmstZ3Jvdy11cDpob3Zlcjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pcy1tb2JpbGUtb25seSB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcbiAgICAgICAgICAgIC5pcy1jZW50ZXJlZC1vbi1zbWFsbCB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAud2hpdGUtb24tc21hbGwge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmlzLW1vYmlsZS1vbmx5IHtcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNjcm9sbGFibGUge1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9vdGVyIGxpIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZpZWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucHJlLXNjcm9sbGFibGUge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMzQwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBzcmM9XCJodHRwczovL2FqYXguY2xvdWRmbGFyZS5jb20vY2RuLWNnaS9zY3JpcHRzLzcwODljNDNlL2Nsb3VkZmxhcmUtc3RhdGljL3JvY2tldC1sb2FkZXIubWluLmpzXCJcbiAgICAgICAgICBkYXRhLWNmLXNldHRpbmdzPVwiNWU2Y2FjZDNhNTI3N2Q0ZTU1Y2ZlNjRiLXw0OVwiXG4gICAgICAgICAgZGVmZXI9XCJcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/raheemmcdonald/Desktop/cxcspanish-next/components/Layout.js */"), __jsx("script", {
      src: "https://ajax.cloudflare.com/cdn-cgi/scripts/7089c43e/cloudflare-static/rocket-loader.min.js",
      "data-cf-settings": "5e6cacd3a5277d4e55cfe64b-|49",
      defer: "",
      className: "jsx-692352764"
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
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-fontawesome */ "react-fontawesome");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);

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
      faName: "",
      title: "About Us",
      href: "/about"
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      faName: "",
      title: "Tutoring",
      href: "/tutoring"
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      faName: "",
      title: "FAQ",
      href: "/FAQ"
    }), __jsx(_common_NavItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      faName: "",
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

/***/ "./pages/topics/contents/dir-sit/Overview.js":
/*!***************************************************!*\
  !*** ./pages/topics/contents/dir-sit/Overview.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-fontawesome */ "react-fontawesome");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_Quote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/Quote */ "./common/Quote.js");
/* harmony import */ var _common_Answer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/Answer */ "./common/Answer.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Overview = props => __jsx("div", null, __jsx("p", null, "Directed Situations are short situations or scenarios in which you are required to give a one sentence response in Spanish."), __jsx("br", null), __jsx("p", null, "For example, you are given the following scenario:"), __jsx("br", null), __jsx(_common_Quote__WEBPACK_IMPORTED_MODULE_2__["default"], {
  text: "Your teacher is taking up a new job overseas. Write him/ her a farewell note and express good wishes."
}), __jsx("br", null), __jsx("p", null, "In this example, you are required to "), __jsx("ul", {
  style: {
    paddingTop: "20px",
    paddingLeft: "25px",
    listStyleType: "disc"
  }
}, __jsx("li", null, "Acknowledge that your teacher is leaving, and"), __jsx("li", null, "Express good wishes.")), __jsx("br", null), __jsx("h1", {
  className: "has-text-danger title is-6"
}, "Suggested Responses"), __jsx(_common_Answer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  text: "Buenas suerte con tu nuevo trabajo y yo espero que usted haga bien",
  translated: "Good luch with your new job and I hope that you do well",
  href: "https://www.spanishdict.com/translate/%20Buenas%20suerte%20con%20tu%20nuevo%20trabajo%20y%20yo%20espero%20que%20usted%20haga%20bien"
}), __jsx(_common_Answer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  text: "Felicidades en su nuevo trabajo",
  translated: "Congratulations on your new job",
  href: "https://www.spanishdict.com/translate/Felicidades%20en%20su%20nuevo%20trabajo."
}), __jsx("br", null), __jsx("p", null, "Let's try another example."), __jsx("br", null), __jsx(_common_Quote__WEBPACK_IMPORTED_MODULE_2__["default"], {
  text: "You have to stay back at school this afternoon. Write the text that you send to your mother explaining why."
}), __jsx("br", null), __jsx("p", null, "In thsi example, we are only "), __jsx("br", null), __jsx("h1", {
  className: "has-text-danger title is-6"
}, "Suggested Responses"), __jsx(_common_Answer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  text: "Yo voy a limpiar mi aula esta tarde",
  translated: "I am going to clean my classroom this afternoon",
  href: "https://www.spanishdict.com/translate/I%20am%20going%20to%20clean%20my%20classroom%20this%20afternoon"
}), __jsx(_common_Answer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  text: "Mis amigos y yo vamos a un restaurante despu\xE9s de la escuela hoy",
  translated: "My friends and I are going to a restaurant after school today",
  href: "https://www.spanishdict.com/translate/My%20friends%20and%20I%20are%20going%20to%20a%20restaurant%20after%20school%20today.%20"
}), __jsx(_common_Answer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  text: "Hoy tengo detenci\xF3n desde las 3 y las 4 de la tarde",
  translated: "I have detention today from 3pm to 4pm",
  href: "https://www.spanishdict.com/translate/I%20have%20detention%20between%203%20and%204%20today.%20"
}));

/* harmony default export */ __webpack_exports__["default"] = (Overview);

/***/ }),

/***/ "./pages/topics/contents/dir-sit/TryThese.js":
/*!***************************************************!*\
  !*** ./pages/topics/contents/dir-sit/TryThese.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_PDFFile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../common/PDFFile.js */ "./common/PDFFile.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TryThese = props => __jsx("div", {
  className: "box"
}, __jsx("h1", {
  className: "title is-6"
}, "Exercises"), __jsx("p", null, "Try these exercises taken from past papers."), __jsx("ul", null, __jsx("li", null, __jsx("a", null, "..."), __jsx(_common_PDFFile_js__WEBPACK_IMPORTED_MODULE_1__["default"], null))));

/* harmony default export */ __webpack_exports__["default"] = (TryThese);

/***/ }),

/***/ "./pages/topics/directed-situations.js":
/*!*********************************************!*\
  !*** ./pages/topics/directed-situations.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_Breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/Breadcrumb */ "./common/Breadcrumb.js");
/* harmony import */ var _common_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/BreadcrumbItem */ "./common/BreadcrumbItem.js");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-fontawesome */ "react-fontawesome");
/* harmony import */ var react_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_fontawesome__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-youtube */ "react-youtube");
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_youtube__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_Quote__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/Quote */ "./common/Quote.js");
/* harmony import */ var _contents_dir_sit_Overview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contents/dir-sit/Overview */ "./pages/topics/contents/dir-sit/Overview.js");
/* harmony import */ var _contents_dir_sit_TryThese__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contents/dir-sit/TryThese */ "./pages/topics/contents/dir-sit/TryThese.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








 // All contents




class DirectedSituations extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {};
  } // Runs when the component finishes mounting


  componentDidMount() {}

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx("title", null, "Directed Situations | CXC Spanish Guide"), __jsx("meta", {
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
    })), __jsx(_common_Breadcrumb__WEBPACK_IMPORTED_MODULE_5__["default"], null, __jsx(_common_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Exam Topics",
      href: "/exam-topics"
    }), __jsx(_common_BreadcrumbItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: __jsx("span", null, __jsx("span", {
        class: "is-hidden-mobile"
      }, "Directed Situations"), __jsx("span", {
        class: "is-hidden-desktop"
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
    }, __jsx(_contents_dir_sit_Overview__WEBPACK_IMPORTED_MODULE_10__["default"], null))), __jsx("div", {
      className: "column is-one-third"
    }, __jsx(_contents_dir_sit_TryThese__WEBPACK_IMPORTED_MODULE_11__["default"], null))));
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (DirectedSituations);

/***/ }),

/***/ 4:
/*!***************************************************!*\
  !*** multi ./pages/topics/directed-situations.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/raheemmcdonald/Desktop/cxcspanish-next/pages/topics/directed-situations.js */"./pages/topics/directed-situations.js");


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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "react-fontawesome":
/*!************************************!*\
  !*** external "react-fontawesome" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-fontawesome");

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

/***/ "react-youtube":
/*!********************************!*\
  !*** external "react-youtube" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-youtube");

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

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=directed-situations.js.map