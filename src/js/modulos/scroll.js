function scrollToAnchor(tag){
    var aTag = $(tag);
    $('html,body').animate({scrollTop: aTag.offset().top - 50},'slow');
}

var hash = window.location.hash;

if(hash.length != 0)
{
	var res = hash.replace("#", ".");
	setTimeout(function(){
		scrollToAnchor(res);
	},150);
}