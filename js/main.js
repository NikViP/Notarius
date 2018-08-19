//function tick(){
//  $(".notarial-action-list li:first").slideUp(function(){
//    $(this).appendTo($(".notarial-action-list")).slideDown();
//  });
//};
//
//setInterval(function(){
//  tick();
//}, 5000);

01
$(document).ready(function(){
  02
  $('.navigation-list a').click(function(){
    03
    /*задали какой мы хотим отступ от верха страницы*/
    04
    var otstupTop=100;
    05
    $('body,html').animate({
      06
      /*получили положение элемента вычли отступ и прокрутили*/
          07
      scrollTop: $($(this).attr('href')).offset().top-otstupTop
      08
    }, 1500);
    09
  });
  10
});


