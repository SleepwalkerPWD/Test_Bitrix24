$(document).ready(function(){

//Карусель

// Параллакс относительно мыши
$('header, .section__services, #cloudsParallax').mousemove(function(e){
	parallaxIt(e, ".parallax", -30);
	parallaxIt(e, ".parallaxUp", -20);
	parallaxIt(e, ".parallaxDown", -50);
	parallaxIt(e, ".parallaxFooter", -20);
});

function parallaxIt(e, target, movement) {
	var $this = $('header, .section__services, #cloudsParallax');
	var relX = e.pageX - $this.offset().left;
	var relY = e.pageY - $this.offset().top;

	TweenMax.to(target, 1, {
		x: (relX - $this.width() / 2) / $this.width() * movement,
		y: (relY - $this.height() / 2) / $this.height() * movement,
	});
}

//Облака опускаются вниз
//Header
$(document).scroll(function(){

	var st = $(this).scrollTop();

	$("#cloudsParallax").css({
		"transform" : "translate(0%, " + st /30  + "%"

	})

});

//Center
$(window).scroll(function(){

  var st2 = $(this).scrollTop();

  if (st2 > 2300) {
	$('.clouds__center-wrapper').css({
		"transform" : "translate(0%, " + st2 /350  + "%"

	})

  }

 });


});