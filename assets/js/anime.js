$(function(){
  $(window).on('scroll',function (){
    let triggerClass = $('.PLspeak');
        animateClass = ('is-show');
 
    $(triggerClass).each(function(){
      let scroll       = $(window).scrollTop(),
          triggerTop   = $(this).offset().top,
          windowHeight = $(window).height();
      if (scroll > triggerTop - windowHeight / 1.75){
        $(this).addClass("PLhyouji");
      }
    });
  });
});

$(function(){
  $(window).on('scroll',function (){
    let triggerClass = $('.RDspeak');
        animateClass = ('is-show');
 
    $(triggerClass).each(function(){
      let scroll       = $(window).scrollTop(),
          triggerTop   = $(this).offset().top,
          windowHeight = $(window).height();
      if (scroll > triggerTop - windowHeight / 2){
        $(this).addClass("RDhyouji");
      }
    });
  });
});

$(function(){
  $(window).on('scroll',function (){
    let triggerClass = $('.storyopa');
        animateClass = ('is-show');
 
    $(triggerClass).each(function(){
      let scroll       = $(window).scrollTop(),
          triggerTop   = $(this).offset().top,
          windowHeight = $(window).height();
      if (scroll > triggerTop - windowHeight / 2){
        $(this).addClass("SThyouji");
      }
    });
  });
});