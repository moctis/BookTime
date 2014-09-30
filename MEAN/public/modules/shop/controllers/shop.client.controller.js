'use strict';

angular.module('shop').controller('ShopController', [
    '$scope', '$ionicModal',
    function ($scope, $ionicModal) {
 
        $ionicModal.fromTemplateUrl('modules/shop/views/booking.client.view.html', function ($ionicModal) {
            $scope.modal = $ionicModal;
        }, {
            // Use our scope for the scope of the modal to keep it simple
            scope: $scope,
            // The animation we want to use for the modal entrance
            animation: 'slide-in-up'
        });

 
        $scope.getDirection = function () {
            alert('Get Direction');
        };
    }
]);