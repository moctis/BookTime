'use strict';

angular.module('core').controller('SidemenuController', [
  '$scope', '$interval', '$state', '$location', 'Authorization',
  function($scope, $interval, $state, $location, Authorization) {
    $scope.profile = [];
    $scope.profile.name = window.user.diaplayName;
    $scope.profile.img = 'res/screen/share/2x/profile.png';
    $scope.profile.booked = 15;
    $scope.profile.favorites = 245;

    var x = Authorization;
    x.me().success(function(response) {
      $scope.user = response;
      console.log('response', response);
      $scope.profile.name = $scope.user.displayName;
    });

    $scope.menus = [{
        label: 'HOME',
        icon: 'fa-home',
        state: 'main.tab.home.food'
      }, {
        label: 'SEARCH',
        icon: 'fa-search',
        page: 'modules/home/views/home.client.view.html'
      }, {
        label: 'MY BOOKING',
        icon: 'fa-gear',
        page: 'modules/home/views/home.client.view.html'
      }, {
        label: 'SCHEDULE',
        icon: 'fa-calendar',
        state: 'main.tab.schedule'
      }, {
        label: 'CHAT',
        icon: 'fa-comments',
        state: 'main.tab.chat'
      }, {
        label: 'NOTIFICATIONS',
        icon: 'fa-exclamation-circle',
        state: 'main.tab.notifications'
      }, {
        label: 'MY FAVORITES',
        icon: 'fa-star-o',
        page: 'modules/home/views/home.client.view.html'
      }, {
        label: 'SETTINGS',
        icon: 'fa-gear',
        state: 'main.tab.settings'
      },
      /*{ label: 'ABOUT BOOKTIME', icon: 'fa-gear', page: 'modules/home/views/home.client.view.html', className: 'menu-about' },*/
      {
        label: 'SIGN OUT',
        icon: 'fa-sign-out',
        state: 'signout',
        className: 'menu-signout'
      }
    ];

    $scope.showDetail = function($index) {
      var selectedMenu = $scope.menus[$index];
      if (selectedMenu.state !== undefined)
        $state.go(selectedMenu.state, null, {
          reload: true
        });
      else if (selectedMenu.url !== undefined)
        $location.path(selectedMenu.url);
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
    /*
        var i = 0;
        var stop = $interval(function() {
          i = (i + 1) % 2;
          $scope.profile.booked = Math.round(Math.random() * 20);
          $scope.profile.img = ['res/screen/share/2x/profile.png', 'res/screen/share/2x/profile-pic.png'][i];
          $scope.profile.name = ['Pony Somrattanach', 'Pooony Sooomrattanach'][i];
          $scope.profile.favorites = Math.round(Math.random() * 5000);
        }, 5000);

    $scope.$on('$destroy', function() {
      $interval.cancel(stop);
      stop = undefined;
    });    */
  }
]);