'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('users').factory('AdminShops', ['$resource', '$api',
function($resource, $api) {
  return $resource($api.action('/admin/shops/:shopId') , {
    shopId: '@_id'
  }, {
    update: {
      method: 'PUT'
    }
  });
}
]);
