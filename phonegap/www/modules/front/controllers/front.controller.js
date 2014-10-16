'use strict';


angular.module('front').controller('frontController', [
    '$scope', '$location',
    function($scope, $location) {
        $scope.login = function () { 
            $location.path('/main/tab/home');
        };         
    }
]);
