import '../../assets/styl/common.styl';
import './index.styl';
import './index.pug';
import mainScripts from '../../assets/main.js';

$(function(){
    var pageScripts = new mainScripts();
    $('[data-mobile-menu]').addClass('loaded');
})   