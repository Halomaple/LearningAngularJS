module.exports = function(grunt) {
	// Project configuration.
	grunt.initConfig({
		karma: {
			start: {
				configFile: 'karma.conf.js',
			},
			unit: {
				configFile: 'karma.conf.js'
			}
		},
		watch: {
			//run unit tests with karma (server needs to be already running)
			testTask: {
				files: [
				'demo/**/*.css',
				'demo/**/*.html',
				'demo/**/*.js',
				'demo/**/*.spec.js',
				'!demo/dist/templates.js'
				],
				tasks: ['ngtemplates:app', 'karma:start'] //NOTE the :run flag
			},
		},

		ngtemplates: {
			app: {
				src: ['demo/**/*.html'],
				dest: 'demo/dist/templates.js',
				options: {
					standalone: true
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-angular-templates');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//Default tasks
	grunt.registerTask('default', ['ngtemplates:app', 'karma:start', 'watch']);
};