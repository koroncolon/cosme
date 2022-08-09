$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 200){
              $(this).addClass('active');
            }
        });
    });
});


$(function(){
    $('.hb-icon').click(function(){
    if($('.hb-nav').hasClass('open')){
      $('.hb-nav').removeClass('open');
      $(this).removeClass('open');
      $('body').removeClass('scroll-prevent');
      $('#shadow').removeClass('open');

    }else{
      $('.hb-nav').addClass('open');
      $(this).addClass('open');
      $('body').addClass('scroll-prevent');
      $('#shadow').addClass('open');
    }
    });
});


$(function(){
    $('.hb-nav a').click(function(){
      $('.hb-nav').removeClass('open');
      $(this).removeClass('open');
      $('body').removeClass('scroll-prevent');
      $('.hb-icon').removeClass('open');   
      $('#shadow').removeClass('open');
    });
});

$(function(){
  $('#top_btn').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#top_btn').fadeIn();
    } else {
      $('#top_btn').fadeOut();
    }
  });
});
