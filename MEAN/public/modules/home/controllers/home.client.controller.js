'use strict';


angular.module('core').controller('HomeController', ['$scope', '$rootScope',
	function ($scope, $rootScope) {
	    var ons = $rootScope.ons || {};
	    
	    $scope.items = [];

	    $scope.showDetail = function(shop) {
	        ons.navigator.pushPage('modules/home/views/shop.client.view.html');
	    };

	    $scope.getData = function () {
	        var basepath = 'res/shops/';
	        console.log(ons);
	        var mock = function() {
	            return {
	                name: ['Bangkok Shokudo','Sushi Masa', 'Staw wery'].random(),
	                rank:[3,4,5].random(),
	                distance: ['2.4km away', '14km away', '0.4km away'].random(),
	                booked: ['3.4k', '200', '15k'].random(),
	                image: basepath + ['shop-1.jpg', 'shop-2.jpg'].random()
	            };
	        };

	        var newItems = [mock(), mock(), mock(), mock()];
	       
	        angular.forEach(newItems, function (item) {
	            $scope.items.push(item);
	        });
	    };

	    $scope.food = function () {
	        //alert('food');
	        $('.groupBarButton').removeClass('active');
	        $('.groupBarButton-food').addClass('active');
	        $scope.items = [];
	        $scope.getData();
	    };

	    $scope.service = function () {
	        //alert('service');
	        $('.groupBarButton').removeClass('active');
	        $('.groupBarButton-service').addClass('active');
	        $scope.items = [];
	        $scope.getData();
	    };

	    $scope.hilight = function () {
	        //alert('hilight');
	        $('.groupBarButton').removeClass('active');
	        $('.groupBarButton-hilight').addClass('active');
	        $scope.items = [];
	        $scope.getData();
	    };

	    $scope.getData();
	}
]);
