$(document).ready(function(){
    $(window).scroll(function(){

        var scroll = $(window).scrollTop();
        if (scroll > 100 && scroll<=300){
            $('nav').css("background", "rgba(0,0,0, 0.3)");
        }
    
        else if (scroll >300){
            $('nav').css("background", "rgba(0,0,0, 0.7)");
        }

       else {
        $('nav').css("background", "transparent");
       }
    })
}) 

// $(document).ready(function(){
//     $("#toggle-menu").click(function(){
//         $('#collapse-menu').toggle();
//     })
// })

// $(document).ready(function(){
//     $("#close-collapse-menu").click(function(){
//         $('#collapse-menu').hide('fast');
//     })
// })

function openNav() {
    document.getElementById("collapse-menu").style.width = "400px";
    document.getElementById("collapse-menu").style.height = "100vh";
    document.getElementById("collapse-menu").style.marginRight = "400px";
    document.getElementById("collapse-menu").style.overflowY = "scroll";
    document.querySelector("body").style.overflow = "hidden";
  }
  
  function closeNav() {
    document.getElementById("collapse-menu").style.transform = "translatex: -400px";
    document.getElementById("collapse-menu").style.marginRight = "-400px";
    document.querySelector("body").style.overflowY = "scroll";
  }





// toggle.addEventListener('click', () => {
//     navbar.classList.toggle('active')
// });


SmoothScroll({
  // Время скролла 400 = 0.4 секунды
  animationTime    : 1000,
  // Размер шага в пикселях 
  stepSize         : 75,

  // Дополнительные настройки:
  
  // Ускорение 
  accelerationDelta : 40,  
  // Максимальное ускорение
  accelerationMax   : 2,   

  // Поддержка клавиатуры
  keyboardSupport   : true,  
  // Шаг скролла стрелками на клавиатуре в пикселях
  arrowScroll       : 50,

  // Pulse (less tweakable)
  // ratio of "tail" to "acceleration"
  pulseAlgorithm   : true,
  pulseScale       : 4,
  pulseNormalize   : 1,

  // Поддержка тачпада
  touchpadSupport   : true,
});



$(document).ready(function(){
  $('.slick_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    centerMode: true,
    centerPadding: '0 90px 40px 0',
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '0',
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
          arrows: false
        }
      }
     
    ]
  });

  
  

});


$(document).ready(function(){
  $('.slick_slider-2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: '.slick-nxt-btn',
    prevArrow: '.slick-prv-btn',

    // centerMode: true,
    // centerPadding: "-20%",
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          
    
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
         
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode: true,
          centerPadding: '-10%',
        }
      }
     
    ]
  });

  
  

});


$(document).ready(function(){
  $('.slick_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    centerMode: true,
    centerPadding: '0 90px 40px 0',
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '0',
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
          arrows: false
        }
      }
     
    ]
  });

  
  

});


$(document).ready(function(){
  $('.slick_slider-3').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "7%",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
         centerMode: true,
    centerPadding: "2%",
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          
          arrows: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
         
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
         
        }
      }
     
    ]
  });

  
  

});


// var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// );

$("#show-p").hide();
    $("#show-checkdiv").hide();
    $("#show-btn").hide();
    $("#show-lastp").hide();

$(document).ready(function(){
  $("#focus-input").focusin(function(){
    document.querySelector(".increase-height").style.height = "auto";
    $("#show-p").show("slow");
    $("#show-checkdiv").show("fast");
    $("#show-btn").show();
    $("#show-lastp").show();
  });
});
