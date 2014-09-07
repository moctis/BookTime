'use strict';

// Setting up route
angular.module('core').config([
    '$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $stateProvider.state('main.tab.chat', {
                url: "/chat",
                views: {
                    'chat-tab': {
                        templateUrl: "modules/chat/views/chat.html"
                    }
                }
            });

        $urlRouterProvider.otherwise("/main/tab/home");
    }
]);