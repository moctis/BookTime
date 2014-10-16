//'use strict';

//// Setting up route
//angular.module('home').config([
//    '$stateProvider', '$urlRouterProvider',
//    function($stateProvider, $urlRouterProvider) {
         
//        $stateProvider
//            .state('main.tab.home', {
//                url: "/home",
//                abstract: true,
//                views: {
//                    'home-tab': {
//                        templateUrl: "modules/home/views/home.html"
//                    }
//                }
//            })
//            .state('main.tab.shop', {
//                url: "/shop",
//                views: {
//                    'home-tab': {
//                        templateUrl: "modules/home/views/shop.html",
//                        controller: "ShopController"
//                    }
//                }
//            }); 
//        $stateProvider
//            .state('main.tab.home.food', {
//                url: "/food",
//                views: {
//                    'food-tab': {
//                        templateUrl: "modules/home/views/food.html"
//                    }
//                }
//            }).state('main.tab.home.services', {
//                url: "/services",
//                views: {
//                    'services-tab': {
//                        templateUrl: "modules/home/views/services.html"
//                    }
//                }
//            }).state('main.tab.home.recommend', {
//                url: "/recommend",
//                views: {
//                    'recommend-tab': {
//                        templateUrl: "modules/home/views/recommend.html"
//                    }
//                }
//            });
//    }
//]);