// $("#body").hide(3000);
  $('#hide').hide().fadeIn(3000);


$('#start').on('click', function() {
	game.start();

   })

var questions = [{
	question:"What is the name of Iron Maiden's original drummer?",
	answers:["Clive Burr", "Nicko McBrain", "Tommy Aldridge", "Cozy Powell"],
	correctAnswer:"Clive Burr"
}, {
	question: "What Kinks song did Van Halen make a hit single out of on their first album?",
	answers :["lola", "All Day and All of the Night", "Sunny Afternoon", "You Really Got Me"],
	correctAnswer :"You Really Got Me"
}, {
	question: "What is the name of Nirvana's first record?",
	answers:["Incesticide", "Nevermind", "Bleach", "In Utero"],
	correctAnswer:"Bleach"
}, {
	question: "Finish this Black Sabbath lyric:'I tell you to ____ life, I wish I could but it's too late!",
	answers:["Enjoy", "End your", "Live this", "edge your"],
	correctAnswer:"Enjoy"
}, {
	question:"What is the name of Faith No More's singer who recorded on the 'We Care A Lot' record?",
	answers:["Courtney Love", "Mike Patton", "Mike Mosely", "Chuck Billy"],
	correctAnswer:"Mike Mosely"
}, {
	question:"What celebrity is the Anthrax song 'Efilnikufesin' about?",
	answers:["Sean Connery", "John Belushi", "Tom Hanks", "Eddie Murphy"],
	correctAnswer:"John Belushi"
}, {
	question:"The notes of what Metallica song are tattooed on James Hetfield's arm?",
	answers:["Master of Puppets", "Battery", "Orion", "Anesthesia"],
	correctAnswer:"Orion"
}, {
	question:"In what country did Metallica's tour bus crash in 1986, resulting in Cliff Burton's death?",
	answers:["Iceland", "France", "Britian", "Sweden"],
	correctAnswer:"Sweden"
}, {
	question:"At a CBS Records meeting, Ozzy Osbourne bit the head off of what animal?",
	answers:["A Bat", "A Dove", "A Frog", "A pigeon"],
	correctAnswer:"A Dove"
}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 120,
	countdown: function(){
		game.counter--;
		$('#counter').html(game.counter);
		if (game.counter === 0) {
			Alert("Time's Up, Poser!");
			game.done();
		};
	},
	start: function() {
		timer = setInterval(game.countdown, 1000);
		$('#body').prepend('<h2>Time Remaining: <span id= "counter">120</span> Seconds </h2>');
	$("#start").remove();
	for(var i = 0; i < questions.length; i++) {
	$("#body").append('<h2>' + questions[i].question+ '</h2>');
	for(var j = 0; j < questions[i].answers.length; j++) {
	$("#body").append("<input class ='answer' type= 'button' value='"+questions[i].answers[j]+"'>");
		    }
	    }	
	},
	    done: function() {
	    	$.each($("input[name= 'question-0']:checked"), function() {
	    		if ($(this).val() === questions[0].correctAnswer) {
	    			game.correct++;
	    		} else {
	    			game.incorrect++;
	    		}
	    	  });
	    	$.each($("input[name= 'question-1']:checked"), function() {
	    		if ($(this).val() === questions[1].correctAnswer) {
	    			game.correct++;
	    		} else {
	    			game.incorrect++;
	    		}
	    	  });
	    	  $.each($("input[name= 'question-2']:checked"), function() {
	    		if ($(this).val() === questions[2].correctAnswer) {
	    			game.correct++;
	    		} else {
	    			game.incorrect++;
	    		}
	    	  });
	    	  $.each($("input[name= 'question-3']:checked"), function() {
	    		if ($(this).val() === questions[3].correctAnswer) {
	    			game.correct++;
	    		} else {
	    			game.incorrect++;
	    		}
	    	  });
	    	  $.each($("input[name= 'question-4']:checked"), function() {
	    		if ($(this).val() === questions[4].correctAnswer) {
	    			game.correct++;
	    		} else {
	    			game.incorrect++;
	    		}
	    	  });
	    	  $.each($("input[name= 'question-5']:checked"), function() {
	    		if ($(this).val() === questions[5].correctAnswer) {
	    			game.correct++;
	    		} else {
	    			game.incorrect++;
	    		}
	    	  });
	    	  $.each($("input[name= 'question-6']:checked"), function() {
	    		if ($(this).val() === questions[6].correctAnswer) {
	    			game.correct++;
	    		} else {
	    			game.incorrect++;
	    		}
	    	  });
	    	  $.each($("input[name= 'question-7']:checked"), function() {
	    		if ($(this).val() === questions[7].correctAnswer) {
	    			game.correct++;
	    		} else {
	    			game.incorrect++;
	    		}
	    	  });
	    	  $.each($("input[name= 'question-8']:checked"), function() {
	    		if ($(this).val() === questions[8].correctAnswer) {
	    			game.correct++;
	    		} else {
	    			game.incorrect++;
	    		}
	    	  });
	    	  
	    

		this.result();		
		},

		result: function(){
			clearInterval(timer);
			$('#body h2').remove();

			$('#body').html("<h2>All done!</h2>");
			$('#body').append("<h3>correct Answers: "+this.correct+" </h3>");
			$('#body').append("<h3>Incorrect Answers: "+this.Incorrect+" </h3>");


	}
}