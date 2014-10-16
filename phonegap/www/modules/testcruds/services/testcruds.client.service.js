'use strict';

//Testcruds service used to communicate Testcruds REST endpoints
angular.module('testcruds').factory('Testcruds', ['$resource',
	function($resource) {
		return $resource('testcruds/:testcrudId', { testcrudId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);