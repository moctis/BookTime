'use strict';


angular.module('front').controller('frontController', [
  '$scope', '$location', '$http', 'Authentication', '$api',
  function($scope, $location, $http, Authentication, $api) {
    var homeLocal = '/main/tab/home/food';

    $scope.authentication = Authentication;
    //if ($scope.authentication.user !== undefined) $location.path('/main/tab/home/food');

    $scope.credentials = {
      username: 'sitthidate',
      password: 'sitcomsitcom'
    };


    $scope.login = function() {
      $location.path(homeLocal);
    };

    $scope.carouselIndex = 0;
    $scope.slides = [1, 2, 3, 4];

    $scope.init = function() {
      if (Authentication.isSignedIn()) {
        $location.path(homeLocal);
      };
    };

    $scope.signin = function() {
      //console.log($scope.credentials);
      //$http.post(ApplicationConfiguration.server + '/auth/signin', $scope.credentials)
      $api
        .post('/auth/signin', $scope.credentials)
        .success(function(response) {
          //console.log('login success--', response);
          $scope.authentication.setUser(response);

          // And redirect to the index page
          $location.path(homeLocal);
        })
        .error(function(response) {
          $scope.authentication.removeUser();
          $scope.error = response.message;
        });
    };
  }
]);