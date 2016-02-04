module.exports = function(grunt) {
  grunt.initConfig({
    validation: {
      options: {
        reset: true
      },
      files: {
        src: ['*.html']
      }
    }
  });

  grunt.loadNpmTasks('grunt-html-validation');

  grunt.registerTask('default', ['validation']);
};
