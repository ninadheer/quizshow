angular.module('quizApp', [])
  .controller('QuizController', function($scope) {
	  console.log("Controller called");
	  $scope.questions = [
		  {
		  	"question": "What color is the sky?",
		  	"answers": [
		  		"blue",
		  		"yellow",
		  		"green",
		  		"purple"]
		  },
		  {
		  	"question": "What time is it?",
		  	"answers": [
		  		"10:15",
		  		"11:00",
		  		"2:30",
		  		"2:38"]
		  }
	  ];
  });
