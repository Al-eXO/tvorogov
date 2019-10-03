webpackJsonp([10],{

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_styl_common_styl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__assets_styl_common_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__assets_styl_common_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_img_marker_svg__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_img_marker_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_img_marker_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_styl__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacts_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__contacts_styl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_pug__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacts_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__contacts_pug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_main_js__ = __webpack_require__(9);







$(function(){
    var map, placemark;

    function initMap(){
        map = new ymaps.Map("map", {
            center: [46.0450285,38.1715999],
            zoom: 16,
            controls: []
        });
        placemark = new ymaps.Placemark([46.045028, 38.173796], { 
            hintContent: 'Твороговъ', 
            balloonContent: 'АО "Приморско-Ахтарский молочный завод" Твороговъ' 
        }, {
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: $('.contacts__map').data('marker-path'),
            // Размеры метки.
            iconImageSize: [37, 55],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

        map.geoObjects.add(placemark);
        map.behaviors.disable('scrollZoom')
    }

    ymaps.ready(initMap);
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(18)))

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/marker.svg";

/***/ }),

/***/ 85:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(0);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_indent = [];
pug_html = pug_html + (null == (pug_interp = __webpack_require__(2).call(this, locals)) ? "" : pug_interp);
pug_mixins["header"] = pug_interp = function(light_text, text, breadcrumbs){
var block = (this && this.block), attributes = (this && this.attributes) || {};
breadcrumbs = breadcrumbs || null
pug_html = pug_html + "\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cheader class=\"p-header\"\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"p-header__wrapper\"\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"p-header__bg\"\u003E\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"container\"\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E   \n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"col-lg-12\"\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"p-header__item\"\u003E\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"logo\"\u003E\u003C\u002Fdiv\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"p-header__holder\"\u003E\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"p-header__item hidden-sm hidden-xs hidden-md\"\u003E\n              ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cul class=\"menu p-header__menu\"\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"menu__item\"\u003E\u003Ca class=\"menu__link\" href=\"about.html\"\u003EО компании\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"menu__item\"\u003E\u003Ca class=\"menu__link\" href=\"catalog.html\"\u003EПродукция\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"menu__item\"\u003E\u003Ca class=\"menu__link\" href=\"#\"\u003EНовости\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"menu__item\"\u003E\u003Ca class=\"menu__link\" href=\"#\"\u003EПартнерам и дистрибьюторам\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n                ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"menu__item\"\u003E\u003Ca class=\"menu__link\" href=\"#\"\u003EКонтакты\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n              ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Ful\u003E\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"p-header__item hidden-xs\"\u003E\n              ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"p-header__contacts\"\u003E\u003Ca class=\"p-header__phone\" href=\"tel: 89189809944\"\u003E9 918 980-99-44\u003C\u002Fa\u003E\u003Ca class=\"p-header__call popup-link\" href=\"#recall-popup\"\u003EПерезвоните мне\u003C\u002Fa\u003E\u003Ca class=\"p-header__email\" href=\"mailto:p-a_molzavod@mail.ru\"\u003Ep-a_molzavod@mail.ru\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"p-header__item\"\u003E\u003Ca class=\"p-header__search p-header__icon\" href=\"#\" data-start-search\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(3), true, true)) + "\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"p-header__item hidden-lg\"\u003E\u003Ca class=\"p-header__burger p-header__icon\" href=\"#\" data-open-menu\u003E\u003Cimg" + (pug.attr("src", __webpack_require__(4), true, true)) + "\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"row\"\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"col-lg-12\"\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cdiv class=\"p-header__title\"\u003E";
if (breadcrumbs)
{
pug_html = pug_html + "\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cul class=\"breadcrumbs\"\u003E";
// iterate breadcrumbs
;(function(){
  var $$obj = breadcrumbs;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var crumb = $$obj[pug_index0];
pug_html = pug_html + "\n              ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"breadcrumbs__item\"\u003E\u003Ca" + (" class=\"breadcrumbs__link\""+pug.attr("href", crumb.link, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = crumb.caption) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var crumb = $$obj[pug_index0];
pug_html = pug_html + "\n              ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cli class=\"breadcrumbs__item\"\u003E\u003Ca" + (" class=\"breadcrumbs__link\""+pug.attr("href", crumb.link, true, true)) + "\u003E" + (pug.escape(null == (pug_interp = crumb.caption) ? "" : pug_interp)) + "\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Ful\u003E";
}
pug_html = pug_html + "\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp class=\"p-header__title_ligth\"\u003E" + (pug.escape(null == (pug_interp = light_text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\n            ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003Cp\u003E" + (null == (pug_interp = text) ? "" : pug_interp) + "\u003C\u002Fp\u003E\n          ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n        ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n      ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n    ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n  ";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\n";
pug_html = pug_html + pug_indent.join("");
pug_html = pug_html + "\u003C\u002Fheader\u003E";
};
pug_indent.push('');
pug_mixins["header"]('', 'Контакты');
pug_indent.pop();
pug_html = pug_html + ((null == (pug_interp = __webpack_require__(5).call(this, locals)) ? "" : pug_interp) + "\n\u003Cmain class=\"index\"\u003E\n  \u003Csection class=\"p-section\"\u003E\n    \u003Cdiv class=\"contacts\"\u003E\n      \u003Cdiv class=\"container\"\u003E\n        \u003Cdiv class=\"row\"\u003E\n          \u003Cdiv class=\"col-xs-12 col-sm-6 hidden-xs\"\u003E\n            \u003Cdiv class=\"contacts__cnt\"\u003E\n              \u003Cp\u003EРоссия,353860, Краснодарский край,\u003C\u002Fp\u003E\n              \u003Cp\u003Eг.Приморско-Ахтарск, ул Железнодорожная,38\u003C\u002Fp\u003E\n              \u003Cp\u003Eфакс: 8 861 433-09-58\u003C\u002Fp\u003E\n              \u003Cp\u003Eотдел продаж +7 918 980-99-44\u003C\u002Fp\u003E\n              \u003Cp\u003Ee-mail: \u003Ca href=\"mailto:molzavod.tvorogov@mail.ru\"\u003Emolzavod.tvorogov@mail.ru\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n            \u003C\u002Fdiv\u003E\n          \u003C\u002Fdiv\u003E\n          \u003Cdiv class=\"col-xs-12 col-sm-6 col-lg-5 col-lg-offset-1\"\u003E\n            \u003Ch2\u003EОбратная связь\u003C\u002Fh2\u003E\n            \u003Cform class=\"brand-form partners__form\" id=\"contactsForm\" action=\"#\" method=\"post\" novaldate\u003E\n              \u003Cdiv class=\"brand-form__item\"\u003E\n                \u003Cdiv class=\"brand-input\"\u003E\n                  \u003Cinput id=\"clientName\" name=\"clientName\" data-parsley-required\u003E\n                  \u003Clabel for=\"clientName\"\u003EВаше имя\u002Fкомпания\u003C\u002Flabel\u003E\n                \u003C\u002Fdiv\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"brand-form__item\"\u003E\n                \u003Cdiv class=\"brand-input\"\u003E\n                  \u003Cinput id=\"clientPhone\" name=\"clientPhone\" data-parsley-required\u003E\n                  \u003Clabel for=\"clientPhone\"\u003EВаши нонтакты\u003C\u002Flabel\u003E\n                \u003C\u002Fdiv\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"brand-form__item\"\u003E\n                \u003Cdiv class=\"brand-textarea\"\u003E\n                  \u003Ctextarea id=\"clientInfo\" name=\"clientInfo\" rows=\"6\"\u003E\u003C\u002Ftextarea\u003E\n                  \u003Clabel for=\"clientInfo\"\u003EОставьте ваше сообщение                            \u003C\u002Flabel\u003E\n                \u003C\u002Fdiv\u003E\n              \u003C\u002Fdiv\u003E\n              \u003Cdiv class=\"brand-form__item\"\u003E\n                \u003Cbutton class=\"brand-button contacts__submit\" type=\"submit\"\u003EОтправить заявку\u003C\u002Fbutton\u003E\n              \u003C\u002Fdiv\u003E\n            \u003C\u002Fform\u003E\n          \u003C\u002Fdiv\u003E\n        \u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n      \u003Cdiv class=\"contacts__map\" data-marker-path=\"assets\u002Fimages\u002Fmarker.svg\"\u003E\n        \u003Cdiv id=\"map\"\u003E\u003C\u002Fdiv\u003E\n      \u003C\u002Fdiv\u003E\n    \u003C\u002Fdiv\u003E\n  \u003C\u002Fsection\u003E\n\u003C\u002Fmain\u003E" + (null == (pug_interp = __webpack_require__(6).call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(7).call(this, locals)) ? "" : pug_interp) + (null == (pug_interp = __webpack_require__(8).call(this, locals)) ? "" : pug_interp));;return pug_html;};
module.exports = template;

/***/ })

},[83]);