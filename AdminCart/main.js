angular.module("admin-cart", ["ui.router"])
        .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("admin/products");
            $stateProvider.state("admin/products", {
                url: "/admin/products",
                templateUrl: "products.html",
                controller: "ProductsController"
            })
            .state("admin/edit/:product_id", {
                url: "/admin/edit/:product_id",
                templateUrl: "edit.html",
                controller: "ProductEditController"
            })
              .state("admin/new", {
                url: "/admin/new",
                templateUrl: "new.html",
                controller: "NewProductController"
            })
             .state("user/products", {
                url: "/user/products",
                templateUrl: "products-list.html",
                controller: "UserProductsController"
            })
             .state("user/cart", {
                url: "/user/cart",
                templateUrl: "cart.html",
                controller: "CartController"
            });
        });
