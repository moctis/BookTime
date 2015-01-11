'use strict';

angular.module('shop').controller('BookingController', [
  '$scope', 'Bookings', '$state',
  function($scope, Bookings, $state) {

    var maxPerson = 15;
    var maxDate = 7 * 2;

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
      $scope.booking.date = $scope.bookDates[0].value;

      // Time
      $scope.bookTimes = [];
      for (j = 0; j <= 1; j += 1) {
        for (i = 1; i <= 12; i += 1) {
          $scope.bookTimes.push({
            value: i,
            text: i + (j === 0 ? ' AM' : ' PM')
          });
        }
      }
      $scope.booking.time = $scope.bookTimes[0].value;

      // Person
      $scope.persons = [];
      for (i = 1; i <= maxPerson; i += 1) {
        $scope.persons.push({
          value: i,
          text: i + (i <= 0 ? ' person' : ' persons')
        });
      }
      $scope.booking.person = $scope.persons[0].value;

      // Promotion
      $scope.booking.promotion = 'HOT DEAL - COME 4 PAY 3 all you can eat at only 799bath';

    };


    $scope.doBooking = function(isValid) {
      if (isValid) {
        var booking = new Bookings();
        booking.shop = $scope.it._id;
        booking.bookDateTime = moment()
          .startOf('day')
          .add($scope.booking.date, 'days')
          .add($scope.booking.time, 'hours')
          ._d;
        booking.person = $scope.booking.person;
        booking.comment = $scope.booking.comment;

        console.log('booking', booking);

        booking.$save(function(response) {
          console.log('saved booking', response);
          $scope.close();
          $scope.gotBooking(response);
        });

      } else {
        $scope.submitted = true;
      }
    };

    $scope.close = function() {
      $scope.modal.hide();
    };


    $scope.closeBooked = function() {
      $scope.modalBooked.hide();
    };

  }
]);