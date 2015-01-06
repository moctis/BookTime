'use strict';


angular.module('chat').controller('TestController', [
  '$scope', '$location', '$cookieStore',
  function($scope, $location, $cookieStore) {

    console.log('hello');
    $scope.user = {
      name: 'xxxx',
      phone: '122344'
    };

    $scope.name = 'moctis';
    $scope.age = 33;
    $scope.xx = ApplicationConfiguration.server;

    $scope.add = function(a, b) {
      return ($scope.age * 1) + a + b;
    };

    $scope.hello = function() {
      $scope.name = 'woody';
      $scope.age = 55;
    };


    $scope.read = function() {
      console.log('read');
      $scope.user = $cookieStore.get('user');
      console.log('user', $scope.user);
    };

    $scope.write = function() {
      console.log('write');
      console.log('user', $scope.user);
      $cookieStore.put('user', $scope.user);
    };

  }
]);