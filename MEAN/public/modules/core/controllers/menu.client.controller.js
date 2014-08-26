'use strict';


angular.module('core').controller('MenuController', ['$scope', '$interval', 
	function ($scope, $interval) {
	    $scope.profile = [];
	    $scope.profile.name = 'Pony Somrattanach';
	    $scope.profile.booked = 15;
	    $scope.profile.favorites = 245;

	    $scope.menus = [
	        { 'label': 'HOME', 'icon': 'fa-home', 'page' : 'modules/home/views/home.client.view.html' },
	        { 'label': 'SEARCH', 'icon': 'fa-search', 'page': 'modules/home/views/home.client.view.html' },
	        { 'label': 'MY BOOKING', 'icon': 'fa-search', 'page': 'modules/home/views/home.client.view.html' },
	        { 'label': 'SCHEDULE', 'icon': 'fa-calendar', 'page': 'modules/home/views/home.client.view.html' },
	        { 'label': 'CHAT', 'icon': 'fa-comments', 'page': 'modules/home/views/home.client.view.html' },
	        { 'label': 'NOTIFICATIONS', 'icon': 'fa-exclamation-circle', 'page': 'modules/home/views/home.client.view.html' },
	        { 'label': 'MY FAVORITES', 'icon': 'fa-exclamation-circle', 'page': 'modules/home/views/home.client.view.html' },
	        { 'label': 'SETTINGS', 'icon': 'fa-gear', 'page': 'modules/home/views/home.client.view.html' },
	    ];

	    $scope.showDetail = function($index) {
	        var selectedMenu = $scope.menus[$index];
	        alert(selectedMenu.label);
	    };

	    var i = 0;
	    var stop = $interval(function () {
	        i = (i + 1) % 3;
	        $scope.profile.booked = Math.round(Math.random() * 20);
	        $scope.profile.name = ['Pony Somrattanach', 'Poony Soomrattanach', 'Pooony Sooomrattanach'][i];
	        $scope.profile.favorites = Math.round(Math.random() * 5000);
	    }, 5000);

	    $scope.$on('$destroy', function () {
	        $interval.cancel(stop);
	        stop = undefined;
	    });
	}
]);
