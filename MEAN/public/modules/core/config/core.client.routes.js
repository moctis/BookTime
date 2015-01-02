'use strict';

//Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider ) {

    var checkLoggedIn2 = function(Authentication, $api) {  
      Authentication.checkLoggedIn();
    };

    var checkLoggedIn = function($q, $timeout, $http, $location, Authentication, $api) {
      // Initialize a new promise
      var deferred = $q.defer();
      var user = Authentication.user;

      $api.test('core.route');

      console.log('checkLoggedIn - Authentication xxx', user);

      console.log(Authentication.checkLoggedIn);


      // Make an AJAX call to check if the user is logged in
      $http.get(ApplicationConfiguration.server + '/users/me?access_token=' + user.token)
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

    $urlRouterProvider.otherwise('/front');
    // Core state routing
    $stateProvider.
    state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'modules/core/views/main.client.view.html',
      resolve : {
        checkLoggedIn : checkLoggedIn2
      }
    }).state('main.tab', {
      url: '/tab',
      abstract: true,
      views: {
        'menuContent': {
          templateUrl: 'modules/core/views/tabs.client.view.html'
        }
      }
    });
  }
]);
