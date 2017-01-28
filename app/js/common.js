$(function(){
	$('header').mousemove(function(e) {
		var x = e.pageX, y = e.pageY;
		$('header').css('background-position', (x/200)+'% '+(44+(y/200))+'%');
	});

	$(window).on('scroll', function (){
		var st = $(this).scrollTop();
		var orderTop = $('#order').offset();
		var galleryTop = $('#gallery').offset();
		var pricesTop = $('#prices').offset();
		var contactsTop = $('#contacts').offset();
		$('#order img').css({'transform': 'translateY('+(-st/6+(st-orderTop.top))+'px)'});
		$('.orderBlock').css({'transform': 'translateY('+st/2+'px)'});
		$('.bg-gallery').css({'transform': 'translateY('+(-st/10+(st-galleryTop.top))+'px)'});
		$('#prices img').css({'transform': 'translateY('+(-st/10+(st-pricesTop.top))+'px)'});
		$('#contacts img').css({'transform': 'translateY('+(-st/10+(st-contactsTop.top))+'px)'});
		var navHeight = $('header').height();
		if (st > navHeight) {
			$('.upButton').css('display', 'block');
		} else {
			$('.upButton').css('display', 'none');
		}
	});

	$('.upButton').on('click', function() {
		$('body').animate({scrollTop:0}, 1500);
	});

	$(document).ready(function(){
		$(".fancybox").fancybox()
	});

	$('li a').on('click', function() {
		var menuElem = $(this).attr("href");
		var x = $(menuElem).offset();
		$('body').animate({scrollTop: x.top}, 1500);

		console.log(x);
	})
	

	
	
});