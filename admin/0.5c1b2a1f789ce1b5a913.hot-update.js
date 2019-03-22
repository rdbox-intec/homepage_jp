webpackHotUpdate(0,{

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(170);




var NavBar = function NavBar(_ref) {
  var toggleNavbar = _ref.toggleNavbar,
      isActive = _ref.isActive;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["StaticQuery"], {
    query: "1346230460",
    render: function render(data) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navbar is-fixed-top",
        "aria-label": "main navigation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-brand"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/",
        className: "navbar-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "https://rdbox-intec.github.io/homepage_en/icons/icon-192x192.png"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "\xA0\xA0\xA0RDBOX")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button navbar-burger " + (isActive ? 'is-active' : ''),
        "data-target": "navMenu",
        onClick: toggleNavbar
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-menu " + (isActive ? 'is-active' : ''),
        id: "navMenu"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-end"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://github.com/rdbox-intec/rdbox",
        className: "navbar-item"
      }, "English"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchBox__WEBPACK_IMPORTED_MODULE_2__["default"], {
        searchIndex: data.siteSearchIndex.index
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "navbar-item",
        to: "/about"
      }, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "navbar-item",
        to: "/blog"
      }, "Blog"))));
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NavBar);

/***/ })

})
//# sourceMappingURL=0.5c1b2a1f789ce1b5a913.hot-update.js.map