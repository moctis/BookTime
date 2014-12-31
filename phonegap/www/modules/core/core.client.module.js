'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');

angular.module('core').service('Authorization', ['$http',
  function($http) {
    //Example of Authentication
    // https://github.com/pablodenadai/cors-restful-api/blob/master/client/app/scripts/authentication/AuthenticationModel.js
    return {
      me: function() {
        return $http.get(ApplicationConfiguration.server + '/users/me');
      }
    };
  }
]);
