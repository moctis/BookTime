'use strict';


angular.module('admin').controller('AdminController', [
  '$scope', '$interval', '$state', '$location',
  function($scope, $interval, $state, $location) {
    $scope.profile = [];
    $scope.profile.name = window.user.diaplayName;
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
    });
  }
]);