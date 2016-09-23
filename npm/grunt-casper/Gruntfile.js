module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    casperjs: {
      options: {
        casperjsOptions: ["--foo=bar"]
      },
      files: ['test/casper.js']
    },

  });

  grunt.loadNpmTasks('grunt-casperjs');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['casperjs']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['test']);

};
