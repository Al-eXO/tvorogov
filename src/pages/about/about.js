import '../../assets/styl/common.styl';
import './about.styl';
import './about.pug';
import mainScripts from '../../assets/main.js';
import Swiper from "swiper";

$(function(){ 
    var slider = new Swiper(".swiper-container", {
        loop: false,
        slidesPerView: 1,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        }
    })

    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        showCloseBtn: false,
        tLoading: 'Загружаю изображение #%curr%...',
        mainClass: 'mfp-img-mobile',
        tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">Изображение #%curr%</a> не может быть загружено.',
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        }
    });
});