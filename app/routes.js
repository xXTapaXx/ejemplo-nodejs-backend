module.exports = function(app) {

require('./controllers/login.js')(app);

require('./controllers/user.js')(app);

}
