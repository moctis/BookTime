'use strict';

//Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    var checkLoggedIn = function(Authentication, $api) {
      Authentication.checkLoggedIn();
    };

    //$urlRouterProvider.otherwise('/front');

    $urlRouterProvider
      .when('/main', '/main/tab/home')
      .when('/main/tab/home', '/main/tab/home/list')
      .when('/main/tab/home/list', '/main/tab/home/list/food');


    // Core state routing
    $stateProvider.
    state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'modules/core/views/main.client.view.html',
        resolve: {
          checkLoggedIn: checkLoggedIn
        }
      })
      .state('main.tab', {
        url: '/tab',
        abstract: true,
        views: {
          'menuContent': {
            templateUrl: 'modules/core/views/tabs.client.view.html'
          }
        }
      });
  }
]);