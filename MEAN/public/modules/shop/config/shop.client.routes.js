'use strict';

//Setting up route
angular.module('shop').config(['$stateProvider',
  function($stateProvider) {
    // Shop state routing
    $stateProvider
      .state('main.tab.home.shop.booking', {
        url: '/booking',
        templateUrl: 'modules/shop/views/booking.client.view.html'
      })

    .state('main.tab.home.shop.booked', {
      url: '/booked',
      templateUrl: 'modules/shop/views/booked.client.view.html'
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
    })

    .state('main.tab.owner.listservice', {
      url: '/:shopId/listservice',
      templateUrl: 'modules/shop/views/shop-listservice.client.view.html'
    })

    .state('main.tab.owner.updateservice', {
      url: '/:shopId/updateservice',
      templateUrl: 'modules/shop/views/shop-updateservice.client.view.html'
    })

    .state('main.tab.owner.image', {
      url: '/:shopId/image',
      templateUrl: 'modules/shop/views/shop-image.client.view.html'
    });
  }
]);