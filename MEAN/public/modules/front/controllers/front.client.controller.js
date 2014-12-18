'use strict';


angular.module('front').controller('frontController', [
  '$scope', '$location', '$http', 'Authentication',
  function($scope, $location, $http, Authentication) {
    $scope.credentials = {
      username: '',
      password: ''
    };

    $scope.authentication = Authentication;


    // If user is signed in then redirect back home
    if ($scope.authentication.user) $location.path('/main/tab/home/food');

    $scope.login = function() {
      $location.path('/main/tab/home/food');
    };

    $scope.carouselIndex = 0;
    $scope.slides = [1, 2, 3, 4];

    $scope.init = function() {

    };

    $scope.signin = function() {
      console.log($scope.credentials);

      //ref: https://gist.github.com/kkurni/4618210

      var $apihost = 'http://localhost:3003';
      $http.post($apihost + '/auth/signin', $scope.credentials, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;'
        }
      }).success(function(response) {
        // If successful we assign the response to the global user model
        $scope.authentication.user = response;

        // And redirect to the index page
        $location.path('/main/tab/home/food');
      }).error(function(response) {
        $scope.error = response.message;
      });
    };
  }
]);