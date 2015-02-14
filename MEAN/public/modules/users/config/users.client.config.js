'use strict';

// Config HTTP Error Handling

angular.module('users').config(
	function($httpProvider) {
		// Set the httpProvider "not authorized" interceptor
		$httpProvider.interceptors.push(['$q', '$location', '$window',
			function($q, $location, $window) {
				return {
					request: function (config) {
						config.headers = config.headers || {};
						if ($window.sessionStorage.token) {
							config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
						}
						return config;
					},
					responseError: function(rejection) {
						switch (rejection.status) {
							case 401:
								console.log('Unauthorized');
								// Deauthenticate the global user
								delete $window.sessionStorage.token;
								// Redirect to signin page

								$location.path('/');
								break;
							case 403:
								// Add unauthorized behaviour
								break;
						}

						return $q.reject(rejection);
					}
				};
			}
		]);
	}
 );
