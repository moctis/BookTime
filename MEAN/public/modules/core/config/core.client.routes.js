'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.state('home', {
			url: '/home',
			templateUrl: 'modules/core/views/main.client.view.html'
		}).state('menu', {
		    url: '/menu',
			templateUrl: 'modules/core/views/menu.client.view.html'
		}).state('new_page', {
		    url: '/new_page',
		    templateUrl: 'modules/core/views/new_page.html'
		});
	}
]);