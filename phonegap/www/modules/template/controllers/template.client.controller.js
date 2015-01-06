'use strict';


angular.module('template').controller('templateController', [
  '$scope', 'templateService',

  function($scope, TemplateService) {
    //console.log('Users ', Users);
    //$scope.templateService = new TemplateService();

    $scope.helloMessage = 'Hello World';
    //$scope.data = $scope.templateService.getData(4);
  }
]);