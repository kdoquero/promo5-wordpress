// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

try {
    var ce = new window.CustomEvent('test');
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
        // IE has problems with .preventDefault() on custom events
        // http://stackoverflow.com/questions/23349191
        throw new Error('Could not prevent default');
    }
} catch(e) {
  var CustomEvent = function(event, params) {
    var evt, origPrevent;
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };

    evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    origPrevent = evt.preventDefault;
    evt.preventDefault = function () {
      origPrevent.call(this);
      try {
        Object.defineProperty(this, 'defaultPrevented', {
          get: function () {
            return true;
          }
        });
      } catch(e) {
        this.defaultPrevented = true;
      }
    };
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent; // expose definition to window
}

;(function ($) {

	$(document).ready(function() {
		$('.elm-button').on('click', function (e) {
			e.preventDefault();

			var $that = $(this),
				url = $that.attr('data-href'),
				nextPage = parseInt($that.attr('data-page'), 10) + 1,
				maxPages = parseInt($that.attr('data-max-pages'), 10);

			$that.addClass('is-loading');

			if (url.indexOf('?') > 0) {
				url += '&';
			} else {
				url += '?';
			}

			url += 'paged=' + nextPage;

			$.ajax({
				type : 'POST',
				url : url,
				dataType: 'text'
			}).done(function (data) {

				$that.removeClass('is-loading');

				if ($(elm_button_vars.wrapper).length) {
					$(elm_button_vars.wrapper).append($($.parseHTML(data)).find(elm_button_vars.wrapper).addBack(elm_button_vars.wrapper).html());
					document.dispatchEvent(new window.CustomEvent('elm-load'));
				} else {
					console.log('Please update Easy Load More settings with post list wrapper selector.');
				}

				if ( nextPage == maxPages ) {
					$that.remove();
					document.dispatchEvent(new window.CustomEvent('elm-lastPage'));
				} else {
					$that.attr('data-page', nextPage);
				}

			}).fail(function () {
				document.dispatchEvent(new window.CustomEvent('elm-fail'));
				console.log('Ajax failed. Navigating to ' + url + '.');
				document.location.href = url;
			});

			return false;
		});
	});

}(jQuery));