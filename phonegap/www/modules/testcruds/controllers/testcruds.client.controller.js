'use strict';

// Testcruds controller
angular.module('testcruds').controller('TestcrudsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Testcruds',
	function($scope, $stateParams, $location, Authentication, Testcruds ) {
		$scope.authentication = Authentication;

		// Create new Testcrud
		$scope.create = function() {
			// Create new Testcrud object
			var testcrud = new Testcruds ({
				name: this.name
			});

			// Redirect after save
			testcrud.$save(function(response) {
				$location.path('testcruds/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Testcrud
		$scope.remove = function( testcrud ) {
			if ( testcrud ) { testcrud.$remove();

				for (var i in $scope.testcruds ) {
					if ($scope.testcruds [i] === testcrud ) {
						$scope.testcruds.splice(i, 1);
					}
				}
			} else {
				$scope.testcrud.$remove(function() {
					$location.path('testcruds');
				});
			}
		};

		// Update existing Testcrud
		$scope.update = function() {
			var testcrud = $scope.testcrud ;

			testcrud.$update(function() {
				$location.path('testcruds/' + testcrud._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Testcruds
		$scope.find = function() {
			$scope.testcruds = Testcruds.query();
		};

		// Find existing Testcrud
		$scope.findOne = function() {
			$scope.testcrud = Testcruds.get({ 
				testcrudId: $stateParams.testcrudId
			});
		};
	}
]);