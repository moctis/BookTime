'use strict';

//Menu service used for managing  menus
angular.module('core').factory('$api', ['$cookieStore', '$http',
  function($cookieStore, $http) {


    // will imlement https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/
    var test = function(n) {
      console.log('ApiService.Test', n);
    }

    var action = function(url) {
      return ApplicationConfiguration.server + url;//+ "?access_token=" +getToken() ;
    }

    var getToken = function() {
      return ($cookieStore.get('user') || {}).token;
    };

    var headerToken = function() {
      var header = { access_token : getToken() };
      console.log('header', header);
      return header;
    }

    var get = function(url) {
      return $http.get(action(url));
    }

    var post = function(url, data) {
      return $http.post(action(url), data);
    }

    return {
      test : test,
      action : action,
      headerToken : headerToken,
      get: get,
      post: post,
    }
  }
]);

 
