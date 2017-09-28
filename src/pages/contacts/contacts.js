import '../../assets/styl/common.styl';
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
        });

        map.geoObjects.add(placemark);
        map.behaviors.disable('scrollZoom')
    }

    ymaps.ready(initMap);
});
