module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dist: {
				options: {
					sassDir: 'scss',
					cssDir: 'css',
					outputStyle: 'compressed'
				}
			}
		},

		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['compass']
			},
			jade: {
				files: "index.jade",
				tasks: ['jade']
			},
			imagemin: {
				files: ['src/**/*.{png,jpg,gif}'],
				tasks: ['imagemin']
			}			
		},
		jade: {
			compile: {
				options: {
					pretty: true,
				},
				files: {
					'index.html': 'index.jade'
				}
			}
		},
		imagemin: {
			dynamic: {                         
				files: [{
					expand: true,                 
					cwd: 'src/',                   
					src: ['**/*.{png,jpg,gif}'],   
					dest: 'src-comp/'               
				}]
			}
		},
		less: {
			bootstrapGrid: {
				files: {
					'css/bootstrapgrid.css': 'less/bootstrap-grid-only-master/grid.css.less'
				},
				options: {
					compress: true
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-criticalcss');


	grunt.registerTask('build', ['imagemin','compass','less', 'jade'])
	grunt.registerTask('default',['watch']);

}