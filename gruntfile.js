module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options:{livereload:true},
      sass: {
        files: ['style/*.scss'],
        tasks: ['sass','cssmin','uglify'],
      }
    },

    uglify: {
        dist: {
            files: {
                'compiled/js/app.min.js': 'compiled/js/app.js',
                'compiled/js/myscript.min.js': 'js/myscript.js'
            }
        }
    },

    sass: {
      dist: {
        files: {
          'compiled/style/style.css' : 'style/style.scss'
        }
      }
    },

    cssmin: {
      my_target: {
        files: [{
          expand: true,
          cwd: 'compiled/style',
          src: ['*.css', '!*min.css'],
          dest: 'compiled/style',
          ext: '.min.css'
        }]
      }
    },

    express: {
      all: {
        options: {
          port: 9000,
          hostname: 'localhost',
          bases: ['.'],
          livereload: true
        }
      }
    }

  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-express');
  grunt.registerTask('default',["sass","uglify","cssmin"]);
  grunt.registerTask('compile',["sass","uglify","cssmin"]);
  grunt.registerTask('server',["express","watch"]);
};
