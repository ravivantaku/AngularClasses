angular.module("admin-cart")
        .controller("ProductsController", ["$scope","productService","$state", function($scope, productService,$state){
            //$scope.products = productService.products;  
            $scope.deleteProduct = productService.deleteProduct;
            console.log(productService.getProductsList());
            productService.getProductsList().then(function(result){
                     console.log(result);
                     $scope.products = result.data.products;
                 }, function(error){                    
                     console.log(error);
                 });
        }]);
