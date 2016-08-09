
angular.module("sprocket-exchange")
.controller('SprocketExchangeController', ["$scope","sprocketExchangeService", function($scope,sprocketExchangeService) {
        var sprocket = this;
  sprocket.sprocketInfo = sprocketExchangeService.sprocketInfo;
 $scope.count = 5;
}]);
