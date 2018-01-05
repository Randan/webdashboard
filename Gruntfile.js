module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                sourceMap: true,
                outputStyle: 'compressed'
            },
            dist: {
                files: {
                    'assets/main.min.css': 'scss/main.scss'
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-sass');

    grunt.registerTask('default', 'build');
    grunt.registerTask('build', 'sass');

};
