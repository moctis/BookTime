'use strict';


angular.module('home').controller('ShopController', [
    '$scope', '$ionicModal',
    function ($scope, $ionicModal) {
 
        $ionicModal.fromTemplateUrl('modules/home/views/booking.html', function ($ionicModal) {
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