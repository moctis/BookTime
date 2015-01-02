'use strict';


angular.module('admin').controller('AdminShopController', [
  '$scope', '$interval', '$state', '$location', 'AdminShops',
  function($scope, $interval, $state, $location, AdminShops) {
    $scope.shop = {};

    $scope.init = function() {
      $scope.shop.name = 'new shop';
      $scope.shop.address = 'address1';
    };


    // Save the new shop
    $scope.save = function(isValid) {
      if (isValid) {
        var shop = new AdminShops($scope.shop);
        shop.$save(function(response) {
          console.log('response', response);
          $location.path('/admin/shops');
        }, function(error) {
          console.log('error', error.status, error.statusText);
        });
      }
      else {
          $scope.submitted = true;
      };
    }


  }
]);
