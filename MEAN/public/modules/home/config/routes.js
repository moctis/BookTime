'use strict';

// Setting up route
angular.module('home').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('main.tab.home', {
                url: "/home",
                views: {
                    'home-tab': {
                        templateUrl: "modules/home/views/home.html"
                    }
                }
            })
            .state('main.tab.shop', {
                url: "/shop",
                views: {
                    'home-tab': {
                        templateUrl: "modules/home/views/shop.html"
                    }
                }
            });

    }
]);