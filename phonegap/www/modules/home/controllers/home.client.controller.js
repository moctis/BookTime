'use strict';


angular.module('home').controller('HomeController', ['$scope', '$rootScope', 'ShopsApi',
  function($scope, $rootScope, ShopsApi) {
    $scope.items = [];
    var basepath = 'res/shops/';

    $scope.mock = function() {
      return {
        id: ['1', '2', '3'].random(),
        name: '@' + ['Bangkok Shokudo', 'Sushi Masa', 'Staw wery'].random(),
        rank: [3, 4, 5].random(),
        catalog: ['Pet Care', 'Dessert/Bakery', 'Cinema'].random(),
        distance: ['2.4km away', '14km away', '0.4km away'].random(),
        booked: ['3.4k', '200', '15k'].random(),
        comments: ['224', '5', '11', '35'].random(),
        image: basepath + ['shop-1.jpg', 'shop-2.jpg'].random()
      };
    };

    $scope.mocData = function(items) {
      var newItems = [$scope.mock(), $scope.mock()];
      angular.forEach(newItems, function(item) {
        items.push(item);
      });
    };
  }
]);