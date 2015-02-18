'use strict';

angular.module('core').controller('HeadController', [
  '$scope', '$rootScope', '$interval', '$state', '$location', 'Authentication', '$api', '$timeout',
  function($scope, $rootScope, $interval, $state, $location, Authentication, $api, $timeout) {
    $scope.showSearch = false;
    $scope.searchInput = '';
    var timeout = false;

    $rootScope.$on('$viewHistory.historyChange', function(e, data) {
      var atSearchScreen = $state.current.name === 'main.tab.home.list.food';
      if (!atSearchScreen) {
        $scope.showSearch = false;
      }
    });

    $scope.showSearchClass = function() {
      return $scope.showSearch ? 'searching' : '';
    };

    $scope.$on('toggleSearch', function(event) {
      $scope.toggleSearch();
    });

    $scope.toggleSearch = function() {
      var atSearchScreen = ($state.current.name === 'main.tab.home.list.food') ||
        ($state.current.name === 'main.tab.home.list.services') ||
        ($state.current.name === 'main.tab.home.list.recommend');
      // console.log($scope.showSearch, 'x', atSearchScreen);
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


    $scope.$watch('searchInput', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (timeout) {
          $timeout.cancel(timeout);
        }
        timeout = $timeout($scope.searchChange, 1000);
      }

    });

    $scope.searchChange = function() {
      console.log('searchInput', $scope.searchInput);
      $rootScope.$broadcast('searchChange', {
        searchInput: $scope.searchInput
      });
    };
  }
]);