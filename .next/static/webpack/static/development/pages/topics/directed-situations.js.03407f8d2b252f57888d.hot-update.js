webpackHotUpdate("static/development/pages/topics/directed-situations.js",{

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
      }, _Object$defineProperty ? _Object$defineProperty(e, t, {
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
/* harmony import */ var _assets_emoji_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/emoji.css */ "./assets/emoji.css");
/* harmony import */ var _assets_emoji_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_emoji_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_bulma_accordian_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/bulma-accordian.css */ "./assets/bulma-accordian.css");
/* harmony import */ var _assets_bulma_accordian_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_bulma_accordian_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_fontawesome_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/fontawesome.js */ "./assets/fontawesome.js");
/* harmony import */ var _assets_fontawesome_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_fontawesome_js__WEBPACK_IMPORTED_MODULE_16__);







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

      window.mobilecheck = function () {
        var check = false;

        (function (a) {
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);

        this.setState({
          isMobile: check
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-252333996" + " " + "app"
      }, __jsx(_common_HeaderImports__WEBPACK_IMPORTED_MODULE_7__["default"], null), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_8__["default"], null), __jsx("br", {
        className: "jsx-252333996"
      }), __jsx("main", {
        role: "main",
        id: "main",
        className: "jsx-252333996"
      }, __jsx("div", {
        className: "jsx-252333996" + " " + ((this.props.full ? "container-fluid" : "container") || "")
      }, this.props.children)), __jsx("br", {
        className: "jsx-252333996"
      }), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "252333996"
      }, "*.jsx-252333996{box-sizing:border-box;}.slider.jsx-252333996{width:300px;text-align:center;overflow:hidden;}.slides.jsx-252333996{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow-x:auto;-webkit-scroll-snap-type:x mandatory;-moz-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;-webkit-overflow-scrolling:touch;}.slides.jsx-252333996::-webkit-scrollbar{width:10px;height:10px;}.slides.jsx-252333996::-webkit-scrollbar-thumb{background:black;border-radius:10px;}.slides.jsx-252333996::-webkit-scrollbar-track{background:transparent;}.slides.jsx-252333996>div.jsx-252333996{-webkit-scroll-snap-align:start;-moz-scroll-snap-align:start;-ms-scroll-snap-align:start;scroll-snap-align:start;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:300px;height:300px;margin-right:50px;border-radius:10px;background:#eee;-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform 0.5s;-webkit-transition:transform 0.5s;transition:transform 0.5s;position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:100px;}.author-info.jsx-252333996{background:rgba(0,0,0,0.75);color:white;padding:0.75rem;text-align:center;position:absolute;bottom:0;left:0;width:100%;margin:0;}.author-info.jsx-252333996 a.jsx-252333996{color:white;}img.jsx-252333996{object-fit:cover;position:absolute;top:0;left:0;width:100%;height:100%;}.slider.jsx-252333996>a.jsx-252333996{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:1.5rem;height:1.5rem;background:white;-webkit-text-decoration:none;text-decoration:none;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-radius:50%;margin:0 0 0.5rem 0;position:relative;}.slider.jsx-252333996>a.jsx-252333996:active{top:1px;}.slider.jsx-252333996>a.jsx-252333996:focus{background:#000;}@supports (-webkit-scroll-snap-type) or (-moz-scroll-snap-type) or (-ms-scroll-snap-type) or (scroll-snap-type){.slider.jsx-252333996>a.jsx-252333996{display:none;}}html.jsx-252333996,body.jsx-252333996{height:100%;overflow:hidden;}body.jsx-252333996{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:linear-gradient(to bottom,#74abe2,#5563de);font-family:\"Ropa Sans\",sans-serif;}*.jsx-252333996{background-color:#f6f8fa;}.black.jsx-252333996{color:black !important;}.styled-ul.jsx-252333996 li.jsx-252333996{list-style:disc !important;padding-bottom:1.5em;}.container.jsx-252333996{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}@media (min-width:576px){.container.jsx-252333996{max-width:540px;}}@media (min-width:768px){.container.jsx-252333996{max-width:720px;}}@media (min-width:992px){.container.jsx-252333996{max-width:960px;}}@media (min-width:1200px){.container.jsx-252333996{max-width:1140px;}}.rounded.jsx-252333996{border-radius:15px;border:1px solid #eee;padding-left:20px;padding-top:20px;}.hidden.jsx-252333996{display:none !important;}.hidden.jsx-252333996 *.jsx-252333996{display:none !important;}.underline.jsx-252333996:hover{-webkit-text-decoration:underline !important;text-decoration:underline !important;}caption.jsx-252333996{padding-top:0.75rem;padding-bottom:0.75rem;color:#6c757d;text-align:left;caption-side:bottom;}.scrollable.jsx-252333996{overflow:auto !important;height:100px !important;}.rainbow-text.jsx-252333996{background-image:linear-gradient( to left, violet, indigo, blue, green, yellow, orange, red );-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.shadow-sm.jsx-252333996{box-shadow:0 0.125rem 0.25rem rgba(0,0,0,0.075) !important;}.shadow.jsx-252333996{box-shadow:0 0.5rem 1rem rgba(0,0,0,0.15) !important;}.shadow-lg.jsx-252333996{box-shadow:0 1rem 3rem rgba(0,0,0,0.175) !important;}.shadow-none.jsx-252333996{box-shadow:none !important;}.list-unstyled.jsx-252333996{padding-top:10px;list-style:none !important;margin:0px !important;}.list-unstyled.jsx-252333996 li.jsx-252333996{margin-bottom:13px;}.nav-icon-1.jsx-252333996{padding-right:1px;}.nav-icon-2.jsx-252333996{padding-right:2px;}.nav-icon-3.jsx-252333996{padding-right:3px;}.nav-icon-4.jsx-252333996{padding-right:4px;}.nav-icon-5.jsx-252333996{padding-right:5px;}.nav-icon-6.jsx-252333996{padding-right:6px;}.nav-icon-7.jsx-252333996{padding-right:7px;}.nav-icon-8.jsx-252333996{padding-right:8px;}.nav-icon-9.jsx-252333996{padding-right:9px;}.nav-icon-10.jsx-252333996{padding-right:10px;}.nav-icon-11.jsx-252333996{padding-right:11px;}.nav-icon-12.jsx-252333996{padding-right:12px;}.nav-icon-13.jsx-252333996{padding-right:13px;}.nav-icon-14.jsx-252333996{padding-right:14px;}.nav-icon-15.jsx-252333996{padding-right:15px;}.nav-icon-17.jsx-252333996{padding-right:17px;}.fa-linkedin-in.jsx-252333996{display:none !important;}p.jsx-252333996,span.jsx-252333996,li.jsx-252333996{line-height:20px;}.sticky.jsx-252333996{position:fixed;top:0;width:100%;}.sticky.jsx-252333996+.content.jsx-252333996{padding-top:102px;}.inline-icon.jsx-252333996{margin-right:8px;}.nav-icon.jsx-252333996{margin-right:5px;}.breadcrumb.jsx-252333996{background:transparent !important;}.nav-tabs.jsx-252333996>li.active.jsx-252333996>a.jsx-252333996,.nav-tabs.jsx-252333996>li.active.jsx-252333996>a.jsx-252333996:focus,.nav-tabs.jsx-252333996>li.active.jsx-252333996>a.jsx-252333996:hover{border:0 !important;}.navbar-item.is-mega.jsx-252333996{position:static;}.is-mega-menu-title.jsx-252333996{margin-bottom:0;padding:0.375rem 1rem;}.push-down.jsx-252333996{margin-top:5px;}.translation.jsx-252333996{color:#0d0314;background-color:#eeeeee;width:100%;padding:10px;margin:5px;}.menu-link.jsx-252333996:hover{color:#8a3ab9;}.menu-link.jsx-252333996{color:#209cee !important;}.my-blue.jsx-252333996{color:#209cee !important;}.my-blue.jsx-252333996:hover{-webkit-text-decoration:none;text-decoration:none;color:#00d8ff !important;}.my-blue-on-hover.jsx-252333996:hover{color:#209cee !important;}.support-text.jsx-252333996{color:grey;}.facebook-blue.jsx-252333996{color:#3b5998 !important;}.blink.jsx-252333996{-webkit-animation-duration:4000ms;animation-duration:4000ms;-webkit-animation-name:blink-jsx-252333996;animation-name:blink-jsx-252333996;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate;}@-webkit-keyframes blink-jsx-252333996{from{opacity:1;}to{opacity:0;}}@keyframes blink-jsx-252333996{from{opacity:1;}to{opacity:0;}}.loader.jsx-252333996,.loader.jsx-252333996:before,.loader.jsx-252333996:after{border-radius:50%;width:2.5em;height:2.5em;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation:load7-jsx-252333996 1.8s infinite ease-in-out;animation:load7-jsx-252333996 1.8s infinite ease-in-out;}.loader.jsx-252333996{color:#ffffff;font-size:10px;margin:80px auto;position:relative;text-indent:-9999em;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation-delay:-0.16s;animation-delay:-0.16s;}.loader.jsx-252333996:before,.loader.jsx-252333996:after{content:\"\";position:absolute;top:0;}.loader.jsx-252333996:before{left:-3.5em;-webkit-animation-delay:-0.32s;animation-delay:-0.32s;}.loader.jsx-252333996:after{left:3.5em;}@-webkit-keyframes load7-jsx-252333996{0%,80%,100%{box-shadow:0 2.5em 0 -1.3em;}40%{box-shadow:0 2.5em 0 0;}}@keyframes load7-jsx-252333996{0%,80%,100%{box-shadow:0 2.5em 0 -1.3em;}40%{box-shadow:0 2.5em 0 0;}}.midnight-blue.jsx-252333996{color:#003366;}.zoom.jsx-252333996{padding:50px;background-color:green;-webkit-transition:-webkit-transform 0.2s;-webkit-transition:transform 0.2s;transition:transform 0.2s;width:200px;height:200px;margin:0 auto;}.zoom.jsx-252333996:hover{-webkit-transform:scale(1.5);-ms-transform:scale(1.5);transform:scale(1.5);}.video-container.jsx-252333996{position:relative;padding-bottom:56.25%;padding-top:30px;height:0;overflow:hidden;}.video-container.jsx-252333996 iframe.jsx-252333996,.video-container.jsx-252333996 object.jsx-252333996,.video-container.jsx-252333996 embed.jsx-252333996{position:absolute;top:0;left:0;width:100%;height:100%;}@media (max-width:767px){.text-sm-center.jsx-252333996{text-align:center !important;}}.remove-btn.jsx-252333996{padding:0px !important;border:none !important;background:none !important;}.spin.jsx-252333996{-webkit-animation:spin 4s infinite linear;}@-webkit-keyframes spin{0%.jsx-252333996{-webkit-transform:rotate(0deg);}100%.jsx-252333996{-webkit-transform:rotate(360deg);}}footer.jsx-252333996{color:#c9c9c9 !important;}footer.jsx-252333996 a.jsx-252333996{color:#c9c9c9 !important;}footer.jsx-252333996 a.jsx-252333996:hover{color:white !important;}.u-navbar.jsx-252333996{border-bottom:1px solid #bbbbbb;}.u-nav-link.jsx-252333996{-webkit-text-decoration:none;text-decoration:none;padding:10px 0px;margin:0px 10px;display:inline-block;position:relative;opacity:0.75;}.u-nav-link.jsx-252333996:hover{opacity:1;}.u-nav-link.jsx-252333996::before{-webkit-transition:300ms;transition:300ms;height:5px;content:\"\";position:absolute;background-color:#031d44;}.u-nav-link-ltr.jsx-252333996::before{width:0%;bottom:10px;}.u-nav-link-ltr.jsx-252333996:hover.jsx-252333996::before{width:100%;}.u-nav-link-fade-up.jsx-252333996::before{width:100%;bottom:5px;opacity:0;}.u-nav-link-fade-up.jsx-252333996:hover.jsx-252333996::before{bottom:10px;opacity:1;}.u-nav-link-grow-up.jsx-252333996::before{height:0%;width:100%;bottom:0px;}.u-nav-link-grow-up.jsx-252333996:hover.jsx-252333996::before{height:5px;}.is-mobile-only.jsx-252333996{visibility:hidden !important;padding-left:5px;}@media screen and (max-width:600px) and (max-width:840px){.is-centered-on-small.jsx-252333996{text-align:center !important;}.white-on-small.jsx-252333996{color:white !important;}.is-mobile-only.jsx-252333996{visibility:visible !important;padding-left:5px;}main.jsx-252333996{margin:0px 10px !important;}.scrollable.jsx-252333996{height:auto;}}footer.jsx-252333996 li.jsx-252333996{line-height:25px !important;}.field.jsx-252333996{padding:5px 0px;}a.jsx-252333996:hover{-webkit-text-decoration:none !important;text-decoration:none !important;}.pre-scrollable.jsx-252333996{max-height:340px;overflow-y:scroll;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWhlZW1tY2RvbmFsZC9EZXNrdG9wL2N4Y3NwYW5pc2gtbmV4dC9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRG9CLEFBR21DLEFBSVYsQUFNQyxBQWNGLEFBSU0sQUFJTSxBQUdDLEFBcUJPLEFBV25CLEFBR0ssQUFTRyxBQVlaLEFBR1EsQUFNRCxBQU1ILEFBSUMsQUFRWSxBQUlGLEFBSUksQUFLaEIsQUFTTyxBQU1BLEFBTUEsQUFNQyxBQUtBLEFBT0ssQUFJQSxBQUlhLEFBSWpCLEFBUUssQUFjeEIsQUFNNkQsQUFJTixBQUlELEFBSTVCLEFBSVYsQUFNRSxBQUtELEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlDLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBTUssQUFNUCxBQUlGLEFBT0csQUFJRCxBQUlBLEFBSWlCLEFBUWQsQUFJSixBQUlBLEFBS0QsQUFJRCxBQVFBLEFBSVcsQUFJQSxBQUlKLEFBS0ksQUFJZCxBQUljLEFBSUMsQUFRZCxBQUlBLEFBT00sQUFRSixBQVdILEFBTUMsQUFLRCxBQU9tQixBQUlMLEFBS1gsQUFLRCxBQVVRLEFBTUgsQUFVQSxBQVNhLEFBT1IsQUFNbUIsQUFLVCxBQUlFLEFBS1YsQUFJQSxBQUlGLEFBSVMsQUFJWCxBQVNYLEFBSU8sQUFRUixBQUtFLEFBSUEsQUFNQyxBQUtGLEFBTUMsQUFJa0IsQUFNRSxBQUlOLEFBSU8sQUFLSCxBQUlmLEFBS2MsQUFJWixBQUlnQixBQUlmLFFBN2hCbkIsQ0F3ZGMsQ0FqS1osQUFJQSxBQWlKRixBQWdDYSxDQS9pQkMsQUEyR08sQUErUHJCLEFBOENvQixBQVdwQixBQTZIQSxBQUlhLEFBaUJiLENBemtCb0IsQUErRHBCLEFBdUNrQixBQTRVTyxBQTRJYixBQXNDVixDQXBnQkEsQUE0V3VCLENBM0dFLEFBUTNCLEFBd0RpQixBQXNDakIsQ0FsSlEsQUF3Q1IsQ0FuUUEsQUE4Q0UsQUFNQSxBQU1BLEFBZ01GLEFBSXdCLEFBcVJ4QixDQXJsQnFCLEFBMENELEFBd0ZsQixBQW9FMkIsQUFtRjdCLEFBZUEsQUFJQSxBQWlUb0IsQ0E1WXBCLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQW1EQSxBQTZGYyxBQW1FVSxBQVVoQixDQXZVZ0IsQUFxRXhCLEFBeUNBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLENBbkh5QixBQThKekIsQ0ExQmEsQUEwUGIsQUFvQmEsQ0F4a0JiLEFBNmpCWSxBQU1aLENBMWlCQSxBQU9BLEFBMEZBLEFBNFVFLEFBb0R1QixBQTRCekIsQUFxRUUsQ0FqYkYsQUFJQSxBQWlJQSxBQTRMUyxDQXJYVCxBQXdFMEIsQUFtTDFCLEFBSUEsQUFTQSxBQVFBLEFBd0lBLEFBSUEsRUFwWnVCLEFBZ0d2QixBQXNZRSxDQTVpQlksQUFtRGQsQUF1VkUsQUEyS0YsQ0F2TW1CLEFBV1gsQUFrRU4sQUE4RmlCLEFBTWpCLENBbGxCZ0IsQUErSEUsQUEwUkwsQUFpTU0sQ0FuSFIsQUF5QlgsQ0ExTUYsQUErTkEsQUFvQ0EsQUFXQSxDQWhFRSxDQTdMRixDQXJRUSxBQTJXUixBQXdNQSxDQTdsQkEsQUFvYjRCLEVBcEg1QixDQVNhLENBN1NLLEFBd2FDLENBelpWLEFBNEZXLENBeVVOLEFBbUJkLEFBMkNhLENBcFhHLEFBd09XLENBNUxILEVBN054QixBQWlhb0IsQUFvRlMsQUF1RjdCLENBY0UsQ0F2aEJXLEFBc0RiLEFBTW9CLENBMERwQixDQXdLZSxBQWtCWSxBQXFLUixFQXBVbkIsQ0FKQSxBQXNWYSxDQTlEYixFQXBib0IsQ0E4SEYsQUEwU1AsRUF4WkcsQUEyRkssQUE2Q25CLENBd0x1QixHQWxDVixDQWdFUyxBQXFJRixFQXZhRCxBQThGbkIsQUFtTkEsQUE0Q2tCLENBNERBLElBcGRsQixDQTBpQkEsQ0E1YnNCLEFBbVV0QixDQWpma0IsQUFnREUsQUFtREMsQUEyUHJCLENBaUJBLEFBaUdBLENBclRBLE1BWUEsQUFrVEEsQUEwRTJCLENBdmEzQixBQXladUIsQ0F2SEcsTUE3WkssRUFnRHBCLENBOEhYLENBa0IrQixPQS9JdEIsQUFtV21DLENBalY3QixFQWtkSyxHQWNwQixDQWpmYSxLQTNCRyxFQTZDQSxJQWpCTCxHQW1lSSxDQXJWdUIsS0E3SXRDLENBaUJtQixNQWtkbkIsR0F4SnFDLEFBd0V2QixRQWpZUyxJQWtZUixTQXRRZixJQXVRZ0IsSUF0V1MsQ0EyVEEsQ0F0WVgsUUFrYmQsSUFqYmUsYUFDSyxFQTZDQyxnQkE1Q0EsSUFxV1csS0FxQmhDLENBVUEsQ0E3WnlCLFFBMEJQLGdCQUNlLG1CQXVFeUIsa0JBNlIxRCxLQXpUeUIsK0JBNkJhLFlBbEdILG9CQTJCZCxHQXdFckIsVUE3RkEsdUJBZ0VvQixrQkFDRSxlQTNDTSxLQTRDUixrQkFDcEIsK0VBNUNvQixrQkFFTCwwRUFDVSxtR0FDSiw2RkFDSCxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL3JhaGVlbW1jZG9uYWxkL0Rlc2t0b3AvY3hjc3BhbmlzaC1uZXh0L2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlckltcG9ydHMgZnJvbSBcIi4uL2NvbW1vbi9IZWFkZXJJbXBvcnRzXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCBSZWFjdEdBIGZyb20gXCJyZWFjdC1nYVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExhenlMb2FkIGZyb20gXCJyZWFjdC1sYXp5bG9hZFwiO1xuXG4vLyBDU1MgaW1wb3J0c1xuaW1wb3J0IENTUyBmcm9tIFwiLi4vYXNzZXRzL2J1bG1hLmNzc1wiO1xuaW1wb3J0IEVtb2ppcyBmcm9tIFwiLi4vYXNzZXRzL2Vtb2ppLmNzc1wiO1xuaW1wb3J0IEJ1bG1hQWNjb3JkaWFuQ1NTIGZyb20gXCIuLi9hc3NldHMvYnVsbWEtYWNjb3JkaWFuLmNzc1wiO1xuaW1wb3J0IFwiLi4vYXNzZXRzL2ZvbnRhd2Vzb21lLmpzXCI7XG5cbmNsYXNzIExheW91dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzTW9iaWxlOiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7fVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIFJlYWN0R0EuaW5pdGlhbGl6ZShcIlVBLTE0NjIyOTQ0Mi0xXCIpO1xuICAgIFJlYWN0R0EucGFnZXZpZXcod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG5cbiAgICB3aW5kb3cubW9iaWxlY2hlY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBjaGVjayA9IGZhbHNlO1xuICAgICAgKGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KFxuICAgICAgICAgICAgYVxuICAgICAgICAgICkgfHxcbiAgICAgICAgICAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KFxuICAgICAgICAgICAgYS5zdWJzdHIoMCwgNClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgICBjaGVjayA9IHRydWU7XG4gICAgICB9KShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGlzTW9iaWxlOiBjaGVja1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cbiAgICAgICAgPEhlYWRlckltcG9ydHMgLz5cbiAgICAgICAgPE5hdmJhciAvPlxuXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8bWFpbiByb2xlPVwibWFpblwiIGlkPVwibWFpblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmZ1bGwgPyBcImNvbnRhaW5lci1mbHVpZFwiIDogXCJjb250YWluZXJcIn0+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNsaWRlciB7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zbGlkZXMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAgICAgICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xuXG4gICAgICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICAgICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcblxuICAgICAgICAgICAgLypcbiAgc2Nyb2xsLXNuYXAtcG9pbnRzLXg6IHJlcGVhdCgzMDBweCk7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IG1hbmRhdG9yeTtcbiAgKi9cbiAgICAgICAgICB9XG4gICAgICAgICAgLnNsaWRlczo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGlkZXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNsaWRlczo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGlkZXMgPiBkaXYge1xuICAgICAgICAgICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNsaWRlcyA+IGRpdjp0YXJnZXQge1xuICAgICAgICAgICAgLyogICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7ICovXG4gICAgICAgICAgfVxuICAgICAgICAgIC5hdXRob3ItaW5mbyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmF1dGhvci1pbmZvIGEge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNsaWRlciA+IGEge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMS41cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2xpZGVyID4gYTphY3RpdmUge1xuICAgICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zbGlkZXIgPiBhOmZvY3VzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogRG9uJ3QgbmVlZCBidXR0b24gbmF2aWdhdGlvbiAqL1xuICAgICAgICAgIEBzdXBwb3J0cyAoc2Nyb2xsLXNuYXAtdHlwZSkge1xuICAgICAgICAgICAgLnNsaWRlciA+IGEge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjNzRhYmUyLCAjNTU2M2RlKTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvcGEgU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICoge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjhmYTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYmxhY2sge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnN0eWxlZC11bCBsaSB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBkaXNjICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDU0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNzIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJvdW5kZWQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGlkZGVuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGlkZGVuICoge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51bmRlcmxpbmU6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjYXB0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gICAgICAgICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBjYXB0aW9uLXNpZGU6IGJvdHRvbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2Nyb2xsYWJsZSB7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yYWluYm93LXRleHQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgICB0byBsZWZ0LFxuICAgICAgICAgICAgICB2aW9sZXQsXG4gICAgICAgICAgICAgIGluZGlnbyxcbiAgICAgICAgICAgICAgYmx1ZSxcbiAgICAgICAgICAgICAgZ3JlZW4sXG4gICAgICAgICAgICAgIHllbGxvdyxcbiAgICAgICAgICAgICAgb3JhbmdlLFxuICAgICAgICAgICAgICByZWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2hhZG93LXNtIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDc1KSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zaGFkb3cge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNoYWRvdy1sZyB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFyZW0gM3JlbSByZ2JhKDAsIDAsIDAsIDAuMTc1KSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zaGFkb3ctbm9uZSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxpc3QtdW5zdHlsZWQge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saXN0LXVuc3R5bGVkIGxpIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEzcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogTmF2aWdhdGlvbiBpY29uIHBhZGRpbmcgKi9cbiAgICAgICAgICAubmF2LWljb24tMSB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTIge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtaWNvbi0zIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDNweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tNCB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTUge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtaWNvbi02IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tNyB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uLTgge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYXYtaWNvbi05IHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDlweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tMTAge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tMTEge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTFweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tMTIge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tMTMge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTNweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tMTQge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tMTUge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2LWljb24tMTcge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTdweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBNYXN0ZXIuY3NzICovXG5cbiAgICAgICAgICAuZmEtbGlua2VkaW4taW4ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHAsXG4gICAgICAgICAgc3BhbixcbiAgICAgICAgICBsaSB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3RpY2t5IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIEFkZCBzb21lIHRvcCBwYWRkaW5nIHRvIHRoZSBwYWdlIGNvbnRlbnQgdG8gcHJldmVudCBzdWRkZW4gcXVpY2sgbW92ZW1lbnQgKGFzIHRoZSBoZWFkZXIgZ2V0cyBhIG5ldyBwb3NpdGlvbiBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlIChwb3NpdGlvbjpmaXhlZCBhbmQgdG9wOjApICovXG4gICAgICAgICAgLnN0aWNreSArIC5jb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMDJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaW5saW5lLWljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hdi1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5icmVhZGNydW1iIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogSW5kZXguY3NzICovXG5cbiAgICAgICAgICAubmF2LXRhYnMgPiBsaS5hY3RpdmUgPiBhLFxuICAgICAgICAgIC5uYXYtdGFicyA+IGxpLmFjdGl2ZSA+IGE6Zm9jdXMsXG4gICAgICAgICAgLm5hdi10YWJzID4gbGkuYWN0aXZlID4gYTpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubmF2YmFyLWl0ZW0uaXMtbWVnYSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pcy1tZWdhLW1lbnUtdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMzc1cmVtIDFyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnB1c2gtZG93biB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRyYW5zbGF0aW9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMGQwMzE0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZW51LWxpbms6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICM4YTNhYjk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1lbnUtbGluayB7XG4gICAgICAgICAgICBjb2xvcjogIzIwOWNlZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5teS1ibHVlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMjA5Y2VlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm15LWJsdWU6aG92ZXIge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICMwMGQ4ZmYgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubXktYmx1ZS1vbi1ob3Zlcjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogIzIwOWNlZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdXBwb3J0LXRleHQge1xuICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmZhY2Vib29rLWJsdWUge1xuICAgICAgICAgICAgY29sb3I6ICMzYjU5OTggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYmxpbmsge1xuICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDAwbXM7XG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogYmxpbms7XG4gICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxvYWRlcixcbiAgICAgICAgICAubG9hZGVyOmJlZm9yZSxcbiAgICAgICAgICAubG9hZGVyOmFmdGVyIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHdpZHRoOiAyLjVlbTtcbiAgICAgICAgICAgIGhlaWdodDogMi41ZW07XG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBsb2FkNyAxLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2FkZXIge1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDgwcHggYXV0bztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRleHQtaW5kZW50OiAtOTk5OWVtO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNnM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxvYWRlcjpiZWZvcmUsXG4gICAgICAgICAgLmxvYWRlcjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2FkZXI6YmVmb3JlIHtcbiAgICAgICAgICAgIGxlZnQ6IC0zLjVlbTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMzJzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2FkZXI6YWZ0ZXIge1xuICAgICAgICAgICAgbGVmdDogMy41ZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQGtleWZyYW1lcyBsb2FkNyB7XG4gICAgICAgICAgICAwJSxcbiAgICAgICAgICAgIDgwJSxcbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgLTEuM2VtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA0MCUge1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDIuNWVtIDAgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWlkbmlnaHQtYmx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMzM2NjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBodHRwczovL3d3dy53M3NjaG9vbHMuY29tL2hvd3RvL2hvd3RvX2Nzc196b29tX2hvdmVyLmFzcCAqL1xuICAgICAgICAgIC56b29tIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICAgICAgICAgICAgLyogQW5pbWF0aW9uICovXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnpvb206aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAgICAgICAgICAgLyogKDE1MCUgem9vbSAtIE5vdGU6IGlmIHRoZSB6b29tIGlzIHRvbyBsYXJnZSwgaXQgd2lsbCBnbyBvdXRzaWRlIG9mIHRoZSB2aWV3cG9ydCkgKi9cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBNQUtFIFlPVVRVQkUgVklERU9TIFJFU1BPTlNJVkUgLSBodHRwczovL2F2ZXhkZXNpZ25zLmNvbS9yZXNwb25zaXZlLXlvdXR1YmUtZW1iZWQvICAqL1xuICAgICAgICAgIC52aWRlby1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDU2LjI1JTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudmlkZW8tY29udGFpbmVyIGlmcmFtZSxcbiAgICAgICAgICAudmlkZW8tY29udGFpbmVyIG9iamVjdCxcbiAgICAgICAgICAudmlkZW8tY29udGFpbmVyIGVtYmVkIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAgICAgICAgIC50ZXh0LXNtLWNlbnRlciB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIDZmYjlmNSBpcyBhIHZlcnkgbmljZSBjb2xvciAqL1xuXG4gICAgICAgICAgLnJlbW92ZS1idG4ge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3BpbiB7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA0cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgICBjb2xvcjogI2M5YzljOSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYzljOWM5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZm9vdGVyIGE6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnUtbmF2YmFyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJiYmJiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51LW5hdi1saW5rIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnUtbmF2LWxpbms6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudS1uYXYtbGluazo6YmVmb3JlIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDMwMG1zO1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAzMWQ0NDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudS1uYXYtbGluay1sdHI6OmJlZm9yZSB7XG4gICAgICAgICAgICB3aWR0aDogMCU7XG4gICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnUtbmF2LWxpbmstbHRyOmhvdmVyOjpiZWZvcmUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnUtbmF2LWxpbmstZmFkZS11cDo6YmVmb3JlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm90dG9tOiA1cHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51LW5hdi1saW5rLWZhZGUtdXA6aG92ZXI6OmJlZm9yZSB7XG4gICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51LW5hdi1saW5rLWdyb3ctdXA6OmJlZm9yZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudS1uYXYtbGluay1ncm93LXVwOmhvdmVyOjpiZWZvcmUge1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmlzLW1vYmlsZS1vbmx5IHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA4NDBweCkge1xuICAgICAgICAgICAgLmlzLWNlbnRlcmVkLW9uLXNtYWxsIHtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC53aGl0ZS1vbi1zbWFsbCB7XG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaXMtbW9iaWxlLW9ubHkge1xuICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2Nyb2xsYWJsZSB7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb290ZXIgbGkge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmllbGQge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDBweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wcmUtc2Nyb2xsYWJsZSB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzNDBweDtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vYWpheC5jbG91ZGZsYXJlLmNvbS9jZG4tY2dpL3NjcmlwdHMvNzA4OWM0M2UvY2xvdWRmbGFyZS1zdGF0aWMvcm9ja2V0LWxvYWRlci5taW4uanNcIlxuICAgICAgICAgIGRhdGEtY2Ytc2V0dGluZ3M9XCI1ZTZjYWNkM2E1Mjc3ZDRlNTVjZmU2NGItfDQ5XCJcbiAgICAgICAgICBkZWZlcj1cIlwiXG4gICAgICAgID48L3NjcmlwdD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl19 */\n/*@ sourceURL=/Users/raheemmcdonald/Desktop/cxcspanish-next/components/Layout.js */"), __jsx("script", {
        src: "https://ajax.cloudflare.com/cdn-cgi/scripts/7089c43e/cloudflare-static/rocket-loader.min.js",
        "data-cf-settings": "5e6cacd3a5277d4e55cfe64b-|49",
        defer: "",
        className: "jsx-252333996"
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=directed-situations.js.03407f8d2b252f57888d.hot-update.js.map