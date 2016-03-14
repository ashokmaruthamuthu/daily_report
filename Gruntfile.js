module.exports = function(grunt){
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    clean:{
      build: ['www']
    },
    copy: {
      html: {
        src: 'app/index.html',
        dest: 'www/index.html'
      }
    },
    sass: {
      dist: {
        src: 'app/styles/index.scss',
        dest: 'www/styles/index.css'
      }
    },
    browserify: {
      dist: {
        src: 'app/index.js',
        dest: 'www/index.js',
        options: {
          transform: ['babelify']
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8001,
          base: 'www'
        }
      }
    },
    watch:{
      options: {
        spawn: true,
        livereload: true
      },
      js: {
        files: ['app/*.js','app/**/*.js', 'app/**/*.jsx'],
        tasks: ['browserify']
      },
      css: {
        files: ['app/**/*.scss'],
        tasks: ['sass']
      }
    }
  });
  grunt.registerTask('default', ['clean', 'copy', 'sass', 'browserify', 'connect:server', 'watch']);
  grunt.registerTask('build_staging', ['clean', 'copy', 'sass', 'browserify']);
};
