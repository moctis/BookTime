'use strict';


angular.module('admin').controller('AdminShopController', [
  '$scope', '$interval', '$state', '$location', 'Shops',
  function($scope, $interval, $state, $location, Shops) {
    $scope.shop = {};

    $scope.init = function() {
      $scope.shop.name = 'new shop';
      $scope.shop.address = 'address1';
    };


    // Save the new shop
    $scope.save = function(isValid) {
      if (isValid) {

        var shop = new Shops($scope.shop);

        shop.$save(function(response) {
          console.log('response', response);
          $location.path('/shop-list');
        }, function(error) {
          console.log('error', error.status);
        });


      }
      else {
          $scope.submitted = true;
      };
    }


  }
]);
