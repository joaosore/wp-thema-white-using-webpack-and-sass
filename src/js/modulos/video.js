var mediaPlayer;

function initialiseMediaPlayer() {
   mediaPlayer = document.getElementById('video');
   mediaPlayer.controls = false;
}

if($('#video').length != 0) 
{
   initialiseMediaPlayer();
}

$('#play-pause-button').clickOrTouch(function() {
   var btn = $(this);

   if (mediaPlayer.paused || mediaPlayer.ended) {
      btn.removeClass('play');
      btn.addClass('paused');
      mediaPlayer.play();
   }
   else {
      btn.removeClass('paused');
      btn.addClass('play');
      mediaPlayer.pause();
   }
});

$(".media-controls").mouseenter(function()
{
   $('#play-pause-button').fadeIn();
   $('.mask').fadeIn();
}).mouseleave(function()
{
   if($('#play-pause-button').hasClass('paused'))
   {
      setTimeout(function(){
         $('#play-pause-button').fadeOut();
         $('.mask').fadeOut();
      }, 500);
   }
});