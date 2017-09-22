import '../../assets/styl/common.styl';
import './partners.styl';
import './partners.pug';
import parsley from 'parsleyjs';
import mainScripts from '../../assets/main.js';

$(function(){
    $('#partnersForm').parsley().on('field:validated', function() {
        if (this.validationResult === true) {
          this.$element.parent().removeClass('error');
        } else {
          this.$element.parent().addClass('error');
        }
      });
});