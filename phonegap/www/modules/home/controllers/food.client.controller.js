'use strict';

angular.module('home').controller('FoodController', ['$scope', 'ShopsApi',
  function($scope, ShopsApi) {
    // Food controller logic
    // ...
    $scope.find = function() {
      ShopsApi.query({
        terms: 'food'
      }, function(items) {
        $scope.items = items;
        $scope.mocData($scope.items);

        angular.forEach(items, function(item) {
          var moc = $scope.mock();
          item.distance = item.distance || moc.distance;
          item.image = item.image || moc.image;
        });
      });
    };
  }
]);