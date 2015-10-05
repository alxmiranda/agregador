module.exports = function(grunt) {
	 'use strict';


	 var configTasks = {
		// Carregando os pacotes
		pkg: grunt.file.readJSON( 'package.json' ),

		// Diretorios
		dir:{
			dev:{
				css:'../assets/css',
				js:'../assets/js',
				sass:'../assets/sass'
			},
			dist:{
				css:'../../assets/css',
				js:'../../assets/js',
				sass:'../../assets/sass'
			}
		},

		// SASS
		sass: {

			// Compila .css minificado
			dist:{
				options:{
					style: 'compressed',
          sourcemap: 'none',
          noCache: true
				},
				files:{
					'<%= dir.dist.css %>/style.css': '<%= dir.dev.sass %>/estilo.scss'
				}
			},

			// Compila .css para leitura
			dev:{
				options:{
					style: 'extended',
          sourcemap: 'none',
          noCache: true
				},
				files:{
					'<%= dir.dev.css %>/style.css': '<%= dir.dev.sass %>/estilo.scss'
				}
			}
		}

		// Javascript

	 }

		grunt.initConfig(configTasks);

	  // Carrega os pacotes para realizar tarefas
	  grunt.loadNpmTasks('grunt-contrib-sass');
	  grunt.registerTask('default', ['sass']);
}