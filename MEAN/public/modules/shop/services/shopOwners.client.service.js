'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('shop').factory('ShopOwners', ['$resource', '$api',
  function($resource, $api) {
    return $resource($api.action('/api/shops-owner/:shopId'), {
      shopId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);