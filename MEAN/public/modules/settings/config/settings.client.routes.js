'use strict';

// Setting up route
angular.module('settings').config([
  '$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('main.tab.settings', {
        url: '/settings',
        abstract: true,
        views: {
          'settings-tab': {
            template: '<ion-nav-view></ion-nav-view>'
          }
        }
      })
      .state('main.tab.settings.menu', {
        url: '',
        templateUrl: 'modules/settings/views/setting.client.view.html'
      });

    // Shop Owner
    $stateProvider
      .state('main.tab.settings.owners', {
        url: '/owners',
        templateUrl: 'modules/settings/views/shopOwners.client.view.html'
      })

    .state('main.tab.settings.owner', {
      url: '/owners/:shopId',
      templateUrl: 'modules/settings/views/shopOwner.client.view.html'
    })

    .state('main.tab.settings.owner.edit', {
      url: '/edit',
      templateUrl: 'modules/settings/views/shopOwner-edit.client.view.html'
    })

    .state('main.tab.settings.owner.services', {
      url: '/services',
      templateUrl: 'modules/settings/views/shopOwner-services.client.view.html'
    })

    .state('main.tab.settings.owner.service', {
      url: '/services/:serviceId',
      templateUrl: 'modules/settings/views/shopOwner-service-edit.client.view.html'
    })


    .state('main.tab.settings.shopOwner.localtion', {
      url: '/localtion',
      templateUrl: 'modules/settings/views/shopOwner-location.client.view.html'
    })

    .state('main.tab.owner.edit.image', {
      url: '/image',
      templateUrl: 'modules/settings/views/shop-image.client.view.html'
    })

    .state('main.tab.settings.privacy', {
      url: '/privacy',
      templateUrl: 'modules/settings/views/privacy.client.view.html'
    })

    .state('main.tab.settings.help', {
      url: '/help',
      templateUrl: 'modules/settings/views/help.client.view.html'
    })

    .state('main.tab.settings.about', {
      url: '/about',
      templateUrl: 'modules/settings/views/about.client.view.html'
    })

    ;

  }
]);