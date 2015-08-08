app.controller("TodoCtrl", function($scope){
	$scope.todo = "todo";
    $scope.todoTxt = "";
    $scope.todoList = [];
    $scope.addTodo = function(){
    	console.log($scope.todoTxt);
    	$scope.todoList.push({todoTxt: $scope.todoTxt, isChecked: false, isRemoved:false});
    	console.log($scope.todoList);
    	$scope.todoTxt = "";
    };
    $scope.removeTodo = function(index){
    	console.log(index);
    	$scope.todoList.splice(index, 1);
    };
});
