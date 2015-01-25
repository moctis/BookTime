'use strict';

angular.module('core').controller('HeadController', [
  '$scope', '$rootScope', '$interval', '$state', '$location', 'Authentication', '$api',
  function($scope, $rootScope, $interval, $state, $location, Authentication, $api) {
    $scope.showSearch = false;
    $rootScope.$on('$viewHistory.historyChange', function(e, data) {
      var atSearchScreen = $state.current.name === 'main.tab.home.list.food';
      if (!atSearchScreen) {
        $scope.showSearch = false;
      }
    });

    $scope.showSearchClass = function() {
      return $scope.showSearch ? 'searching' : '';
    };

    $scope.toggleSearch = function() {

      var atSearchScreen = $state.current.name === 'main.tab.home.list.food';
      console.log($scope.showSearch, 'x', atSearchScreen);
      if (!atSearchScreen) {
        $state.go('main.tab.home.list.food');
        $scope.showSearch = true;
      } else {
        $scope.showSearch = !$scope.showSearch;
      }

      if ($scope.showSearch) {
        $('#searchInput').focus();
      }
    };

  }
]);