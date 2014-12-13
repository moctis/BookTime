'use strict';

//Setting up route
angular.module('shop').config(['$stateProvider',
	function($stateProvider) {
		// Shop state routing
		$stateProvider.
		state('booking', {
			url: '/booking',
			templateUrl: 'modules/shop/views/booking.client.view.html'
		}).state('main.tab.shop', {
			url: '/shop', 
		    views: {
		        'home-tab': {
		            templateUrl: 'modules/shop/views/shop.client.view.html',
		            controller: 'ShopController'
		        }
		    }
		}).state('main.tab.album', {
		    url: '/album',
		    views: {
		        'home-tab': {
		            templateUrl: 'modules/shop/views/album.client.view.html',
		             
		        }
		    }
		});
	}
]);