angular.module("admin-cart")
        .factory("productService", [ "$http", function($http){            
               return {                
             deleteProduct: function(id){
               this.products.splice(id, 1);
            },
            createProduct: function(product){               
                product.id = this.products.length;
                this.products.push(product);             
                
            },
            getProduct: function(id){
              return  _.find(this.products, function(product){
                    return product.id === +id;
                });
            },
            updateProduct:  function(product) {
                    this.products[product.id] = product;                  
                },
             getProductsList: function(){                
//                 return  $http.get("https://api.github.com/users/octocat").then(function(result){
//                     console.log(result);
//                     return result.data;
//                 }, function(error){
//                     console.log(error);
//                     return error;
//                 });       
                 
                 
                return  $http.get("products.json");
             }
               };
        }]);
        
