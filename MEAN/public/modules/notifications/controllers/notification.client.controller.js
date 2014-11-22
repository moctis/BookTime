'use strict';


angular.module('notifications').controller('NotificationsController', [
    '$scope', '$location',
    function($scope, $location) {
        $scope.items = [];

        $scope.getData = function () {
            var basepath = 'res/shops/';
            var mock = function () {
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

            angular.forEach(newItems, function (item) {
                $scope.items.push(item);
            });
        };

        $scope.statusClass = function(status) {
            return 'booktime-' + status;
        };

        $scope.getData();
    }
]);
