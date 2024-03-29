'use strict';

module.exports = function(grunt) {
  // Unified Watch Object
  var watchFiles = {
    serverViews: ['app/views/**/*.*'],
    serverJS: ['gruntfile.js', 'server.js', 'config/**/*.js', 'app/**/*.js'],
    clientViews: ['public/modules/**/views/**/*.html'],
    clientJS: ['public/js/*.js', 'public/modules/**/*.js'],
    clientCSS: ['public/modules/**/**.css', 'public/res/**/css/**.css'],
    mochaTests: ['app/tests/**/*.js'],
    publicAll: ['public/**']
  };

  // Project Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      serverViews: {
        files: watchFiles.serverViews,
        options: {
          livereload: true
        }
      },
      serverJS: {
        files: watchFiles.serverJS,
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      clientViews: {
        files: watchFiles.clientViews,
        options: {
          livereload: true,
        }
      },
      clientJS: {
        files: watchFiles.clientJS,
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      clientCSS: {
        files: watchFiles.clientCSS,
        tasks: ['csslint'],
        options: {
          livereload: true
        }
      },
      publicAll: {
        files: watchFiles.publicAll,
        tasks: ['sync']
      }
    },
    jshint: {
      all: {
        src: watchFiles.clientJS.concat(watchFiles.serverJS),
        options: {
          jshintrc: true
        }
      }
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc',
      },
      all: {
        src: watchFiles.clientCSS
      }
    },
    uglify: {
      production: {
        options: {
          mangle: false
        },
        files: {
          'public/dist/application.min.js': 'public/dist/application.js'
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'public/dist/application.min.css': '<%= applicationCSSFiles %>'
        }
      }
    },
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          nodeArgs: ['--debug'],
          ext: 'js,html',
          watch: watchFiles.serverViews.concat(watchFiles.serverJS)
        }
      }
    },
    'node-inspector': {
      custom: {
        options: {
          'web-port': 1337,
          'web-host': 'localhost',
          'debug-port': 5858,
          'save-live-edit': true,
          'no-preload': true,
          'stack-trace-limit': 50,
          'hidden': []
        }
      }
    },
    ngmin: {
      production: {
        files: {
          'public/dist/application.js': '<%= applicationJavaScriptFiles %>'
        }
      }
    },
    concurrent: {
      default: ['nodemon', 'watch'],
      debug: ['nodemon', 'watch', 'node-inspector'],
      options: {
        logConcurrentOutput: true
      }
    },
    env: {
      test: {
        NODE_ENV: 'test'
      }
    },
    mochaTest: {
      src: watchFiles.mochaTests,
      options: {
        reporter: 'spec',
        require: 'server.js'
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },
    sync: {
      main: {
        files: [{
          expand: true,
          cwd: 'public',
          src: ['**'],
          dest: '../phonegap/www'
        }],
        updateOnly: true
      }
    },
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'public',
          src: ['**'],
          dest: '../phonegap/www'
        },
      {
        src: ['public/index-phonegap.html'],
        dest: '../phonegap/www/index.html'
      }
        ]
      }
    },
    bowercopy: {
      options: {
        srcPrefix: 'bower_components',
        destPrefix: 'public/lib'
      },
      scripts: {
        files: {
          'angular': 'angular/angular.*',
          'angular-animate': 'angular-animate/angular-animate.*',
          'angular-bootstrap': 'angular-bootstrap/ui-bootstrap-tpls.*',
          'angular-cookies': 'angular-cookies/angular-cookies.*',
          'angular-mocks': 'angular-mocks/angular-mocks.*',
          'angular-resource': 'angular-resource/angular-resource.*',
          'angular-sanitize': 'angular-sanitize/angular-sanitize.*',
          'angular-touch': 'angular-touch/angular-touch.*',
          'angular-ui-router': 'angular-ui-router/release/angular-ui-router*',
          'angular-ui-utils': 'angular-ui-utils/ui-utils*',
          'bootstrap': 'bootstrap/dist',
          'jquery': 'jquery/dist',
          //'angular-carousel': 'angular-carousel/dist',
        }
      },
      css: {
        files: {
          'Font-Awesome/css': 'Font-Awesome/css'
        }
      },
      fonts: {
        files: {
          'Font-Awesome/fonts': 'Font-Awesome/fonts'
        }
      },
    }
  });

  // Load NPM tasks
  require('load-grunt-tasks')(grunt);

  // Making grunt default to force in order not to break the project.
  grunt.option('force', true);

  // A Task for loading the configuration object
  grunt.task.registerTask('loadConfig', 'Task that loads the config into a grunt option.', function() {
    //var init =
    require('./config/init')();
    var config = require('./config/config');

    grunt.config.set('applicationJavaScriptFiles', config.assets.js);
    grunt.config.set('applicationCSSFiles', config.assets.css);
  });

  // Default task(s).
  grunt.registerTask('default', ['lint', 'concurrent:default']);

  // Debug task.
  grunt.registerTask('debug', ['lint', 'concurrent:debug']);

  // Lint task(s).
  grunt.registerTask('lint', ['jshint', 'csslint']);

  // Build task(s).
  grunt.registerTask('build', ['lint', 'loadConfig', 'ngmin', 'uglify', 'cssmin']);

  // Phonegap task(s).
  grunt.registerTask('phonegap', ['copy']);

  // Test task.
  grunt.registerTask('test', ['env:test', 'mochaTest', 'karma:unit']);
};
