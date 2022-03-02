'use strict';
loading
var bar = new ProgressBar.Line(loading_text, {
  strokeWidth: 0,
  duration: 1000,
  trailWidth: 0,
  text: {
      style: {
          position:'absolute',
          left:'50%',
          top:'50%',
          margin:'0',
          transform:'translate(-50%,-50%)',
          'font-family':'sans-serif',
          'font-size':'1.7rem',
          color: '#696969',
      },
      autoStyleContainer: false 
  },
  step: function(state, bar) {
      bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar.animate(1.0, function () {
  $("#loading").delay(500).fadeOut(800);
});  

// 画像切り替え
$('.top img:nth-child(n+2)').hide();
setInterval(function() {
  $(".top img:first-child").fadeOut(2000);
  $(".top img:nth-child(2)").fadeIn(2000);
  $(".top img:first-child").appendTo(".top");
}, 5000);

// なめらかに動く
$(function(){
  $('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });
});

// fadein
let windowSize = $(window).height();

$(window).scroll(function() {
  let scrollPosition = $(this).scrollTop();
  if(scrollPosition > $('.movie').offset().top - windowSize) {
    $('.movie').addClass('movie_fadein');
    $('.about_text_item_top').addClass('top_text_fadein');
  }
})
$(window).scroll(function() {
  let scrollPosition = $(this).scrollTop();
  if(scrollPosition > $('.view').offset().top - windowSize) {
    $('.view').addClass('view_fadein');
    $('.about_text_item_bottom').addClass('bottom_text_fadein');
  }
})