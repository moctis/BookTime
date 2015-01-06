'use strict';

// Setting up route
angular.module('settings').config([
  '$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('main.tab.settings', {
        url: '/settings',
        views: {
          'settings-tab': {
            templateUrl: 'modules/settings/views/setting.client.view.html'
          }
        }
      });
  }
]);