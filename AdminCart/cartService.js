angular.module("admin-cart")
        .factory("cartService", function(){
            var cart = {};
         cart.items = [];
         cart.bought = function(id){
            var list =  _.filter(cart.items, function(item){
                 return item.id === +id
             });
             return list.length > 0 ? true: false;
         };
         cart.total = function(){
             return _.reduce(cart.items, function(acc, item){
                 acc =  acc + (item.price * item.quantity);
                 return acc;
             }, 0);
         };
    
         return cart;
        });
