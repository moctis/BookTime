'use strict';


angular.module('front').controller('FrontController', [
    '$scope', '$location',
    function($scope, $location) {
        $scope.login = function () { 
            $location.path('/main/tab/home');
        };         
    }
]);
