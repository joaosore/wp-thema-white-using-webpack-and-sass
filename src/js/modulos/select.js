function var_reset()
{
	pais = '';
	estado = '';
	cidade = '';
	instalador = '';

	pais_pesquisa = false;
	estado_pesquisa = false;
	cidade_pesquisa = false;
}
var_reset();

function block_instaladores(block, status, data = null)
{
	switch(block)
	{
		case 'pais':
			if(status == 'start')
			{
				pais +=	'<div class="col-sm-12">';
				if(pais_pesquisa == true)
				{
					pais +=	'	<div class="box-pais pesquisa">';
					pais += '		<div class="box-titulo-pais">';
					pais += 			data;
					pais += '		</div>';
				}
				else if(estado_pesquisa == true || cidade_pesquisa == true)
				{
					pais +=	'	<div class="box-pais pesquisa">';
				}
			}
			else if(status == 'content')
			{
				pais += '		<!-- Estado -->';
				pais += 		estado;
			}
			else if(status == 'stop')
			{
				end_block('pais');
				pais += '	</div>';
				pais += '</div>';
			}
		break;
		case 'estado': 
			if(status == 'start')
			{
				estado +=	'<div class="col-sm-12">';
				if(pais_pesquisa == true)
				{
					estado +=	'	<div class="box-estado">';
					estado +=	'		<div class="box-titulo-estado">';
					estado +=				data;
					estado +=	'		</div>';
				}
				else if(estado_pesquisa == true)
				{
					estado +=	'	<div class="box-estado pesquisa">';
					estado +=	'		<div class="box-titulo-estado">';
					estado +=				data;
					estado +=	'		</div>';
				}
				else if(cidade_pesquisa == true)
				{
					estado +=	'	<div class="box-estado pesquisa">';
				}
			}
			else if(status == 'content')
			{
				estado +=	'		<!-- Cidade -->';
				estado +=			cidade;
			}
			else if(status == 'stop')
			{
				end_block('estado');
				estado +=	'	</div>';
				estado +=	'</div>';
			}
		break;
		case 'cidade': 
			if(status == 'start')
			{
				cidade +=	'<div class="col-sm-12">';
				if(pais_pesquisa == true || estado_pesquisa == true)
				{
					cidade +=	'	<div class="box-cidade">';
					cidade +=	'		<div class="box-titulo-cidade">';
					cidade +=				data;
					cidade +=	'		</div>';
				}
				else if(cidade_pesquisa == true)
				{
					cidade +=	'	<div class="box-cidade pesquisa">';
					cidade +=	'		<div class="box-titulo-cidade">';
					cidade +=				data;
					cidade +=	'		</div>';
				}
				cidade +=	'		<div class="row box-row-list">';
			}
			else if(status == 'content')
			{
				cidade +=		'			<!-- Instaladores -->';
				cidade +=					instalador;
			}
			else if(status == 'stop')
			{
				end_block('cidade');
				cidade +=		'		</div>';
				cidade +=		'	</div>';
				cidade +=		'</div>';
			}
		break;
		case 'instalador':
			if(status == 'start')
			{
				instalador += 	'<div class="col-lg-6 col-md-12 box">';
				instalador += 	'	<div class="list">';
				if(data.nome != false)
				{
					instalador += 	'		<div class="titulo">';
					instalador += 	'			<span>'+data.nome+'</span>';
					instalador += 	'		</div>';
				}
				if(data.telefone != false)
				{
					instalador += 	'		<div class="telefone">';
					instalador += 	'			<a class="phonemask" href="tel:+'+data.telefone_link+'" target="_blank">'+data.telefone+'</a>';
					instalador += 	'		</div>';
				}
				if(data.whatsapp != false)
				{
					instalador += 	'		<div class="whatsapp">';
					instalador += 	'			<a class="phonemask" href="https://api.whatsapp.com/send?phone='+data.whatsapp_link+'" target="_blank">'+data.whatsapp+'</a>';
					instalador += 	'		</div>';
				}
				if(data.email != 0)
				{
					instalador += 	'		<div class="email">';
					instalador += 	'			<a href="mailto:'+data.email+'" >'+data.email+'</a>';
					instalador += 	'		</div>';
				}
				if(data.website != 0)
				{
					instalador += 	'		<div class="site">';
					instalador += 	'			<a href="http://'+data.website+'" target="_blank">'+data.website+'</a>';
					instalador += 	'		</div>';
				}
				instalador += 	'	</div>';
				instalador += 	'</div>';
			}
		break;
	}
}

function mask_phone()
{
	// Telefone
	var SPMaskBehavior = function (val) {
		return val.replace(/\D/g, '').length === 10 ? '(00) 0000-00000' : '(00) 0 0000-0000';
	},
	spOptions = {
		onKeyPress: function(val, e, field, options) {
			field.mask(SPMaskBehavior.apply({}, arguments), options);
		}
	};
	$('.phonemask').mask(SPMaskBehavior, spOptions);
}
function end_block(block)
{
	switch(block)
	{
		case 'pais':
			block_instaladores('pais', 'content');
			$('.box-list').append(pais);
			mask_phone();
			$('.box-list').addClass('active');
		break;
		case 'estado':
			block_instaladores('estado', 'content');
			cidade = '';
		break;
		case 'cidade':
			block_instaladores('cidade', 'content');
			instalador = '';
		break;
	}
}

$(document).on('click touchstart', '.line .item', function(){
	get($(this).text(), $(this).parent().parent().data('type'));
});

function get(data, type)
{	
	$('.box-list').removeClass('active');
	$('input[name="instaladores"]').val('');
	$('input[name="instaladores"]').attr('placeholder', data);
	$('.input-autocomplite').removeClass('active');

	var_reset();

	$('.box-list').empty();

	switch(type)
	{
		case 'pais':
			pais_pesquisa = true;
		break;
		case 'estado':
			estado_pesquisa = true;
		break;
		case 'cidade':
			cidade_pesquisa = true;
		break;
	}

	$.ajax({
		type: "POST",
		url: '/wp-admin/admin-ajax.php',
		data: {
			'action': 'post_lista_instaladores',
			'search': data,
			'type': type
		},
		success: function(result) {
			var obj = $.parseJSON(result);
			// var results = $.parseJSON(obj.value);
			$.each( obj.value, function( key, valuePais ) {
				// console.log('Pais: ' + key);
				block_instaladores('pais', 'start', key);
				$.each( valuePais, function( key, valueEstado ) {
					// console.log('Estado: ' + key);
					block_instaladores('estado', 'start', key);
					$.each( valueEstado, function( key, valueCidades ) {
						// console.log('Cidade: ', key);
						block_instaladores('cidade', 'start', key);
						$.each( valueCidades, function( key, value ) {
							// console.log('Instaldor: ', value);
							block_instaladores('instalador', 'start', value);
						});
						block_instaladores('cidade', 'stop');
					});
					block_instaladores('estado', 'stop');
				});
				block_instaladores('pais', 'stop');
			});
		}
	});
}
