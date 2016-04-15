/**
 * Author:
 * Fabz
 */

// require("./libs/skrollr");
// require("./libs/picturefill");

// Create a closure to maintain scope of the '$' and FBZ
;(function(FBZ, $) {

	$(function() {
		// Any globals go here in CAPS (but avoid if possible)

		// follow a singleton pattern
		// (http://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript)

		FBZ.control.init();

	});// END DOC READY
	
	FBZ.model = {
		// add your data here 
		
		windowH	: 0, //browser screen 
		windowW	: 0,
		stageH	: window.innerHeight, //total document size
		stageW	: window.innerWidth,
		currentSection : 0,
		lastScrollTop : 0, // setting initial scrolltop as top of page
		direction : 0 ,// direction of scroll 1)up -1)down 0)static
		stateObj : {},
		i18n : null,
		iconsList : ["home-icon","take-icon","side-icon","tele-icon","contact-icon"]

	};

	FBZ.view = {

		// add dom elements here
		$stage 				:$(window),
		$header				:$('header'),
		$container			:$('container'),
		$block				:$('.block'),
		$langBtn			:$('.lang-btn'),
		$footer				:$('footer'),
		$scrollIcon 		:$('.intro-scroll-icon'),
		$pagination			:$('.onepage-pagination'),
		$bg					:$('.intro-background-content'),
		//youtubePlayerArray	:[$("#player1"),$("#player2"),$("#player3")],
		$listen 			:$('.listenBtn'),
		$floatersContainer  :$('.floaters-container')
	//	$curtain 			:$('.curtain')

	};

	FBZ.control = {
		// add function here
		init : function () {
			console.debug('Zebra is running');
			FBZ.control.defineStage();
			FBZ.control.resizeContentBlock();
			FBZ.control.scrollerControl();
			FBZ.control.onResizeStage();
			FBZ.control.checkURL();
			FBZ.control.disappearScrollIcon();
		//	FBZ.control.interactiveBG();
		//	FBZ.control.youTubeControler();
		//	FBZ.control.disappearCurtain();
			FBZ.control.particuleSystem();



		},

		particuleSystem : function () { 

			console.log(FBZ.view.$floatersContainer.children);

				var diagonalDistance  = Math.sqrt( (FBZ.model.stageH*FBZ.model.stageH) + (FBZ.model.stageW*FBZ.model.stageW) );
				console.log(diagonalDistance);

				  $(".particule").each(function () {
    				   console.log("FW");
     console.log($(this),$(this).width(),$(this).height());
     				// var initPointX = 
				// var initPointY =
				// var finalPointX = 
				// var finalPointY 
    });



		},

		disappearCurtain : function () { 

	//			FBZ.view.$curtain.css(opacity,0);
				console.log("curtain");
		},

		sectionMonitor : function (index) { 

			console.log("index :", index);
		},

		youTubeControler : function () { 

		// 		// 2. This code loads the IFrame Player API code asynchronously.
		// 	var tag = document.createElement('script');

		// 	tag.src = "https://www.youtube.com/iframe_api";
		// 	var firstScriptTag = document.getElementsByTagName('script')[0];
		// 	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		//       // 3. This function creates an <iframe> (and YouTube player)
		//       //    after the API code downloads.
		//       var player;
		//       console.log(player);


  //     function onYouTubeIframeAPIReady() {
  //       player = new YT.Player('player', {
  //         height: '90%',
  //         width: '60%',
  //         videoId: 'M7lc1UVf-VE',
  //         events: {
  //           'onReady': onPlayerReady,
  //           'onStateChange': onPlayerStateChange
  //         }
  //       });
  //     }

  //     // 4. The API will call this function when the video player is ready.
  //     function onPlayerReady(event) {
  //       event.target.playVideo();
  //     }

  //     // 5. The API calls this function when the player's state changes.
  //     //    The function indicates that when playing a video (state=1),
  //     //    the player should play for six seconds and then stop.
  //     var done = false;
  //     function onPlayerStateChange(event) {
  //       if (event.data == YT.PlayerState.PLAYING && !done) {
  //         setTimeout(stopVideo, 6000);
  //         done = true;
  //       }
  //     }
  //     function stopVideo() {
  //       player.stopVideo();
  //     }

		},


		interactiveBG : function () {

			// $(".bg").interactive_bg({
			//    strength: 25,              // Movement Strength when the cursor is moved. The higher, the faster it will reacts to your cursor. The default value is 25.
			//    scale: 1.05,               // The scale in which the background will be zoomed when hovering. Change this to 1 to stop scaling. The default value is 1.05.
			//    animationSpeed: "100ms",   // The time it takes for the scale to animate. This accepts CSS3 time function such as "100ms", "2.5s", etc. The default value is "100ms".
			//    contain: true,             // This option will prevent the scaled object/background from spilling out of its container. Keep this true for interactive background. Set it to false if you want to make an interactive object instead of a background. The default value is true.
			//    wrapContent: false         // This option let you choose whether you want everything inside to reacts to your cursor, or just the background. Toggle it to true to have every elements inside reacts the same way. The default value is false
			//  });
			// $(".bg").interactive_bg(); // function call
		},

		disappearScrollIcon : function ()  { 
			FBZ.view.$scrollIcon.scroll( function () { 
				//$scrollIcon.css(alpha);
				console.log("scroll");
			});
		},
		checkURL : function () {

			$.fn.goToSectionByName();
		},
		getHeight : function (obj) {

			var value = obj.height();
			return value;
		},

		getWidth : function(obj) {

			var value = obj.width();
			return value;
		},
		defineStage : function ( ) { 

			FBZ.model.stageH = FBZ.control.getHeight(FBZ.view.$stage);
			FBZ.model.stageW = FBZ.control.getWidth(FBZ.view.$stage);
		//	console.log("def stage", FBZ.model.stageH, FBZ.model.stageW );
		},

		onResizeStage : function ()  { 

			$(window).resize(function() {
				// to re - resize the layout . 
				FBZ.control.defineStage();
				FBZ.control.resizeContentBlock();
				
				// for moving background obj
				 $(".bg > .ibg-bg").css({
			        width: $(window).outerWidth(),
			        height: $(window).outerHeight()
			      })

			}.debounce(150));

		},

		resizeContentBlock : function () { 
			FBZ.view.$block.css("width",FBZ.model.stageW);
			FBZ.view.$block.css("height",FBZ.model.stageH);
			//FBZ.view.$bg.css("height",window.innerHeight*6);

			// var dynamicPadding = ((FBZ.model.stageW+FBZ.model.stageH)*.5)*.075;
			// 			FBZ.view.$block.css("padding",dynamicPadding);

		//	console.log(FBZ.view.$block);
		},

		scrollerControl:function () {


			$(".main").onepage_scroll({
			   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
			   easing: "ease-out",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
			                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
			   animationTime: 700,             // AnimationTime let you define how long each section takes to animate
			   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
			   updateURL: true,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
			   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
			   afterMove: function(index) {},   // This option accepts a callback function. The function will be called after the page moves.
			   loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
			   keyboard: true,                  // You can activate the keyboard controls
			   responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
			                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
			                                    // the browser's width is less than 600, the fallback will kick in.
			   direction: "vertical",            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
			});

	},

		toCamelCase: function (str){
			return str.toLowerCase().replace(/(\-[a-z])/g, function($1){
				return $1.toUpperCase().replace('-','');
			});
		},

		setCss3Style: function (el,prop,val){

			var vendors = ['-moz-','-webkit-','-o-','-ms-','-khtml-',''];

			for(var i=0,l=vendors.length;i<l;i++)
				{
					var p = FBZ.control.toCamelCase(vendors[i] + prop);
					if(p in el.style)
						el.style[p] = val;
				}
		}
	};
	// Example module
	/*
	FBZ.MyExampleModule = {
		init : function () {
			FBZ.MyExampleModule.setupEvents();
		},

		setupEvents : function () {
			//do some more stuff in here
		}
	};
	*/

})(window.FBZ = window.FBZ || {}, jQuery);

var i18n;

// debounce prototype
Function.prototype.debounce = function (milliseconds) {
    var baseFunction = this,
        timer = null,
        wait = milliseconds;

    return function () {
        var self = this,
            args = arguments;

        function complete() {
            baseFunction.apply(self, args);
            timer = null;
        }

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(complete, wait);
    };
};

