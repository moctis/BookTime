'use strict';


angular.module('core').controller('MenuController', [
    '$scope', '$interval', '$state',
    function($scope, $interval, $state) {

        $scope.profile = [];
        $scope.profile.name = 'Pony Somrattanach';
        $scope.profile.booked = 15;
        $scope.profile.favorites = 245;

        $scope.menus = [
            { label: 'HOME', icon: 'fa-home', state: 'main.tab.home' },
            { label: 'SEARCH', icon: 'fa-search', page: 'modules/home/views/home.client.view.html' },
            { label: 'MY BOOKING', icon: 'fa-gear', page: 'modules/home/views/home.client.view.html' },
            { label: 'SCHEDULE', icon: 'fa-calendar', state: 'main.tab.schedule'},
            { label: 'CHAT', icon: 'fa-comments', state: 'main.tab.chat' },
            { label: 'NOTIFICATIONS', icon: 'fa-exclamation-circle', state: 'main.tab.notifications' },
            { label: 'MY FAVORITES', icon: 'fa-exclamation-circle', page: 'modules/home/views/home.client.view.html' },
            { label: 'SETTINGS', icon: 'fa-gear', state: 'main.tab.settings' },
            { label: 'ABOUT BOOKTIME', icon: 'fa-gear', page: 'modules/home/views/home.client.view.html', className: 'menu-about' },
            { label: 'SIGN OUT', icon: 'fa-gear', page: 'modules/home/views/home.client.view.html', className: 'menu-signout' }
        ];

        $scope.showDetail = function($index) {
            var selectedMenu = $scope.menus[$index];
            if (selectedMenu.state != undefined)
                $state.go(selectedMenu.state, null, {reload:true});
            else
                alert(selectedMenu.label);
        };

        $scope.getClass = function($index) {
            var menu = $scope.menus[$index];
            if (menu.className) {
                return menu.className;
            }
            return '';
        };

        var i = 0;
        var stop = $interval(function() {
            i = (i + 1) % 3;
            $scope.profile.booked = Math.round(Math.random() * 20);
            $scope.profile.name = ['Pony Somrattanach', 'Poony Soomrattanach', 'Pooony Sooomrattanach'][i];
            $scope.profile.favorites = Math.round(Math.random() * 5000);
        }, 5000);

        $scope.$on('$destroy', function() {
            $interval.cancel(stop);
            stop = undefined;
        });
    }
]);
