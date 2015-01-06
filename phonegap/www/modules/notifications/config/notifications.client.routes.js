'use strict';

// Setting up route
angular.module('notifications').config([
  '$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('main.tab.notifications', {
        url: '/notifications',
        views: {
          'notifications-tab': {
            templateUrl: 'modules/notifications/views/notifications.client.view.html'
          }
        }
      });
  }
]);