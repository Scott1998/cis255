/*Web pages are normally manipulated by working with the DOM object in JavaScript and JQuery. AngularJS allows you to extend HTML tags and attributes using AngularJS directives which make it easy to bind data directly to HTML elements.
 
AngularJS uses JavaScript objects to represent data called Scope which can be data generated on the web server, a database, web service, or client side AngularJS code.
 
You can use expressions that are directly linked to the scope (data) so that the page is updated dynamically as the data changes. Data binding works as well so that when data changes on the web page the model is also updated.
 
Many services are provided for common tasks like using AJAX techniques to dynamically pull data from a web service or the server.
*/
 
// Here we implement the template, module, controller and scope
 
// Define the AngularJS Module
// Modules are used to
// 1. Associate an AngularJS app with part of an HTML document
// 2. Provide access to AngularJS features
// 3. Help with organization
// angular.module() excepts the module name, list of modules this module
// needs and an optional configuration for the module. Modules that work with
// HTML normally have a name that contains app.
var app1 = angular.module('app1', []);
 
// Define the Controller and implement the Scope which links HTML
// elements to variables in the Scope. It receives the controller
// name and a factory function which gets the controller ready to use
// We are saying that $scope is a dependency and that we want Angular
// to pass in the $scope object when the function is called. This is
// an example of dependency injection. Angular sees that my factory
// function contains the $scope component and then it gets it and passes
// it to the function automatically.
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
	$scope.hypotenuse = $scope.first + "^2 + " + $scope.second + "^2 = "Math.sqrt(($scope.first * $scope.first) + ($scope.second * $scope.second))
  
  };

});

app1.controller('randomCourse1', function($scope) {
	
	
});

app1.controller('randomCourse2', function($scope) {
	
	
});
