'use strict';

// Setting up route
angular.module('notifications').config([
  '$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('main.tab.notifications', {
        url: '/notifications',
        abstract: true,
        views: {
          'notifications-tab': {
            template: '<ion-nav-view></ion-nav-view>'
          }
        }

      })
      .state('main.tab.notifications.list', {
        url: '',
        templateUrl: 'modules/notifications/views/notifications.client.view.html'
      })


    .state('main.tab.notifications.myBookings', {
      url: '/myBookings',
      templateUrl: 'modules/notifications/views/mybookings.client.view.html',
    })

    ;
  }
]);