angular.module("admin-cart")
        .controller("CartController", ["$scope","cartService", function($scope, cartService){
                $scope.carts = cartService.items;   
           $scope.hideButton = true;
           $scope.$watch("carts", function(){
               var checkedList = _.filter($scope.carts, function(cart){
                   return cart.isChecked === true;
               });
               
              if(checkedList.length){
                  $scope.hideButton = false;
              }
              else{
                  $scope.hideButton = true;
              }
           }, true);
           $scope.total = cartService.total;
           $scope.deleteCartItems = function(){
               
           };
        }]);
