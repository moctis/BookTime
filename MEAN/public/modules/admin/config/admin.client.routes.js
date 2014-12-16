'use strict';

// Setting up route
angular.module('admin').config([
  '$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider.
    state('admin', {
      url: '/admin',
      templateUrl: 'modules/admin/views/admin.client.view.html'
    }).
    state('admin.shops', {
      url: '/shops',
      views: {
        'adminContent': {
          templateUrl: 'modules/admin/views/shop-list.client.view.html'
        }
      }
    });
  }
]);