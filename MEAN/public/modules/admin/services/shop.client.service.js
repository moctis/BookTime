'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('users').factory('Shops', ['$resource',
function($resource) {
  return $resource(ApplicationConfiguration.server + '/admin/shops' , {}, {
    update: {
      method: 'PUT'
    }
  });
}
]);
