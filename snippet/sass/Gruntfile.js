module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Sass watch
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'scss/stylesheet.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        },
        // Casperjs test
        casperjs: {
            options: {
                casperjsOptions: ["--foo=bar"]
            },
            files: ['casperjs/screenshot.js']
        },
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-casperjs');
    grunt.registerTask('test', ['casperjs']);
    grunt.registerTask('default', ['test', 'watch']);
}