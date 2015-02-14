'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('schedules').factory('Schedules', ['$resource', '$api',
  function($resource, $api) {
    return $resource($api.action('/api/schedules'), {
      bookingId: '@_id'
    }, {
      query: {
        method: 'GET',
        isArray: true
      }
    });
  }
]);