'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'public/css/app-arena-styles.css': 'source/css/app-arena-styles.scss',
                    'source/css/app-arena-styles.css': 'source/css/app-arena-styles.scss',
                    'public/css/easycontest-styles.css': 'source/css/easycontest-styles.scss',
                    'source/css/easycontest-styles.css': 'source/css/easycontest-styles.scss',
                }
            }
        }
    });

    grunt.loadTasks('build/scripts/grunt');
    grunt.registerTask('default', ['sass']);
};