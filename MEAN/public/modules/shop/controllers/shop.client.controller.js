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

        $scope.getData = function () {
            var basepath = 'res/shops/1/';
            var mock = function () {
                return {
                    id: ['1', '2', '3'].random(),
                    name: ['Bangkok Shokudo', 'Sushi Masa', 'Staw wery'].random(),
                    rank: [3, 4, 5].random(),
                    address: ['162 Paholyothin 5 Samsennai Phyathai'].random(),
                    address2: ['Bangkok Thailand 10400'].random(),
                    lastBooked: ['45min ago', '10sec ago', '10days ago'].random(),
                    catalog: ['Pet Care', 'Dessert/Bakery', 'Cinema'].random(),
                    distance: ['2.4km away', '14km away', '0.4km away'].random(),
                    booked: ['3.4k', '200', '15k'].random(),
                    comments: ['224', '5', '11', '35'].random(),
                    operationTime: ['TUE-SON 10am-11pm'].random(),
                    image: basepath + ['main.jpg'].random(),
                    albums: [basepath + 'a1.jpg', basepath + 'a2.jpg',basepath + 'a3.jpg',basepath + 'a4.jpg']
                };
            };

            $scope.it = mock(); 
        };

        $scope.getData();
    }
]);