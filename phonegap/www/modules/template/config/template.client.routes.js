'use strict';

// Setting up route
angular.module('template').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        // Redirect to home view when route not found
        $urlRouterProvider.otherwise('/');

        // Home state routing
        $stateProvider.
        state('templateList', {
            url: '/templateList',
            templateUrl: 'modules/template/views/list.client.view.html'
        });

    }
]);
