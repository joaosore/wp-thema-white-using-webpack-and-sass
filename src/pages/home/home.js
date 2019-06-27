import Barba from 'barba.js';
import ScrollReveal from 'scrollreveal';

import { reCaptcha } from '../../config/reCaptcha.js';

// Home Page
var Homepage = Barba.BaseView.extend({
	namespace: 'pagehome',
	onEnter: function() {
		console.log('onEnter');
	},
	onEnterCompleted: function() {
		console.log('onEnterCompleted');
		animete();
	},
	onLeave: function() {
		console.log('onLeave');
	},
	onLeaveCompleted: function() {
		console.log('onLeaveCompleted');
	}	
});
Homepage.init();


function animete()
{
	// Cars
	ScrollReveal().reveal('.Animation', { 
		origin: 'rigth', 
		easing: 'ease-in-out', 
		distance: '100%',
		duration: 1000,
		delay: 50,
		interval: 150
	});
}