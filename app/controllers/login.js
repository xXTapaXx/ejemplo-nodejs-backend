"use-strict"

// load up the user model
var User  = require('../models/user');

module.exports = function(app) {

    // LOGIN ===============================
      app.post('/login', function(req, res) {

        console.log("Email: " + req.body.email);
        console.log("Password: " + req.body.password);

        res.send("Recibimos los datos");

      });
}
