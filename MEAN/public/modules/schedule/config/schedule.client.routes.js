'use strict';

// Setting up route
angular.module('schedules').config([
  '$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('main.tab.schedule', {
        url: '/schedule',
        views: {
          'schedule-tab': {
            templateUrl: 'modules/schedule/views/schedule.client.view.html'
          }
        }
      });
  }
]);