$(function(){
	$('header').mousemove(function(e) {
		var x = e.pageX, y = e.pageY;
		$('header').css('background-position', (x/200)+'% '+(44+(y/200))+'%');
	});
	$(window).on('resize', function setDisplay(){
		var headerHeight = $('header').height();
		var orderHeight = $('.order').height();
		var orderMarginTop = orderHeight*0.04;
		$('.order').css('margin-top', orderMarginTop+headerHeight+'px');
		$('section:not(.order)').each(function (){
			$(this).css('margin-top', orderMarginTop+'px');
		});
	});
	$(window).ready().trigger('resize');
	$(window).on('scroll', function (){
		var st = $(this).scrollTop();
		$('.forest').css('background-position', 'center '+st/5+'%');
		$('.orderBlock').css({'transform': 'translateY('+st/2.2+'px)'});
		$('#gallery').css('background-position', 'center '+(35+st/17)+'%');
		console.log(35+st/17);
	})

	
});