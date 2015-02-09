'use strict';

angular.module('home').controller('FoodController', ['$scope', 'ShopsApi',
  function($scope, ShopsApi) {
    // Food controller logic
    // ...
    $scope.searchInput = '';

    $scope.find = function() {
      ShopsApi.query({
        terms: 'food',
        q: $scope.searchInput
      }, function(items) {
        $scope.items = items;
        // $scope.mocData($scope.items);

        angular.forEach(items, function(item) {
          var moc = $scope.mock();
          item._id = item._id || moc.id;
          item.distance = item.distance || moc.distance;
          item.image = item.image || moc.image;
        });
      });
    };

    $scope.$on('searchChange', function(event, args) {
      $scope.searchInput = args.searchInput;
      $scope.find();
    });
  }
]);