webpackHotUpdate("static/development/pages/topics/directed-situations.js",{

/***/ "./assets/fontawesome.js":
/*!*******************************!*\
  !*** ./assets/fontawesome.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (window.FontAwesomeKitConfig = {
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
});
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
        add: function add(e) {
          this.contains(e) || (o.call(this, e), this.el.className = this.toString());
        },
        contains: function contains(e) {
          return -1 != this.el.className.indexOf(e);
        },
        item: function item(e) {
          return this[e] || null;
        },
        remove: function remove(e) {
          if (this.contains(e)) {
            for (var t = 0; t < this.length && this[t] != e; t++) {
              ;
            }

            a.call(this, t, 1), this.el.className = this.toString();
          }
        },
        toString: function toString() {
          return s.call(this, " ");
        },
        toggle: function toggle(e) {
          return this.contains(e) ? this.remove(e) : this.add(e), this.contains(e);
        }
      }, window.DOMTokenList = r, e = Element.prototype, t = "classList", n = function n() {
        return new r(this);
      }, _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default.a ? _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(e, t, {
        get: n
      }) : e.__defineGetter__(t, n);
    }

    function r(e) {
      for (var t = (this.el = e).className.replace(/^\s+|\s+$/g, "").split(/\s+/), n = 0; n < t.length; n++) {
        o.call(this, t[n]);
      }
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
      u = function u(e) {
    var t = document.createElement("link");
    t.href = e, t.media = "all", t.rel = "stylesheet", document.getElementsByTagName("head")[0].appendChild(t);
  },
      m = function m(e) {
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

      var l = function l(e) {
        for (var t = a.href, n = r.length; n--;) {
          if (r[n].href === t) return e();
        }

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
      n = function n(e, t) {
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
            _i,
            o,
            a,
            s,
            r,
            l,
            c = f.bind(f, ["fa", "fab", "fas", "far", "fal"]);

        e.autoA11y.enabled && (n = c, o = [], a = document, s = a.documentElement.doScroll, r = "DOMContentLoaded", (l = (s ? /^loaded|^c/ : /^loaded|^i|^c/).test(a.readyState)) || a.addEventListener(r, _i = function i() {
          for (a.removeEventListener(r, _i), l = 1; _i = o.shift();) {
            _i();
          }
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

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_HeaderImports__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/HeaderImports */ "./common/HeaderImports.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_bulma_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/bulma.css */ "./assets/bulma.css");
/* harmony import */ var _assets_bulma_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_bulma_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_bulma_accordian_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/bulma-accordian.css */ "./assets/bulma-accordian.css");
/* harmony import */ var _assets_bulma_accordian_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_bulma_accordian_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_fontawesome_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/fontawesome.js */ "./assets/fontawesome.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





 // CSS imports





var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _React$Component);

  function Layout(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).call(this, props));
    _this.state = {
      isMobile: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      react_ga__WEBPACK_IMPORTED_MODULE_10__["default"].initialize("UA-146229442-1");
      react_ga__WEBPACK_IMPORTED_MODULE_10__["default"].pageview(window.location.pathname + window.location.search);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-692352764" + " " + "app"
      }, __jsx(_common_HeaderImports__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx("br", {
        className: "jsx-692352764"
      }), __jsx("main", {
        role: "main",
        id: "main",
        className: "jsx-692352764"
      }, __jsx("div", {
        className: "jsx-692352764" + " " + ((this.props.full ? "container-fluid" : "container") || "")
      }, this.props.children)), __jsx("br", {
        className: "jsx-692352764"
      }), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "692352764"
      }, "*.jsx-692352764{box-sizing:border-box;}.slider.jsx-692352764{width:300px;text-align:center;overflow:hidden;}.slides.jsx-692352764{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow-x:auto;-webkit-scroll-snap-type:x mandatory;-moz-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;}.slides.jsx-692352764::-webkit-scrollbar{width:10px;height:10px;}.slides.jsx-692352764::-webkit-scrollbar-thumb{background:black;border-radius:10px;}.slides.jsx-692352764::-webkit-scrollbar-track{background:transparent;}.slides.jsx-692352764>div.jsx-692352764{-webkit-scroll-snap-align:start;-moz-scroll-snap-align:start;-ms-scroll-snap-align:start;scroll-snap-align:start;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:300px;height:300px;margin-right:50px;border-radius:10px;background:#eee;-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:100px;}.author-info.jsx-692352764{background:rgba(0,0,0,0.75);color:white;padding:0.75rem;text-align:center;position:absolute;bottom:0;left:0;width:100%;margin:0;}.author-info.jsx-692352764 a.jsx-692352764{color:white;}img.jsx-692352764{object-fit:cover;position:absolute;top:0;left:0;width:100%;height:100%;}.slider.jsx-692352764>a.jsx-692352764{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:1.5rem;height:1.5rem;background:white;-webkit-text-decoration:none;text-decoration:none;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:50%;margin:0 0 0.5rem 0;position:relative;}.slider.jsx-692352764>a.jsx-692352764:active{top:1px;}.slider.jsx-692352764>a.jsx-692352764:focus{background:#000;}@supports (-webkit-scroll-snap-type) or (-moz-scroll-snap-type) or (-ms-scroll-snap-type) or (scroll-snap-type){.slider.jsx-692352764>a.jsx-692352764{display:none;}}html.jsx-692352764,body.jsx-692352764{height:100%;overflow:hidden;}body.jsx-692352764{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:linear-gradient(to bottom,#74abe2,#5563de);font-family:\"Ropa Sans\",sans-serif;}*.jsx-692352764{background-color:#f6f8fa;}.black.jsx-692352764{color:black !important;}.styled-ul.jsx-692352764 li.jsx-692352764{list-style:disc !important;padding-bottom:1.5em;}.container.jsx-692352764{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}@media (min-width:576px){.container.jsx-692352764{max-width:540px;}}@media (min-width:768px){.container.jsx-692352764{max-width:720px;}}@media (min-width:992px){.container.jsx-692352764{max-width:960px;}}@media (min-width:1200px){.container.jsx-692352764{max-width:1140px;}}.rounded.jsx-692352764{border-radius:15px;border:1px solid #eee;padding-left:20px;padding-top:20px;}.hidden.jsx-692352764{display:none !important;}.hidden.jsx-692352764 *.jsx-692352764{display:none !important;}.underline.jsx-692352764:hover{-webkit-text-decoration:underline !important;text-decoration:underline !important;}caption.jsx-692352764{padding-top:0.75rem;padding-bottom:0.75rem;color:#6c757d;text-align:left;caption-side:bottom;}.scrollable.jsx-692352764{overflow:auto !important;height:100px !important;}.rainbow-text.jsx-692352764{background-image:linear-gradient( to left, violet, indigo, blue, green, yellow, orange, red );-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.shadow-sm.jsx-692352764{box-shadow:0 0.125rem 0.25rem rgba(0,0,0,0.075) !important;}.shadow.jsx-692352764{box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important;}.shadow-lg.jsx-692352764{box-shadow:0 1rem 3rem rgba(0,0,0,0.175) !important;}.shadow-none.jsx-692352764{box-shadow:none !important;}.list-unstyled.jsx-692352764{padding-top:10px;list-style:none !important;margin:0px !important;}.list-unstyled.jsx-692352764 li.jsx-692352764{margin-bottom:13px;}.nav-icon-1.jsx-692352764{padding-right:1px;}.nav-icon-2.jsx-692352764{padding-right:2px;}.nav-icon-3.jsx-692352764{padding-right:3px;}.nav-icon-4.jsx-692352764{padding-right:4px;}.nav-icon-5.jsx-692352764{padding-right:5px;}.nav-icon-6.jsx-692352764{padding-right:6px;}.nav-icon-7.jsx-692352764{padding-right:7px;}.nav-icon-8.jsx-692352764{padding-right:8px;}.nav-icon-9.jsx-692352764{padding-right:9px;}.nav-icon-10.jsx-692352764{padding-right:10px;}.nav-icon-11.jsx-692352764{padding-right:11px;}.nav-icon-12.jsx-692352764{padding-right:12px;}.nav-icon-13.jsx-692352764{padding-right:13px;}.nav-icon-14.jsx-692352764{padding-right:14px;}.nav-icon-15.jsx-692352764{padding-right:15px;}.nav-icon-17.jsx-692352764{padding-right:17px;}.fa-linkedin-in.jsx-692352764{display:none !important;}p.jsx-692352764,span.jsx-692352764,li.jsx-692352764{line-height:20px;}.sticky.jsx-692352764{position:fixed;top:0;width:100%;}.sticky.jsx-692352764+.content.jsx-692352764{padding-top:102px;}.inline-icon.jsx-692352764{margin-right:8px;}.nav-icon.jsx-692352764{margin-right:5px;}.breadcrumb.jsx-692352764{background:transparent !important;}.nav-tabs.jsx-692352764>li.active.jsx-692352764>a.jsx-692352764,.nav-tabs.jsx-692352764>li.active.jsx-692352764>a.jsx-692352764:focus,.nav-tabs.jsx-692352764>li.active.jsx-692352764>a.jsx-692352764:hover{border:0 !important;}.navbar-item.is-mega.jsx-692352764{position:static;}.is-mega-menu-title.jsx-692352764{margin-bottom:0;padding:0.375rem 1rem;}.push-down.jsx-692352764{margin-top:5px;}.translation.jsx-692352764{color:#0d0314;background-color:#eeeeee;width:100%;padding:10px;margin:5px;}.menu-link.jsx-692352764:hover{color:#8a3ab9;}.menu-link.jsx-692352764{color:#209cee !important;}.my-blue.jsx-692352764{color:#209cee !important;}.my-blue.jsx-692352764:hover{-webkit-text-decoration:none;text-decoration:none;color:#00d8ff !important;}.my-blue-on-hover.jsx-692352764:hover{color:#209cee !important;}.support-text.jsx-692352764{color:grey;}.facebook-blue.jsx-692352764{color:#3b5998 !important;}.blink.jsx-692352764{-webkit-animation-duration:4000ms;animation-duration:4000ms;-webkit-animation-name:blink-jsx-692352764;animation-name:blink-jsx-692352764;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate;}@-webkit-keyframes blink-jsx-692352764{from{opacity:1;}to{opacity:0;}}@keyframes blink-jsx-692352764{from{opacity:1;}to{opacity:0;}}.loader.jsx-692352764,.loader.jsx-692352764:before,.loader.jsx-692352764:after{border-radius:50%;width:2.5em;height:2.5em;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation:load7-jsx-692352764 1.8s infinite ease-in-out;animation:load7-jsx-692352764 1.8s infinite ease-in-out;}.loader.jsx-692352764{color:#ffffff;font-size:10px;margin:80px auto;position:relative;text-indent:-9999em;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-0.16s;animation-delay:-0.16s;}.loader.jsx-692352764:before,.loader.jsx-692352764:after{content:\"\";position:absolute;top:0;}.loader.jsx-692352764:before{left:-3.5em;-webkit-animation-delay:-0.32s;animation-delay:-0.32s;}.loader.jsx-692352764:after{left:3.5em;}@-webkit-keyframes load7-jsx-692352764{0%,80%,100%{box-shadow:0 2.5em 0 -1.3em;}40%{box-shadow:0 2.5em 0 0;}}@keyframes load7-jsx-692352764{0%,80%,100%{box-shadow:0 2.5em 0 -1.3em;}40%{box-shadow:0 2.5em 0 0;}}.midnight-blue.jsx-692352764{color:#003366;}.zoom.jsx-692352764{padding:50px;background-color:green;-webkit-transition:-webkit-transform 0.2s;-webkit-transition:transform 0.2s;transition:transform 0.2s;width:200px;height:200px;margin:0 auto;}.zoom.jsx-692352764:hover{-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}.video-container.jsx-692352764{position:relative;padding-bottom:56.25%;padding-top:30px;height:0;overflow:hidden;}.video-container.jsx-692352764 iframe.jsx-692352764,.video-container.jsx-692352764 object.jsx-692352764,.video-container.jsx-692352764 embed.jsx-692352764{position:absolute;top:0;left:0;width:100%;height:100%;}@media (max-width:767px){.text-sm-center.jsx-692352764{text-align:center !important;}}.remove-btn.jsx-692352764{padding:0px !important;border:none !important;background:none !important;}.spin.jsx-692352764{-webkit-animation:spin 4s infinite linear;}@-webkit-keyframes spin{0%.jsx-692352764{-webkit-transform:rotate(0deg);}100%.jsx-692352764{-webkit-transform:rotate(360deg);}}footer.jsx-692352764{color:#c9c9c9 !important;}footer.jsx-692352764 a.jsx-692352764{color:#c9c9c9 !important;}footer.jsx-692352764 a.jsx-692352764:hover{color:white !important;}.u-navbar.jsx-692352764{border-bottom:1px solid #bbbbbb;}.u-nav-link.jsx-692352764{-webkit-text-decoration:none;text-decoration:none;padding:10px 0px;margin:0px 10px;display:inline-block;position:relative;opacity:0.75;}.u-nav-link.jsx-692352764:hover{opacity:1;}.u-nav-link.jsx-692352764::before{-webkit-transition:300ms;transition:300ms;height:5px;content:\"\";position:absolute;background-color:#031d44;}.u-nav-link-ltr.jsx-692352764::before{width:0%;bottom:10px;}.u-nav-link-ltr.jsx-692352764:hover.jsx-692352764::before{width:100%;}.u-nav-link-fade-up.jsx-692352764::before{width:100%;bottom:5px;opacity:0;}.u-nav-link-fade-up.jsx-692352764:hover.jsx-692352764::before{bottom:10px;opacity:1;}.u-nav-link-grow-up.jsx-692352764::before{height:0%;width:100%;bottom:0px;}.u-nav-link-grow-up.jsx-692352764:hover.jsx-692352764::before{height:5px;}.is-mobile-only.jsx-692352764{visibility:hidden !important;padding-left:5px;}@media screen and (max-width:600px) and (max-width:840px){.is-centered-on-small.jsx-692352764{text-align:center !important;}.white-on-small.jsx-692352764{color:white !important;}.is-mobile-only.jsx-692352764{visibility:visible !important;padding-left:5px;}main.jsx-692352764{margin:0px 10px !important;}.scrollable.jsx-692352764{height:auto;}}footer.jsx-692352764 li.jsx-692352764{line-height:25px !important;}.field.jsx-692352764{padding:5px 0px;}a.jsx-692352764:hover{-webkit-text-decoration:none !important;text-decoration:none !important;}.pre-scrollable.jsx-692352764{max-height:340px;overflow-y:scroll;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWhlZW1tY2RvbmFsZC9EZXNrdG9wL2N4Y3NwYW5pc2gtbmV4dC9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQ29CLEFBR21DLEFBSVYsQUFNQyxBQVNGLEFBSU0sQUFJTSxBQUdDLEFBcUJPLEFBV25CLEFBR0ssQUFTRyxBQVlaLEFBR1EsQUFNRCxBQU1ILEFBSUMsQUFRWSxBQUlGLEFBSUksQUFLaEIsQUFTTyxBQU1BLEFBTUEsQUFNQyxBQUtBLEFBT0ssQUFJQSxBQUlhLEFBSWpCLEFBUUssQUFjeEIsQUFNNkQsQUFJTixBQUlELEFBSTVCLEFBSVYsQUFNRSxBQUtELEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlDLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBTUssQUFNUCxBQUlGLEFBT0csQUFJRCxBQUlBLEFBSWlCLEFBUWQsQUFJSixBQUlBLEFBS0QsQUFJRCxBQVFBLEFBSVcsQUFJQSxBQUlKLEFBS0ksQUFJZCxBQUljLEFBSUMsQUFRZCxBQUlBLEFBT00sQUFRSixBQVdILEFBTUMsQUFLRCxBQU9tQixBQUlMLEFBS1gsQUFLRCxBQVVRLEFBTUgsQUFVQSxBQVNhLEFBT1IsQUFNbUIsQUFLVCxBQUlFLEFBS1YsQUFJQSxBQUlGLEFBSVMsQUFJWCxBQVNYLEFBSU8sQUFRUixBQUtFLEFBSUEsQUFNQyxBQUtGLEFBTUMsQUFJa0IsQUFNRSxBQUlOLEFBSU8sQUFLSCxBQUlmLEFBS2MsQUFJWixBQUlnQixBQUlmLFFBN2hCbkIsQ0F3ZGMsQ0FqS1osQUFJQSxBQWlKRixBQWdDYSxDQS9pQkMsQUEyR08sQUErUHJCLEFBOENvQixBQVdwQixBQTZIQSxBQUlhLEFBaUJiLENBcGtCb0IsQUEwRHBCLEFBdUNrQixBQTRVTyxBQTRJYixBQXNDVixDQXBnQkEsQUE0V3VCLENBM0dFLEFBUTNCLEFBd0RpQixBQXNDakIsQ0FsSlEsQUF3Q1IsQ0FuUUEsQUE4Q0UsQUFNQSxBQU1BLEFBZ01GLEFBSXdCLEFBcVJ4QixDQXJsQnFCLEFBMENELEFBd0ZsQixBQW9FMkIsQUFtRjdCLEFBZUEsQUFJQSxBQWlUb0IsQ0E1WXBCLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQW1EQSxBQTZGYyxBQW1FVSxBQVVoQixDQXZVZ0IsQUFxRXhCLEFBeUNBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLENBbkh5QixBQThKekIsQ0ExQmEsQUEwUGIsQUFvQmEsQ0Fua0JiLEFBd2pCWSxBQU1aLENBMWlCQSxBQU9BLEFBMEZBLEFBNFVFLEFBb0R1QixBQTRCekIsQUFxRUUsQ0FqYkYsQUFJQSxBQWlJQSxBQTRMUyxDQXJYVCxBQXdFMEIsQUFtTDFCLEFBSUEsQUFTQSxBQVFBLEFBd0lBLEFBSUEsRUFwWnVCLEFBZ0d2QixBQXNZRSxDQTVpQlksQUFtRGQsQUF1VkUsQUEyS0YsQ0F2TW1CLEFBV1gsQUFrRU4sQUE4RmlCLEFBTWpCLENBN2tCZ0IsQUEwSEUsQUEwUkwsQUFpTU0sQ0FuSFIsQUF5QlgsQ0ExTUYsQUErTkEsQUFvQ0EsQUFXQSxDQWhFRSxDQTdMRixDQXJRUSxBQTJXUixBQXdNQSxDQTdsQkEsQUFvYjRCLEVBcEg1QixDQVNhLENBN1NLLEFBd2FDLENBelpWLEFBNEZXLENBeVVOLEFBbUJkLEFBMkNhLENBcFhHLEFBd09XLENBNUxILEVBeE54QixBQTRab0IsQUFvRlMsQUF1RjdCLENBY0UsQ0F2aEJXLEFBc0RiLEFBTW9CLENBMERwQixDQXdLZSxBQWtCWSxBQXFLUixFQXBVbkIsQ0FKQSxBQXNWYSxDQTlEYixFQXBib0IsQ0E4SEYsQUEwU1AsRUF4WkcsQUEyRkssQUE2Q25CLENBd0x1QixHQWxDVixDQWdFUyxBQXFJRixFQXZhRCxBQThGbkIsQUFtTkEsQUE0Q2tCLENBNERBLElBcGRsQixDQTBpQkEsQ0E1YnNCLEFBbVV0QixDQTVla0IsQUEyQ0UsQUFtREMsQUEyUHJCLENBaUJBLEFBaUdBLENBclRBLE1BWUEsQUFrVEEsQUEwRTJCLENBdmEzQixBQXladUIsQ0F2SEcsTUF4WkssRUEyQ3BCLENBOEhYLENBa0IrQixPQS9JdEIsQUFtV21DLENBalY3QixFQWtkSyxHQWNwQixDQWpmYSxLQTNCRyxFQTZDQSxJQWpCTCxHQW1lSSxDQXJWdUIsS0E3SXRDLENBaUJtQixNQWtkbkIsR0F4SnFDLEFBd0V2QixRQWpZUyxJQWtZUixTQXRRZixJQXVRZ0IsSUF0V1MsQ0EyVEEsQ0F0WVgsUUFrYmQsSUFqYmUsYUFDSyxFQTZDQyxnQkE1Q0EsSUFxV1csS0FxQmhDLENBVUEsQ0F4WnlCLFFBcUJQLGdCQUNlLG1CQXVFeUIsa0JBNlIxRCxLQXpUeUIsK0JBNkJhLFlBN0ZILG9CQXNCZCxHQXdFckIsVUE3RkEsdUJBZ0VvQixrQkFDRSxlQTNDTSxLQTRDUixrQkFDcEIsK0VBNUNvQixrQkFFTCwwRUFDVSxtR0FDSiw2RkFDSCxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL3JhaGVlbW1jZG9uYWxkL0Rlc2t0b3AvY3hjc3BhbmlzaC1uZXh0L2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlckltcG9ydHMgZnJvbSBcIi4uL2NvbW1vbi9IZWFkZXJJbXBvcnRzXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBSZWFjdEdBIGZyb20gXCJyZWFjdC1nYVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExhenlMb2FkIGZyb20gXCJyZWFjdC1sYXp5bG9hZFwiO1xuXG4vLyBDU1MgaW1wb3J0c1xuaW1wb3J0IENTUyBmcm9tIFwiLi4vYXNzZXRzL2J1bG1hLmNzc1wiO1xuaW1wb3J0IEJ1bG1hQWNjb3JkaWFuQ1NTIGZyb20gXCIuLi9hc3NldHMvYnVsbWEtYWNjb3JkaWFuLmNzc1wiO1xuaW1wb3J0IFwiLi4vYXNzZXRzL2ZvbnRhd2Vzb21lLmpzXCI7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzTW9iaWxlOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7fVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIFJlYWN0R0EuaW5pdGlhbGl6ZShcIlVBLTE0NjIyOTQ0Mi0xXCIpO1xuICAgIFJlYWN0R0EucGFnZXZpZXcod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCI+XG4gICAgICAgIDxIZWFkZXJJbXBvcnRzIC8+XG4gICAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPG1haW4gcm9sZT1cIm1haW5cIiBpZD1cIm1haW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5mdWxsID8gXCJjb250YWluZXItZmx1aWRcIiA6IFwiY29udGFpbmVyXCJ9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxGb290ZXIgLz5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zbGlkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2xpZGVzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcblxuICAgICAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gICAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGlkZXM6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2xpZGVzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGlkZXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2xpZGVzID4gZGl2IHtcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydDtcbiAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGlkZXMgPiBkaXY6dGFyZ2V0IHtcbiAgICAgICAgICAgIC8qICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpOyAqL1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYXV0aG9yLWluZm8ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdXRob3ItaW5mbyBhIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zbGlkZXIgPiBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNsaWRlciA+IGE6YWN0aXZlIHtcbiAgICAgICAgICAgIHRvcDogMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2xpZGVyID4gYTpmb2N1cyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIERvbid0IG5lZWQgYnV0dG9uIG5hdmlnYXRpb24gKi9cbiAgICAgICAgICBAc3VwcG9ydHMgKHNjcm9sbC1zbmFwLXR5cGUpIHtcbiAgICAgICAgICAgIC5zbGlkZXIgPiBhIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBodG1sLFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzc0YWJlMiwgIzU1NjNkZSk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJSb3BhIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY4ZmE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJsYWNrIHtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdHlsZWQtdWwgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogZGlzYyAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA1NDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDcyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogOTYwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTE0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yb3VuZGVkIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhpZGRlbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhpZGRlbiAqIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudW5kZXJsaW5lOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY2FwdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMC43NXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xuICAgICAgICAgICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgY2FwdGlvbi1zaWRlOiBib3R0b207XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNjcm9sbGFibGUge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucmFpbmJvdy10ZXh0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgICAgdG8gbGVmdCxcbiAgICAgICAgICAgICAgdmlvbGV0LFxuICAgICAgICAgICAgICBpbmRpZ28sXG4gICAgICAgICAgICAgIGJsdWUsXG4gICAgICAgICAgICAgIGdyZWVuLFxuICAgICAgICAgICAgICB5ZWxsb3csXG4gICAgICAgICAgICAgIG9yYW5nZSxcbiAgICAgICAgICAgICAgcmVkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNoYWRvdy1zbSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjA3NSkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2hhZG93IHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zaGFkb3ctbGcge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcmVtIDNyZW0gcmdiYSgwLCAwLCAwLCAwLjE3NSkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2hhZG93LW5vbmUge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saXN0LXVuc3R5bGVkIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubGlzdC11bnN0eWxlZCBsaSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIE5hdmlnYXRpb24gaWNvbiBwYWRkaW5nICovXG4gICAgICAgICAgLm5hdi1pY29uLTEge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtaWNvbi0yIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tMyB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTQge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtaWNvbi01IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tNiB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTcge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogN3B4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtaWNvbi04IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tOSB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA5cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTEwIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTExIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDExcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTEyIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTEzIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTE0IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTE1IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTE3IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogTWFzdGVyLmNzcyAqL1xuXG4gICAgICAgICAgLmZhLWxpbmtlZGluLWluIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwLFxuICAgICAgICAgIHNwYW4sXG4gICAgICAgICAgbGkge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnN0aWNreSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBBZGQgc29tZSB0b3AgcGFkZGluZyB0byB0aGUgcGFnZSBjb250ZW50IHRvIHByZXZlbnQgc3VkZGVuIHF1aWNrIG1vdmVtZW50IChhcyB0aGUgaGVhZGVyIGdldHMgYSBuZXcgcG9zaXRpb24gYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSAocG9zaXRpb246Zml4ZWQgYW5kIHRvcDowKSAqL1xuICAgICAgICAgIC5zdGlja3kgKyAuY29udGVudCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlubGluZS1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYnJlYWRjcnVtYiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIEluZGV4LmNzcyAqL1xuXG4gICAgICAgICAgLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYSxcbiAgICAgICAgICAubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhOmZvY3VzLFxuICAgICAgICAgIC5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGE6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdmJhci1pdGVtLmlzLW1lZ2Ege1xuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaXMtbWVnYS1tZW51LXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjM3NXJlbSAxcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wdXNoLWRvd24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50cmFuc2xhdGlvbiB7XG4gICAgICAgICAgICBjb2xvcjogIzBkMDMxNDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVudS1saW5rOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOGEzYWI5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZW51LWxpbmsge1xuICAgICAgICAgICAgY29sb3I6ICMyMDljZWUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubXktYmx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzIwOWNlZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5teS1ibHVlOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMDBkOGZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm15LWJsdWUtb24taG92ZXI6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICMyMDljZWUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3VwcG9ydC10ZXh0IHtcbiAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5mYWNlYm9vay1ibHVlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjM2I1OTk4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmJsaW5rIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNDAwMG1zO1xuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGJsaW5rO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGtleWZyYW1lcyBibGluayB7XG4gICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2FkZXIsXG4gICAgICAgICAgLmxvYWRlcjpiZWZvcmUsXG4gICAgICAgICAgLmxvYWRlcjphZnRlciB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICB3aWR0aDogMi41ZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDIuNWVtO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbG9hZDcgMS44cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG9hZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA4MHB4IGF1dG87XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0ZXh0LWluZGVudDogLTk5OTllbTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTZzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2FkZXI6YmVmb3JlLFxuICAgICAgICAgIC5sb2FkZXI6YWZ0ZXIge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG9hZGVyOmJlZm9yZSB7XG4gICAgICAgICAgICBsZWZ0OiAtMy41ZW07XG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG9hZGVyOmFmdGVyIHtcbiAgICAgICAgICAgIGxlZnQ6IDMuNWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBrZXlmcmFtZXMgbG9hZDcge1xuICAgICAgICAgICAgMCUsXG4gICAgICAgICAgICA4MCUsXG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIC0xLjNlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgNDAlIHtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyLjVlbSAwIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1pZG5pZ2h0LWJsdWUge1xuICAgICAgICAgICAgY29sb3I6ICMwMDMzNjY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogaHR0cHM6Ly93d3cudzNzY2hvb2xzLmNvbS9ob3d0by9ob3d0b19jc3Nfem9vbV9ob3Zlci5hc3AgKi9cbiAgICAgICAgICAuem9vbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgICAgICAgICAgIC8qIEFuaW1hdGlvbiAqL1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC56b29tOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICAgICAgICAgIC8qICgxNTAlIHpvb20gLSBOb3RlOiBpZiB0aGUgem9vbSBpcyB0b28gbGFyZ2UsIGl0IHdpbGwgZ28gb3V0c2lkZSBvZiB0aGUgdmlld3BvcnQpICovXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogTUFLRSBZT1VUVUJFIFZJREVPUyBSRVNQT05TSVZFIC0gaHR0cHM6Ly9hdmV4ZGVzaWducy5jb20vcmVzcG9uc2l2ZS15b3V0dWJlLWVtYmVkLyAgKi9cbiAgICAgICAgICAudmlkZW8tY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciBpZnJhbWUsXG4gICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciBvYmplY3QsXG4gICAgICAgICAgLnZpZGVvLWNvbnRhaW5lciBlbWJlZCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgICAgICAgICAudGV4dC1zbS1jZW50ZXIge1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiA2ZmI5ZjUgaXMgYSB2ZXJ5IG5pY2UgY29sb3IgKi9cblxuICAgICAgICAgIC5yZW1vdmUtYnRuIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNwaW4ge1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gNHMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb290ZXIge1xuICAgICAgICAgICAgY29sb3I6ICNjOWM5YzkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb290ZXIgYSB7XG4gICAgICAgICAgICBjb2xvcjogI2M5YzljOSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvb3RlciBhOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51LW5hdmJhciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JiYmJiYjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudS1uYXYtbGluayB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51LW5hdi1saW5rOmhvdmVyIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnUtbmF2LWxpbms6OmJlZm9yZSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAzMDBtcztcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzFkNDQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnUtbmF2LWxpbmstbHRyOjpiZWZvcmUge1xuICAgICAgICAgICAgd2lkdGg6IDAlO1xuICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51LW5hdi1saW5rLWx0cjpob3Zlcjo6YmVmb3JlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51LW5hdi1saW5rLWZhZGUtdXA6OmJlZm9yZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvdHRvbTogNXB4O1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudS1uYXYtbGluay1mYWRlLXVwOmhvdmVyOjpiZWZvcmUge1xuICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudS1uYXYtbGluay1ncm93LXVwOjpiZWZvcmUge1xuICAgICAgICAgICAgaGVpZ2h0OiAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnUtbmF2LWxpbmstZ3Jvdy11cDpob3Zlcjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pcy1tb2JpbGUtb25seSB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcbiAgICAgICAgICAgIC5pcy1jZW50ZXJlZC1vbi1zbWFsbCB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAud2hpdGUtb24tc21hbGwge1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmlzLW1vYmlsZS1vbmx5IHtcbiAgICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogMHB4IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNjcm9sbGFibGUge1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9vdGVyIGxpIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZpZWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucHJlLXNjcm9sbGFibGUge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMzQwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBzcmM9XCJodHRwczovL2FqYXguY2xvdWRmbGFyZS5jb20vY2RuLWNnaS9zY3JpcHRzLzcwODljNDNlL2Nsb3VkZmxhcmUtc3RhdGljL3JvY2tldC1sb2FkZXIubWluLmpzXCJcbiAgICAgICAgICBkYXRhLWNmLXNldHRpbmdzPVwiNWU2Y2FjZDNhNTI3N2Q0ZTU1Y2ZlNjRiLXw0OVwiXG4gICAgICAgICAgZGVmZXI9XCJcIlxuICAgICAgICA+PC9zY3JpcHQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdfQ== */\n/*@ sourceURL=/Users/raheemmcdonald/Desktop/cxcspanish-next/components/Layout.js */"), __jsx("script", {
        src: "https://ajax.cloudflare.com/cdn-cgi/scripts/7089c43e/cloudflare-static/rocket-loader.min.js",
        "data-cf-settings": "5e6cacd3a5277d4e55cfe64b-|49",
        defer: "",
        className: "jsx-692352764"
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=directed-situations.js.605419f69a87a011ac12.hot-update.js.map