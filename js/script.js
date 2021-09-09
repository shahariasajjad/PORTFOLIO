$(function(){

    'use script'




// TEST SLIDER NGL

$('.test_slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true,
  
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



// Menu fix js


var navOff = $('.main_menu').offset().top;

        $(window).scroll(function () {

          var scrolling = $(this).scrollTop();

          if (scrolling > 800) {
            $('.main_menu').addClass('menu_fix');
          } else {
            $('.main_menu').removeClass('menu_fix');
          }

        });






      // FORM VALIDATION PART

      // Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()


//BAck To Top btn

$(window).scroll(function () {

  var scrolling = $(this).scrollTop();

  if (scrolling > 1000) {
    $('.backtotop').fadeIn();
  } else {
    $('.backtotop').fadeOut();
  }



});

$('.backtotop').click(function () {
  $('html,body').animate({
    scrollTop: 0,
  }, 2000);
});


// $("html").niceScroll({
//   cursorcolor:"#ffce10",
//   cursorwidth:"10px",
//   cursorborder: "0px solid #3a0090",
//   background: "black",
// });



    //typed js

    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings'
  });



  AOS.init();


});