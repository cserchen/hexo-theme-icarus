module.exports = function(grunt){
  grunt.initConfig({
    // Clone Font Awesome and Fancybox from GitHub into a temporary directory
    gitclone: {
      fontawesome: {
        options: {
          repository: 'https://github.com/FortAwesome/Font-Awesome.git',
          directory: 'tmp/fontawesome'
        }
      },
      fancybox: {
        options: {
          repository: 'https://github.com/fancyapps/fancyBox.git',
          directory: 'tmp/fancybox'
        }
      }
    },

    // Copy the relevant assets into the theme's source directory
    copy: {
      // Copy both the CSS and font files so Font Awesome works out of the box
      fontawesome_css: {
        expand: true,
        cwd: 'tmp/fontawesome/css/',
        src: ['font-awesome.min.css'],
        dest: 'source/font-awesome/css/'
      },
      fontawesome_fonts: {
        expand: true,
        cwd: 'tmp/fontawesome/fonts/',
        src: ['**'],
        dest: 'source/font-awesome/fonts/'
      },
      fancybox: {
        expand: true,
        cwd: 'tmp/fancybox/source/',
        src: ['**'],
        dest: 'source/fancybox/'
      }
    },

    // Remove temporary clones and built assets
    _clean: {
      tmp: ['tmp'],
      fontawesome: ['source/font-awesome'],
      fancybox: ['source/fancybox']
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.renameTask('clean', '_clean');

  grunt.registerTask('fontawesome', ['gitclone:fontawesome', 'copy:fontawesome_css', 'copy:fontawesome_fonts', '_clean:tmp']);
  grunt.registerTask('fancybox',    ['gitclone:fancybox',    'copy:fancybox',                                   '_clean:tmp']);
  grunt.registerTask('default',     ['gitclone', 'copy', '_clean:tmp']);
  grunt.registerTask('clean',       ['_clean']);
};
