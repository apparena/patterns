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
                }
            }
        },
        run: {
            options: {
            },
            // Runt the icon generator https://github.com/Workshape/icon-font-generator
            icon_generator: {
                cmd: 'icon-font-generator',
                args: [
                    'source/icons/svg/*.svg',
                    '--out=source/fonts',
                    '--name=icons',
                    '--prefix=aa-icon',
                    '--normalize=true',
                    //'--tag=i',
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-run');
    grunt.loadTasks('build/scripts/grunt');
    grunt.registerTask('default', ['sass', 'run']);
};