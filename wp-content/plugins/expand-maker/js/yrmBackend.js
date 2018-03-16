function yrmBackend() {
	
}

yrmBackend.prototype.init = function() {
	
	this.deleteAjaxRequest();
	this.accordionContent();
	this.proOptionsWrapper();
	this.select2();
	this.changeEasings();
};

yrmBackend.prototype.changeEasings = function () {

	var readMoreId = 0;
	var hiddenReadMoreId = jQuery('[name="read-more-id"]').val();
    hiddenReadMoreId = parseInt(hiddenReadMoreId);

    if (hiddenReadMoreId) {
        readMoreId = hiddenReadMoreId;
	}
	if (typeof readMoreArgs == 'undefined') {
    	return false;
	}
	var readMoreData = readMoreArgs[readMoreId];
	jQuery('.yrm-animate-easings').change(function () {
		var val = jQuery(this).val();
        readMoreData['yrm-animate-easings'] = val;
    });
};

yrmBackend.prototype.select2 = function () {

	var select2 = jQuery('.yrm-js-select2');

	if(!select2.length) {
		return false;
	}

    select2.select2();
};

yrmBackend.prototype.proOptionsWrapper = function() {

	if(jQuery('.yrm-pro-options').length == 0) {
		return '';
	}

	jQuery('.yrm-pro-options').on('click', function() {
		window.open('http://edmion.esy.es/');
	});
}

yrmBackend.prototype.accordionContent = function () {

	var that = this;
	jQuery('.yrm-accordion-checkbox').each(function () {
		that.doAccordion(jQuery(this), jQuery(this).is(':checked'));
	});
	jQuery('.yrm-accordion-checkbox').each(function () {
		jQuery(this).bind('change', function () {
			var attrChecked = jQuery(this).is(':checked');
			var currentCheckbox = jQuery(this);
			that.doAccordion(currentCheckbox, attrChecked);
		});
	});
};

yrmBackend.prototype.doAccordion = function (checkbox, ischecked) {
	var accordionContent = checkbox.parents('.row').nextAll('.yrm-accordion-content').first();

	if(ischecked) {
		accordionContent.removeClass('yrm-hide-content');
	}
	else {
		accordionContent.addClass('yrm-hide-content');
	}
};

yrmBackend.prototype.deleteAjaxRequest = function() {

	jQuery('.yrm-delete-link').bind('click', function (e) {
		e.preventDefault();

		var confirmStatus = confirm('Are you shure?');

		if(!confirmStatus) {
			return;
		}

		var id = jQuery(this).attr('data-id');

		var data = {
			action: 'delete_rm',
			ajaxNonce: yrmBackendData.nonce,
			readMoreId: id
		};

		jQuery.post(ajaxurl, data, function(response,d) {
			window.location.reload();
		});

	});
};

jQuery(document).ready(function() {
	
	var obj = new yrmBackend();
	obj.init();
});