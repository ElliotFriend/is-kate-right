(function($) {
  "use strict"; // Start of use strict

  // Elliot's JS
  var debateObject = {};
  debateObject.possibleAnswers = [
    "without a doubt",
    "definitely not",
    "yes",
    "no",
    "she probably found that on the internet",
    "have her make her case again",
    "don't count on it",
    "it is certain",
    "most likely",
    "count on it",
    "goteem",
    "outlook not so good",
    "my sources point to yes, but they also said hillary would win",
    "better not tell you that",
    "don't be stupid",
    "your mom",
    "yeah right"
  ];
  debateObject.getAnswer = function(){
    var randomNumber = Math.random();
    var randomAnswer = Math.floor(randomNumber * this.possibleAnswers.length);
    var answer = this.possibleAnswers[randomAnswer];

    $('#answerText').text( answer );
    $('#debateAnswer').fadeIn(3000);

    console.log( answer );
  }

  $('#debateAnswer').hide();
  var onClick = function(){
    $('#debateTopic').val("");
    $('#debateAnswer').hide();
    debateObject.getAnswer();
  }

  $("#debateButton").click( onClick );

})(jQuery); // End of use strict
