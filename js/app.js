if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
	alert('"The Legend of Rapunzel" interactive website does not display correctly on Safari due to some dependecies. It is recommended that you access it from Chrome.');
}

$('.img-holder').imageScroll({});

function coverImage() {
	$oWidth = (($('#cover-box').width() - $('#cover-img').width()) / 2)
      	$oHeight = (($('#cover-box').height() - $('#cover-img').height()) / 2)

      	$('#cover-img').css({
		"left": $oWidth
      	})
      	$('#cover-img').css({
      		"top": $oHeight
      	})
}

$(window).load(coverImage);
$(window).resize(coverImage);

AOS.init();

$(function() {
	$('a.page-scroll').bind('click', function(event) {
      		var $anchor = $(this);
     		$('html, body').stop().animate({
      			scrollTop: $($anchor.attr('href')).offset().top
      		}, 1500, 'easeInOutExpo');
     		event.preventDefault();
      	});
});
