'use strict';

angular.module('notifications').controller('NotificationsController', [
  '$scope', '$location', '$ionicModal', 'Bookings', 'Authentication',
  function($scope, $location, $ionicModal, Bookings, Authentication) {



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

    $ionicModal.fromTemplateUrl('modules/notifications/views/bookingOwner.client.view.html', function($ionicModal) {
      $scope.modalBookingOwner = $ionicModal;
    }, {
      // Use our scope for the scope of the modal to keep it simple
      scope: $scope,
      // The animation we want to use for the modal entrance
      animation: 'slide-in-up'
    });

    $ionicModal.fromTemplateUrl('modules/notifications/views/bookingShopOwner.client.view.html', function(
      $ionicModal) {
      $scope.modalShopOwner = $ionicModal;
    }, {
      // Use our scope for the scope of the modal to keep it simple
      scope: $scope,
      // The animation we want to use for the modal entrance
      animation: 'slide-in-up'
    });

    $scope.viewBooking = function(booking) {


      booking.currentUser = Authentication.user._id;

      $scope.booking = booking;

      console.log('viewBooking', booking);

      if (booking.isBookingOwner)
        $scope.modalBookingOwner.show();
      if (booking.isShopOwner)
        $scope.modalShopOwner.show();
    };

    $scope.closeBooked = function() {
      $scope.modalBookingOwner.hide();
      $scope.modalShopOwner.hide();
    };

    $scope.findMyBookings = function() {
      Bookings.query({
        terms: 'myBooking'
      }, function(items) {
        console.log('Bookings', items);
        $scope.items = [];
        angular.forEach(items, function(item) {
          var moc = mock();
          item.isBookingOwner = item.owner._id === Authentication.user._id;
          item.isShopOwner = item.shop.owner === Authentication.user._id;

          item.image = item.image || (item.isShopOwner ? 'res/screen/share/2x/profile-pic.png' : moc.image);
          $scope.items.push(item);
        });
      });
    };
  }
]);