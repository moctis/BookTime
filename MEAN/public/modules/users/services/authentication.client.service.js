'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', ['$cookieStore', '$timeout',
  function($cookieStore, $timeout) {
    var $this = this;

    $this.user = $cookieStore.get('user');
    $this.errorMessage = undefined;

    console.log('Authentication', $this.user);

    $this.isSignedIn = function() {
      return !!this.user;
    };

    $this.hasRole = function(role) {
      return true; //TODO: check admin role
    }

    $this.setUser = function(user) {
      $this.errorMessage = null;
      $this.user = user;
      $cookieStore.put('user', user);
    };

    $this.checkLoggedIn = function($q, $timeout, $http, $location) {
      var deferred = $q.defer();
      console.log('checkLoggedIn - Authentication', $this.user);

      // Make an AJAX call to check if the user is logged in
      $http.get(ApplicationConfiguration.server + '/users/me?access_token=' + $this.user.token)
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

    return $this;
  }
]);
