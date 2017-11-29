var app1 = angular.module('app1', []);

app1.controller('peopleCtrl', function($scope) {
	
	$scope.zipCode= [
	{zip: "48731", city: "Elkton", state: "Michigan"},
	{zip: "48755", city: "Pigeon", state: "Michigan"},
	{zip: "48413", city: "Bad Axe", state: "Michigan"},
	{zip: "48710", city: "Saginaw", state: "Michigan"},
	{zip: "48706", city: "Bay City", state: "Michigan"},
	{zip: "48707", city: "Bay City", state: "Michigan"},
	{zip: "48708", city: "Bay City", state: "Michigan"},
	{zip: "48475", city: "Ubly", state: "Michigan"},
	{zip: "48754", city: "Owendale", state: "Michigan"},
	{zip: "48767", city: "Unionville", state: "Michigan"},
    ];
	
	$scope.user= [
	{fName: "Scott",
	lName: "Angst", 
	pNumber: "(989)553-4993",
	email: "scott19981@hotmail.com",
	city: "Elkton",
	state: "Michigan",
	zip: "48731",
    }];
	
	$scope.saveUser = function(userInfo) {
    if($scope.userForm.$valid) {
	  var city1;
	  var state1;
	  angular.forEach($scope.zipCode, function(value, key) {
		if (userInfo.zip === value.zip){
			city1 = value.city;
			state1 = value.state;
		}
	  });
	
	  
      $scope.user.push({
        fName: userInfo.fName, lName: userInfo.lName, pNumber: userInfo.pNumber, email: userInfo.email, city: city1, state: state1, zip: userInfo.zip
      });
      console.log('User Saved');
    } else {
      console.log('Error : Couldn\'t Save User');
    }
 }

	
});