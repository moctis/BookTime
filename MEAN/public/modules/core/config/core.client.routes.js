'use strict';

// Setting up route
angular.module('core').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('main', {
                url: "/main",
                abstract: true,
                templateUrl: "modules/core/views/menu.html",
                controller: "MenuController"
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
          ;

        $urlRouterProvider.otherwise("/main/tab/home");
    }
]).directive('fadeBar', function($timeout) {
    return {
        restrict: 'E',
        template: '<div class="fade-bar"></div>',
        replace: true,
        link: function($scope, $element, $attr) {
            $timeout(function() {
                $scope.$watch('sideMenuController.getOpenRatio()', function (ratio) {
                    ratio = 1;
                    $element[0].style.opacity = Math.abs(ratio);
                });
            });
        }
    };
});