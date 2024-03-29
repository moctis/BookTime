'use strict';


angular.module('admin').controller('AdminShopController', [
  '$scope', '$interval', '$state', '$location', 'AdminShops',
  function($scope, $interval, $state, $location, AdminShops) {
    $scope.shop = {};

    var mock = function() {
      var basepath = 'res/shops/1/';
      return {
        id: ['1', '2', '3'].random(),
        name: ['Bangkok Shokudo', 'Sushi Masa', 'Staw wery'].random(),
        rank: [3, 4, 5].random(),
        address: ['162', '12/3 akemai', '23 CTW '].random() + ' ' + ['Samsennai', 'sukumvit'].random() + ' ' + [
          'Phyathai', 'Wattna', 'Donmung'
        ].random(),
        address2: ['Bangkok Thailand 10400'].random(),
        lastBooked: ['45min ago', '10sec ago', '10days ago'].random(),
        catalog: ['Pet Care', 'Dessert/Bakery', 'Cinema'].random(),
        distance: ['2.4km away', '14km away', '0.4km away'].random(),
        booked: ['3.4k', '200', '15k'].random(),
        comments: ['224', '5', '11', '35'].random(),
        operationTime: ['TUE-SON 10am-11pm'].random(),
        image: basepath + ['main.jpg'].random(),
        albums: [
          basepath + 'a1.jpg',
          basepath + 'a2.jpg',
          basepath + 'a3.jpg',
          basepath + 'a4.jpg',
          basepath + 'a5.jpg',
          basepath + 'a6.jpg',
          basepath + 'a7.jpg',
          basepath + 'a8.jpg',
          basepath + 'a9.jpg'
        ]
      };
    };

    $scope.init = function() {
      $scope.shop = mock();
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
        console.log('removed');
      } else {
        $scope.shop.$remove(function() {
          $location.path('/admin/shops');
        });
      }
    };

    // Find all shops
    $scope.find = function() {
      $scope.shops = AdminShops.query();
    };

  }
]);