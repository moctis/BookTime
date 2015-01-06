'use strict';

//Setting up route
angular.module('shop').config(['$stateProvider',
  function($stateProvider) {
    // Shop state routing
    $stateProvider
      .state('booking', {
        url: '/booking',
        templateUrl: 'modules/shop/views/booking.client.view.html'
      })

      .state('main.tab.home.shop', {
        url: '/shop/:shopId',
        views: {
          'home-list': {
            templateUrl: 'modules/shop/views/shop.client.view.html'
          }
        }
      })

      .state('main.tab.album', {
        url: '/album',
        views: {
          'home-tab': {
            templateUrl: 'modules/shop/views/album.client.view.html',

          }
        }
      })

      .state('main.tab.owner', {
        url: '/owner',
        abstract: true,
        views: {
          'settings-tab': {
            template: '<ui-view/>'
          }
        }
      })

      .state('main.tab.owner.list', {
        url: '/list',
        templateUrl: 'modules/shop/views/shop-list-own.client.view.html'
      })

      .state('main.tab.owner.create', {
        url: '/create',
        templateUrl: 'modules/shop/views/shop-create.client.view.html'
      })

      .state('main.tab.owner.edit', {
        url: '/:shopId/edit',
        templateUrl: 'modules/shop/views/shop-edit.client.view.html'
      });
  }
]);
