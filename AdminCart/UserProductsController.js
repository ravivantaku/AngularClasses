angular.module("admin-cart")
        .controller("UserProductsController", ["$scope","productService","cartService", function($scope, productService, cartService){
            productService.getProductsList().then(function(res){
                console.log(res);
               $scope.products = res.data.products;
            }, function(err){
                console.log(err);
            });            
         $scope.buyProduct = function(product){
          console.log(product);
          cartService.items.push(product);
         };
         $scope.bought = cartService.bought;
        }]);
