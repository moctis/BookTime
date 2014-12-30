'use strict';

//Setting up route
angular.module('home').config(['$stateProvider',
  function($stateProvider) {
    // Home state routing
    $stateProvider.
    state('main.tab.home', {
      url: '/home',
      abstract: true,
      views: {
        'home-tab': {
          templateUrl: 'modules/home/views/home.client.view.html'
        }
      }
    }).
    state('main.tab.home.food', {
      url: '/food',
      views: {
        'food-tab': {
          templateUrl: 'modules/home/views/food.client.view.html'
        }
      }
    }).
    state('main.tab.home.recommend', {
      url: '/recommend',
      views: {
        'recommend-tab': {
          templateUrl: 'modules/home/views/recommend.client.view.html'
        }
      }
    }).
    state('main.tab.home.services', {
      url: '/services',
      views: {
        'services-tab': {
          templateUrl: 'modules/home/views/services.client.view.html'
        }
      }
    });
  }
]);