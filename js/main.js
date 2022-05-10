
  AOS.init();



!(function($){
    "use strict";


    if ($('.typed').length){
        var typed_strings = $(".typed").data('typed-items');
        typed_strings=typed_strings.split(',')
        new Typed('.typed',{
            strings:typed_strings,
            loop:true,
            typeSpeed:70,
            backSpeed:70,
            backDelay:2000
        });
    }

})(jQuery);

