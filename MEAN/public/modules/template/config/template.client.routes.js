'use strict';

// Setting up route
angular.module('template').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) { 
        // Home state routing
        $stateProvider.
        state('templateList', {
            url: '/templateList',
            templateUrl: 'modules/template/views/list.client.view.html'
        });

    }
]);
