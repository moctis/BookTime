'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('home').factory('ShopsApi', ['$resource', '$api',
  function($resource, $api) {
    var res = $resource($api.action('/api/shops/:shopId'), {
      shopId: '@_id'
    }, {
      query: {
        method: 'GET',
        params: {
          terms: 'terms'
        },
        isArray: true
      }
    });
    /*var res = $resource($api.action('/api/shops/:terms') , {}, {
      query: {method:'GET', params:{terms:'terms'}, isArray:true}
    });*/

    return res;
  }
]);


// Thank you
// http://www.acnenomor.com/4370694p1/angularjs-resource-classlevel-callbacks-or-postprocessing