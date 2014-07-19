angular.module('quizApp', [])
  .controller('QuizController', function($scope) {
	  console.log("Controller called");
	  $scope.question1 = "What color is the sky?";
  });
