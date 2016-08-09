angular.module("sprocket-exchange")
        .factory("sprocketExchangeService", ["$http", function($http) {
                var sprocketExchange = {};
                sprocketExchange.sprocketInfo = {
                    availableCash:100,
                    sprockets: 20,
                    currentPrice: 12,
                    currentTime: "3:12",
                    transactionHistory:[{id: 1, date: "02/06/2016", action: "Buy", unitPrice: 10,count: 5},
                    {id: 2, date: "03/06/2016", action: "Sell", unitPrice: 15,count: 15},
                {id: 3, date: "04/06/2016", action: "Sell", unitPrice: 5,count: 3}]
                };
                return sprocketExchange;
            }]);
