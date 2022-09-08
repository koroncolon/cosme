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

$(function(){
    $('#subImg img').on('click',function(){
        //mainに切り替えるimgのsrc取得
        img = $(this).attr('src');
        //currentクラス付け替え
        $('#subImg li').removeClass('current');
        $(this).parent().addClass('current');
        //fadeOutできたらsrc変更してfadeIn
        $('#mainImg img').fadeOut(50, function() {
            $('#mainImg img').attr('src', img).on('load', function() {
                 $(this).fadeIn();
            })
       })
    });
});
