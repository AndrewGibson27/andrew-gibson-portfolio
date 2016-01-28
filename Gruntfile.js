module.exports = function(grunt){
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-svgstore');

	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        watch: {
            buildcss: {
              files: ['assets/scss/**/*.scss'],
              tasks: ['sass']
            }
        },
        
        svgstore: {
            options: {
              prefix : 'icon-',
              svg: {
                
              }
            },
            social: {
              files: {
                'build/svg/social.svg': ['./assets/svg/social/*.svg'],
              }
            }
        },
        
        sass: {
    		buildhome: {
				options: {
					sourcemap: 'none'
				},
				
		  		files: [{
		  			expand: true,
		  			cwd: 'assets/scss',
		  			src: 'home.scss',
					dest: 'build/css',
        			ext: '.css'
		  		}]
			},
			
			buildwork: {
				options: {
					sourcemap: 'none'
				},
				
		  		files: [{
		  			expand: true,
		  			cwd: 'assets/scss',
		  			src: 'work.scss',
					dest: 'build/css',
        			ext: '.css'
		  		}]
			},
			
			buildabout: {
				options: {
					sourcemap: 'none'
				},
				
		  		files: [{
		  			expand: true,
		  			cwd: 'assets/scss',
		  			src: 'about.scss',
					dest: 'build/css',
        			ext: '.css'
		  		}]
			},
			
			buildresume: {
				options: {
					sourcemap: 'none'
				},
				
		  		files: [{
		  			expand: true,
		  			cwd: 'assets/scss',
		  			src: 'resume.scss',
					dest: 'build/css',
        			ext: '.css'
		  		}]
			},
			
			buildcontact: {
				options: {
					sourcemap: 'none'
				},
				
		  		files: [{
		  			expand: true,
		  			cwd: 'assets/scss',
		  			src: 'contact.scss',
					dest: 'build/css',
        			ext: '.css'
		  		}]
			}
    	}
    });
};