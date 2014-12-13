'use strict';

//Setting up route
angular.module('core').config(['$stateProvider','$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/front");
        // Core state routing
        $stateProvider.
            state('main', {
                url: '/main',
                abstract: true,
                templateUrl: 'modules/core/views/main.client.view.html'
            }).state('main.tab', {
                url: "/tab",
                abstract: true,
                views: {
                    'menuContent': {
                        templateUrl: "modules/core/views/tabs.client.view.html" 
                    }
                }
            });
    }
]);