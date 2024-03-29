'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
  // Init module configuration options
  var applicationModuleName = 'booktime';
  var applicationModuleVendorDependencies = [
    'ngResource',
    'ngCookies',
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'ui.bootstrap',
    'ui.utils',
    'ui.calendar', //woody
    'ratings',
    'angular-carousel', //woody
    'mgcrea.ngStrap',
    'ionic',
    'ngCordova',
    'angularMoment',
    'angularFileUpload'
  ];

  // Add a new vertical module
  var registerModule = function(moduleName, dependencies) {
    // Create angular module
    angular.module(moduleName, dependencies || []);

    // Add the module to the AngularJS configuration file
    angular.module(applicationModuleName).requires.push(moduleName);
  };

  return {
    applicationModuleName: applicationModuleName,
    applicationModuleVendorDependencies: applicationModuleVendorDependencies,
    registerModule: registerModule,
    server: 'http://103.13.30.64:3003' // don't put  / on tail
      //server: 'http://192.168.1.115:3003' // don't put  / on tail
  };
})();