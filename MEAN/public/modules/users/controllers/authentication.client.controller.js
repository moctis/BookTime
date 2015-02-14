'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication',
  function($scope, $http, $location, Authentication) {
    $scope.authentication = Authentication;
    if ($scope.authentication.user) $location.path('/');
    /*
        $scope.credentials = {
          firstName: 'sit',
          lastName: 'sit',
          email: 'sit@sit.com',
          username: 'sit' + (new Date()).getSeconds(),
          password: 'sitsitsitsit'
        };
    */
    // If user is signed in then redirect back home


    $scope.signup = function() {
      $http.post(ApplicationConfiguration.server + '/auth/signup', $scope.credentials).success(function(response) {
        // If successful we assign the response to the global user model
        $scope.authentication.user = response;

        // And redirect to the index page
        $location.path('/');
      }).error(function(response) {
        $scope.error = response.message;
      });
    };

    $scope.signin = function() {
      $http.post(ApplicationConfiguration.server + '/auth/signin', $scope.credentials).success(function(response) {
        // If successful we assign the response to the global user model
        $scope.authentication.user = response;

        // And redirect to the index page
        $location.path('/');
      }).error(function(response) {
        $scope.error = response.message;
      });
    };

    $scope.signout = function() {
      console.log('signout');
      $http.get(ApplicationConfiguration.server + '/auth/signout').success(function(response) {
        console.log('success', response);
        $scope.authentication.removeUser();
        $location.path('/');
      }).error(function(response) {
        console.log('error', response);
        $scope.error = response.message;
        $scope.authentication.removeUser();
        $location.path('/');
      });
    };
  }
]);