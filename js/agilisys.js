$(document).ready(function() {

//inicializacion flag clicks en .card de servicios
cardFlag = false;
//arreglar la muestra de iconos despues de hacer click en el card
  $('.card').click(function(event){
    $($(this).find('a').attr('href')).find('div').css(
      {
      "visibility": "visible",
      "animation-duration": "1000ms",
      "animation-delay": "100ms",
      "animation-name": "fadeInLeft"
      }
      )
    });

    //Mantener el agrande del card si se hizo click
    $('.card').click(function(){
      if (cardFlag==false) {
     $(this).css({"max-width": "100%","width": "100%"}); 
      cardFlag=true;}
      else {
      $(this).attr('class','card');
      $(this).attr('style','');
        cardFlag=false;
      }
    });
      
      
  //Agrandar card en cada hover
  /* $('.card').hover(function(){
   $($(this).find('a').attr('href')).collapse('show'),
   $($(this).find('a').attr('href')).collapse('hide')})*/
   $('[data-toggle="tooltip"]').tooltip();
   $('.dropdown-item').click(function() {
     $('html, body').animate({scrollTop: $(this.hash).offset().top},500);
     $(this.hash).parent('.collapse').collapse('show');
     });
    


});