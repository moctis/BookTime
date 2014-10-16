'use strict';

// Setting up route
angular.module('booking').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('main.booking', {
            url: "/booking",
                views: {
                    'menuContent': {
                        templateUrl: "modules/booking/views/booking.html"
                    }
                }
            });
         
    }
]);