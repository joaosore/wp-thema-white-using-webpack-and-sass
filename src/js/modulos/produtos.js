function scrollToAnchor(tag){
    var aTag = $(tag);
    $('html,body').animate({scrollTop: aTag.offset().top - 50},'slow');
}

function produtosOpen()
{
	$('.btn-redes').clickOrTouch(function(){
		console.log('AQUI');
		$('.box-show-detalhes').addClass('show');
		$('.box-redes').addClass('active');
		$('.box-conteudo').addClass('hidden');
		$('.box-conteudo-redes').addClass('show');
		$('.box-cordas').hide();
		start_rede();
		scrollToAnchor('.produtos');
	});

	$('.btn-cordas').clickOrTouch(function(){
		$('.box-show-detalhes').addClass('show');
		$('.box-cordas').addClass('active');
		$('.box-conteudo').addClass('hidden');
		$('.box-conteudo-cordas').addClass('show');
		$('.box-redes').hide();
		start_corda();
		scrollToAnchor('.produtos');
	});
}
produtosOpen();

function produtosBack()
{
	$('.btn-redes-back').clickOrTouch(function(){
		$('.box-show-detalhes').removeClass('show');
		$('.box-redes').removeClass('active');
		$('.box-conteudo').removeClass('hidden');
		$('.box-conteudo-redes').removeClass('show');
		$('.box-cordas').show();
	});

	$('.btn-cordas-back').clickOrTouch(function(){
		$('.box-show-detalhes').removeClass('show');
		$('.box-cordas').removeClass('active');
		$('.box-conteudo').removeClass('hidden');
		$('.box-conteudo-cordas').removeClass('show');
		$('.box-redes').show();
	});
}
produtosBack();

function start_rede()
{
	$('.btn-paleta').removeClass('active');
	$('.btn-paleta[data-paleta="'+REDE_COLOR+'"]').addClass('active');
	$('.box-redes .box-img img').removeClass('active');
	$('.box-redes .box-img img[data-paleta="'+REDE_COLOR+'"]').addClass('active');
}

function start_corda()
{
	$('.btn-paleta').removeClass('active');
	$('.btn-paleta[data-paleta="'+CORDA_COLOR+'"]').addClass('active');
	$('.box-cordas .box-img img').removeClass('active');
	$('.box-cordas .box-img img[data-paleta="'+CORDA_COLOR+'"]').addClass('active');
}

function produtosPaletas()
{
	$('.box-redes .btn-paleta').clickOrTouch(function(){
		var paleta = $(this).data('paleta');
		$('.btn-paleta').removeClass('active');
		$(this).addClass('active');
		$('.box-redes .box-img img').removeClass('active');
		$('.box-redes .box-img img[data-paleta="'+paleta+'"]').addClass('active');
	});

	$('.box-cordas .btn-paleta').clickOrTouch(function(){
		var paleta = $(this).data('paleta');
		$('.btn-paleta').removeClass('active');
		$(this).addClass('active');
		$('.box-cordas .box-img img').removeClass('active');
		$('.box-cordas .box-img img[data-paleta="'+paleta+'"]').addClass('active');
	});
}
produtosPaletas();

function produtoOwl()
{
	$('.owl-carousel-paletas').owlCarousel({
	    nav: true,
	    items: 1,
	    navText: ["",""],
	    dots: true,
	    lazyLoad: true
	});

	var index = 0;
	var owl = $('.owl-carousel-paletas');
	owl.owlCarousel();
	owl.on('changed.owl.carousel', function(event) {
		setTimeout(function(){
			if($('.box-cordas').hasClass('active'))
			{
				var paleta = $('.box-cordas .owl-item.active .btn-paleta').data('paleta');
				$('.box-cordas  .btn-paleta').removeClass('active');
				$('.btn-paleta[data-paleta="'+paleta+'"]').addClass('active');
				$('.box-cordas .box-img img').removeClass('active');
				$('.box-cordas .box-img img[data-paleta="'+paleta+'"]').addClass('active');
			}

			if($('.box-redes').hasClass('active'))
			{
				var paleta = $('.box-redes .owl-item.active .btn-paleta').data('paleta');
				$('.box-redes  .btn-paleta').removeClass('active');
				$('.btn-paleta[data-paleta="'+paleta+'"]').addClass('active');
				$('.box-redes .box-img img').removeClass('active');
				$('.box-redes .box-img img[data-paleta="'+paleta+'"]').addClass('active');
			}
		},50);
	});
}
produtoOwl();