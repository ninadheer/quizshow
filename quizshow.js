angular.module('quizApp', [])
  .controller('QuizController', function($scope) {
	  console.log("Controller called");
	  $scope.questions = [
		  "What color is the sky?",
		  "What color is the grass?"
	  ];
  });
