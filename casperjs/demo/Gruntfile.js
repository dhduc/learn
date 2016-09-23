/*
 * grunt-casperjs
 * https://github.com/ronaldlokers/grunt-casperjs
 *
 * Copyright (c) 2013 Ronald Lokers
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    casperjs: {
      options: {
        casperjsOptions: ["--foo=bar"]
      },
      files: ['test/casperjs.js']
    },

  });

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['casperjs']);

};