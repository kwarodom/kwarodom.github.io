/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});



var div = $('.intro-heading').hide(),
   intro = ['Want To Know What Is Happening At Home','What if your parents need you?', 'Forgot to turn off appliance?' , 'Wife and kids, are they alright'];
    count = 0;

function changeIntro() {
    div.fadeIn(2000).delay(3000).fadeOut(2000, function() {
        changeIntro();
		if (count==intro.length){
			count = 0;
		};
		console.log(count)
    }).text(intro[count++]);
}

changeIntro();

$("body").addClass("animation fadeIn");

