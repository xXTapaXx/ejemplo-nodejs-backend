// routes.js
// Archivo donde se agregan los controladores definidos al servidor.


// Se agregan las rutas de los controladores al servidor
module.exports = function (app) {
	var defaultController = require('./controllers/' + global.config.application.controllers.default);

	app.use('/', defaultController);
}