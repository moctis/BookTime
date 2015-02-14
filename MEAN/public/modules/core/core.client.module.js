'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');

angular.module('core').service('Authenticationxx', ['$http', '$cookieStore',
  function($http, $cookieStore) {
    //Example of Authentication
    // https://github.com/pablodenadai/cors-restful-api/blob/master/client/app/scripts/authentication/AuthenticationModel.js


    this.user = $cookieStore.get('user');
    this.errorMessage = null;

    this.isSignedIn = function() {
      return !!this.user;
    };

    this.setUser = function(user) {
      this.errorMessage = null;
      this.user = user;
      $cookieStore.put('user', user);
    };

    this.removeUser = function() {
      this.user = null;
      $cookieStore.remove('user');
    };

    return this;


    /*return {
      me: function() {
        return $http.get(ApplicationConfiguration.server + '/users/me');
      }
    };*/
  }
]);