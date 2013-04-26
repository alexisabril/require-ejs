module.exports = function(grunt) {

	grunt.initConfig({
		requirejs: {
			compile: {
				options: {
					name: 'app',
					baseUrl: 'test',
					mainConfigFile: 'test/app.js',
					out: 'test/app.min.js',
					optimize: 'none'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('default', 'requirejs');

};