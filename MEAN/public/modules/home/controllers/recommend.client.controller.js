'use strict';

angular.module('home').controller('RecommendController', ['$scope', 'ShopsApi',
  function($scope, ShopsApi) {
    // Recommend controller logic
    // ...
    $scope.searchInput = '';

    $scope.find = function() {
      ShopsApi.query({
        terms: 'hilight',
        q: $scope.searchInput
      }, function(items) {
        $scope.items = items;
        // scope.mocData($scope.items);

        angular.forEach(items, function(item) {
          var moc = $scope.mock();
          //item.catalog = item.catalog || moc.catalog;
          //item.booked = item.booked || moc.booked;
          item.image = item.image || moc.image;
          item.distance = item.distance || moc.distance;


        });
      });
    };

    $scope.$on('searchChange', function(event, args) {
      $scope.searchInput = args.searchInput;
      $scope.find();
    });
  }
]);