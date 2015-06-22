// JavaScript Document

$(window).scroll(function () {
if ($(window).scrollTop() != 0) {
	$('.godown').css('display', 'none');
} else if($(window).scrollTop() == 0) {
	$('.godown').css('display', 'block');
}
});

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 150;             // set to whatever you want it to be

    if(y_scroll_pos > scroll_pos_test) {
        //do stuff
		$('header').css('background-color','#000');
    } else if(y_scroll_pos < 100) {
		$('header').css('background-color','transparent');
	}
});

