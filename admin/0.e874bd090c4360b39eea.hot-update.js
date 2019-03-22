webpackHotUpdate(0,[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HomePageTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);




var HomePagePreview = function HomePagePreview(_ref) {
  var entry = _ref.entry,
      getAsset = _ref.getAsset;
  var entryBlurbs = entry.getIn(['data', 'offerings', 'blurbs']);
  var blurbs = entryBlurbs ? entryBlurbs.toJS() : [];
  var entryTestimonials = entry.getIn(['data', 'testimonials']);
  var testimonials = entryTestimonials ? entryTestimonials.toJS() : [];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HomePageTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: entry.getIn(['data', 'title']),
    meta_title: entry.getIn(['data', 'meta_title']),
    meta_description: entry.getIn(['data', 'meta_description']),
    heading: entry.getIn(['data', 'heading']),
    description: entry.getIn(['data', 'description']),
    offerings: {
      blurbs: blurbs
    },
    testimonials: testimonials
  });
};

HomePagePreview.propTypes = {
  entry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    getIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  }),
  getAsset: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (HomePagePreview);

/***/ }),
/* 6 */
false,
/* 7 */
false,
/* 8 */
false,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
false,
/* 15 */,
/* 16 */
false,
/* 17 */
false,
/* 18 */
false,
/* 19 */
false,
/* 20 */,
/* 21 */
false,
/* 22 */
false,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
false,
/* 27 */,
/* 28 */
false,
/* 29 */
false,
/* 30 */
false,
/* 31 */
false,
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Offerings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _Testimonials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);






var HomePageTemplate = function HomePageTemplate(_ref) {
  var title = _ref.title,
      heading = _ref.heading,
      description = _ref.description,
      offerings = _ref.offerings,
      meta_title = _ref.meta_title,
      meta_description = _ref.meta_description,
      testimonials = _ref.testimonials;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, meta_title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: meta_description
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "hero is-primary is-bold is-small"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title has-text-centered has-text-weight-semibold is-size-1"
  }, "RDBOX"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "has-text-centered"
  }, "~A Robotics Developers BOX~"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "has-text-centered"
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/rdbox-intec/rdbox",
    className: "button is-outlined",
    target: "_blank"
  }, "View on GitHub"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/rdbox-intec/rdbox/wiki",
    className: "button is-primary",
    target: "_blank"
  }, "Take the Tutorial")))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section section--gradient"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "has-text-weight-semibold is-size-2"
  }, heading), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Offerings__WEBPACK_IMPORTED_MODULE_2__["default"], {
    gridItems: offerings.blurbs
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "has-text-weight-semibold is-size-2"
  }, "See case studies"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Testimonials__WEBPACK_IMPORTED_MODULE_3__["default"], {
    testimonials: testimonials
  }))))))));
};

HomePageTemplate.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  meta_title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  meta_description: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  heading: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  offerings: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    blurbs: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array
  }),
  testimonials: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (HomePageTemplate);

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Offerings = function Offerings(_ref) {
  var gridItems = _ref.gridItems;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-multiline"
  }, gridItems.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: item.image,
      className: "column is-6",
      style: {
        borderRadius: '5px'
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "section"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "has-text-centered"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      alt: "",
      src: item.image
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item.text)));
  }));
};

Offerings.propTypes = {
  gridItems: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (Offerings);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



var Testimonials = function Testimonials(_ref) {
  var testimonials = _ref.testimonials;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, testimonials.map(function (testimonial, id) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
      className: "message",
      key: id
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "message-body"
    }, testimonial.quote, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("cite", null, " \u2013 ", testimonial.author)));
  }));
};

Testimonials.propTypes = {
  testimonials: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    quote: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (Testimonials);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AboutPageTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44);




var AboutPagePreview = function AboutPagePreview(_ref) {
  var entry = _ref.entry,
      widgetFor = _ref.widgetFor;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AboutPageTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: entry.getIn(['data', 'title']),
    meta_title: entry.getIn(['data', 'meta_title']),
    meta_description: entry.getIn(['data', 'meta_description']),
    content: widgetFor('body')
  });
};

AboutPagePreview.propTypes = {
  entry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    getIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  }),
  widgetFor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (AboutPagePreview);

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var AboutPageTemplate = function AboutPageTemplate(_ref) {
  var title = _ref.title,
      content = _ref.content,
      contentComponent = _ref.contentComponent;
  var PageContent = contentComponent || _Content__WEBPACK_IMPORTED_MODULE_1__["default"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "hero is-primary is-bold is-small"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title"
  }, title))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "section section--gradient"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column is-10 is-offset-1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    alt: "",
    src: "https://rdbox-intec.github.io/homepage_en/img/dream.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PageContent, {
    className: "content",
    content: content
  })))))));
};

AboutPageTemplate.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  contentComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (AboutPageTemplate);

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLContent", function() { return HTMLContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var HTMLContent = function HTMLContent(_ref) {
  var content = _ref.content,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    dangerouslySetInnerHTML: {
      __html: content
    }
  });
};

var Content = function Content(_ref2) {
  var content = _ref2.content,
      className = _ref2.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, content);
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ArticleTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);




var ArticlePreview = function ArticlePreview(_ref) {
  var entry = _ref.entry,
      widgetFor = _ref.widgetFor;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ArticleTemplate__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: widgetFor('body'),
    cover: entry.getIn(['data', 'cover']),
    meta_title: entry.getIn(['data', 'meta_title']),
    meta_desc: entry.getIn(['data', 'meta_description']),
    title: entry.getIn(['data', 'title']),
    slug: entry.getIn(['data', 'slug'])
  });
};

ArticlePreview.propTypes = {
  entry: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    getIn: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
  }),
  widgetFor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (ArticlePreview);

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);





var ArticleTemplate = function ArticleTemplate(_ref) {
  var content = _ref.content,
      contentComponent = _ref.contentComponent,
      cover = _ref.cover,
      meta_title = _ref.meta_title,
      meta_desc = _ref.meta_desc,
      tags = _ref.tags,
      title = _ref.title;
  var PostContent = contentComponent || _Content__WEBPACK_IMPORTED_MODULE_1__["default"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title is-size-2 has-text-weight-bold is-bold-light"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: cover,
    alt: title
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostContent, {
    content: content
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: "4rem"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Tags"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "taglist"
  }, tags && tags.length ? tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: tag + "tag"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      to: "/tags/" + Object(lodash__WEBPACK_IMPORTED_MODULE_2__["kebabCase"])(tag) + "/"
    }, tag));
  }) : null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null));
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleTemplate);

/***/ }),
/* 48 */,
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62);
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _parse_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(180);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return _parse_path__WEBPACK_IMPORTED_MODULE_4__["default"]; });






var StaticQueryContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});

var StaticQuery = function StaticQuery(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    if (props.data || staticQueryData[props.query] && staticQueryData[props.query].data) {
      return (props.render || props.children)(props.data ? props.data.data : staticQueryData[props.query].data);
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading (StaticQuery)");
    }
  });
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away,. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n." + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext);

/***/ }),
/* 60 */,
/* 61 */,
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (true) {
  module.exports = preferDefault(__webpack_require__(63));
} else {}

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64);
var _pages_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(64, 1);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65);
/* harmony import */ var _json_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(160);






var DevPageRenderer = function DevPageRenderer(_ref) {
  var location = _ref.location;
  var pageResources = _loader__WEBPACK_IMPORTED_MODULE_3__["default"].getResourcesForPathnameSync(location.pathname);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_json_store__WEBPACK_IMPORTED_MODULE_4__["default"], {
    pages: _pages_json__WEBPACK_IMPORTED_MODULE_2__,
    location: location,
    pageResources: pageResources
  });
};

DevPageRenderer.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DevPageRenderer);

/***/ }),
/* 64 */,
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postInitialRenderWork", function() { return postInitialRenderWork; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setApiRunnerForLoader", function() { return setApiRunnerForLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicLoader", function() { return publicLoader; });
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(101);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(103);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(109);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(110);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(124);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(126);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _find_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(144);
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(148);
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(150);












var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

var devGetPageData;
var inInitialRender = true;
var hasFetched = Object.create(null);
var syncRequires = {};
var asyncRequires = {};
var jsonDataPaths = {};
var fetchHistory = [];
var fetchingPageResourceMapPromise = null;
var fetchedPageResourceMap = false;
/**
 * Indicate if pages manifest is loaded
 *  - in production it is split to separate "pages-manifest" chunk that need to be lazy loaded,
 *  - in development it is part of single "common" chunk and is available from the start.
 */

var hasPageResourceMap = "development" !== "production";
var apiRunner;
var failedPaths = {};
var MAX_HISTORY = 5;
var jsonPromiseStore = {};

if (true) {
  devGetPageData = __webpack_require__(151).getPageData;
}
/**
 * Fetch resource map (pages data and paths to json files with results of
 *  queries)
 */


var fetchPageResourceMap = function fetchPageResourceMap() {
  if (!fetchingPageResourceMapPromise) {
    fetchingPageResourceMapPromise = new Promise(function (resolve) {
      asyncRequires.data().then(function (_ref) {
        var pages = _ref.pages,
            dataPaths = _ref.dataPaths;
        // TODO — expose proper way to access this data from plugins.
        // Need to come up with an API for plugins to access
        // site info.
        window.___dataPaths = dataPaths;
        queue.addPagesArray(pages);
        queue.addDataPaths(dataPaths);
        hasPageResourceMap = true;
        resolve(fetchedPageResourceMap = true);
      }).catch(function (e) {
        console.warn("Failed to fetch pages manifest. Gatsby will reload on next navigation."); // failed to grab pages metadata
        // for now let's just resolve this - on navigation this will cause missing resources
        // and will trigger page reload and then it will retry
        // this can happen with service worker updates when webpack manifest points to old
        // chunk that no longer exists on server

        resolve(fetchedPageResourceMap = true);
      });
    });
  }

  return fetchingPageResourceMapPromise;
};

var createJsonURL = function createJsonURL(jsonName) {
  return "" + "/static/d/" + jsonName + ".json";
};

var createComponentUrls = function createComponentUrls(componentChunkName) {
  return window.___chunkMapping[componentChunkName].map(function (chunk) {
    return "" + chunk;
  });
};

var fetchResource = function fetchResource(resourceName) {
  // Find resource
  var resourceFunction;

  if (resourceName.slice(0, 12) === "component---") {
    resourceFunction = asyncRequires.components[resourceName];
  } else {
    if (resourceName in jsonPromiseStore) {
      resourceFunction = function resourceFunction() {
        return jsonPromiseStore[resourceName];
      };
    } else {
      resourceFunction = function resourceFunction() {
        var fetchPromise = new Promise(function (resolve, reject) {
          var url = createJsonURL(jsonDataPaths[resourceName]);
          var req = new XMLHttpRequest();
          req.open("GET", url, true);
          req.withCredentials = true;

          req.onreadystatechange = function () {
            if (req.readyState == 4) {
              if (req.status === 200) {
                resolve(JSON.parse(req.responseText));
              } else {
                delete jsonPromiseStore[resourceName];
                reject();
              }
            }
          };

          req.send(null);
        });
        jsonPromiseStore[resourceName] = fetchPromise;
        return fetchPromise;
      };
    }
  } // Download the resource


  hasFetched[resourceName] = true;
  return new Promise(function (resolve) {
    var fetchPromise = resourceFunction();
    var failed = false;
    return fetchPromise.catch(function () {
      failed = true;
    }).then(function (component) {
      fetchHistory.push({
        resource: resourceName,
        succeeded: !failed
      });
      fetchHistory = fetchHistory.slice(-MAX_HISTORY);
      resolve(component);
    });
  });
};

var prefetchResource = function prefetchResource(resourceName) {
  if (resourceName.slice(0, 12) === "component---") {
    return Promise.all(createComponentUrls(resourceName).map(function (url) {
      return Object(_prefetch__WEBPACK_IMPORTED_MODULE_10__["default"])(url);
    }));
  } else {
    var url = createJsonURL(jsonDataPaths[resourceName]);
    return Object(_prefetch__WEBPACK_IMPORTED_MODULE_10__["default"])(url);
  }
};

var getResourceModule = function getResourceModule(resourceName) {
  return fetchResource(resourceName).then(preferDefault);
};

var appearsOnLine = function appearsOnLine() {
  var isOnLine = navigator.onLine;

  if (typeof isOnLine === "boolean") {
    return isOnLine;
  } // If no navigator.onLine support assume onLine if any of last N fetches succeeded


  var succeededFetch = fetchHistory.find(function (entry) {
    return entry.succeeded;
  });
  return !!succeededFetch;
};

var handleResourceLoadError = function handleResourceLoadError(path, message) {
  if (!failedPaths[path]) {
    failedPaths[path] = message;
  }

  if (appearsOnLine() && window.location.pathname.replace(/\/$/g, "") !== path.replace(/\/$/g, "")) {
    window.location.pathname = path;
  }
};

var onPrefetchPathname = function onPrefetchPathname(pathname) {
  if (!prefetchTriggered[pathname]) {
    apiRunner("onPrefetchPathname", {
      pathname: pathname
    });
    prefetchTriggered[pathname] = true;
  }
};

var onPostPrefetchPathname = function onPostPrefetchPathname(pathname) {
  if (!prefetchCompleted[pathname]) {
    apiRunner("onPostPrefetchPathname", {
      pathname: pathname
    });
    prefetchCompleted[pathname] = true;
  }
};
/**
 * Check if we should fallback to resources for 404 page if resources for a page are not found
 *
 * We can't do that when we don't have full pages manifest - we don't know if page exist or not if we don't have it.
 * We also can't do that on initial render / mount in case we just can't load resources needed for first page.
 * Not falling back to 404 resources will cause "EnsureResources" component to handle scenarios like this with
 * potential reload
 * @param {string} path Path to a page
 */


var shouldFallbackTo404Resources = function shouldFallbackTo404Resources(path) {
  return (hasPageResourceMap || inInitialRender) && path !== "/404.html";
}; // Note we're not actively using the path data atm. There
// could be future optimizations however around trying to ensure
// we load all resources for likely-to-be-visited paths.
// let pathArray = []
// let pathCount = {}


var findPage;
var pathScriptsCache = {};
var prefetchTriggered = {};
var prefetchCompleted = {};
var disableCorePrefetching = false;
var queue = {
  addPagesArray: function addPagesArray(newPages) {
    findPage = Object(_find_page__WEBPACK_IMPORTED_MODULE_8__["default"])(newPages, "");
  },
  addDevRequires: function addDevRequires(devRequires) {
    syncRequires = devRequires;
  },
  addProdRequires: function addProdRequires(prodRequires) {
    asyncRequires = prodRequires;
  },
  addDataPaths: function addDataPaths(dataPaths) {
    jsonDataPaths = dataPaths;
  },
  // Hovering on a link is a very strong indication the user is going to
  // click on it soon so let's start prefetching resources for this
  // pathname.
  hovering: function hovering(path) {
    queue.getResourcesForPathname(path);
  },
  enqueue: function enqueue(path) {
    if (!apiRunner) console.error("Run setApiRunnerForLoader() before enqueing paths"); // Skip prefetching if we know user is on slow or constrained connection

    if ("connection" in navigator) {
      if ((navigator.connection.effectiveType || "").includes("2g")) {
        return false;
      }

      if (navigator.connection.saveData) {
        return false;
      }
    } // Tell plugins with custom prefetching logic that they should start
    // prefetching this path.


    onPrefetchPathname(path); // If a plugin has disabled core prefetching, stop now.

    if (disableCorePrefetching.some(function (a) {
      return a;
    })) {
      return false;
    } // Check if the page exists.


    var page = findPage(path); // In production, we lazy load page metadata. If that
    // hasn't been fetched yet, start fetching it now.

    if (false) {}

    if (!page) {
      return false;
    }

    if (true) {
      devGetPageData(page.path);
    } // Prefetch resources.


    if (false) {}

    return true;
  },
  getPage: function getPage(pathname) {
    return findPage(pathname);
  },
  getResourceURLsForPathname: function getResourceURLsForPathname(path) {
    var page = findPage(path);

    if (page) {
      return createComponentUrls(page.componentChunkName).concat([createJsonURL(jsonDataPaths[page.jsonName])]);
    } else {
      return null;
    }
  },
  getResourcesForPathnameSync: function getResourcesForPathnameSync(path) {
    var page = findPage(path);

    if (page) {
      return pathScriptsCache[page.path];
    } else if (shouldFallbackTo404Resources(path)) {
      return queue.getResourcesForPathnameSync("/404.html");
    } else {
      return null;
    }
  },
  // Get resources (code/data) for a path. Fetches metdata first
  // if necessary and then the code/data bundles. Used for prefetching
  // and getting resources for page changes.
  getResourcesForPathname: function getResourcesForPathname(path) {
    return new Promise(function (resolve, reject) {
      // Production code path
      if (failedPaths[path]) {
        handleResourceLoadError(path, "Previously detected load failure for \"" + path + "\"");
        reject();
        return;
      }

      var page = findPage(path); // In production, we lazy load page metadata. If that
      // hasn't been fetched yet, start fetching it now.

      if (!page && !fetchedPageResourceMap && "development" === "production") {
        // If page wasn't found check and we didn't fetch resources map for
        // all pages, wait for fetch to complete and try to get resources again
        fetchPageResourceMap().then(function () {
          return resolve(queue.getResourcesForPathname(path));
        });
        return;
      }

      if (!page) {
        if (shouldFallbackTo404Resources(path)) {
          console.log("A page wasn't found for \"" + path + "\""); // Preload the custom 404 page

          resolve(queue.getResourcesForPathname("/404.html"));
          return;
        }

        resolve();
        return;
      } // Use the path from the page so the pathScriptsCache uses
      // the normalized path.


      path = page.path; // Check if it's in the cache already.

      if (pathScriptsCache[path]) {
        _emitter__WEBPACK_IMPORTED_MODULE_9__["default"].emit("onPostLoadPageResources", {
          page: page,
          pageResources: pathScriptsCache[path]
        });
        resolve(pathScriptsCache[path]);
        return;
      } // Nope, we need to load resource(s)


      _emitter__WEBPACK_IMPORTED_MODULE_9__["default"].emit("onPreLoadPageResources", {
        path: path
      }); // In development we know the code is loaded already
      // so we just return with it immediately.

      if (true) {
        var pageResources = {
          component: syncRequires.components[page.componentChunkName],
          page: page // Add to the cache.

        };
        pathScriptsCache[path] = pageResources;
        devGetPageData(page.path).then(function (pageData) {
          _emitter__WEBPACK_IMPORTED_MODULE_9__["default"].emit("onPostLoadPageResources", {
            page: page,
            pageResources: pageResources
          }); // Tell plugins the path has been successfully prefetched

          onPostPrefetchPathname(path);
          resolve(pageResources);
        });
      } else {}
    });
  }
};
var postInitialRenderWork = function postInitialRenderWork() {
  inInitialRender = false;

  if (false) {}
};
var setApiRunnerForLoader = function setApiRunnerForLoader(runner) {
  apiRunner = runner;
  disableCorePrefetching = apiRunner("disableCorePrefetching");
};
var publicLoader = {
  getResourcesForPathname: queue.getResourcesForPathname,
  getResourceURLsForPathname: queue.getResourceURLsForPathname,
  getResourcesForPathnameSync: queue.getResourcesForPathnameSync
};
/* harmony default export */ __webpack_exports__["default"] = (queue);

/***/ }),
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(146);
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(147);

// TODO add tests especially for handling prefixed links.


var pageCache = {};
/* harmony default export */ __webpack_exports__["default"] = (function (pages, pathPrefix) {
  if (pathPrefix === void 0) {
    pathPrefix = "";
  }

  return function (rawPathname) {
    var pathname = decodeURIComponent(rawPathname); // Remove the pathPrefix from the pathname.

    var trimmedPathname = Object(_strip_prefix__WEBPACK_IMPORTED_MODULE_2__["default"])(pathname, pathPrefix); // Remove any hashfragment

    if (trimmedPathname.split("#").length > 1) {
      trimmedPathname = trimmedPathname.split("#").slice(0, -1).join("");
    } // Remove search query


    if (trimmedPathname.split("?").length > 1) {
      trimmedPathname = trimmedPathname.split("?").slice(0, -1).join("");
    }

    if (pageCache[trimmedPathname]) {
      return pageCache[trimmedPathname];
    }

    var foundPage; // Array.prototype.find is not supported in IE so we use this somewhat odd
    // work around.

    pages.some(function (page) {
      var pathToMatch = page.matchPath ? page.matchPath : page.path;

      if (Object(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_1__["match"])(pathToMatch, trimmedPathname)) {
        foundPage = page;
        pageCache[trimmedPathname] = page;
        return true;
      } // Finally, try and match request with default document.


      if (Object(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_1__["match"])(page.path + "index.html", trimmedPathname)) {
        foundPage = page;
        pageCache[trimmedPathname] = page;
        return true;
      }

      return false;
    });
    return foundPage;
  };
});

/***/ }),
/* 145 */,
/* 146 */,
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */
/* harmony default export */ __webpack_exports__["default"] = (function (str, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }

  if (str.substr(0, prefix.length) === prefix) return str.slice(prefix.length);
  return str;
});

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(149);

var emitter = Object(mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (emitter);

/***/ }),
/* 149 */,
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(126);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);


var support = function support(feature) {
  if (typeof document === "undefined") {
    return false;
  }

  var fakeLink = document.createElement("link");

  try {
    if (fakeLink.relList && typeof fakeLink.relList.supports === "function") {
      return fakeLink.relList.supports(feature);
    }
  } catch (err) {
    return false;
  }

  return false;
};

var linkPrefetchStrategy = function linkPrefetchStrategy(url) {
  return new Promise(function (resolve, reject) {
    if (typeof document === "undefined") {
      reject();
      return;
    }

    var link = document.createElement("link");
    link.setAttribute("rel", "prefetch");
    link.setAttribute("href", url);
    link.onload = resolve;
    link.onerror = reject;
    var parentElement = document.getElementsByTagName("head")[0] || document.getElementsByName("script")[0].parentNode;
    parentElement.appendChild(link);
  });
};

var xhrPrefetchStrategy = function xhrPrefetchStrategy(url) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.withCredentials = true;

    req.onload = function () {
      if (req.status === 200) {
        resolve();
      } else {
        reject();
      }
    };

    req.send(null);
  });
};

var supportedPrefetchStrategy = support("prefetch") ? linkPrefetchStrategy : xhrPrefetchStrategy;
var preFetched = {};

var prefetch = function prefetch(url) {
  return new Promise(function (resolve) {
    if (preFetched[url]) {
      resolve();
      return;
    }

    supportedPrefetchStrategy(url).then(function () {
      resolve();
      preFetched[url] = true;
    }).catch(function () {}); // 404s are logged to the console anyway
  });
};

/* harmony default export */ __webpack_exports__["default"] = (prefetch);

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticQueryData", function() { return getStaticQueryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageQueryData", function() { return getPageQueryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsInitialized", function() { return getIsInitialized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return socketIo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageData", function() { return getPageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerPath", function() { return registerPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregisterPath", function() { return unregisterPath; });
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(126);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(152);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _error_overlay_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(156);



var socket = null;
var staticQueryData = {};
var pageQueryData = {};
var isInitialized = false;
var getStaticQueryData = function getStaticQueryData() {
  return staticQueryData;
};
var getPageQueryData = function getPageQueryData() {
  return pageQueryData;
};
var getIsInitialized = function getIsInitialized() {
  return isInitialized;
};
function socketIo() {
  if (true) {
    if (!socket) {
      // Try to initialize web socket if we didn't do it already
      try {
        // eslint-disable-next-line no-undef
        socket = io();

        var didDataChange = function didDataChange(msg, queryData) {
          return !(msg.payload.id in queryData) || JSON.stringify(msg.payload.result) !== JSON.stringify(queryData[msg.payload.id]);
        };

        socket.on("message", function (msg) {
          if (msg.type === "staticQueryResult") {
            if (didDataChange(msg, staticQueryData)) {
              var _Object$assign;

              staticQueryData = Object.assign({}, staticQueryData, (_Object$assign = {}, _Object$assign[msg.payload.id] = msg.payload.result, _Object$assign));
            }
          } else if (msg.type === "pageQueryResult") {
            if (didDataChange(msg, pageQueryData)) {
              var _Object$assign2;

              pageQueryData = Object.assign({}, pageQueryData, (_Object$assign2 = {}, _Object$assign2[msg.payload.id] = msg.payload.result, _Object$assign2));
            }
          } else if (msg.type === "overlayError") {
            if (msg.payload.message) {
              Object(_error_overlay_handler__WEBPACK_IMPORTED_MODULE_2__["reportError"])(msg.payload.id, msg.payload.message);
            } else {
              Object(_error_overlay_handler__WEBPACK_IMPORTED_MODULE_2__["clearError"])(msg.payload.id);
            }
          }

          if (msg.type && msg.payload) {
            ___emitter.emit(msg.type, msg.payload);
          }
        });
      } catch (err) {
        console.error("Could not connect to socket.io on dev server.");
      }
    }

    return socket;
  } else {}
}
var inFlightGetPageDataPromiseCache = {};

function getPageData(pathname) {
  if (inFlightGetPageDataPromiseCache[pathname]) {
    return inFlightGetPageDataPromiseCache[pathname];
  } else {
    inFlightGetPageDataPromiseCache[pathname] = new Promise(function (resolve) {
      if (pageQueryData[pathname]) {
        delete inFlightGetPageDataPromiseCache[pathname];
        resolve(pageQueryData[pathname]);
      } else {
        var onPageDataCallback = function onPageDataCallback(msg) {
          if (msg.type === "pageQueryResult" && msg.payload.id === pathname) {
            socket.off("message", onPageDataCallback);
            delete inFlightGetPageDataPromiseCache[pathname];
            resolve(pageQueryData[pathname]);
          }
        };

        socket.on("message", onPageDataCallback);
        socket.emit("getDataForPath", pathname);
      }
    });
  }

  return inFlightGetPageDataPromiseCache[pathname];
} // Tell websocket-manager.js the new path we're on.
// This will help the backend prioritize queries for this
// path.


function registerPath(path) {
  socket.emit("registerPath", path);
} // Unregister the former path


function unregisterPath(path) {
  socket.emit("unregisterPath", path);
}



/***/ }),
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearError", function() { return clearError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reportError", function() { return reportError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMap", function() { return errorMap; });
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(110);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(157);
/* harmony import */ var core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_values__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_error_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(159);
/* harmony import */ var react_error_overlay__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_error_overlay__WEBPACK_IMPORTED_MODULE_3__);



 // Report runtime errors

react_error_overlay__WEBPACK_IMPORTED_MODULE_3__["startReportingRuntimeErrors"]({
  onError: function onError() {},
  filename: "/commons.js"
});
react_error_overlay__WEBPACK_IMPORTED_MODULE_3__["setEditorHandler"](function (errorLocation) {
  return window.fetch("/__open-stack-frame-in-editor?fileName=" + window.encodeURIComponent(errorLocation.fileName) + "&lineNumber=" + window.encodeURIComponent(errorLocation.lineNumber || 1));
});
var errorMap = {};

var handleErrorOverlay = function handleErrorOverlay() {
  var errors = Object.values(errorMap);

  if (errors.length > 0) {
    var errorMsg = errors.join("\n\n");
    react_error_overlay__WEBPACK_IMPORTED_MODULE_3__["reportBuildError"](errorMsg);
  } else {
    react_error_overlay__WEBPACK_IMPORTED_MODULE_3__["dismissBuildError"]();
  }
};

var clearError = function clearError(errorID) {
  delete errorMap[errorID];
  handleErrorOverlay();
};
var reportError = function reportError(errorID, error) {
  if (error) {
    errorMap[errorID] = error;
  }

  handleErrorOverlay();
};


/***/ }),
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _page_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(161);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49);
/* harmony import */ var _socketIo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(151);








if (false) {}

var getPathFromProps = function getPathFromProps(props) {
  return props.pageResources && props.pageResources.page ? props.pageResources.page.path : undefined;
};

var JSONStore =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2___default()(JSONStore, _React$Component);

  function JSONStore(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.handleMittEvent = function (type, event) {
      _this.setState({
        staticQueryData: Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["getStaticQueryData"])(),
        pageQueryData: Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["getPageQueryData"])()
      });
    };

    _this.state = {
      staticQueryData: Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["getStaticQueryData"])(),
      pageQueryData: Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["getPageQueryData"])(),
      path: null
    };
    return _this;
  }

  var _proto = JSONStore.prototype;

  _proto.componentDidMount = function componentDidMount() {
    Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["registerPath"])(getPathFromProps(this.props));

    ___emitter.on("*", this.handleMittEvent);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["unregisterPath"])(this.state.path);

    ___emitter.off("*", this.handleMittEvent);
  };

  JSONStore.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var newPath = getPathFromProps(props);

    if (newPath !== state.path) {
      Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["unregisterPath"])(state.path);
      Object(_socketIo__WEBPACK_IMPORTED_MODULE_6__["registerPath"])(newPath);
      return {
        path: newPath
      };
    }

    return null;
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    // We want to update this component when:
    // - location changed
    // - page data for path changed
    // - static query results changed
    return this.props.location !== nextProps.location || this.state.path !== nextState.path || this.state.pageQueryData[nextState.path] !== nextState.pageQueryData[nextState.path] || this.state.staticQueryData !== nextState.staticQueryData;
  };

  _proto.render = function render() {
    var data = this.state.pageQueryData[getPathFromProps(this.props)]; // eslint-disable-next-line

    var _this$props = this.props,
        pages = _this$props.pages,
        propsWithoutPages = _babel_runtime_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1___default()(_this$props, ["pages"]);

    if (!data) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null);
    }

    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_5__["StaticQueryContext"].Provider, {
      value: this.state.staticQueryData
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_page_renderer__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, propsWithoutPages, data)));
  };

  return JSONStore;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (JSONStore);

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(152);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(162);
/* harmony import */ var _api_runner_browser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_api_runner_browser__WEBPACK_IMPORTED_MODULE_5__);





 // Renders page

var PageRenderer =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(PageRenderer, _React$Component);

  function PageRenderer() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = PageRenderer.prototype;

  _proto.render = function render() {
    var props = Object.assign({}, this.props, {
      pathContext: this.props.pageContext
    });

    var _apiRunner = Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_5__["apiRunner"])("replaceComponentRenderer", {
      props: this.props,
      loader: _loader__WEBPACK_IMPORTED_MODULE_4__["publicLoader"]
    }),
        replacementElement = _apiRunner[0];

    var pageElement = replacementElement || Object(react__WEBPACK_IMPORTED_MODULE_2__["createElement"])(this.props.pageResources.component, Object.assign({}, props, {
      key: this.props.pageResources.page.path
    }));
    var wrappedPage = Object(_api_runner_browser__WEBPACK_IMPORTED_MODULE_5__["apiRunner"])("wrapPageElement", {
      element: pageElement,
      props: props
    }, pageElement, function (_ref) {
      var result = _ref.result;
      return {
        element: result,
        props: props
      };
    }).pop();
    return wrappedPage;
  };

  return PageRenderer;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

PageRenderer.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  pageResources: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  pageContext: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (PageRenderer);

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(126);

var plugins = __webpack_require__(163);

var _require$publicLoader = __webpack_require__(65).publicLoader,
    getResourcesForPathname = _require$publicLoader.getResourcesForPathname,
    getResourcesForPathnameSync = _require$publicLoader.getResourcesForPathnameSync,
    getResourceURLsForPathname = _require$publicLoader.getResourceURLsForPathname;

exports.apiRunner = function (api, args, defaultReturn, argTransform) {
  if (args === void 0) {
    args = {};
  }

  // Hooks for cypress-gatsby's API handler
  if (window.Cypress) {
    if (window.___apiHandler) {
      window.___apiHandler(api);
    } else if (window.___resolvedAPIs) {
      window.___resolvedAPIs.push(api);
    } else {
      window.___resolvedAPIs = [api];
    }
  }

  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    args.getResourcesForPathnameSync = getResourcesForPathnameSync;
    args.getResourcesForPathname = getResourcesForPathname;
    args.getResourceURLsForPathname = getResourceURLsForPathname;
    var result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args: args,
        result: result,
        plugin: plugin
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else if (defaultReturn) {
    return [defaultReturn];
  } else {
    return [];
  }
};

exports.apiRunnerAsync = function (api, args, defaultReturn) {
  return plugins.reduce(function (previous, next) {
    return next.plugin[api] ? previous.then(function () {
      return next.plugin[api](args, next.options);
    }) : previous;
  }, Promise.resolve());
};

/***/ }),
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(169);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(173);
/* harmony import */ var _assets_sass_styles_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(175);
/* harmony import */ var _assets_sass_styles_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_styles_sass__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(174);
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_config__WEBPACK_IMPORTED_MODULE_7__);









var TemplateWrapper =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0___default()(TemplateWrapper, _Component);

  function TemplateWrapper(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isActive: false
    };
    _this.toggleNavbar = _this.toggleNavbar.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1___default()(_this)));
    return _this;
  }

  var _proto = TemplateWrapper.prototype;

  _proto.toggleNavbar = function toggleNavbar() {
    this.setState({
      isActive: !this.state.isActive
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", null, _data_config__WEBPACK_IMPORTED_MODULE_7___default.a.siteTitle), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
      name: "description",
      content: _data_config__WEBPACK_IMPORTED_MODULE_7___default.a.siteDescription
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_NavBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      isActive: this.state.isActive,
      toggleNavbar: function toggleNavbar() {
        return _this2.toggleNavbar();
      }
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, this.props.children), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], null));
  };

  return TemplateWrapper;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (TemplateWrapper);

/***/ }),
/* 169 */
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "navbar-item",
        to: "https://rdbox-intec.github.io/homepage_en/"
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

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchBox; });
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(49);
/* harmony import */ var elasticlunr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(172);
/* harmony import */ var elasticlunr__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(elasticlunr__WEBPACK_IMPORTED_MODULE_4__);






var SearchBox =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(SearchBox, _Component);

  function SearchBox(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.getOrCreateIndex = function () {
      return _this.index ? _this.index : elasticlunr__WEBPACK_IMPORTED_MODULE_4__["Index"].load(_this.props.searchIndex);
    };

    _this.search = function (evt) {
      var query = evt.target.value;
      _this.index = _this.getOrCreateIndex();

      _this.setState({
        query: query,
        // Query the index with search string to get an [] of IDs
        results: _this.index.search(query, {
          expand: true
        }) // Accept partial matches
        // Map over each ID and return the full document
        .map(function (_ref) {
          var ref = _ref.ref;
          return _this.index.documentStore.getDoc(ref);
        }),
        isActive: !!query
      });
    };

    _this.state = {
      query: "",
      results: [],
      isActive: false
    };
    return _this;
  }

  var _proto = SearchBox.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "navbar-item " + (this.state.isActive ? 'is-active' : '')
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
      className: "input navbar-link is-rounded is-primary",
      type: "text",
      value: this.state.query,
      onChange: this.search,
      placeholder: "Search"
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "navbar-dropdown"
    }, this.state.results.map(function (page) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        className: "navbar-item",
        key: page.id,
        to: page.slug
      }, page.title);
    })));
  };

  return SearchBox;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);



/***/ }),
/* 171 */,
/* 172 */,
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(174);
/* harmony import */ var _data_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_config__WEBPACK_IMPORTED_MODULE_1__);



var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, _data_config__WEBPACK_IMPORTED_MODULE_1___default.a.copyright), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Powered by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.gatsbyjs.org"
  }, "Gatsby"), " and ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.netlifycms.org"
  }, "Netlify CMS"), " | ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/v4iv/gatsby-starter-business"
  }, "Github Repository")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parsePath; });
function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ })
])
//# sourceMappingURL=0.e874bd090c4360b39eea.hot-update.js.map