webpackJsonp([2],{

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_styl_common_styl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_styl_common_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_styl_common_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catalog_category_styl__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catalog_category_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__catalog_category_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catalog_category_pug__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catalog_category_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__catalog_category_pug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__assets_main_js__ = __webpack_require__(8);







/***/ }),

/***/ 47:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(0);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (a) {var pug_indent = [];
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\n\u003Chtml\u003E\n  \u003Chead\u003E\n    \u003Cmeta charset=\"UTF-8\"\u003E\n    \u003Ctitle\u003EКаталог продукции\u003C\u002Ftitle\u003E\n    \u003Cmeta name=\"description\" content=\"\"\u003E\n    \u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"\u003E\n    \u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\"\u003E\n    \u003Clink rel=\"stylesheet\" href=\"https:\u002F\u002Fmaxcdn.bootstrapcdn.com\u002Ffont-awesome\u002F4.7.0\u002Fcss\u002Ffont-awesome.min.css\"\u003E\n  \u003C\u002Fhead\u003E\n  \u003Cbody\u003E";
pug_mixins["header"] = pug_interp = function(light_text, text, breadcrumbs){
var block = (this && this.block), attributes = (this && this.attributes) || {};
breadcrumbs = breadcrumbs || null
pug_html = pug_html + "\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cheader class=\"p-header\"\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"p-header__wrapper\"\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"p-header__bg\"\u003E\u003C\u002Fdiv\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E   \n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"col-lg-12\"\u003E\n              ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"p-header__item\"\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"logo\"\u003E\u003C\u002Fdiv\u003E\n              ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n              ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"p-header__holder\"\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"p-header__item hidden-sm hidden-xs hidden-md\"\u003E\n                  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cul class=\"menu p-header__menu\"\u003E\n                    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"menu__item\"\u003E\u003Ca class=\"menu__link\" href=\"about.html\"\u003EО компании\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"menu__item\"\u003E\u003Ca class=\"menu__link\" href=\"catalog.html\"\u003EПродукция\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"menu__item\"\u003E\u003Ca class=\"menu__link\" href=\"#\"\u003EНовости\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"menu__item\"\u003E\u003Ca class=\"menu__link\" href=\"#\"\u003EПартнерам и дистрибьюторам\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"menu__item\"\u003E\u003Ca class=\"menu__link\" href=\"#\"\u003EКонтакты\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Ful\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"p-header__item hidden-xs\"\u003E\n                  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"p-header__contacts\"\u003E\u003Ca class=\"p-header__phone\" href=\"tel: 89189809944\"\u003E9 918 980-99-44\u003C\u002Fa\u003E\u003Ca class=\"p-header__call popup-link\" href=\"#recall-popup\"\u003EПерезвоните мне\u003C\u002Fa\u003E\u003Ca class=\"p-header__email\" href=\"mailto:p-a_molzavod@mail.ru\"\u003Ep-a_molzavod@mail.ru\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"p-header__item\"\u003E\u003Ca class=\"p-header__search p-header__icon\" href=\"#\" data-start-search\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(2), true, true)) + "\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"p-header__item hidden-lg\"\u003E\u003Ca class=\"p-header__burger p-header__icon\" href=\"#\" data-open-menu\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(3), true, true)) + "\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n              ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"col-lg-12\"\u003E\n              ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"p-header__title\"\u003E";
if (breadcrumbs)
{
pug_html = pug_html + "\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cul class=\"breadcrumbs\"\u003E";
// iterate breadcrumbs
;(function(){
  var $$obj = breadcrumbs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var crumb = $$obj[pug_index0];
pug_html = pug_html + "\n                  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"breadcrumbs__item\"\u003E\u003Ca" + (" class=\"breadcrumbs__link\""+pug.attr("href", crumb.link, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = crumb.caption) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var crumb = $$obj[pug_index0];
pug_html = pug_html + "\n                  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"breadcrumbs__item\"\u003E\u003Ca" + (" class=\"breadcrumbs__link\""+pug.attr("href", crumb.link, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = crumb.caption) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Ful\u003E";
}
pug_html = pug_html + "\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"p-header__title_ligth\"\u003E" + (pug.escape(null == (pug_interp = light_text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp\u003E" + (null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fp\u003E\n              ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fheader\u003E";
};
a = [ { "caption": "Каталог продукции", "link": "/catalog.html"} ]
pug_indent.push('    ');
pug_mixins["header"]('', 'Молоко', a);
pug_indent.pop();
pug_html = pug_html + (null == (pug_interp = __webpack_require__(4).call(this, locals)) ? "" : pug_interp) + "\n    \u003Cmain class=\"index\"\u003E\n      \u003Csection class=\"p-section\"\u003E\n        \u003Cdiv class=\"container\"\u003E\n          \u003Cdiv class=\"catlog-category\"\u003E\n            \u003Cdiv class=\"row\"\u003E\n              \u003Cdiv class=\"col-sm-6 col-md-4 col-lg-3\"\u003E\u003Ca class=\"catlog-category__item\" href=\"product.html\"\u003E \n                  \u003Cdiv" + (" class=\"catlog-category__photo\""+pug.attr("style", pug.style("background-image: url('" + __webpack_require__(49) + "')"), true, true)) + "\u003E\u003C\u002Fdiv\u003E\n                  \u003Cdiv class=\"catlog-category__caption\"\u003EМолоко 2,5%, 0,9л\u003C\u002Fdiv\u003E\n                  \u003Cdiv class=\"catlog-category__link\"\u003EПодробнее\u003Ci class=\"fa fa-angle-right\" aria-hidden=\"true\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"col-sm-6 col-md-4 col-lg-3\"\u003E\u003Ca class=\"catlog-category__item\" href=\"product.html\"\u003E \n                  \u003Cdiv" + (" class=\"catlog-category__photo\""+pug.attr("style", pug.style("background-image: url('" + __webpack_require__(50) + "')"), true, true)) + "\u003E\u003C\u002Fdiv\u003E\n                  \u003Cdiv class=\"catlog-category__caption\"\u003EМолоко 2,5%, 1л\u003C\u002Fdiv\u003E\n                  \u003Cdiv class=\"catlog-category__link\"\u003EПодробнее\u003Ci class=\"fa fa-angle-right\" aria-hidden=\"true\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"col-sm-6 col-md-4 col-lg-3\"\u003E\u003Ca class=\"catlog-category__item\" href=\"product.html\"\u003E \n                  \u003Cdiv" + (" class=\"catlog-category__photo\""+pug.attr("style", pug.style("background-image: url('" + __webpack_require__(51) + "')"), true, true)) + "\u003E\u003C\u002Fdiv\u003E\n                  \u003Cdiv class=\"catlog-category__caption\"\u003EМолоко 2,5%, 0,5л\u003C\u002Fdiv\u003E\n                  \u003Cdiv class=\"catlog-category__link\"\u003EПодробнее\u003Ci class=\"fa fa-angle-right\" aria-hidden=\"true\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"col-sm-6 col-md-4 col-lg-3\"\u003E\u003Ca class=\"catlog-category__item\" href=\"product.html\"\u003E \n                  \u003Cdiv" + (" class=\"catlog-category__photo\""+pug.attr("style", pug.style("background-image: url('" + __webpack_require__(52) + "')"), true, true)) + "\u003E\u003C\u002Fdiv\u003E\n                  \u003Cdiv class=\"catlog-category__caption\"\u003EМолоко 3,2%, 0,5л\u003C\u002Fdiv\u003E\n                  \u003Cdiv class=\"catlog-category__link\"\u003EПодробнее\u003Ci class=\"fa fa-angle-right\" aria-hidden=\"true\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fsection\u003E\n    \u003C\u002Fmain\u003E" + (null == (pug_interp = __webpack_require__(5).call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(6).call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(7).call(this, locals)) ? "" : pug_interp) + "\n  \u003C\u002Fbody\u003E\n\u003C\u002Fhtml\u003E";}.call(this,"a" in locals_for_with?locals_for_with.a:typeof a!=="undefined"?a:undefined));;return pug_html;};
module.exports = template;

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/product-milk-1.jpg";

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/product-milk-2.jpg";

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/product-milk-3.jpg";

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/product-milk-4.jpg";

/***/ })

},[46]);