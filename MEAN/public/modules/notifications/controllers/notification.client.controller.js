'use strict';

angular.module('notifications').controller('NotificationsController', [
  '$scope', '$location', '$ionicModal',
  function($scope, $location, $ionicModal) {
    $scope.items = [];

    $scope.getData = function() {
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

      var newItems = [mock(), mock(), mock(), mock()];

      angular.forEach(newItems, function(item) {
        $scope.items.push(item);
      });
    };

    $scope.statusClass = function(status) {
      return 'booktime-' + status;
    };

    $ionicModal.fromTemplateUrl('modules/notifications/views/booking.client.view.html', function($ionicModal) {
      $scope.modalMooked = $ionicModal;
    }, {
      // Use our scope for the scope of the modal to keep it simple
      scope: $scope,
      // The animation we want to use for the modal entrance
      animation: 'slide-in-up'
    });

    $scope.viewBooking = function() {
      console.log($scope.modal);
      $scope.modalMooked.show();
    };

    $scope.getData();

    $scope.closeModal = function() {
      $scope.modalMooked.close();
    };
  }
]);