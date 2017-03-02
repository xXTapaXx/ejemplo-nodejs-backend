// app.js
// Archivo principal del proyecto. Aquí se importan los módulos y se pasan
// las configuraciones al servidor.


// Importación de módulos
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

require('./system/prototype');
global.config = require('./config');

// Creación del servidor principal
var app = express();

// Configuración del idioma
global.i18n = require('./system/helpers/i18n');
global.i18n.setLanguage();

// Cofiguración de las vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', global.config.site.html.engine);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.locals = global.config;
app.locals.pretty = !global.config.site.html.minify;

// Configuracón para las cookies
app.use(cookieParser());

// Configuración del favicon
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Configuracipon para los archivos estático
app.use(express.static(path.join(__dirname, 'public')));

// Configuración del routeador
require('./routes')(app);

// Manejador del error 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Manejadores de errores

// Manejador de errores para desarrollo
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// Manejador de errores para producción
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
