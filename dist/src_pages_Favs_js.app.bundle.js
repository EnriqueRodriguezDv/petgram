"use strict";
(self["webpackChunkpetgram"] = self["webpackChunkpetgram"] || []).push([["src_pages_Favs_js"],{

/***/ "./src/components/ListOfFavs/index.js":
/*!********************************************!*\
  !*** ./src/components/ListOfFavs/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/components/ListOfFavs/styles.js");




var ListOfFavs = function ListOfFavs(_ref) {
  var _ref$favs = _ref.favs,
      favs = _ref$favs === void 0 ? [] : _ref$favs;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Grid, null, favs.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Link, {
      key: item.id,
      to: "/detail/".concat(item.id)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Image, {
      src: item.src
    }));
  }));
};

ListOfFavs.propsTypes = {
  favs: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
    src: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
  }))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListOfFavs);

/***/ }),

/***/ "./src/components/ListOfFavs/styles.js":
/*!*********************************************!*\
  !*** ./src/components/ListOfFavs/styles.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "Grid": () => (/* binding */ Grid),
/* harmony export */   "Image": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/router */ "./node_modules/@reach/router/es/index.js");
var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Link = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.default)(_reach_router__WEBPACK_IMPORTED_MODULE_0__.Link)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border-radius: 8px;\n    box-shadow: 0 0 8px rgba(0, 0, 0, .3);\n    display: inline-block;\n    margin: 1%;\n    overflow: hidden;\n    width: 31.33%;\n    position: relative;\n    &:after{\n        content: \"\";\n        display: block;\n        padding-bottom: 100%;\n    }\n"])));
var Grid = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\npadding-top: 32px;\n"])));
var Image = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.img(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    object-fit: cover;\n    height: 100%;\n    width: 100%;\n    position: absolute;\n"])));

/***/ }),

/***/ "./src/container/GetFavorites.js":
/*!***************************************!*\
  !*** ./src/container/GetFavorites.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavsWithQuery": () => (/* binding */ FavsWithQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/@apollo/react-components/lib/react-components.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _components_ListOfFavs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ListOfFavs */ "./src/components/ListOfFavs/index.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var GET_FAVS = (0,apollo_boost__WEBPACK_IMPORTED_MODULE_2__.default)(_templateObject || (_templateObject = _taggedTemplateLiteral([" \n    query getFavs {\n        favs {\n            id\n            categoryId\n            src\n            likes\n            userId\n        }\n    }\n"])));

var renderProp = function renderProp(_ref) {
  var loading = _ref.loading,
      error = _ref.error,
      data = _ref.data;
  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading...");
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Error!");
  var favs = data.favs;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_ListOfFavs__WEBPACK_IMPORTED_MODULE_1__.default, {
    favs: favs
  });
};

var FavsWithQuery = function FavsWithQuery() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__.Query, {
    query: GET_FAVS,
    fetchPolicy: "network-only"
  }, renderProp);
};

/***/ }),

/***/ "./src/pages/Favs.js":
/*!***************************!*\
  !*** ./src/pages/Favs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _container_GetFavorites__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/GetFavorites */ "./src/container/GetFavorites.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout/index.js");




var Favs = function Favs() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    title: "Tus favoritos",
    subtitle: "Aqu\xED puedes encontrar tus favoritos"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_container_GetFavorites__WEBPACK_IMPORTED_MODULE_1__.FavsWithQuery, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Favs);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3BhZ2VzX0ZhdnNfanMuYXBwLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUFtQjtBQUFBLHVCQUFoQkMsSUFBZ0I7QUFBQSxNQUFoQkEsSUFBZ0IsMEJBQVQsRUFBUztBQUNwQyxzQkFDRSxpREFBQyx5Q0FBRCxRQUNHQSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsd0JBQ1IsaURBQUMseUNBQUQ7QUFBTSxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsRUFBaEI7QUFBb0IsUUFBRSxvQkFBYUQsSUFBSSxDQUFDQyxFQUFsQjtBQUF0QixvQkFDRSxpREFBQywwQ0FBRDtBQUFPLFNBQUcsRUFBRUQsSUFBSSxDQUFDRTtBQUFqQixNQURGLENBRFE7QUFBQSxHQUFULENBREgsQ0FERjtBQVNELENBVkQ7O0FBWUFMLFVBQVUsQ0FBQ0osVUFBWCxHQUF3QjtBQUN0QkssRUFBQUEsSUFBSSxFQUFFTCx5REFBQSxDQUNKQSx1REFBQSxDQUFpQjtBQUNmUSxJQUFBQSxFQUFFLEVBQUVSLHFFQURXO0FBRWZTLElBQUFBLEdBQUcsRUFBRVQscUVBQTRCYTtBQUZsQixHQUFqQixDQURJO0FBRGdCLENBQXhCO0FBU0EsaUVBQWVULFVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUVPLElBQU1ELElBQUksR0FBR1csMERBQU0sQ0FBQ0MsK0NBQUQsQ0FBVCxrV0FBVjtBQWVBLElBQU1kLElBQUksR0FBR2EsMERBQUgsNkZBQVY7QUFJQSxJQUFNWixLQUFLLEdBQUdZLDBEQUFILCtKQUFYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJQO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTU0sUUFBUSxHQUFHRCxxREFBSCwrTkFBZDs7QUFZQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUE0QjtBQUFBLE1BQTFCQyxPQUEwQixRQUExQkEsT0FBMEI7QUFBQSxNQUFqQkMsS0FBaUIsUUFBakJBLEtBQWlCO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQzNDLE1BQUdGLE9BQUgsRUFBWSxvQkFBTyx5RUFBUDtBQUNaLE1BQUdDLEtBQUgsRUFBVSxvQkFBTyxxRUFBUDtBQUNWLE1BQU9sQixJQUFQLEdBQWVtQixJQUFmLENBQU9uQixJQUFQO0FBQ0Esc0JBQU8saURBQUMsMkRBQUQ7QUFBWSxRQUFJLEVBQUVBO0FBQWxCLElBQVA7QUFDSCxDQUxEOztBQU9PLElBQU1vQixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsc0JBQ3pCLGlEQUFDLCtDQUFEO0FBQU8sU0FBSyxFQUFFTCxRQUFkO0FBQXdCLGVBQVcsRUFBQztBQUFwQyxLQUNLQyxVQURMLENBRHlCO0FBQUEsQ0FBdEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJQO0FBQ0E7QUFFQTs7QUFFQSxJQUFNTSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLHNCQUNFLGlIQUNFLGlEQUFDLHVEQUFEO0FBQ0UsU0FBSyxFQUFDLGVBRFI7QUFFRSxZQUFRLEVBQUM7QUFGWCxrQkFJRSxpREFBQyxrRUFBRCxPQUpGLENBREYsQ0FERjtBQVVELENBWEQ7O0FBYUEsaUVBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXRncmFtLy4vc3JjL2NvbXBvbmVudHMvTGlzdE9mRmF2cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wZXRncmFtLy4vc3JjL2NvbXBvbmVudHMvTGlzdE9mRmF2cy9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcGV0Z3JhbS8uL3NyYy9jb250YWluZXIvR2V0RmF2b3JpdGVzLmpzIiwid2VicGFjazovL3BldGdyYW0vLi9zcmMvcGFnZXMvRmF2cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBwcm9wc1R5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IEdyaWQsIEltYWdlLCBMaW5rIH0gZnJvbSBcIi4vc3R5bGVzXCI7XHJcblxyXG5jb25zdCBMaXN0T2ZGYXZzID0gKHsgZmF2cyA9IFtdIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQ+XHJcbiAgICAgIHtmYXZzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgIDxMaW5rIGtleT17aXRlbS5pZH0gdG89e2AvZGV0YWlsLyR7aXRlbS5pZH1gfT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2l0ZW0uc3JjfSAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgKSl9XHJcbiAgICA8L0dyaWQ+XHJcbiAgKTtcclxufTtcclxuXHJcbkxpc3RPZkZhdnMucHJvcHNUeXBlcyA9IHtcclxuICBmYXZzOiBwcm9wc1R5cGVzLmFycmF5T2YoXHJcbiAgICBwcm9wc1R5cGVzLnNoYXBlKHtcclxuICAgICAgaWQ6IHByb3BzVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICAgIHNyYzogcHJvcHNUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIH0pXHJcbiAgKSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RPZkZhdnM7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IExpbmsgYXMgTGlua1JvdXRlciB9IGZyb20gXCJAcmVhY2gvcm91dGVyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rID0gc3R5bGVkKExpbmtSb3V0ZXIpYFxyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDMxLjMzJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcclxuICAgIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEdyaWQgPSBzdHlsZWQuZGl2YFxyXG5wYWRkaW5nLXRvcDogMzJweDtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbmAgIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiXHJcbmltcG9ydCB7IGdxbCB9IGZyb20gXCJhcG9sbG8tYm9vc3RcIlxyXG5cclxuaW1wb3J0IExpc3RPZkZhdnMgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGlzdE9mRmF2c1wiXHJcblxyXG5jb25zdCBHRVRfRkFWUyA9IGdxbGAgXHJcbiAgICBxdWVyeSBnZXRGYXZzIHtcclxuICAgICAgICBmYXZzIHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgY2F0ZWdvcnlJZFxyXG4gICAgICAgICAgICBzcmNcclxuICAgICAgICAgICAgbGlrZXNcclxuICAgICAgICAgICAgdXNlcklkXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCByZW5kZXJQcm9wID0gKHtsb2FkaW5nLCBlcnJvciwgZGF0YX0pID0+IHtcclxuICAgIGlmKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPlxyXG4gICAgaWYoZXJyb3IpIHJldHVybiA8cD5FcnJvciE8L3A+XHJcbiAgICBjb25zdCB7ZmF2c30gPSBkYXRhXHJcbiAgICByZXR1cm4gPExpc3RPZkZhdnMgZmF2cz17ZmF2c30gLz5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEZhdnNXaXRoUXVlcnkgPSAoKSA9PiAoXHJcbiAgICA8UXVlcnkgcXVlcnk9e0dFVF9GQVZTfSBmZXRjaFBvbGljeT1cIm5ldHdvcmstb25seVwiID5cclxuICAgICAgICB7cmVuZGVyUHJvcH1cclxuICAgIDwvUXVlcnk+XHJcbikiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZhdnNXaXRoUXVlcnkgfSBmcm9tIFwiLi4vY29udGFpbmVyL0dldEZhdm9yaXRlc1wiO1xyXG5cclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuXHJcbmNvbnN0IEZhdnMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxMYXlvdXRcclxuICAgICAgICB0aXRsZT1cIlR1cyBmYXZvcml0b3NcIlxyXG4gICAgICAgIHN1YnRpdGxlPVwiQXF1w60gcHVlZGVzIGVuY29udHJhciB0dXMgZmF2b3JpdG9zXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxGYXZzV2l0aFF1ZXJ5IC8+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhdnM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInByb3BzVHlwZXMiLCJHcmlkIiwiSW1hZ2UiLCJMaW5rIiwiTGlzdE9mRmF2cyIsImZhdnMiLCJtYXAiLCJpdGVtIiwiaWQiLCJzcmMiLCJhcnJheU9mIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwic3R5bGVkIiwiTGlua1JvdXRlciIsImRpdiIsImltZyIsIlF1ZXJ5IiwiZ3FsIiwiR0VUX0ZBVlMiLCJyZW5kZXJQcm9wIiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsIkZhdnNXaXRoUXVlcnkiLCJMYXlvdXQiLCJGYXZzIl0sInNvdXJjZVJvb3QiOiIifQ==