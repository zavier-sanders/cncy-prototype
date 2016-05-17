/* === CCI Journalist Flip Card === */ 
document.ontouchmove = function(event){
    event.preventDefault();
}

$(document).ready(function(){
  $('.cci-press-card__wrap').on("click", function(){
    $(this).toggleClass('rotate-3d');
    $('.card--back').toggleClass('z-up');
  })
})