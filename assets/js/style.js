$(document).ready(function(){
    $("#show-hide1").click(function(){
      $(".related-recipe").toggle();
    });
  });
  $(document).ready(function(){
    $("#show-hide2").click(function(){
      $(".related-recipe").toggle();
    });
  });
  $(document).ready(function(){
    $("#show-hide3").click(function(){
      $(".related-recipe").toggle();
    });
  });


  $(".nav-link").click(function(e){
    let objetivo = $(this).attr('href')
    e.preventDefault()
    $("html,body") .animate({
      scrollTop: $(objetivo).offset().top
    },300)
  })


  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })