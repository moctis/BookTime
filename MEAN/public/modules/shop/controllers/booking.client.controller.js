'use strict';

angular.module('shop').controller('BookingController', [
  '$scope', '$ionicModal',
  function($scope, $ionicModal) {

    var maxPerson = 15;
    var maxDate = 15;

    $scope.modal = $ionicModal;
    $scope.booking = {};
    $scope.bookDates = [];
    $scope.bookTimes = [];
    $scope.persons = [];


    $scope.init = function() {
      var i, j;

      // Date
      $scope.bookDates = [];
      for (i = 0; i <= maxDate; i += 1) {
        $scope.bookDates.push({
          value: i,
          text: moment().add(i, 'days').format('ddd DD MMMM YYYY')
        });
      }

      // Time
      $scope.bookTimes = [];
      for (j = 0; j <= 1; j += 1)
        for (i = 1; i <= 12; i += 1) {
          $scope.bookTimes.push({
            value: i,
            text: i + (j === 0 ? ' AM' : ' PM')
          });
        }

      // Person
      $scope.persons = [];
      for (i = 1; i <= maxPerson; i += 1)
        $scope.persons.push(i);

    };


    $scope.doBooking = function() {
      $scope.booking.shopId = $scope.it._id;
      console.log('booking', $scope.booking);
    };

  }
]);