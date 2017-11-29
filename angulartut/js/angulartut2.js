// ---------- AJAX CALL ----------
/*var req = new XMLHttpRequest(); // create an ajax request
var url = 'https://api.svsu.edu/courses?prefix=CS&term=17/FA';
var jsonObj; 
req.onreadystatechange = function() {
	var readyStateDone = 4;
	var readyStatusSuccess = 200;
	if (this.readyState == readyStateDone && 
		this.status == readyStatusSuccess) {
		jsonObj = JSON.parse(this.responseText);
	}
};
req.open('GET', url, true);
req.send();
*/

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
   // alert("woke up!");
}


//sleep(2000);


// ------ Angular App -------
// Define the AngularJS Module
var app4 = angular.module('app4', []);

// Define the Controller and implement the Scope
app4.controller('eventCtrl', function($scope, $http) {
  $scope.blur = 0;
  $scope.click = 0;
  $scope.dblclick = 0;
  $scope.copy = 0;
  $scope.paste = 0;
  $scope.cut = 0;
  $scope.focus = 0;
  $scope.change = 0;
  $scope.keydown = function(e) {
	// Works for the basic characters and numbers
	$scope.kdKey = String.fromCharCode(e.keyCode);
  };
  $scope.mouseenter = 0;
  $scope.mouseleave = 0;

  // Used to disable button
  $scope.disableButton = true;

  // Used to show and hide elements
  $scope.daytimeButton = true;

  // Used for table
  $scope.capitals = [
	{"City": "Montgomery",
	"State": "Alabama"},
	{"City": "Juneau",
	"State": "Alaska"},
	{"City": "Phoenix",
	"State": "Arizona"},
	{"City": "Little Rock",
	"State": "Arkansas"}
  ];
  
  // ------- Courses --------

	//$scope.courses = jsonObj.courses;
	//$scope.courses2 = jsonObj2.courses;
	//console.log("hello");
	//console.log($scope.courses);
	$http.get("https://api.svsu.edu/courses?prefix=CS&term=17/FA").then(function(response) {
        $scope.courses = response.data.courses;
    });
	$http.get("https://api.svsu.edu/courses?prefix=CIS&term=17/FA").then(function(response) {
        $scope.ciscourses = response.data.courses;
    });
	$http.get("https://api.svsu.edu/courses?prefix=MATH&term=17/FA").then(function(response) {
        $scope.mathcourses = response.data.courses;
    });
	$http.get("https://api.svsu.edu/courses?prefix=HIST&term=17/FA").then(function(response) {
        $scope.histcourses = response.data.courses;
    });
	
	sleep(8000);
	
	//$scope.courses = $scope.csCourses + $scope.cisCourses + $scope.mathCourses + $scope.histCourses;
});
