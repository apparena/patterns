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
            options: {},
            // Runt the icon generator https://github.com/Workshape/icon-font-generator
            icon_generator: {
                cmd: 'icon-font-generator',
                args: [
                    'source/icons/svg/*.svg',
                    '--out=source/fonts',
                    '--name=app-arena-icons',
                    '--prefix=aa-icon',
                    '--normalize=true',
                    '--tag=aa-icon',
                    '--htmltp=source/icons/font/template/html.hbs', // HTML handlebars template path (Optional)
                    '--csstp=source/icons/font/template/css.hbs', // CSS handlebars template path (Optional)
                    '--round=10e12', // Setup SVG rounding (Default: 10e12)
                    '--descent=150', // Offset applied to the baseline (Default: 0)
                    '--mono=true', // Make font monospace (Default: false)
                    '--height=1000', // Fixed font height value
                    '--center=true', // Center font horizontally
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-run');
    grunt.loadTasks('build/scripts/grunt');
    grunt.registerTask('default', ['sass', 'run']);
};