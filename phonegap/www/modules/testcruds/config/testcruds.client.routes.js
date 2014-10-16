'use strict';

//Setting up route
angular.module('testcruds').config(['$stateProvider',
	function($stateProvider) {
		// Testcruds state routing
		$stateProvider.
		state('listTestcruds', {
			url: '/testcruds',
			templateUrl: 'modules/testcruds/views/list-testcruds.client.view.html'
		}).
		state('createTestcrud', {
			url: '/testcruds/create',
			templateUrl: 'modules/testcruds/views/create-testcrud.client.view.html'
		}).
		state('viewTestcrud', {
			url: '/testcruds/:testcrudId',
			templateUrl: 'modules/testcruds/views/view-testcrud.client.view.html'
		}).
		state('editTestcrud', {
			url: '/testcruds/:testcrudId/edit',
			templateUrl: 'modules/testcruds/views/edit-testcrud.client.view.html'
		});
	}
]);