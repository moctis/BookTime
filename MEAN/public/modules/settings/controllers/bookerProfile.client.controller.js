'use strict';


angular.module('settings').controller('BookerProfileController', [
  '$scope', '$interval', '$state', '$stateParams', '$location', 'ShopOwners', '$ionicModal', '$ionicNavBarDelegate',
  'Authentication',
  function($scope, $interval, $state, $stateParams, $location, ShopOwners, $ionicModal, $ionicNavBarDelegate,
    Authentication) {

    var mock = function() {
      console.log(Authentication.user);
      var user = Authentication.user();
      return {
        id: ['1', '2', '3'].random(),
        displayName: user.displayName,
        email: user.email,
        booked: [3400, 200, 1523].random(),
        reviews: [224, 5, 11, 35].random(),
        photos: [25, 18, 2, 4].random(),
        phone: ['+66856676636'].random(),
        language: ['English'].random(),
        image: '/res/screen/share/2x/profile-pic.png',
      };
    };

    $scope.init = function() {
      $scope.shop = {};
      $scope.currentService = {};
      $scope.isUpdate = false;
      if ($stateParams.shopId) {
        $scope.isUpdate = true;
        $scope.findOne();
      } else {
        $scope.isUpdate = false;
        $scope.it = mock();
      }
    };

    $scope.createOrUpdate = function(isValid) {
      if (isValid) {
        if ($scope.isUpdate)
          $scope.update();
        else
          $scope.save(isValid);
      } else {
        $scope.submitted = true;
      }
    };

    // Save the new shop
    $scope.save = function(isValid) {
      if (isValid) {
        var shop = new ShopOwners($scope.shop);
        shop.$save(function(response) {
          console.log('response', response);
          $ionicNavBarDelegate.back();

        }, function(error) {
          console.log('error', error.status, error.statusText);
        });
      } else {
        $scope.submitted = true;
      }
    };

    $scope.remove = function(shop) {
      if (shop) {
        shop.$remove();

        for (var i in $scope.shops) {
          if ($scope.shops[i] === shop) {
            $scope.shops.splice(i, 1);
          }
        }
      } else {
        $scope.shop.$remove(function() {
          $ionicNavBarDelegate.back();
        });
      }
    };

    $scope.update = function() {
      var shop = $scope.shop;

      shop.$update(function() {
        $ionicNavBarDelegate.back();

      }, function(errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    $scope.findOne = function() {
      ShopOwners.get({
        shopId: $stateParams.shopId
      }, function(shop) {
        var moc = mock();
        $scope.shop = shop;
        $scope.shop.services = $scope.shop.services || moc.services;
      });
    };
  }
]);