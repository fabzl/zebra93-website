
// function startYoutubeController () { 

// 	console.log("start YOUTUBE CONTROLLER");
// };



var player1,
		player2,
		player3,
		player4,
		currentVideo,
		players = [player1,player2,player3,player4],
		youtubeAPILoaded = false;

function onYouTubeIframeAPIReady() {

		youtubeAPILoaded = true;
		player1 = new YT.Player('ytp1', {
				videoId: '1KgDMxTVy5I',
				playerVars: {
						color: 'black',
				},
				events: {
						onReady: onYoutubeReady,
						onStateChange: onYoutubeStateChange
				}
		});
		player2 = new YT.Player('ytp2', {
				videoId: 'MQJSg52iu1c',
				playerVars: {
						color: 'black',
				},
				events: {
						onReady: onYoutubeReady,
						onStateChange: onYoutubeStateChange
				}
		});
		player3 = new YT.Player('ytp3', {
				videoId: 'InGQ5SQvgXk',
				playerVars: {
						color: 'black',
				},
				events: {
						onReady: onYoutubeReady,
						onStateChange: onYoutubeStateChange
				}
		});
		player4 = new YT.Player('ytp4', {
				videoId: 'InGQ5SQvgXk',
				playerVars: {
						color: 'black',
				},
				events: {
						onReady: onYoutubeReady,
						onStateChange: onYoutubeStateChange
				}
		});
};

function onYoutubeReady () { 

	console.log("youtube ready");
};

function onYoutubeStateChange (e) {

		currentVideo = e.target.m;

		switch (e.data) { 
			case	-1 :
				console.log("unstarted");
				break;
		case 0 :
				console.log("ended");
				triggerNextVideo(currentVideo);
				break;

		case 1 :
			console.log("playing");
		
				break;

		case 2 :
			console.log("paused");

				break;

		case 3 :
			console.log("buffering");
				break;
		}
};


	function triggerNextVideo(video) { 

		$(".main").moveTo(video+2);


	}

	function checkIfSomethingIsPlaying() {

		if (youtubeAPILoaded) { 
				player1.pauseVideo();
				player2.pauseVideo();
				player3.pauseVideo();
				player4.pauseVideo();

		}
	}


	function playYoutubeVideo(index) {


		if (youtubeAPILoaded) {
			if(index === 2 ) {
				player1.playVideo();

			}else if (index === 3 ) {
				player2.playVideo();
			
			}else if (index === 4 ) {
				player3.playVideo();
			}
			}else if (index === 5 ) {
				player4.playVideo();
			}
	}


