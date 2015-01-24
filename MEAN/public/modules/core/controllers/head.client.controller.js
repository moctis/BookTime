'use strict';

angular.module('core').controller('HeadController', [
  '$scope', '$rootScope', '$interval', '$state', '$location', 'Authentication', '$api',
  function($scope, $rootScope, $interval, $state, $location, Authentication, $api) {

    $rootScope.$on('$viewHistory.historyChange', function(e, data) {
      $scope.showSearch = false;
    });

    $scope.showSearchClass = function() {
      return $scope.showSearch ? 'searching' : '';
    };

    $scope.toggleSearch = function() {
      $scope.showSearch = !$scope.showSearch;

      var searchScreen = $state.current.name === 'main.tab.home.list.food';
      if (!searchScreen) {
        $state.go('main.tab.home.list.food');
        $scope.showSearch = true;
      } else {
        $scope.showSearch = !$scope.showSearch;
      }
    };

  }
]);