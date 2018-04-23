var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/index').user;
var bcrypt = require('bcrypt');

function userSignup(req, email, password, done) {
    User.findOne({
            where: {
                'email': email
            },
            attributes: ['id']
        })
        .then(function (user) {
            if (user) {
                return done(null, false);
            } else {
                var userToCreate = req.body;

                bcrypt.hash(userToCreate.password, 10, function(err, hash) {
                    userToCreate.password = hash;
                    User.create(userToCreate)
                        .then(function(createdRecord) {
                            createdRecord.password = undefined;
                            return done(null, createdRecord);
                        });
                });
            }
        });
}

function userLogin(email, password, done) {
    User.findOne({
        where: {
            'email' :  email
        }
    })
    .then(function(user) {
        if (!user) {
            return done(null, false)
        }
        // confirms that the passwords match
        bcrypt.compare(password, user.password, function(err, result) {
            user.password = undefined;
            return result ? done(null, user) : done(null, err);
        });
    });
}

module.exports = function (passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, userSignup)); 

    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
    }, userLogin));
};
