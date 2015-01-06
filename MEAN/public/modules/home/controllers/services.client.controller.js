'use strict';

angular.module('home').controller('ServicesController', ['$scope','ShopsApi',
function($scope, ShopsApi) {
		// Services controller logic
		// ... 
		$scope.find = function() {
			ShopsApi.query({terms:'service'}, function(items) {
				$scope.items =  items;
				$scope.mocData($scope.items);

				angular.forEach(items, function (item) {
					var moc = $scope.mock();
					item.catalog = item.catalog || moc.catalog;
					item.booked = item.booked || moc.booked;
					item.image = item.image || moc.image;
					item.distance = item.distance || moc.distance;


				});
			});
		};
	}
]);
