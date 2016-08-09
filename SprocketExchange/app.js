"use strict";

// Declare app level module which depends on views, and components
angular.module("sprocket-exchange", [
  "ngRoute"
]).
config(["$routeProvider", function($routeProvider) {
  $routeProvider
                .when("/home",{
                    url: "/home",
                    templateUrl: "home/home.html",
                    controller: "SprocketExchangeController",
                    controllerAs: "sprocket"
                })
                .otherwise("/home");
}]);
