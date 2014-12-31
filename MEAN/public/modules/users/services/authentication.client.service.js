'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', ['$cookieStore',
  function($cookieStore) {
    var $this = this;

    $this.user = $cookieStore.get('user');
    $this.errorMessage = undefined;

    console.log('Authentication', $this.user);

    $this.isSignedIn = function() {
      return !!this.user;
    };

    $this.setUser = function(user) {
      $this.errorMessage = null;
      $this.user = user;
      $cookieStore.put('user', user);
    };

    $this.removeUser = function() {
      $this.user = undefined;
      $cookieStore.remove('user');
    };

    return $this;
  }
]);
