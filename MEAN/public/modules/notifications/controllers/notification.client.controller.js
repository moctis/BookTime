'use strict';

angular.module('notifications').controller('NotificationsController', [
  '$scope', '$location', '$ionicModal', 'Bookings',
  function($scope, $location, $ionicModal, Bookings) {



    var basepath = 'res/shops/';
    var mock = function() {
      return {
        id: ['1', '2', '3'].random(),
        name: ['Bangkok Shokudo', 'Sushi Masa', 'Staw wery'].random(),
        rank: [3, 4, 5].random(),
        catalog: ['Pet Care', 'Dessert/Bakery', 'Cinema'].random(),
        distance: ['2.4km away', '14km away', '0.4km away'].random(),
        booked: ['3.4k', '200', '15k'].random(),
        comments: ['224', '5', '11', '35'].random(),
        image: basepath + ['shop-1.jpg', 'shop-2.jpg'].random(),
        status: ['waitingqueue', 'confirm', 'declined', 'pending'].random(),
      };
    };


    $scope.findNotifications = function() {
      var newItems = [mock(), mock(), mock(), mock()];
      $scope.items = [];
      angular.forEach(newItems, function(item) {
        $scope.items.push(item);
      });
    };

    $scope.statusClass = function(status) {
      return 'booktime-' + status;
    };

    $ionicModal.fromTemplateUrl('modules/notifications/views/booking.client.view.html', function($ionicModal) {
      $scope.modalBooking = $ionicModal;
    }, {
      // Use our scope for the scope of the modal to keep it simple
      scope: $scope,
      // The animation we want to use for the modal entrance
      animation: 'slide-in-up'
    });

    $scope.viewBooking = function(booking) {
      $scope.booking = booking;
      $scope.modalBooking.show();
    };

    $scope.closeBooked = function() {
      $scope.modalBooking.hide();
    };


    $scope.findMyBookings = function() {
      Bookings.query({
        terms: 'myBooking'
      }, function(items) {
        console.log('Bookings', items);
        $scope.items = [];
        angular.forEach(items, function(item) {
          var moc = mock();
          item.image = item.image || moc.image;
          $scope.items.push(item);
        });
      });


    };
  }
]);