'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('shop').factory('Bookings', ['$resource', '$api',
  function($resource, $api) {
    return $resource($api.action('/api/bookings/:bookingId'), {
      bookingId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);