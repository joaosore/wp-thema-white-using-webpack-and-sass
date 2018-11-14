function scrollToAnchor(tag){
    var aTag = $(tag);
    $('html,body').animate({scrollTop: aTag.offset().top - 50},'slow');
}
$('.btn-instaladores').clickOrTouch(function(e) {
    e.preventDefault();
    var link = $(this).attr('href');
    var res = link.replace("#", ".");
    scrollToAnchor(res);
    history.pushState({}, '', '');
});