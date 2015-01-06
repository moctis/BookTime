'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('home').factory('ShopsApi', ['$resource', '$api',
  function($resource, $api) {
    var res = $resource($api.action('/api/shops/:terms'), {}, {
      query: {
        method: 'GET',
        params: {
          terms: 'terms'
        },
        isArray: true
      }
    });

    // redefine the query method
    res.query2 = function() {
      // call the original query method via the _query alias, chaining $then to facilitate
      // processing the data
      res._query.apply(null, arguments).$then(function(res) {
        var data = res.data;
        // do any processing you need to do with data here
        console.log('data', data);
        return data;
      });
    };

    return res;
  }
]);


// Thank you
// http://www.acnenomor.com/4370694p1/angularjs-resource-classlevel-callbacks-or-postprocessing