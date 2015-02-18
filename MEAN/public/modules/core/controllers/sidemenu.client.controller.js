'use strict';

angular.module('core').controller('SidemenuController', [
  '$scope', '$interval', '$state', '$location', 'Authentication', '$api', '$rootScope',
  function($scope, $interval, $state, $location, Authentication, $api, $rootScope) {
    $scope.user = Authentication.user() || {};

    $scope.profile = {};
    $scope.profile.name = $scope.user.displayName;
    $scope.profile.img = 'res/screen/share/2x/profile-pic.png';
    $scope.profile.booked = 15;
    $scope.profile.favorites = 245;
    // console.log('profile ' + $scope.profile.name);

    $scope.toggleSearch = function() {
      $rootScope.$broadcast('toggleSearch');
    };

    $scope.menus = [{
      label: 'HOME',
      icon: 'fa-home',
      state: 'main.tab.home.list.food'
    }, {
      label: 'SEARCH',
      icon: 'fa-search',
      action: $scope.toggleSearch
    }, {
      label: 'SCHEDULE',
      icon: 'fa-calendar',
      state: 'main.tab.schedule'
    }, {
      label: 'BOOKTIME',
      icon: 'fa-clock-o',
      state: 'main.tab.chat'
    }, {
      label: 'NOTIFICATIONS',
      icon: 'fa-exclamation-circle',
      state: 'main.tab.notifications.list'
    }, {
      label: 'MY FAVORITES',
      icon: 'fa-star-o',
      page: 'modules/home/views/home.client.view.html'
    }, {
      label: 'SETTINGS',
      icon: 'fa-gear',
      state: 'main.tab.settings.menu'
    }, {
      label: 'SIGN OUT',
      icon: 'fa-sign-out',
      state: 'signout',
      className: 'menu-signout'
    }];



    var isAdmin = Authentication.hasRole('admin');

    if (isAdmin) {
      $scope.menus.push({
        label: 'ADMIN',
        icon: 'fa-gear',
        state: 'admin.shops'
      });
    }

    $scope.menus.push({
      label: 'Test',
      icon: 'fa-gear',
      state: 'main.tab.test'
    });

    $scope.showDetail = function($index) {
      var selectedMenu = $scope.menus[$index];
      console.log('selectedMenu', selectedMenu);
      if (selectedMenu.state !== undefined)
        $state.go(selectedMenu.state, null, {
          reload: true
        });
      else if (selectedMenu.url !== undefined)
        $location.path(selectedMenu.url);
      else if (selectedMenu.action !== undefined) {
        selectedMenu.action();
      } else
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