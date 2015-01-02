'use strict';


angular.module('front').controller('frontController', [
  '$scope', '$location', '$http', 'Authentication',
  function($scope, $location, $http, Authentication) {
    $scope.authentication = Authentication;
    //if ($scope.authentication.user !== undefined) $location.path('/main/tab/home/food');
     


    $scope.credentials = {
      username: 'sitthidate',
      password: 'sitcomsitcom'
    };


    $scope.login = function() {
      $location.path('/main/tab/home/food');
    };

    $scope.carouselIndex = 0;
    $scope.slides = [1, 2, 3, 4];

    $scope.init = function() {

    };

    $scope.signin = function() {
      console.log($scope.credentials);
      $http.post(ApplicationConfiguration.server + '/auth/signin', $scope.credentials)
      .success(function(response) {
        console.log('login success--', response);
        $scope.authentication.setUser(response);

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
