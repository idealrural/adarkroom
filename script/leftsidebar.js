/**
 * Module that registers the LeftSideBar box and handles messages
 */
var LeftSideBar = {
	
	more: false,
	font_size: 100,
	
	init: function(options) {
		this.options = $.extend(
			this.options,
			options
		);
		
		// mobile
		elem = $('<div>').attr({
			id: 'leftsidebar',
			className: 'leftsidebar'
		});

		
		var  closeWrapper = $('<div>')
			.css('width', '100%')
			.css('padding', '50px 0')
			.css('background-color', 'whitesmoke');
		
		var close = $('<div>').text('X')
			.css('border', '1px black solid')
			.css('display', 'inline-block')
			.css('width', '30%')
			.click(function() {
				$('#leftsidebar').animate({left:"-100px"});
					LeftSideBar.more = false;
			});

		close.appendTo(closeWrapper);
		closeWrapper.appendTo(elem);

		var  fontAWrapper = $('<div>')
			.css('width', '100%')
			.css('padding', '50px 0')
			.css('background-color', 'whitesmoke');
		
		var fontA = $('<div>').text('Font+')
			.css('display', 'inline-block')
			.css('width', '30%')
			.click(function() {
				LeftSideBar.font_size += 10;
				$('body').css('font-size', LeftSideBar.font_size.toString()+'%');
				window.localStorage.setItem("font-size", LeftSideBar.font_size.toString());
			});
			
		fontA.appendTo(fontAWrapper);
		fontAWrapper.appendTo(elem);
		
		var fontMWrapper = $('<div>')
			.css('width', '100%')
			.css('padding', '10px 0')
			.css('background-color', 'whitesmoke');

		var fontM = $('<div>').text('Font-')
			.css('display', 'inline-block')
			.css('width', '30%')
			.click(function() {
				LeftSideBar.font_size -= 10;
				if (LeftSideBar.font_size < 10) LeftSideBar.font_size = 10;
				$('body').css('font-size', LeftSideBar.font_size.toString()+'%');
				window.localStorage.setItem("font-size", LeftSideBar.font_size.toString());
			});
			
		fontM.appendTo(fontMWrapper);
		fontMWrapper.appendTo(elem);
			
		// Create the transparency gradient
		// $('<div>').attr('id', 'sidebarGradient').appendTo(elem);
		
		elem.appendTo('div#wrapper');
	},
	
	options: {}, // Nothing for now
	
	elem: null,
	
	
};
