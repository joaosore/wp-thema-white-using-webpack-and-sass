var i = 0;
var count_pais = 0;
var count_estado = 0;
var count_cidade = 0;

$('input[name="instaladores"]').keyup(function(){

	var myRegex = /[^a-zA-Z0-9]/;
	var lastKey = this.value.substr(this.value.length - 1);
	
	if($(this).val().length == 0)
	{
		$('.input-autocomplite').removeClass('active');
	}
	else
	{
		if(myRegex.test(lastKey))
		{
			if(i == 1)
			{
				get(this.value);
				i = 0;
			}
		}

		if(!myRegex.test(lastKey)){
			get(this.value);
		}
		else
		{
			i = 1;
		}
	}
});

function not_result()
{
	if(count_pais == 0 && count_estado == 0 && count_cidade == 0)
	{
		$('.sem-resultado').show();
	}
	else
	{
		$('.sem-resultado').hide();
	}
}

function set_cidades($arr)
{
	if($arr.length == 0)
	{
		$('.cidade').hide();
		$('.cidade').removeClass('active');
	}
	else
	{
		$('.cidade').show();
		$('.cidade').addClass('active');
	}

	count_cidade = $arr.length;

	$('.cidade .line').empty();
	$.each($arr, function( index, value ) {
		$('.cidade .line').append('<div class="item">'+value+'</div>');
	});
}

function set_estado($arr)
{

	if($arr.length == 0)
	{
		$('.estado').hide();
		$('.estado').removeClass('active');
	}
	else
	{
		$('.estado').show();
		$('.estado').addClass('active');
	}

	count_estado = $arr.length;

	$('.estado .line').empty();
	$.each($arr, function( index, value ) {
		$('.estado .line').append('<div class="item">'+value+'</div>');
	});
}

function set_pais($arr)
{

	if($arr.length == 0)
	{
		$('.pais').hide();
		$('.pais').removeClass('active');
	}
	else
	{
		$('.pais').show();
		$('.pais').addClass('active');
	}

	count_pais = $arr.length;

	$('.pais .line').empty();
	$.each($arr, function( index, value ) {
		$('.pais .line').append('<div class="item">'+value+'</div>');
	});
}

function hideHR()
{
	var pais = $('.pais').hasClass('active');
	var estado = $('.estado').hasClass('active');
	var cidade = $('.cidade').hasClass('active');

	var HRpais = $('.hr-pais');
	var HRestado = $('.hr-estado');

	if((pais == true && estado == true) || pais == true && cidade == true)
	{
		HRpais.show();
	}
	else
	{
		HRpais.hide();
	}

	if(estado == true && cidade == true)
	{
		HRestado.show();
	}
	else
	{
		HRestado.hide();
	}
}

function get(value)
{
	$('.input-autocomplite').removeClass('active');
	$.ajax({
		type: "POST",
		url: '/wp-admin/admin-ajax.php',
		data: {
			'action': 'post_filter_instaladores',
			'fitlers': value
		},
		success: function(result) {
			var obj = $.parseJSON(result);

			var seletor = obj.seletor;
			var results = $.parseJSON(obj.value);

			var cidade = results.cidade;
			var estado = results.estado;
			var pais = results.pais;

			set_cidades(filterItems(seletor, cidade));
			set_estado(filterItems(seletor, estado));
			set_pais(filterItems(seletor, pais));

			hideHR();
			not_result();
			$('.input-autocomplite').addClass('active');
		}
	});
}

function filterItems(needle, heystack)
{
	return heystack.filter(item => slugify(item.toLowerCase()).indexOf(slugify(needle.toLowerCase())) >= 0) ;
}

function slugify(str) {
  str = str.toLowerCase();
  str = str.replace(/^\s+|\s+$/g, '');
  const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  const to   = "aaaaaeeeeeiiiiooooouuuunc------";
  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }
  str = str.replace(/[^a-z0-9 -]/g, '');
  return str;
};