angular.module("admin-cart")
        .controller("ProductEditController", ["$scope","$stateParams","productService","$state", function($scope, $stateParams, productService, $state){
                 $scope.product = productService.getProduct($stateParams.product_id);
                 $scope.updateProduct = function(){
                     productService.updateProduct($scope.product);
                     $state.go("admin/products");
                };
                //Using Javascript array find method
//               $scope.product =  productService.products.find(function(product){
//                    console.log(product);
//                    return product.id === +$stateParams.product_id;
//                }); 
                
                //Using lodash find method
                
//                $scope.product = _.find(productService.products, function(product){
//                    return product.id === +$stateParams.product_id;
//                });

              
//                function updateProduct() {
//                    console.log($scope.product);
//                    productService.products[$scope.product.id] = $scope.product;
//                    console.log( productService.products);
//                    $state.go("admin/products");
//                }
               
                
//                $scope.updateProduct = function(){
//                    //var product = productService.products[$scope.product.id];
//                    productService.products[$scope.product.id] = $scope.product;
//                    $state.go("admin/products");
//                };
        }]);
