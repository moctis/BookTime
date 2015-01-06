'use strict';

angular.module('home').controller('RecommendController', ['$scope','ShopsApi',
function($scope, ShopsApi) {
		// Recommend controller logic
		// ...
		$scope.find = function() {
			ShopsApi.query({terms:'hilight'}, function(items) {
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
