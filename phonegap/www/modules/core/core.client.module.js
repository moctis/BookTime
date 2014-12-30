'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');

angular.module('core').service('Authorization', ['$http',
  function($http) {
    return {
      me: function() {
        return $http.get(ApplicationConfiguration.server + '/users/me');
      }
    };
  }
]);