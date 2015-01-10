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
    });

  }
]);