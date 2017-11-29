
var app1 = angular.module('app1', []);
 

app1.controller('ctrl1', function($scope) {
 
  // Define initial values
  $scope.first = 1;
  $scope.second = 1;
 
  // Change the value for calculation when the button is clicked
  // I used a shortcut using the unary plus operator to convert
  // the string number values which are then added
  $scope.updateValue = function() {
    $scope.calculation = $scope.first + ' + ' + $scope.second +
      " = " + (+$scope.first + +$scope.second);
  };
  
  $scope.updateHypotenuse = function(){
	$scope.hypotenuse = Math.sqrt(($scope.first * $scope.first) + ($scope.second * $scope.second))
  
  };

});

app1.controller('randomCourse1', function($scope) {
	var courses = [{name: 'CIS 255', credits: '4'}, {name: 'CS 216', credits: '4'}, {name: 'THEA 128A', credits: '3'}, 
			 {name: 'PHIL 210B ', credits: '3'}, {name: 'MATH 223', credits: '4'}, {name: 'CS 331', credits: '4'}, 
			 {name: 'CIS 355', credits: '4'}, {name: 'CHEM 102B', credits: '4'}, {name: 'CS 116', credits: '4'}, 
			 {name: 'MATH 161', credits: '4'}];
	$scope.rCourse1 = courses[Math.floor((Math.random()*10))].name;
});

app1.controller('randomCourse2', function($scope) {
	var courses = [{name: 'CIS 255', credits: '4'}, {name: 'CS 216', credits: '4'}, {name: 'THEA 128A', credits: '3'}, 
			 {name: 'PHIL 210B ', credits: '3'}, {name: 'MATH 223', credits: '4'}, {name: 'CS 331', credits: '4'}, 
			 {name: 'CIS 355', credits: '4'}, {name: 'CHEM 102B', credits: '4'}, {name: 'CS 116', credits: '4'}, 
			 {name: 'MATH 161', credits: '4'}];
	$scope.rCourse2 = courses[Math.floor((Math.random()*10))].name;
	
});

app1.controller('courseListCtrl', function($scope) {
	var courses = [{name: 'CIS 255', credits: '4'}, {name: 'CS 216', credits: '4'}, {name: 'THEA 128A', credits: '3'}, 
			 {name: 'PHIL 210B ', credits: '3'}, {name: 'MATH 223', credits: '4'}, {name: 'CS 331', credits: '4'}, 
			 {name: 'CIS 355', credits: '4'}, {name: 'CHEM 102B', credits: '4'}, {name: 'CS 116', credits: '4'}, 
			 {name: 'MATH 161', credits: '4'}];
			 
	
});


