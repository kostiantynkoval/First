$(function(){
	$('header').mousemove(function(e) {
		var x = e.pageX, y = e.pageY;
		$('header').css('background-position', (x/200)+'% '+(44+(y/200))+'%');
	});
	/*$(window).on('resize', function setDisplay(){
		var headerHeight = $('header').height();
		var orderHeight = $('#order').height();
		var orderMarginTop = orderHeight*0.02;
		/*$('.order').css('margin-top', orderMarginTop+headerHeight+'px');
		$('section').each(function (){
			$(this).css('margin-top', orderMarginTop+'px');
		});
	});*/
	$(window).ready().trigger('resize');
	$(window).on('scroll', function (){
		var st = $(this).scrollTop();
		$('.nailFrench img').css({'transform': 'translateY('+st/3+'px)'});
		$('.orderBlock').css({'transform': 'translateY('+st/2+'px)'});
		$('.bg-gallery').css({'transform': 'translateY('+st/5+'px)'});
		$('#prices img').css({'transform': 'translateY('+st/5+'px)'});
		//console.log(65+st/15);
	})
	$(document).ready(function(){
		$(".fancybox").fancybox()
	});
	
});