'use strict';


angular.module('admin').controller('AdminController', [
  '$scope', '$interval', '$state', '$location', 'Authentication',
  function($scope, $interval, $state, $location, Authentication) {
    $scope.user = Authentication.user || {};

    $scope.profile = [];
    $scope.profile.name = $scope.user.displayName;
    $scope.profile.img = 'res/screen/share/2x/profile.png';
    $scope.profile.booked = 15;
    $scope.profile.favorites = 245;

    $scope.menus = [{
      label: 'SHOPS',
      icon: 'fa-home',
      state: 'admin.shops'
    }, {
      label: 'EXIT ADMIN',
      icon: 'fa-sign-out',
      url: '/main/tab/home/food',
      className: 'menu-signout'
    }];

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

  }
]);