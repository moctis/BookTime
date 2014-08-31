'use strict';


angular.module('core').controller('HomeController', ['$scope',
	function($scope) {
	    $scope.items = [];

	    $scope.getData = function() {
	        var basepath = 'res/screen/share/2x/';
	        var newItems = [
	            { src: basepath + '02_mainpage_content1.jpg' },
	            { src: basepath + '02_mainpage_content2.jpg' },
	            { src: basepath + '02_mainpage_content1.jpg' },
	            { src: basepath + '02_mainpage_content2.jpg' }
	        ];

	        angular.forEach(newItems, function(item) {
	            $scope.items.push(item);
	        });
	    };

	    $scope.food = function () {
	        //alert('food');
	        $('.groupBarButton').removeClass('active');
	        $('.groupBarButton-food').addClass('active');
	       
	    };

	    $scope.service = function () {
	        //alert('service');
	        $('.groupBarButton').removeClass('active');
	        $('.groupBarButton-service').addClass('active');
	        
	    };

	    $scope.hilight = function () {
	        //alert('hilight');
	        $('.groupBarButton').removeClass('active');
	        $('.groupBarButton-hilight').addClass('active');
	        
	    };

	    $scope.getData();
	}
]);
