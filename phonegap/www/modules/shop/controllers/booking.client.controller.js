'use strict';

angular.module('shop').controller('BookingController', [
  '$scope', '$ionicModal',
  function($scope, $ionicModal) {
    $scope.modal = $ionicModal;
  }
]);