function toggleDuvidas()
{
	$('.duvidas .titulo').clickOrTouch(function(){
		if($(this).hasClass('active'))
		{
			$(this).parent().find('.descricao').removeClass('active', 'active');
			$(this).removeClass('active', 'active');
		}
		else
		{
			$('.descricao').removeClass('active');
			$('.duvidas .titulo').removeClass('active');
			$(this).parent().find('.descricao').addClass('active', 'active');
			$(this).addClass('active', 'active');
		}
	});
}
toggleDuvidas();