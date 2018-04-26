var express = require('express');
var router = express.Router();
const Users = require('../models/index').users;
const passport = require('passport')

/* login */
router.post('/login', passport.authenticate('local-login'), function(req, res, next) {
  res.json({username: req.username});
  res.json({password: req.password});
});

/* REVEALS - CONFIGURES FRONT END ROUTING */
router.get('/users', (req, res) => {
  Users.findById(req.params.id)
    .then(function(users){
      res.send(users);
      res.send("USERS ROUTE WORKS")
    });
  });
  
// CRUDE
    
    module.exports = function(passport) {
    /* Signup for new acc */
    router.post('/signup', passport.authenticate('local-signup'), function(req, res, next) {
      res.json({username: req.username});
      res.json({password: req.password});
      res.json({email: req.email});
    });

};