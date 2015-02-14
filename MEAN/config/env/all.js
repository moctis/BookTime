'use strict';

var path = require('path');

module.exports = {
  app: {
    title: 'Booktime',
    description: 'Full-Stack JavaScript with MongoDB, Express, AngularJS, and Node.js',
    keywords: 'MongoDB, Express, AngularJS, Node.js'
  },
  port: process.env.PORT || 3003,
  templateEngine: 'swig',
  sessionSecret: 'MEAN',
  sessionCollection: 'sessions',
  imagesPath: path.normalize(__dirname + '/../../../images/'),
  assets: {
    lib: {
      css: [
        'public/lib/bootstrap/css/bootstrap.css',
        'public/lib/bootstrap/css/bootstrap-theme.css',
        'public/lib/ionic/css/ionic.css',
        'public/lib/Font-Awesome/css/font-awesome.css',
        'public/lib/angular-carousel/angular-carousel.css', //woody
        'public/lib/fullcalendar/fullcalendar.css', //woody
        'public/lib/fullcalendar/fullcalendar-theme.css', //woody
        'public/lib/others/others.css'
      ],
      js: [

        'public/lib/ionic/js/ionic.bundle.js',
        //                'public/lib/ionic/js/ionic.js',
        //				'public/lib/angular/angular.js',
        'public/lib/jquery/jquery.js',
        'public/lib/jquery-ui/ui/jquery-ui.js',
        'public/lib/angular-animate/angular-animate.js',
        'public/lib/angular-sanitize/angular-sanitize.js',
        //				'public/lib/angular-ui-router/angular-ui-router.js',
        //				'public/lib/ionic/js/ionic-angular.js',

        'public/lib/angular-resource/angular-resource.js',
        'public/lib/angular-cookies/angular-cookies.js',
        'public/lib/angular-touch/angular-touch.js',
        'public/lib/angular-ui-utils/ui-utils.js',
        'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
        'public/lib/angular-carousel/angular-carousel.js', //woody
        'public/lib/angular-strap/angular-strap.js',
        'public/lib/moment/moment.js',
        'public/lib/angular-moment/angular-moment.js',
        'public/lib/ng-cordova/ng-cordova.js',
        'public/cordova.js',
        'public/lib/others/angular.ratings.js',
        'public/lib/ng-file-upload/angular-file-upload-shim.js',
        'public/lib/ng-file-upload/angular-file-upload.min.js',
        'public/lib/fullcalendar/fullcalendar.js',
        'public/lib/angular-ui-calendar/calendar.js'
      ]
    },
    css: [
      'public/modules/**/css/**.css',
      'public/res/**/**.css'
    ],
    js: [
      'public/config.js',
      'public/application.js',
      'public/modules/*/*.js',
      'public/modules/*/*[!tests]*/*.js'
    ],
    tests: [
      'public/lib/angular-mocks/angular-mocks.js',
      'public/modules/*/tests/*.js'
    ]
  }
};