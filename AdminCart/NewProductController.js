angular.module("admin-cart")
        .controller("NewProductController", ["$scope","productService","$state", function($scope, productService,$state){                
//            $scope.createProduct = function(){
//                console.log($scope.product);
//                $scope.product.id = productService.products.length;
//                productService.products.push($scope.product);
//                $state.go("admin/products");
//                
//            };
           $scope.createProduct = function(){
                   productService.createProduct($scope.product);
                    $state.go("admin/products");
               };
        }]);
