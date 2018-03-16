(function($) {
    'use strict';

    jQuery(document).ready(function($) {
        //added chosen
        $(".chosen-select").chosen({ width:"auto" });

		$('.wpnp_image_name').change(function() {
			var imagename = $('.wpnp_image_name').val();

			var $_this = $(this);

			if(imagename != 'custom'){
				$('#wpnp_previousimg').attr('src', wpnp.image_url + 'l_' + imagename + '.png');
				$('#wpnp_nextimg').attr('src', wpnp.image_url + 'r_' + imagename + '.png');
            }



        });

    });
})(jQuery);
