/**
 *
 * Copyright 2012 Adobe Systems Inc.;
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

/*global module:false*/

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        clean: {
            release: ['css']
        },

        topcoat: {
            options: {
                browsers: ['last 2 versions']
            },
            compile: {
                files: [{
                        src: 'test/fixtures/button-bar.css',
                        dest: 'css/button-bar.css'
                    }
                ]
            }
        },

        cssmin: {
            minify: {
                expand: true,
                cwd: 'css',
                src: ['*.css', '!*.min.css'],
                dest: 'css',
                ext: '.min.css'
            },
        },

        simplemocha: {
            all: {
                src: ['test/*.test.js']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-topcoat');
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['clean', 'build', 'test', 'release']);
    grunt.registerTask('build', ['topcoat']);
    grunt.registerTask('test', ['simplemocha']);
    grunt.registerTask('release', ['cssmin']);

};
