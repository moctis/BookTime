'use strict';


angular.module('home').factory('BookingController', [
    '$scope', '$ionicModal',
    function ($scope, $ionicModal) {

      
        $scope.bookMe = function () {
            alert('BOOK ME!');
        };
 
    }
]);