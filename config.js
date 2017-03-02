// config.js
// JSON con todas las configuraciones generales del proyecto.


var config = {
	db: {
		host: '127.0.0.1',
		user: 'root',
		password: 'password',
		database: 'database',
		port: 3306,
		debug: true,
		socket: '/var/run/mysqld/mysqld.sock'
	},

	site: {
		url: 'http://localhost:5673',
		title: 'Sample Demo',
		language: 'es',
		html: {
			engine: 'pug',
			minify: false
		}
	},

	application: {
		controllers: {
			default: 'index'
		},
		langs: ['es', 'en'],
		languages: 'es|en'
	}
};

module.exports = config;