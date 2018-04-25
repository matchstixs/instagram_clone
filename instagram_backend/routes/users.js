var express = require('express');
var router = express.Router();

module.exports = function(passport) {
/* Signup for new acc */
router.post('/signup', passport.authenticate('local-signup'), function(req, res, next) {
  res.json({username: req.username});
  res.json({password: req.password});
  res.json({email: req.email});
});

/* login */
router.post('/login', passport.authenticate('local-login'), function(req, res, next) {
  res.json({username: req.username});
  res.json({password: req.password});
});

/* CONFIGURES FRONT END ROUTING */
router.get('/', (req, res) => {
  // function(req, res, next) {
  res.send("USERS ROUTE WORKS")
});

  // res.send('respond with a resource');
  //  res.json([{
  //    id: 1,
  //    name: "Hiccup",
  //    password: 'hiccup'
  //  },


return router;
};