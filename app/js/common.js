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
		var navHeight = $('header').height();
		console.log(-st/10+(st-orderTop.top));
		$('#order img').css({'transform': 'translateY('+(-st/10+(st-orderTop.top))+'px)'});
		$('.orderBlock').css({'transform': 'translateY('+st/2+'px)'});
		$('.bg-gallery').css({'transform': 'translateY('+(-st/10+(st-galleryTop.top))+'px)'});
		$('#prices img').css({'transform': 'translateY('+(-st/10+(st-pricesTop.top)+220)+'px)'});
		$('#contacts img').css({'transform': 'translateY('+(-st/10+(st-contactsTop.top))+'px)'});
		
		if (st > navHeight) {
			$('.upButton').css('display', 'block');
		} else {
			$('.upButton').css('display', 'none');
		}
	});

	$('.upButton').on('click', function() {
		$('body').animate({scrollTop:0}, 800);
	});

	$(document).ready(function(){
		$(".fancybox").fancybox()
	});

	$('li a').on('click', function() {
		var menuElem = $(this).attr("href");
		var x = $(menuElem).offset();
		$('body').animate({scrollTop: x.top}, 1500);
	});

	//		Форма для записи

	$("#orderVisit").fancybox({
		'scrolling'		: 'no',
		'titleShow'		: false,
		'onClosed'		: function() {
		    $("#visit_error").hide();
		}
	});

	//		Валидация обязательных строк в форме записи
	
	$("#visit_form").bind("submit", function() {

		if ($("#visit_name").val().length < 1 || $("#visit_phone").val().length < 1 || $("#visit_text").val().length < 1) 
		{
		    $("#visit_error").show();
		    //$.fancybox.resize();
		    return false;
		}

		//$.fancybox.showActivity();

		$.ajax({
			type		: "POST",
			cache	: false,
			url		: "",
			data		: $(this).serializeArray(),
			success: function(data) {
				$.fancybox(data);
				console.log(data);
			}
		});

		return false;
	});

	
	
});