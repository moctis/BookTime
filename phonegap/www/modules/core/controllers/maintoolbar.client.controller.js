'use strict';


angular.module('core').controller('mainToolbarController', ['$scope', '$interval', '$rootScope',
	function ($scope, $interval, $rootScope) {	    
	    var ons = $rootScope.ons || {};

	    $scope.menu = function() {
	        ons.slidingMenu.toggleMenu();
	    };

	    $scope.search = function () {
	        alert('search');
	    };
	}
]);
