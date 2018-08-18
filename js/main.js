$(document).ready(function(){
  $('.navColumn ul li').click(function(){
    var blockId = $(this).attr('data-block');
    $(this).addClass('activeTab');
    $(this).siblings().removeClass('activeTab');
    $('.tabActive').fadeOut('', function(){
      $(this).removeClass('tabActive');
      $('.tabBlock' + blockId).fadeIn('');
      $('.tabBlock' + blockId).addClass('tabActive');
    });
  });

  ymaps.ready(init);
   function init(){
       var myMap = new ymaps.Map("map", {
           center: [55.978468, 37.173320],
           zoom: 14
       });
       var myPlacemark = new ymaps.Placemark([55.978468, 37.173320]);
       myMap.geoObjects.add(myPlacemark);

       myMap.behaviors.disable('drag');
       myMap.behaviors.disable('scrollZoom');
   }

   var swiper = new Swiper('.swiper-container', {
     autoplay:{
       delay: 5000
     },
     slidesPerView: 4,
     spaceBetween:20,
     loop: true,
     breakpoints:{
       991:{
         slidesPerView: 3,
       },
       575:{
         slidesPerView:1,
       }
     }
    });

    $('.goalTab').click(function(){
      var tabId = $(this).attr('data-goal');
      $(this).addClass('goalTab-active');
      $(this).siblings().removeClass('goalTab-active');
      $(this).parent().siblings('.goal-active').fadeOut('', function(){
        $(this).removeClass('goal-active');
        $(this).siblings('.' + tabId).fadeIn('');
        $(this).siblings('.' + tabId).addClass('goal-active');
      });
    });

    $('.hamburger').click(function(){
      $(this).toggleClass('is-active');
      $('nav').slideToggle('');
    });

    $('.navigation nav ul li a').click(function(){
      $('nav').slideToggle('');
    });
});
