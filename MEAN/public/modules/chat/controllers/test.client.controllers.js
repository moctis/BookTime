'use strict';


angular.module('chat').controller('TestController', [
  '$scope', '$location', '$cookieStore',
  function($scope, $location, $cookieStore) {
    $scope.bodyClass = $('body')[0].className;
    $scope.screenWidth = $('body').width();




    $scope.getPPI = function() {
      // create an empty element
      var div = document.createElement('div');
      // give it an absolute size of one inch
      div.style.width = '1in';
      // append it to the body
      var body = document.getElementsByTagName('body')[0];
      body.appendChild(div);
      // read the computed width
      var ppi = document.defaultView.getComputedStyle(div, null).getPropertyValue('width');
      // remove it again
      body.removeChild(div);
      // and return the value
      return parseFloat(ppi);
    };

    $scope.getDevicePixelRatio = function() {
      var ratio = 1;
      // To account for zoom, change to use deviceXDPI instead of systemXDPI
      if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI >
        window.screen.logicalXDPI) {
        // Only allow for values > 1
        ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
      } else if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio;
      }
      return ratio;
    };

  }






]);