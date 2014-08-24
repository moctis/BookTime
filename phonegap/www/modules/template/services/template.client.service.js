'use strict';

//Menu service used for managing  menus
angular.module('template').service('TemplateService', [

    function() {
        // A private function for rendering decision 
        var getData = function(count) {
            var data = [];
            for (var i = 0; i < count; i++) {
                data.push({
                    'id': i,
                    'value': 'value' + i
                });
            }
            return data;
        };
    }
]);
