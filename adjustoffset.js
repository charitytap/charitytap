// JavaScript Document
var newheight = 0;
var offsetmain = Math.round($('#main').offset().top); //not exact because they are set by viewport size (screen height may divide weird) or not set at all
var offsetgame = Math.round($('#general').offset().top); 
var offsetdownload = Math.round($('#download').offset().top);
var headerheight = 74;

$(window).on('scroll', function() {
	if(window.pageYOffset == offsetmain) {
		newheight = offsetmain - headerheight;
		window.scrollTo(0, newheight); 
	} else if(window.pageYOffset == offsetgame) {
		newheight = offsetgame - headerheight;
		window.scrollTo(0, newheight); 
	} else if(window.pageYOffset == offsetdownload) {
		newheight = offsetdownload - headerheight;
		window.scrollTo(0, newheight); 
	}
});

//this could be done better by onclick header elements