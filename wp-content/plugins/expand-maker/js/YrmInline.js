function YrmInline() {

	this.id;
}

YrmInline.prototype = new YrmMore();
YrmInline.constructor = YrmInline;

YrmInline.prototype.init = function () {

	var id = this.id;
	if(typeof readMoreArgs[id] == 'undefined') {
		console.log('Invalid Data');
		return;
	}

	var data = readMoreArgs[id];
	data['button-width'] = '100%';
	this.setData('readMoreData', data);
	this.setData('id', id);
	this.setStyles();
	this.buttonDimensions();
	this.livePreview();

	var duration = parseInt(data['animation-duration']);

	jQuery('.yrm-toggle-expand-'+id).each(function () {

		jQuery(this).unbind('click').bind('click', function () {
            var easings = data['yrm-animate-easings'];
            var toggleContentId = jQuery(this).attr('data-rel');
            var currentStatus = JSON.parse(jQuery("#"+toggleContentId).attr('data-show-status'));

            /*if currentStatus == true must be close read more*/
            if(currentStatus) {
	            var moreName = jQuery(this).data('more');
				jQuery("#" + toggleContentId).slideToggle(duration, easings, function () {
				});
				jQuery(this).find(".yrm-button-text").text(moreName);
				jQuery(window).trigger('YrmClose', {'id': id});
			}
			else {
	            var lessName = jQuery(this).data('less');
				jQuery("#"+toggleContentId).slideToggle(duration, easings, function () {
				});
				jQuery(this).find(".yrm-button-text").text(lessName);
				jQuery(window).trigger('YrmOpen', {'id': id});
			}
            jQuery("#"+toggleContentId).attr('data-show-status', !currentStatus);
        })
	});
};