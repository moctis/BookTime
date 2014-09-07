'use strict';

// Setting up route
angular.module('core').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('main', {
                url: "/main",
                abstract: true,
                templateUrl: "modules/core/views/menu.html"
            })
            .state('main.tab', {
                url: "/tab",
                abstract: true,
                views: {
                    'menuContent': {
                        templateUrl: "modules/core/views/tabs.html",
                        controller: "HomeController"
                    }
                }
            })
            .state('main.tab.home', {
                url: "/home",
                views: {
                    'home-tab': {
                        templateUrl: "modules/home/views/home.html"
                    }
                }
            })
            .state('main.tab.chat', {
                url: "/chat",
                views: {
                    'chat-tab': {
                        templateUrl: "modules/chat/views/chat.html"
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

        $urlRouterProvider.otherwise("/main/tab/home");
    }
]).directive('fadeBar', function($timeout) {
    return {
        restrict: 'E',
        template: '<div class="fade-bar"></div>',
        replace: true,
        link: function($scope, $element, $attr) {
            $timeout(function() {
                $scope.$watch('sideMenuController.getOpenRatio()', function(ratio) {
                    $element[0].style.opacity = Math.abs(ratio);
                    $element[0].style.opacity = 1;
                });
            });
        }
    };
});