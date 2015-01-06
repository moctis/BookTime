'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', ['$cookieStore', '$timeout', '$q',
  '$http', '$location', '$api', '$window',
  function($cookieStore, $timeout, $q, $http, $location, $api, $window) {
    var $this = this;

    $this.user = $cookieStore.get('user');
    $this.errorMessage = undefined;


    $this.isSignedIn = function() {
      return !!$window.sessionStorage.token;
    };

    $this.hasRole = function(role) {
      return true; //TODO: check admin role
    }

    $this.setUser = function(user) {
      $this.errorMessage = null;
      $this.user = user;
      $window.sessionStorage.token = user.token;
      $cookieStore.put('user', user);
    };

    $this.checkLoggedIn = function() {
      console.log('AuthenticationService.checkLoggedIn', $this.user.username);
      // Make an AJAX call to check if the user is logged in
      $api.get('/users/me');
    };

    $this.removeUser = function() {
      delete $window.sessionStorage.token;
      $this.user = undefined;
      $cookieStore.remove('user');
    };

    return {
      user: $this.user,
      setUser: $this.setUser,
      hasRole: $this.hasRole,
      removeUser: $this.removeUser,
      isSignedIn: $this.isSignedIn,
      checkLoggedIn: $this.checkLoggedIn
    };
  }
]);