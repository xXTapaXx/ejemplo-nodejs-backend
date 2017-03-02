// index.js
// Index Controller
// Controlador principal.


// Módulos
var express = require('express');
var router = express.Router();
//var languages = global.config.application.languages;

// Ruta principal
router.get('/', function(req, res) {
	res.render('index/index', { title: 'Skeleton NodeJS' });
});

// Ruta principal (i18n)
// El método siguiente es un ejemplo para trabajar con una aplicación en distintos
// idiomas. Para cada ruta definida, se tendrá que especificar otra ruta la cual
// recibirá como parámetro el idioma.
// En la ruta que no se especifíque el idioma, se utilizará el que esta definido por
// default en el archivo config.js
//
//router.get('/', function(req, res) {
//	global.i18n.setLanguage();
//	res.render('index/index', { title: global.lang.site.title });
//});
//
//router.get('/:lang(' + languages + ')', function(req, res) {
//	global.i18n.setLanguage(req.params.lang);
//	res.render('index/index', { title: global.lang.site.title });
//});

module.exports = router;
