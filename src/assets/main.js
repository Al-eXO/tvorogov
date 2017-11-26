import $ from 'jquery';
import magnificPopup from 'magnific-popup';

export default class mainScripts{

    constructor(){
        this.initEvents();
        this.initPopups();
        this.initMasks();
        this.updateInputs();
    }

    initPopups(){
        var self = this;
        $('.popup-link').magnificPopup({
            type: 'inline',
            removalDelay: 300,
            mainClass: 'mfp-fade',
            callbacks: {
                open: function(){
                    self.updateInputs();
                },
                close: function(){
                    $('form').get(0).reset();
                }
            }
        });
    }

    updateInputs(){
        $('.brand-input input').each(function(){
            if ($(this).val() === ''){
                $(this).parents('.brand-input').removeClass('active');
            }
        });
        $('.brand-textarea textarea').each(function(){
            if ($(this).val() === ''){
                $(this).parents('.brand-textarea').removeClass('active');
            }
        });
    }

    initMasks(){
        var im = new Inputmask({
            mask: '+7 (999) 999 99 99',
            placeholder: '+7 (...) ... .. ..',
            showMaskOnHover: false
        });
        im.mask('[data-mask="phone"]');

    }

    initEvents(){

        $('.brand-textarea textarea').on('focus', function(){
            $(this).parents('.brand-textarea').addClass('active');
        }).on('blur', function(){
            if ($(this).val() === ''){
                $(this).parents('.brand-textarea').removeClass('active');
            }
        });

        $('.brand-input input').on('focus', function(){
            $(this).parents('.brand-input').addClass('active');
        }).on('blur', function(){
            if ($(this).val() === ''){
                $(this).parents('.brand-input').removeClass('active');
            }
        });

        $(document).on('click', '[data-start-search]', function(){
            $('[data-searchbox]').addClass('active').find('input').focus();
            $('body').addClass('blured');
        });

        $(document).on('click', '[data-cancel-search]', function(){
            $(this).parents('form').get(0).reset();
            $('[data-searchbox]').animate({ opacity: 0 }, 600, function(){
                $('[data-searchbox]').removeClass('active').css({'opacity': ''});
                $('body').removeClass('blured');

            });
        });

        $(document).on('click', '[data-open-menu]', function(){
            $('[data-mobile-menu]').addClass('active');
            $('.mobile-menu-lock').show();
            $('body').addClass('blured');
        });

        $(document).on('click', '[data-close-menu]', function() {
            $('[data-mobile-menu]').removeClass('active');
            $('.mobile-menu-lock').hide();
            $('body').removeClass('blured');
        });

        $(document).on('click', '.mobile-menu-lock', function(){
            $('[data-close-menu]').trigger('click');
        });

        $(document).on('mouseup', '[data-mobile-menu]', function(e){
            var container = $("[data-mobile-menu]");
            if (container.has(e.target).length === 0){
                $('[data-close-menu]').trigger('click');
            }
        });

    }
}

window.onload = function(){
    var pageScripts = new mainScripts();
    $('[data-mobile-menu]').addClass('loaded');
    $('#hideAll').fadeOut("slow");
}
