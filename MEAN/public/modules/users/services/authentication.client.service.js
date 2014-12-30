'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', '$http', [
  function($http) {
    var _this = this;

    _this._data = {
      user: window.user
    };

    $http.post(ApplicationConfiguration.server + '/users/me').success(function(response) {
      _this._data = response;
      console.log('response');
    }).error(function(response) {
      console.log('error');
    });

    console.log('$http.post');

    return _this._data;
  }
]);