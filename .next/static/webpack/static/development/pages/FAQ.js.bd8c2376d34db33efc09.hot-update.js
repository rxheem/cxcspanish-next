webpackHotUpdate("static/development/pages/FAQ.js",{

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

/***/ })

})
//# sourceMappingURL=FAQ.js.bd8c2376d34db33efc09.hot-update.js.map