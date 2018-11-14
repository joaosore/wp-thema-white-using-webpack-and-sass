var indexDefault = 0;
function owl_prev_thumb(index, length, owl_carousel, owl_thumb, el)
{
    if(index < length)
    {
        if(index != -1)
        {
            $(el).removeClass('disabled');
            owl_Change(owl_carousel, owl_thumb, index);
        }
        if(index == 0)
        {
            $(el).addClass('disabled');
        }
    } 
}

function owl_next_thumb(index, length, owl_carousel, owl_thumb, el)
{
    if(index < length)
    {
        $(el).removeClass('disabled');
        owl_Change(owl_carousel, owl_thumb, index);
    } 
    if(index == length - 1)
    {
        $(el).addClass('disabled');
    }
}

function owl_Change(owl_carousel, owl_thumb, index)
{
    $(owl_thumb).find('.owl-item').removeClass('active');
    if(indexDefault < index)
    {
        $(owl_thumb).find('.owl-item').removeClass('active-mask');
        $(owl_thumb).find('.owl-item').eq(index).addClass('active-mask');
        owl_carousel.trigger('to.owl.carousel',  [index]);
        indexDefault = index;
    }
    if(indexDefault > index)
    {
        $(owl_thumb).find('.owl-item').removeClass('active-mask');
        $(owl_thumb).find('.owl-item').eq(index).addClass('active-mask');
        owl_carousel.trigger('to.owl.carousel',  [index]);
        indexDefault = index;
    }
}

function owl_Thumb(index, mask_index, owl_thumb)
{
    if(mask_index < index)
    {
        owl_thumb.trigger('next.owl.carousel');
    }
    if(mask_index > index)
    {
        owl_thumb.trigger('prev.owl.carousel');
    }
}

function owl_events(owl, owl_thumb)
{   
    owl.owlCarousel({
        loop:false,
        nav: false,
        items: 1,
        mouseDrag: false,
        touchDrag: false,
        lazyLoad: true
    });
    owl_thumb.owlCarousel({
        loop:false,
        nav:true,
        items: 4,
        margin:10,
        navText: ["",""],
        dots: false,
        mouseDrag: false,
        touchDrag: false,
        lazyLoad: true
    });

    $(owl_thumb).find('.owl-item').eq(0).addClass('active-mask');

    $(owl_thumb).find('.owl-item').clickOrTouch(function(e){
        e.preventDefault();
        var index = $(this).index();
        var mask_index = $(owl_thumb).find('.owl-item.active-mask').index();
        owl_Change(owl, owl_thumb, index);
        owl_Thumb(index, mask_index, owl_thumb);
    });

    $(owl_thumb).find('.owl-next').clickOrTouch(function(){
        var length = $(owl_thumb).find('.owl-item').length;
        var index = $(owl_thumb).find('.owl-item.active-mask').index() + 1;
        var el = $(this);
        owl_next_thumb(index, length, owl, owl_thumb, el);
    });

    $(owl_thumb).find('.owl-prev').clickOrTouch(function(){
        var length = $(owl_thumb).find('.owl-item').length;
        var index = $(owl_thumb).find('.owl-item.active-mask').index() - 1;
        var el = $(this);
        owl_prev_thumb(index, length, owl, owl_thumb, el);
    });
}

function change_menu_carousel()
{
    $('.box-carousel.residencial').addClass('active');
    $('.btn-categoria.residencial').addClass('active');

    // Desktop
    $('.box-categorias').clickOrTouch(function(){
        var el = $(this).find('.btn-categoria').data('type');
        $('.btn-categoria').removeClass('active');
        $(this).find('.btn-categoria').addClass('active');
        $('.box-carousel').removeClass('active');
        $('.box-carousel.'+el).addClass('active');
    });

    // Mobile
    $('.box-carousel-aplicacao.residencial').addClass('active');
    $('.box.mobile .btn-categoria').clickOrTouch(function(){
        indexDefault = 0;
        var el = $(this).data('type');
        if($('.box-carousel-aplicacao.'+el).hasClass('active'))
        {
            $('.box-carousel-aplicacao').removeClass('active');
            setTimeout(function(){
                $('.btn-categoria').removeClass('active');
            },50);
        }
        else
        {
            $('.btn-categoria').removeClass('active');
            $('.box-carousel-aplicacao').removeClass('active');
            $('.box-carousel-aplicacao.'+el).addClass('active');
            $('.btn-categoria.'+el).addClass('active');
        }
    });
}


function owl_carousel_residencial()
{
    //Desktop -------------------------------------------------------------------------------------------------------------------------------------
    
    var owl_residencial = $('.carousel-residencial');
    var owl_residencial_thumb = $('.carousel-residencial-thumb');
    owl_events(owl_residencial, owl_residencial_thumb);

    //Mobile -------------------------------------------------------------------------------------------------------------------------------------

    var owl_residencial_mobile = $('.carousel-residencial-mobile');
    var owl_residencial_mobile_thumb = $('.carousel-residencial-mobile-thumb');
    owl_events(owl_residencial_mobile, owl_residencial_mobile_thumb);
}


function owl_carousel_esportiva()
{
    //Desktop -------------------------------------------------------------------------------------------------------------------------------------
    
    var owl_esportiva = $('.carousel-esportiva');
    var owl_esportiva_thumb = $('.carousel-esportiva-thumb');
    owl_events(owl_esportiva, owl_esportiva_thumb);

    //Mobile -------------------------------------------------------------------------------------------------------------------------------------

    var owl_esportiva_mobile = $('.carousel-esportiva-mobile');
    var owl_esportiva_mobile_thumb = $('.carousel-esportiva-mobile-thumb');
    owl_events(owl_esportiva_mobile, owl_esportiva_mobile_thumb);
}


function owl_carousel_industrial()
{
    //Desktop -------------------------------------------------------------------------------------------------------------------------------------
    
    var owl_industrial = $('.carousel-industrial');
    var owl_industrial_thumb = $('.carousel-industrial-thumb');
    owl_events(owl_industrial, owl_industrial_thumb);

    //Mobile -------------------------------------------------------------------------------------------------------------------------------------
    
    var owl_industrial_mobile = $('.carousel-industrial-mobile');
    var owl_industrial_mobile_thumb = $('.carousel-industrial-mobile-thumb');
    owl_events(owl_industrial_mobile, owl_industrial_mobile_thumb);
}


function owl_carousel_agricola()
{
    //Desktop -------------------------------------------------------------------------------------------------------------------------------------
    
    var owl_agricola = $('.carousel-agricola');
    var owl_agricola_thumb = $('.carousel-agricola-thumb');
    owl_events(owl_agricola, owl_agricola_thumb);

    //Mobile -------------------------------------------------------------------------------------------------------------------------------------
    
    var owl_agricola_mobile = $('.carousel-agricola-mobile');
    var owl_agricola_mobile_thumb = $('.carousel-agricola-mobile-thumb');
    owl_events(owl_agricola_mobile, owl_agricola_mobile_thumb);
}

function owl_carousel_construcao_civil()
{
    //Desktop -------------------------------------------------------------------------------------------------------------------------------------
    
    var owl_construcao_civil = $('.carousel-construcao_civil');
    var owl_construcao_civil_thumb = $('.carousel-construcao_civil-thumb');
    owl_events(owl_construcao_civil, owl_construcao_civil_thumb);

    //Mobile -------------------------------------------------------------------------------------------------------------------------------------
    
    var owl_construcao_civil_mobile = $('.carousel-construcao_civil-mobile');
    var owl_construcao_civil_mobile_thumb = $('.carousel-construcao_civil-mobile-thumb');
    owl_events(owl_construcao_civil_mobile, owl_construcao_civil_mobile_thumb);
}

function resize_nav_mobile()
{
    var width = $('.box.mobile .box-carousel-aplicacao').width();
    var box_thumb_width = $('.box.mobile .box-thumb').width();
    var box_owl_stage_outer_width = $('.box.mobile .box-thumb .owl-stage-outer').width();
    var soma = (box_thumb_width-box_owl_stage_outer_width) / 2;
    $('.box.mobile .carousel-aplicacoes-thumb .owl-nav').css('width', width+'px');
    $('.box.mobile .carousel-aplicacoes-thumb .owl-nav').css('left', '-'+soma+'px');
    $(window).resize(function() {
        width = $('.box.mobile .box-carousel-aplicacao').width();
        box_thumb_width = $('.box.mobile .box-thumb').width();
        box_owl_stage_outer_width = $('.box.mobile .box-thumb .owl-stage-outer').width();
        soma = (box_thumb_width-box_owl_stage_outer_width) / 2;
        $('.box.mobile .carousel-aplicacoes-thumb .owl-nav').css('width', width+'px');
        $('.box.mobile .carousel-aplicacoes-thumb .owl-nav').css('left', '-'+soma+'px');
    });
}

setTimeout(function(){
    change_menu_carousel();
    owl_carousel_residencial();
    owl_carousel_esportiva();
    owl_carousel_industrial();
    owl_carousel_agricola();
    owl_carousel_construcao_civil();
    resize_nav_mobile();
},3000);