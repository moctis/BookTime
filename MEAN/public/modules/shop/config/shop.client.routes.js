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
      abstract: true,
      views: {
        'home-list': {
          templateUrl: 'modules/shop/views/shop.client.view.html'
        }
      }
    })

    .state('main.tab.home.shop.detail', {
      url: '',
      templateUrl: 'modules/shop/views/shop-detail.client.view.html'
    })

    .state('main.tab.home.shop.album', {
      url: '/album',
      templateUrl: 'modules/shop/views/shop-album.client.view.html',
    })

    .state('imagesTest', {
      url: '/imagesTest',
      templateUrl: 'modules/shop/views/images.client.view.html',
    })

    ;
  }
]);