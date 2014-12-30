'use strict';


angular.module('front').controller('frontController', [
  '$scope', '$location', '$http', 'Authorization',
  function($scope, $location, $http, Authorization) {
    $scope.credentials = {
      username: '',
      password: ''
    };

    Authorization.me().success(function(response) {
      console.log('Authorization.me()', response, response === null, response === undefined);
      if (response.username)
        $location.path('/main/tab/home/food');
    });


    // If user is signed in then redirect back home
    //if ($scope.authentication.user) $location.path('/main/tab/home/food');

    $scope.login = function() {
      $location.path('/main/tab/home/food');
    };

    $scope.carouselIndex = 0;
    $scope.slides = [1, 2, 3, 4];

    $scope.init = function() {

    };

    $scope.signin = function() {
      console.log($scope.credentials);
      $http.post(ApplicationConfiguration.server + '/auth/signin', $scope.credentials).success(function(response) {
        // If successful we assign the response to the global user model
        //$scope.authentication.user = response;
        // And redirect to the index page
        $location.path('/main/tab/home/food');
      }).error(function(response) {
        $scope.error = response.message;
      });
    };
  }
]);