'use strict';

angular.module('core').directive('fadeBar', function ($timeout) {
    return {
        restrict: 'E',
        template: '<div class="fade-bar"></div>',
        replace: true,
        link: function ($scope, $element, $attr) {
            $timeout(function () {
                $scope.$watch('sideMenuController.getOpenRatio()', function (ratio) {
                    ratio = 1;
                    $element[0].style.opacity = Math.abs(ratio);
                });
            });
        }
    };
});