/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        clean: {
            release: ['css']
        },

            stylus: {
        compile: {
                options: {
                    paths: ['src/mixins', 'node_modules/topcoat-utils/src/mixins', 'node_modules/topcoat-theme/src/includes'],
                    import: ['navigation-bar-mixin', 'utils', 'layout', 'position'],
                    compress: false
                },
                files: [{
                    src: 'src/navigation-bar.styl',
                    dest: 'css/navigation-bar.css'
                }]
            }
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'css',
                src: ['*.css', '!*.min.css'],
                dest: 'css',
                ext: '.min.css',
                options: {
                    banner: grunt.file.read('src/copyright.styl').toString()
                }
            }
        },

        jade: {
            compile: {
                expand: true,
                cwd: 'test/perf',
                src: ['*.jade'],
                dest: 'test/perf/',
                ext: '.test.html'
            }
        },

        simplemocha: {
            options: {
                ui: 'bdd',
                reporter: 'Nyan'
            },
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
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task.
    grunt.registerTask('default', ['clean', 'build', 'test', 'release']);
    grunt.registerTask('build', ['stylus', 'jade']);
    grunt.registerTask('test', ['simplemocha']);
    grunt.registerTask('release', ['cssmin']);

};
