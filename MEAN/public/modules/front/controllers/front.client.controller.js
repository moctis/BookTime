'use strict';


angular.module('front').controller('frontController', [
    '$scope', '$location',
    function($scope, $location) {
        $scope.login = function () { 
            $location.path('/main/tab/home/food');
        };       

		/*function getSlide(target) {
            var i = target.length;
            return {
                id: (i + 1),
                label: 'slide #' + (i + 1),
                img: 'res/screen/share/2x/intro0' + (i + 1) + '.png' ,             
                odd: (i % 2 === 0)
            };
        }*/

        $scope.carouselIndex = 0;

        /*function addSlides(target, qty) {
            for (var i=0; i < qty; i++) {
                target.push(getSlide(target));
            }
        }
        // 1st ngRepeat demo
        $scope.slides = [];
        addSlides($scope.slides, 3);*/
        $scope.slides = [1,2,3,4];
        
    }
]);
