$(document).ready(function() {
  var bMenu = 1;
    $('.putmenu').click(function(){   
    if(bMenu == 1){
      $('.nav').show('');
      bMenu = 0;
    }
    else
    {
      $('.nav').hide('');
      bMenu = 1;
    }
  });
    
  var faqContainer = $('.body-faq');
  $(document).on('click', '.item-faq', function(e) {
    e.preventDefault();
    faqContainer.find('.answer').hide();
    $(this).find('.answer').show('');
  });


  $('.bxsliderCustomersSay').bxSlider({
    pagerCustom: '#bx-pager',
    auto: true,
    mode: 'fade',
    pager:false,
    speed: 500,
    pause: 6000,
    controls: true
  });  

  $('.owl-carousel-customers').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items: 5,
            nav: true,
            dots: false,
            loop: false,
            margin: 20,
        }
    }
  })

  //Get the button
  let mybutton = document.getElementById("btn-back-to-top");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  mybutton.addEventListener("click", backToTop);

  function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
});