var location = window.location.origin;

var PT = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAHjSURBVHjaYmRIZkCAfwwMf2DkLzCCMyDoBwNAALEAlTVGN/5nYPj//x8Q/P3/9++/vzZa31gY/mw5z/Tn3x8g98+f37///fn99/eq2lUAAQTS8J/h/7NPz/9C5P79WRj89f9/zv//fztLvPVezPzrz+8/f3//+vtLhl8GaANAAIE1/P8PVA1U6qn7NVTqb1XVpAv/JH7/+a/848XmtpBlj39PO8gM1PP7z2+gqwACiAnoYpC9TF9nB34NVf5z4XpoZJbEjJKfWaEfL7KLlbaURKj8Opj08RfIVb+BNgAEEBPQW1L8P+b6/mb6//s/w+/+nc4F0/9P2cj65xdHc+p/QR39//9/AdHJ9A/60l8YvjIABBAT0JYH75jStv75zwCSMBY8BXTMxXv/21ezfHj9X5/3BESDy5JfBy7/ZuBnAAggkA1//vx594kpaCnLloe/smLaVT9/ff3y/+/P/w+u/+JuW7fhwS/tSayPXrOycrEyfGQACCAWoA1//oOCDIgm72fu4vy6b4LD/9/S/3///s9+S28yy+9/LEAf//kLChVgCAEEEEjD7z9/JHgkQeHwD8gUjV79O9r6CzPLv6lr1OUFwWH9Fxjcv//9BcYoA0AAMTI4ImIROUYRMf2XARkABBgA8kMvQf3q+24AAAAASUVORK5CYII=" title="Português" alt="Português">';
var EN = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAflJREFUeNpinDRzn5qN3uFDt16+YWBg+Pv339+KGN0rbVP+//2rW5tf0Hfy/2+mr99+yKpyOl3Ydt8njEWIn8f9zj639NC7j78eP//8739GVUUhNUNuhl8//ysKeZrJ/v7z10Zb2PTQTIY1XZO2Xmfad+f7XgkXxuUrVB6cjPVXef78JyMjA8PFuwyX7gAZj97+T2e9o3d4BWNp84K1NzubTjAB3fH0+fv6N3qP/ir9bW6ozNQCijB8/8zw/TuQ7r4/ndvN5mZgkpPXiis3Pv34+ZPh5t23//79Rwehof/9/NDEgMrOXHvJcrllgpoRN8PFOwy/fzP8+gUlgZI/f/5xcPj/69e/37//AUX+/mXRkN555gsOG2xt/5hZQMwF4r9///75++f3nz8nr75gSms82jfvQnT6zqvXPjC8e/srJQHo9P9fvwNtAHmG4f8zZ6dDc3bIyM2LTNlsbtfM9OPHH3FhtqUz3eXX9H+cOy9ZMB2o6t/Pn0DHMPz/b+2wXGTvPlPGFxdcD+mZyjP8+8MUE6sa7a/xo6Pykn1s4zdzIZ6///8zMGpKM2pKAB0jqy4UE7/msKat6Jw5mafrsxNtWZ6/fjvNLW29qv25pQd///n+5+/fxDDVbcc//P/zx/36m5Ub9zL8+7t66yEROcHK7q5bldMBAgwADcRBCuVLfoEAAAAASUVORK5CYII=" title="English" alt="English">';
var ES = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAIAAAD5gJpuAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAFnSURBVHjaYvzPgAD/UNlYEUAAmuTYAAAQhAEYqF/zFbe50RZ1cMmS9TLi0pJLRjZohAMTGFUN9HdnHgEE1sDw//+Tp0ClINW/f0NIKPoFJH/9//ULyGaUlQXaABBALAx/Gf4zAt31F4i+ffj3/cN/XrFfzOx//v///f//LzACM/79ZmD8/e8TA0AAMYHdDVT958vXP38nMDB0s3x94/Tj5y+YahhiAKLfQKUAAcQEdtJfoDHMF2L+vPzDmFXLelf551tGFOOhev4A/QgQQExgHwAd8IdFT/Wz6j+GhlpmXSOW/2z///8Eq/sJ18Dw/zdQA0AAMQExxJjjdy9x2/76EfLz4MXdP/i+wsyGkkA3Aw3984cBIIAYfzIwMKel/bt3jwEaLNAwgZIQxp/fDH/+MqqovL14ESCAWICeZvr9h0FSEhSgwBgAygFDEMT+wwAhgQgc4kAEVAwQQIxfUSMSTxxDAECAAQAJWke8v4u1tAAAAABJRU5ErkJggg==" title="Español" alt="Español">';

function scrollToAnchor(tag){
    var aTag = $(tag);
    $('html,body').animate({scrollTop: aTag.offset().top - 50},'slow');
}

function logo(el)
{
    var a = document.getElementById("logo-svg");
    var svgDoc = a.contentDocument;
    var svg = $(svgDoc).find('svg');
    var svgItem = $(svgDoc).find('#Redes_de_proteção');
    if(el == 0)
    {
        $(svg).removeAttr('viewBox');
        $(svg).each(function()
        {
            $(this)[0].setAttribute('viewBox', '0 0 370 162')
        });
        $(svgItem).show();
    }
    else
    {
        $(svg).removeAttr('viewBox');
        $(svg).each(function()
        {
            $(this)[0].setAttribute('viewBox', '0 0 370 135')
        });
        $(svgItem).hide();
    }
}

function getElement()
{
    $('.menu a').clickOrTouch(function(e) {
        e.preventDefault();
        var el = $(this).parent().attr('id');
        if( el != 'menu-item-141' && el != 'menu-item-142' && el != 'menu-item-143' && el != 'menu-item-144' && 
            el != 'menu-item-1229' && el != 'menu-item-1228' && el != 'menu-item-1229' && el != 'menu-item-1231' &&
            el != 'menu-item-1237' && el != 'menu-item-1238' && el != 'menu-item-1239' && el != 'menu-item-1240')
        {
            var link = $(this).attr('href');
            var res = link.replace("#", ".");
            scrollToAnchor(res);
            history.pushState({}, '', location+link);
            $('.menu-mobile').find('.icon').removeClass('open');
            $('.box-menu').removeClass('open');
            $('body').removeClass('block-scroll');
        }
    });
}
getElement();

function minify()
{
    minify_expend($(window).scrollTop());
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        minify_expend(scroll);
    });
}
minify();

function remove_menu_lg()
{

    switch(getCookie('pll_language'))
    {
        case 'pt':
            var a = $('#menu-item-141').find('.sub-menu a');
            a.each(function(index, element){
                if($(element).text().toLowerCase() == getCookie('pll_language'))
                {
                    $(element).parent().remove();
                    $('#menu-item-141 a').first().text($(element).text());
                    $('#menu-item-141 a').first().append(PT);
                    $('.link-logo').attr('href', $(element).attr('href'));
                    $('.nova-mensagem').attr('href', $(element).attr('href'));
                }
            });
        break;
        case 'en':
            var a = $('#menu-item-1228').find('.sub-menu a');
            a.each(function(index, element){
                if($(element).text().toLowerCase() == getCookie('pll_language'))
                {
                    $(element).parent().remove();
                    $('#menu-item-1228 a').first().text($(element).text());
                    $('#menu-item-1228 a').first().append(EN);
                    $('.link-logo').attr('href', $(element).attr('href'));
                    $('.nova-mensagem').attr('href', $(element).attr('href'));
                }
            });
        break;
        case 'es':
            var a = $('#menu-item-1237').find('.sub-menu a');
            a.each(function(index, element){
                if($(element).text().toLowerCase() == getCookie('pll_language'))
                {
                    $(element).parent().remove();
                    $('#menu-item-1237 a').first().text($(element).text());
                    $('#menu-item-1237 a').first().append(ES);
                    $('.link-logo').attr('href', $(element).attr('href'));
                    $('.nova-mensagem').attr('href', $(element).attr('href'));
                }
            });
        break;
    }
}
remove_menu_lg();


function add_bandeiras()
{
    var a = $('.sub-menu a');
    a.each(function(index, element){
        switch($(element).text().toLowerCase())
        {
            case 'pt':
                $(element).append(PT);
            break;
            case 'en':
                $(element).append(EN);
            break;
            case 'es':
                $(element).append(ES);
            break;
        }
    });
}
add_bandeiras();

function minify_expend(scroll)
{
	if(scroll == 0)
	{
		$('header').removeClass('minify');
        logo(0);
	}
	else
	{
		$('header').addClass('minify');
        logo(1);
	}
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function toggleMenuLang()
{
    $('#menu-item-141, #menu-item-1228, #menu-item-1237').clickOrTouch(function(e) {
        e.preventDefault();
        $(this).find('.sub-menu').toggleClass('open', 'open');
        $(this).toggleClass('open', 'open');
    });    
}
toggleMenuLang();

function changeHrefMenuLang()
{
    $('#menu-item-141 ul li a, #menu-item-1228 ul li a, #menu-item-1237 ul li a').clickOrTouch(function(e) {
        e.preventDefault();
        window.location.href = $(this).attr('href');
    });
}
changeHrefMenuLang();

function toggleMenu()
{
    $('.menu-mobile').clickOrTouch(function() {
        $(this).find('.icon').toggleClass('open', 'open');
        $('.box-menu').toggleClass('open', 'open');
        $('body').toggleClass('block-scroll', 'block-scroll');
    });    
}
toggleMenu();