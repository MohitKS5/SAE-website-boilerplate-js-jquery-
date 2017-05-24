var grow_img= function grow_img(argument){
  $(argument).parent().find('.navarrow').animate({      
  },1);
  console.log($(argument).prev());
 };

var shrink_img= function shrink_img(argument) {
   $(argument).parent().find('.navarrow').animate({
    opacity : '0'
  },1);
};

var move_to_top=function move_to_top() {
  $('li.indicator-item').first().trigger('click');
};

var enablescroll=function enablescroll(arg){
  $('#map').addClass('clicked');
  alert('click'); 
};

var chng_color=function chng_color(arg){
  $(arg).addClass('red_clr');
};

var funL=function funL($this){$($this).parent().find('a.flex-prev').trigger('click');};
var funR=function funR($this){$($this).parent().find('a.flex-next').trigger('click');};

$(document).ready(function() {
   $(document).scrollTop(0);
  $("#loader").delay(1000).fadeOut("slow", function(){// will first fade out the loading animation
  $("#_preloader").fadeOut("slow");// will fade out the whole DIV that covers the website.
  }); 
       
  $("#_homepagecarousel>img:not(:nth-child(1))").hide();

  setInterval(function() { 
    $('#_homepagecarousel > img:first')
      .fadeOut(1500)
      .next()
      .fadeIn(1500)
      .end()
      .appendTo('#_homepagecarousel');
    },  3000);
});
    
  $(window).load(function(){
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 210,
        itemMargin: 5,
        pausePlay: true,
        start: function(slider){
          $('body').removeClass('loading');
        }
    });
  
  $('a.flex-pause').hide();
  
  var navelement2="<span onclick='funL(this)' class='navarrow L'></span>",
  navelement="<span onclick='funR(this)' class='navarrow R'></span>";
  $('.slider').prepend(navelement).prepend(navelement2);
  

if($("li.indicator-item").first().hasClass('active')){
  $('li.indicator-item').addClass('glow_class');
}
else{
  $('li.indicator-item').removeClass('glow_class');
}

var secondaryNavTopPosition =$('ul.indicators').offset().top;

$(window).on('scroll', function(){
    if($(window).scrollTop() > secondaryNavTopPosition ) {
      setTimeout(function() {
        $('._navbar').fadeIn();
        $('#tabs').css({
          "background-color" : "white"
        });
        $('#tabs>a').css({
          "color" : "black",
          "letter-spacing" : "1px",
          "font-size" : "1.2rem"
         });

        $('.soc-links').fadeIn(500);
        $('#home').css({"margin-left" : "30%"});
      }, 50);
    } 
    else {
      setTimeout(function() {
        $('._navbar').fadeOut(0);
        $('.soc-links').fadeOut();
        $('#tabs>a').css({"font-size" : "2rem"});
      }, 50);
       
    }
  });
});
  



    