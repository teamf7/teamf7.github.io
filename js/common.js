$(document).ready(function() {


	$("#projects-items").mixItUp();

	$(".s-projects li").click(function () {
		$(".s-projects li").removeClass("active");
		$(this).addClass("active");
	});

	$('.popup_content').magnificPopup({
		type: 'inline',
		midClick: true
	});

	$(".project-item").each(function (i) {
		$(this).find("a").attr("href","#work_"+i);
		$(this).find(".podrt-descr").attr("id","work_"+i);
	});

	$('.img-popup').magnificPopup({type:'image'});

	$(".top-menu-bottom").click(function () {
		$(".top-line ul").slideToggle();
	});
	//OWL carousel
	var owl = $(".slider");
	owl.owlCarousel({
		stagePadding: 0,
		loop:true,
		items:1,
		itemClass: "slide-wrap",
		nav: true,
		navText: "",
		dots: false,
		autoHeight: true,
		autoHeightClass:"slider-wrap",
		mouseDrag: false
	});
	$(".next").click(function () {
		owl.trigger('next.owl.carousel');
	});
	$(".prev").click(function () {
		owl.trigger('prev.owl.carousel');
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	/*
	 * Replace all SVG images with inline SVG
	 */
	$('img.img-svg').each(function(){
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
			}

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});

	$("input, select, textarea").not("[type=submit]").jqBootstrapValidation();
	$(".loaderInner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");
});

