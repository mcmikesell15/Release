$(document).ready(function() {
					
	// VARIABLES

	var forestPlaying = false;
	var birdsPlaying = false;
	var creekPlaying = false;

	var sectionOneHit = false;
	var sectionTwoHit = false;

	var sectionArray = $("#pathHolder").find("div");
	var currentSection = 0;
	var windowScroll;
	
	
	// EVENT HANDLERS

	$(window).scroll(function(){
				windowScroll = $(window).scrollTop();
				// console.log(windowScroll)

				if (windowScroll >= $(sectionArray[0]).offset().top && windowScroll < $(sectionArray[1]).offset().top){
					currentSection = 0;
					
					$("#sectionZero").children("h3").fadeIn(1000);
					console.log("sectionZero hit")
					// .children("a").delay(1000).fadeIn(1000);
				}else if (windowScroll >= $(sectionArray[1]).offset().top && windowScroll < $(sectionArray[2]).offset().top && currentSection!=1){
					currentSection = 1;
					$("#sectionOne").children("a").fadeIn(1000);
					console.log(currentSection);
				} else if (windowScroll >= $(sectionArray[2]).offset().top && windowScroll < $(sectionArray[3]).offset().top && currentSection!=2){
					currentSection = 2;
					$("#sectionTwo").children("a").fadeIn(1000)
					console.log(currentSection);
				} else if (windowScroll >= $(sectionArray[3]).offset().top && windowScroll < $(sectionArray[4]).offset().top && currentSection!=3){
					currentSection = 3;
					$("#sectionThree").children("a").fadeIn(1000)
					console.log(currentSection);
				} else if (windowScroll >= $(sectionArray[4]).offset().top && windowScroll < $(sectionArray[5]).offset().top && currentSection!=4){
					currentSection = 4;
					$("#sectionFour").children("a").fadeIn(1000)
					console.log(currentSection);
				} else if (windowScroll >= $(sectionArray[5]).offset().top && windowScroll < $(sectionArray[6]).offset().top && currentSection!=5){
					currentSection = 5;
					$("#sectionFive").children("a").fadeIn(1000)
					console.log(currentSection);
				} else if (windowScroll >= $(sectionArray[6]).offset().top && windowScroll < $(sectionArray[7]).offset().top &&  currentSection!=6){
					currentSection = 6;
					$("#sectionSix").children("a").fadeIn(1000);
					console.log(currentSection);
				} else if (windowScroll >= $(sectionArray[7]).offset().top && windowScroll < $(sectionArray[8]).offset().top && currentSection!=7){
					currentSection = 7;
					$("#sectionSeven").children("a").fadeIn(1000);
					console.log(currentSection);
				} else if (windowScroll >= $(sectionArray[8]).offset().top && windowScroll < $(sectionArray[9]).offset().top && currentSection!=8){
					currentSection = 8;
					$("#sectionEight").children("a").fadeIn(1000);
					$("#sectionNine").children("a").fadeIn(1000);
					console.log(currentSection);
				} else if (windowScroll >= $(sectionArray[9]).offset().top && currentSection!=9){
					currentSection = 9;
					$("#sectionNine").children("a").fadeIn(1000);
					console.log(currentSection);
				}
				
			});



	$('#forestTrigger').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass("playing")
		playPauseForest();
	});

	$('#birdsTrigger').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass("playing")
		playPauseBirds();
	});

	$('#creekTrigger').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass("playing")
		playPauseCreek();
	});








	$("#begin").click(function(){
		$(this).fadeOut(1000)
		$("#contentContainer").fadeOut(1000)
		$(".lets").fadeOut(1000)
		$("#pathHolder").delay(1000).fadeIn(1000)
		$("#forestAudio").trigger("play");
		forestPlaying = true;
	})

	// $(".circles").click(function(){
	// 	$(this).children('.photo').fadeIn(1000)
	// 	$(this).css("animation","none")
	// });

	$("#photoContainer").click(function(){
		$(this).fadeOut(1000)
		$(".photo").delay(1000).css("display", "none")
	})



	$("#circle1").click(function(){
		$("#photoContainer").fadeIn(1000)
		$("#photo1").fadeIn(1000)
	})

	$("#circle2").click(function(){
		$("#photoContainer").fadeIn(1000)
		$("#photo2").fadeIn(1000)
	})

	$("#circle3").click(function(){
		$("#photoContainer").fadeIn(1000)
		$("#photo3").fadeIn(1000)
	})

	$("#circle4").click(function(){
		$("#photoContainer").fadeIn(1000)
		$("#photo4").fadeIn(1000)
	})

	$("#circle5").click(function(){
		$("#photoContainer").fadeIn(1000)
		$("#photo5").fadeIn(1000)
	})

	$("#circle6").click(function(){
		$("#photoContainer").fadeIn(1000)
		$("#photo6").fadeIn(1000)
	})

	$("#circle7").click(function(){
		$("#photoContainer").fadeIn(1000)
		$("#photo7").fadeIn(1000)
	})

	$("#circle8").click(function(){
		$("#photoContainer").fadeIn(1000)
		$("#photo8").fadeIn(1000)
	})

	$("#circle9").click(function(){
		$("#photoContainer").fadeIn(1000)
		$("#photo9").fadeIn(1000)
	})

	$("#circle10").click(function(){
		$("#photoContainer").fadeIn(1000)
		$("#photo10").fadeIn(1000)
	})

	$("#circle11").click(function(){
		$("#photoContainer").fadeIn(1000)
		$("#photo11").fadeIn(1000)
	})

	$("#circle12").click(function(){
		$("#photoContainer").fadeIn(1000)
		$("#photo12").fadeIn(1000)
	})

	$("#circle13").click(function(){
		$("#photoContainer").fadeIn(1000)
		$("#photo13").fadeIn(1000)
	})

	$("#circle14").click(function(){
		$("#photoContainer").fadeIn(1000)
		$("#photo14").fadeIn(1000)
	})

	$("#circle15").click(function(){
		$("#photoContainer").fadeIn(1000)
		$("#photo15").fadeIn(1000)
	})

	$("#circle16").click(function(){
		$("#photoContainer").fadeIn(1000)
		$("#photo16").fadeIn(1000)
	})

	$("#circle17").click(function(){
		$("#photoContainer").fadeIn(1000)
		$("#photo17").fadeIn(1000)
	})

	$("#circle18").click(function(){
		$("#photoContainer").fadeIn(1000)
		$("#photo18").fadeIn(1000)
	})

	$("#circle19").click(function(){
		$("#photoContainer").fadeIn(1000)
		$("#photo19").fadeIn(1000)
	})

	
	
	// FUNCTIONS

	function initialize(){
		$(".welcome").delay(1500).fadeIn(1500).addClass("welcomeTransform");
		$(".lets").delay(4000).fadeIn(2000)
		$("#begin").delay(6000).fadeIn(10)
	};

	function audioActivate() {
		$(this).css("fill", "white")
	}

	function audioDeactivate() {
		$(this).css("fill", "rgba(255,255,255,.5)")
	}


	function playPauseForest() {			
		if (forestPlaying == false) {
			//document.getElementById('audioPlayer').play();
			$("#forestAudio").trigger("play");
			$(".forestIcon").css("fill", "white")
			forestPlaying = true;
		 } else {
			//document.getElementById('audioPlayer').pause();
			$("#forestAudio").trigger("pause");
			//document.getElementById('audioPlayer').currentTime = 0;
			$(".forestIcon").css("fill", "rgba(255,255,255,.5)")
			forestPlaying = false;
		 }
	};

		function playPauseBirds() {			
		if (birdsPlaying == false) {
			//document.getElementById('audioPlayer').play();
			$("#birdsAudio").animate({volume: "0"}, 10).trigger("play").animate({volume: ".5"}, 1000);
			$(".musicIcon").css("fill", "white")
			birdsPlaying = true;
		 } else {
			//document.getElementById('audioPlayer').pause();
			$("#birdsAudio").trigger("pause").animate({volume: "0"}, 1000)
			$(".musicIcon").css("fill", "rgba(255,255,255,.5)")
			//document.getElementById('audioPlayer').currentTime = 0;
			birdsPlaying = false;
		 }
	};

		function playPauseCreek() {			
		if (creekPlaying == false) {
			//document.getElementById('audioPlayer').play();
			$("#creekAudio").animate({volume: "0"}, 10).trigger("play").animate({volume: ".3"}, 1000);
			$(".creekIcon").css("fill", "white")
			creekPlaying = true;
		 } else {
			//document.getElementById('audioPlayer').pause();
			$("#creekAudio").trigger("pause").animate({volume: "0"}, 1000)
			$(".creekIcon").css("fill", "rgba(255,255,255,.5)")
			//document.getElementById('audioPlayer').currentTime = 0;
			creekPlaying = false;
		 }
	};






	// function fadeOutAudio() {
	// 	console.log("hit")			
	// 	if (songPlaying == true) {
	// 		$("#audioPlayer").animate({volume: 0}, 1000);
	// 	 } 
	// };
	
	// function fadeInAudio() {			
	// 	if (songPlaying == true) {
	// 		$("#audioPlayer").animate({volume: 1}, 1000);
	// 	 } 
	// };
	
	
	// INITIALIZATION

	initialize()
	
	
});