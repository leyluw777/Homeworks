$(document).ready(function(){
    $('.slick-slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
	autoplaySpeed: 8000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  
  ]
    });
})

$("#searchBar").hide();



$(document).ready(function(){
  $("#toggleSearch").click(function(){
    $("#searchBar").slideToggle("fast");
  })
})

$(document).ready(function(){
  $("#closeSearch").click(function(){
    $("#searchBar").slideUp("fast");
  })
})
