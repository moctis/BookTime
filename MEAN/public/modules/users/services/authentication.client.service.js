'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', ['$cookieStore', '$timeout', '$q',
  '$http', '$location', '$api',
  function($cookieStore, $timeout, $q, $http, $location, $api) {
    var $this = this;

    $this.user = $cookieStore.get('user');
    $this.errorMessage = undefined;


    $this.isSignedIn = function() {
      return !!this.user;
    };

    $this.hasRole = function(role) {
      return true; //TODO: check admin role
    }

    $this.setUser = function(user) {
      $this.errorMessage = null;
      $this.user = user;
      $http.defaults.headers.common.authorization = 'Bearer ' + user.token;
      $cookieStore.put('user', user);
    };

    $this.checkLoggedIn = function() {

      console.log('AuthenticationService.checkLoggedIn', $this.user.username);

      var deferred = $q.defer();

      // Make an AJAX call to check if the user is logged in
      $api.get('/users/me')
        .success(function(user) {
        // Not Authenticated
        console.log('/user/me', user);
        if (user === 'Unauthorized') {
          $timeout(deferred.reject);
          $location.url('/login');
        }

        // Authenticated
        else {
          console.log('resolve');
          $timeout(deferred.resolve);
        }
      });
      return deferred.promise;
    };

    $this.removeUser = function() {
      $this.user = undefined;
      $cookieStore.remove('user');
    };

    return {
      user : $this.user,
      setUser : $this.setUser,
      hasRole : $this.hasRole,
      removeUser: $this.removeUser,
      isSignedIn: $this.isSignedIn,
      checkLoggedIn: $this.checkLoggedIn
    };
  }
]);
