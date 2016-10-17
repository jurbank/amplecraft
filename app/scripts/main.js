'use strict';




// $('.slider').slick({
//   slidesToShow: 2,
//   arrows: false,
//   responsive: [
//      {
//       breakpoint: 1400,
//       settings: {
//         arrows: false,
//         slidesToShow: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });


  var equalheight = function(container){

  var currentTallest = 0,
       currentRowStart = 0,
       rowDivs = new Array(),
       $el,
       topPosition = 0;
   $(container).each(function() {


     $el = $(this);
     $($el).height('auto')
     var topPostion = $el.position().top;


     if (currentRowStart != topPostion) {
       for (var currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
         rowDivs[currentDiv].height(currentTallest);
       }
       rowDivs.length = 0; // empty the array
       currentRowStart = topPostion;
       currentTallest = $el.height();
       rowDivs.push($el);
     } else {
       rowDivs.push($el);
       currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
   });
  }  






$(document).ready(function() {
  var maxHeight = 0;

  $(".equalize").each(function(){
     if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
  });

  $(".equalize").height(maxHeight);

  var maxHeight2 = 0;
  $(".equalize-2").each(function(){
     if ($(this).height() > maxHeight2) { maxHeight2 = $(this).height(); }
  });

  $(".equalize-2").height(maxHeight2);
});


$(window).resize(function(){
  equalheight('.equalize');
  equalheight('.equalize-2');

});












