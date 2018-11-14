import customSelect from 'custom-select';
import validate from 'jquery-validation'

function inputs_select()
{
	customSelect('select');
	$('#form-contato input, #form-contato textarea').focus(function(){

		console.log('A');

		$(this).parent().find('.placeholder').addClass('active');
		$(this).addClass('active');
	})

	$('#form-contato input, #form-contato textarea').focusout(function() {
		if($(this).val().length == 0)
		{
			$(this).parent().find('.placeholder').removeClass('active');
			$(this).removeClass('active');
		}
	})

	$('.custom-select-option').clickOrTouch(function(){
		if($(this).data('value').length == 0)
		{
			$(this).parent().parent().parent().find('.placeholder').removeClass('active');
		}
		else
		{
			$(this).parent().parent().parent().find('.placeholder').addClass('active');
			$(this).parent().parent().find('select').removeClass('error').addClass('valid');
			$(this).parent().parent().find('label.error').hide();
		}
	});
}
inputs_select()

function validate_contato()
{
	$("#form-contato").validate({
		rules: {
			nome: "required",
			telefone: "required",
			email: {
				required: true,
				email: true
			},
			assunto: "required"
		},
		messages: {
			nome: "Por favor, especifique seu nome",
			telefone: "Precisamos do seu telefone para entrar em contato",
			email: {
				required: "Precisamos do seu endereço de e-mail para entrar em contato",
				email: "Seu endereço de e-mail deve estar no formato name@domain.com"
			},
			assunto: "Selecione um assunto"
		}
	});
}
validate_contato();

grecaptcha.ready(function() {
	grecaptcha.execute(SITE_KEY, {action: 'homepage'})
	.then(function(token) {
		document.getElementById('g-recaptcha-response').value = token;
	});
});

$('.submit').clickOrTouch(function(e){
	if($("#form-contato").valid())
	{
		contato_send();
	}
})

function show_grecaptcha()
{
	$(window).scroll(function (event) {
	    var scroll = $(window).scrollTop();
	    if($('.contato').offset().top - 50 <= scroll)
	    {
	    	$('.grecaptcha-badge').addClass('active');
	    }
	    else
	    {
	    	$('.grecaptcha-badge').removeClass('active');
	    }
	});
}
show_grecaptcha();

function contato_send()
{
	$.ajax({
		type: "POST",
		url: '/wp-admin/admin-ajax.php',
		data: {
			'action': 'post_contato',
			'fitlers': {
				'post': $('#post-id').val(),
				'nome': $('#nome').val(),
				'telefone': $('#telefone').val(),
				'email': $('#email').val(),
				'assunto': $('#assunto').val(),
				'mensagem': $('#mensagem').val(),
				'token': $('#g-recaptcha-response').val(),
				'utm_source': $('#utm_source').val(),
				'utm_medium': $('#utm_medium').val(),
				'utm_content': $('#utm_content').val(),
				'utm_campaign': $('#utm_campaign').val(),
				'utm_term': $('#utm_term').val(),
			}
		},
		beforeSend: function(result) {
			$('#form-contato .submit span').hide();
			$('#form-contato .profile-main-loader').fadeIn();
		},
		success: function(result) {
			$('#form-contato .submit span').fadeIn();
			$('#form-contato .profile-main-loader').fadeOut();
			$('#form-contato .descricao').fadeOut();
			$('#form-contato').hide();
			var obj = $.parseJSON(result);
			$('.contato .mensagem h3').text(obj.status);
			$('.contato .mensagem').addClass('active');
		}
	});
}

function scrollToAnchor(tag){
    var aTag = $(tag);
    $('html,body').animate({scrollTop: aTag.offset().top - 50},'slow');
}

$('.btn-contato').clickOrTouch(function(){
	scrollToAnchor('.contato');
});