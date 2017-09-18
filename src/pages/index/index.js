import '../../assets/styl/common.styl';
import './index.styl';
import './index.pug';


class indexPage{
    constructor(){
        this.initIndexPageEvents();
    }

    initIndexPageEvents(){
        $(document).on('click', '[data-start-search]', function(){
            $('[data-searchbox]').addClass('active');
            $('body').addClass('blured');
            console.log("start search");
        });

        $(document).on('click', '[data-cancel-search]', function(){
            $(this).parents('form').get(0).reset();
            $('[data-searchbox]').animate({ opacity: 0 }, 600, function(){
                $('[data-searchbox]').removeClass('active').css({'opacity': ''});
                $('body').removeClass('blured');

            });
        });
    }
}


$(function(){
    var p = new indexPage();
})  