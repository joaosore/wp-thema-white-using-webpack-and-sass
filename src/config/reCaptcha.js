export function reCaptcha($form)
{	
	var SITE_KEY = '6Lf5n48UAAAAACQj8K2kBCb7495TzqdjQtwYGi-3';
	switch($form)
	{
		case 'Formulario-Flutuante':
			$.getScript('https://www.google.com/recaptcha/api.js?render='+SITE_KEY, function( data, textStatus, jqxhr ) {
				grecaptcha.ready(function() {
					grecaptcha.execute(SITE_KEY, {action: 'flutuante'})
					.then(function(token) {
						document.getElementById('g-recaptcha-response').value = token;
					});
				});
			});
			break;
	}
	
}