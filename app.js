console.log("Angular.js");

var app  = angular.module("sampleApp", []);
app.run(function($rootScope){
	$rootScope.name = "Root Scope";
})

app.controller("MyCtrl", function($scope ,$rootScope){
	console.log($scope);
	$scope.num = 1;
	$scope.firstname = "JS";
	$scope.lastname = "Angular"
	$scope.fullname = $scope.firstname + $scope.lastname;
	$scope.studentData = [];
	$scope.fullnameFunc = function(){
		$scope.fullname = $scope.firstname + $scope.lastname;
	}
	var updateFullName = function(){
		$scope.fullname = $scope.firstname + $scope.dropValue+ " " + $scope.lastname + $scope.dropValue;
	}
    
    $scope.updateFullName = updateFullName;
    var intrval = window.setInterval(function(){
    	console.log('interval');
    	$scope.studentData = [1, 2, 3, 4, 5];
    	$scope.$apply();
    },3000)
	
	
	// $scope.$watch("firstname", function(oldVal, newVal){
	// 	$scope.fullname = $scope.firstname + $scope.lastname;
	// });
	// $scope.$watch("lastname", function(oldVal, newVal){
	// 	$scope.fullname = $scope.firstname + $scope.lastname;
	// });
 //$scope.name = "Welcome to Angularjs";
//$rootScope.name = "First Controller";
});

app.controller("SecondCtrl", function($scope, $rootScope){

	$scope.second  = "Second Controller";
	//$rootScope.name = "Second Controller";
});
