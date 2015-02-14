'use strict';


angular.module('core').directive('disableAnimation', function($animate) {
  return {
    restrict: 'A',
    link: function($scope, $element, $attrs) {
      $attrs.$observe('disableAnimation', function(value) {
        $animate.enabled(!value, $element);
      });
    }
  };
});


angular.module('core').directive('focusme', function($timeout) {
  return {
    scope: {
      focusme: '@'
    },
    link: function(scope, element, $attrs) {
      console.log('link', element, $attrs);

      function doFocus() {
        $timeout(function() {
          console.log('dofocus', element[0]);
          element[0].focus();
        });
      }

      console.log('scope.focus', $attrs.focusme);
      if ($attrs.focusme !== null) {
        // focus unless attribute evaluates to 'false'
        if ($attrs.focusme !== 'false') {
          doFocus();
        }

        // focus if attribute value changes to 'true'
        console.log('scope.focusme', scope.focusme);
        scope.$watch(function() {
          return scope.focusme;
        }, function(value) {
          console.log('watch', value);
          if (value === 'true') {
            doFocus();
          }
        });
      } else {
        // if attribute value is not provided - always focus
        doFocus();
      }

    }
  };
});