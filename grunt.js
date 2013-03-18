module.exports = function(grunt) {

	grunt.initConfig({
		requirejs: {
			compile: {
				options: {
					name: 'test/app',
					baseUrl: './',
					mainConfigFile: 'test/app.js',
					out: 'test/actual.js'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('default', 'requirejs');

};