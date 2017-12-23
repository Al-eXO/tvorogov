import '../../assets/styl/common.styl';
import '../../assets/img/marker.svg';
import './contacts.styl';
import './contacts.pug';
import mainScripts from '../../assets/main.js';


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
