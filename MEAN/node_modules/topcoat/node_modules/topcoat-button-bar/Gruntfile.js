/*global module:false*/
module.exports = function(grunt) {


    // Project configuration.
    grunt.initConfig({

        clean: {
            release: ['css']
        },

        stylus: {
            options: {
                paths: ['node_modules/topcoat-button-bar-base/src', 'node_modules/topcoat-button-base/src', 'node_modules/topcoat-button/src', 'node_modules/topcoat-utils/src/mixins', 'node_modules/topcoat-theme/src'],
                import: ['topcoat-button-base'],
                compress: false
            },

            mobilelight: {
                options: {
                    import: ['theme-topcoat-mobile-light']
                },

                files: [{
                    src: 'src/topcoat-button-bar.styl',
                    dest: 'css/topcoat-button-bar-mobile-light.css'
                }]
            },

            mobiledark: {
                options: {
                    import: ['theme-topcoat-mobile-dark']
                },

                files: [{
                    src: 'src/topcoat-button-bar.styl',
                    dest: 'css/topcoat-button-bar-mobile-dark.css'
                }]
            },

            desktoplight: {
                options: {
                    import: ['theme-topcoat-desktop-light']
                },
                files: [{
                    src: 'src/topcoat-button-bar.styl',
                    dest: 'css/topcoat-button-bar-desktop-light.css'
                }]
            },

            desktopdark: {
                options: {
                    import: ['theme-topcoat-desktop-dark']
                },

                files: [{
                    src: 'src/topcoat-button-bar.styl',
                    dest: 'css/topcoat-button-bar-desktop-dark.css'
                }]
            }
        },

        topdoc: {
            usageguides: {
                options: {
                    source: 'css',
                    destination: "demo",
                    template: "node_modules/topdoc-theme/",
                    templateData: {
                        "title": "Topcoat",
                        "subtitle": "CSS for clean and fast web apps",
                        "homeURL": "http://topcoat.io"
                    }
                }
            }
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'css',
                src: ['*.css', '!*.min.css'],
                dest: 'css',
                ext: '.min.css'
            }
        },

        simplemocha: {
            all: {
                src: ['test/*.test.js']
            }
        },

        watch: {
            files: 'src/**/*.styl',
            tasks: ['build', 'test']
        }
    });


    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-topdoc');

    // Default task.
    grunt.registerTask('default', ['clean', 'build', 'test', 'release']);
    grunt.registerTask('build', ['stylus']);
    grunt.registerTask('test', ['simplemocha']);
    grunt.registerTask('release', ['cssmin', 'topdoc']);

};
