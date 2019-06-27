import Barba from 'barba.js';

const Home = require('../pages/home/home.js');

var FadeTransition = Barba.BaseTransition.extend({
	start: function() {
		Promise
		.all([this.newContainerLoading, this.fadeOut()])
		.then(this.fadeIn.bind(this));
	},
	fadeOut: function() {
		return $(this.oldContainer).animate({ opacity: 1 }).promise();
	},
	fadeIn: function() {

		$(window).scrollTop(0); // scroll to top here

		var _this = this;
		var $el = $(this.newContainer);
		$(this.oldContainer).hide();
		$el.css({
			visibility : 'visible',
			opacity : 1
		});
		$el.animate({ opacity: 1 }, 400, function() {
			_this.done();
		});
	}
});

Barba.Dispatcher.on('transitionCompleted', function(currentStatus, oldStatus, container) { 

});

Barba.Dispatcher.on('initStateChange', function(currentStatus, oldStatus, container) { 

});

Barba.Pjax.getTransition = function() {
	return FadeTransition;
};

Barba.Pjax.start();
