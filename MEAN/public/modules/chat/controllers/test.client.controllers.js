'use strict';


angular.module('chat').controller('TestController', [
  '$scope', '$location',
  function($scope, $location) {

    console.log('hello');

    $scope.name = 'moctis';
    $scope.age = 33;

    $scope.add = function(a, b) {
      return ($scope.age * 1) + a + b;
    };

    $scope.hello = function() {
      $scope.name = 'woody';
      $scope.age = 55;
    }
  }
]);