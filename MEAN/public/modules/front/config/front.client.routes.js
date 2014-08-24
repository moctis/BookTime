'use strict';

// Setting up route
angular.module('front').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');

        // Home state routing
        $stateProvider.
        state('front', {
            url: '/',
            templateUrl: 'modules/front/views/front.client.view.html' 
        });

    }
]);
